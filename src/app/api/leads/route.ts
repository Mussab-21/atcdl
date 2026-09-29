import { NextRequest, NextResponse } from "next/server";
import { LeadSchema } from "@/lib/leads/schema";
import { calculateLeadScore } from "@/lib/leads/score";
import { sendLeadNotifications } from "@/lib/leads/notify";
import { verifyRateLimit } from "@/lib/leads/rate-limit";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // 1. CSRF Origin Verification
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");

    if (process.env.NODE_ENV === "production" && origin && host) {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json(
          { ok: false, error: "Cross-origin submission rejected." },
          { status: 403 }
        );
      }
    }

    // 2. IP Extraction & Hashing
    const forwardedFor = req.headers.get("x-forwarded-for");
    const rawIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "unknown";
    const ipHash = Buffer.from(rawIp).toString("base64").substring(0, 16);

    // 3. Multi-layer Persistent Rate Limiting (Upstash Redis + DB Fallback)
    const rateCheck = await verifyRateLimit(ipHash, 5, 1);
    if (!rateCheck.success) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions from this connection. Please try again later." },
        { status: 429 }
      );
    }

    // 4. Parse & Validate Body
    const body = await req.json();
    const parseResult = LeadSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: fieldErrors },
        { status: 400 }
      );
    }

    const leadData = parseResult.data;

    // 5. Honeypot check (Silent bot trap)
    if (leadData.honeypot && leadData.honeypot.length > 0) {
      return NextResponse.json({ ok: true, id: "silently-discarded" });
    }

    // 6. Cloudflare Turnstile Bot Verification (active when secret key configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileSecret.trim().length > 0) {
      if (!leadData.turnstileToken) {
        return NextResponse.json(
          { ok: false, error: "Cloudflare Turnstile token required." },
          { status: 400 }
        );
      }

      const turnstileFormData = new URLSearchParams();
      turnstileFormData.append("secret", turnstileSecret);
      turnstileFormData.append("response", leadData.turnstileToken);
      turnstileFormData.append("remoteip", rawIp);

      const cfRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: turnstileFormData,
      });

      const cfResult = await cfRes.json();
      if (!cfResult.success) {
        return NextResponse.json(
          { ok: false, error: "Bot challenge verification failed. Please refresh and try again." },
          { status: 403 }
        );
      }
    }

    // 7. Calculate 100-Point Score
    const scoring = calculateLeadScore(leadData);

    // 8. Persist Lead in Database (Persist First pattern)
    const newLead = await prisma.lead.create({
      data: {
        name: leadData.name,
        email: leadData.email,
        company: leadData.company || null,
        projectType: leadData.projectType,
        problem: leadData.problem,
        existingSystems: leadData.existingSystems || null,
        budget: leadData.budget,
        timeline: leadData.timeline,
        source: leadData.source || "website_brief",
        score: scoring.score,
        label: scoring.label,
        ipHash,
        userAgent: userAgent.substring(0, 200),
        crmStatus: "pending",
        notifyStatus: "processing",
      },
    });

    // 9. Audit Logging
    await prisma.auditLog.create({
      data: {
        event: "LEAD_CREATED",
        meta: JSON.stringify({
          leadId: newLead.id,
          score: scoring.score,
          label: scoring.label,
          type: leadData.projectType,
        }),
      },
    });

    // 10. Notifications (Discord + Email)
    const notifyRes = await sendLeadNotifications(leadData, scoring, newLead.id);

    // Update notification status in database
    await prisma.lead.update({
      where: { id: newLead.id },
      data: {
        notifyStatus: notifyRes.discord && notifyRes.email ? "delivered" : "partial",
      },
    });

    return NextResponse.json({ ok: true, id: newLead.id, score: scoring.score });
  } catch (error) {
    console.error("[Leads API Error]", error);
    return NextResponse.json(
      { ok: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

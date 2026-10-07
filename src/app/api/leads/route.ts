import { createHash } from "node:crypto";
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
    const ipHash = createHash("sha256").update(rawIp).digest("hex");

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

    // 6. Cloudflare Turnstile Bot Verification (active in production when configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (process.env.NODE_ENV === "production" && turnstileSecret && turnstileSecret.trim().length > 0) {
      if (!leadData.turnstileToken) {
        return NextResponse.json(
          { ok: false, error: "Verification challenge required. Please refresh and try again." },
          { status: 400 }
        );
      }

      try {
        const turnstileFormData = new URLSearchParams();
        turnstileFormData.append("secret", turnstileSecret);
        turnstileFormData.append("response", leadData.turnstileToken);
        turnstileFormData.append("remoteip", rawIp);

        const cfRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          body: turnstileFormData,
          signal: AbortSignal.timeout(10000),
        });

        const cfResult = await cfRes.json();
        if (!cfResult.success) {
          return NextResponse.json(
            { ok: false, error: "Bot challenge verification failed. Please refresh and try again." },
            { status: 403 }
          );
        }
      } catch (cfErr) {
        console.warn("[Turnstile Verification Exception]", cfErr);
        return NextResponse.json({ok:false,error:"Verification is temporarily unavailable. Please try again."},{status:503});
      }
    }

    // 7. Calculate 100-Point Score
    const scoring = calculateLeadScore(leadData);

    // 8. Confirm only inquiries that have been durably saved.
    let leadId: string;
    let dbSuccess = false;

    try {
      const newLead = await prisma.lead.create({
        data: {
          name: leadData.name,
          email: leadData.email,
          company: leadData.company || null,
          projectType: leadData.projectType,
          problem: leadData.context ? `[Context: ${leadData.context}]\n${leadData.problem}` : leadData.problem,
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
      leadId = newLead.id;
      dbSuccess = true;

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
      }).catch((e) => console.warn("[AuditLog DB Warning]", e));
    } catch (dbErr) {
      console.error("[Leads Database Persistence Failed]", dbErr);
      return NextResponse.json({ok:false,error:"Your inquiry could not be saved. Please try again; your details are still in the form."},{status:503});
    }

    // 10. Notifications (Discord + Email)
    const notifyRes = await sendLeadNotifications(leadData, scoring, leadId).catch(() => ({discord:false,email:false}));

    // Update notification status in database if available
    if (dbSuccess) {
      await prisma.lead.update({
        where: { id: leadId },
        data: {
          notifyStatus: notifyRes.discord && notifyRes.email ? "delivered" : "partial",
        },
      }).catch((e) => console.warn("[DB Status Update Warning]", e));
    }

    const response = NextResponse.json({ ok: true, id: leadId });
    response.cookies.set("atc-inquiry-receipt", leadId, {httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV === "production",path:"/contact",maxAge:3600});
    return response;
  } catch (error) {
    console.error("[Leads API Error]", error);
    return NextResponse.json(
      { ok: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

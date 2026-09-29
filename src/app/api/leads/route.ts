import { NextRequest, NextResponse } from "next/server";
import { LeadSchema } from "@/lib/leads/schema";
import { calculateLeadScore } from "@/lib/leads/score";
import { sendLeadNotifications } from "@/lib/leads/notify";
import { prisma } from "@/lib/prisma";

// Simple in-memory rate limiter per IP hash for local & baseline protection
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }); // 1 hour window
    return true;
  }

  if (entry.count >= 10) {
    return false; // Exceeded limit
  }

  entry.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP & Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Body
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

    // Honeypot check
    if (leadData.honeypot && leadData.honeypot.length > 0) {
      return NextResponse.json({ ok: true, id: "silently-discarded" });
    }

    // 3. Calculate Score
    const scoring = calculateLeadScore(leadData);

    // 4. Persist Lead in Database (Persist First pattern)
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
        ipHash: Buffer.from(ip).toString("base64").substring(0, 16),
        userAgent: userAgent.substring(0, 200),
        crmStatus: "pending",
        notifyStatus: "processing",
      },
    });

    // 5. Audit Logging
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

    // 6. Side Effects (Notifications)
    const notifyRes = await sendLeadNotifications(leadData, scoring, newLead.id);

    // Update notification status
    await prisma.lead.update({
      where: { id: newLead.id },
      data: {
        notifyStatus: notifyRes.slack && notifyRes.email ? "delivered" : "partial",
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

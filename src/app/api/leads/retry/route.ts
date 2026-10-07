import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadNotifications } from "@/lib/leads/notify";
import { LeadScoreResult } from "@/lib/leads/score";

/**
 * POST /api/leads/retry
 *
 * M3: Retry notification delivery for leads where notifyStatus = "partial" or "pending".
 * This route is meant to be called by a cron/scheduler (e.g. Vercel Cron, GitHub Actions,
 * or any external scheduler hitting the endpoint with the RETRY_SECRET header).
 *
 * Security: Requires a secret bearer token to prevent unauthorized triggering.
 * Set RETRY_SECRET in your environment variables.
 *
 * Returns a summary of which leads were retried and their updated status.
 */
export async function POST(req: NextRequest) {
  // Require secret to prevent unauthorized triggers
  const retrySecret = process.env.RETRY_SECRET;
  if (!retrySecret) return NextResponse.json({ok:false,error:"Retry service is not configured."},{status:503});
  if (retrySecret) {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || authHeader !== `Bearer ${retrySecret}`) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    // Find leads with failed/partial notifications in the last 7 days
    const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const failedLeads = await prisma.lead.findMany({
      where: {
        notifyStatus: { in: ["partial", "pending", "processing"] },
        createdAt: { gte: cutoff },
      },
      orderBy: { createdAt: "desc" },
      take: 20, // Max batch size per retry run
    });

    if (failedLeads.length === 0) {
      return NextResponse.json({ ok: true, retried: 0, message: "No failed leads to retry." });
    }

    const results: Array<{ id: string; before: string; after: string; success: boolean }> = [];

    for (const lead of failedLeads) {
      const scoring: LeadScoreResult = {
        score: lead.score,
        label: lead.label as "HOT" | "QUALIFIED" | "NURTURE" | "LOW",
        breakdown: { budgetScore: 0, timelineScore: 0, typeScore: 0, problemDepthScore: 0 },
      };

      // Reconstruct minimal LeadInput for notification
      const leadInput = {
        name: lead.name,
        email: lead.email,
        company: lead.company ?? undefined,
        projectType: lead.projectType as "Custom AI / GenAI" | "AI Agents & Automation" | "Enterprise Software" | "Web & Mobile Platforms" | "Not Sure / Needs Advisory",
        problem: lead.problem,
        existingSystems: lead.existingSystems ?? undefined,
        budget: lead.budget as "$100K+" | "$50K–$100K" | "$25K–$50K" | "$10K–$25K" | "$5K–$10K" | "Not sure yet",
        timeline: lead.timeline as "< 1 month" | "1–3 months" | "3–6 months" | "6+ months",
        source: lead.source ?? "website_brief",
        honeypot: "",
        turnstileToken: "",
      };

      try {
        const notifyRes = await sendLeadNotifications(leadInput, scoring, lead.id);
        const newStatus = notifyRes.discord && notifyRes.email ? "delivered" : "partial";

        await prisma.lead.update({
          where: { id: lead.id },
          data: { notifyStatus: newStatus },
        });

        // Audit log the retry
        await prisma.auditLog.create({
          data: {
            event: "LEAD_NOTIFICATION_RETRY",
            meta: JSON.stringify({
              leadId: lead.id,
              previousStatus: lead.notifyStatus,
              newStatus,
              discord: notifyRes.discord,
              email: notifyRes.email,
            }),
          },
        });

        results.push({
          id: lead.id,
          before: lead.notifyStatus,
          after: newStatus,
          success: newStatus === "delivered",
        });
      } catch (err) {
        console.error(`[Retry Error] Lead ${lead.id}:`, err);
        results.push({ id: lead.id, before: lead.notifyStatus, after: "failed", success: false });
      }
    }

    const delivered = results.filter((r) => r.success).length;
    const still_partial = results.filter((r) => !r.success).length;

    return NextResponse.json({
      ok: true,
      retried: results.length,
      delivered,
      still_partial,
      results,
    });
  } catch (error) {
    console.error("[Retry Route Error]", error);
    return NextResponse.json({ ok: false, error: "Server error during retry." }, { status: 500 });
  }
}

// Also allow GET for health-check / cron ping without executing retries
export async function GET() {
  const count = await prisma.lead.count({
    where: { notifyStatus: { in: ["partial", "pending", "processing"] } },
  }).catch(() => -1);

  return NextResponse.json({
    ok: true,
    pendingRetries: count,
    hint: count > 0 ? "POST this endpoint with Authorization: Bearer <RETRY_SECRET> to retry." : "All notifications delivered.",
  });
}

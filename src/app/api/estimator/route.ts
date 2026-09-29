import { NextRequest, NextResponse } from "next/server";
import { EstimatorInputSchema, calculateProjectEstimate } from "@/lib/estimator/calculate";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = EstimatorInputSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid estimator parameters.",
          details: parseResult.error.format(),
        },
        { status: 400 }
      );
    }

    const input = parseResult.data;
    const estimate = calculateProjectEstimate(input);

    // If an email was provided, store as a partial discovery record in DB
    if (input.email && input.email.trim().length > 0) {
      try {
        await prisma.lead.create({
          data: {
            name: input.name || "Estimator Prospect",
            email: input.email,
            company: input.company || null,
            projectType: input.offering,
            problem: `[Generated via Estimator] Target: ${input.offering}. Integration: ${input.integrationScope}. Deployment: ${input.deploymentTier}. Timeline: ${input.targetHorizon}. Estimated Bracket: ${estimate.budgetFormatted} (${estimate.weeksFormatted}).`,
            budget: estimate.budgetBracket,
            timeline: estimate.timelineBracket,
            source: "project_estimator",
            score: 45,
            label: "NURTURE",
            notifyStatus: "estimator_partial",
          },
        });
      } catch (dbErr) {
        console.warn("[Estimator DB Warning]", dbErr);
      }
    }

    // Also record audit log event
    try {
      await prisma.auditLog.create({
        data: {
          event: "project_estimator_completed",
          meta: JSON.stringify({
            offering: input.offering,
            budgetBracket: estimate.budgetBracket,
            timelineBracket: estimate.timelineBracket,
            minBudget: estimate.minBudget,
            maxBudget: estimate.maxBudget,
          }),
        },
      });
    } catch {
      // Non-fatal
    }

    // Build seamless pre-fill handoff URL to /contact
    const handoffParams = new URLSearchParams({
      projectType: input.offering,
      budget: estimate.budgetBracket,
      timeline: estimate.timelineBracket,
      summary: `Estimated scope: ${estimate.summary} (${estimate.budgetFormatted}, ${estimate.weeksFormatted})`,
    });

    const handoffUrl = `/contact?${handoffParams.toString()}`;

    return NextResponse.json({
      ok: true,
      estimate,
      handoffUrl,
    });
  } catch (error) {
    console.error("[Estimator API Error]", error);
    return NextResponse.json(
      { ok: false, error: "Internal error calculating project estimate." },
      { status: 500 }
    );
  }
}

import { z } from "zod";

export const EstimatorInputSchema = z.object({
  offering: z.enum([
    "Custom AI / GenAI",
    "AI Agents & Automation",
    "Enterprise Software",
    "Web & Mobile Platforms",
  ]),
  integrationScope: z.enum([
    "standalone", // Clean modern stack / minimal integration
    "moderate",   // 1–2 standard APIs (CRM, Stripe, S3)
    "enterprise", // Legacy ERP, SAP, Active Directory, on-prem
  ]),
  deploymentTier: z.enum([
    "standard_cloud",  // Managed multi-tenant cloud
    "dedicated_vpc",   // Isolated VPC with private endpoints
    "air_gapped",      // On-premises or air-gapped sovereign infra
  ]),
  targetHorizon: z.enum([
    "urgent",      // < 1 month
    "standard",    // 1–3 months
    "phased",      // 3–6 months
    "multi_phase", // 6+ months
  ]),
  email: z.string().email().optional().or(z.literal("")),
  name: z.string().optional(),
  company: z.string().optional(),
});

export type EstimatorInput = z.infer<typeof EstimatorInputSchema>;

export interface EstimateResult {
  minBudget: number;
  maxBudget: number;
  budgetFormatted: string;
  budgetBracket: "$5K–$10K" | "$10K–$25K" | "$25K–$50K" | "$50K–$100K" | "$100K+";
  minWeeks: number;
  maxWeeks: number;
  weeksFormatted: string;
  timelineBracket: "< 1 month" | "1–3 months" | "3–6 months" | "6+ months";
  confidence: "High" | "Medium" | "Discovery Dependent";
  recommendedArchitecture: string;
  breakdown: {
    baseCost: number;
    integrationFactor: number;
    securityTierFactor: number;
    timelineAdjustment: number;
  };
  summary: string;
}

export function calculateProjectEstimate(input: EstimatorInput): EstimateResult {
  // Base cost and timeline by Offering
  let baseMin = 15000;
  let baseMax = 35000;
  let baseWeeksMin = 4;
  let baseWeeksMax = 8;
  let recommendedArch = "Cloud microservices with containerized execution and Postgres persistence.";

  switch (input.offering) {
    case "Custom AI / GenAI":
      baseMin = 25000;
      baseMax = 65000;
      baseWeeksMin = 6;
      baseWeeksMax = 12;
      recommendedArch =
        "RAG pipeline with hybrid vector indexing, permission filtering, and private LLM endpoint integration.";
      break;
    case "AI Agents & Automation":
      baseMin = 18000;
      baseMax = 45000;
      baseWeeksMin = 4;
      baseWeeksMax = 10;
      recommendedArch =
        "Event-driven worker fleet with Redis message queue, OCR/document extractor, and two-way CRM sync.";
      break;
    case "Enterprise Software":
      baseMin = 35000;
      baseMax = 90000;
      baseWeeksMin = 8;
      baseWeeksMax = 16;
      recommendedArch =
        "Transactional relational core (PostgreSQL), multi-tier approval matrix, RBAC/SAML, and immutable audit logs.";
      break;
    case "Web & Mobile Platforms":
      baseMin = 20000;
      baseMax = 50000;
      baseWeeksMin = 6;
      baseWeeksMax = 12;
      recommendedArch =
        "Next.js App Router or React Native client with Edge CDN caching, design tokens, and sub-second data loading.";
      break;
  }

  // Multiplier for Integration Scope
  let integrationMult = 1.0;
  let extraWeeks = 0;
  if (input.integrationScope === "moderate") {
    integrationMult = 1.2;
    extraWeeks += 1;
  } else if (input.integrationScope === "enterprise") {
    integrationMult = 1.45;
    extraWeeks += 3;
  }

  // Multiplier for Deployment Tier
  let deploymentMult = 1.0;
  if (input.deploymentTier === "dedicated_vpc") {
    deploymentMult = 1.15;
    extraWeeks += 1;
  } else if (input.deploymentTier === "air_gapped") {
    deploymentMult = 1.35;
    extraWeeks += 2;
  }

  // Multiplier for Target Horizon
  let horizonMult = 1.0;
  if (input.targetHorizon === "urgent") {
    horizonMult = 1.2; // Rush sprint surcharge for overtime allocation
  } else if (input.targetHorizon === "multi_phase") {
    horizonMult = 1.1; // Program governance overhead
  }

  const calculatedMin = Math.round((baseMin * integrationMult * deploymentMult * horizonMult) / 1000) * 1000;
  const calculatedMax = Math.round((baseMax * integrationMult * deploymentMult * horizonMult) / 1000) * 1000;

  const totalWeeksMin = Math.max(3, baseWeeksMin + extraWeeks);
  const totalWeeksMax = Math.max(totalWeeksMin + 2, baseWeeksMax + extraWeeks);

  // Map to Contact Brief Budget Bracket
  let budgetBracket: EstimateResult["budgetBracket"] = "$25K–$50K";
  if (calculatedMax > 100000) {
    budgetBracket = "$100K+";
  } else if (calculatedMax > 50000) {
    budgetBracket = "$50K–$100K";
  } else if (calculatedMax > 25000) {
    budgetBracket = "$25K–$50K";
  } else if (calculatedMax > 10000) {
    budgetBracket = "$10K–$25K";
  } else {
    budgetBracket = "$5K–$10K";
  }

  // Map to Contact Brief Timeline Bracket
  let timelineBracket: EstimateResult["timelineBracket"] = "1–3 months";
  if (input.targetHorizon === "urgent" || totalWeeksMax <= 4) {
    timelineBracket = "< 1 month";
  } else if (totalWeeksMax <= 12) {
    timelineBracket = "1–3 months";
  } else if (totalWeeksMax <= 24) {
    timelineBracket = "3–6 months";
  } else {
    timelineBracket = "6+ months";
  }

  return {
    minBudget: calculatedMin,
    maxBudget: calculatedMax,
    budgetFormatted: `$${(calculatedMin / 1000).toFixed(0)}K – $${(calculatedMax / 1000).toFixed(0)}K`,
    budgetBracket,
    minWeeks: totalWeeksMin,
    maxWeeks: totalWeeksMax,
    weeksFormatted: `${totalWeeksMin}–${totalWeeksMax} weeks`,
    timelineBracket,
    confidence: input.integrationScope === "enterprise" ? "Discovery Dependent" : "High",
    recommendedArchitecture: recommendedArch,
    breakdown: {
      baseCost: (baseMin + baseMax) / 2,
      integrationFactor: integrationMult,
      securityTierFactor: deploymentMult,
      timelineAdjustment: horizonMult,
    },
    summary: `Targeted implementation for ${input.offering} with ${input.integrationScope} integration scope and ${input.deploymentTier.replace("_", " ")} security posture.`,
  };
}

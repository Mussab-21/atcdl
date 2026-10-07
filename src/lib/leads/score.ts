import { OFFERINGS } from "./offerings";
import { LeadInput } from "./schema";

const CONSUMER_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "mail.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
]);

export interface LeadScoreResult {
  score: number;
  label: "HOT" | "QUALIFIED" | "NURTURE" | "LOW";
  breakdown: Record<string, number>;
}

export function calculateLeadScore(lead: LeadInput): LeadScoreResult {
  let score = 0;
  const breakdown: Record<string, number> = {};

  // 1. Budget (0–40 points)
  let budgetScore = 3;
  const b = String(lead.budget).replace(/[–—]/g, "-");
  switch (b) {
    case "$100K+":
      budgetScore = 40;
      break;
    case "$50K-$100K":
      budgetScore = 30;
      break;
    case "$25K-$50K":
      budgetScore = 20;
      break;
    case "$10K-$25K":
      budgetScore = 10;
      break;
    case "$5K-$10K":
      budgetScore = 5;
      break;
    case "Not sure yet":
    default:
      budgetScore = 3;
      break;
  }
  score += budgetScore;
  breakdown.budget = budgetScore;

  // 2. Project Type (0–20 points)
  const typeScore = OFFERINGS.find(o => o.value === lead.projectType)?.score ?? 5;
  score += typeScore;
  breakdown.projectType = typeScore;

  // 3. Timeline (0–10 points)
  let timelineScore = 2;
  const t = String(lead.timeline).replace(/[–—]/g, "-");
  switch (t) {
    case "< 1 month":
      timelineScore = 10;
      break;
    case "1-3 months":
      timelineScore = 8;
      break;
    case "3-6 months":
      timelineScore = 5;
      break;
    case "6+ months":
    default:
      timelineScore = 2;
      break;
  }
  score += timelineScore;
  breakdown.timeline = timelineScore;

  // 4. Existing systems described (0–10 points)
  const systemsScore =
    lead.existingSystems && lead.existingSystems.trim().length > 15 ? 10 : 0;
  score += systemsScore;
  breakdown.existingSystems = systemsScore;

  // 5. Business email domain (0–10 points)
  const emailDomain = lead.email.split("@")[1]?.toLowerCase() ?? "";
  const isBusinessEmail =
    emailDomain.length > 0 && !CONSUMER_EMAIL_DOMAINS.has(emailDomain);
  const emailScore = isBusinessEmail ? 10 : 0;
  score += emailScore;
  breakdown.businessEmail = emailScore;

  // 6. Problem description >= 200 chars (0–10 points)
  const problemScore = lead.problem && lead.problem.trim().length >= 200 ? 10 : 0;
  score += problemScore;
  breakdown.problemDepth = problemScore;

  // Clamp score 0–100
  score = Math.min(100, Math.max(0, score));

  // Determine Label
  let label: "HOT" | "QUALIFIED" | "NURTURE" | "LOW" = "LOW";
  if (score >= 80) {
    label = "HOT";
  } else if (score >= 50) {
    label = "QUALIFIED";
  } else if (score >= 25) {
    label = "NURTURE";
  } else {
    label = "LOW";
  }

  return { score, label, breakdown };
}

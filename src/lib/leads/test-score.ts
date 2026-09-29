import { calculateLeadScore } from "./score";
import { LeadInput } from "./schema";

function assert(condition: boolean, msg: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${msg}`);
  }
}

export function runLeadScoringVerification() {
  console.log("Running Lead Scoring Unit Tests...");

  // 1. Test HOT lead ($100K budget + Enterprise Software + < 1 month + systems + business email + long problem)
  const hotLead: LeadInput = {
    name: "Enterprise CTO",
    email: "cto@megacorp.com",
    company: "MegaCorp Industries",
    projectType: "Enterprise Software", // 20
    budget: "$100K+", // 40
    timeline: "< 1 month", // 10
    existingSystems: "SAP S/4HANA with legacy Oracle DB clusters", // 10
    problem:
      "We need a complete automated invoice ingestion system that processes 50,000 multi-currency documents a month, matches line-items against PO numbers in SAP, and enforces two-party approval chains before releasing ledger disbursements to vendors across our APAC subsidiaries.", // >200 chars -> 10
  };

  const hotResult = calculateLeadScore(hotLead);
  assert(hotResult.score === 100, `Expected score 100, got ${hotResult.score}`);
  assert(hotResult.label === "HOT", `Expected label HOT, got ${hotResult.label}`);

  // 2. Test LOW lead (consumer email, minimal problem, low budget)
  const lowLead: LeadInput = {
    name: "Random Inquirer",
    email: "random@gmail.com", // 0 (consumer email)
    projectType: "Not Sure / Needs Advisory", // 5
    budget: "Not sure yet", // 3
    timeline: "6+ months", // 2
    problem: "Just looking around to see what you guys build.", // < 200 chars -> 0
  };

  const lowResult = calculateLeadScore(lowLead);
  assert(lowResult.score <= 20, `Expected low score <= 20, got ${lowResult.score}`);
  assert(lowResult.label === "LOW", `Expected label LOW, got ${lowResult.label}`);

  // 3. Test QUALIFIED lead
  const qualifiedLead: LeadInput = {
    name: "Finance Manager",
    email: "finance@fastscale.io", // 10 (business email)
    projectType: "AI Agents & Automation", // 15
    budget: "$25K–$50K", // 20
    timeline: "1–3 months", // 8
    existingSystems: "QuickBooks Online and HubSpot CRM", // 10
    problem: "Need document OCR extraction for vendor receipts.", // < 200 chars -> 0
  };

  const qualResult = calculateLeadScore(qualifiedLead);
  assert(qualResult.score === 63, `Expected score 63, got ${qualResult.score}`);
  assert(qualResult.label === "QUALIFIED", `Expected label QUALIFIED, got ${qualResult.label}`);

  console.log("✓ All lead scoring verification assertions passed!");
  return true;
}

runLeadScoringVerification();

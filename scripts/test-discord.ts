import fs from "fs";
import path from "path";

// Load .env manually without dotenv dependency
const envPath = path.resolve(".env");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const idx = trimmed.indexOf("=");
      const key = trimmed.slice(0, idx).trim();
      let val = trimmed.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

import { sendLeadNotifications } from "../src/lib/leads/notify";

async function main() {
  console.log("=== TESTING DISCORD WEBHOOK INTEGRATION ===");
  console.log("DISCORD_WEBHOOK_URL:", process.env.DISCORD_WEBHOOK_URL ? "CONFIGURED (hidden)" : "MISSING");

  const testLead = {
    name: "Marcus Vance",
    email: "marcus.vance@solaris-defense.com",
    company: "Solaris Aerospace & Defense",
    projectType: "Custom AI & GenAI" as const,
    budget: "$100K+" as const,
    timeline: "< 1 month" as const,
    problem: "We require an enterprise private AI knowledge engine and custom agent pipeline to index and query 50,000 regulatory documents with strict citations and role-based access control.",
    existingSystems: "AWS GovCloud, PostgreSQL 16, and Microsoft SharePoint",
    source: "website_brief",
  };

  const scoring = {
    score: 95,
    label: "HOT" as const,
    breakdown: {
      budgetScore: 40,
      timelineScore: 25,
      problemLengthScore: 15,
      companyProvidedScore: 15,
    },
  };

  const leadId = "lead_test_" + Math.random().toString(36).substring(2, 9);

  console.log(`Sending lead ${leadId} to Discord webhook...`);
  const result = await sendLeadNotifications(testLead, scoring, leadId);
  console.log("Result:", result);

  if (result.discord) {
    console.log("✓ SUCCESS: Discord message was successfully delivered to the channel!");
  } else {
    console.error("✗ FAILURE: Discord webhook did not succeed.");
    process.exit(1);
  }
}

main().catch(console.error);

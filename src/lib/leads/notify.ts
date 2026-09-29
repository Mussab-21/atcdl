import { LeadInput } from "./schema";
import { LeadScoreResult } from "./score";

export async function sendLeadNotifications(
  lead: LeadInput,
  scoring: LeadScoreResult,
  leadId: string
): Promise<{ discord: boolean; email: boolean }> {
  let discordSuccess = false;
  let emailSuccess = false;

  const isHot = scoring.label === "HOT";
  const title = isHot
    ? "🔥 [HOT LEAD] New Project Brief Received"
    : `[${scoring.label} LEAD] New Project Brief Received`;

  // Color mapping for Discord embed
  let embedColor = 7305866; // Grey (NURTURE / LOW)
  if (scoring.label === "HOT") {
    embedColor = 16729344; // Orange-Red (#FF4500)
  } else if (scoring.label === "QUALIFIED") {
    embedColor = 5082623; // NIMBRIX Blue (#4D8DFF)
  } else if (scoring.label === "NURTURE") {
    embedColor = 15972427; // Amber (#F3B84B)
  }

  // 1. Discord Webhook Notification
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (discordWebhookUrl && discordWebhookUrl.startsWith("https://discord.com/api/webhooks")) {
    try {
      const discordPayload = {
        content: isHot
          ? `🔥 **HOT LEAD ALERT** — ${lead.name} (${lead.company || "Direct"}) submitted an enterprise brief!`
          : `📬 **New Lead Received** — ${lead.name} (${lead.projectType})`,
        embeds: [
          {
            title,
            color: embedColor,
            description: `A new client project brief was submitted and scored by the NIMBRIX pipeline.`,
            fields: [
              { name: "Prospect Name", value: lead.name, inline: true },
              { name: "Work Email", value: lead.email, inline: true },
              { name: "Company", value: lead.company || "Not provided", inline: true },
              { name: "Project Type", value: lead.projectType, inline: true },
              { name: "Budget", value: lead.budget, inline: true },
              { name: "Timeline", value: lead.timeline, inline: true },
              {
                name: "Score & Label",
                value: `**${scoring.score}/100** — \`${scoring.label}\``,
                inline: true,
              },
              { name: "Lead ID", value: `\`${leadId}\``, inline: true },
              { name: "Source", value: lead.source || "website_brief", inline: true },
              {
                name: "Existing Systems",
                value: lead.existingSystems && lead.existingSystems.trim().length > 0
                  ? lead.existingSystems
                  : "None specified",
                inline: false,
              },
              {
                name: "Operational Problem Statement",
                value:
                  lead.problem.length > 1024
                    ? lead.problem.slice(0, 1020) + "..."
                    : lead.problem,
                inline: false,
              },
            ],
            footer: {
              text: "NIMBRIX Inbound Intelligence Pipeline • v1.0",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const res = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      });

      discordSuccess = res.ok;
      if (!res.ok) {
        const errorText = await res.text();
        console.error(`[Discord Webhook Error: ${res.status}]`, errorText);
      } else {
        console.log(`[Discord Webhook Delivered] Lead ID: ${leadId} (${scoring.label})`);
      }
    } catch (err) {
      console.error("[Discord Webhook Exception]", err);
    }
  } else {
    console.log(`[DISCORD NOTIFICATION MOCK]\nLead ${leadId} - ${scoring.label} (${scoring.score}/100)`);
    discordSuccess = true;
  }

  // 2. Email Notification (Resend)
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const toEmail = process.env.LEADS_TO_EMAIL || "leads@nimbrix.com";
      const emailText = `
${title}
------------------------------------
• Name: ${lead.name}
• Email: ${lead.email}
• Company: ${lead.company || "Not provided"}
• Project Type: ${lead.projectType}
• Budget: ${lead.budget}
• Timeline: ${lead.timeline}
• Score: ${scoring.score}/100 (${scoring.label})
• Lead ID: ${leadId}

Problem Statement:
${lead.problem}

Existing Systems:
${lead.existingSystems || "None specified"}
`.trim();

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NIMBRIX Inbound <leads@nimbrix.com>",
          to: [toEmail],
          subject: `${title}: ${lead.name} (${lead.company || "Direct"})`,
          text: emailText,
        }),
      });
      emailSuccess = res.ok;
    } catch (err) {
      console.error("[Email Notification Error]", err);
    }
  } else {
    emailSuccess = true;
  }

  return { discord: discordSuccess, email: emailSuccess };
}

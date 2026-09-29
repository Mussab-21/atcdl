import { LeadInput } from "./schema";
import { LeadScoreResult } from "./score";

export async function sendLeadNotifications(
  lead: LeadInput,
  scoring: LeadScoreResult,
  leadId: string
): Promise<{ slack: boolean; email: boolean }> {
  let slackSuccess = false;
  let emailSuccess = false;

  const isHot = scoring.label === "HOT";
  const prefix = isHot ? "🔥 [HOT LEAD]" : `[${scoring.label} LEAD]`;

  const payloadText = `
${prefix} New Project Brief Received
------------------------------------
• Name: ${lead.name}
• Email: ${lead.email}
• Company: ${lead.company || "Not provided"}
• Project Type: ${lead.projectType}
• Budget: ${lead.budget}
• Timeline: ${lead.timeline}
• Score: ${scoring.score}/100 (${scoring.label})
• Lead ID: ${leadId}

Problem Description:
${lead.problem}

Existing Systems:
${lead.existingSystems || "None specified"}
`.trim();

  // 1. Slack Webhook Notification
  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  if (slackUrl && slackUrl.startsWith("https://hooks.slack.com")) {
    try {
      const res = await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `${prefix} ${lead.name} (${lead.company || "Direct"}) - ${lead.budget}`,
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: `${prefix} New Project Brief`,
                emoji: true,
              },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*Prospect:*\n${lead.name}` },
                { type: "mrkdwn", text: `*Email:*\n${lead.email}` },
                { type: "mrkdwn", text: `*Company:*\n${lead.company || "N/A"}` },
                { type: "mrkdwn", text: `*Budget:*\n${lead.budget}` },
                { type: "mrkdwn", text: `*Score:*\n*${scoring.score}/100* (${scoring.label})` },
                { type: "mrkdwn", text: `*Timeline:*\n${lead.timeline}` },
              ],
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Problem Statement:*\n>${lead.problem.replace(/\n/g, "\n>")}`,
              },
            },
          ],
        }),
      });
      slackSuccess = res.ok;
    } catch (err) {
      console.error("[Slack Notification Error]", err);
    }
  } else {
    // In dev / unconfigured state, log clearly to server console
    console.log(`[LEAD NOTIFICATION MOCK - SLACK]\n${payloadText}`);
    slackSuccess = true;
  }

  // 2. Email Notification
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      // In production, invoke Resend API
      const toEmail = process.env.LEADS_TO_EMAIL || "leads@nimbrix.com";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NIMBRIX Inbound <leads@nimbrix.com>",
          to: [toEmail],
          subject: `${prefix} ${lead.name} (${lead.company || "Direct"}) - ${lead.projectType}`,
          text: payloadText,
        }),
      });
      emailSuccess = res.ok;
    } catch (err) {
      console.error("[Email Notification Error]", err);
    }
  } else {
    console.log(`[LEAD NOTIFICATION MOCK - EMAIL]\nTo: ${process.env.LEADS_TO_EMAIL || "leads@nimbrix.com"}\n${payloadText}`);
    emailSuccess = true;
  }

  return { slack: slackSuccess, email: emailSuccess };
}

/** Stable values shared by intake, URL handoffs, validation and qualification. */
export const OFFERINGS = [
  { value: "Not Sure / Needs Advisory", label: "Help me choose", score: 5 },
  { value: "Custom AI / GenAI", label: "AI & knowledge systems", score: 20 },
  { value: "AI Agents & Automation", label: "Workflow automation", score: 15 },
  { value: "Enterprise Software", label: "Enterprise software", score: 20 },
  {
    value: "Web & Mobile Platforms",
    label: "Web & mobile platforms",
    score: 10,
  },
  { value: "System Integration", label: "Connect existing systems", score: 15 },
  {
    value: "Cloud & Infrastructure",
    label: "Cloud & infrastructure",
    score: 10,
  },
  { value: "Cybersecurity", label: "Security & resilience", score: 10 },
  {
    value: "Managed Services",
    label: "Managed technology services",
    score: 10,
  },
] as const;
const aliases: Record<string, string> = {
  "custom-ai": "Custom AI / GenAI",
  "ai-agents": "AI Agents & Automation",
  "enterprise-software": "Enterprise Software",
  "web-mobile-platforms": "Web & Mobile Platforms",
  "AI & Intelligent Systems": "Custom AI / GenAI",
  "Software Development": "Enterprise Software",
  "Automate a process": "AI Agents & Automation",
  "Build new software": "Enterprise Software",
  "Improve an existing system": "Enterprise Software",
  "Connect systems": "System Integration",
  "Apply AI": "Custom AI / GenAI",
  "Move to the cloud": "Cloud & Infrastructure",
  "Improve security": "Cybersecurity",
  "Technology consulting": "Not Sure / Needs Advisory",
  "Technology Consulting": "Not Sure / Needs Advisory",
};
export function resolveOffering(value: string | null | undefined): string {
  return (
    OFFERINGS.find((o) => o.value === value)?.value ||
    aliases[value || ""] ||
    OFFERINGS[0].value
  );
}

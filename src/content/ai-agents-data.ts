export interface AgentPackage {
  id: "task-agent" | "workflow-agent" | "autonomous-operations";
  name: string;
  level: "01" | "02" | "03";
  tagline: string;
  description: string;
  timeline: string;
  isPopular?: boolean;
  pricing: {
    PKR: {
      from: string;
      range: string;
      context: string;
    };
    USD: {
      from: string;
      range: string;
      context: string;
    };
  };
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverableSummary: string;
  ctaText: string;
}

export interface AgentHotspotItem {
  id: "understand" | "reason" | "act" | "escalate";
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  keyOutputs: string[];
}

export interface AgentDeliveryStage {
  step: string;
  id: "map" | "design" | "build" | "deploy";
  name: string;
  tagline: string;
  duration: string;
  copy: string;
  activities: string[];
  deliverable: string;
}

export interface AgentFitScenario {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
}

export const AI_AGENTS_DATA = {
  hero: {
    eyebrow: "AI AGENTS & AUTONOMOUS AUTOMATION",
    title: "Give repetitive business work to AI workers.",
    subtitle:
      "Instead of your team spending hours copying information between tools, ATCDL builds AI workers that understand incoming requests, make verified decisions, update your systems, and escalate important exceptions to people.",
    primaryCta: "Discuss Your Project",
    secondaryCta: "See How It Works",
  },

  hotspots: [
    {
      id: "understand",
      step: "01",
      title: "Understand Incoming Work",
      subtitle: "Parsing unstructured emails, PDFs & webhooks",
      description:
        "The AI worker monitors incoming channels 24/7. It reads unstructured emails, attachments, purchase orders, and form submissions, extracting clean structured records with configured field validation.",
      badge: "Ingestion & OCR",
      keyOutputs: [
        "Email, webhook & PDF automated listeners",
        "Deterministic JSON schema extraction",
        "Multi-language & tabular data parsing",
      ],
    },
    {
      id: "reason",
      step: "02",
      title: "Reason & Validate Rules",
      subtitle: "Deterministic logic before taking any action",
      description:
        "The worker evaluates your exact operational rules: checking stock levels, verifying credit limits, matching invoices against purchase orders, and validating math before any transaction executes.",
      badge: "Decision Logic",
      keyOutputs: [
        "Company policy & mathematical cross-checks",
        "Threshold boundary verification",
        "Schema constraints and human review",
      ],
    },
    {
      id: "act",
      step: "03",
      title: "Execute in Systems",
      subtitle: "Direct API updates in ERP, CRM & Accounting",
      description:
        "Once verified, the AI worker updates your production tools automatically. It creates records in Salesforce, triggers invoices in QuickBooks, updates SAP inventory, and sends confirmations.",
      badge: "System Dispatch",
      keyOutputs: [
        "Bi-directional API & database mutations",
        "Automated retries with idempotent deduplication",
        "Live Slack / Teams status notifications",
      ],
    },
    {
      id: "escalate",
      step: "04",
      title: "Escalate to People",
      subtitle: "Human approval on high-value exceptions",
      description:
        "If an order exceeds a budget threshold, contains missing data, or raises an edge-case discrepancy, the AI pauses and alerts a human manager with a single-click Approve / Reject card.",
      badge: "Human Oversight",
      keyOutputs: [
        "One-click Slack & Teams approval notifications",
        "Configurable financial & policy escalation triggers",
        "Full audit trail for compliance review",
      ],
    },
  ] as AgentHotspotItem[],

  packages: [
    {
      id: "task-agent",
      level: "01",
      name: "Task Agent",
      tagline: "One repetitive operational task automated end-to-end.",
      description:
        "Automate one specific high-volume bottleneck — such as extracting incoming invoice emails and updating your accounting system.",
      timeline: "2–4 weeks",
      pricing: {
        PKR: {
          from: "PKR 150,000",
          range: "PKR 150,000 – 400,000",
          context: "Fixed milestone delivery for domestic SMEs",
        },
        USD: {
          from: "$8,000",
          range: "$8,000 – $20,000",
          context: "Turnkey delivery for international operations",
        },
      },
      capabilities: [
        { title: "1 Dedicated Task Queue", description: "Inbound email, PDF, or webhook processing" },
        { title: "Deterministic Extraction", description: "Validates fields against strict schema rules" },
        { title: "Single Target Sync", description: "Direct updates into your CRM or database" },
        { title: "Email/Slack Alerts", description: "Instant notification when exceptions occur" },
      ],
      deliverableSummary: "Deployed task agent + single-system adapter + error alert queue + 30-day warranty.",
      ctaText: "Choose Task Agent",
    },
    {
      id: "workflow-agent",
      level: "02",
      name: "Workflow Agent",
      isPopular: true,
      tagline: "Connect multiple business steps with human oversight.",
      description:
        "Coordinate multi-step business handoffs spanning 2–3 enterprise systems with automated policy checks and manager approval gates.",
      timeline: "5–8 weeks",
      pricing: {
        PKR: {
          from: "PKR 400,000",
          range: "PKR 400,000 – 1,200,000",
          context: "Cross-department workflow automation",
        },
        USD: {
          from: "$25,000",
          range: "$25,000 – $75,000",
          context: "Multi-system enterprise deployment",
        },
      },
      capabilities: [
        { title: "Multi-Step Orchestration", description: "Spans 2–3 systems (e.g. Email → CRM → ERP)" },
        { title: "Human Review Dashboard", description: "Approve or adjust flagged edge cases with 1 click" },
        { title: "Self-Healing Retries", description: "Automatic recovery from external API timeouts" },
        { title: "Audit Trail Logging", description: "Timestamped records of every decision and action" },
      ],
      deliverableSummary: "Multi-system workflow engine + manager review dashboard + Slack integration + SLA support.",
      ctaText: "Start with Workflow Agent",
    },
    {
      id: "autonomous-operations",
      level: "03",
      name: "Autonomous Operations",
      tagline: "An AI workforce coordinating complex operations.",
      description:
        "A fleet of specialized agents collaborating across department boundaries with comprehensive governance, air-gapped hosting, and 24/7 SLA.",
      timeline: "8–14 weeks",
      pricing: {
        PKR: {
          from: "Custom Quote",
          range: "Tailored to operation scale",
          context: "Founding enterprise partner cohort",
        },
        USD: {
          from: "$75,000",
          range: "$75,000 – $150,000+",
          context: "Full-scale custom agent workforce",
        },
      },
      capabilities: [
        { title: "Multi-Agent Swarm Mesh", description: "Specialized agents for Finance, Ops, Logistics & Sales" },
        { title: "Air-Gapped VPC Hosting", description: "Runs on private infrastructure with zero internet leaks" },
        { title: "Cryptographic Audit Logs", description: "SOC2/ISO tamper-proof execution verification" },
        { title: "Dedicated Lead Architect", description: "Direct partner access with committed 24/7 Severity-1 SLA" },
      ],
      deliverableSummary: "Enterprise agent mesh + full source code ownership + private VPC infrastructure as code.",
      ctaText: "Discuss Autonomous Operations",
    },
  ] as AgentPackage[],

  comparisonMatrix: [
    { name: "24/7 Inbound Event Monitoring (Email / Webhook)", task: true, workflow: true, auto: true },
    { name: "Unstructured Document & PDF Extraction", task: true, workflow: true, auto: true },
    { name: "Single Destination System Sync (CRM or DB)", task: true, workflow: true, auto: true },
    { name: "Deterministic Schema Validation & Math Checks", task: true, workflow: true, auto: true },
    { name: "Multi-System Orchestration (ERP + CRM + Billing)", task: false, workflow: true, auto: true },
    { name: "Human-in-the-Loop Review & Approval Dashboard", task: false, workflow: true, auto: true },
    { name: "Automated Error Recovery & Dead-Letter Queues", task: false, workflow: true, auto: true },
    { name: "Slack & Microsoft Teams Approval Bot Cards", task: false, workflow: true, auto: true },
    { name: "Multi-Agent Swarm Collaboration Mesh", task: false, workflow: false, auto: true },
    { name: "Air-Gapped / Private Cloud Self-Hosting", task: false, workflow: false, auto: true },
    { name: "Historical Event Replay & State Rollback", task: false, workflow: false, auto: true },
    { name: "Dedicated 24/7 Severity-1 SLA Support", task: false, workflow: false, auto: true },
  ],

  deliveryStages: [
    {
      step: "01",
      id: "map",
      name: "Map the Work",
      tagline: "Process Audit & Friction Discovery",
      duration: "Week 1–2",
      copy: "We identify where your team spends hours repeating manual tasks. We shadow your team, audit manual data transfers, and map repetitive checklists.",
      activities: [
        "Audit existing manual copy-paste handoffs",
        "Collect sample emails, PDFs, and edge-case exceptions",
        "Define strict acceptance criteria and business validation rules",
      ],
      deliverable: "Process Blueprint & Decision Tree Map",
    },
    {
      step: "02",
      id: "design",
      name: "Design the Decisions",
      tagline: "Rule Constraints & Human Escalations",
      duration: "Week 2–3",
      copy: "We define what the AI can decide automatically and when a human must step in. Clear thresholds keep your business safe from unintended actions.",
      activities: [
        "Define numerical threshold rules (e.g. approval for orders > $5,000)",
        "Structure Zod/Pydantic schemas for all system inputs & outputs",
        "Design human-in-the-loop escalation notifications in Slack/Teams",
      ],
      deliverable: "Contract Schema & Human Escalation Policy",
    },
    {
      step: "03",
      id: "build",
      name: "Build the Agent",
      tagline: "Tool Connectors & Reasoning Engine",
      duration: "Week 3–6",
      copy: "We build the AI worker, connect its software tools, and configure its reasoning engine. We execute extensive unit tests with historical edge cases.",
      activities: [
        "Build secure API adapters for your ERP, CRM, and accounting software",
        "Implement idempotent action dispatchers with retry queues",
        "Test against 500+ historical transactions to verify zero errors",
      ],
      deliverable: "Live Staging Worker Processing Test Batches",
    },
    {
      step: "04",
      id: "deploy",
      name: "Deploy & Improve",
      tagline: "Phased Pilot & Continuous Monitoring",
      duration: "Week 6+",
      copy: "We launch the system into production in a supervised pilot, monitor its performance 24/7, and train your team on exception review dashboards.",
      activities: [
        "Supervised pilot deployment on low-risk transaction queues",
        "Instrument live Prometheus/Grafana latency & execution dashboards",
        "Full operational runbook handover with committed SLA coverage",
      ],
      deliverable: "Autonomous Production Worker + Full Source Code + SLA",
    },
  ] as AgentDeliveryStage[],

  postContactSteps: [
    { num: "01", label: "Contact ATCDL", desc: "Share your manual operational bottleneck" },
    { num: "02", label: "Discovery Call", desc: "15–30 min deep-dive into tools & process" },
    { num: "03", label: "We Map The Work", desc: "Detailed workflow blueprint & decision boundaries" },
    { num: "04", label: "We Design The Agent", desc: "Exact scope contract with fixed milestones" },
    { num: "05", label: "Sprint Builds", desc: "Weekly working demos with your real test data" },
    { num: "06", label: "Live Supervised Pilot", desc: "Test agent in parallel with human team" },
    { num: "07", label: "Full Deployment", desc: "24/7 automated operation with SLA guarantees" },
  ],

  fitScenarios: [
    {
      id: "data-entry",
      title: "Repetitive Data Entry",
      subtitle: "Manual Copy-Pasting",
      problem: "Staff spend 15+ hours each week re-typing invoice details, shipping manifests, or order emails into your ERP.",
      solution: "An automated worker that reads the incoming file and updates your ERP in seconds.",
    },
    {
      id: "volume",
      title: "High Request Volume",
      subtitle: "Operational Backlogs",
      problem: "Your team receives more customer requests, vendor quotes, or support tickets than staff can process during business hours.",
      solution: "24/7 automated triage and processing that prevents backlogs and reduces response times to seconds.",
    },
    {
      id: "rules",
      title: "Rule-Based Decisions",
      subtitle: "Predictable Logic",
      problem: "Routine decisions (e.g., verifying vendor credit, matching invoice line-items) follow fixed checklists that consume valuable management time.",
      solution: "Grounded reasoning models that cross-check rules mathematically and escalate only genuine exceptions.",
    },
    {
      id: "multi-system",
      title: "Multi-System Work",
      subtitle: "Disconnected Software Tools",
      problem: "Completing one single business task requires updating Salesforce, generating a Jira ticket, and creating a QuickBooks ledger entry.",
      solution: "A coordinated workflow agent that synchronizes all three tools with zero manual copy-pasting.",
    },
  ] as AgentFitScenario[],

  technicalSpecs: [
    {
      title: "Deterministic Tool Calling & Schema Contracts",
      content:
        "Every agent action is constrained by strict Zod or Pydantic schemas. The AI model cannot execute raw or arbitrary commands — it must produce strongly typed function calls validated against our enterprise middleware before execution.",
    },
    {
      title: "Idempotency & Dead-Letter Retry Queues",
      content:
        "All system mutations use unique cryptographic idempotency keys. If a target ERP API experiences a temporary timeout or network glitch, the transaction automatically backs off and retries safely without creating duplicate records.",
    },
    {
      title: "Encrypted Credential Vault & OAuth2 Security",
      content:
        "API tokens and database credentials are stored in customer-dedicated encrypted key vaults (AWS Secrets Manager / HashiCorp Vault). The agent receives ephemeral, least-privilege tokens scoped strictly to required operations.",
    },
    {
      title: "Human-in-the-Loop State Machine Persistence",
      content:
        "Workflows requiring manager approval are paused deterministically using durable execution engines (Temporal / PostgreSQL state machines). The workflow can sleep for hours or days waiting for a Slack/Teams button click without consuming compute.",
    },
    {
      title: "Observability & Reasoning Trace Auditing",
      content:
        "Complete OpenTelemetry distributed tracing captures every prompt, token input, intermediate reasoning step, and destination system response, enabling instant forensic audits for SOC2 and ISO compliance.",
    },
  ],
};

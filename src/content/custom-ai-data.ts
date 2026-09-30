export interface CustomAiPackage {
  id: "starter" | "workspace" | "command-center";
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

export interface HotspotItem {
  id: "assistant" | "knowledge" | "security" | "integrations";
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  keyOutputs: string[];
}

export interface DeliveryStage {
  step: string;
  id: "discover" | "connect" | "build" | "launch";
  name: string;
  tagline: string;
  duration: string;
  copy: string;
  activities: string[];
  deliverable: string;
}

export interface FitScenario {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
}

export const CUSTOM_AI_DATA = {
  hero: {
    eyebrow: "CUSTOM AI SYSTEMS",
    title: "Give your team an AI that understands your business.",
    subtitle:
      "Turn your company's documents, knowledge, and internal information into a private AI assistant your team can actually use.",
    primaryCta: "Discuss Your AI System",
    secondaryCta: "See How It Works",
  },

  hotspots: [
    {
      id: "assistant",
      step: "01",
      title: "AI Assistant Interface",
      subtitle: "Everyday workspace for employees",
      description:
        "A private, intuitive web interface where your team asks questions in plain language and receives exact answers with page citations.",
      badge: "User Interface",
      keyOutputs: [
        "Sub-second natural language answers",
        "Exact PDF page & footnote citations",
        "Role-tailored prompt templates",
      ],
    },
    {
      id: "knowledge",
      step: "02",
      title: "Business Knowledge Engine",
      subtitle: "Your private, organized data vault",
      description:
        "We convert scattered PDFs, SOPs, spreadsheets, contracts, and manuals into an encrypted, continuously synchronized knowledge base.",
      badge: "Data Layer",
      keyOutputs: [
        "Automatic document sync & chunking",
        "Semantic vector search + keyword search",
        "Zero public LLM training leakage",
      ],
    },
    {
      id: "security",
      step: "03",
      title: "Control & Security Layer",
      subtitle: "Role-based permissions & audit trail",
      description:
        "Ensure staff only access documents appropriate for their clearance. Every query is logged, verified, and protected by enterprise security.",
      badge: "Governance",
      keyOutputs: [
        "Active Directory & SSO integration",
        "Strict departmental permission boundaries",
        "Full query audit logging & export",
      ],
    },
    {
      id: "integrations",
      step: "04",
      title: "Business Integrations",
      subtitle: "Connected directly where your team works",
      description:
        "Seamlessly connect your private AI to Slack, Microsoft Teams, SharePoint, Google Drive, or your internal operational portals.",
      badge: "Connectors",
      keyOutputs: [
        "Slack & Microsoft Teams bot integrations",
        "Google Drive & SharePoint auto-sync",
        "REST API for internal system queries",
      ],
    },
  ] as HotspotItem[],

  packages: [
    {
      id: "starter",
      level: "01",
      name: "AI Starter",
      tagline: "Your first private AI assistant.",
      description:
        "A dedicated, private AI assistant grounded in one key company repository — such as internal SOPs, HR policies, or product manuals.",
      timeline: "2–4 weeks",
      pricing: {
        PKR: {
          from: "PKR 150,000",
          range: "PKR 150,000 – 400,000",
          context: "Fixed milestone scope for domestic SMEs",
        },
        USD: {
          from: "$8,000",
          range: "$8,000 – $20,000",
          context: "Turnkey delivery for international teams",
        },
      },
      capabilities: [
        { title: "1 Document Repository", description: "Up to 500 internal PDFs, manuals, or policy files" },
        { title: "Private Web Assistant", description: "Clean web chat UI tailored to your branding" },
        { title: "Exact Page Citations", description: "Direct citations with page numbers on every answer" },
        { title: "Standard Security", description: "HTTPS encryption, JWT auth, zero training leakage" },
      ],
      deliverableSummary: "Working web assistant + processed knowledge base + 30-day deployment warranty.",
      ctaText: "Choose AI Starter",
    },
    {
      id: "workspace",
      level: "02",
      name: "AI Workspace",
      isPopular: true,
      tagline: "AI connected to your team's knowledge.",
      description:
        "Connect multiple company departments and systems so team members across operations can query internal documents and collaborate instantly.",
      timeline: "6–10 weeks",
      pricing: {
        PKR: {
          from: "PKR 400,000",
          range: "PKR 400,000 – 1,200,000",
          context: "Complete multi-department deployment",
        },
        USD: {
          from: "$25,000",
          range: "$25,000 – $75,000",
          context: "Cross-platform enterprise rollout",
        },
      },
      capabilities: [
        { title: "Multi-Source Connectors", description: "SharePoint, Google Drive, SQL databases, and file stores" },
        { title: "Team & Role Permissions", description: "Granular access rules (Finance, HR, Engineering)" },
        { title: "Slack & Teams Bots", description: "Ask questions directly inside internal chat channels" },
        { title: "Telemetry & Guardrails", description: "Query analytics, latency dashboards, hallucination gates" },
      ],
      deliverableSummary: "Full enterprise workspace + multi-source ingestion + Slack/Teams bots + SLA support.",
      ctaText: "Start with AI Workspace",
    },
    {
      id: "command-center",
      level: "03",
      name: "AI Command Center",
      tagline: "AI integrated across your operations.",
      description:
        "A private enterprise AI platform with autonomous agent workflows, air-gapped on-premise execution, and deep ERP/CRM integrations.",
      timeline: "10–16 weeks",
      pricing: {
        PKR: {
          from: "Custom Quote",
          range: "Tailored to architecture scale",
          context: "Founding enterprise partner cohort",
        },
        USD: {
          from: "$75,000",
          range: "$75,000 – $150,000+",
          context: "Complete custom architecture deployment",
        },
      },
      capabilities: [
        { title: "Air-Gapped / VPC Execution", description: "Self-hosted private LLMs (vLLM / Ollama) on your servers" },
        { title: "Autonomous Agent Actions", description: "Multi-step reasoning pipelines that execute system tasks" },
        { title: "Enterprise SSO & Auditing", description: "Okta / SAML SSO, SOC2-ready logging, tamper audit logs" },
        { title: "Dedicated Architect Lead", description: "Direct partner access with committed 24/7 Severity-1 SLA" },
      ],
      deliverableSummary: "Turnkey enterprise architecture + full code ownership + infrastructure as code.",
      ctaText: "Discuss Command Center",
    },
  ] as CustomAiPackage[],

  comparisonMatrix: [
    { name: "Private Web Assistant Interface", starter: true, workspace: true, command: true },
    { name: "Document Extraction & Parsing (PDF, Word)", starter: true, workspace: true, command: true },
    { name: "Exact Page Citations & Footnotes", starter: true, workspace: true, command: true },
    { name: "Zero Public Training Data Leakage", starter: true, workspace: true, command: true },
    { name: "Multi-Source Connectors (Drive, SharePoint, SQL)", starter: false, workspace: true, command: true },
    { name: "Departmental Role-Based Access (RBAC)", starter: false, workspace: true, command: true },
    { name: "Slack & Microsoft Teams Bot Integration", starter: false, workspace: true, command: true },
    { name: "Admin Telemetry & Evaluation Harness", starter: false, workspace: true, command: true },
    { name: "Air-Gapped / On-Premise VPC Hosting", starter: false, workspace: false, command: true },
    { name: "Multi-Step Autonomous Agent Workflows", starter: false, workspace: false, command: true },
    { name: "Enterprise SSO (Okta / SAML / Active Directory)", starter: false, workspace: false, command: true },
    { name: "Dedicated 24/7 SLA & Architecture Lead", starter: false, workspace: false, command: true },
  ],

  deliveryStages: [
    {
      step: "01",
      id: "discover",
      name: "Discover",
      tagline: "Audit & Process Mapping",
      duration: "Week 1–2",
      copy: "We understand how your team actually works before building anything. We audit your documentation, recurring internal questions, and data readiness.",
      activities: [
        "Audit existing PDFs, Drive folders, and databases",
        "Identify high-frequency team questions & bottlenecks",
        "Define security, data residency, and compliance boundaries",
      ],
      deliverable: "Architecture Blueprint & Milestone Roadmap",
    },
    {
      step: "02",
      id: "connect",
      name: "Connect",
      tagline: "Knowledge Ingestion & Vector Storage",
      duration: "Week 2–4",
      copy: "We connect the information your AI needs. We structure company documents into an encrypted vector database with zero third-party training leakage.",
      activities: [
        "OCR, AST parsing, and chunk tokenization pipelines",
        "Vector database setup (pgvector, Qdrant, or Pinecone)",
        "Automated sync pipelines for ongoing document updates",
      ],
      deliverable: "Indexed Knowledge Base with Grounded Search",
    },
    {
      step: "03",
      id: "build",
      name: "Build",
      tagline: "Interface, Guardrails & Integrations",
      duration: "Week 4–8",
      copy: "We build the AI experience around your business. Interface workflows, role permissions, hallucination guardrails, and Slack/Teams connectors.",
      activities: [
        "Brand-tailored chat interface & query workflows",
        "Deterministic citations engine with page verification",
        "Role-based permission gating and testing harness",
      ],
      deliverable: "Working Staging Application with Live Demo URL",
    },
    {
      step: "04",
      id: "launch",
      name: "Launch",
      tagline: "Deployment, Telemetry & Telemetry",
      duration: "Week 8+",
      copy: "We launch, monitor, and continuously improve the system. Your team gets onboarding runbooks, and telemetry tracks accuracy and usage.",
      activities: [
        "Production deployment to your cloud VPC or on-prem",
        "Telemetry instrumentation for accuracy and latency",
        "Team onboarding session and operational runbooks",
      ],
      deliverable: "Production System + Full Source Code + SLA",
    },
  ] as DeliveryStage[],

  postContactSteps: [
    { num: "01", label: "Contact ATCDL", desc: "Submit project brief or schedule call" },
    { num: "02", label: "15–30 Min Discovery", desc: "Understand your workflow & team needs" },
    { num: "03", label: "System Proposal", desc: "Architecture roadmap & exact scope" },
    { num: "04", label: "Approve Scope", desc: "Transparent milestone contract" },
    { num: "05", label: "Sprint Builds", desc: "Engineering sprints with weekly updates" },
    { num: "06", label: "Working Software", desc: "Test live staging build with your data" },
    { num: "07", label: "Production Launch", desc: "Zero-downtime rollout to your team" },
  ],

  fitScenarios: [
    {
      id: "chaos",
      title: "Document Chaos",
      subtitle: "Scattered Information",
      problem: "Employees spend up to 2 hours every day hunting through scattered SharePoint folders, Google Drives, and PDF manuals.",
      solution: "One unified search box that instantly answers with exact file and page citations.",
    },
    {
      id: "questions",
      title: "Repetitive Questions",
      subtitle: "Knowledge Bottlenecks",
      problem: "Senior engineers and operations managers repeatedly answer the same routine policy, SOP, and technical questions.",
      solution: "A 24/7 grounded assistant that handles repetitive inquiries so senior leaders stay focused on high-value work.",
    },
    {
      id: "manual",
      title: "Manual Extraction",
      subtitle: "Slow Human Copy-Pasting",
      problem: "Staff manually review 40-page contracts or specifications to extract terms, dates, and compliance criteria.",
      solution: "Automated document intelligence that pulls key attributes and cross-checks data in seconds.",
    },
    {
      id: "growth",
      title: "Growing Operations",
      subtitle: "Onboarding Friction",
      problem: "New hires require months of hand-holding because company knowledge is trapped inside people's heads instead of a system.",
      solution: "Instant organizational memory that lets every employee ask questions and learn institutional workflows on day one.",
    },
  ] as FitScenario[],

  technicalSpecs: [
    {
      title: "Retrieval-Augmented Generation (RAG) Architecture",
      content:
        "Hybrid lexical (BM25) and dense semantic vector search with cross-encoder re-ranking. We tune chunk sizing, overlap windows, and metadata tagging specifically for technical enterprise documents.",
    },
    {
      title: "Zero Data Leakage & Privacy Guarantees",
      content:
        "Strict enterprise API terms enforcing zero model retraining on customer payloads. All document embeddings and index vectors reside in customer-dedicated encrypted partitions.",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      content:
        "Document-level permission gating tied to your identity provider (Azure AD / Okta / SAML). Employees can only retrieve information from files their existing permissions authorize.",
    },
    {
      title: "Air-Gapped & Private Cloud LLM Execution",
      content:
        "For defense, healthcare, and financial institutions, we deploy self-hosted open-weights models (Llama 3, DeepSeek, Mistral) on dedicated GPU clusters via vLLM with zero outbound internet dependencies.",
    },
    {
      title: "Telemetry & Hallucination Guardrails",
      content:
        "Automated cosine similarity confidence gates, strict citation verification algorithms, and live Prometheus/Grafana dashboards monitoring query latency and token consumption.",
    },
  ],
};

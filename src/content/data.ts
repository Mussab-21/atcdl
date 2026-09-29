import { z } from "zod";

export const StatusSchema = z.enum([
  "Ready for Demo",
  "Pilot Ready",
  "Beta",
  "Prototype",
  "Concept",
  "Client Project",
  "Internal Project",
  "Open Source",
  "R&D",
  // Legacy
  "Client",
  "Product",
  "Lab",
]);

export type Status = z.infer<typeof StatusSchema>;

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  category: z.enum(["AI", "Automation", "Software", "Web", "Mobile"]),
  status: StatusSchema,
  industry: z.string().optional(),
  summary: z.string(),
  problem: z.string(),
  solution: z.string(),
  technology: z.array(z.string()),
  businessValue: z.string(),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.boolean(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  status: StatusSchema,
  offer: z.enum([
    "Custom AI / GenAI",
    "AI Agents & Automation",
    "Enterprise Software",
    "Web & Mobile Platforms",
  ]),
  problem: z.string(),
  howItWorks: z.array(z.string()),
  modules: z.array(z.string()),
  integrations: z.array(z.string()),
  deployment: z.array(z.string()),
  pricingModel: z.string(),
  featured: z.boolean(),
  demoHighlight: z.string(),
  icon: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export const SolutionPackageSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string(),
  scopeConcept: z.string(),
  designedFor: z.string(),
  deliverableConcept: z.string(),
  pricingPkr: z.string(),
  pricingUsd: z.string(),
  timeline: z.string(),
  features: z.array(z.string()),
  visualType: z.string(),
  isPopular: z.boolean().optional(),
});

export type SolutionPackage = z.infer<typeof SolutionPackageSchema>;

export const DeliverableItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  metricOrDetail: z.string(),
});

export type DeliverableItem = z.infer<typeof DeliverableItemSchema>;

export const HowItWorksStepSchema = z.object({
  step: z.string(),
  title: z.string(),
  description: z.string(),
});

export type HowItWorksStep = z.infer<typeof HowItWorksStepSchema>;

export const ComparisonFeatureSchema = z.object({
  name: z.string(),
  starter: z.boolean(),
  growth: z.boolean(),
  scale: z.boolean(),
});

export type ComparisonFeature = z.infer<typeof ComparisonFeatureSchema>;

export const SolutionSchema = z.object({
  slug: z.string(),
  title: z.string(),
  eyebrow: z.string(),
  tabTitle: z.string().optional(),
  tagline: z.string(),
  description: z.string(),
  businessHeadline: z.string().optional(),
  businessExplanation: z.string().optional(),
  capabilities: z.array(z.string()),
  architecturePoints: z.array(z.string()),
  deliverables: z.array(z.string()),
  deliverableItems: z.array(DeliverableItemSchema).optional(),
  packages: z.array(SolutionPackageSchema).optional(),
  howItWorksSteps: z.array(HowItWorksStepSchema).optional(),
  idealFor: z.array(z.string()).optional(),
  whatWeDontDo: z.string().optional(),
  comparisonFeatures: z.array(ComparisonFeatureSchema).optional(),
  typicalTimeline: z.string(),
  typicalScope: z.string(),
});

export type Solution = z.infer<typeof SolutionSchema>;

export const IdeaSchema = z.object({
  slug: z.string(),
  title: z.string(),
  industry: z.string(),
  concept: z.string(),
  problem: z.string(),
  solution: z.string(),
  howItWorks: z.array(z.string()),
  potentialValue: z.string(),
  status: z.enum(["Concept", "Prototype"]),
  roadmap: z.array(z.string()).optional(),
  relevantProduct: z.string().optional(),
  relevantSolution: z.string().optional(),
});

export type Idea = z.infer<typeof IdeaSchema>;

export const IndustrySchema = z.object({
  slug: z.string(),
  name: z.string(),
  eyebrow: z.string(),
  tagline: z.string(),
  summary: z.string(),
  challenges: z.array(z.string()),
  solutions: z.array(z.string()),
  architectureHighlights: z.array(z.string()),
  relevantProjects: z.array(z.string()),
  relevantProducts: z.array(z.string()),
  relevantIdeas: z.array(z.string()),
});

export type Industry = z.infer<typeof IndustrySchema>;

export const LabExperimentSchema = z.object({
  slug: z.string(),
  title: z.string(),
  category: z.enum(["AI & ML Benchmark", "Workflow Tooling", "Architecture Prototype"]),
  status: z.enum(["Lab", "Open Source", "Prototype"]),
  description: z.string(),
  technicalTakeaway: z.string(),
  stack: z.array(z.string()),
  repoUrl: z.string().optional(),
  metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
});

export type LabExperiment = z.infer<typeof LabExperimentSchema>;

// SEED DATA: PRODUCTS
export const PRODUCTS: Product[] = [
  {
    slug: "atcdl-docs",
    name: "ATCDL Docs",
    tagline: "Document & Invoice Intelligence Engine",
    status: "Prototype",
    icon: "ScanLine",
    offer: "AI Agents & Automation",
    problem:
      "Finance and operations teams waste dozens of hours every week manually re-keying invoices, bills of lading, customs declarations, and tax forms into accounting software and ERPs.",
    howItWorks: [
      "Multi-format document capture via email watcher, REST API, or drag-and-drop dashboard",
      "High-precision OCR combined with LLM token classification and layout geometry parsing",
      "Configurable cross-field math validation and vendor duplicate checks",
      "Human-in-the-loop review queue for flagged low-confidence values",
      "Automated payload delivery to ERP/accounting ledgers (SAP, QuickBooks, Xero)",
    ],
    modules: [
      "Document Capture Gateway",
      "OCR & Neural Layout Extractor",
      "Cross-Field Validation Engine",
      "Human Verification Console",
      "ERP/GL Export Pipeline",
      "Audit Trail & Compliance Log",
    ],
    integrations: ["SAP S/4HANA", "QuickBooks", "Xero", "PostgreSQL", "Amazon S3", "Webhooks"],
    deployment: ["AWS / GCP Cloud", "Isolated Virtual Private Cloud (VPC)", "On-Premises Air-Gapped"],
    pricingModel: "Implementation setup fee plus monthly volume tiers",
    featured: true,
    demoHighlight: "60-second invoice extraction with live SAP reconciliation payload",
  },
  {
    slug: "atcdl-ask",
    name: "ATCDL Ask",
    tagline: "Private Enterprise Knowledge Copilot",
    status: "Prototype",
    icon: "MessageSquareText",
    offer: "Custom AI / GenAI",
    problem:
      "Staff waste up to 20% of their working hours searching through scattered SharePoint folders, Google Drives, Confluence wikis, and SOP PDFs to find authoritative business answers.",
    howItWorks: [
      "Connects to internal document repositories with scheduled incremental syncing",
      "Document chunking, multi-lingual embedding, and high-performance vector indexing",
      "Permission-aware retrieval enforcing existing Active Directory / RBAC user roles",
      "LLM inference with inline clickable citations down to the exact page and paragraph",
      "Internal telemetry and feedback tracking to continuously refine indexing quality",
    ],
    modules: [
      "Multi-source Connector Suite",
      "RBAC / Permission-Aware Retrieval Filter",
      "Vector Indexing & Hybrid Search",
      "Citing Generation Interface",
      "Knowledge Quality Analytics Console",
    ],
    integrations: ["Microsoft SharePoint", "Google Drive", "Confluence", "Notion", "Slack", "REST API"],
    deployment: ["Private Cloud (AWS / Azure)", "On-Premises GPU Server", "Secure VPC"],
    pricingModel: "One-time enterprise deployment + monthly seat or token platform fee",
    featured: true,
    demoHighlight: "Upload a 50-page policy manual and get grounded answers with source citations in seconds",
  },
  {
    slug: "atcdl-agents",
    name: "ATCDL Agents",
    tagline: "Autonomous Sales & Support Agent Platform",
    status: "Prototype",
    icon: "Bot",
    offer: "AI Agents & Automation",
    problem:
      "High-value leads go cold overnight and customer support queues back up because human teams cannot respond 24/7 across multiple web and messaging channels.",
    howItWorks: [
      "Listens to inbound queries on Web Chat, WhatsApp Business API, and Discord",
      "Authenticates customer context against your CRM and internal knowledge base",
      "Qualifies lead budget, timeline, and use-case through natural conversational flows",
      "Executes authorized actions (booking calendar, issuing ticket, updating CRM)",
      "Hands off to human agents with full conversation summarization when confidence dips",
    ],
    modules: [
      "Omnichannel Connector (WhatsApp, Web, Discord)",
      "Intent & Entity Classification Engine",
      "Knowledge Retrieval & Guardrails",
      "CRM & Calendar Two-Way Sync",
      "Human Handoff & Live Takeover Console",
    ],
    integrations: ["WhatsApp Business API", "HubSpot", "Salesforce", "Zendesk", "Cal.com", "PostgreSQL"],
    deployment: ["Managed Cloud", "Dedicated Cloud Tenant"],
    pricingModel: "Setup fee + monthly active conversation tier",
    featured: true,
    demoHighlight: "Simulated lead qualification and automated CRM opportunity creation in 45 seconds",
  },
  {
    slug: "atcdl-talent",
    name: "ATCDL Talent",
    tagline: "Recruitment & Talent Intelligence Platform",
    status: "Prototype",
    icon: "UserSearch",
    offer: "Custom AI / GenAI",
    problem:
      "Hiring managers and HR teams drown in hundreds of resumes per job opening, leading to slow hiring cycles, candidate mismatches, and missed top performers.",
    howItWorks: [
      "Parses resumes across PDF, DOCX, and text formats extracting hard & soft competencies",
      "Performs semantic skill-gap analysis against candidate profiles and job requirements",
      "Generates objective candidate rank scores and role-specific technical interview questions",
      "Syncs directly to ATS pipelines with structured evaluation matrices",
    ],
    modules: [
      "Resume Parser & Entity Extractor",
      "Semantic Job Matcher",
      "Competency Gap Analyzer",
      "Interview Guide Generator",
      "ATS Connector",
    ],
    integrations: ["Greenhouse", "Lever", "Workday", "CSV / JSON Export"],
    deployment: ["SaaS Cloud", "Private Cloud"],
    pricingModel: "Monthly recruiter subscription or custom enterprise license",
    featured: false,
    demoHighlight: "Resume-to-JD match score with instant skill gap analysis",
  },
  {
    slug: "atcdl-flow",
    name: "ATCDL Flow",
    tagline: "Configurable Enterprise Approval & Workflow Engine",
    status: "Concept",
    icon: "Workflow",
    offer: "Enterprise Software",
    problem:
      "Internal approvals for capital expenses, procurement, and onboarding stall in email threads with zero SLA enforcement and incomplete audit trails.",
    howItWorks: [
      "Visual drag-and-drop form and approval hierarchy builder",
      "Rule-based routing based on department, spend amount, and cost centers",
      "Automated reminders, SLA escalation timers, and cryptographic audit log trails",
    ],
    modules: [
      "Dynamic Form Designer",
      "Multi-tier Approval Matrix",
      "SLA Timer & Escalation Bot",
      "Immutable Audit Log",
    ],
    integrations: ["Slack", "Microsoft Teams", "Email", "ERP Systems"],
    deployment: ["Cloud", "On-Premises"],
    pricingModel: "Per-seat or enterprise instance license",
    featured: false,
    demoHighlight: "Procurement sign-off flow routed through tiered SLAs",
  },
  {
    slug: "atcdl-ops",
    name: "ATCDL Ops",
    tagline: "Unified Operations Control Tower",
    status: "Concept",
    icon: "LayoutDashboard",
    offer: "Enterprise Software",
    problem:
      "Operations leaders lack a single operational pane of glass, forcing them to toggle across siloed telemetry, warehouse databases, and ticket management systems.",
    howItWorks: [
      "Aggregates live telemetry from internal databases, Kafka streams, and third-party APIs",
      "Visualizes inventory, tickets, fleet status, and throughput on interactive map & chart views",
      "Triggers automated anomaly alerts and recommends operational remedies",
    ],
    modules: [
      "Real-time Ingestion Stream",
      "Interactive Telemetry Canvas",
      "Anomaly Detection Engine",
      "Automated Alerting Gateway",
    ],
    integrations: ["PostgreSQL", "Kafka", "Datadog", "PagerDuty", "Snowflake"],
    deployment: ["Private Cloud", "Enterprise VPC"],
    pricingModel: "Annual enterprise license + implementation",
    featured: false,
    demoHighlight: "Simulated fleet and order backlog telemetry dashboard with anomaly triggers",
  },
];

// SEED DATA: PROJECTS (from real GitHub repositories & prototypes)
export const PROJECTS: Project[] = [
  {
    slug: "ai-talent-intelligence",
    title: "AI Talent Intelligence & Resume Matcher",
    category: "AI",
    status: "Prototype",
    industry: "HR & Recruitment",
    summary:
      "Semantic matching engine comparing candidate CVs with target job specifications, highlighting critical skill gaps and score distributions.",
    problem:
      "Manual screening of 400+ resumes per engineering opening created a 14-day bottleneck in candidate progression with inconsistent evaluation criteria.",
    solution:
      "Engineered an NLP and embedding pipeline that extracts candidate experience, computes cosine similarity against rubric embeddings, and produces ranked evaluations.",
    technology: ["Python", "FastAPI", "Sentence-Transformers", "Next.js", "Tailwind CSS"],
    businessValue:
      "Reduced initial screening time from 15 minutes to under 30 seconds per resume with reproducible rubric scoring.",
    githubUrl: "https://github.com/Mussab-21",
    featured: true,
  },
  {
    slug: "ai-workforce-assistant",
    title: "AI Workforce Knowledge Assistant",
    category: "AI",
    status: "Internal Project",
    industry: "Corporate Operations",
    summary:
      "Retrieval-augmented assistant enabling team members to query internal onboarding docs, engineering policies, and technical guidelines.",
    problem:
      "New team members lost hours searching across fragmented markdown files, FAQs, and ticket logs to find standard operating guidelines.",
    solution:
      "Built a secure vector search and QA pipeline with semantic chunking and grounded generation, ensuring zero hallucination on corporate policies.",
    technology: ["LangChain", "OpenAI / Claude API", "ChromaDB", "TypeScript", "React"],
    businessValue:
      "Cut onboarding inquiry volume to team leads by 65% in internal trial benchmarks.",
    githubUrl: "https://github.com/Mussab-21",
    featured: true,
  },
  {
    slug: "neiki-operations-platform",
    title: "NEIKI Digital Operations Platform",
    category: "Software",
    status: "Client Project",
    industry: "Nonprofit & Social Impact",
    summary:
      "Full-stack portal coordinating volunteer distribution, campaign tracking, and donor analytics with role-based access control.",
    problem:
      "Spreadsheet-based volunteer tracking caused scheduling overlaps, lost donor communications, and zero visibility into active regional campaigns.",
    solution:
      "Designed and deployed a responsive web platform with role-based dashboards, automated email confirmations, and transactional donation tracking.",
    technology: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    businessValue:
      "Consolidated 4 disparate spreadsheets into one live system with audit-ready donor logging.",
    githubUrl: "https://github.com/Mussab-21",
    featured: true,
  },
  {
    slug: "fashion-mnist-classifier",
    title: "Fashion-MNIST Deep Vision Benchmark",
    category: "AI",
    status: "R&D",
    industry: "Computer Vision & ML",
    summary:
      "Deep convolutional neural network trained for multi-class image classification with confusion matrix telemetry.",
    problem:
      "Benchmarking baseline CNN architectures against visual edge cases in automated item classification.",
    solution:
      "Implemented PyTorch CNN with batch normalization, dropout regularization, and visual activation maps.",
    technology: ["PyTorch", "Python", "Matplotlib", "NumPy"],
    businessValue:
      "Achieved 92.4% test set accuracy under constrained compute parameters.",
    githubUrl: "https://github.com/Mussab-21",
    featured: false,
  },
  {
    slug: "workflow-automation-bots",
    title: "Discord & Figma Workflow Integrations",
    category: "Automation",
    status: "Open Source",
    industry: "Developer Tooling",
    summary:
      "Event-driven automation bots bridging design file handoffs and community operations.",
    problem:
      "Manual status notifications between design iterations and development teams caused missed reviews and delayed handoffs.",
    solution:
      "Created webhook and REST bot listening to file update triggers and dispatching formatted embed notifications with interactive action buttons.",
    technology: ["Node.js", "Discord.js", "Figma REST API", "Webhooks"],
    businessValue:
      "Automated notification latency dropped from hours to under 2 seconds upon design file publish.",
    githubUrl: "https://github.com/Mussab-21",
    featured: false,
  },
];

// SEED DATA: SOLUTIONS (Outcome-first engineering architectures & transparent scopes)
export const SOLUTIONS: Solution[] = [
  {
    slug: "custom-ai",
    title: "Custom AI & GenAI Systems",
    eyebrow: "CUSTOM AI SYSTEMS",
    tabTitle: "01 AI & GenAI",
    businessHeadline: "Give your team an AI that understands your business.",
    businessExplanation:
      "Turn your company's information into a private AI assistant that can answer questions, find information, and help your team work faster without searching through dozens of files.",
    tagline:
      "Private copilots, RAG architectures, and custom LLM inference pipelines built for enterprise data security.",
    description:
      "ATCDL builds private AI systems that can understand your documents, knowledge, and business data — so your team can find answers and get work done without searching through dozens of files. Built with strict role-based access control, cryptographic isolation, and zero third-party training data leakage.",
    deliverableItems: [
      {
        title: "Your Private AI Assistant",
        description: "An intuitive web interface your employees use daily to query documents, draft summaries, and complete complex workflows.",
        metricOrDetail: "Sub-second answers from verified data",
      },
      {
        title: "Your Structured Knowledge Base",
        description: "Your internal PDFs, SOP manuals, contracts, and spreadsheets organized into an encrypted, continuously synchronized vector store.",
        metricOrDetail: "Zero public training leakage",
      },
      {
        title: "Your Enterprise Control Layer",
        description: "Role-based permissions, monitoring consoles, and exact source citations so sensitive business information stays protected.",
        metricOrDetail: "Page & paragraph attribution",
      },
      {
        title: "Your Business Integrations",
        description: "Direct connectors linking your AI assistant into Slack, Microsoft Teams, SharePoint, or your internal operational portals.",
        metricOrDetail: "Secure OAuth2 / API hooks",
      },
    ],
    packages: [
      {
        id: "ai-starter",
        name: "AI Starter",
        tagline: "Your first private AI assistant.",
        scopeConcept: "1 core document repository, up to 3 active users.",
        designedFor: "Teams taking their first step with internal AI who need quick, verifiable productivity gains.",
        deliverableConcept: "A dedicated private chat assistant grounded in one key repository (e.g. HR policies, technical manuals, or SOPs).",
        pricingPkr: "PKR 150,000 – 400,000",
        pricingUsd: "$8,000 – $20,000",
        timeline: "2–4 weeks",
        features: [
          "Single document repository ingestion",
          "Private web chat assistant interface",
          "Exact page-level source citations",
          "Basic role-based access controls",
          "Standard email deployment support",
        ],
        visualType: "starter",
      },
      {
        id: "ai-workspace",
        name: "AI Workspace",
        tagline: "An AI workspace built around your business knowledge.",
        scopeConcept: "Multi-repository knowledge base, team collaboration, integrations, up to 25 users.",
        designedFor: "Organizations ready to integrate AI deeply into daily cross-departmental operations.",
        deliverableConcept: "Full organizational knowledge engine indexing SharePoint, Google Drive, PDFs, and databases with role-based access.",
        pricingPkr: "PKR 400,000 – 1,200,000",
        pricingUsd: "$25,000 – $75,000",
        timeline: "6–10 weeks",
        features: [
          "Multi-source knowledge connectors (SharePoint, Drive, SQL)",
          "Departmental permission boundaries",
          "Slack & Microsoft Teams bot integration",
          "Admin telemetry & query analytics console",
          "Hallucination guardrails & evaluation harness",
        ],
        visualType: "workspace",
        isPopular: true,
      },
      {
        id: "ai-command-center",
        name: "AI Command Center",
        tagline: "A private AI platform designed around your operations.",
        scopeConcept: "Full custom enterprise platform, private VPC/air-gapped deployment, multi-agent reasoning.",
        designedFor: "Enterprises requiring strict data sovereignty, air-gapped deployments, and automated operational reasoning.",
        deliverableConcept: "We are onboarding a selective cohort of founding enterprise partners for full-scale custom AI architectures.",
        pricingPkr: "Custom quote only",
        pricingUsd: "$75,000 – $150,000+",
        timeline: "10–16 weeks",
        features: [
          "Air-gapped private LLM execution (vLLM / Ollama)",
          "Domain-specific model fine-tuning & quantization",
          "Multi-agent autonomous decision workflows",
          "Enterprise SSO (SAML / Okta) & audit logging",
          "Dedicated architectural lead & 24/7 SLA",
        ],
        visualType: "command",
      },
    ],
    comparisonFeatures: [
      { name: "Private AI Assistant Web UI", starter: true, growth: true, scale: true },
      { name: "Document & PDF Extraction Pipeline", starter: true, growth: true, scale: true },
      { name: "Exact Page Citations & Footnotes", starter: true, growth: true, scale: true },
      { name: "Multi-Repository Connectors (Drive, SharePoint)", starter: false, growth: true, scale: true },
      { name: "Departmental Role-Based Access (RBAC)", starter: false, growth: true, scale: true },
      { name: "Slack / Teams Bot Integrations", starter: false, growth: true, scale: true },
      { name: "Air-Gapped / Private Cloud Self-Hosting", starter: false, growth: false, scale: true },
      { name: "Multi-Agent Autonomous Orchestration", starter: false, growth: false, scale: true },
      { name: "Dedicated SLA & Founding Partner Support", starter: false, growth: false, scale: true },
    ],
    howItWorksSteps: [
      {
        step: "01",
        title: "Understand Your Business",
        description: "We audit your company's data sources, documents, and recurring team inquiries to map high-value knowledge bottlenecks.",
      },
      {
        step: "02",
        title: "Connect Your Knowledge",
        description: "We ingest and structure your documentation into a private, encrypted vector store with zero third-party training rights.",
      },
      {
        step: "03",
        title: "Build Your AI System",
        description: "We configure domain-specific prompt engineering, hallucination guardrails, and role-based access permissions.",
      },
      {
        step: "04",
        title: "Deploy & Improve",
        description: "We roll out the assistant to your team with live telemetry tracking accuracy, latency, and frequent query topics.",
      },
    ],
    idealFor: [
      "Your employees waste up to 20% of their day hunting through scattered SharePoint folders, Google Drives, and PDF manuals.",
      "New hires require weeks of senior team member time just to learn standard operating guidelines.",
      "Customer support or account reps struggle to locate up-to-date pricing rules and contract terms during live conversations.",
      "You want powerful AI capabilities but your legal or security team forbids sending internal data to public consumer models.",
      "You require verifiable answers backed by exact page snippets rather than guessing or hallucinations.",
    ],
    whatWeDontDo:
      "We don't build generic chatbot toys or send your proprietary company data to public training models. We engineer private, production-grade AI architectures designed specifically around your data governance.",
    capabilities: [
      "Retrieval-Augmented Generation (RAG) with hybrid lexical and semantic search",
      "Permission-aware vector databases respecting Active Directory / LDAP groups",
      "Model fine-tuning and quantization for private cloud and on-premise execution",
      "Hallucination guardrails and source citation engines down to exact page snippets",
      "Production LLM observability, latency tracking, and cost management",
    ],
    architecturePoints: [
      "Ingestion pipeline with real-time OCR, AST parsing, and chunk tokenization",
      "High-throughput vector storage (pgvector, Qdrant, Pinecone)",
      "Strict zero-data-retention API contracts with enterprise LLM endpoints",
      "Self-hosted model deployments on air-gapped infrastructure (Ollama, vLLM)",
    ],
    deliverables: [
      "Architecture Blueprint & Security Audit",
      "Custom Retrieval & Inference Pipeline",
      "Admin Analytics & Grounding Console",
      "API & SDK Integration Documentation",
    ],
    typicalTimeline: "6–12 weeks",
    typicalScope: "$25,000 – $100,000+",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Autonomous Automation",
    eyebrow: "AI AGENTS & AUTOMATION",
    tabTitle: "02 AI Agents",
    businessHeadline: "Give repetitive business tasks to AI workers.",
    businessExplanation:
      "Give repetitive business tasks to AI agents that can perform the work, connect systems, and escalate important decisions to people when human judgment is needed.",
    tagline:
      "Autonomous multi-step agents that execute operational tasks, process documents, and sync systems with human oversight.",
    description:
      "Instead of your employees spending hours copying information between disconnected tools, ATCDL builds AI workers that monitor incoming requests, extract structured records, make verified decisions, and update your software systems 24/7.",
    deliverableItems: [
      {
        title: "Autonomous Worker Fleet",
        description: "Background worker agents that monitor incoming emails, webhooks, and folders 24/7 to process requests instantly.",
        metricOrDetail: "24/7 operational throughput",
      },
      {
        title: "Intelligent Decision Engine",
        description: "Reasoning models trained to parse unstructured documents, check business rules, and validate transaction math.",
        metricOrDetail: "Deterministic validation schemas",
      },
      {
        title: "Human Review Dashboard",
        description: "A clean interface where exceptions and high-value approvals are routed to human managers before final execution.",
        metricOrDetail: "Configurable escalation thresholds",
      },
      {
        title: "System Integration Adapters",
        description: "Reliable connectors that sync decisions directly into your CRM, ERP, accounting software, or internal databases.",
        metricOrDetail: "Automated retry & dead-letter queues",
      },
    ],
    packages: [
      {
        id: "task-agent",
        name: "Task Agent",
        tagline: "One repetitive operational task automated end-to-end.",
        scopeConcept: "1 specific workflow (e.g. email lead qualification or invoice ingestion into accounting software).",
        designedFor: "Businesses with an acute operational bottleneck in a single department.",
        deliverableConcept: "An intelligent agent handling one high-volume queue (e.g. Email -> AI extraction -> CRM update).",
        pricingPkr: "PKR 150,000 – 400,000",
        pricingUsd: "$8,000 – $20,000",
        timeline: "2–4 weeks",
        features: [
          "1 automated high-volume workflow",
          "Email & Webhook ingestion listener",
          "Structured JSON data extraction",
          "Direct destination system sync",
          "Exception alert notifications via email/Slack",
        ],
        visualType: "starter",
      },
      {
        id: "workflow-agent",
        name: "Workflow Agent",
        tagline: "Multi-step business processes automated with human oversight.",
        scopeConcept: "Multi-step workflow spanning 2–3 systems with validation rules and approval gates.",
        designedFor: "Growing operations needing coordinated handoffs between sales, finance, and logistics.",
        deliverableConcept: "End-to-end process automation bridging multiple software tools with built-in audit trails.",
        pricingPkr: "PKR 400,000 – 1,200,000",
        pricingUsd: "$25,000 – $75,000",
        timeline: "5–8 weeks",
        features: [
          "Multi-step operational orchestration",
          "Cross-system synchronization (ERP + CRM + Billing)",
          "Human-in-the-loop review dashboard",
          "SLA tracking & automatic escalation",
          "Self-healing error recovery & dead-letter queues",
        ],
        visualType: "workspace",
        isPopular: true,
      },
      {
        id: "autonomous-operations",
        name: "Autonomous Operations",
        tagline: "An AI workforce for complex operational processes.",
        scopeConcept: "Fleet of specialized agents collaborating across department boundaries with comprehensive governance.",
        designedFor: "Large organizations seeking enterprise-wide autonomous throughput across operations.",
        deliverableConcept: "We are accepting a small number of founding enterprise partners for full-scale multi-agent deployments.",
        pricingPkr: "Custom quote only",
        pricingUsd: "$75,000 – $150,000+",
        timeline: "8–14 weeks",
        features: [
          "Multi-agent swarm coordination mesh",
          "Live telemetry & reasoning trace observability",
          "Cryptographic audit logs for every decision",
          "Enterprise secret vault & OAuth2 governance",
          "24/7 proactive monitoring & dedicated SLA",
        ],
        visualType: "command",
      },
    ],
    comparisonFeatures: [
      { name: "24/7 Ingestion & Event Monitoring", starter: true, growth: true, scale: true },
      { name: "Document & Invoice Intelligence (OCR)", starter: true, growth: true, scale: true },
      { name: "Single Target System Sync", starter: true, growth: true, scale: true },
      { name: "Multi-System Data Reconciliation", starter: false, growth: true, scale: true },
      { name: "Human-in-the-Loop Review Dashboard", starter: false, growth: true, scale: true },
      { name: "Automated Retry & Error Queues", starter: false, growth: true, scale: true },
      { name: "Multi-Agent Swarm Orchestration", starter: false, growth: false, scale: true },
      { name: "Historical Event Replay & Rollbacks", starter: false, growth: false, scale: true },
      { name: "Founding Partner Architectural SLA", starter: false, growth: false, scale: true },
    ],
    howItWorksSteps: [
      {
        step: "01",
        title: "Find Repetitive Work",
        description: "We identify operational choke points where employees repeatedly copy data or follow repetitive manual checklists.",
      },
      {
        step: "02",
        title: "Design the Workflow",
        description: "We map exact decision trees, edge-case protocols, and human escalation thresholds to ensure deterministic reliability.",
      },
      {
        step: "03",
        title: "Build the Agent",
        description: "We train and configure reasoning models to parse unstructured inputs, execute tool calls, and format clean records.",
      },
      {
        step: "04",
        title: "Connect & Monitor",
        description: "We connect the agent directly to your business software and provide real-time dashboards to audit every action.",
      },
    ],
    idealFor: [
      "Your employees spend hours every day re-typing invoice data, customs forms, or order emails into your ERP.",
      "High-value sales leads go cold overnight because human staff cannot answer 24/7 across web and messaging channels.",
      "Customer requests take days to resolve because of repetitive internal handoffs between departments.",
      "You have brittle robotic process automation (RPA) scripts that break every time an internal website changes layout.",
      "You want to expand operational transaction volume without linearly increasing back-office administrative headcount.",
    ],
    whatWeDontDo:
      "We don't build brittle scrapers or unsupervised black-box scripts that break without warning. Every agent system includes strict data boundaries, schema validation, and supervisory review gates.",
    capabilities: [
      "Document & invoice intelligence: OCR + token classification + math validation",
      "Multi-channel customer and lead agents (Web, WhatsApp Business, Slack, Discord)",
      "Human-in-the-loop review queues for exception handling and regulatory sign-offs",
      "Event-driven background workers that monitor webhooks, emails, and SFTP servers",
      "Self-healing integration adapters with automatic retry logic and dead-letter queues",
    ],
    architecturePoints: [
      "Stateless execution runtimes with distributed Redis message brokers",
      "Structured schema validation with Zod / Pydantic enforcing strict data boundaries",
      "Cryptographic audit logs recording every agent prompt, decision, and tool execution",
      "Secure OAuth2 and credential vaults with encrypted secret management",
    ],
    deliverables: [
      "Workflow Process Map & Edge-Case Catalog",
      "Containerized Agent Service & Worker Fleet",
      "Human Review & Exception Management Dashboard",
      "End-to-End Test Suite & Deployment Playbooks",
    ],
    typicalTimeline: "4–10 weeks",
    typicalScope: "$15,000 – $75,000",
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software & Systems Modernization",
    eyebrow: "ENTERPRISE SYSTEMS",
    tabTitle: "03 Systems",
    businessHeadline: "Replace slow, disconnected software with one unified system.",
    businessExplanation:
      "Replace slow, disconnected internal software and messy spreadsheets with modern systems designed around how your business actually works.",
    tagline:
      "Resilient internal systems, approval engines, and data pipelines built for mission-critical operations.",
    description:
      "We take outdated, fragmented internal tools — spreadsheets, email approval chains, and legacy desktop software — and turn them into a clean, modern software system. Built with bulletproof relational data models, role-based security, and live management dashboards.",
    deliverableItems: [
      {
        title: "Your Modern Operations Platform",
        description: "A fast, responsive web portal built around your real internal processes, accessible securely on desktop and mobile.",
        metricOrDetail: "Sub-second interface performance",
      },
      {
        title: "Configurable Approval Engine",
        description: "Multi-tier approval workflows with automated reminders, SLA escalation timers, and complete audit histories.",
        metricOrDetail: "Zero stalled email approval chains",
      },
      {
        title: "Role-Based Access & Security",
        description: "Granular permissions (Admin, Department Head, Field Operator, Auditor) with corporate Single Sign-On (SSO).",
        metricOrDetail: "SAML, OAuth2, and RBAC",
      },
      {
        title: "Clean Consolidated Database",
        description: "A high-performance relational database consolidating disparate spreadsheets into an audit-ready single source of truth.",
        metricOrDetail: "PostgreSQL with automated backups",
      },
    ],
    packages: [
      {
        id: "system-refresh",
        name: "System Refresh",
        tagline: "Turn an error-prone spreadsheet into a secure web application.",
        scopeConcept: "1 core departmental module (e.g. inventory log, employee records, or procurement approvals).",
        designedFor: "Companies needing to replace a brittle spreadsheet with their first professional internal web database.",
        deliverableConcept: "A custom web application with role-based logins, relational data validation, and clean CSV exports.",
        pricingPkr: "PKR 150,000 – 400,000",
        pricingUsd: "$8,000 – $20,000",
        timeline: "3–6 weeks",
        features: [
          "1 dedicated departmental module",
          "Modern relational database (PostgreSQL)",
          "Role-based authentication & permissions",
          "Audit log tracking every edit & deletion",
          "Responsive desktop & mobile UI",
        ],
        visualType: "starter",
      },
      {
        id: "operations-platform",
        name: "Operations Platform",
        tagline: "Multi-department operational system with approvals and live dashboards.",
        scopeConcept: "Comprehensive core platform spanning inventory, order tracking, and multi-tier approval chains.",
        designedFor: "Growing enterprises that need a single operational pane of glass across warehouse and office teams.",
        deliverableConcept: "Custom operations management platform replacing multiple disjointed tools and spreadsheets.",
        pricingPkr: "PKR 400,000 – 1,200,000",
        pricingUsd: "$25,000 – $75,000",
        timeline: "6–12 weeks",
        features: [
          "Multi-module platform (3–5 operational areas)",
          "Configurable multi-tier approval workflows",
          "Live executive reporting dashboard",
          "Third-party ERP / accounting software sync",
          "Automated PDF export & report generation",
        ],
        visualType: "workspace",
        isPopular: true,
      },
      {
        id: "digital-core",
        name: "Digital Core",
        tagline: "Enterprise digital backbone connecting your entire business ecosystem.",
        scopeConcept: "Full custom enterprise architecture connecting sales, finance, operations, and legacy systems with zero downtime.",
        designedFor: "Established enterprises undergoing complete digital modernization without operational disruption.",
        deliverableConcept: "We are partnering with a select group of founding enterprise clients for comprehensive core transformations.",
        pricingPkr: "Custom quote only",
        pricingUsd: "$75,000 – $150,000+",
        timeline: "12–20 weeks",
        features: [
          "Comprehensive enterprise architecture",
          "Zero-downtime legacy database migration",
          "Event-driven messaging (Kafka / RabbitMQ)",
          "Enterprise SSO (Okta, Azure AD, SAML)",
          "Disaster recovery runbooks & 99.9% uptime SLA",
        ],
        visualType: "command",
      },
    ],
    comparisonFeatures: [
      { name: "Custom Relational Data Model (PostgreSQL)", starter: true, growth: true, scale: true },
      { name: "Role-Based Access Control (RBAC)", starter: true, growth: true, scale: true },
      { name: "Responsive Web Management UI", starter: true, growth: true, scale: true },
      { name: "Multi-Tier Approval Chains & SLAs", starter: false, growth: true, scale: true },
      { name: "Real-Time Executive Dashboards", starter: false, growth: true, scale: true },
      { name: "Legacy Database Connectors", starter: false, growth: true, scale: true },
      { name: "Zero-Downtime Data Migration", starter: false, growth: false, scale: true },
      { name: "Distributed Event Streaming (Kafka)", starter: false, growth: false, scale: true },
      { name: "Enterprise SSO & Disaster Recovery", starter: false, growth: false, scale: true },
    ],
    howItWorksSteps: [
      {
        step: "01",
        title: "Map Your Existing System",
        description: "We audit your active spreadsheets, paper forms, and legacy software to document how work actually flows through your teams.",
      },
      {
        step: "02",
        title: "Identify Bottlenecks",
        description: "We isolate approval delays, redundant manual data entry, and reporting blind spots that hold back operational velocity.",
      },
      {
        step: "03",
        title: "Build the Modern Platform",
        description: "We engineer a clean, high-performance web platform with strict schema contracts, intuitive UX, and robust security.",
      },
      {
        step: "04",
        title: "Migrate & Improve",
        description: "We migrate legacy records without interrupting daily business, train your personnel, and provide continuous updates.",
      },
    ],
    idealFor: [
      "Your company relies on version-conflicted spreadsheets where one accidental formula edit can corrupt inventory or finances.",
      "Internal approvals for capital expenses or procurement get buried in unsearchable email threads.",
      "Managers cannot get a real-time count of active jobs, stock levels, or operational expenses without calling multiple people.",
      "You are frustrated by off-the-shelf software that charges high per-user monthly fees while failing to fit your exact workflow.",
      "Your existing legacy software runs on an old office PC that field staff and remote executives cannot access securely.",
    ],
    whatWeDontDo:
      "We don't impose bloated, rigid templates or abandon you with unmaintainable legacy code. We engineer clean, modular systems built on industry-standard open technologies with complete documentation and client code ownership.",
    capabilities: [
      "Complex workflow and approval engines with configurable SLAs and escalation chains",
      "Legacy system modernization (decoupling monolithic databases without downtime)",
      "Role-Based Access Control (RBAC) and Single Sign-On (SAML / OAuth / Okta)",
      "High-throughput relational data modeling and transactional integrity guarantees",
      "Automated compliance reporting, change data capture, and immutable audit logs",
    ],
    architecturePoints: [
      "Domain-Driven Design (DDD) with clean hexagonal / layered architecture",
      "PostgreSQL / CockroachDB with transactional row-level isolation",
      "Event streaming architectures via Apache Kafka or RabbitMQ",
      "Infrastructure-as-Code (Terraform, Docker, Kubernetes)",
    ],
    deliverables: [
      "Domain Architecture & Data Schema Specification",
      "Full-Stack Web Application & API Gateway",
      "RBAC & SSO Integration",
      "Disaster Recovery & Operational Runbooks",
    ],
    typicalTimeline: "8–16 weeks",
    typicalScope: "$35,000 – $150,000+",
  },
  {
    slug: "web-mobile-platforms",
    title: "Web & Mobile Platforms",
    eyebrow: "DIGITAL PRODUCTS",
    tabTitle: "04 Web & Mobile",
    businessHeadline: "Turn your business idea into a fast, reliable digital product.",
    businessExplanation:
      "Turn your idea or existing business process into a fast, professional digital product your customers and teams can actually use on web and mobile devices.",
    tagline:
      "High-performance digital products engineered for enterprise scale, responsive velocity, and seamless UX.",
    description:
      "Whether you are launching a client-facing SaaS platform, a mobile field-operations app, or a customer portal, ATCDL engineers frontends and APIs that load in milliseconds, maintain pristine accessibility, and scale effortlessly under heavy load.",
    deliverableItems: [
      {
        title: "Production Web Platform",
        description: "A lightning-fast Next.js web application built with responsive layouts, accessible typography, and SEO optimization.",
        metricOrDetail: "Sub-second page loads (Lighthouse 90+)",
      },
      {
        title: "Cross-Platform Mobile Apps",
        description: "Native iOS and Android mobile applications sharing a unified codebase with push alerts and offline sync capabilities.",
        metricOrDetail: "App Store & Play Store ready",
      },
      {
        title: "Scalable Backend & APIs",
        description: "Type-safe REST and GraphQL APIs with robust authentication, database caching, and transactional payment integration.",
        metricOrDetail: "Stripe, local payment gateways & OAuth2",
      },
      {
        title: "Analytics & Telemetry Suite",
        description: "Full observability instrumentation tracking user conversion funnels, error rates, and Core Web Vitals in real time.",
        metricOrDetail: "Privacy-compliant telemetry",
      },
    ],
    packages: [
      {
        id: "digital-launch",
        name: "Digital Launch",
        tagline: "Launch a fast, responsive web application or customer portal.",
        scopeConcept: "1 core web application or client portal with user authentication and core workflow.",
        designedFor: "Businesses launching their first digital customer experience or MVP product.",
        deliverableConcept: "A production-ready web platform with user onboarding, core service dashboard, and transactional notifications.",
        pricingPkr: "PKR 150,000 – 400,000",
        pricingUsd: "$8,000 – $20,000",
        timeline: "3–5 weeks",
        features: [
          "Responsive Next.js web application",
          "Secure user authentication (Email / Google)",
          "1 core customer workflow / portal dashboard",
          "Transactional email notifications",
          "Sub-second page loads & SEO foundation",
        ],
        visualType: "starter",
      },
      {
        id: "product-platform",
        name: "Product Platform",
        tagline: "Web + mobile product ecosystem with real-time sync and payment billing.",
        scopeConcept: "Full web application, mobile app (iOS/Android), administrative dashboard, and payment gateway.",
        designedFor: "Companies scaling a digital product business requiring omni-channel customer access.",
        deliverableConcept: "Complete multi-platform digital product with mobile app store deployment, billing, and admin telemetry.",
        pricingPkr: "PKR 400,000 – 1,200,000",
        pricingUsd: "$25,000 – $75,000",
        timeline: "6–10 weeks",
        features: [
          "Next.js web portal + iOS & Android mobile apps",
          "Payment gateway integration (Stripe / Local)",
          "Admin management & customer support portal",
          "Real-time WebSocket notifications & live chat",
          "Interactive onboarding flows & telemetry",
        ],
        visualType: "workspace",
        isPopular: true,
      },
      {
        id: "digital-ecosystem",
        name: "Digital Ecosystem",
        tagline: "High-scale multi-tier platform engineered for millions of requests.",
        scopeConcept: "Enterprise-grade platform ecosystem with microservices, global edge caching, and real-time collaboration.",
        designedFor: "Enterprises and founding partners building mission-critical platforms handling high concurrency and data volume.",
        deliverableConcept: "We are partnering with founding enterprise leaders to architect flagship consumer and enterprise platforms.",
        pricingPkr: "Custom quote only",
        pricingUsd: "$75,000 – $150,000+",
        timeline: "10–16 weeks",
        features: [
          "Multi-tenant microservice architecture",
          "Edge-distributed CDN caching & global replication",
          "High-concurrency database clustering",
          "Advanced conversion funnel analytics & A/B testing",
          "Dedicated 99.9% uptime SLA & infrastructure scaling",
        ],
        visualType: "command",
      },
    ],
    comparisonFeatures: [
      { name: "Sub-Second Next.js Frontend", starter: true, growth: true, scale: true },
      { name: "Secure User Authentication", starter: true, growth: true, scale: true },
      { name: "Core Customer Portal", starter: true, growth: true, scale: true },
      { name: "Native iOS & Android Mobile Apps", starter: false, growth: true, scale: true },
      { name: "Payment Gateway Billing Integration", starter: false, growth: true, scale: true },
      { name: "Admin Operations & Telemetry Dashboard", starter: false, growth: true, scale: true },
      { name: "Multi-Tenant SaaS Architecture", starter: false, growth: false, scale: true },
      { name: "Global Edge-Distributed Caching", starter: false, growth: false, scale: true },
      { name: "24/7 Production SLA & Load Balancing", starter: false, growth: false, scale: true },
    ],
    howItWorksSteps: [
      {
        step: "01",
        title: "Define the Product",
        description: "We map your user journeys, core conversion funnels, and technical constraints into a focused prototype specification.",
      },
      {
        step: "02",
        title: "Design the Experience",
        description: "We produce clickable, high-fidelity UI blueprints and design tokens ensuring seamless usability across all screen sizes.",
      },
      {
        step: "03",
        title: "Build the Platform",
        description: "We engineer frontends and APIs with automated test suites, sub-second response times, and bulletproof security.",
      },
      {
        step: "04",
        title: "Launch & Scale",
        description: "We orchestrate zero-downtime deployment, app store submissions, analytics instrumentation, and continuous scaling.",
      },
    ],
    idealFor: [
      "You have a business model or customer service workflow that urgently needs a modern digital frontend.",
      "Your customers demand mobile access to place orders, track shipments, or review account data on iOS and Android.",
      "Your current website or portal is sluggish, buggy on mobile devices, or difficult for clients to navigate.",
      "You are launching a SaaS startup or marketplace and need an engineering partner to build production-grade software.",
      "You need an application that scales seamlessly from 100 to 100,000 users without crashing.",
    ],
    whatWeDontDo:
      "We don't build disposable low-code toys or bloated WordPress sites that choke under real traffic. We write production-grade TypeScript codebases with clean architecture, complete test coverage, and full IP ownership.",
    capabilities: [
      "Next.js App Router applications with static pre-rendering and sub-second navigation",
      "Cross-platform mobile applications (React Native / Flutter) with offline sync support",
      "Rigorous WCAG 2.2 AA accessibility and internationalization architectures",
      "Real-time collaborative workspaces via WebSockets and CRDTs",
      "Comprehensive telemetry, error reporting, and Core Web Vitals optimization",
    ],
    architecturePoints: [
      "Edge-distributed caching with Cloudflare / Vercel Edge networks",
      "Component design systems built with CSS variable tokens and zero layout shifts",
      "Automated CI/CD pipelines with linting, unit testing, and Playwright smoke tests",
      "Type-safe end-to-end contracts using TypeScript and Zod",
    ],
    deliverables: [
      "Design System & Tokenized Component Library",
      "Responsive Web & Mobile Application Codebase",
      "Automated CI/CD Pipeline & Staging Environment",
      "Lighthouse 90+ & WCAG 2.2 AA Audit Report",
    ],
    typicalTimeline: "6–12 weeks",
    typicalScope: "$20,000 – $80,000",
  },
];

// SEED DATA: PITCH LAB IDEAS (All marked honestly with status: "Concept")
export const IDEAS: Idea[] = [
  {
    slug: "telecom-ai-ops",
    title: "Autonomous Telecom Network & Customer Operations",
    industry: "Telecom",
    concept:
      "Self-healing network ticket resolution and omnichannel subscriber billing copilot built for high-throughput telecom infrastructures.",
    problem:
      "Tier-1 telecom NOC teams drown in 15,000+ daily alert spikes across heterogeneous cell towers and microwave links, while subscribers face 25-minute wait times during regional outages.",
    solution:
      "A dual-engine platform combining real-time Kafka alarm correlation with multilingual WhatsApp/web subscriber agents to deflect tier-1 inquiries and isolate tower root causes in seconds.",
    howItWorks: [
      "Kafka telemetry stream ingests tower alarm packets and deduplicates cascading flapping alerts",
      "Vector search correlates active alerts with historical field remediation logs and circuit schematics",
      "Multilingual AI Agent deflects inbound WhatsApp subscriber tickets with live geofenced restoration ETAs",
      "Automated dispatch payloads format diagnostic briefs directly for field engineering crews",
    ],
    potentialValue:
      "Projected 65% reduction in Tier-1 support call volume and 40% faster mean-time-to-resolution (MTTR) on network outages.",
    status: "Concept",
    roadmap: ["Architecture Blueprint", "Kafka Telemetry Adapter", "Subscriber WhatsApp Agent", "Field Dispatch API"],
    relevantProduct: "atcdl-agents",
    relevantSolution: "ai-agents",
  },
  {
    slug: "banking-customer-ops",
    title: "Private Financial Knowledge & Regulatory Compliance Copilot",
    industry: "Banking & Finance",
    concept:
      "Air-gapped compliance auditing and wealth management assistant operating under strict zero-data-retention parameters.",
    problem:
      "Relationship managers and compliance analysts lose 3–4 hours daily cross-referencing multi-jurisdictional AML/KYC regulations and investment prospectuses.",
    solution:
      "A self-hosted, RBAC-governed RAG engine that queries internal bank policy directives, cross-border banking laws, and customer transaction records with cryptographic verification.",
    howItWorks: [
      "On-premises vector embedding of central bank circulars, sanctions databases, and product disclosures",
      "Hardware-enforced tenant isolation ensuring loan officers only access authorized client files",
      "In-line clickable citation viewer displaying exact paragraphs and legal regulatory amendments",
      "Automated audit trail logging all prompt histories for FINRA / SEC compliance reviews",
    ],
    potentialValue:
      "Cuts regulatory review cycle times from 48 hours to under 15 minutes while ensuring zero customer PII leaves bank VPC boundaries.",
    status: "Concept",
    roadmap: ["Security & RBAC Audit", "Local LLM Benchmark (vLLM)", "Document Parser Pipeline", "Audit Dashboard"],
    relevantProduct: "atcdl-ask",
    relevantSolution: "custom-ai",
  },
  {
    slug: "manufacturing-intelligent-ops",
    title: "Factory Telemetry & Predictive Maintenance Hub",
    industry: "Manufacturing",
    concept:
      "Real-time sensor telemetry processing and automated equipment maintenance scheduling for industrial facilities.",
    problem:
      "Unplanned stamping press and CNC machine downtime costs automotive and heavy fabrication facilities thousands of dollars per idle hour with siloed PLC logs.",
    solution:
      "An integrated operations control tower combining edge MQTT telemetry streams, vibration anomaly detection, and automated technician work-order dispatching.",
    howItWorks: [
      "Edge gateway aggregates high-frequency vibration, thermal, and electrical telemetry from factory PLCs",
      "Statistical anomaly detection flags mechanical deviation 48 hours before component catastrophic failure",
      "Workflow engine cross-checks spare-part inventory in SAP and generates maintenance tickets",
      "Technician mobile interface provides AR schematics and step-by-step repair checklists",
    ],
    potentialValue:
      "Anticipated 28% reduction in unplanned line halts and automated spare-part replenishment cycles.",
    status: "Concept",
    roadmap: ["PLC / MQTT Ingestion Engine", "Anomaly Scoring Model", "SAP PM Integration", "Technician Mobile View"],
    relevantProduct: "atcdl-ops",
    relevantSolution: "enterprise-software",
  },
  {
    slug: "logistics-control-tower",
    title: "Multi-Modal Freight Dispatch & Customs Intelligence",
    industry: "Logistics",
    concept:
      "Autonomous freight document parsing, customs declaration validation, and dynamic route exception monitoring.",
    problem:
      "Freight forwarders handle hundreds of mismatched bills of lading, commercial invoices, and packing lists daily, leading to port detention fees and manual re-typing.",
    solution:
      "A document intelligence and dispatch pipeline that extracts customs fields from messy scans, verifies tariff codes, and dispatches real-time carrier tracking alerts.",
    howItWorks: [
      "Ingests scanned shipping manifests and bills of lading via automated email parser",
      "Extracts Harmonized System (HS) codes, weights, and consignee data with cross-validation checks",
      "Flags tariff discrepancies and missing declarations before containers reach customs ports",
      "Syncs cleared shipments into dispatch schedules with automated SMS/email driver updates",
    ],
    potentialValue:
      "Eliminates 90% of manual data entry in freight clearance and prevents container demurrage charges.",
    status: "Concept",
    roadmap: ["Document OCR Pipeline", "HS Code Validation Model", "Port Telemetry Tracker", "ERP Connector"],
    relevantProduct: "atcdl-docs",
    relevantSolution: "ai-agents",
  },
];

// SEED DATA: INDUSTRIES
export const INDUSTRIES: Industry[] = [
  {
    slug: "telecom",
    name: "Telecommunications & Networks",
    eyebrow: "HIGH-CONCURRENCY INFRASTRUCTURE",
    tagline: "Scalable AI agent fleets, alarm telemetry correlation, and subscriber self-service for national operators.",
    summary:
      "Telecom operators manage millions of subscribers and thousands of network nodes. We engineer autonomous agent architectures that resolve billing and technical queries over WhatsApp, correlate Kafka network alarms, and eliminate tier-1 support bottlenecks.",
    challenges: [
      "Massive inquiry surges during localized fiber cuts and network degradations",
      "Fragmented subscriber data across legacy billing BSS/OSS and ticketing databases",
      "Strict data sovereignty rules requiring in-country compute and telecom compliance",
      "High agent churn and rising operational costs in offshore support contact centers",
    ],
    solutions: [
      "Omnichannel AI Agent platform answering queries in English, Arabic, and regional dialects",
      "Kafka alarm streaming pipeline isolating root causes from thousands of cascading tower alerts",
      "Secure CRM & BSS integration for balance checks, plan adjustments, and SIM provisioning",
      "Human-in-the-loop escalation consoles providing full conversational summaries to tier-2 engineers",
    ],
    architectureHighlights: [
      "Microservices deployed on private cloud or on-premise Kubernetes clusters",
      "Sub-200ms streaming responses via WebSocket and WebRTC connections",
      "Stateless session brokers with Redis cluster caching and Postgres audit persistence",
    ],
    relevantProjects: ["workflow-automation-bots", "ai-workforce-assistant"],
    relevantProducts: ["atcdl-agents", "atcdl-ask"],
    relevantIdeas: ["telecom-ai-ops"],
  },
  {
    slug: "banking-finance",
    name: "Banking & Financial Services",
    eyebrow: "SECURITY-FIRST ENTERPRISE ARCHITECTURE",
    tagline: "Air-gapped private copilots, KYC document automation, and immutable audit logs for regulated institutions.",
    summary:
      "Financial institutions cannot compromise on regulatory compliance, data isolation, or transactional integrity. We build air-gapped knowledge copilots and document intelligence engines that parse prospectuses and contracts without leaking customer PII.",
    challenges: [
      "Zero tolerance for third-party cloud data retention or public LLM training exposure",
      "Hundreds of hours lost by compliance teams reviewing cross-border regulatory circulars",
      "Manual extraction bottlenecks in commercial lending, mortgage underwriting, and KYC",
      "Fragmented core banking mainframes with brittle API adapters",
    ],
    solutions: [
      "Private on-premises RAG copilots deployed with vLLM / Ollama behind bank firewalls",
      "Automated financial document parsing and balance sheet extraction with math verification",
      "Strict Role-Based Access Control (RBAC) mapped directly to Active Directory groups",
      "Cryptographic tamper-evident audit logs capturing every query, retrieval, and inference",
    ],
    architectureHighlights: [
      "VPC and air-gapped on-premises GPU deployment configurations",
      "pgvector / Qdrant with tenant-level cryptographic isolation",
      "Strict zero-data-retention SLAs with enterprise endpoint models",
    ],
    relevantProjects: ["ai-workforce-assistant"],
    relevantProducts: ["atcdl-docs", "atcdl-ask"],
    relevantIdeas: ["banking-customer-ops"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    eyebrow: "OPERATIONAL RELIABILITY",
    tagline: "Factory floor telemetry, predictive maintenance, and multi-tier approval workflows for industrial facilities.",
    summary:
      "Modern manufacturers operate complex supply chains and high-value capital machinery. We bridge legacy PLCs and modern cloud systems with real-time operational control towers, predictive maintenance pipelines, and automated shift handoff tooling.",
    challenges: [
      "Unplanned machine downtime causing cascading production delays and idle labor costs",
      "Fragmented sensor logs locked inside proprietary PLC software and SCADA terminals",
      "Paper-based machine inspection logs and slow maintenance work-order sign-offs",
      "Siloed inventory systems causing unexpected stockouts of critical machine spare parts",
    ],
    solutions: [
      "Unified operations control towers aggregating telemetry from factory MQTT brokers",
      "Anomaly detection models identifying mechanical drift 48 hours prior to equipment failure",
      "Digital multi-tier approval matrix with SLA timers for capital purchases and repairs",
      "Computer vision quality benchmarks for automated component defect identification",
    ],
    architectureHighlights: [
      "Edge-to-cloud telemetry ingestion via MQTT, Kafka, and timeseries databases",
      "Configurable escalation bots notifying plant managers via mobile and desktop alerts",
      "Direct integration with SAP Plant Maintenance (PM) and Materials Management (MM)",
    ],
    relevantProjects: ["fashion-mnist-classifier"],
    relevantProducts: ["atcdl-ops", "atcdl-flow"],
    relevantIdeas: ["manufacturing-intelligent-ops"],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    eyebrow: "MISSION-CRITICAL VELOCITY",
    tagline: "Automated customs extraction, freight bill reconciliation, and real-time dispatch control towers.",
    summary:
      "Logistics speed determines commercial profitability. We build automated document intelligence engines that parse bills of lading and commercial invoices in seconds, verifying customs declarations and preventing port demurrage penalties.",
    challenges: [
      "Manual re-keying of international shipping documents across inconsistent paper layouts",
      "Customs declaration errors resulting in expensive port holds and demurrage charges",
      "Disconnected transport management systems (TMS) and customer tracking portals",
      "Lack of real-time visibility into cross-border container delays and carrier handoffs",
    ],
    solutions: [
      "Neural document extraction converting messy bills of lading into structured ERP data",
      "Cross-validation engines matching commercial invoice totals with customs declarations",
      "Automated exception tracking notifying dispatchers of shipping bottlenecks immediately",
      "Interactive portal for shippers with real-time milestones and status audit logs",
    ],
    architectureHighlights: [
      "OCR + token classification microservice processing PDFs, scans, and emails",
      "Webhook and REST integration with carrier APIs and customs broker systems",
      "Encrypted cloud storage with automatic document deduplication and archival",
    ],
    relevantProjects: ["neiki-operations-platform"],
    relevantProducts: ["atcdl-docs", "atcdl-ops"],
    relevantIdeas: ["logistics-control-tower"],
  },
];

// SEED DATA: LABS & OPEN SOURCE
export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    slug: "fashion-mnist-vision",
    title: "Fashion-MNIST Deep Vision Benchmark",
    category: "AI & ML Benchmark",
    status: "Lab",
    description:
      "Benchmarking PyTorch convolutional neural networks with batch normalization and dropout regularization for multi-class visual recognition under compute-constrained environments.",
    technicalTakeaway:
      "Evaluated CNN depth and regularization tradeoffs on standard visual benchmarks to assess lightweight model deployment feasibility on CPU-only edge devices.",
    stack: ["PyTorch", "Python", "Matplotlib", "NumPy", "CUDA"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Dataset", value: "Fashion-MNIST" },
      { label: "Topology", value: "CNN + Dropout" },
      { label: "Target", value: "Edge CPU / GPU" },
    ],
  },
  {
    slug: "discord-figma-bots",
    title: "Event-Driven Discord & Figma Workflow Bridge",
    category: "Workflow Tooling",
    status: "Open Source",
    description:
      "Bi-directional webhook synchronization service translating Figma version publish events into interactive Discord rich embeds with action buttons.",
    technicalTakeaway:
      "Implemented idempotent webhook consumers to bridge design file changes directly into engineering chat channels with zero message drops.",
    stack: ["Node.js", "Discord.js", "Figma REST API", "Webhooks", "TypeScript"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Architecture", value: "Webhook Event Bus" },
      { label: "Payload", value: "Discord Rich Embeds" },
      { label: "Codebase", value: "100% TypeScript" },
    ],
  },
  {
    slug: "hybrid-rag-benchmark",
    title: "Hybrid Lexical + Vector Retrieval Benchmark",
    category: "Architecture Prototype",
    status: "Lab",
    description:
      "Comparative architectural study measuring BM25 lexical ranking combined with dense semantic embeddings over domain-specific structured documents.",
    technicalTakeaway:
      "Demonstrated that combining sparse lexical signals with dense vector embeddings via Reciprocal Rank Fusion (RRF) prevents retrieval misses on domain-specific acronyms and part numbers.",
    stack: ["pgvector", "BM25", "Python", "FastAPI", "TypeScript"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Search Mode", value: "Hybrid Lexical + Vector" },
      { label: "Ranking Logic", value: "Reciprocal Rank Fusion" },
      { label: "Storage", value: "pgvector / PostgreSQL" },
    ],
  },
  {
    slug: "rate-limiter-resilience",
    title: "Multi-Tier Rate Limiting & Failover Architecture",
    category: "Architecture Prototype",
    status: "Prototype",
    description:
      "Distributed rate-limiting architecture featuring an Upstash Redis primary sliding-window layer with automatic zero-downtime fallback to transactional SQLite/Prisma storage.",
    technicalTakeaway:
      "Eliminates single points of failure in API rate-limiting by automatically failing over to transactional database leases if cloud Redis latency spikes or degrades.",
    stack: ["Upstash Redis", "Prisma", "SQLite / PostgreSQL", "TypeScript", "Next.js"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Primary Tier", value: "Redis Sliding Window" },
      { label: "Fallback Tier", value: "Transactional DB Lease" },
      { label: "Resilience", value: "Zero-Downtime Failover" },
    ],
  },
];


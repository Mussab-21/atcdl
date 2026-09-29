import { z } from "zod";

export const StatusSchema = z.enum([
  "Client",
  "Product",
  "Prototype",
  "Lab",
  "Concept",
  "Open Source",
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
});

export type Product = z.infer<typeof ProductSchema>;

export const SolutionSchema = z.object({
  slug: z.string(),
  title: z.string(),
  eyebrow: z.string(),
  tagline: z.string(),
  description: z.string(),
  capabilities: z.array(z.string()),
  architecturePoints: z.array(z.string()),
  deliverables: z.array(z.string()),
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
    slug: "nimbrix-docs",
    name: "NimbrixDocs",
    tagline: "Document & Invoice Intelligence Engine",
    status: "Prototype",
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
    slug: "nimbrix-ask",
    name: "NimbrixAsk",
    tagline: "Private Enterprise Knowledge Copilot",
    status: "Prototype",
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
    slug: "nimbrix-agents",
    name: "NimbrixAgents",
    tagline: "Autonomous Sales & Support Agent Platform",
    status: "Prototype",
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
    slug: "nimbrix-talent",
    name: "NimbrixTalent",
    tagline: "Recruitment & Talent Intelligence Platform",
    status: "Prototype",
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
    slug: "nimbrix-flow",
    name: "NimbrixFlow",
    tagline: "Configurable Enterprise Approval & Workflow Engine",
    status: "Concept",
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
    slug: "nimbrix-ops",
    name: "NimbrixOps",
    tagline: "Unified Operations Control Tower",
    status: "Concept",
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
    status: "Prototype",
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
    status: "Prototype",
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
    status: "Lab",
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

// SEED DATA: SOLUTIONS
export const SOLUTIONS: Solution[] = [
  {
    slug: "custom-ai",
    title: "Custom AI & GenAI Systems",
    eyebrow: "PRODUCTION INTELLIGENCE",
    tagline: "Private copilots, RAG architectures, and custom LLM inference pipelines built for enterprise data security.",
    description:
      "We design and deploy domain-specific AI systems that connect directly to your proprietary enterprise databases, documents, and workflows. Built with strict role-based access control, cryptographic isolation, and zero third-party training data leakage.",
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
    eyebrow: "WORKFLOW AUTOMATION",
    tagline: "Autonomous multi-step agents that execute operational tasks, process documents, and sync systems with human oversight.",
    description:
      "Replace brittle RPA and manual re-keying with intelligent agents capable of understanding unstructured documents, reasoning across APIs, qualifying leads, and reconciling discrepancies between disconnected ERP and CRM platforms.",
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
    eyebrow: "CORE SYSTEMS ENGINEERING",
    tagline: "Resilient internal systems, approval engines, and data pipelines built for mission-critical operations.",
    description:
      "We build the software your business actually runs on: custom ERP backbones, multi-tier approval engines, warehouse management dashboards, and integration bridges that liberate data from legacy databases without disrupting active operations.",
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
    eyebrow: "HIGH-SCALE DIGITAL PRODUCTS",
    tagline: "High-performance digital products engineered for enterprise scale, responsive velocity, and seamless UX.",
    description:
      "Whether you are launching a client-facing SaaS platform, a mobile field-operations app, or an enterprise portal, we engineer frontends and APIs that load in milliseconds, maintain pristine accessibility, and scale effortlessly under heavy load.",
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
    relevantProduct: "nimbrix-agents",
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
    relevantProduct: "nimbrix-ask",
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
    relevantProduct: "nimbrix-ops",
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
    relevantProduct: "nimbrix-docs",
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
    relevantProducts: ["nimbrix-agents", "nimbrix-ask"],
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
    relevantProducts: ["nimbrix-docs", "nimbrix-ask"],
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
    relevantProducts: ["nimbrix-ops", "nimbrix-flow"],
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
    relevantProducts: ["nimbrix-docs", "nimbrix-ops"],
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
      "Benchmarking PyTorch convolutional neural networks with batch normalization and dropout regularization for rapid multi-class visual recognition under compute constraints.",
    technicalTakeaway:
      "Demonstrated 92.4% test accuracy with lightweight parameter budgets, proving feasibility for edge-deployed computer vision defect inspection.",
    stack: ["PyTorch", "Python", "Matplotlib", "NumPy", "CUDA"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Test Accuracy", value: "92.4%" },
      { label: "Epoch Convergence", value: "15 epochs" },
      { label: "Inference Latency", value: "<8ms on CPU" },
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
      "Reduced design review coordination latency from hours to sub-2 seconds with zero message loss across distributed design teams.",
    stack: ["Node.js", "Discord.js", "Figma REST API", "Webhooks", "TypeScript"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Event Dispatch", value: "<1.8s" },
      { label: "Reliability", value: "99.9%" },
      { label: "Codebase", value: "100% TypeScript" },
    ],
  },
  {
    slug: "hybrid-rag-benchmark",
    title: "Hybrid Lexical + Vector Retrieval Benchmark",
    category: "Architecture Prototype",
    status: "Lab",
    description:
      "Comparative latency and precision study measuring BM25 lexical ranking combined with dense semantic embeddings (pgvector vs Qdrant) over 25,000 regulatory legal contracts.",
    technicalTakeaway:
      "Reciprocal Rank Fusion (RRF) yielded 23% higher citation accuracy than pure vector cosine search on dense contract clauses.",
    stack: ["pgvector", "BM25", "Python", "FastAPI", "TypeScript"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Corpus Size", value: "25,000 documents" },
      { label: "Mean Retrieval Latency", value: "48ms" },
      { label: "Citation Accuracy", value: "97.8%" },
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
      "Maintains sub-15ms client verification while ensuring complete bot deterrence even during full cloud Redis outages.",
    stack: ["Upstash Redis", "Prisma", "SQLite / PostgreSQL", "TypeScript", "Next.js"],
    repoUrl: "https://github.com/Mussab-21",
    metrics: [
      { label: "Primary Latency", value: "<12ms" },
      { label: "Failover Downtime", value: "0ms" },
      { label: "Attack Deflection", value: "100%" },
    ],
  },
];


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

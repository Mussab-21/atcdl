export type ProductCategory =
  | "ALL"
  | "AI"
  | "DOCUMENTS"
  | "AUTOMATION"
  | "COMMUNICATION"
  | "OPERATIONS"
  | "PLATFORMS";

export type ProductStatus = "Prototype" | "In Development" | "Beta" | "Concept" | "Live";

export interface LabProduct {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  category: "AI" | "DOCUMENTS" | "AUTOMATION" | "COMMUNICATION" | "OPERATIONS" | "PLATFORMS";
  categories: ProductCategory[];
  status: ProductStatus;
  statusBadge: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  howItWorks: string[];
  modules: string[];
  integrations: string[];
  targetUsers: string;
  visualType:
    | "document-flow"
    | "knowledge-brain"
    | "agent-triage"
    | "talent-screening"
    | "workflow-sequence"
    | "operations-tower";
  demoHighlight: string;
  ctaText: string;
  ctaAction: "early-access" | "discuss" | "beta" | "open";
  isFeatured?: boolean;
}

export const PRODUCTS_LAB_DATA: {
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
  };
  categories: { id: ProductCategory; label: string }[];
  products: LabProduct[];
  roadmapStages: {
    stage: string;
    title: string;
    subtitle: string;
    desc: string;
  }[];
  ecosystemNodes: {
    id: string;
    label: string;
    type: string;
    products: string[];
  }[];
} = {
  hero: {
    eyebrow: "ATCDL PRODUCT LAB",
    headline: "Products built to solve real operational problems.",
    supporting:
      "Explore ATCDL's software products — intelligent systems designed to simplify documents, workflows, communication, operations, and business data.",
    primaryCta: "Explore Products",
    secondaryCta: "Build Something Custom",
  },

  categories: [
    { id: "ALL", label: "All Products" },
    { id: "AI", label: "AI & Intelligence" },
    { id: "DOCUMENTS", label: "Documents" },
    { id: "AUTOMATION", label: "Automation" },
    { id: "COMMUNICATION", label: "Communication" },
    { id: "OPERATIONS", label: "Operations" },
    { id: "PLATFORMS", label: "Platforms" },
  ],

  products: [
    {
      id: "atcdl-docs",
      slug: "atcdl-docs",
      number: "01",
      name: "ATCDL Docs",
      tagline: "Document & Invoice Intelligence Engine",
      category: "DOCUMENTS",
      categories: ["ALL", "DOCUMENTS", "AI"],
      status: "Prototype",
      statusBadge: "● PROTOTYPE",
      shortDescription:
        "Turn unstructured invoices, bills of lading, and paper forms into verified structured records your systems can use.",
      longDescription:
        "An intelligent document processing engine combining OCR, geometry layout parsing, and token classification. It extracts key-value pairs, validates line-item math, and posts payloads directly into your accounting software or ERP.",
      problem:
        "Finance and operations teams waste dozens of hours every week manually re-keying invoices, bills of lading, and tax forms into accounting software and ERPs.",
      howItWorks: [
        "Inbound capture via email watcher, REST API webhook, or file upload",
        "Multi-lingual OCR + neural layout geometry extraction",
        "Deterministic cross-field math validation and duplicate detection",
        "Human review console for flagged low-confidence values",
        "Direct export to SAP, QuickBooks, Xero, or PostgreSQL",
      ],
      modules: [
        "Document Capture Gateway",
        "OCR & Neural Layout Extractor",
        "Cross-Field Validation Engine",
        "Human Verification Console",
        "ERP/GL Export Pipeline",
      ],
      integrations: ["SAP S/4HANA", "QuickBooks", "Xero", "PostgreSQL", "Amazon S3", "Webhooks"],
      targetUsers: "Finance managers, accounts payable teams, logistics dispatchers, and audit personnel.",
      visualType: "document-flow",
      demoHighlight: "60-second invoice extraction with live SAP reconciliation payload",
      ctaText: "Request Early Access",
      ctaAction: "early-access",
      isFeatured: true,
    },
    {
      id: "atcdl-ask",
      slug: "atcdl-ask",
      number: "02",
      name: "ATCDL Ask",
      tagline: "Private Enterprise Knowledge Copilot",
      category: "AI",
      categories: ["ALL", "AI", "DOCUMENTS"],
      status: "Prototype",
      statusBadge: "● PROTOTYPE",
      shortDescription:
        "Ask your company's SOPs, policy PDFs, and manuals instead of searching through scattered folders.",
      longDescription:
        "A private enterprise knowledge assistant that connects to internal document repositories. Staff ask questions in plain language and receive grounded answers with exact page, paragraph, and source citations.",
      problem:
        "Staff waste up to 20% of their working hours searching through scattered SharePoint folders, Google Drives, Confluence wikis, and SOP PDFs to find authoritative business answers.",
      howItWorks: [
        "Scheduled incremental sync across internal SharePoint, Google Drive & Confluence",
        "Document chunking, vector embedding, and hybrid lexical search",
        "Role-Based Access Control (RBAC) enforcing existing Active Directory permissions",
        "Grounded LLM response generation with inline clickable page citations",
        "Telemetry console tracking unanswered queries to pinpoint documentation gaps",
      ],
      modules: [
        "Multi-Source Connector Suite",
        "RBAC Permission Filter",
        "Hybrid Vector Search Engine",
        "Citation Generation UI",
        "Knowledge Telemetry Dashboard",
      ],
      integrations: ["Microsoft SharePoint", "Google Drive", "Confluence", "Notion", "Slack", "REST API"],
      targetUsers: "HR leaders, legal counsel, customer support leads, compliance officers, and operations staff.",
      visualType: "knowledge-brain",
      demoHighlight: "Upload a 50-page policy manual and get grounded answers with citations in seconds",
      ctaText: "Request Early Access",
      ctaAction: "early-access",
    },
    {
      id: "atcdl-agents",
      slug: "atcdl-agents",
      number: "03",
      name: "ATCDL Agents",
      tagline: "Autonomous Sales & Support Agent Platform",
      category: "COMMUNICATION",
      categories: ["ALL", "AI", "AUTOMATION"],
      status: "Prototype",
      statusBadge: "● PROTOTYPE",
      shortDescription:
        "One intelligent assistant handling customer inquiries across Web Chat, WhatsApp, and Email with human handoff.",
      longDescription:
        "An omnichannel conversational agent that authenticates customer context against your CRM, answers common product questions 24/7, schedules discovery calls, and routes complex edge cases to human managers.",
      problem:
        "High-value leads go cold overnight and support queues back up because human teams cannot respond 24/7 across multiple web and messaging channels.",
      howItWorks: [
        "Omnichannel listeners on Web Chat, WhatsApp Business API, and email",
        "Customer authentication against CRM records and account history",
        "Qualifies buyer budget, timeline, and use-case conversationally",
        "Executes authorized calendar bookings and CRM opportunity creation",
        "Seamless live handoff to human agents with full conversation summarization",
      ],
      modules: [
        "Omnichannel Connector (WhatsApp, Web, Email)",
        "Intent & Entity Classification Engine",
        "CRM & Calendar Two-Way Sync",
        "Guardrail & Policy Constraints",
        "Live Human Takeover Console",
      ],
      integrations: ["WhatsApp Business API", "HubSpot", "Salesforce", "Zendesk", "Cal.com", "PostgreSQL"],
      targetUsers: "Sales development teams, customer support directors, and customer success managers.",
      visualType: "agent-triage",
      demoHighlight: "Simulated lead qualification and automated CRM opportunity creation in 45 seconds",
      ctaText: "Request Early Access",
      ctaAction: "early-access",
    },
    {
      id: "atcdl-talent",
      slug: "atcdl-talent",
      number: "04",
      name: "ATCDL Talent",
      tagline: "Recruitment & Talent Intelligence Platform",
      category: "OPERATIONS",
      categories: ["ALL", "OPERATIONS", "AI", "DOCUMENTS"],
      status: "Prototype",
      statusBadge: "● PROTOTYPE",
      shortDescription:
        "Parse and screen candidate resumes against role requirements with structured competency matrices.",
      longDescription:
        "An AI-assisted recruitment platform that extracts candidate experience from PDF/Word resumes, evaluates skills against job specifications, and generates objective evaluation rubrics without replacing human judgment.",
      problem:
        "Hiring managers and HR teams drown in hundreds of resumes per job opening, leading to slow hiring cycles, candidate mismatches, and missed top performers.",
      howItWorks: [
        "Bulk upload of candidate resumes in PDF, DOCX, and TXT formats",
        "Deterministic extraction of years of experience, core skills, and certifications",
        "Semantic matching against job description requirements",
        "Objective ranking scores and role-specific technical interview questions",
        "One-click sync to Greenhouse, Lever, Workday, or CSV export",
      ],
      modules: [
        "Resume Parser & Entity Extractor",
        "Semantic Job Matcher",
        "Competency Gap Analyzer",
        "Interview Guide Generator",
        "ATS Connector",
      ],
      integrations: ["Greenhouse", "Lever", "Workday", "CSV / JSON Export"],
      targetUsers: "Talent acquisition managers, recruiting agencies, HR directors, and hiring managers.",
      visualType: "talent-screening",
      demoHighlight: "Resume-to-JD match score with instant skill gap analysis",
      ctaText: "Request Early Access",
      ctaAction: "early-access",
    },
    {
      id: "atcdl-flow",
      slug: "atcdl-flow",
      number: "05",
      name: "ATCDL Flow",
      tagline: "Enterprise Approval & Workflow Engine",
      category: "AUTOMATION",
      categories: ["ALL", "AUTOMATION", "OPERATIONS"],
      status: "Concept",
      statusBadge: "● CONCEPT",
      shortDescription:
        "Eliminate sign-off delays with multi-tier approval chains, SLA timers, and Slack/Teams notification cards.",
      longDescription:
        "A configurable business process orchestration engine that routes purchase requests, capital expenditures, and operational sign-offs according to strict organizational thresholds and escalation policies.",
      problem:
        "Internal approvals for capital expenses, procurement, and onboarding stall in email threads with zero SLA enforcement and incomplete audit trails.",
      howItWorks: [
        "Form submission triggers an automated approval state machine",
        "Evaluates numerical thresholds (e.g. Director approval for spend > $5,000)",
        "Dispatches interactive action cards into Slack, Microsoft Teams, or email",
        "Enforces SLA timers with automatic escalation if an approver is out of office",
        "Generates immutable audit logs for compliance review",
      ],
      modules: [
        "Dynamic Form Designer",
        "Multi-Tier Approval Matrix",
        "SLA Timer & Escalation Bot",
        "Slack & Teams Bot Connectors",
        "Immutable Compliance Audit Trail",
      ],
      integrations: ["Slack", "Microsoft Teams", "Email", "SAP S/4HANA", "QuickBooks", "PostgreSQL"],
      targetUsers: "COOs, procurement directors, finance controllers, and enterprise department heads.",
      visualType: "workflow-sequence",
      demoHighlight: "Procurement sign-off flow routed through tiered SLAs",
      ctaText: "Discuss This Product",
      ctaAction: "discuss",
    },
    {
      id: "atcdl-ops",
      slug: "atcdl-ops",
      number: "06",
      name: "ATCDL Ops",
      tagline: "Unified Operations Control Tower",
      category: "PLATFORMS",
      categories: ["ALL", "PLATFORMS", "OPERATIONS"],
      status: "Concept",
      statusBadge: "● CONCEPT",
      shortDescription:
        "One centralized operational cockpit coordinating systems, active jobs, inventory, and real-time telemetry.",
      longDescription:
        "An enterprise operations command tower that aggregates telemetry across siloed databases, warehouse systems, and third-party APIs into one real-time dashboard with automated anomaly detection.",
      problem:
        "Operations leaders lack a single operational pane of glass, forcing them to toggle across siloed telemetry, warehouse databases, and ticket management systems.",
      howItWorks: [
        "Live data ingestion from internal PostgreSQL databases, Kafka streams & APIs",
        "Unified telemetry dashboard visualizing active throughput, stock, and jobs",
        "Automated anomaly triggers alerting managers before bottlenecks occur",
        "Two-way operational dispatch into warehouse and field management tools",
        "Executive PDF digest generation and margin analytics",
      ],
      modules: [
        "Real-Time Stream Ingestion Engine",
        "Interactive Operational Canvas",
        "Anomaly Detection Watcher",
        "Automated Alerting Gateway",
        "Executive Reporting Suite",
      ],
      integrations: ["PostgreSQL", "Apache Kafka", "Datadog", "PagerDuty", "Snowflake", "REST API"],
      targetUsers: "Chief Operating Officers, supply chain managers, warehouse directors, and executive leadership.",
      visualType: "operations-tower",
      demoHighlight: "Simulated fleet and order backlog telemetry dashboard with anomaly triggers",
      ctaText: "Discuss This Product",
      ctaAction: "discuss",
    },
  ],

  roadmapStages: [
    {
      stage: "01",
      title: "Concept & Problem Audit",
      subtitle: "Identified Friction",
      desc: "We identify high-friction operational workflows across multiple enterprise partners that warrant standardized software solutions.",
    },
    {
      stage: "02",
      title: "Architecture Prototype",
      subtitle: "Internal Lab Testing",
      desc: "Our engineering team designs schema contracts, neural models, and core pipelines, testing against hundreds of real edge cases.",
    },
    {
      stage: "03",
      title: "Private Partner Beta",
      subtitle: "Supervised Pilots",
      desc: "Selected enterprise partners deploy the product engine in parallel with their existing operations under direct engineering supervision.",
    },
    {
      stage: "04",
      title: "General Production Release",
      subtitle: "Committed 99.9% SLA",
      desc: "The product engine launches for commercial deployment with turnkey cloud hosting, on-premises air-gapped support, and committed SLAs.",
    },
    {
      stage: "05",
      title: "Continuous Iteration",
      subtitle: "Feedback-Driven Features",
      desc: "Regular quarterly releases adding third-party connectors, higher extraction precision, and advanced telemetry analytics.",
    },
  ],

  ecosystemNodes: [
    {
      id: "docs",
      label: "Documents",
      type: "Ingestion",
      products: ["ATCDL Docs"],
    },
    {
      id: "knowledge",
      label: "Knowledge",
      type: "Search",
      products: ["ATCDL Ask"],
    },
    {
      id: "core",
      label: "ATCDL Core",
      type: "Platform",
      products: ["Unified Data Layer"],
    },
    {
      id: "agents",
      label: "AI Agents",
      type: "Interaction",
      products: ["ATCDL Agents", "ATCDL Talent"],
    },
    {
      id: "workflows",
      label: "Workflows",
      type: "Automation",
      products: ["ATCDL Flow"],
    },
    {
      id: "operations",
      label: "Operations",
      type: "Cockpit",
      products: ["ATCDL Ops"],
    },
  ],
};

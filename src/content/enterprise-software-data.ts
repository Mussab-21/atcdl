export interface EnterprisePackage {
  id: "system-refresh" | "operations-platform" | "digital-core";
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

export interface EnterpriseHotspotItem {
  id: "operations" | "finance" | "sales" | "management";
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  keyOutputs: string[];
}

export interface EnterpriseDeliveryStage {
  step: string;
  id: "understand" | "design" | "build" | "launch";
  name: string;
  tagline: string;
  duration: string;
  copy: string;
  activities: string[];
  deliverable: string;
}

export interface EnterpriseFitScenario {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
}

export const ENTERPRISE_SOFTWARE_DATA = {
  hero: {
    eyebrow: "ENTERPRISE SOFTWARE & SYSTEMS",
    title: "Replace disconnected software with one system built around your business.",
    subtitle:
      "ATCDL modernizes internal software, manual workflows, and legacy processes into reliable systems your teams can actually use without operational disruption.",
    primaryCta: "Discuss Your System",
    secondaryCta: "See How It Works",
  },

  systemMap: [
    {
      id: "operations",
      step: "01",
      title: "Operations & Inventory",
      subtitle: "Orders, inventory, logistics & warehouse dispatch",
      description:
        "Connect warehouse staff, field managers, and dispatch teams through real-time stock tracking, automated order intake, and multi-tier operational approval chains.",
      badge: "Core Operations",
      keyOutputs: [
        "Live inventory synchronization across locations",
        "Configurable multi-tier sign-off workflows",
        "Real-time dispatch & fulfillment tracking",
      ],
    },
    {
      id: "finance",
      step: "02",
      title: "Finance & Accounting",
      subtitle: "Invoicing, reconciliations, ledgers & audit trails",
      description:
        "Eliminate version-conflicted spreadsheets. Automatically reconcile sales orders against receivables, match purchase orders to invoices, and maintain immutable audit logs.",
      badge: "Financial Engine",
      keyOutputs: [
        "Automated receivables & payables tracking",
        "Two-way sync with QuickBooks, Xero, or SAP",
        "Cryptographic change logs for compliance",
      ],
    },
    {
      id: "sales",
      step: "03",
      title: "Sales & Client Management",
      subtitle: "Customer accounts, quotes, contracts & CRM sync",
      description:
        "Give account executives and client service teams a unified view of customer records, active agreements, historical orders, and pending milestone deliverables.",
      badge: "Commercial CRM",
      keyOutputs: [
        "Unified customer history & contract vault",
        "Instant quote generation with approval locks",
        "Automated status alerts for client teams",
      ],
    },
    {
      id: "management",
      step: "04",
      title: "Management & Executive Oversight",
      subtitle: "Live KPI dashboards, margin analysis & reporting",
      description:
        "Executive leadership gains a real-time operational cockpit without needing to request manual Excel reports from department heads or wait for month-end close.",
      badge: "Executive Cockpit",
      keyOutputs: [
        "Real-time revenue, cost & volume telemetry",
        "Automated PDF executive digest generation",
        "Role-based drill-down permissions",
      ],
    },
  ] as EnterpriseHotspotItem[],

  packages: [
    {
      id: "system-refresh",
      level: "01",
      name: "System Refresh",
      tagline: "Modernize one critical process or outdated tool.",
      description:
        "Replace one brittle spreadsheet or legacy office application with a fast, modern internal web system without rebuilding your entire business.",
      timeline: "3–6 weeks",
      pricing: {
        PKR: {
          from: "PKR 150,000",
          range: "PKR 150,000 – 400,000",
          context: "Fixed milestone delivery for domestic SMEs",
        },
        USD: {
          from: "$8,000",
          range: "$8,000 – $20,000",
          context: "Turnkey modernization for international companies",
        },
      },
      capabilities: [
        { title: "1 Departmental Module", description: "Targeted operational tool with clean relational data" },
        { title: "Role-Based Authentication", description: "Secure staff logins with granular view/edit rights" },
        { title: "Relational PostgreSQL DB", description: "Strict data validation replacing formula corruption" },
        { title: "Clean CSV & PDF Exports", description: "Audit-ready reporting with instant data downloads" },
      ],
      deliverableSummary: "Production web system + PostgreSQL database + audit trail + 30-day warranty.",
      ctaText: "Choose System Refresh",
    },
    {
      id: "operations-platform",
      level: "02",
      name: "Operations Platform",
      isPopular: true,
      tagline: "Connect workflows, data, and teams in one system.",
      description:
        "A cohesive operational system uniting 3–5 departments with multi-tier approval chains, live executive dashboards, and third-party accounting sync.",
      timeline: "6–12 weeks",
      pricing: {
        PKR: {
          from: "PKR 400,000",
          range: "PKR 400,000 – 1,200,000",
          context: "Cross-department operational platform",
        },
        USD: {
          from: "$25,000",
          range: "$25,000 – $75,000",
          context: "Multi-module enterprise solution",
        },
      },
      capabilities: [
        { title: "Multi-Module Operations", description: "Covers 3–5 core business areas (Ops, Finance, Sales)" },
        { title: "Multi-Tier Approval Chains", description: "Configurable sign-offs with SLA escalation alerts" },
        { title: "Live Executive Dashboards", description: "Real-time KPI telemetry and departmental margins" },
        { title: "Third-Party Accounting Sync", description: "Automated sync with QuickBooks, Xero, or SAP" },
      ],
      deliverableSummary: "Enterprise platform + multi-module workflows + executive dashboard + team training.",
      ctaText: "Start Operations Platform",
    },
    {
      id: "digital-core",
      level: "03",
      name: "Digital Core",
      tagline: "Central digital backbone connecting your entire business.",
      description:
        "Comprehensive enterprise architecture connecting legacy databases, distributed branch offices, and third-party software with zero downtime.",
      timeline: "12–20 weeks",
      pricing: {
        PKR: {
          from: "Custom Quote",
          range: "Tailored to operation scale",
          context: "Founding enterprise partner cohort",
        },
        USD: {
          from: "$75,000",
          range: "$75,000 – $150,000+",
          context: "Full-scale custom enterprise core",
        },
      },
      capabilities: [
        { title: "Enterprise Architecture Backbone", description: "Domain-Driven Design (DDD) connecting all business units" },
        { title: "Zero-Downtime Data Migration", description: "Safe legacy record transfer with transactional rollback" },
        { title: "Enterprise SSO & SAML", description: "Okta, Azure AD, and granular role permission trees" },
        { title: "Disaster Recovery & 99.9% SLA", description: "High-availability clustering with dedicated support" },
      ],
      deliverableSummary: "Enterprise core platform + source code ownership + private cloud IaC + SLA.",
      ctaText: "Discuss Digital Core",
    },
  ] as EnterprisePackage[],

  comparisonMatrix: [
    { name: "Custom Relational Data Model (PostgreSQL)", refresh: true, ops: true, core: true },
    { name: "Role-Based Access Control (RBAC) & Permissions", refresh: true, ops: true, core: true },
    { name: "Responsive Desktop & Tablet Management UI", refresh: true, ops: true, core: true },
    { name: "Immutable Audit Logs (Who Changed What & When)", refresh: true, ops: true, core: true },
    { name: "Multi-Tier Approval Chains & SLA Escalation", refresh: false, ops: true, core: true },
    { name: "Real-Time Executive Cockpit & KPI Telemetry", refresh: false, ops: true, core: true },
    { name: "Third-Party Accounting / ERP API Synchronization", refresh: false, ops: true, core: true },
    { name: "Automated PDF Report Digest Generation", refresh: false, ops: true, core: true },
    { name: "Zero-Downtime Legacy Database Migration", refresh: false, false: false, core: true },
    { name: "Distributed Event Streaming (Kafka / RabbitMQ)", refresh: false, false: false, core: true },
    { name: "Enterprise Single Sign-On (Okta / Azure SAML)", refresh: false, false: false, core: true },
    { name: "Committed 99.9% High-Availability Production SLA", refresh: false, false: false, core: true },
  ],

  deliveryStages: [
    {
      step: "01",
      id: "understand",
      name: "Map How You Work",
      tagline: "Process Audit & Data Flow Discovery",
      duration: "Week 1–2",
      copy: "We map how information actually travels through your company today—auditing active spreadsheets, paper forms, and unsearchable email threads.",
      activities: [
        "Audit existing spreadsheets, forms, and approval bottlenecks",
        "Document required business rules, calculations, and data relationships",
        "Define target user permissions and departmental workflows",
      ],
      deliverable: "Domain Architecture & Operational Workflow Map",
    },
    {
      step: "02",
      id: "design",
      name: "Design Around Reality",
      tagline: "UI Blueprints & Schema Specifications",
      duration: "Week 2–4",
      copy: "We design clean interfaces and database schemas around your real process, ensuring your staff finds the new software easier than the old spreadsheet.",
      activities: [
        "Create clickable high-fidelity wireframes for all user roles",
        "Architect normalized PostgreSQL schemas with strict integrity checks",
        "Validate UX prototypes with real operations personnel",
      ],
      deliverable: "Clickable Prototype & Relational Database Blueprint",
    },
    {
      step: "03",
      id: "build",
      name: "Build & Integrate",
      tagline: "Sprint Builds & Staging Environments",
      duration: "Week 4–10",
      copy: "We engineer the software, backend APIs, and integrations. You test working modules every 2 weeks populated with your real operational records.",
      activities: [
        "Build full-stack web application with responsive desktop UX",
        "Implement RBAC permissions and approval state machines",
        "Test historical edge cases with automated data validation suites",
      ],
      deliverable: "Working Staging Platform with Real Company Records",
    },
    {
      step: "04",
      id: "launch",
      name: "Migrate & Operate",
      tagline: "Zero-Downtime Cutover & Live Support",
      duration: "Week 10+",
      copy: "We migrate your historical data cleanly, train your staff with hands-on walkthroughs, and monitor production performance 24/7.",
      activities: [
        "Zero-downtime historical record migration and parity validation",
        "Staff and executive onboarding training sessions",
        "Production monitoring with committed SLA maintenance coverage",
      ],
      deliverable: "Live Production Platform + Full Source Code Handover",
    },
  ] as EnterpriseDeliveryStage[],

  beforeAfter: {
    before: {
      title: "Before ATCDL: Fragmented Systems",
      points: [
        "Data trapped in isolated spreadsheets with formula conflicts",
        "Capital expenditure approvals lost in unsearchable email threads",
        "Managers calling 4 people to check inventory or job status",
        "Repetitive double-entry between accounting and warehouse tools",
      ],
    },
    after: {
      title: "With ATCDL: One Connected Platform",
      points: [
        "Single source of truth with strict relational data validation",
        "Configurable multi-tier approval chains with instant notifications",
        "Live executive cockpit showing real-time jobs and inventory counts",
        "Automated two-way synchronization with accounting and CRM",
      ],
    },
  },

  postContactSteps: [
    { num: "01", label: "Contact ATCDL", desc: "Tell us where your current systems create friction" },
    { num: "02", label: "Discovery Call", desc: "15–30 min review of your tools, spreadsheets & processes" },
    { num: "03", label: "Process Mapping", desc: "We map your data flows and eliminate redundant steps" },
    { num: "04", label: "System Proposal", desc: "Transparent architecture plan with fixed milestone pricing" },
    { num: "05", label: "Sprint Builds", desc: "Bi-weekly working demos populated with test company records" },
    { num: "06", label: "Supervised Pilot", desc: "Field staff and managers validate workflows in parallel" },
    { num: "07", label: "Cutover & Support", desc: "Zero-downtime migration, team training & committed SLA" },
  ],

  fitScenarios: [
    {
      id: "legacy",
      title: "Legacy Software",
      subtitle: "Outdated Internal Systems",
      problem: "Your current software runs on an old on-premise server, crashes frequently, and cannot be accessed securely by remote teams or field staff.",
      solution: "Modern web architecture accessible on any secure device with sub-second speeds.",
    },
    {
      id: "spreadsheets",
      title: "Spreadsheet Overload",
      subtitle: "Version Conflicts & Data Risk",
      problem: "Your company relies on shared Excel sheets where one accidental formula deletion or sync conflict corrupts critical financial or inventory records.",
      solution: "A relational database with strict validation, user permissions, and immutable audit logs.",
    },
    {
      id: "disconnected",
      title: "Disconnected Tools",
      subtitle: "Information Silos",
      problem: "Operations uses one tool, sales uses another, and finance uses a third. Nobody has a single, accurate view of customer status or margins.",
      solution: "One centralized operations platform connecting data and workflows across all departments.",
    },
    {
      id: "growth",
      title: "Operational Bottlenecks",
      subtitle: "Manual Sign-Off Delays",
      problem: "Procurement requests, expense approvals, and client contracts get stuck for days waiting for managers to check their email.",
      solution: "Automated approval chains with multi-tier thresholds, mobile sign-offs, and SLA timers.",
    },
  ] as EnterpriseFitScenario[],

  technicalSpecs: [
    {
      title: "Clean Hexagonal Architecture & Domain-Driven Design",
      content:
        "We structure enterprise applications using Domain-Driven Design (DDD) with decoupled business logic, presentation layers, and database adapters. This ensures business rules remain testable, maintainable, and independent of external frameworks.",
    },
    {
      title: "Strict Relational Data Modeling & ACID Guarantees",
      content:
        "Every data model is engineered in PostgreSQL with foreign keys, row-level constraints, and strict schema validation. Transactions are executed with full ACID compliance to eliminate race conditions and double-entries.",
    },
    {
      title: "Role-Based Access Control (RBAC) & Enterprise SSO",
      content:
        "Granular permission trees enforce who can view, create, edit, or approve specific records. We integrate natively with enterprise identity providers including Okta, Azure Active Directory, Google Workspace, and SAML 2.0.",
    },
    {
      title: "Immutable Change Data Capture & Audit Trails",
      content:
        "Every insert, update, and soft deletion is recorded with cryptographic timestamps, user IDs, and previous/new state diffs. Compliance officers can audit the complete history of any transaction at any time.",
    },
    {
      title: "Event-Driven Messaging & Resilient Integrations",
      content:
        "Third-party integrations with legacy ERPs, payment gateways, and accounting software communicate via durable event brokers (RabbitMQ / Kafka) with exponential backoff and dead-letter queue recovery.",
    },
  ],
};

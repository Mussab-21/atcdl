export interface IndustryWorkflowStep {
  number: string;
  label: string;
  sub: string;
  detail: string;
  status: "active" | "queued" | "completed";
}

export interface IndustryExplorerItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  operatingEnvironment: string;
  operationalBottleneck: {
    title: string;
    description: string;
    points: string[];
  };
  liveConsoleTitle: string;
  liveConsoleSubtitle: string;
  workflowSteps: IndustryWorkflowStep[];
  technicalTelemetry: {
    label: string;
    value: string;
    statusColor?: string;
  }[];
  whatWeBuildPoints: {
    title: string;
    desc: string;
    metricBadge: string;
  }[];
  challenges: string[];
  solutions: string[];
  architectureHighlights: string[];
  relatedProjectSlugs: string[];
  relatedSolutionSlugs: string[];
  relatedProductSlugs: string[];
}

export const INDUSTRIES_EXPLORER_DATA: IndustryExplorerItem[] = [
  {
    id: "telecom",
    slug: "telecom",
    name: "Telecommunications & Networks",
    shortName: "Telecom",
    eyebrow: "HIGH-CONCURRENCY INFRASTRUCTURE",
    tagline: "Scalable AI agent fleets, alarm telemetry correlation, and subscriber self-service for national operators.",
    summary:
      "Telecom operators manage millions of subscribers and thousands of network nodes. We engineer autonomous agent architectures that resolve billing and technical queries over WhatsApp, correlate Kafka network alarms, and eliminate tier-1 support bottlenecks.",
    operatingEnvironment: "High-throughput event streams, legacy BSS/OSS databases, regional multi-dialect subscriber bases, and strict national data sovereignty requirements.",
    operationalBottleneck: {
      title: "Massive Event Spikes & Legacy Disconnects",
      description: "During network degradation or fiber cuts, contact centers get flooded with repetitive status calls while network engineers drown in thousands of cascading tower alerts.",
      points: [
        "Inquiry surges during network outages overload human support desks",
        "Subscriber records trapped across siloed legacy billing (BSS) and operational (OSS) systems",
        "Strict regulatory and telecom data residency rules preventing third-party cloud data exposure",
      ],
    },
    liveConsoleTitle: "TELECOM // NETWORK & SUBSCRIBER OPERATIONS ENGINE",
    liveConsoleSubtitle: "LIVE TELEMETRY & MULTI-AGENT RESOLUTION BUS",
    workflowSteps: [
      {
        number: "01",
        label: "NETWORK ALERT",
        sub: "Kafka Ingestion",
        detail: "Tower telemetry & fiber degradation alerts streamed in real time",
        status: "completed",
      },
      {
        number: "02",
        label: "AI TRIAGE",
        sub: "Root Cause Engine",
        detail: "Correlates cascading tower alarms to isolate singular root cut",
        status: "active",
      },
      {
        number: "03",
        label: "SUBSCRIBER COMMS",
        sub: "Autonomous Agent",
        detail: "WhatsApp & Web agent answers queries & provisions status updates",
        status: "active",
      },
      {
        number: "04",
        label: "BSS/OSS ACTION",
        sub: "Secure Core Adapter",
        detail: "Automated SIM reset, balance inquiry, and tier-2 escalation summary",
        status: "queued",
      },
      {
        number: "05",
        label: "OPERATOR REVIEW",
        sub: "Unified Cockpit",
        detail: "Supervisors oversee escalated edge cases with full telemetry audit",
        status: "queued",
      },
    ],
    technicalTelemetry: [
      { label: "STREAM PROTOCOL", value: "Kafka / WebSockets", statusColor: "text-[#00D477]" },
      { label: "EVENT CONCURRENCY", value: "14,500 ev/sec", statusColor: "text-blue-400" },
      { label: "AGENT INFERENCE", value: "185ms avg latency", statusColor: "text-cyan-400" },
      { label: "DATA SOVEREIGNTY", value: "Private On-Premises VPC", statusColor: "text-emerald-400" },
    ],
    whatWeBuildPoints: [
      {
        title: "Omnichannel Subscriber AI Fleet",
        desc: "Autonomous conversational agents supporting English, Urdu, and regional dialects over WhatsApp Business API with zero message drops.",
        metricBadge: "WhatsApp & Web Chat",
      },
      {
        title: "Alarm Telemetry & Event Correlation",
        desc: "Real-time streaming pipelines filtering noise from thousands of cascading tower pings to pinpoint root causes in seconds.",
        metricBadge: "Kafka + Redis",
      },
      {
        title: "Legacy BSS/OSS System Adapters",
        desc: "Fault-tolerant microservices bridging modern conversational APIs with legacy billing mainframes and ticketing software.",
        metricBadge: "Zero Data Silos",
      },
    ],
    challenges: [
      "Massive inquiry surges during localized fiber cuts and network degradations",
      "Fragmented subscriber data across legacy billing BSS/OSS and ticketing databases",
      "Strict data sovereignty rules requiring in-country compute and telecom compliance",
      "High agent churn and rising operational costs in offshore support contact centers",
    ],
    solutions: [
      "Omnichannel AI Agent platform answering queries in English, Urdu, and regional dialects",
      "Kafka alarm streaming pipeline isolating root causes from thousands of cascading tower alerts",
      "Secure CRM & BSS integration for balance checks, plan adjustments, and SIM provisioning",
      "Human-in-the-loop escalation consoles providing full conversational summaries to tier-2 engineers",
    ],
    architectureHighlights: [
      "Microservices deployed on private cloud or on-premise Kubernetes clusters",
      "Sub-200ms streaming responses via WebSocket and WebRTC connections",
      "Stateless session brokers with Redis cluster caching and Postgres audit persistence",
    ],
    relatedProjectSlugs: ["workflow-automation-bots", "ai-workforce-assistant"],
    relatedSolutionSlugs: ["ai-agents", "enterprise-software", "custom-ai", "web-mobile-platforms"],
    relatedProductSlugs: ["atcdl-agents", "atcdl-ask"],
  },
  {
    id: "banking-finance",
    slug: "banking-finance",
    name: "Banking & Financial Services",
    shortName: "Banking & Finance",
    eyebrow: "SECURITY-FIRST ENTERPRISE ARCHITECTURE",
    tagline: "Air-gapped private copilots, KYC document automation, and immutable audit logs for regulated institutions.",
    summary:
      "Financial institutions cannot compromise on regulatory compliance, data isolation, or transactional integrity. We build air-gapped knowledge copilots and document intelligence engines that parse prospectuses and contracts without leaking customer PII.",
    operatingEnvironment: "Strict regulatory audits, air-gapped private networks, legacy core banking mainframes, and zero tolerance for public model data training.",
    operationalBottleneck: {
      title: "Regulatory Friction & Manual Extraction Stalls",
      description: "Underwriters and compliance officers spend thousands of manual hours re-keying balance sheets, reviewing loan agreements, and cross-checking KYC forms.",
      points: [
        "Zero tolerance for cloud data retention or exposure to public LLM training sets",
        "Hundreds of compliance hours spent reviewing regulatory circulars and loan filings",
        "Core banking mainframes lacking modern REST interfaces and semantic search",
      ],
    },
    liveConsoleTitle: "FINANCE // AIR-GAPPED DOCUMENT & COMPLIANCE ENGINE",
    liveConsoleSubtitle: "IMMUTABLE AUDIT TRAIL & SECURE INFERENCE COCKPIT",
    workflowSteps: [
      {
        number: "01",
        label: "DOC INGESTION",
        sub: "Encrypted Vault",
        detail: "Commercial loan contracts, balance sheets & KYC identity scans captured",
        status: "completed",
      },
      {
        number: "02",
        label: "NEURAL EXTRACTION",
        sub: "Local OCR & Tokens",
        detail: "Air-gapped extraction of tabular metrics, balances & signing entities",
        status: "active",
      },
      {
        number: "03",
        label: "POLICY COMPLIANCE",
        sub: "Deterministic Guardrails",
        detail: "Automated checks against central bank regulations and lending criteria",
        status: "active",
      },
      {
        number: "04",
        label: "APPROVAL MATRIX",
        sub: "Tiered Authorization",
        detail: "Senior underwriter verification queue with exact source page citations",
        status: "queued",
      },
      {
        number: "05",
        label: "IMMUTABLE AUDIT",
        sub: "Cryptographic Ledger",
        detail: "Complete hash chain logged: zero PII retention, full audit readiness",
        status: "queued",
      },
    ],
    technicalTelemetry: [
      { label: "EXECUTION MODE", value: "Air-Gapped / On-Prem vLLM", statusColor: "text-emerald-400" },
      { label: "PII PROTECTION", value: "Zero Public Model Retention", statusColor: "text-[#00D477]" },
      { label: "AUDIT LOGGING", value: "SHA-256 Tamper-Proof", statusColor: "text-cyan-400" },
      { label: "AUTH MAPPING", value: "Active Directory / RBAC", statusColor: "text-blue-400" },
    ],
    whatWeBuildPoints: [
      {
        title: "Air-Gapped Knowledge Copilots",
        desc: "Internal RAG systems running on local GPU infrastructure behind institution firewalls with zero public internet connectivity.",
        metricBadge: "100% Data Isolation",
      },
      {
        title: "Automated Loan & KYC Parsing",
        desc: "Document extraction pipelines with built-in mathematical balance reconciliation and regulatory circular cross-referencing.",
        metricBadge: "Deterministic Verification",
      },
      {
        title: "Cryptographic Audit Ledger",
        desc: "Every query, document retrieval, and inference result is logged with tamper-evident hashes for external regulatory audits.",
        metricBadge: "SOC / Compliance Aligned",
      },
    ],
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
    relatedProjectSlugs: ["ai-workforce-assistant"],
    relatedSolutionSlugs: ["custom-ai", "enterprise-software", "ai-agents"],
    relatedProductSlugs: ["atcdl-docs", "atcdl-ask"],
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    shortName: "Manufacturing",
    eyebrow: "OPERATIONAL RELIABILITY",
    tagline: "Factory floor telemetry, predictive maintenance, and multi-tier approval workflows for industrial facilities.",
    summary:
      "Modern manufacturers operate complex supply chains and high-value capital machinery. We bridge legacy PLCs and modern cloud systems with real-time operational control towers, predictive maintenance pipelines, and automated shift handoff tooling.",
    operatingEnvironment: "Heterogeneous SCADA systems, industrial PLC equipment, dust/harsh physical environments, and tight production uptime tolerances.",
    operationalBottleneck: {
      title: "Unplanned Machine Downtime & Siloed Shift Logs",
      description: "When machinery fails without warning, entire assembly lines stall. Sensor data remains trapped inside proprietary terminals while maintenance logs sit on paper clipboards.",
      points: [
        "Unplanned machinery breakdowns causing cascading assembly downtime and overtime labor costs",
        "Sensor logs locked in proprietary PLC software without unified analytics or alerts",
        "Paper inspection clipboards resulting in delayed work-order approvals and missed PM schedules",
      ],
    },
    liveConsoleTitle: "MANUFACTURING // INDUSTRIAL TELEMETRY & CONTROL TOWER",
    liveConsoleSubtitle: "PLC BROKER BRIDGE & PREDICTIVE MAINTENANCE PIPELINE",
    workflowSteps: [
      {
        number: "01",
        label: "PLC SENSORS",
        sub: "MQTT / Modbus Edge",
        detail: "Real-time vibration, temperature, and cycle time captured from plant floor",
        status: "completed",
      },
      {
        number: "02",
        label: "TELEMETRY BUS",
        sub: "Timeseries Buffer",
        detail: "Aggregates 12,000 sensor streams with sub-second threshold evaluation",
        status: "active",
      },
      {
        number: "03",
        label: "ANOMALY DETECTION",
        sub: "Mechanical Drift Model",
        detail: "Detects thermal & acoustic drift 48 hours prior to mechanical failure",
        status: "active",
      },
      {
        number: "04",
        label: "WORK-ORDER DISPATCH",
        sub: "SLA Approval Bot",
        detail: "Generates maintenance ticket, routes to plant supervisor with spare parts list",
        status: "queued",
      },
      {
        number: "05",
        label: "ERP SYNCHRONIZATION",
        sub: "SAP PM Bridge",
        detail: "Updates maintenance ledger, tracks downtime duration and parts inventory",
        status: "queued",
      },
    ],
    technicalTelemetry: [
      { label: "EDGE INGESTION", value: "MQTT / Industrial Modbus", statusColor: "text-blue-400" },
      { label: "FAILURE FORECAST", value: "48-Hour Drift Lead Time", statusColor: "text-[#00D477]" },
      { label: "CONTROL POLLING", value: "100ms Telemetry Intervals", statusColor: "text-cyan-400" },
      { label: "ERP CONNECTOR", value: "SAP PM / MM Integration", statusColor: "text-emerald-400" },
    ],
    whatWeBuildPoints: [
      {
        title: "Industrial Control Towers",
        desc: "Centralized real-time visibility across plant lines, monitoring mechanical health, operator throughput, and cycle times in one cockpit.",
        metricBadge: "Unified SCADA / Cloud",
      },
      {
        title: "Predictive Maintenance Pipelines",
        desc: "Statistical and ML anomaly models analyzing continuous timeseries sensor drift to prevent expensive emergency downtime.",
        metricBadge: "Early Drift Detection",
      },
      {
        title: "Digital Shift Handoff & Work Orders",
        desc: "Mobile-responsive sign-off workflows eliminating paper clipboards and synchronizing technician tasks directly into ERPs.",
        metricBadge: "Zero Paper Lag",
      },
    ],
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
    relatedProjectSlugs: ["fashion-mnist-classifier"],
    relatedSolutionSlugs: ["enterprise-software", "ai-agents", "custom-ai"],
    relatedProductSlugs: ["atcdl-ops", "atcdl-flow"],
  },
  {
    id: "logistics-supply-chain",
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    shortName: "Logistics",
    eyebrow: "MISSION-CRITICAL VELOCITY",
    tagline: "Automated customs extraction, freight bill reconciliation, and real-time dispatch control towers.",
    summary:
      "Logistics speed determines commercial profitability. We build automated document intelligence engines that parse bills of lading and commercial invoices in seconds, verifying customs declarations and preventing port demurrage penalties.",
    operatingEnvironment: "High-volume paper documents, distributed cross-border freight lanes, diverse carrier APIs, and time-sensitive customs clearance deadlines.",
    operationalBottleneck: {
      title: "Customs Clearance Holds & Paper Re-Keying",
      description: "Freight operators lose thousands of dollars per container when shipping manifests have mismatched line items, manual typos, or missing customs declaration stamps.",
      points: [
        "Manual re-entry of paper bills of lading and multi-currency commercial invoices",
        "Discrepancies between shipping manifests and customs filings triggering port demurrage fees",
        "Fragmented transport management systems (TMS) lacking real-time milestone tracking for shippers",
      ],
    },
    liveConsoleTitle: "LOGISTICS // FREIGHT INTELLIGENCE & DISPATCH TOWER",
    liveConsoleSubtitle: "NEURAL OCR PARSING & MULTI-CARRIER RECONCILIATION",
    workflowSteps: [
      {
        number: "01",
        label: "DOCUMENT INTAKE",
        sub: "Multi-Format Gateway",
        detail: "Bills of lading, packing lists & commercial invoices received via email / scan",
        status: "completed",
      },
      {
        number: "02",
        label: "GEOMETRY PARSER",
        sub: "Neural OCR Engine",
        detail: "Extracts container IDs, weights, HS tariff codes & multi-currency values",
        status: "active",
      },
      {
        number: "03",
        label: "CROSS-VALIDATION",
        sub: "Declaration Matcher",
        detail: "Reconciles invoice totals against shipping manifest to prevent port holds",
        status: "active",
      },
      {
        number: "04",
        label: "TMS & ERP POSTING",
        sub: "Idempotent Webhooks",
        detail: "Verified records posted directly to carrier management software and ledgers",
        status: "queued",
      },
      {
        number: "05",
        label: "DISPATCH COCKPIT",
        sub: "Control Tower UI",
        detail: "Live milestones & exception alerts visible to operations team and customer",
        status: "queued",
      },
    ],
    technicalTelemetry: [
      { label: "PARSING VELOCITY", value: "Sub-30s Per Document", statusColor: "text-[#00D477]" },
      { label: "ACCURACY CHECK", value: "Cross-Field Math Reconciliation", statusColor: "text-blue-400" },
      { label: "DEMURRAGE RISK", value: "Automated Error Hold Prevention", statusColor: "text-cyan-400" },
      { label: "CARRIER SYNC", value: "REST / Webhook TMS Adapters", statusColor: "text-emerald-400" },
    ],
    whatWeBuildPoints: [
      {
        title: "Automated Shipping Document Parser",
        desc: "Convert messy PDF bills of lading, packing lists, and commercial invoices into clean structured JSON payloads without human typing.",
        metricBadge: "0 Manual Re-Keying",
      },
      {
        title: "Customs & Manifest Cross-Validator",
        desc: "Rule-based engines that check declaration line items against carrier weight tickets to eliminate port clearance discrepancies.",
        metricBadge: "Demurrage Prevention",
      },
      {
        title: "Dispatcher & Shipper Control Towers",
        desc: "A single unified operations screen displaying active container milestones, exception alerts, and carrier performance trends.",
        metricBadge: "Real-Time Tracking",
      },
    ],
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
    relatedProjectSlugs: ["neiki-operations-platform"],
    relatedSolutionSlugs: ["enterprise-software", "custom-ai", "web-mobile-platforms"],
    relatedProductSlugs: ["atcdl-docs", "atcdl-ops"],
  },
];

export interface CapabilityItem {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  flowSteps: string[];
  systemHighlights: string[];
}

export const INDUSTRY_CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: "ai-systems",
    name: "AI & Reasoning Systems",
    eyebrow: "PRIVATE INTELLECT",
    summary: "Air-gapped copilots, domain-specific embeddings, and automated reasoning pipelines engineered for zero data leakage.",
    flowSteps: ["Source Documents", "Neural Embedding", "Contextual Reasoning", "Verified Action"],
    systemHighlights: [
      "Private on-premises deployment (vLLM / Ollama)",
      "Strict zero-data-retention compliance",
      "Exact page & paragraph citations",
    ],
  },
  {
    id: "automation",
    name: "Workflow & Agent Automation",
    eyebrow: "AUTONOMOUS WORKERS",
    summary: "Multi-agent systems and approval state machines that execute repetitive cross-departmental operations without manual delay.",
    flowSteps: ["Operational Trigger", "Agent Decision Matrix", "Confidence Guardrail", "System Ledger Update"],
    systemHighlights: [
      "WhatsApp, Web & email intake channels",
      "Human-in-the-loop fallback escalation",
      "Cryptographic audit log trail",
    ],
  },
  {
    id: "integrations",
    name: "Legacy & Core Integrations",
    eyebrow: "DATA BUS BRIDGES",
    summary: "High-throughput API adapters connecting modern intelligence interfaces to legacy ERPs, SCADA terminals, and core mainframes.",
    flowSteps: ["Legacy Mainframe / PLC", "Secure Adapter", "Unified Event Bus", "Modern Dashboard / API"],
    systemHighlights: [
      "SAP, BSS/OSS, SCADA & TMS connectors",
      "Kafka & Redis high-concurrency buffering",
      "Zero disruption to existing production systems",
    ],
  },
  {
    id: "platforms",
    name: "Operational Digital Platforms",
    eyebrow: "CONTROL COCKPITS",
    summary: "Bespoke web and mobile operations software providing centralized visibility, supervisor control, and field coordination.",
    flowSteps: ["Field Operator / Client", "Responsive Portal", "Real-Time Telemetry", "Executive Cockpit"],
    systemHighlights: [
      "Role-Based Access Control (RBAC)",
      "Sub-second state synchronization",
      "Offline-first mobile capabilities for field teams",
    ],
  },
];

export interface MatrixCell {
  industryId: string;
  capabilityId: string;
  headline: string;
  description: string;
}

export const INDUSTRY_CAPABILITY_MATRIX: MatrixCell[] = [
  // Telecom
  {
    industryId: "telecom",
    capabilityId: "ai-systems",
    headline: "Network Telemetry Triage",
    description: "Semantic parsing of Kafka alert streams to isolate singular root causes across thousands of cascading tower alarms.",
  },
  {
    industryId: "telecom",
    capabilityId: "automation",
    headline: "WhatsApp Subscriber Fleets",
    description: "Multilingual AI agents resolving billing queries, SIM status, and data balance over WhatsApp Business API.",
  },
  {
    industryId: "telecom",
    capabilityId: "integrations",
    headline: "Legacy BSS/OSS Adapters",
    description: "Fault-tolerant microservice connectors bridging customer chat directly into billing databases and CRM records.",
  },
  {
    industryId: "telecom",
    capabilityId: "platforms",
    headline: "Network Operations Center (NOC) UI",
    description: "Live real-time dashboards mapping tower health, active conversational queues, and supervisor intervention triggers.",
  },

  // Banking
  {
    industryId: "banking-finance",
    capabilityId: "ai-systems",
    headline: "Air-Gapped Private Copilots",
    description: "Local model execution behind banking firewalls for contract analysis and regulatory circular queries with zero cloud leakage.",
  },
  {
    industryId: "banking-finance",
    capabilityId: "automation",
    headline: "Deterministic Compliance Bots",
    description: "Automated underwriting rules verifying commercial loan submissions against strict central bank credit policies.",
  },
  {
    industryId: "banking-finance",
    capabilityId: "integrations",
    headline: "Core Mainframe Connectors",
    description: "Encrypted adapters interfacing with core banking mainframes, Active Directory, and PostgreSQL transaction stores.",
  },
  {
    industryId: "banking-finance",
    capabilityId: "platforms",
    headline: "Underwriting & Audit Portals",
    description: "Secure analyst interfaces with dual-key sign-off flows, exact PDF citations, and immutable SHA-256 logs.",
  },

  // Manufacturing
  {
    industryId: "manufacturing",
    capabilityId: "ai-systems",
    headline: "Predictive Anomaly Models",
    description: "Machine learning telemetry analysis forecasting mechanical drift 48 hours prior to catastrophic machine failure.",
  },
  {
    industryId: "manufacturing",
    capabilityId: "automation",
    headline: "SLA Maintenance Escalation",
    description: "Automated work-order generation when vibration thresholds are breached, routing directly to on-call plant engineers.",
  },
  {
    industryId: "manufacturing",
    capabilityId: "integrations",
    headline: "PLC & SCADA MQTT Gateways",
    description: "Direct telemetry ingestion from factory floor sensors into SAP Plant Maintenance and materials management ledgers.",
  },
  {
    industryId: "manufacturing",
    capabilityId: "platforms",
    headline: "Plant Floor Control Towers",
    description: "Digital shift handoff tablets and centralized executive screens tracking OEE, cycle times, and machine health.",
  },

  // Logistics
  {
    industryId: "logistics-supply-chain",
    capabilityId: "ai-systems",
    headline: "Neural Document Parsers",
    description: "High-accuracy layout parsing converting messy multi-format paper shipping manifests into verified structured payloads.",
  },
  {
    industryId: "logistics-supply-chain",
    capabilityId: "automation",
    headline: "Customs Reconciliation Bots",
    description: "Cross-validation engines matching commercial invoice totals with customs declarations to prevent port demurrage fees.",
  },
  {
    industryId: "logistics-supply-chain",
    capabilityId: "integrations",
    headline: "TMS & Carrier API Webhooks",
    description: "Two-way webhook synchronization between shipping line tracking systems, customs brokers, and accounting ERPs.",
  },
  {
    industryId: "logistics-supply-chain",
    capabilityId: "platforms",
    headline: "Shipper Visibility Portals",
    description: "Live interactive tracking dashboards with real-time milestone timestamps, exception logs, and customer self-service.",
  },
];

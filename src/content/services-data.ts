export interface ServiceItem {
  id: string;
  num: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  executiveSummary: string;
  visualFlow: string[];
  visualFlowDescription: string;
  capabilities: string[];
  technicalHighlights: string[];
  businessOutcomes: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-intelligent-systems",
    num: "01",
    slug: "ai",
    title: "AI & Intelligent Systems",
    tagline: "Build practical, domain-specific AI into your operations.",
    shortDesc:
      "We design practical AI systems that help teams find information, automate repetitive cognitive tasks, and make faster, data-backed decisions.",
    executiveSummary:
      "Rather than generic chatbots, ATC Digital Labs engineers production-grade AI architectures grounded strictly in your proprietary documentation, databases, and operational rules. Every answer is verifiable, traceable, and secured inside your private perimeter.",
    visualFlow: ["Data", "Intelligence", "Decision"],
    visualFlowDescription:
      "Enterprise data is indexed and validated, processed by secure intelligence models, and surfaced directly as actionable operational decisions.",
    capabilities: [
      "Business Knowledge Copilots & Intelligent Search",
      "Automated Document Processing & Data Extraction",
      "Predictive Analytics & Decision Support",
      "Private & Secure On-Premise Deployments",
    ],
    technicalHighlights: [
      "Zero data leakage: Air-gapped and VPC containment",
      "Deterministic retrieval with exact document citations",
      "Latency-optimized inference with continuous eval pipelines",
    ],
    businessOutcomes: [
      "Reduce information search and review time by hours each week",
      "Prevent human error in high-volume document triage",
      "Retain institutional knowledge across organizational turnover",
    ],
    idealFor:
      "Organizations with vast technical documentation, regulatory standards, or high-volume casework.",
  },
  {
    id: "software-development",
    num: "02",
    slug: "software",
    title: "Software Development",
    tagline: "Custom platforms built around your real business workflows.",
    shortDesc:
      "Custom web, mobile, and enterprise applications designed around your exact business processes, operational hierarchy, and scalability requirements.",
    executiveSummary:
      "Off-the-shelf software often forces organizations to twist their processes to fit rigid tooling. We build tailored software that mirrors your team's exact procedures—delivering intuitive interfaces, bulletproof backends, and long-term maintainability.",
    visualFlow: ["Idea", "Design", "Application", "Users"],
    visualFlowDescription:
      "Business requirements are translated into verified system specifications, crafted into production software, and deployed smoothly to your users.",
    capabilities: [
      "Mission-Critical Internal Business Platforms & Portals",
      "High-Performance Web & Mobile Client Applications",
      "Modernization & Re-engineering of Legacy Software",
      "Multi-Role Permission Systems & Workflow Automation",
    ],
    technicalHighlights: [
      "Type-safe, modular architectures (Next.js, TypeScript, Go/Node/Python)",
      "Continuous integration, automated regression testing, and zero-downtime releases",
      "Strict accessibility, responsive performance, and audit-ready data models",
    ],
    businessOutcomes: [
      "Eliminate repetitive manual spreadsheets and disjointed tools",
      "Provide a clean, fast experience for both internal staff and external clients",
      "Own your software IP outright without prohibitive recurring user fees",
    ],
    idealFor:
      "Growing companies and enterprises that have outgrown off-the-shelf SaaS and need bespoke software.",
  },
  {
    id: "system-integration",
    num: "03",
    slug: "integration",
    title: "System Integration",
    tagline: "Connect your isolated systems into a unified operational backbone.",
    shortDesc:
      "Connect the software systems your teams already use so information moves reliably, securely, and automatically between them in real time.",
    executiveSummary:
      "Most enterprise friction originates between systems: CRM not talking to ERP, billing out of sync with inventory, and manual copy-pasting between portals. ATC Digital Labs builds resilient middleware, API pipelines, and event-driven data buses that bridge legacy platforms and modern software.",
    visualFlow: ["System A", "Integration Layer", "System B"],
    visualFlowDescription:
      "Data originating in legacy or external platforms is safely transformed and synchronized through a resilient integration layer into core systems.",
    capabilities: [
      "ERP, CRM, Billing & Core System Middleware",
      "Real-Time Event Streams & Webhook Pipelines",
      "Legacy Database & Mainframe Modernization Bridges",
      "Bi-Directional Automated Data Synchronization",
    ],
    technicalHighlights: [
      "Idempotent processing with guaranteed message delivery",
      "Automated dead-letter queues and transaction rollback safety",
      "Comprehensive telemetry, audit logs, and schema validation",
    ],
    businessOutcomes: [
      "Eliminate double-entry errors and manual reconciliation",
      "Single source of truth across operational departments",
      "Modernize user experiences without replacing costly core systems",
    ],
    idealFor:
      "Enterprises operating multiple legacy platforms, ERPs, and specialized industry databases.",
  },
  {
    id: "cybersecurity",
    num: "04",
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Security engineered directly into your architecture and lifecycle.",
    shortDesc:
      "Protect applications, infrastructure, and sensitive business information with security engineered from day one into the technology lifecycle.",
    executiveSummary:
      "Security cannot be an afterthought bolted on before launch. We implement defense-in-depth principles across code, infrastructure, and human access patterns. From encrypted data stores to role-based access control and zero-trust network boundaries, your technology is safeguarded against modern threats.",
    visualFlow: ["Users", "Security Layer", "Systems", "Monitoring"],
    visualFlowDescription:
      "Every user and machine identity is verified through encrypted security controls before interacting with systems, under continuous audit monitoring.",
    capabilities: [
      "Application Security Architecture & Threat Modeling",
      "Zero-Trust Access Control & Role-Based Permissions (RBAC)",
      "Data Encryption at Rest, in Transit, and during Processing",
      "Continuous Vulnerability Assessments & Code Audits",
    ],
    technicalHighlights: [
      "Principle of least privilege enforced across IAM and API keys",
      "Automated static and dynamic vulnerability analysis (SAST/DAST)",
      "Strict data isolation and air-gapped on-premise containment options",
    ],
    businessOutcomes: [
      "Safeguard confidential customer and proprietary business records",
      "Comply with international data protection and enterprise procurement mandates",
      "Mitigate the financial and reputational liability of security breaches",
    ],
    idealFor:
      "Organizations handling sensitive customer records, financial transactions, or proprietary IP.",
  },
  {
    id: "cloud-infrastructure",
    num: "05",
    slug: "cloud",
    title: "Cloud & Infrastructure",
    tagline: "Resilient, cost-efficient cloud architectures for business-critical systems.",
    shortDesc:
      "Design, migrate, and operate reliable cloud environments that keep your business-critical applications responsive, secure, and cost-controlled.",
    executiveSummary:
      "Whether deploying to AWS, Google Cloud, Azure, or private enterprise bare-metal, we architect infrastructure that scales gracefully with workload spikes and eliminates single points of failure. We prioritize operational simplicity and transparent cost management.",
    visualFlow: ["Applications", "Cloud Infrastructure", "Data"],
    visualFlowDescription:
      "Applications execute securely on orchestrated cloud resources, reading and writing to high-availability, backed-up data layers.",
    capabilities: [
      "Cloud Migration & Infrastructure Modernization",
      "Container Orchestration & Automated Deployments (Docker/K8s)",
      "Automated Backup, Failover & Disaster Recovery Systems",
      "Cloud Cost Optimization & Performance Tuning",
    ],
    technicalHighlights: [
      "Infrastructure as Code (IaC) with reproducible Terraform/OpenTofu configurations",
      "Multi-zone redundancy and sub-second failover topologies",
      "Real-time resource autoscaling based on actual query volume",
    ],
    businessOutcomes: [
      "99.9%+ application uptime and disaster recovery confidence",
      "Eliminate unbudgeted cloud waste through right-sizing",
      "Rapidly deploy new features without operational downtime",
    ],
    idealFor:
      "Companies moving away from brittle hosting or scaling existing cloud platforms to handle higher load.",
  },
  {
    id: "managed-services",
    num: "06",
    slug: "managed-services",
    title: "Managed Services",
    tagline: "Proactive maintenance, continuous monitoring, and ongoing engineering support.",
    shortDesc:
      "Keep your technology running reliably through proactive 24/7 monitoring, security patching, system maintenance, and continuous optimization.",
    executiveSummary:
      "Software does not stop needing attention once deployed. ATC Digital Labs provides structured ongoing managed services that handle system updates, bug remediation, security patches, performance tuning, and incremental feature enhancements so your internal team can focus on core business operations.",
    visualFlow: ["Monitor", "Maintain", "Respond", "Improve"],
    visualFlowDescription:
      "Systems are proactively monitored for anomalies, maintained with regular updates, defended with rapid incident response, and continuously improved.",
    capabilities: [
      "24/7 Production Health & Uptime Telemetry",
      "Security Patching, Dependency Upgrades & Backups",
      "Service Level Agreement (SLA) Incident Response",
      "Continuous Optimization & Iterative Enhancements",
    ],
    technicalHighlights: [
      "Automated synthetic transaction monitoring and alerting thresholds",
      "Dedicated staging environments for validated zero-risk patching",
      "Direct escalation paths to senior engineering leads",
    ],
    businessOutcomes: [
      "Prevent outages before they disrupt revenue or customer operations",
      "Ensure systems never drift into unmaintained, vulnerable legacy status",
      "Predictable operational expenditures without hiring full internal DevOps teams",
    ],
    idealFor:
      "Businesses that rely on critical software but lack a dedicated 24/7 internal platform engineering team.",
  },
  {
    id: "technology-consulting",
    num: "07",
    slug: "consulting",
    title: "Technology Consulting",
    tagline: "Translate executive goals into practical technology roadmaps and architectures.",
    shortDesc:
      "Translate business priorities into practical technology strategies, vendor-neutral architectures, risk assessments, and execution roadmaps.",
    executiveSummary:
      "Investing in technology without an architectural roadmap leads to wasted budget and shelfware. We work directly with leadership to evaluate current technical debt, evaluate build-vs-buy decisions, plan realistic implementation milestones, and ensure every dollar invested delivers measurable operational leverage.",
    visualFlow: ["Business Problem", "Strategy", "Roadmap", "Execution"],
    visualFlowDescription:
      "We unpack the root operational bottleneck, formulate a vendor-neutral architecture, establish concrete delivery phases, and oversee execution.",
    capabilities: [
      "Technical Due Diligence & Architecture Audits",
      "AI Readiness & Feasibility Assessments",
      "Build vs. Buy Evaluation & Vendor Selection",
      "Executive Technology Roadmaps & Cost Modeling",
    ],
    technicalHighlights: [
      "Grounded in real engineering experience, not theoretical slides",
      "Unbiased, vendor-neutral recommendations tailored to organizational scale",
      "Transparent risk matrices and phase-gate milestone criteria",
    ],
    businessOutcomes: [
      "Avoid costly software purchases that do not fit your workflow",
      "Ensure executive alignment and board-level confidence on technical investments",
      "De-risk major digital transformations before writing a single line of code",
    ],
    idealFor:
      "C-level executives, directors, and boards planning significant technology modernization or AI initiatives.",
  },
];

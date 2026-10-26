import React from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Bot, Layers, Monitor, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: "Solutions | ATC Technix",
  },
  description:
    "Explore our four core business solutions engineered by ATC Technix: Custom AI & GenAI Systems, AI Agents & Automation, Enterprise Software Modernization, and Web & Mobile Platforms.",
  openGraph: {
    title: "Solutions | ATC Technix",
    description:
      "Explore our four core business solutions engineered by ATC Technix: Custom AI & GenAI Systems, AI Agents & Automation, Enterprise Software Modernization, and Web & Mobile Platforms.",
    siteName: "ATC Technix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | ATC Technix",
    description:
      "Explore our four core business solutions engineered by ATC Technix: Custom AI & GenAI Systems, AI Agents & Automation, Enterprise Software Modernization, and Web & Mobile Platforms.",
  },
};

interface SolutionSection {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  headline: string;
  tagline: string;
  overview: string;
  idealFor: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: {
    title: string;
    description: string;
    detail: string;
  }[];
  capabilities: string[];
  technicalStandards: string[];
  tangibleOutcomes: string[];
}

const SOLUTIONS_DATA: SolutionSection[] = [
  {
    slug: "custom-ai",
    num: "01",
    eyebrow: "CUSTOM AI SYSTEMS",
    title: "Custom AI & GenAI Systems",
    headline: "Give your team an AI that understands your business.",
    tagline:
      "Private copilots, RAG architectures, and custom LLM inference pipelines built for enterprise data security.",
    overview:
      "Turn your company's information into a private AI assistant that can answer questions, find verified information, and help your team work faster without searching through dozens of files. Built with strict role-based access control, cryptographic isolation, and zero third-party training data leakage.",
    idealFor:
      "Organizations with scattered documentation across drives, SharePoint, and manuals where employees spend hours hunting for answers and require verifiable citations without exposing sensitive IP.",
    icon: Sparkles,
    deliverables: [
      {
        title: "Your Private AI Assistant",
        description:
          "An intuitive web interface your employees use daily to query documents, draft summaries, and complete complex workflows.",
        detail: "Sub-second answers with verified data",
      },
      {
        title: "Your Structured Knowledge Base",
        description:
          "Your internal PDFs, SOP manuals, contracts, and spreadsheets organized into an encrypted, continuously synchronized vector store.",
        detail: "Zero public training leakage",
      },
      {
        title: "Your Enterprise Control Layer",
        description:
          "Role-based permissions, monitoring consoles, and exact source citations so sensitive business information stays protected.",
        detail: "Page & paragraph attribution",
      },
    ],
    capabilities: [
      "Retrieval-Augmented Generation (RAG) with hybrid lexical & semantic search",
      "Permission-aware vector databases respecting Active Directory / LDAP groups",
      "Domain-specific model fine-tuning and quantization for private cloud & on-premise execution",
      "Hallucination guardrails and source citation engines down to exact page snippets",
      "Production LLM observability, latency tracking, and query telemetry",
    ],
    technicalStandards: [
      "Ingestion pipeline with real-time OCR, AST parsing, and chunk tokenization",
      "High-throughput vector storage with dense embeddings and cross-encoder re-ranking",
      "Strict zero-data-retention API contracts with enterprise LLM endpoints",
      "Self-hosted model deployments on dedicated private GPU infrastructure (vLLM, Ollama)",
    ],
    tangibleOutcomes: [
      "Instant access to institutional knowledge across complex internal documentation",
      "Elimination of repetitive support, policy, and technical inquiry bottlenecks",
      "Full compliance with enterprise security, data sovereignty, and audit standards",
    ],
  },
  {
    slug: "ai-agents",
    num: "02",
    eyebrow: "AI AGENTS & AUTOMATION",
    title: "AI Agents & Autonomous Automation",
    headline: "Give repetitive business tasks to AI workers.",
    tagline:
      "Autonomous multi-step agents that execute operational tasks, process documents, and sync systems with human oversight.",
    overview:
      "Instead of employees spending hours copying information between disconnected tools, ATC Technix builds AI workers that monitor incoming requests, extract structured records, make verified decisions, and update your software systems 24/7 with human-in-the-loop oversight.",
    idealFor:
      "Operations teams burdened by manual data processing, complex email triage, multi-step invoice approvals, and cross-platform document reconciliation.",
    icon: Bot,
    deliverables: [
      {
        title: "Autonomous Worker Fleet",
        description:
          "Background worker agents that monitor incoming emails, webhooks, and folders 24/7 to process requests instantly.",
        detail: "24/7 operational throughput",
      },
      {
        title: "Multi-System Connectors",
        description:
          "Bi-directional API adapters that automatically update CRMs, ERPs, and project trackers without human copy-pasting.",
        detail: "Real-time bi-directional sync",
      },
      {
        title: "Human-in-the-Loop Review Console",
        description:
          "A transparent supervisory dashboard where agents flag low-confidence or high-value actions for one-click human approval.",
        detail: "Full audit trail & rollback control",
      },
    ],
    capabilities: [
      "Multi-agent orchestration engines coordinating task handoffs and validation",
      "Document intelligence extracting structured fields out of invoices, claims, and contracts",
      "Multi-channel customer and lead agents (Web, WhatsApp, Slack, internal portals)",
      "Human-in-the-loop review queues for exception handling and regulatory sign-offs",
      "Self-healing integration adapters with automatic retry logic and dead-letter queues",
    ],
    technicalStandards: [
      "Stateless execution runtimes with distributed message broker architecture",
      "Structured schema validation enforcing strict data type boundaries",
      "Cryptographic audit logs recording every agent prompt, decision, and tool execution",
      "Secure OAuth2 credential vaults with encrypted secret management",
    ],
    tangibleOutcomes: [
      "24/7 continuous operational throughput on routine transactional workflows",
      "Drastic reduction in manual processing latency down to seconds",
      "Complete transparency and supervisory control over every automated decision",
    ],
  },
  {
    slug: "enterprise-software",
    num: "03",
    eyebrow: "ENTERPRISE SYSTEMS",
    title: "Enterprise Software & Systems Modernization",
    headline: "Replace slow, disconnected software with one unified system.",
    tagline:
      "Resilient internal systems, approval engines, and data pipelines built for mission-critical operations.",
    overview:
      "We take outdated, fragmented internal tools — spreadsheets, email approval chains, and legacy desktop software — and turn them into a clean, modern software system. Built with bulletproof relational data models, role-based security, and live management dashboards.",
    idealFor:
      "Growing enterprises struggling with brittle spreadsheets, lost email approval chains, siloed departmental data, and legacy systems that cannot scale.",
    icon: Layers,
    deliverables: [
      {
        title: "Your Modern Operations System",
        description:
          "A fast, responsive web portal built around your real internal processes, accessible securely on desktop and mobile.",
        detail: "Sub-second interface performance",
      },
      {
        title: "Configurable Approval Engine",
        description:
          "Multi-level approval workflows with automated reminders, SLA escalation timers, and complete audit histories.",
        detail: "Zero stalled email approval chains",
      },
      {
        title: "Role-Based Access & Security",
        description:
          "Granular permissions (Admin, Department Head, Field Operator, Auditor) with corporate Single Sign-On (SSO).",
        detail: "SAML, OAuth2, and RBAC",
      },
    ],
    capabilities: [
      "Custom ERP and operations software tailored to proprietary company workflows",
      "Multi-level approval workflows with automated reminders and SLA escalation timers",
      "Relational database architecture consolidating scattered data sources into a single source of truth",
      "Enterprise Single Sign-On (SSO) with granular departmental permission boundaries",
      "Real-time administrative dashboards and executive reporting telemetry",
    ],
    technicalStandards: [
      "High-performance PostgreSQL with automated failover and encryption at rest",
      "Type-safe backend services with modular API interfaces and event buses",
      "Strict Role-Based Access Control (RBAC) integrated with enterprise identity providers",
      "Zero-downtime deployment pipelines with automated backup and disaster recovery",
    ],
    tangibleOutcomes: [
      "Unified operational visibility across departments without spreadsheet chaos",
      "Streamlined approval cycles with zero lost requests or untracked edits",
      "Audit-ready data security conforming to rigorous compliance mandates",
    ],
  },
  {
    slug: "web-mobile-platforms",
    num: "04",
    eyebrow: "DIGITAL PRODUCTS",
    title: "Web & Mobile Platforms",
    headline: "Turn your business idea into a fast, reliable digital product.",
    tagline:
      "High-performance digital products engineered for enterprise scale, responsive velocity, and seamless UX.",
    overview:
      "Whether launching a client-facing SaaS platform, a mobile field-operations app, or a customer portal, ATC Technix engineers frontends and APIs that load in milliseconds, maintain pristine accessibility, and scale effortlessly under heavy load.",
    idealFor:
      "Companies launching new SaaS products, customer portals, or field-operator applications that require enterprise-grade reliability and high conversion rates.",
    icon: Monitor,
    deliverables: [
      {
        title: "Production Web Platform",
        description:
          "A lightning-fast web application built with responsive layouts, accessible typography, and SEO optimization.",
        detail: "Sub-second page loads (Lighthouse 90+)",
      },
      {
        title: "Cross-Platform Mobile Apps",
        description:
          "Native iOS and Android mobile applications sharing a unified codebase with push alerts and offline sync capabilities.",
        detail: "App Store & Play Store ready",
      },
      {
        title: "Scalable Backend & APIs",
        description:
          "Type-safe REST and GraphQL APIs with robust authentication, database caching, and transactional payment integration.",
        detail: "Secure payment gateways & OAuth2",
      },
    ],
    capabilities: [
      "Responsive web applications built with modern frontend frameworks and SSR",
      "Cross-platform mobile applications for iOS and Android with unified business logic",
      "Scalable REST and GraphQL APIs with database caching and rate limiting",
      "Transactional payment integrations with international and regional payment gateways",
      "Full observability instrumentation tracking user conversion funnels and Core Web Vitals",
    ],
    technicalStandards: [
      "Edge-rendered application architecture with global CDN caching",
      "Design system compliance with accessible semantic markup and WCAG AA standards",
      "End-to-end type safety across client, server, and database boundaries",
      "Automated CI/CD pipelines with automated regression and performance testing",
    ],
    tangibleOutcomes: [
      "Lightning-fast digital experiences that maximize customer retention and conversion",
      "Unified codebase efficiency across web, iOS, and Android platforms",
      "Robust, production-ready infrastructure capable of supporting rapid user scaling",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 py-3 sm:py-6">
      {/* 1. Hero Section */}
      <section className="container-custom pt-2 pb-6 sm:pt-4 sm:pb-8 border-b border-[var(--border)]">
        <div className="max-w-4xl flex flex-col gap-3 text-left">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span>Engineered Business Outcomes</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12]">
              Four ways we build business value.
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              We translate advanced software and AI engineering into clear, measurable operational outcomes. Explore our four solution categories engineered to drive efficiency, resilience, and growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Four Solutions In-Depth (Layout mirrored after /services) */}
      <section className="container-custom flex flex-col gap-5 sm:gap-6">
        {SOLUTIONS_DATA.map((solution) => {
          const Icon = solution.icon;
          return (
            <div
              key={solution.slug}
              id={solution.slug}
              className="scroll-mt-20 p-4 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col gap-4 sm:gap-5 hover:border-slate-300 transition-colors"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3 sm:pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#071B3B] text-[var(--accent-green)] border border-[#162D50] flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        SOLUTION {solution.num}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {solution.eyebrow}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                        {solution.headline}
                      </h2>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <p className="text-xs sm:text-sm font-medium text-emerald-700">
                        {solution.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <NextLink
                  href={`/contact?intent=project&solution=${encodeURIComponent(solution.title)}`}
                  className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[var(--accent-green)] text-[#071B3B] text-xs font-bold shadow-2xs hover:bg-[#00ea83] transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NextLink>
              </div>

              {/* Body Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
                {/* Left Column: Overview, What You Receive & Best Suited For (6 cols) */}
                <div className="lg:col-span-6 flex flex-col gap-3.5">
                  {/* Overview */}
                  <div className="flex flex-col gap-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      Overview &amp; Practical Value
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {solution.overview}
                    </p>
                  </div>

                  {/* What you actually receive box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#071B3B] text-white border border-[#162D50] flex flex-col gap-2.5 shadow-2xs">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      <span>OPERATIONAL DELIVERABLES</span>
                      <span className="text-[var(--accent-green)]">What You Actually Receive</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                      {solution.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-normal">
                            {item.description}
                          </p>
                          <span className="text-[10px] font-mono text-[var(--accent-green)] mt-auto pt-0.5">
                            {item.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Suited For */}
                  <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200/80 p-2.5 sm:p-3 rounded-lg">
                    <strong className="text-slate-900 font-semibold">Best suited for: </strong>
                    {solution.idealFor}
                  </div>
                </div>

                {/* Right Column: Capabilities, Technical Standards & Outcomes (6 cols) */}
                <div className="lg:col-span-6 flex flex-col gap-3.5">
                  {/* Capabilities */}
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      Core Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-2 text-xs text-slate-800 leading-snug p-2 rounded-lg bg-slate-50/80 border border-slate-100"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Standards and Outcomes side-by-side on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                    {/* Technical Standards */}
                    <div className="flex flex-col gap-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Technical Standards
                      </div>
                      <ul className="flex flex-col gap-1.5 text-xs text-slate-600">
                        {solution.technicalStandards.map((hl) => (
                          <li key={hl} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-ai)] shrink-0 mt-1" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tangible Outcomes */}
                    <div className="flex flex-col gap-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Tangible Outcomes
                      </div>
                      <ul className="flex flex-col gap-1.5 text-xs text-slate-700">
                        {solution.tangibleOutcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Advisory CTA Section */}
      <section className="container-custom pb-4 sm:pb-6">
        <Reveal>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#071B3B] text-white border border-[#162D50] text-center flex flex-col items-center gap-3 sm:gap-3.5 max-w-3xl mx-auto shadow-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-green)] font-semibold">
              SOLUTION ARCHITECTURE ADVISORY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Not sure which solution matches your business problem?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Many enterprise systems require a multi-disciplinary approach (for instance, custom AI integrated into an approval workflow with mobile apps). Schedule a consultative architecture call with our team.
            </p>
            <div className="pt-1">
              <NextLink href="/contact?intent=project">
                <Button as="span" size="lg" variant="primary" className="text-xs font-semibold">
                  <span>Start Project Brief</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </NextLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

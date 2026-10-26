import React from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Database, Network, Lock, Cloud, Wrench, Compass, ArrowUpRight } from "lucide-react";
import { SERVICES, ServiceItem } from "@/content/services-data";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | ATC Technix",
  description:
    "Explore the 7 core technology services engineered by ATC Technix: AI & Intelligent Systems, Software Development, System Integration, Cybersecurity, Cloud & Infrastructure, Managed Services, and Technology Consulting.",
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "ai-intelligent-systems": Cpu,
  "software-development": Database,
  "system-integration": Network,
  "cybersecurity": Lock,
  "cloud-infrastructure": Cloud,
  "managed-services": Wrench,
  "technology-consulting": Compass,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 py-3 sm:py-6">
      {/* 1. Hero Section */}
      <section className="container-custom pt-2 pb-6 sm:pt-4 sm:pb-8 border-b border-[var(--border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3.5 text-left">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span>ATC TECHNIX // CAPABILITY PORTFOLIO</span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12]">
                We engineer technology for complex businesses.
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                ATC Technix builds AI systems, enterprise software, integrations, and managed technology services that help organizations automate operations, connect systems, and make better use of their data.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <NextLink href="/contact?intent=project">
                  <Button as="span" size="lg" variant="primary" className="text-xs sm:text-sm font-semibold">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </NextLink>

                <NextLink href="/contact?intent=consultation">
                  <Button as="span" size="lg" variant="outline" className="text-xs sm:text-sm font-semibold">
                    <span>Request Consultation</span>
                  </Button>
                </NextLink>
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <Reveal>
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col gap-0.5">
                  <div className="text-2xl font-bold text-slate-900 font-mono">07</div>
                  <div className="text-xs font-semibold text-slate-800">Core Disciplines</div>
                  <div className="text-[11px] text-slate-500 leading-tight">From AI to Managed Ops</div>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col gap-0.5">
                  <div className="text-2xl font-bold text-emerald-600 font-mono">100%</div>
                  <div className="text-xs font-semibold text-slate-800">IP Ownership</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Zero vendor lock-in</div>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col gap-0.5">
                  <div className="text-2xl font-bold text-[var(--accent-ai)] font-mono">5-Stage</div>
                  <div className="text-xs font-semibold text-slate-800">Delivery Lifecycle</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Auditable milestone sprints</div>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col gap-0.5">
                  <div className="text-2xl font-bold text-slate-900 font-mono">VPC / On-Prem</div>
                  <div className="text-xs font-semibold text-slate-800">Private Perimeter</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Production containment</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Clear Distinction Banner: Services vs Solutions vs Products */}
      <section className="container-custom">
        <Reveal>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col gap-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Platform Architecture // How We Structure Our Engagements
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold font-mono uppercase text-[var(--accent-ai)]">
                  01. Services
                </div>
                <div className="text-sm font-bold text-slate-900">
                  What We Do For You
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end engineering capabilities: AI development, custom software, system integration, cybersecurity, cloud architecture, managed ops, and consulting.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold font-mono uppercase text-emerald-600">
                  02. Solutions
                </div>
                <div className="text-sm font-bold text-slate-900">
                  What We Build Around Problems
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered systems configured around specific operational friction: Custom AI knowledge engines, autonomous agent workflows, enterprise backbones, and apps.
                </p>
                <NextLink href="/solutions" className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 mt-auto pt-1">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3 h-3" />
                </NextLink>
              </div>

              <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold font-mono uppercase text-amber-600">
                  03. Delivery &amp; Process
                </div>
                <div className="text-sm font-bold text-slate-900">
                  How We Deliver Value
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured architecture sprints, transparent sprint execution, secure cloud deployment, and long-term managed operations.
                </p>
                <NextLink href="/process" className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 mt-auto pt-1">
                  <span>Explore Delivery Process</span>
                  <ArrowRight className="w-3 h-3" />
                </NextLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. The 7 Core Services In-Depth */}
      <section className="container-custom flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
            Comprehensive Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Seven Focused Engineering Services
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
            Each service operates either as an independent project or as an integrated component of a broader enterprise modernization engagement.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Cpu;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-20 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col gap-4 sm:gap-5 hover:border-slate-300 transition-colors"
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
                          SERVICE {service.num}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          ATC TECHNIX
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                          {service.title}
                        </h3>
                        <span className="hidden sm:inline text-slate-300">•</span>
                        <p className="text-xs sm:text-sm font-medium text-emerald-700">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <NextLink
                    href={`/contact?intent=project&service=${encodeURIComponent(service.title)}`}
                    className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[var(--accent-green)] text-[#071B3B] text-xs font-bold shadow-2xs hover:bg-[#00ea83] transition-colors inline-flex items-center gap-1.5 shrink-0"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NextLink>
                </div>

                {/* Body Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
                  {/* Left Column: Executive Summary & System Flow (6 cols) */}
                  <div className="lg:col-span-6 flex flex-col gap-3.5">
                    <div className="flex flex-col gap-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Overview &amp; Practical Value
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {service.executiveSummary}
                      </p>
                    </div>

                    {/* System Flow Diagram Box */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#071B3B] text-white border border-[#162D50] flex flex-col gap-2 shadow-2xs">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        <span>OPERATIONAL SYSTEM FLOW</span>
                        <span className="text-[var(--accent-green)]">Production Architecture</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 py-0.5">
                        {service.visualFlow.map((step, sIdx) => (
                          <React.Fragment key={step}>
                            <div className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-xs font-semibold text-white tracking-wide flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                              <span>{step}</span>
                            </div>
                            {sIdx < service.visualFlow.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {service.visualFlowDescription}
                      </p>
                    </div>

                    {/* Ideal For */}
                    <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200/80 p-2.5 sm:p-3 rounded-lg">
                      <strong className="text-slate-900 font-semibold">Best suited for: </strong>
                      {service.idealFor}
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Technical Standards (6 cols) */}
                  <div className="lg:col-span-6 flex flex-col gap-3.5">
                    {/* Capabilities */}
                    <div className="flex flex-col gap-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Core Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.capabilities.map((cap) => (
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
                          {service.technicalHighlights.map((hl) => (
                            <li key={hl} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-ai)] shrink-0 mt-1" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Business Outcomes */}
                      <div className="flex flex-col gap-1.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                          Tangible Outcomes
                        </div>
                        <ul className="flex flex-col gap-1.5 text-xs text-slate-700">
                          {service.businessOutcomes.map((outcome) => (
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
        </div>
      </section>

      {/* 4. Methodology / Operating Process */}
      <section className="w-full bg-[#071B3B] text-white py-10 sm:py-12 border-y border-[#162D50]">
        <div className="container-custom flex flex-col gap-6 sm:gap-7">
          <div className="max-w-2xl flex flex-col gap-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-green)] font-semibold">
              EXECUTION PROCESS // 5-STAGE LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How ATC Technix delivers.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every project follows an auditable, phased engagement structure so executive sponsors always maintain clear visibility, budget control, and verified milestone validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              {
                num: "01",
                name: "Understand",
                desc: "Map existing workflows, data stores, bottlenecks, and security boundaries before choosing technologies.",
              },
              {
                num: "02",
                name: "Design",
                desc: "Produce architectural blueprints, data models, schema contracts, and non-functional requirement specifications.",
              },
              {
                num: "03",
                name: "Build",
                desc: "Iterative sprints delivering type-safe code, automated test coverage, and weekly working software deployments.",
              },
              {
                num: "04",
                name: "Integrate",
                desc: "Connect new software with legacy databases, authentication providers, and third-party API services with zero data loss.",
              },
              {
                num: "05",
                name: "Operate",
                desc: "Proactive telemetry, automated backups, security patching, and ongoing SLA maintenance to ensure peak reliability.",
              },
            ].map((stage) => (
              <div
                key={stage.num}
                className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1.5"
              >
                <div className="font-mono text-xs font-bold text-[var(--accent-green)]">
                  {stage.num}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {stage.name}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="container-custom pb-4 sm:pb-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center text-center gap-3.5 sm:gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[var(--accent-ai)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
            <span>LET&apos;S DISCUSS YOUR ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Have a project or operational challenge?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
            Connect directly with our engineering leadership to evaluate your technical requirements, explore feasible architectures, or request a technology consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <NextLink href="/contact?intent=project">
              <Button as="span" size="lg" variant="primary" className="text-xs sm:text-sm font-semibold">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>

            <NextLink href="/contact?intent=consultation">
              <Button as="span" size="lg" variant="outline" className="text-xs sm:text-sm font-semibold">
                <span>Request Consultation</span>
              </Button>
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

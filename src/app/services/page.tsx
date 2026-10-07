import React from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Database, Network, Lock, Cloud, Wrench, Compass, ArrowUpRight } from "lucide-react";
import { SERVICES, ServiceItem } from "@/content/services-data";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | ATC Digital Labs",
  description:
    "Explore the 7 core technology services engineered by ATC Digital Labs: AI & Intelligent Systems, Software Development, System Integration, Cybersecurity, Cloud & Infrastructure, Managed Services, and Technology Consulting.",
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
    <div className="flex flex-col gap-12 sm:gap-20 py-6 sm:py-10">
      {/* 1. Hero Section */}
      <section className="container-custom pt-4 pb-8 sm:pb-12 border-b border-[var(--border)]">
        <div className="max-w-4xl flex flex-col gap-5 text-left">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span>ATC DIGITAL LABS // CAPABILITY PORTFOLIO</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
              We engineer technology for complex businesses.
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              ATC Digital Labs builds AI systems, enterprise software, integrations, and managed technology services that help organizations automate operations, connect systems, and make better use of their data.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <NextLink href="/contact?intent=project">
                <Button as="span" size="lg" variant="primary" className="text-sm font-semibold">
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </NextLink>

              <NextLink href="/contact?intent=consultation">
                <Button as="span" size="lg" variant="outline" className="text-sm font-semibold">
                  <span>Request Consultation</span>
                </Button>
              </NextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Clear Distinction Banner: Services vs Solutions vs Products */}
      <section className="container-custom">
        <Reveal>
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col gap-5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Platform Architecture // How We Structure Our Engagements
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
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

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold font-mono uppercase text-emerald-600">
                  02. Solutions
                </div>
                <div className="text-sm font-bold text-slate-900">
                  What We Build Around Problems
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered systems configured around specific operational friction: Custom AI knowledge engines, autonomous agent workflows, enterprise backbones, and apps.
                </p>
                <NextLink href="/solutions" className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 mt-auto pt-2">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3 h-3" />
                </NextLink>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold font-mono uppercase text-amber-600">
                  03. Products
                </div>
                <div className="text-sm font-bold text-slate-900">
                  What We&apos;ve Engineered
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our internal platform engines available for live interactive evaluation: ATCDL Docs, ATCDL Ask, and autonomous workflow modules.
                </p>
                <NextLink href="/products" className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 mt-auto pt-2">
                  <span>View Product Showroom</span>
                  <ArrowRight className="w-3 h-3" />
                </NextLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. The 7 Core Services In-Depth */}
      <section className="container-custom flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col gap-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Seven Focused Engineering Services
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Each service operates either as an independent project or as an integrated component of a broader enterprise modernization engagement.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Cpu;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-24 p-6 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-8 hover:border-slate-300 transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#071B3B] text-[var(--accent-green)] border border-[#162D50] flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          SERVICE {service.num}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          ATC DIGITAL LABS
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-700">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <NextLink
                    href={`/contact?intent=project&service=${encodeURIComponent(service.title)}`}
                    className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[var(--accent-green)] text-[#071B3B] text-xs font-bold shadow-xs hover:bg-[#00ea83] transition-colors inline-flex items-center gap-1.5 shrink-0"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NextLink>
                </div>

                {/* Body Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Executive Summary & System Flow (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Overview &amp; Practical Value
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {service.executiveSummary}
                      </p>
                    </div>

                    {/* System Flow Diagram Box */}
                    <div className="p-5 rounded-xl bg-[#071B3B] text-white border border-[#162D50] flex flex-col gap-3 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        <span>OPERATIONAL SYSTEM FLOW</span>
                        <span className="text-[var(--accent-green)]">Production Architecture</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-1.5">
                        {service.visualFlow.map((step, sIdx) => (
                          <React.Fragment key={step}>
                            <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                              <span>{step}</span>
                            </div>
                            {sIdx < service.visualFlow.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {service.visualFlowDescription}
                      </p>
                    </div>

                    {/* Ideal For */}
                    <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                      <strong className="text-slate-900 font-semibold">Best suited for: </strong>
                      {service.idealFor}
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Technical Standards (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Capabilities */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Core Capabilities
                      </div>
                      <div className="flex flex-col gap-2">
                        {service.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-start gap-2.5 text-xs text-slate-800 leading-snug p-2.5 rounded-lg bg-slate-50/70 border border-slate-100"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Standards */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Technical Architecture Standards
                      </div>
                      <ul className="flex flex-col gap-2 text-xs text-slate-600">
                        {service.technicalHighlights.map((hl) => (
                          <li key={hl} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-ai)] shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Outcomes */}
                    <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Tangible Outcomes
                      </div>
                      <ul className="flex flex-col gap-1.5 text-xs text-slate-700">
                        {service.businessOutcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Methodology / Operating Process */}
      <section className="w-full bg-[#071B3B] text-white py-14 sm:py-18 border-y border-[#162D50]">
        <div className="container-custom flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-green)] font-semibold">
              EXECUTION PROCESS // 5-STAGE LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How ATC Digital Labs delivers.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every project follows an auditable, phased engagement structure so executive sponsors always maintain clear visibility, budget control, and verified milestone validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2.5"
              >
                <div className="font-mono text-xs font-bold text-[var(--accent-green)]">
                  {stage.num}
                </div>
                <div className="text-base font-bold text-white">
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
      <section className="container-custom pb-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[var(--accent-ai)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
            <span>LET&apos;S DISCUSS YOUR ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Have a project or operational challenge?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Connect directly with our engineering leadership to evaluate your technical requirements, explore feasible architectures, or request a technology consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <NextLink href="/contact?intent=project">
              <Button as="span" size="lg" variant="primary" className="text-sm font-semibold">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>

            <NextLink href="/contact?intent=consultation">
              <Button as="span" size="lg" variant="outline" className="text-sm font-semibold">
                <span>Request Consultation</span>
              </Button>
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

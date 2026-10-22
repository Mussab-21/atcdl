import React from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowUpRight,
  Radio,
  Landmark,
  Factory,
  Truck,
  Building2,
  Stethoscope,
  Sparkles,
  Workflow,
  Shield,
  FileCheck,
  Compass,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AboutSystemsIntegrationVisual } from "@/components/about/AboutSystemsIntegrationVisual";

export const metadata: Metadata = {
  title: "About Us | ATC Technix",
  description:
    "ATC Technix is a technology company focused on building, integrating, and operating software systems for organizations with complex operational needs.",
};

const SECTORS = [
  {
    name: "Telecommunications",
    desc: "Network diagnostic telemetry, BSS/OSS process automation, and customer support intelligence engines.",
    icon: Radio,
    href: "/industries#telecom",
  },
  {
    name: "Financial Services",
    desc: "Audit-ready transaction reconciliation, loan risk modeling, and regulatory compliance workflows.",
    icon: Landmark,
    href: "/industries#banking",
  },
  {
    name: "Manufacturing",
    desc: "Production line telemetry, equipment maintenance tracking, and supplier quality reporting.",
    icon: Factory,
    href: "/industries#manufacturing",
  },
  {
    name: "Logistics & Fleet",
    desc: "Multi-depot route planning, freight document processing, and warehouse inventory synchronization.",
    icon: Truck,
    href: "/industries#logistics",
  },
  {
    name: "Government & Public Sector",
    desc: "Citizen service portals, document verification pipelines, and secure infrastructure.",
    icon: Building2,
    href: "/industries",
  },
  {
    name: "Healthcare & Diagnostics",
    desc: "Patient intake systems, diagnostic specimen tracking, and medical record indexing.",
    icon: Stethoscope,
    href: "/industries",
  },
];

const WORK_STEPS = [
  {
    step: "01",
    title: "UNDERSTAND",
    subtitle: "Discovery & System Audit",
    desc: "We analyze your operational workflows, interview operators, and document integration touchpoints.",
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Architecture & Data Models",
    desc: "We define clear data models, security perimeters, interface mockups, and system architecture specifications.",
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Implementation Sprints",
    desc: "Iterative development sprints delivering clean, documented code and working build previews you can test on real devices.",
  },
  {
    step: "04",
    title: "INTEGRATE",
    subtitle: "System Bridges & Staging",
    desc: "We connect new systems to your existing software, databases, and APIs without interrupting ongoing business operations.",
  },
  {
    step: "05",
    title: "OPERATE",
    subtitle: "Telemetry & Continuity",
    desc: "Ongoing system monitoring, performance telemetry, security updates, and planned feature enhancements to support your operations.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 py-6 sm:py-10">
      {/* 1. Hero Section (Split Layout) */}
      <section className="container-custom pt-4 pb-8 sm:pb-12 border-b border-[var(--border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span>ATC TECHNIX // COMPANY PROFILE</span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.06]">
                Technology engineered around the way your organization works.
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-[15px] sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                ATC Technix is a technology company focused on building, integrating, and operating software systems for organizations with complex operational needs.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <NextLink href="/contact?intent=project">
                  <Button size="lg" variant="primary" className="text-sm font-semibold">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </NextLink>

                <NextLink href="/contact?intent=consultation">
                  <Button size="lg" variant="outline" className="text-sm font-semibold">
                    <span>Request Consultation</span>
                  </Button>
                </NextLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 w-full">
            <Reveal>
              <AboutSystemsIntegrationVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Why ATC Technix Exists */}
      <section className="container-custom">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Reveal>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
                    OUR PURPOSE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Why ATC Technix exists.
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="p-4 rounded-xl bg-slate-50 border-l-2 border-[var(--accent-green)] border-y border-r border-slate-200/80 mt-2">
                  <p className="text-sm italic font-medium text-slate-800 leading-snug">
                    &ldquo;Most organizations do not suffer from a lack of software. They suffer from software fragmentation.&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4 text-[15px] sm:text-base text-slate-700 leading-relaxed font-normal">
              <Reveal>
                <p>
                  Most organizations with established physical or multi-departmental operations do not suffer from a lack of software. They suffer from software fragmentation: off-the-shelf subscriptions that do not fit their operating procedures, data locked inside disconnected databases, and teams spending hundreds of hours manually transferring information across screens.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  ATC Technix operates as the specialized digital engineering division of ATC (Azaan Trading &amp; Contracting). We provide enterprise leaders with a disciplined, hands-on technology partner that designs, builds, and maintains custom systems built around real workflows—not generic templates.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  When we build software for your organization, you own your code, maintain control over your data, and work directly with the engineers who design and build the system.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Three Feature Cards Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Reveal>
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-2 h-full">
                <div className="text-xs font-mono font-bold text-[var(--accent-ai)] flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>NO FRAGMENTATION</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Custom systems engineered to connect disjointed spreadsheets and reduce manual data reconciliation.
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-2 h-full">
                <div className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>COMPLETE OWNERSHIP</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Deployment options that keep your data under your control, with full ownership of your code.
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-2 h-full">
                <div className="text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>DIRECT ENGINEERING ACCESS</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Direct access to the engineers who build your system rather than layers of non-technical liaisons.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Our Principles */}
      <section className="container-custom">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              OUR PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Guiding Engineering Philosophy
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 max-w-2xl">
              Every system we engineer is anchored in practical governance, transparent execution, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Reveal>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#071B3B] text-[var(--accent-green)] flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Ownership
                </h3>
                <p className="text-xs font-semibold text-emerald-700 font-mono">
                  You own your code and your data.
                </p>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  You maintain complete control of your intellectual property, repository access, and database architecture. We deliver clean, documented assets that belong entirely to your organization.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#071B3B] text-[var(--accent-green)] flex items-center justify-center font-bold">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Transparency
                </h3>
                <p className="text-xs font-semibold text-emerald-700 font-mono">
                  Clear, milestone-based delivery.
                </p>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Working build previews, auditable architecture documentation, and direct communication at every development stage so stakeholders always know where projects stand.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#071B3B] text-[var(--accent-green)] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Durability
                </h3>
                <p className="text-xs font-semibold text-emerald-700 font-mono">
                  Software built to last.
                </p>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Engineered on proven technologies with clean structures, modular data models, and maintainable codebases designed for steady operational use.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. What We Do (Compact 3 Pillars) */}
      <section className="container-custom flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              TECHNICAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              What We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              How we structure our capabilities, system configurations, and project execution.
            </p>
          </div>
          <NextLink
            href="/services"
            className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Explore In-Depth Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NextLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Reveal>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-5 h-full">
              <div className="flex flex-col gap-2.5">
                <div className="text-xs font-mono font-bold uppercase text-[var(--accent-ai)]">
                  01. Services
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  What We Do For You
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  End-to-end engineering capabilities: AI development, custom software, system integration, cybersecurity, cloud architecture, managed operations, and technology consulting.
                </p>
              </div>
              <NextLink
                href="/services"
                className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-5 h-full">
              <div className="flex flex-col gap-2.5">
                <div className="text-xs font-mono font-bold uppercase text-emerald-600">
                  02. Solutions
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  What We Build Around Problems
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Engineered systems configured around specific operational friction: Custom AI knowledge engines, autonomous agent workflows, enterprise backbones, and web &amp; mobile platforms.
                </p>
              </div>
              <NextLink
                href="/solutions"
                className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-5 h-full">
              <div className="flex flex-col gap-2.5">
                <div className="text-xs font-mono font-bold uppercase text-amber-600">
                  03. Delivery &amp; Process
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  How We Deliver Value
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Structured architecture discovery, transparent sprint execution, secure cloud deployment, and long-term managed operations.
                </p>
              </div>
              <NextLink
                href="/process"
                className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Explore Delivery Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Where Our Technology Applies */}
      <section className="container-custom flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              SECTORS OF APPLICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Where our technology applies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              How our software and AI engineering capabilities address operational challenges across different sectors.
            </p>
          </div>
          <NextLink
            href="/industries"
            className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>View Industry Intelligence</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NextLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((ind) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name}>
                <NextLink
                  href={ind.href}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-600/50 hover:shadow-xs transition-all flex flex-col gap-3 group h-full"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-[var(--accent-green)] group-hover:text-[#071B3B] group-hover:border-[var(--accent-green)] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                      <span>{ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600" />
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {ind.desc}
                    </p>
                  </div>
                </NextLink>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 6. How We Work Together (Dark Navy Band) */}
      <section className="w-full bg-[#071B3B] text-white py-14 sm:py-18 border-y border-[#162D50]">
        <div className="container-custom flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-green)] font-semibold">
              OPERATIONAL METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How we work together.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Structured milestone verification from discovery to ongoing operation.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {WORK_STEPS.map((phase) => (
              <Reveal key={phase.step}>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 h-full hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-full bg-[var(--accent-green)]/15 border border-[var(--accent-green)]/30 text-[var(--accent-green)] font-mono text-xs font-bold flex items-center justify-center">
                      {phase.step}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      PHASE
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide mt-1">
                    {phase.title}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--accent-green)]/90">
                    {phase.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1 font-normal">
                    {phase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="container-custom pb-6">
        <Reveal>
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[var(--accent-ai)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
              <span>START A DIALOGUE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Have a technology challenge? Let&apos;s talk.
            </h2>

            <p className="text-[15px] sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Whether you need a unified operations platform, an AI knowledge system, or system integration across legacy tools, our engineers are ready to review your requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <NextLink href="/contact?intent=project">
                <Button size="lg" variant="primary" className="text-sm font-semibold">
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </NextLink>

              <NextLink href="/contact?intent=consultation">
                <Button size="lg" variant="outline" className="text-sm font-semibold">
                  <span>Request Consultation</span>
                </Button>
              </NextLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

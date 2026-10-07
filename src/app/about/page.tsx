import React from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  Radio,
  Landmark,
  Factory,
  Truck,
  Building2,
  Stethoscope,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/content/services-data";

export const metadata: Metadata = {
  title: "About Us | ATC Digital Labs",
  description:
    "ATC Digital Labs is a technology company focused on building, integrating, and operating software systems for organizations with complex operational needs.",
};

const INDUSTRIES_SERVED = [
  {
    name: "Telecommunications",
    desc: "Network diagnostic telemetry, BSS/OSS automation, and subscriber support engines.",
    icon: Radio,
    href: "/industries#telecom",
  },
  {
    name: "Financial Services",
    desc: "Audit-ready transaction reconciliation, loan risk modeling, and AML compliance workflows.",
    icon: Landmark,
    href: "/industries#banking",
  },
  {
    name: "Manufacturing",
    desc: "Production line telemetry, predictive maintenance, and supplier defect triage.",
    icon: Factory,
    href: "/industries#manufacturing",
  },
  {
    name: "Logistics & Fleet",
    desc: "Multi-depot route optimization, freight document parsing, and warehouse inventory sync.",
    icon: Truck,
    href: "/industries#logistics",
  },
  {
    name: "Government & Public Sector",
    desc: "Secure citizen service portals, document verification engines, and isolated private infrastructure.",
    icon: Building2,
    href: "/industries",
  },
  {
    name: "Healthcare & Diagnostics",
    desc: "Encrypted patient intake portals, lab specimen tracking, and medical record indexing.",
    icon: Stethoscope,
    href: "/industries",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20 py-6 sm:py-10">
      {/* 1. Hero Section */}
      <section className="container-custom pt-4 pb-8 sm:pb-12 border-b border-[var(--border)]">
        <div className="max-w-4xl flex flex-col gap-5 text-left">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span>ATC DIGITAL LABS // COMPANY PROFILE</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.06]">
              Technology engineered around the way your organization works.
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              ATC Digital Labs is a technology company focused on building, integrating, and operating software systems for organizations with complex operational needs.
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

      {/* 2. Our Company — Truthful, Grounded Identity */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              OUR COMPANY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why ATC Digital Labs exists.
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Engineering discipline over marketing hype.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p>
              Most organizations with established physical or multi-departmental operations do not suffer from a lack of software. They suffer from software fragmentation: off-the-shelf subscriptions that don&apos;t fit their operating procedures, data locked inside disconnected databases, and teams spending hundreds of hours manually transferring information across screens.
            </p>
            <p>
              ATC Digital Labs operates as the specialized digital engineering division of ATC (Azaan Trading &amp; Contracting). We were built to provide enterprise leaders with a disciplined, hands-on technology partner that designs, builds, and maintains custom systems built around real workflows—not generic templates.
            </p>
            <p>
              We believe in sovereignty, transparency, and operational durability. When we build software for your organization, you own your code, maintain control of your private data perimeters, and work directly with engineers who understand system architecture from the ground up.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-bold text-[var(--accent-ai)] mb-1">
                  NO FRAGMENTATION
                </div>
                <div className="text-xs text-slate-600">
                  Custom systems engineered to replace disjointed spreadsheets and multiple SaaS fees.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-bold text-emerald-600 mb-1">
                  COMPLETE SOVEREIGNTY
                </div>
                <div className="text-xs text-slate-600">
                  VPC, on-premise, and air-gapped deployments ensuring you retain complete data custody.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-bold text-slate-800 mb-1">
                  SENIOR OWNERSHIP
                </div>
                <div className="text-xs text-slate-600">
                  Direct engagement with senior architects rather than layers of non-technical liaisons.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Structure — Honest, Grounded Presentation */}
      <section className="container-custom">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              ENGINEERING LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Headed by hands-on systems architects.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not outsource technical governance. Every project is architected, reviewed, and steered by experienced engineers committed to long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#071B3B] text-[var(--accent-green)] font-bold text-sm flex items-center justify-center font-mono">
                  MB
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Mussab
                  </h3>
                  <div className="text-xs text-[var(--accent-ai)] font-medium">
                    Technical Lead &amp; Systems Architect
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Directs system architecture, AI pipeline integration, and software engineering standards. Leads technical design reviews and client solution blueprints across enterprise engagements.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span>Architecture &bull; AI Infrastructure &bull; Core Platforms</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm flex items-center justify-center font-mono border border-slate-200">
                  SE
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Systems Engineering Team
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    Core Application &amp; Integration Engineering
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dedicated full-stack and backend engineers specializing in type-safe Next.js/React frontends, resilient distributed backends, event pipelines, and legacy database bridges.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span>Full-Stack &bull; APIs &bull; Database Modernization</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm flex items-center justify-center font-mono border border-slate-200">
                  SO
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Security &amp; Cloud Operations
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    Infrastructure, VPC &amp; Managed Services
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Oversees automated CI/CD deployments, zero-trust network configurations, container orchestration, 24/7 monitoring telemetry, and rapid incident response protocols.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span>Cloud &bull; Zero-Trust &bull; 24/7 Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities (Linked directly to Canonical 7 Services) */}
      <section className="container-custom flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              TECHNICAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Our 7 Core Service Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Shared canonical capabilities powering all client engagements and custom software builds.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <NextLink
              key={service.id}
              href={`/services#${service.slug}`}
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-[var(--accent-ai)]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[var(--accent-ai)] group-hover:text-white transition-colors">
                    {service.num}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--accent-ai)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[var(--accent-ai)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                <span>Flow:</span>
                <span className="text-slate-800 font-semibold">{service.visualFlow.join(" → ")}</span>
              </div>
            </NextLink>
          ))}
        </div>
      </section>

      {/* 5. Industries We Serve (Compact Visual Categories) */}
      <section className="container-custom flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
              SECTORS OF APPLICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Custom technology engineered for domain-specific operational friction and compliance needs.
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
          {INDUSTRIES_SERVED.map((ind) => {
            const Icon = ind.icon;
            return (
              <NextLink
                key={ind.name}
                href={ind.href}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-600/50 hover:shadow-xs transition-all flex flex-col gap-3 group"
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
            );
          })}
        </div>
      </section>

      {/* 6. How We Work — 5-Stage Business Delivery Model */}
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
              We replace guesswork with structured milestone verification. From discovery to deployment, every step is transparent and milestone-gated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "UNDERSTAND",
                subtitle: "Requirements & System Audit",
                desc: "We analyze your physical or digital workflow, interview operational operators, and document integration touchpoints.",
              },
              {
                step: "02",
                title: "DESIGN",
                subtitle: "Architecture & Data Schemas",
                desc: "We define clean data contracts, security perimeters, UI wireframes, and database specifications for formal signoff.",
              },
              {
                step: "03",
                title: "BUILD",
                subtitle: "Type-Safe Implementation",
                desc: "Iterative sprints delivering clean, documented code and working weekly build previews you can test on real devices.",
              },
              {
                step: "04",
                title: "INTEGRATE",
                subtitle: "System Bridges & Migration",
                desc: "Connecting with your live ERP, authentication layers, and legacy databases with zero disruption to active business.",
              },
              {
                step: "05",
                title: "OPERATE",
                subtitle: "Monitoring & Continuity",
                desc: "Ongoing 24/7 telemetry, security updates, SLA response, and feature enhancements to support your growth.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2"
              >
                <div className="font-mono text-xs font-bold text-[var(--accent-green)]">
                  {phase.step}
                </div>
                <div className="text-base font-bold text-white tracking-wide">
                  {phase.title}
                </div>
                <div className="text-[11px] font-mono text-[var(--accent-green)]/90">
                  {phase.subtitle}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1 font-normal">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Section */}
      <section className="container-custom pb-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[var(--accent-ai)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
            <span>START A DIALOGUE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Let&apos;s discuss what you&apos;re trying to build.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Whether you need a complete enterprise platform, an AI knowledge system, or system integration across legacy silos, our team is ready to review your requirements.
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

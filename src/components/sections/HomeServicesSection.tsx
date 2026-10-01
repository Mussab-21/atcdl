"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { clsx } from "clsx";
import { ArrowRight, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SERVICES, ServiceItem } from "@/content/services-data";
import { Reveal } from "@/components/motion/Reveal";

export const HomeServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService: ServiceItem =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="container-custom section-peek-snap py-8 sm:py-12">
      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[var(--border)] pb-6">
            <div className="max-w-2xl flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                <span>WHAT WE DO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                Technology services for operational leverage.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-1">
                From strategy to implementation and ongoing operations, ATC Digital Labs helps organizations build, connect, and manage the technology their business depends on.
              </p>
            </div>

            <NextLink
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-ai)] hover:text-[#0052cc] transition-colors py-2 group whitespace-nowrap"
            >
              <span>Explore All 7 Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </NextLink>
          </div>
        </Reveal>

        {/* Interactive Service Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: 7 Service Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceId(service.id)}
                  className={clsx(
                    "w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group",
                    isActive
                      ? "bg-[#071B3B] text-white border-[#1B365D] shadow-md shadow-[#071B3B]/10 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={clsx(
                        "font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 transition-colors",
                        isActive
                          ? "bg-[var(--accent-green)]/20 text-[var(--accent-green)] border border-[var(--accent-green)]/30"
                          : "bg-slate-100 text-slate-500 border border-slate-200 group-hover:text-slate-700"
                      )}
                    >
                      {service.num}
                    </span>
                    <span
                      className={clsx(
                        "text-sm font-semibold truncate transition-colors",
                        isActive ? "text-white" : "text-slate-900 group-hover:text-[var(--accent-ai)]"
                      )}
                    >
                      {service.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={clsx(
                      "w-4 h-4 shrink-0 transition-all duration-200",
                      isActive
                        ? "text-[var(--accent-green)] translate-x-0 opacity-100"
                        : "text-slate-400 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Service Showcase Window (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#071B3B] border border-[#162D50] text-white shadow-xl flex flex-col gap-6 relative overflow-hidden">
              {/* Subtle architectural ambient glow */}
              <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--accent-green)]/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Top metadata badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[var(--accent-green)] font-semibold">
                    SERVICE {activeService.num}
                  </span>
                  <span className="text-white/30 text-xs">/</span>
                  <span className="text-xs uppercase tracking-wider text-white/70 font-mono">
                    ATC DIGITAL LABS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  Enterprise Ready
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {activeService.title}
                </h3>
                <p className="text-sm font-medium text-[var(--accent-green)]">
                  {activeService.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {activeService.shortDesc}
                </p>
              </div>

              {/* Visual Flow Diagram */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#040E1E] border border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <span>HOW IT WORKS</span>
                  <span className="text-[var(--accent-green)] text-[10px]">Step by step</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-1">
                  {activeService.visualFlow.map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white tracking-wide flex items-center gap-1.5 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                        <span>{step}</span>
                      </div>
                      {idx < activeService.visualFlow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeService.visualFlowDescription}
                </p>
              </div>

              {/* Core Deliverables / Capabilities */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  What your business gets:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start gap-2 text-xs text-slate-200 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <NextLink
                  href={`/contact?intent=project&service=${encodeURIComponent(activeService.title)}`}
                  className="px-5 py-2.5 rounded-xl bg-[var(--accent-green)] text-[#071B3B] text-xs font-bold shadow-sm hover:bg-[#00ea83] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#071B3B]" />
                </NextLink>

                <NextLink
                  href={`/services#${activeService.slug}`}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

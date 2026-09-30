"use client";

import React from "react";
import { WEB_MOBILE_DATA } from "@/content/web-mobile-data";
import {
  Lightbulb,
  Globe2,
  Smartphone,
  RefreshCw,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function WebMobileFitScenariosSection() {
  const icons = [Lightbulb, Globe2, Smartphone, RefreshCw];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Product Fit</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          This Is A Good Fit If...
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Whether you are launching a greenfield digital product or upgrading a customer portal, our engineering ensures sub-second speed, accessible UX, and reliable scale.
        </p>
      </div>

      {/* 4 Visual Fit Scenarios (2x2 Grid / 4 cols desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WEB_MOBILE_DATA.fitScenarios.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs flex flex-col justify-between gap-4 text-left hover:border-[#2563EB] hover:shadow-xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
                  Scenario 0{idx + 1}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-[#091326]">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-[#2563EB] font-semibold">
                  {item.subtitle}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  {item.problem}
                </p>
              </div>

              {/* Visual Flow Indicator */}
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[10px] text-slate-600 flex items-center justify-between">
                {idx === 0 && (
                  <>
                    <span>Concept</span>
                    <ArrowRight className="w-3 h-3 text-[#2563EB]" />
                    <span className="text-[#00D477] font-bold">Live App Stores</span>
                  </>
                )}
                {idx === 1 && (
                  <>
                    <span>Phone Calls</span>
                    <ArrowRight className="w-3 h-3 text-[#2563EB]" />
                    <span className="text-[#00D477] font-bold">24/7 Self-Service</span>
                  </>
                )}
                {idx === 2 && (
                  <>
                    <span>Paper / Forms</span>
                    <ArrowRight className="w-3 h-3 text-[#2563EB]" />
                    <span className="text-[#00D477] font-bold">Offline Mobile</span>
                  </>
                )}
                {idx === 3 && (
                  <>
                    <span>Slow Legacy</span>
                    <ArrowRight className="w-3 h-3 text-[#2563EB]" />
                    <span className="text-[#00D477] font-bold">Sub-Second Modern</span>
                  </>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 text-xs text-slate-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D477] shrink-0 mt-0.5" />
                <span className="leading-snug">{item.solution}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Engineering Standards Callout */}
      <div className="p-6 rounded-2xl bg-[#071B3B] text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-[#00D477] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <span className="text-xs font-mono font-bold text-[#00D477] uppercase tracking-wider">
              Engineering Standard // Zero Low-Code Bloat
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              We never assemble fragile low-code drag-and-drop templates that break under real customer traffic. We engineer clean, hand-crafted TypeScript and React/React Native software with automated unit test suites, sub-second speeds, and 100% client code ownership.
            </p>
          </div>
        </div>

        <div className="shrink-0 px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs border border-white/15">
          100% Client Code Ownership
        </div>
      </div>
    </section>
  );
}

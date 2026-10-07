"use client";

import React, { useState } from "react";
import { INDUSTRY_CAPABILITIES_DATA } from "@/content/industries-explorer-data";
import { Brain, Bot, Network, LayoutDashboard, CheckCircle2 } from "lucide-react";

export function IndustryWhatWeBuildSection() {
  const [activeTab, setActiveTab] = useState<string>("ai-systems");

  const icons: Record<string, React.ElementType> = {
    "ai-systems": Brain,
    automation: Bot,
    integrations: Network,
    platforms: LayoutDashboard,
  };

  const activeCapability =
    INDUSTRY_CAPABILITIES_DATA.find((c) => c.id === activeTab) ||
    INDUSTRY_CAPABILITIES_DATA[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E6F4F5] border border-[#BCE3E6] text-[#007F86] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
            <span>Capability Modules</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#071326]">
            What We Can Build Around Your Industry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#53657D] leading-relaxed">
            We don&apos;t build speculative pilots or generic templates. We deliver 4 core architectural modules tailored directly to your operational stack.
          </p>
        </div>

        {/* 4 Capability Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {INDUSTRY_CAPABILITIES_DATA.map((cap) => {
            const Icon = icons[cap.id] || Brain;
            const isActive = activeTab === cap.id;

            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setActiveTab(cap.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                  isActive
                    ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md shadow-blue-900/10 ring-2 ring-blue-500/20"
                    : "bg-[#F7F9FC] text-[#071326] border-[#DCE5EF] hover:border-[#3B82F6] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-[#DCE5EF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                      isActive ? "bg-blue-950 text-cyan-300 border border-blue-800" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {cap.eyebrow}
                  </span>
                </div>

                <div>
                  <h3 className={`text-sm font-bold ${isActive ? "text-white" : "text-[#071326]"}`}>
                    {cap.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                      isActive ? "text-slate-300" : "text-[#53657D]"
                    }`}
                  >
                    {cap.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive High-Contrast Console Panel */}
        <div className="rounded-3xl bg-[#071B3B] border border-[#18345C] p-6 sm:p-10 shadow-[0_24px_60px_rgba(7,27,59,0.16)] text-white relative overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-8">
            {/* Left side: Technical Overview */}
            <div className="lg:w-1/2 flex flex-col justify-between gap-6 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D477]" />
                  <span>ARCHITECTURE // {activeCapability.eyebrow}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {activeCapability.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {activeCapability.summary}
                </p>

                <div className="space-y-2 border-t border-[#18345C] pt-4">
                  {activeCapability.systemHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Step-by-Step Flow Pipeline Diagram */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#091C36] border border-[#18345C] flex flex-col gap-4 text-left">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Execution Sequence Diagram
                </span>

                <div className="flex flex-col gap-2">
                  {activeCapability.flowSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#071830] border border-[#18345C] text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#051329] border border-[#18345C] flex-1 text-xs font-mono text-white flex items-center justify-between">
                        <span>{step}</span>
                        {idx < activeCapability.flowSteps.length - 1 && (
                          <span className="text-blue-400 font-bold hidden sm:inline">↓</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#18345C] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standard Latency: &lt; 250ms</span>
                  <span className="text-[#00D477] font-semibold">Rule-based validation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

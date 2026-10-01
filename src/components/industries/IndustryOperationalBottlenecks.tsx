"use client";

import React from "react";
import { Database, Workflow, BrainCircuit } from "lucide-react";

export function IndustryOperationalBottlenecks() {
  const bottlenecks = [
    {
      step: "01",
      tag: "DATA BOTTLENECK",
      title: "Information Trapped in Silos",
      desc: "Critical business data remains locked across disconnected ERPs, proprietary SCADA consoles, billing mainframes, and paper documents with zero unified access.",
      icon: Database,
      flow: ["Disparate Databases", "Inconsistent Schemas", "Trapped Knowledge"],
    },
    {
      step: "02",
      tag: "WORKFLOW BOTTLENECK",
      title: "Manual Re-Keying & Human Chokepoints",
      desc: "Skilled operators waste up to 35% of their working hours manually transcribing data between forms, tracking status emails, and resolving redundant tier-1 queries.",
      icon: Workflow,
      flow: ["Manual Form Re-Entry", "Slow Approval Chains", "Customer Hold Lag"],
    },
    {
      step: "03",
      tag: "DECISION BOTTLENECK",
      title: "Context Retrieval Delay",
      desc: "Supervisors spend hours hunting for source citations, past compliance circulars, and sensor history before making operational or underwriting decisions.",
      icon: BrainCircuit,
      flow: ["Missing Provenance", "Uncertain Compliance", "Delayed Execution"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9FC] border-b border-[#DCE5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E6F4F5] border border-[#BCE3E6] text-[#007F86] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
            <span>Root Friction Points</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#071326]">
            The Three Operational Bottlenecks
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#53657D] leading-relaxed">
            Regardless of industry, operational stagnation typically stems from three systemic breakdowns. We engineer software to dismantle each one.
          </p>
        </div>

        {/* 3 Compact Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottlenecks.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-white border border-[#DCE5EF] hover:border-[#3B82F6]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071326] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#53657D] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Micro-Workflow Strip */}
                <div className="p-3 rounded-xl bg-[#F7F9FC] border border-[#DCE5EF] font-mono text-[10px] text-slate-600">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 mb-1.5">
                    Root Breakdown Sequence:
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span>{item.flow[0]}</span>
                    <span className="text-blue-500 font-bold">→</span>
                    <span>{item.flow[1]}</span>
                    <span className="text-blue-500 font-bold">→</span>
                    <span className="text-red-500 font-bold">{item.flow[2]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

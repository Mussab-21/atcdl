"use client";

import React, { useState } from "react";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";
import { Check, ArrowRight } from "lucide-react";

export function AgentInteractiveComparison() {
  const [activeTab, setActiveTab] = useState<"task" | "workflow" | "auto">("workflow");

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Capability Progression</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          Compare Your AI Workforce
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          See how your automation grows from one task to an operational AI workforce.
        </p>
      </div>

      {/* Clean Neutral Surface Container (White / Dark Navy / Blue Accent) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-md flex flex-col gap-8">
        {/* Package Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("task")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "task"
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              01 Task Agent
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("workflow")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "workflow"
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              02 Workflow Agent
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("auto")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "auto"
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              03 Autonomous Operations
            </button>
          </div>

          <span className="text-xs font-mono text-slate-500">
            {activeTab === "task" && "Focus: 1 Dedicated Repetitive Task"}
            {activeTab === "workflow" && "Focus: Multi-Step Process + Human Oversight"}
            {activeTab === "auto" && "Focus: Multi-Agent Mesh & Enterprise Governance"}
          </span>
        </div>

        {/* Visual Progression Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
            Execution Progression Flow:
          </span>

          {activeTab === "task" && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200">INBOUND EVENT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-[#071B3B] text-white">AI WORKER</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">SYSTEM ACTION</span>
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200">REQUEST</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-[#071B3B] text-white">REASON &amp; VALIDATE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">HUMAN REVIEW IF EXCEPTION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">MULTI-SYSTEM SYNC</span>
            </div>
          )}

          {activeTab === "auto" && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200">ENTERPRISE CHANNELS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-[#071B3B] text-white">ORCHESTRATOR</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-900 border border-purple-200">MULTI-AGENT SWARM</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">OPERATIONAL EXECUTION</span>
            </div>
          )}
        </div>

        {/* Feature Comparison Table on Neutral Surface */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-[#091326] font-mono text-[11px] uppercase font-bold">
              <tr>
                <th className="p-3.5 font-bold">Automation Capability</th>
                <th className={`p-3.5 text-center font-bold transition-colors ${activeTab === "task" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-500"}`}>
                  Task Agent
                </th>
                <th className={`p-3.5 text-center font-bold transition-colors ${activeTab === "workflow" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-500"}`}>
                  Workflow Agent
                </th>
                <th className={`p-3.5 text-center font-bold transition-colors ${activeTab === "auto" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-500"}`}>
                  Autonomous Operations
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {AI_AGENTS_DATA.comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-medium text-[#091326]">
                    {row.name}
                  </td>
                  <td className={`p-3.5 text-center ${activeTab === "task" ? "bg-[#2563EB]/5" : ""}`}>
                    {row.task ? (
                      <Check className="w-4 h-4 text-[#2563EB] stroke-[2.5] mx-auto" />
                    ) : (
                      <span className="text-slate-300 font-mono">—</span>
                    )}
                  </td>
                  <td className={`p-3.5 text-center ${activeTab === "workflow" ? "bg-[#2563EB]/5" : ""}`}>
                    {row.workflow ? (
                      <Check className="w-4 h-4 text-[#2563EB] stroke-[2.5] mx-auto" />
                    ) : (
                      <span className="text-slate-300 font-mono">—</span>
                    )}
                  </td>
                  <td className={`p-3.5 text-center ${activeTab === "auto" ? "bg-[#2563EB]/5" : ""}`}>
                    {row.auto ? (
                      <Check className="w-4 h-4 text-[#2563EB] stroke-[2.5] mx-auto" />
                    ) : (
                      <span className="text-slate-300 font-mono">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

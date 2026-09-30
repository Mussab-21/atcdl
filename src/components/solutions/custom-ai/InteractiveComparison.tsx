"use client";

import React, { useState, useEffect } from "react";
import { CUSTOM_AI_DATA } from "@/content/custom-ai-data";
import { Check, ArrowRight } from "lucide-react";

export function InteractiveComparison() {
  const [activeTab, setActiveTab] = useState<"starter" | "workspace" | "command">("workspace");

  // Synchronize with package selector above
  useEffect(() => {
    const handlePackageSelect = (e: Event) => {
      const pkgId = (e as CustomEvent<string>).detail;
      if (pkgId === "starter") setActiveTab("starter");
      else if (pkgId === "workspace") setActiveTab("workspace");
      else if (pkgId === "command-center") setActiveTab("command");
    };

    window.addEventListener("atcdl-custom-ai-package", handlePackageSelect);
    return () => window.removeEventListener("atcdl-custom-ai-package", handlePackageSelect);
  }, []);

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Capability Progression</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          Compare Your Options
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          See how the systems grow as your requirements become more advanced.
        </p>
      </div>

      {/* Clean Neutral Surface Container (White / Dark Navy / Blue Accent) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-md flex flex-col gap-8">
        {/* Package Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("starter")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "starter"
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              01 AI Starter
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("workspace")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "workspace"
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              02 AI Workspace
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("command")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "command"
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              03 Command Center
            </button>
          </div>

          <span className="text-xs font-mono text-slate-500">
            {activeTab === "starter" && "Focus: 1 Core Knowledge Base"}
            {activeTab === "workspace" && "Focus: Cross-Department Operational Workspace"}
            {activeTab === "command" && "Focus: Air-Gapped VPC + Multi-Agent Workflows"}
          </span>
        </div>

        {/* Visual Architecture Progression Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
            Architecture Topology Flow:
          </span>

          {activeTab === "starter" && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200">DOCUMENTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-[#071B3B] text-white">AI CORE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">VERIFIED ANSWER</span>
            </div>
          )}

          {activeTab === "workspace" && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200">MULTI-SOURCE REPOS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-[#071B3B] text-white">AI WORKSPACE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-900 border border-purple-200">TEAMS / ROLES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">SLACK / TEAMS CONNECTORS</span>
            </div>
          )}

          {activeTab === "command" && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200">ENTERPRISE DATA / APIS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-[#071B3B] text-white">AIR-GAPPED AI CORE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-900 border border-purple-200">AUTONOMOUS AGENTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">SYSTEM EXECUTION</span>
            </div>
          )}
        </div>

        {/* Feature Comparison Table on Clean Neutral Surface */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-[#091326] font-mono text-[11px] uppercase font-bold">
              <tr>
                <th className="p-3.5 font-bold">System Capability</th>
                <th className={`p-3.5 text-center font-bold transition-colors ${activeTab === "starter" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-500"}`}>
                  AI Starter
                </th>
                <th className={`p-3.5 text-center font-bold transition-colors ${activeTab === "workspace" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-500"}`}>
                  AI Workspace
                </th>
                <th className={`p-3.5 text-center font-bold transition-colors ${activeTab === "command" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-500"}`}>
                  AI Command Center
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {CUSTOM_AI_DATA.comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-medium text-[#091326]">
                    {row.name}
                  </td>
                  <td className={`p-3.5 text-center ${activeTab === "starter" ? "bg-[#2563EB]/5" : ""}`}>
                    {row.starter ? (
                      <Check className="w-4 h-4 text-[#2563EB] stroke-[2.5] mx-auto" />
                    ) : (
                      <span className="text-slate-300 font-mono">—</span>
                    )}
                  </td>
                  <td className={`p-3.5 text-center ${activeTab === "workspace" ? "bg-[#2563EB]/5" : ""}`}>
                    {row.workspace ? (
                      <Check className="w-4 h-4 text-[#2563EB] stroke-[2.5] mx-auto" />
                    ) : (
                      <span className="text-slate-300 font-mono">—</span>
                    )}
                  </td>
                  <td className={`p-3.5 text-center ${activeTab === "command" ? "bg-[#2563EB]/5" : ""}`}>
                    {row.command ? (
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

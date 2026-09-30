"use client";

import React, { useState } from "react";
import { CUSTOM_AI_DATA } from "@/content/custom-ai-data";
import {
  MessageSquare,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
  Share2,
  Users,
} from "lucide-react";

export function WhatWeBuildInteractive() {
  const [activeHotspotId, setActiveHotspotId] = useState<"assistant" | "knowledge" | "security" | "integrations">("assistant");

  const activeHotspot = CUSTOM_AI_DATA.hotspots.find((h) => h.id === activeHotspotId) || CUSTOM_AI_DATA.hotspots[0];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Integrated Engineering Deliverable</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          What We Build For You
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Your AI system is more than a chatbot. We connect your knowledge, interface, controls, and business tools into one working system.
        </p>
      </div>

      {/* Interactive Hotspot Rail & Central Diagram (Target ~480-550px) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: 4 Selectable Nodes (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
          {CUSTOM_AI_DATA.hotspots.map((node) => {
            const isSelected = activeHotspotId === node.id;
            const icons = {
              assistant: MessageSquare,
              knowledge: Database,
              security: ShieldCheck,
              integrations: Share2,
            };
            const Icon = icons[node.id];

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveHotspotId(node.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex items-start gap-3.5 relative overflow-hidden ${
                  isSelected
                    ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/50"
                    : "bg-white border-[#DCE5EF] text-[#091326] hover:border-slate-300 hover:bg-slate-50/80"
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                    isSelected ? "bg-[#00D477]" : "bg-transparent"
                  }`}
                />

                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-colors ${
                    isSelected
                      ? "bg-[#2563EB] text-white"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        isSelected ? "text-[#00D477]" : "text-slate-400"
                      }`}
                    >
                      {node.step} {"//"} {node.badge}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                    )}
                  </div>
                  <h3
                    className={`text-base font-bold ${
                      isSelected ? "text-white" : "text-[#091326]"
                    }`}
                  >
                    {node.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {node.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Visual Diagram of Selected Hotspot (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-[#DCE5EF] p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6 relative overflow-hidden">
          {/* Top Context & Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                System Component {activeHotspot.step}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
                {activeHotspot.badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#091326]">
              {activeHotspot.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeHotspot.description}
            </p>
          </div>

          {/* Dynamic Central Architectural Flow Simulation */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-center min-h-[190px]">
            {activeHotspotId === "assistant" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs font-mono">
                    <Users className="w-4 h-4 text-[#2563EB]" />
                    <span>Employee Inquiries</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071B3B] text-white shadow-2xs font-mono font-bold">
                    <Sparkles className="w-4 h-4 text-[#00D477]" />
                    <span>Private AI Model</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-2xs font-mono font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#00D477]" />
                    <span>Exact Answers</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>Footnote citations included on 100% of answers</span>
                  <span className="font-mono text-emerald-600 font-bold text-[10px]">Verified PDF Page #</span>
                </div>
              </div>
            )}

            {activeHotspotId === "knowledge" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="grid grid-cols-4 gap-2 text-center font-mono text-[11px]">
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold">PDF SOPs</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold">Contracts</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold">Manuals</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold">SQL Data</div>
                </div>

                <div className="flex items-center justify-center gap-2 py-1 text-slate-400 font-mono text-xs">
                  <span>↓ Ingestion &amp; Chunking Pipeline ↓</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#071B3B] text-white flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#2563EB]" />
                    <span>Encrypted Vector Vault (pgvector / Qdrant)</span>
                  </div>
                  <span className="text-[#00D477] font-bold text-[10px]">Zero Public Leakage</span>
                </div>
              </div>
            )}

            {activeHotspotId === "security" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex items-center justify-between gap-2 font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-slate-600" />
                    <span>Role Verification</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 text-purple-900 font-bold flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>RBAC Permissions</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Approved Output</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>Finance sees Finance docs &bull; HR sees HR docs &bull; Legal sees Legal</span>
                  <span className="font-mono text-purple-600 font-bold text-[10px]">Active Directory Sync</span>
                </div>
              </div>
            )}

            {activeHotspotId === "integrations" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="grid grid-cols-4 gap-2 text-center font-mono text-[11px]">
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#2563EB]">Slack Bot</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#2563EB]">MS Teams</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#091326]">SharePoint</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#091326]">Custom REST</div>
                </div>

                <div className="flex items-center justify-center gap-2 py-1 text-slate-400 font-mono text-xs">
                  <span>↔ Bi-Directional OAuth Connectors ↔</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#071B3B] text-white flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-[#00D477]" />
                    <span>Embedded Directly into Existing Team Workspaces</span>
                  </div>
                  <span className="text-slate-300 text-[10px]">No New Tabs Needed</span>
                </div>
              </div>
            )}
          </div>

          {/* Key Deliverable Outputs */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase font-bold text-slate-400">
              Verified Deliverables Included:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeHotspot.keyOutputs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-1.5 text-xs text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D477] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

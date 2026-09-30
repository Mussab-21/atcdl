"use client";

import React, { useState } from "react";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";
import {
  FileSearch,
  Cpu,
  Zap,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Mail,
  FileText,
  Database,
  AlertTriangle,
} from "lucide-react";

export function WhatWeBuildAgentsInteractive() {
  const [activeHotspotId, setActiveHotspotId] = useState<"understand" | "reason" | "act" | "escalate">("understand");

  const activeHotspot = AI_AGENTS_DATA.hotspots.find((h) => h.id === activeHotspotId) || AI_AGENTS_DATA.hotspots[0];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Integrated Worker Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          What We Build For You
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          An AI agent is more than a chatbot. It is a system that can receive work, reason through it, act on it, and involve your team when needed.
        </p>
      </div>

      {/* Interactive Hotspot Rail & Central Diagram (Compact ~480-550px) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: 4 Selectable Nodes (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
          {AI_AGENTS_DATA.hotspots.map((node) => {
            const isSelected = activeHotspotId === node.id;
            const icons = {
              understand: FileSearch,
              reason: Cpu,
              act: Zap,
              escalate: UserCheck,
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
                Agent Capability {activeHotspot.step}
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
            {activeHotspotId === "understand" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="grid grid-cols-4 gap-2 text-center font-mono text-[11px]">
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold flex items-center justify-center gap-1">
                    <Mail className="w-3 h-3 text-[#2563EB]" />
                    <span>Email</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold flex items-center justify-center gap-1">
                    <FileText className="w-3 h-3 text-[#2563EB]" />
                    <span>PDF PO</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold flex items-center justify-center gap-1">
                    <Database className="w-3 h-3 text-[#2563EB]" />
                    <span>Webhook</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold">Forms</div>
                </div>

                <div className="flex items-center justify-center gap-2 py-1 text-slate-400 font-mono text-xs">
                  <span>↓ AI Parser &amp; Extraction ↓</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#071B3B] text-white flex items-center justify-between text-xs font-mono">
                  <span>Structured JSON Schema Output</span>
                  <span className="text-[#00D477] font-bold text-[10px]">100% Validated Types</span>
                </div>
              </div>
            )}

            {activeHotspotId === "reason" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex items-center justify-between gap-2 font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Input</span>
                    <strong>Raw Order Data</strong>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="p-2.5 rounded-lg bg-[#071B3B] text-white">
                    <span className="text-[#00D477] block text-[10px]">AI Logic</span>
                    <strong>Check Rules &amp; Math</strong>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <span className="text-emerald-600 block text-[10px]">Outcome</span>
                    <strong>Verified Decision</strong>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>Validates inventory stock, discounts, vendor contracts &amp; credit balance</span>
                  <span className="font-mono text-emerald-600 font-bold text-[10px]">Zero Guesswork</span>
                </div>
              </div>
            )}

            {activeHotspotId === "act" && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#2563EB]">ERP System</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#2563EB]">Salesforce / CRM</div>
                  <div className="p-2 rounded bg-white border border-slate-200 font-bold text-[#091326]">Accounting</div>
                </div>

                <div className="flex items-center justify-center gap-2 py-1 text-slate-400 font-mono text-xs">
                  <span>↔ Bi-Directional Idempotent Mutations ↔</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#071B3B] text-white flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D477]" />
                    <span>Records Created &bull; Dispatches Triggered &bull; Teams Notified</span>
                  </div>
                  <span className="text-[#00D477] font-bold text-[10px]">Auto-Retried</span>
                </div>
              </div>
            )}

            {activeHotspotId === "escalate" && (
              <div className="flex flex-col gap-3 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Discrepancy / High Value Trigger</span>
                  </div>
                  <span className="text-[10px] text-amber-700 font-bold">Auto-Paused</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="p-2 rounded bg-white border border-slate-200 flex-1 text-center">
                    Slack / Teams Card
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="p-2 rounded bg-emerald-100 text-emerald-900 font-bold flex-1 text-center">
                    Manager Clicks Approve
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="p-2 rounded bg-[#071B3B] text-white flex-1 text-center">
                    AI Worker Resumes
                  </div>
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

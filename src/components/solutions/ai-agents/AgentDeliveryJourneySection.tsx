"use client";

import React, { useState } from "react";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";
import {
  GitMerge,
  Sliders,
  Cpu,
  Activity,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

export function AgentDeliveryJourneySection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStage = AI_AGENTS_DATA.deliveryStages[activeStepIndex];
  const icons = [GitMerge, Sliders, Cpu, Activity];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Engineering Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          How We Build Your AI Worker
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          We turn manual, repetitive employee checklists into deterministic software agents that operate 24/7 with human-in-the-loop safety.
        </p>
      </div>

      {/* Interactive Horizontal Delivery Progress Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {AI_AGENTS_DATA.deliveryStages.map((stage, idx) => {
          const isActive = activeStepIndex === idx;
          const isPassed = activeStepIndex > idx;
          const Icon = icons[idx];

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 relative ${
                isActive
                  ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/40 scale-[1.02]"
                  : isPassed
                  ? "bg-slate-50 border-slate-200 text-[#091326] hover:bg-white"
                  : "bg-white border-[#DCE5EF] text-slate-500 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isActive
                      ? "bg-[#2563EB] text-white"
                      : isPassed
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {stage.step}
                </span>

                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-[#00D477]" : isPassed ? "text-emerald-600" : "text-slate-400"
                  }`}
                />
              </div>

              <div>
                <h4
                  className={`text-sm font-bold ${
                    isActive ? "text-white" : "text-[#091326]"
                  }`}
                >
                  {stage.name}
                </h4>
                <span
                  className={`text-[11px] font-mono ${
                    isActive ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {stage.duration}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Visual Board */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-xs flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left: Stage Information & Activities (6 cols) */}
        <div className="lg:w-1/2 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-[#2563EB]">
                STAGE {activeStage.step} {"//"} {activeStage.tagline}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                {activeStage.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#091326]">
              {activeStage.copy}
            </h3>
          </div>

          {/* Activities Checklist */}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">
              Key Engineering Activities:
            </span>

            <div className="flex flex-col gap-2">
              {activeStage.activities.map((act, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                  <span className="leading-snug">{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable Badge */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
            <span className="text-slate-500 font-mono">Guaranteed Deliverable:</span>
            <strong className="text-[#091326] font-mono">{activeStage.deliverable}</strong>
          </div>
        </div>

        {/* Right: Stage Visual Animation Diagram (6 cols) */}
        <div className="lg:w-1/2 rounded-xl bg-[#071B3B] text-white p-6 flex flex-col justify-center gap-4 relative overflow-hidden min-h-[300px]">
          {/* Subtle Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {activeStage.id === "map" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>01 / MANUAL PROCESS AUDIT</span>
                <span className="text-amber-400 font-bold">Analyzing Bottlenecks...</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Employee Manual Step:</span>
                  <span className="text-rose-400 font-semibold line-through">Copy email → Excel → SAP</span>
                </div>
                <div className="p-2.5 rounded bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-between text-[11px]">
                  <span className="text-white font-semibold">Automated Route:</span>
                  <span className="text-[#00D477] font-bold">Email Listener → Schema Parser → API</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] flex items-center justify-between">
                <span>Repetitive Task Volume:</span>
                <span className="text-[#00D477] font-bold">120+ requests / day identified</span>
              </div>
            </div>
          )}

          {activeStage.id === "design" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>02 / DECISION BOUNDARIES &amp; RULES</span>
                <span className="text-[#00D477] font-bold">Policy Config Active</span>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Rule A: Order &le; $5,000 &amp; Stock OK</span>
                  <span className="text-[#00D477] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Execute
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10">
                  <span className="text-slate-300">Rule B: Order &gt; $5,000 OR Missing Tax ID</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" /> Human Escalation
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-400 text-[11px] text-center">
                ✓ Human manager receives Slack / Teams interactive button
              </div>
            </div>
          )}

          {activeStage.id === "build" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>03 / TOOL CONNECTORS &amp; REASONING</span>
                <span className="text-[#2563EB] font-bold">Sprint Builds</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">Inbound Parser</span>
                  <strong className="text-white text-xs">Zod Verified</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">ERP Adapter</span>
                  <strong className="text-[#00D477] text-xs">SAP / NetSuite</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">CRM Sync</span>
                  <strong className="text-[#00D477] text-xs">Salesforce API</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">Retry Queue</span>
                  <strong className="text-white text-xs">Idempotent Keys</strong>
                </div>
              </div>

              <div className="p-2 rounded bg-[#2563EB]/20 border border-[#2563EB]/50 text-[#3B82F6] font-bold text-center text-[11px]">
                500+ Test Transactions Run in Staging Sandbox
              </div>
            </div>
          )}

          {activeStage.id === "deploy" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>04 / LIVE OPERATIONS &amp; MONITORING</span>
                <span className="text-[#00D477] flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                  Worker Running 24/7
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] block">Processed</span>
                  <strong className="text-white text-xs">4,812</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] block">Auto-Resolved</span>
                  <strong className="text-[#00D477] text-xs">96.8%</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] block">Human Review</span>
                  <strong className="text-amber-400 text-xs">3.2%</strong>
                </div>
              </div>

              <div className="p-2 rounded bg-white/10 border border-white/20 text-center text-slate-200 text-[11px]">
                Committed SLA + 24/7 Monitoring + Full Code Handover
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

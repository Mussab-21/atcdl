"use client";

import React, { useState } from "react";
import {
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Check,
  X,
} from "lucide-react";

export function HumanInTheLoopTrustSection() {
  const [managerAction, setManagerAction] = useState<"pending" | "approved" | "rejected">("pending");

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Governance &amp; Trust</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          AI Does The Work. Your Team Stays In Control.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Your management team determines exactly which routine transactions execute autonomously and which high-value edge cases pause for human approval.
        </p>
      </div>

      {/* Trust Container (Split Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Philosophy & Control Capabilities (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-2xs flex flex-col justify-between gap-6 text-left">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-bold text-[#091326]">
                Never Blindly Autonomous
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous agents must have guardrails. We implement deterministic state machines that pause execution when financial, legal, or policy thresholds are reached.
              </p>
            </div>

            {/* Core Governance Pillars */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#091326] block">Configurable Thresholds</strong>
                  <span className="text-slate-500">Auto-approve orders under $5,000; route larger transactions to managers.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#091326] block">Slack &amp; Teams Action Cards</strong>
                  <span className="text-slate-500">Approve, reject, or adjust values directly from chat with 1 click.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#091326] block">Audit Trail &amp; Kill Switches</strong>
                  <span className="text-slate-500">Every decision is timestamped and logged; pause any agent instantly at any time.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
            <span>Escalation Protocol:</span>
            <strong className="text-[#2563EB]">Deterministic Pausing</strong>
          </div>
        </div>

        {/* Right: Visual Demonstration: Normal vs Exception Flow (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Card 1: Normal Routine Task (AI → Action) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCE5EF] shadow-2xs flex flex-col gap-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-[#00D477] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00D477]" />
                Scenario A: Routine Operational Task
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Auto-Executed
              </span>
            </div>

            <p className="text-xs text-slate-600">
              Inbound recurring invoice ($420.00) matches an active PO and verified vendor account.
            </p>

            {/* Flow Visual */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] flex flex-wrap items-center justify-between gap-2">
              <div className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
                Email Received
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <div className="px-2.5 py-1 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] font-bold">
                AI Worker Validates
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <div className="px-2.5 py-1 rounded bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#00D477]" />
                Direct ERP Update
              </div>
            </div>
          </div>

          {/* Card 2: High-Value / Exception Task (AI → Human Review → Action) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#071B3B] text-white border border-slate-800 shadow-md flex flex-col gap-4 text-left relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Scenario B: High-Value Exception ($18,400 PO)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Human Review Triggered
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Transaction exceeds the $5,000 threshold or vendor address differs from master record. AI pauses execution and notifies team.
            </p>

            {/* Interactive Manager Card */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col gap-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-slate-300 pb-2 border-b border-white/10">
                <span>[SLACK BOT] Approval Required</span>
                <span className="text-amber-400 font-bold">Waiting for Manager</span>
              </div>

              <div className="text-[11px] text-slate-200">
                PO #8492 — $18,400.00 — Apex Logistics Inc.
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Reason: Purchase amount &gt; $5,000 auto-approval threshold.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                {managerAction === "pending" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setManagerAction("approved")}
                      className="px-3 py-1.5 rounded-lg bg-[#00D477] hover:bg-[#00B968] text-[#071B3B] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Approve &amp; Sync
                    </button>
                    <button
                      type="button"
                      onClick={() => setManagerAction("rejected")}
                      className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      Reject
                    </button>
                  </>
                ) : managerAction === "approved" ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#00D477] font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Manager Approved: ERP Sync Completed (#8492)
                    </span>
                    <button
                      type="button"
                      onClick={() => setManagerAction("pending")}
                      className="text-slate-400 hover:text-white text-[10px] underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-rose-400 font-bold flex items-center gap-1.5">
                      <X className="w-4 h-4" />
                      Manager Rejected: Transaction Cancelled &amp; Archived
                    </span>
                    <button
                      type="button"
                      onClick={() => setManagerAction("pending")}
                      className="text-slate-400 hover:text-white text-[10px] underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

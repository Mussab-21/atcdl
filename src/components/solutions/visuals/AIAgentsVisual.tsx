"use client";

import React from "react";
import { Mail, Bot, ArrowRight, UserCheck, CheckCircle2, ShieldAlert } from "lucide-react";

interface Props {
  interactive?: boolean;
  className?: string;
}

export function AIAgentsVisual({ className = "" }: Props) {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-slate-900 border border-slate-800 p-5 sm:p-6 text-white overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Animated AI Agents and Autonomous Automation architecture diagram"
    >
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--header-bg)] via-slate-950 to-slate-950 opacity-90 pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[var(--accent-purple)]/10 blur-3xl pointer-events-none" />

      {/* Header telemetry strip */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          02 / AUTONOMOUS WORKFLOW ENGINE
        </span>
        <span className="text-[10px] text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/60 font-semibold">
          Human-in-the-Loop Active
        </span>
      </div>

      {/* Workflow Diagram Stages */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-auto">
        {/* Step 1: Ingest */}
        <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Step 01: Inbound</span>
            <Mail className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-xs font-bold text-slate-100">Customer RFP / PO</div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight">
            Webhook &bull; Email &bull; WhatsApp
          </div>
          <div className="mt-1 text-[9px] text-emerald-400 font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900 w-max">
            Parsed: 12 Line Items
          </div>
        </div>

        {/* Step 2: Agent Reasoning & Decision */}
        <div className="p-3 rounded-lg bg-slate-800/90 border border-[var(--accent-green)] flex flex-col gap-2 relative shadow-[0_0_15px_rgba(0,212,119,0.1)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">Step 02: AI Agent</span>
            <Bot className="w-4 h-4 text-[var(--accent-green)] animate-pulse" />
          </div>
          <div className="text-xs font-bold text-slate-100">Reason &amp; Validate</div>
          <div className="text-[10px] text-slate-300 leading-tight">
            Cross-checks inventory, price list &amp; customer credit limit.
          </div>
          <div className="mt-1 flex items-center gap-1 text-[9px] text-slate-300 font-mono">
            <CheckCircle2 className="w-3 h-3 text-[var(--accent-green)]" />
            <span>Calculations Validated</span>
          </div>
        </div>

        {/* Step 3: Target Systems & Action */}
        <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Step 03: Execution</span>
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-xs font-bold text-slate-100">Sync &amp; Dispatch</div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight">
            ERP &bull; CRM &bull; Accounting
          </div>
          <div className="mt-1 text-[9px] text-blue-400 font-mono bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-900 w-max">
            PO #8941 Created
          </div>
        </div>
      </div>

      {/* Dual Path / Exception Escalation Preview */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-800 text-xs">
        <div className="flex items-center gap-2 text-slate-300 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
          <span>Standard Orders (&lt; PKR 500k):</span>
          <strong className="text-emerald-400 font-mono">100% Autonomous</strong>
        </div>

        <div className="flex items-center gap-2 bg-slate-800/80 px-2.5 py-1 rounded-md border border-amber-800/40 text-[11px] text-amber-300">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>High Value / Exceptions &rarr; Human Sign-off</span>
        </div>
      </div>
    </div>
  );
}

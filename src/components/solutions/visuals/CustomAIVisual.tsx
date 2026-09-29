"use client";

import React from "react";
import { FileText, Database, ShieldCheck, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

interface Props {
  interactive?: boolean;
  className?: string;
}

export function CustomAIVisual({ className = "" }: Props) {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-slate-900 border border-slate-800 p-5 sm:p-6 text-white overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Animated custom AI knowledge architecture diagram"
    >
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--header-bg)] via-slate-950 to-slate-950 opacity-90 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--accent-green)]/10 blur-3xl pointer-events-none" />

      {/* Layer 1: Ingest Sources */}
      <div className="relative z-10 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
            01 / PROPRIETARY KNOWLEDGE SOURCES
          </span>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
            Zero Data Leakage
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-1">
          {[
            { label: "PDFs & SOPs", icon: FileText, sub: "1,420 files" },
            { label: "Internal Docs", icon: Database, sub: "Confluence" },
            { label: "Policies", icon: ShieldCheck, sub: "HR & Legal" },
            { label: "ERP / SQL", icon: Database, sub: "Postgres" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-2 sm:p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex flex-col items-center text-center gap-1 hover:border-[var(--accent-green)] transition-all group"
              >
                <Icon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-semibold text-slate-200 leading-tight">
                  {item.label}
                </span>
                <span className="text-[9px] font-mono text-slate-400">{item.sub}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Connectors & AI Core */}
      <div className="relative z-10 py-3 flex flex-col items-center">
        {/* Animated flow connectors */}
        <div className="w-full flex items-center justify-center gap-4 py-1 text-slate-500">
          <div className="h-4 w-px bg-gradient-to-b from-slate-600 to-emerald-500" />
          <div className="h-4 w-px bg-gradient-to-b from-slate-600 to-emerald-500" />
          <div className="h-4 w-px bg-gradient-to-b from-slate-600 to-emerald-500" />
        </div>

        {/* ATCDL AI Core Badge */}
        <div className="px-4 py-2 rounded-xl bg-slate-800/90 border border-[var(--accent-green)] shadow-[0_0_20px_rgba(0,212,119,0.15)] flex items-center gap-2.5">
          <div className="p-1 rounded-md bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold font-mono tracking-wider text-slate-100">
              ATCDL PRIVATE AI CORE
            </span>
            <span className="text-[10px] text-slate-400 font-sans">
              Semantic Hybrid Search • Grounded Inference • Role RBAC
            </span>
          </div>
        </div>

        {/* Downward connector */}
        <div className="h-4 w-px bg-gradient-to-b from-emerald-500 to-slate-600 mt-1" />
      </div>

      {/* Layer 3: Natural Language QA with Verified Source Citations */}
      <div className="relative z-10 flex flex-col gap-2 bg-slate-950/70 border border-slate-800 rounded-xl p-3 sm:p-3.5">
        {/* User Prompt Simulation */}
        <div className="flex items-start gap-2 text-xs">
          <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 text-[10px] font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-300 font-mono text-[11px]">
            &quot;What is our standard vendor milestone payment SLA?&quot;
          </div>
        </div>

        {/* Verified AI Answer with Footnotes */}
        <div className="flex items-start gap-2 text-xs">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[var(--accent-green)] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 bg-slate-800/80 border border-slate-700/80 rounded-lg p-2.5 text-slate-200 text-xs flex flex-col gap-1.5">
            <p className="leading-relaxed text-[11px] sm:text-xs">
              Milestone invoices up to PKR 500,000 are disbursed within 5 business days following technical QA sign-off.
            </p>
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-700 text-[10px] font-mono text-emerald-400">
              <span className="bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                [Procurement_Policy_v4.pdf • p. 18]
              </span>
              <span className="text-slate-400">99.8% Match</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

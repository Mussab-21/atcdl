"use client";

import React, { useState } from "react";
import { Layers, AlertTriangle, CheckCircle2, ArrowRight, RefreshCw, LayoutDashboard, ShieldCheck } from "lucide-react";

interface Props {
  interactive?: boolean;
  className?: string;
}

export function EnterpriseSystemsVisual({ className = "" }: Props) {
  const [showModern, setShowModern] = useState(true);

  return (
    <div
      className={`relative w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-slate-900 border border-slate-800 p-5 sm:p-6 text-white overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Animated Enterprise Software and Systems Modernization visual diagram"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--header-bg)] via-slate-950 to-slate-950 opacity-90 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[var(--accent-green)]/10 blur-3xl pointer-events-none" />

      {/* Header with before/after toggle */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          03 / SYSTEMS MODERNIZATION
        </span>

        {/* Toggle Mode */}
        <button
          type="button"
          onClick={() => setShowModern((prev) => !prev)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 hover:border-slate-500 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3 text-[var(--accent-green)]" />
          <span>{showModern ? "View Legacy State" : "View ATCDL Modern State"}</span>
        </button>
      </div>

      {/* Main View Area */}
      <div className="relative z-10 my-auto py-2">
        {!showModern ? (
          /* Fragmented Legacy State */
          <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-slate-950/80 border border-red-900/40 text-slate-300 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-red-400 font-mono font-bold">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                DISCONNECTED LEGACY PROCESSES
              </span>
              <span>4 Choke Points</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                <div className="font-semibold text-slate-300">Desktop ERP</div>
                <div className="text-[10px] text-red-400 font-mono">Monolithic DB</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                <div className="font-semibold text-slate-300">v4_FINAL.xlsx</div>
                <div className="text-[10px] text-red-400 font-mono">Formula Corrupt</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                <div className="font-semibold text-slate-300">Email Threads</div>
                <div className="text-[10px] text-red-400 font-mono">Lost Approvals</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                <div className="font-semibold text-slate-300">Manual Entry</div>
                <div className="text-[10px] text-red-400 font-mono">14hr Delays</div>
              </div>
            </div>
          </div>
        ) : (
          /* Unified ATCDL Modern System Architecture */
          <div className="flex flex-col gap-3 animate-fadeIn">
            {/* Core Box */}
            <div className="p-3 rounded-xl bg-slate-800/90 border border-[var(--accent-green)] shadow-[0_0_20px_rgba(0,212,119,0.15)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono tracking-wider text-slate-100">
                    ATCDL UNIFIED DIGITAL CORE
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans">
                    Transactional PostgreSQL &bull; Hexagonal Architecture &bull; Single Sign-On
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Zero Downtime
              </span>
            </div>

            {/* Connected Pillars */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Live Data</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Inventory &bull; Orders &bull; Audits
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SLA Workflows</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Multi-Tier Sign-offs
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Control Tower</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Executive Dashboard
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer outcome stat */}
      <div className="relative z-10 flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-slate-400 font-mono">
        <span>Business Impact:</span>
        <span className="text-emerald-400 font-bold">100% Audit-Ready &bull; 65% Faster Approvals</span>
      </div>
    </div>
  );
}

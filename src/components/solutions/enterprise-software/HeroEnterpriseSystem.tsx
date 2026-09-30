"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  FileSpreadsheet,
  Mail,
  Database,
  Layers,
  ArrowRight,
  AlertTriangle,
  Play,
  Pause,
  Server,
  Users,
  BarChart3,
  GitMerge,
  ShieldCheck,
} from "lucide-react";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroEnterpriseSystem() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [activeMode, setActiveMode] = useState<"before" | "after">("after");
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle between Before and After every 8 seconds if playing
  React.useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveMode((prev) => (prev === "before" ? "after" : "before"));
    }, 7500);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion]);

  return (
    <div className="relative w-full rounded-2xl bg-[#071B3B] text-white p-5 sm:p-7 border border-slate-800 shadow-xl overflow-hidden flex flex-col gap-5 select-none">
      {/* Background Subtle Coordinate Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Header Bar: Mode Switcher & Status */}
      <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveMode("before")}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
              activeMode === "before"
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            [ BEFORE: Disconnected ]
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("after")}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
              activeMode === "after"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            [ AFTER: ATCDL Platform ]
          </button>
        </div>

        {/* Small accessibility pause/play control */}
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
          aria-label={isPlaying ? "Pause visual animation" : "Resume visual animation"}
          title={isPlaying ? "Pause visual animation" : "Resume visual animation"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Interactive Transformation Stage */}
      <div className="relative z-10 min-h-[300px] sm:min-h-[320px] flex flex-col justify-center">
        {activeMode === "before" ? (
          /* BEFORE STATE: Disconnected Silos, Manual Work, Warning Indicators */
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-rose-400 font-bold">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Fragmented Data &amp; Approval Delays
              </span>
              <span>Status: High Friction</span>
            </div>

            {/* Disconnected Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Node 1: Spreadsheets */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-rose-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-rose-300">
                  <span className="flex items-center gap-1.5 font-bold">
                    <FileSpreadsheet className="w-4 h-4 text-rose-400" />
                    Excel Sheets
                  </span>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                    Siloed
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Manual inventory entry; formulas break when staff change rows.
                </p>
                <div className="text-[10px] font-mono text-rose-400 flex items-center gap-1 pt-1 border-t border-white/5">
                  <span>⚠ Version conflict risk</span>
                </div>
              </div>

              {/* Node 2: Email Sign-Offs */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-amber-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-amber-300">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Mail className="w-4 h-4 text-amber-400" />
                    Email Threads
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                    Delayed
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  PO approvals buried in inboxes; orders stalled for 3–5 days.
                </p>
                <div className="text-[10px] font-mono text-amber-400 flex items-center gap-1 pt-1 border-t border-white/5">
                  <span>⚠ No SLA accountability</span>
                </div>
              </div>

              {/* Node 3: Legacy Desktop Software */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Server className="w-4 h-4 text-slate-400" />
                    Office PC Server
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                    Inflexible
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Trapped on an old PC; field teams and executives cannot access records remotely.
                </p>
                <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 pt-1 border-t border-white/5">
                  <span>⚠ Single point of failure</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-xs flex items-center justify-between">
              <span>Result: Staff spends 15+ hours/week copying data between tools</span>
              <span className="font-bold underline cursor-pointer" onClick={() => setActiveMode("after")}>
                View Solution →
              </span>
            </div>
          </div>
        ) : (
          /* AFTER STATE: Unified ATCDL Core Platform */
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00D477] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                Single Operational Source of Truth
              </span>
              <span>Status: Active &amp; Synced</span>
            </div>

            {/* Connected Platform Visualization */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-[#2563EB]/40 flex flex-col gap-3">
              {/* Central Core Strip */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block">ATCDL Modern Business Platform</strong>
                    <span className="text-[10px] font-mono text-[#00D477]">Single Database &bull; Real-Time Sync &bull; RBAC</span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-white px-2 py-0.5 rounded bg-[#2563EB]">
                  Operational Core
                </span>
              </div>

              {/* 4 Connected Operational Modules */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-center flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-1 text-[#00D477]">
                    <Database className="w-3 h-3" />
                    <span>PostgreSQL</span>
                  </div>
                  <span className="text-slate-300 text-[10px]">Zero formula errors</span>
                </div>

                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-center flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-1 text-[#00D477]">
                    <GitMerge className="w-3 h-3" />
                    <span>Workflows</span>
                  </div>
                  <span className="text-slate-300 text-[10px]">Automated sign-offs</span>
                </div>

                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-center flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-1 text-[#00D477]">
                    <Users className="w-3 h-3" />
                    <span>Role Access</span>
                  </div>
                  <span className="text-slate-300 text-[10px]">Staff &amp; Executive UI</span>
                </div>

                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-center flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-1 text-[#00D477]">
                    <BarChart3 className="w-3 h-3" />
                    <span>Live KPIs</span>
                  </div>
                  <span className="text-slate-300 text-[10px]">Real-time margins</span>
                </div>
              </div>
            </div>

            {/* Bottom Impact Banner */}
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 font-mono text-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00D477]" />
                Result: All departments operate on the same data with zero double-entry.
              </span>
              <span className="text-[11px] text-emerald-400 font-bold hidden sm:inline">
                100% Client Ownership
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          Zero-Downtime Data Migration
        </span>
        <button
          type="button"
          onClick={() => setActiveMode((m) => (m === "before" ? "after" : "before"))}
          className="text-[#00D477] hover:underline flex items-center gap-1 cursor-pointer font-bold"
        >
          <span>Toggle {activeMode === "before" ? "After" : "Before"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

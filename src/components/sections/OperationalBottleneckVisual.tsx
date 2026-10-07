"use client";

import React, { useState } from "react";
import {
  FileText,
  Mail,
  Database,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Cpu,
  Activity,
  ArrowRight,
  Boxes,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";

type ActiveMode = "connect" | "automate" | "visible" | null;

export function OperationalBottleneckVisual() {
  const [activeMode, setActiveMode] = useState<ActiveMode>(null);

  return (
    <div className="flex flex-col gap-8 sm:gap-10 w-full">
      {/* 1. Header Copy */}
      <div className="max-w-3xl flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--error)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--error)]" />
          <span>Where Businesses Lose Time</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--header-bg)] leading-[1.1]">
          Your business doesn&apos;t need more tools. It needs{" "}
          <span className="text-[var(--accent-green)] relative inline-block">
            one connected system.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-1 leading-relaxed max-w-2xl">
          Most businesses operate across disconnected software, scattered data, and repetitive
          manual workflows. ATC Digital Labs connects those pieces into intelligent systems that move work
          forward automatically.
        </p>
      </div>

      {/* 2. Three-Panel Mini Visual Story / System Diagram */}
      <div className="relative rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] p-5 sm:p-8 overflow-hidden shadow-xs">
        {/* Subtle Ambient Background Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl"
        />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-stretch">
            {/* PANEL 1: LEFT — BUSINESS CHAOS (Without a System) */}
            <div
              className={`lg:col-span-4 rounded-xl border p-5 flex flex-col justify-between gap-5 transition-all duration-300 ${
                activeMode === "connect"
                  ? "bg-white border-[var(--error)]/40 shadow-sm"
                  : "bg-white/80 border-[var(--border)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--error)]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--header-bg)]">
                      WITHOUT A SYSTEM
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-50 text-[var(--error)] border border-red-200">
                    High Friction
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mb-4">
                  Isolated documents, silos, and repetitive manual transcriptions:
                </p>

                {/* Disconnected Node Cluster */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-dashed border-[var(--border)] flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Trapped PDFs</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-dashed border-[var(--border)] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Inbox Requests</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-dashed border-[var(--border)] flex items-center gap-2">
                    <Boxes className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Spreadsheets</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-dashed border-[var(--border)] flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Legacy DBs</span>
                  </div>
                </div>

                {/* Broken Data Path Callout */}
                <div className="mt-4 p-3 rounded-lg bg-red-50/60 border border-red-100 flex items-start gap-2.5 text-[11px] text-[var(--text-secondary)]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[var(--error)] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-[var(--header-bg)]">
                      Manual Copy-Paste Handoffs
                    </span>
                    <span>Manual reconciliation takes time away from higher-value work.</span>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-2 border-t border-[var(--border)]/70 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span>STATUS: FRAGMENTED</span>
                <span className="text-[var(--error)] font-semibold">Zero Unified View</span>
              </div>
            </div>

            {/* PANEL 2: CENTER — ATCDL CONNECTED CORE */}
            <div
              className={`lg:col-span-4 rounded-xl border p-5 flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-300 ${
                activeMode
                  ? "bg-white border-[var(--accent-green)]/60 shadow-md ring-1 ring-[var(--accent-green)]/30"
                  : "bg-white border-[var(--border)] shadow-xs"
              }`}
            >
              {/* Header Label */}
              <div className="w-full flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-2">
                <div className="flex items-center gap-1.5 mx-auto">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--header-bg)]">
                    CONNECTED SYSTEM
                  </span>
                </div>
              </div>

              {/* Orbital Interactive Engineering Centerpiece */}
              <div className="relative w-48 h-48 my-auto flex items-center justify-center">
                {/* Orbital Ring (CSS Slow Spin) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-1 rounded-full border border-dashed border-[var(--border-hover)] motion-safe:animate-[spin_24s_linear_infinite]"

                />

                {/* Satellite Node 1: AI (Top) */}
                <div
                  className={`absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 border transition-all ${
                    activeMode === "automate"
                      ? "bg-[var(--accent-green)] text-[var(--header-bg)] border-[var(--accent-green)] scale-110 shadow-xs"
                      : "bg-[var(--bg-secondary)] text-slate-700 border-slate-200"
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5 text-[var(--accent-green)]" />
                  <span>AI</span>
                </div>

                {/* Satellite Node 2: DATA (Right) */}
                <div
                  className={`absolute top-1/2 -right-3 -translate-y-1/2 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 border transition-all ${
                    activeMode === "connect"
                      ? "bg-[var(--header-bg)] text-white border-[var(--header-bg)] scale-110 shadow-xs"
                      : "bg-[var(--bg-secondary)] text-slate-700 border-slate-200"
                  }`}
                >
                  <Database className="w-2.5 h-2.5 text-[var(--accent-green)]" />
                  <span>DATA</span>
                </div>

                {/* Satellite Node 3: AGENTS (Bottom) */}
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 border transition-all ${
                    activeMode === "automate"
                      ? "bg-[var(--accent-green)] text-[var(--header-bg)] border-[var(--accent-green)] scale-110 shadow-xs"
                      : "bg-[var(--bg-secondary)] text-slate-700 border-slate-200"
                  }`}
                >
                  <Cpu className="w-2.5 h-2.5 text-[var(--accent-green)]" />
                  <span>AGENTS</span>
                </div>

                {/* Satellite Node 4: APIs (Left) */}
                <div
                  className={`absolute top-1/2 -left-3 -translate-y-1/2 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 border transition-all ${
                    activeMode === "connect"
                      ? "bg-[var(--header-bg)] text-white border-[var(--header-bg)] scale-110 shadow-xs"
                      : "bg-[var(--bg-secondary)] text-slate-700 border-slate-200"
                  }`}
                >
                  <Workflow className="w-2.5 h-2.5 text-[var(--accent-green)]" />
                  <span>APIs</span>
                </div>

                {/* Core Engine Hub */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[var(--header-bg)] text-white border-2 border-[var(--accent-green)] shadow-lg flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-base font-extrabold tracking-tight text-white">ATC</span>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--accent-green)] mt-0.5">
                    DIGITAL
                  </span>
                  <div className="mt-1 flex items-center gap-1 text-[8px] font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                    <span>ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Core Description */}
              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  Intelligent automation &bull; Connected systems &bull; Live monitoring
                </span>
              </div>
            </div>

            {/* PANEL 3: RIGHT — AUTOMATED OPERATIONS (With ATCDL) */}
            <div
              className={`lg:col-span-4 rounded-xl border p-5 flex flex-col justify-between gap-5 transition-all duration-300 ${
                activeMode === "visible" || activeMode === "automate"
                  ? "bg-white border-[var(--accent-green)]/50 shadow-sm"
                  : "bg-white/80 border-[var(--border)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--header-bg)]">
                      WITH ATC DIGITAL LABS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-[var(--success)] border border-emerald-200 font-semibold">
                    Fully Connected
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mb-3">
                  Automated workflows, connected data, and real-time visibility:
                </p>

                {/* Structured Verification List */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-[var(--header-bg)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                    <span>Data connected across ERP &amp; docs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--header-bg)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                    <span>AI agents classify and extract tasks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--header-bg)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                    <span>Multi-step approval workflows automated</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--header-bg)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                    <span>Exceptions surfaced to human review queue</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--header-bg)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                    <span>Continuous telemetry &amp; faster decisions</span>
                  </div>
                </div>

                {/* System Flow Bar */}
                <div className="mt-4 p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                    <span className="font-semibold text-[var(--header-bg)]">OPERATIONS RUNNING</span>
                    <span className="text-[var(--success)] font-bold">CONNECTED</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--accent-green)] to-[var(--success)] rounded-full transition-all duration-500"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-2 border-t border-[var(--border)]/70 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span>SECURE &amp; MONITORED</span>
                <span className="text-[var(--success)] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Production
                </span>
              </div>
            </div>
          </div>
        </div>

      {/* 3. Bottom Benefits Row (Interactive Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Connect the Pieces */}
          <button
            type="button"
            onMouseEnter={() => setActiveMode("connect")}
            onMouseLeave={() => setActiveMode(null)}
            onFocus={() => setActiveMode("connect")}
            onBlur={() => setActiveMode(null)}
            onClick={() => setActiveMode(activeMode === "connect" ? null : "connect")}
            className={`p-5 rounded-xl border text-left transition-all duration-200 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-green)] ${
              activeMode === "connect"
                ? "bg-white border-[var(--accent-green)] shadow-md -translate-y-1"
                : "bg-white border-[var(--border)] hover:border-[var(--accent-green)]/60 hover:-translate-y-0.5"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:border-[var(--accent-green)]/40 transition-colors">
                  <Workflow className="w-4 h-4 text-[var(--accent-green)]" />
                </div>
                <h3 className="text-sm font-bold text-[var(--header-bg)] uppercase tracking-wide">
                  CONNECT THE PIECES
                </h3>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              APIs, data, software, and legacy systems unified into a single coherent layer.
            </p>
          </button>

          {/* Card 2: Automate the Work */}
          <button
            type="button"
            onMouseEnter={() => setActiveMode("automate")}
            onMouseLeave={() => setActiveMode(null)}
            onFocus={() => setActiveMode("automate")}
            onBlur={() => setActiveMode(null)}
            onClick={() => setActiveMode(activeMode === "automate" ? null : "automate")}
            className={`p-5 rounded-xl border text-left transition-all duration-200 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-green)] ${
              activeMode === "automate"
                ? "bg-white border-[var(--accent-green)] shadow-md -translate-y-1"
                : "bg-white border-[var(--border)] hover:border-[var(--accent-green)]/60 hover:-translate-y-0.5"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:border-[var(--accent-green)]/40 transition-colors">
                  <Zap className="w-4 h-4 text-[var(--accent-green)]" />
                </div>
                <h3 className="text-sm font-bold text-[var(--header-bg)] uppercase tracking-wide">
                  AUTOMATE THE WORK
                </h3>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Autonomous AI agents and deterministic workflow pipelines eliminate manual toil.
            </p>
          </button>

          {/* Card 3: Make Work Visible */}
          <button
            type="button"
            onMouseEnter={() => setActiveMode("visible")}
            onMouseLeave={() => setActiveMode(null)}
            onFocus={() => setActiveMode("visible")}
            onBlur={() => setActiveMode(null)}
            onClick={() => setActiveMode(activeMode === "visible" ? null : "visible")}
            className={`p-5 rounded-xl border text-left transition-all duration-200 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-green)] ${
              activeMode === "visible"
                ? "bg-white border-[var(--accent-green)] shadow-md -translate-y-1"
                : "bg-white border-[var(--border)] hover:border-[var(--accent-green)]/60 hover:-translate-y-0.5"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:border-[var(--accent-green)]/40 transition-colors">
                  <Activity className="w-4 h-4 text-[var(--accent-green)]" />
                </div>
                <h3 className="text-sm font-bold text-[var(--header-bg)] uppercase tracking-wide">
                  MAKE WORK VISIBLE
                </h3>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Live operational dashboards, cryptographic audit logs, and exception visibility.
            </p>
          </button>
        </div>
    </div>
  );
}

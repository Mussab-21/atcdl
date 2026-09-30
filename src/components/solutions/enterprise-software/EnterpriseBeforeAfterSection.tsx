"use client";

import React from "react";
import { ENTERPRISE_SOFTWARE_DATA } from "@/content/enterprise-software-data";
import {
  FileSpreadsheet,
  Mail,
  FileClock,
  Server,
  Database,
  GitMerge,
  BarChart3,
  Layers,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export function EnterpriseBeforeAfterSection() {
  const { before, after } = ENTERPRISE_SOFTWARE_DATA.beforeAfter;

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Operational Transformation</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          The Business Transformation
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          See the stark contrast between running operations on fragile manual tools versus a centralized ATCDL enterprise system.
        </p>
      </div>

      {/* Side-by-Side Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: BEFORE Panel (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-rose-200 shadow-2xs flex flex-col justify-between gap-6 text-left relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-rose-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Fragmented Operations
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                Before ATCDL
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#091326]">
              {before.title}
            </h3>

            {/* Visual Disconnected Icons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5 text-xs text-slate-700">
                <FileSpreadsheet className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-mono text-[11px]">Conflicted Excel</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-mono text-[11px]">Email Approvals</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5 text-xs text-slate-700">
                <FileClock className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-mono text-[11px]">Paper Forms</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5 text-xs text-slate-700">
                <Server className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-mono text-[11px]">Legacy PC Server</span>
              </div>
            </div>

            {/* Pain Points Checklist */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              {before.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-xs font-mono text-rose-700">
            High operational risk, manual delays, and zero single source of truth.
          </div>
        </div>

        {/* Right: AFTER Panel (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#071B3B] text-white border border-slate-800 shadow-xl flex flex-col justify-between gap-6 text-left relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#2563EB]/20 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-[#00D477] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                Unified Digital Platform
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                With ATCDL
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {after.title}
            </h3>

            {/* Visual Connected Icons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5 text-xs text-slate-200">
                <Database className="w-4 h-4 text-[#00D477] shrink-0" />
                <span className="font-mono text-[11px]">Central PostgreSQL</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5 text-xs text-slate-200">
                <GitMerge className="w-4 h-4 text-[#00D477] shrink-0" />
                <span className="font-mono text-[11px]">Automated Sign-Offs</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5 text-xs text-slate-200">
                <Layers className="w-4 h-4 text-[#00D477] shrink-0" />
                <span className="font-mono text-[11px]">Role-Based Views</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5 text-xs text-slate-200">
                <BarChart3 className="w-4 h-4 text-[#00D477] shrink-0" />
                <span className="font-mono text-[11px]">Live Executive KPIs</span>
              </div>
            </div>

            {/* Solution Points Checklist */}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              {after.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs font-mono text-emerald-300 relative z-10 flex items-center justify-between">
            <span>Result: Complete operational transparency &bull; 99.9% uptime</span>
            <span className="text-[#00D477] font-bold">100% Client Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

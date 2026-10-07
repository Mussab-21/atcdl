"use client";

import React, { useState, useEffect } from "react";
import { FileText, CheckCircle2, Lock, KeyRound } from "lucide-react";

export function BankingSystemVisual({ isPlaying = true }: { isPlaying?: boolean }) {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [auditHash, setAuditHash] = useState<string>("8f2b4c...91a0");

  const stages = [
    {
      step: "01",
      name: "DOC INGESTION",
      desc: "Commercial loan agreement & financial statements captured in encrypted memory",
      badge: "TLS 1.3 / AES-256",
      status: "PASS",
    },
    {
      step: "02",
      name: "LOCAL EXTRACTION",
      desc: "On-prem neural parser extracts entity tables, covenants & balance aggregates",
      badge: "Local vLLM",
      status: "VERIFIED",
    },
    {
      step: "03",
      name: "POLICY & RISK CHECK",
      desc: "Deterministic rule evaluation cross-referencing Central Bank credit circulars",
      badge: "Rule validation",
      status: "COMPLIANT",
    },
    {
      step: "04",
      name: "APPROVAL GATE",
      desc: "Tiered underwriter sign-off queue with exact line and paragraph source citations",
      badge: "Dual-Key Auth",
      status: "APPROVED",
    },
    {
      step: "05",
      name: "IMMUTABLE AUDIT",
      desc: "Cryptographic hash written to tamper-proof internal ledger; zero data retained in cloud",
      badge: "SHA-256 Log",
      status: "SEALED",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev + 1) % stages.length;
        setAuditHash(Math.random().toString(36).substring(2, 8) + "..." + Math.random().toString(36).substring(2, 6));
        return next;
      });
    }, 2900);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  return (
    <div className="w-full flex flex-col gap-5 select-none font-sans">
      {/* Air-Gapped Document Intelligence Canvas */}
      <div className="relative rounded-2xl bg-[#051329] border border-[#18345C] p-4 sm:p-5 overflow-hidden">
        {/* Subtle Security Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Security Header Strip */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono border-b border-[#18345C] pb-3 text-slate-300">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#00D477]" />
            <span className="font-bold text-white tracking-wider">AIR-GAPPED ENVIRONMENT // STRICT ZERO RETENTION</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
            <span className="font-mono text-[10px]">PII MASKED</span>
          </div>
        </div>

        {/* Simulated Document Moving Through Pipeline */}
        <div className="relative z-10 py-5">
          <div className="p-3.5 rounded-xl bg-[#091C36] border border-[#18345C] mb-4 flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white">DOC // FACILITY_AGREEMENT_2026.PDF</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                    AIR-GAPPED
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono mt-0.5">
                  <span>Size: 42 Pages</span>
                  <span>•</span>
                  <span>Extracted: 88 Data Nodes</span>
                  <span>•</span>
                  <span>PII Leakage: 0.00%</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end text-right font-mono text-[10px]">
              <span className="text-slate-400">ACTIVE HASH</span>
              <span className="text-cyan-400 font-bold">{auditHash}</span>
            </div>
          </div>

          {/* Stepper Pipeline Along Document Journey */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              const isPast = activeStage > idx;

              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-900/30 scale-[1.02]"
                      : isPast
                      ? "bg-[#091C36] border-[#00D477]/50 text-slate-200"
                      : "bg-[#071830] border-[#18345C] text-slate-400 hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold opacity-80">
                      STEP {st.step}
                    </span>
                    {isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D477]" />
                    ) : isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#00D477] animate-ping" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    )}
                  </div>
                  <strong className="text-[11px] font-bold line-clamp-1">
                    {st.name}
                  </strong>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.2 rounded w-fit ${
                      isActive ? "bg-white/20 text-white" : "bg-black/30 text-slate-400"
                    }`}
                  >
                    {st.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Verification Inspection Tray */}
        <div className="relative z-10 p-3.5 rounded-xl bg-[#071830] border border-[#18345C] text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-[#00D477] shrink-0" />
            <div>
              <span className="text-slate-300 font-bold">{stages[activeStage].name}:</span>{" "}
              <span className="text-slate-400 font-sans text-xs">{stages[activeStage].desc}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-slate-400">STATUS:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-[#00D477] border border-emerald-800 text-[10px] font-bold">
              {stages[activeStage].status}
            </span>
          </div>
        </div>
      </div>

      {/* Security Proof Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left font-mono">
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">ENCRYPTION</span>
          <span className="text-xs font-bold text-slate-200">At-Rest & Transit</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">ROLE MAPPING</span>
          <span className="text-xs font-bold text-[#00D477]">Active Directory RBAC</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">EVIDENCE AUDIT</span>
          <span className="text-xs font-bold text-blue-300">Exact Paragraph Links</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">INFRASTRUCTURE</span>
          <span className="text-xs font-bold text-cyan-300">Air-Gapped Private vLLM</span>
        </div>
      </div>
    </div>
  );
}

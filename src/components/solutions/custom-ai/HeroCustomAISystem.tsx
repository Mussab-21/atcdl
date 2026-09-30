"use client";

import React, { useRef, useState, useSyncExternalStore } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  FileText,
  Database,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  BookOpen,
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

export function HeroCustomAISystem({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<"docs" | "query" | "answer">("answer");

  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useGSAP(
    () => {
      if (isReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Continuous gentle pulse on core
        gsap.to(".custom-ai-core-glow", {
          scale: 1.15,
          opacity: 0.45,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Flow particles along the connecting beams
        gsap.to(".flow-particle-1, .flow-particle-2, .flow-particle-3, .flow-particle-4", {
          strokeDashoffset: -120,
          duration: 2.0,
          repeat: -1,
          ease: "none",
          stagger: 0.25,
        });

        // Floating effect on document cards
        gsap.to(".doc-card-0, .doc-card-2", {
          y: -3,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".doc-card-1, .doc-card-3", {
          y: 3,
          duration: 3.0,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl bg-white border border-[#DCE5EF] shadow-[0_20px_50px_-15px_rgba(7,27,59,0.12),0_10px_25px_-10px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col select-none ${className}`}
      aria-label="Interactive visual architecture of ATCDL Custom AI"
    >
      {/* Chrome Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#071B3B] border-b border-white/10 text-white">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D477]" />
          <span className="font-mono text-[11px] text-white/80 ml-2 tracking-wider">
            ATCDL // PRIVATE KNOWLEDGE TOPOLOGY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#00D477]/15 text-[#00D477] border border-[#00D477]/30 font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
            ZERO DATA LEAKAGE
          </span>
        </div>
      </div>

      {/* Interactive Micro-Stage Tabs */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs">
        <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase hidden sm:inline">
          Live Flow Simulation:
        </span>
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-between sm:justify-end">
          <button
            type="button"
            onClick={() => setActiveStep("docs")}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "docs"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            1. Ingest Docs
          </button>
          <button
            type="button"
            onClick={() => setActiveStep("query")}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "query"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            2. Ask Question
          </button>
          <button
            type="button"
            onClick={() => setActiveStep("answer")}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "answer"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            3. Verified Answer
          </button>
        </div>
      </div>

      {/* Main Visual Topology Area */}
      <div className="relative p-5 sm:p-6 bg-gradient-to-b from-[#F6F9FC] via-white to-slate-50 flex flex-col gap-4 overflow-hidden">
        {/* Subtle Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#071B3B 1px, transparent 1px), linear-gradient(90deg, #071B3B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* STEP 1: Company Knowledge Documents (Top) */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Company Knowledge Repositories</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
              Encrypted At Rest (AES-256)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "PDF Manuals", sub: "1,420 files", icon: FileText, ext: ".pdf", idx: 0 },
              { label: "Internal SOPs", sub: "Operations", icon: BookOpen, ext: ".docx", idx: 1 },
              { label: "Vendor Policies", sub: "Procurement", icon: ShieldCheck, ext: ".pdf", idx: 2 },
              { label: "Internal DB", sub: "PostgreSQL", icon: Database, ext: "SQL", idx: 3 },
            ].map((doc) => {
              const Icon = doc.icon;
              const isHighlighted = activeStep === "docs" || activeStep === "answer";
              return (
                <div
                  key={doc.idx}
                  className={`doc-card-${doc.idx} p-2.5 rounded-xl border transition-all duration-300 flex flex-col gap-1.5 bg-white ${
                    isHighlighted
                      ? "border-[#2563EB]/40 shadow-sm ring-1 ring-[#2563EB]/20"
                      : "border-slate-200/80 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                      {doc.ext}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#091326] leading-tight">
                      {doc.label}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{doc.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Connecting SVG Beams + Central ATCDL AI Core */}
        <div className="relative z-10 flex flex-col items-center py-1">
          {/* Animated Connecting SVG Lines */}
          <div className="w-full h-8 relative">
            <svg className="w-full h-full" viewBox="0 0 400 32" fill="none">
              <line x1="50" y1="0" x2="200" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="150" y1="0" x2="200" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="250" y1="0" x2="200" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="350" y1="0" x2="200" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Animated Glowing Particles */}
              <line x1="50" y1="0" x2="200" y2="32" stroke="#2563EB" strokeWidth="2" strokeDasharray="8 60" className="flow-particle-1" />
              <line x1="150" y1="0" x2="200" y2="32" stroke="#00D477" strokeWidth="2" strokeDasharray="8 60" className="flow-particle-2" />
              <line x1="250" y1="0" x2="200" y2="32" stroke="#00D477" strokeWidth="2" strokeDasharray="8 60" className="flow-particle-3" />
              <line x1="350" y1="0" x2="200" y2="32" stroke="#2563EB" strokeWidth="2" strokeDasharray="8 60" className="flow-particle-4" />
            </svg>
          </div>

          {/* Central AI Engine Node */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing ambient glow */}
            <div className="custom-ai-core-glow absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#00D477]/20 blur-md pointer-events-none" />

            <div className="relative px-5 py-2.5 rounded-xl bg-[#071B3B] text-white border border-[#2563EB]/50 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono tracking-wider text-white">
                    ATCDL PRIVATE AI CORE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                </div>
                <span className="text-[10px] text-slate-300 font-sans">
                  Hybrid BM25 + Vector Search • Grounded Inference Engine
                </span>
              </div>
            </div>
          </div>

          {/* Downward line to Query/Response */}
          <div className="w-px h-4 bg-gradient-to-b from-[#2563EB] to-[#CBD5E1]" />
        </div>

        {/* STEP 3: Natural Language Query & Grounded Answer with Source Citation */}
        <div className="relative z-10 flex flex-col gap-2.5">
          {/* Natural Language Prompt */}
          <div
            className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-2.5 bg-white ${
              activeStep === "query"
                ? "border-[#2563EB] ring-2 ring-[#2563EB]/20 shadow-sm"
                : "border-slate-200"
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Employee Question:
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#091326]">
                &quot;What is our vendor milestone payment SLA?&quot;
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium shrink-0">
              Query Latency: 42ms
            </span>
          </div>

          {/* AI Grounded Answer with Source Citation */}
          <div
            className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col gap-2 bg-[#071B3B] text-white shadow-md ${
              activeStep === "answer"
                ? "border-[#00D477] ring-2 ring-[#00D477]/30"
                : "border-slate-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00D477]/20 text-[#00D477] flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#00D477]">
                  Verified Answer Generated
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                100% Grounded • 0% Hallucination
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pl-7">
              &quot;Vendor milestone invoices are processed within <strong className="text-white underline decoration-[#00D477] underline-offset-2">5 business days</strong> after technical QA sign-off by the lead engineering architect.&quot;
            </p>

            {/* Source Verification Footnote */}
            <div className="mt-1 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono pl-7">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Cited Source:</span>
                <span className="bg-[#2563EB]/20 text-[#3B82F6] border border-[#2563EB]/40 px-2.5 py-0.5 rounded font-bold flex items-center gap-1.5">
                  <FileText className="w-3 h-3" />
                  <span>Procurement_Policy_2025.pdf • Page 18</span>
                </span>
              </div>
              <span className="text-[#00D477] font-semibold text-[10px]">
                Cosine Match: 99.8%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useState, useSyncExternalStore } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  Mail,
  FileText,
  Database,
  CheckCircle2,
  AlertTriangle,
  Bot,
  Zap,
  UserCheck,
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

export function HeroAIAgentsSystem({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<"inbound" | "reason" | "action" | "human">("action");
  const [isHumanBranch, setIsHumanBranch] = useState(false);

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
        // Continuous gentle pulse on AI worker node
        gsap.to(".agent-core-glow", {
          scale: 1.15,
          opacity: 0.45,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Flow particles along the connecting beams
        gsap.to(".agent-flow-1, .agent-flow-2, .agent-flow-3", {
          strokeDashoffset: -120,
          duration: 2.2,
          repeat: -1,
          ease: "none",
          stagger: 0.3,
        });

        // Floating effect on system nodes
        gsap.to(".agent-source-card-0, .agent-source-card-2", {
          y: -2.5,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".agent-source-card-1", {
          y: 2.5,
          duration: 3.2,
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
      aria-label="Interactive visual architecture of ATCDL AI Agents & Autonomous Workers"
    >
      {/* Chrome Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#071B3B] border-b border-white/10 text-white">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D477]" />
          <span className="font-mono text-[11px] text-white/80 ml-2 tracking-wider">
            ATCDL // AUTONOMOUS_WORKER_CORE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#00D477]/15 text-[#00D477] border border-[#00D477]/30 font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
            WORKER ACTIVE // 24/7
          </span>
        </div>
      </div>

      {/* Interactive Stage Tabs */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs">
        <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase hidden sm:inline">
          Live Workflow Simulation:
        </span>
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-between sm:justify-end">
          <button
            type="button"
            onClick={() => {
              setActiveStep("inbound");
              setIsHumanBranch(false);
            }}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "inbound"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            1. Inbound
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveStep("reason");
              setIsHumanBranch(false);
            }}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "reason"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            2. Reason
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveStep("action");
              setIsHumanBranch(false);
            }}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "action" && !isHumanBranch
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            3. Auto-Action
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveStep("human");
              setIsHumanBranch(true);
            }}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${
              activeStep === "human"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-white text-amber-700 hover:text-amber-900 border border-amber-200"
            }`}
          >
            4. Human Review
          </button>
        </div>
      </div>

      {/* Main Visual Topology Area */}
      <div className="relative p-5 sm:p-6 bg-gradient-to-b from-[#F6F9FC] via-white to-slate-50 flex flex-col gap-4 overflow-hidden">
        {/* Subtle Coordinate Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#071B3B 1px, transparent 1px), linear-gradient(90deg, #071B3B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* STEP 1: Inbound Trigger Sources */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Inbound Work Streams (Automated Listeners)</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
              Event Trigger: Instant
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Incoming Email", sub: "orders@company.com", icon: Mail, idx: 0 },
              { label: "Vendor PDF Invoice", sub: "PO-8492.pdf", icon: FileText, idx: 1 },
              { label: "System Webhook", sub: "Shopify / ERP", icon: Database, idx: 2 },
            ].map((src) => {
              const Icon = src.icon;
              const isHigh = activeStep === "inbound" || activeStep === "reason";
              return (
                <div
                  key={src.idx}
                  className={`agent-source-card-${src.idx} p-2.5 rounded-xl border transition-all duration-300 flex flex-col gap-1 bg-white ${
                    isHigh
                      ? "border-[#2563EB]/40 shadow-sm ring-1 ring-[#2563EB]/20"
                      : "border-slate-200/80 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">Queue Active</span>
                  </div>
                  <span className="text-xs font-bold text-[#091326] leading-tight">
                    {src.label}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono truncate">{src.sub}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: SVG Connecting Lines + Central AI Worker Engine */}
        <div className="relative z-10 flex flex-col items-center py-1">
          {/* Animated Connecting SVG Lines */}
          <div className="w-full h-8 relative">
            <svg className="w-full h-full" viewBox="0 0 360 32" fill="none">
              <line x1="60" y1="0" x2="180" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="180" y1="0" x2="180" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="300" y1="0" x2="180" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Glowing animated particles */}
              <line x1="60" y1="0" x2="180" y2="32" stroke="#2563EB" strokeWidth="2" strokeDasharray="8 50" className="agent-flow-1" />
              <line x1="180" y1="0" x2="180" y2="32" stroke="#00D477" strokeWidth="2" strokeDasharray="8 50" className="agent-flow-2" />
              <line x1="300" y1="0" x2="180" y2="32" stroke="#2563EB" strokeWidth="2" strokeDasharray="8 50" className="agent-flow-3" />
            </svg>
          </div>

          {/* Central AI Worker Node */}
          <div className="relative flex items-center justify-center">
            <div className="agent-core-glow absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#00D477]/20 blur-md pointer-events-none" />

            <div className="relative px-5 py-2.5 rounded-xl bg-[#071B3B] text-white border border-[#2563EB]/50 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-xs">
                <Bot className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono tracking-wider text-white">
                    AUTONOMOUS AI WORKER
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                </div>
                <span className="text-[10px] text-slate-300 font-sans">
                  Schema Extraction • Rule Validation • Decision Logic
                </span>
              </div>
            </div>
          </div>

          <div className="w-px h-4 bg-gradient-to-b from-[#2563EB] to-[#CBD5E1]" />
        </div>

        {/* STEP 3: Execution Card — Normal vs Human Exception Branching */}
        <div className="relative z-10 flex flex-col gap-2.5">
          {!isHumanBranch ? (
            /* Normal Automated Execution Path */
            <div
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col gap-2.5 bg-[#071B3B] text-white shadow-md ${
                activeStep === "action"
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
                    Automatic Execution Complete
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                  Transaction Verified: 100%
                </span>
              </div>

              <div className="pl-7 flex flex-col gap-1.5 text-xs text-slate-200">
                <div className="flex items-center justify-between py-1 border-b border-white/10 font-mono text-[11px]">
                  <span className="text-slate-400">Target System:</span>
                  <span className="text-white font-bold">SAP Business One &bull; PO #8492</span>
                </div>
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] pt-1">
                  <span className="bg-white/5 p-1.5 rounded border border-white/10 text-center text-[#00D477]">
                    ✓ Stock Verified
                  </span>
                  <span className="bg-white/5 p-1.5 rounded border border-white/10 text-center text-[#00D477]">
                    ✓ Price Matched
                  </span>
                  <span className="bg-white/5 p-1.5 rounded border border-white/10 text-center text-[#00D477]">
                    ✓ ERP Synced
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Human-in-the-Loop Escalation Card */
            <div className="p-3.5 sm:p-4 rounded-xl border border-amber-500/50 bg-[#1A1811] text-amber-100 shadow-md flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Human Review Required // High-Value Threshold
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/80">
                  Amount: $24,500 (&gt; $10k policy)
                </span>
              </div>

              <p className="text-xs text-slate-300 pl-7 leading-relaxed font-sans">
                Order total exceeds the automatic $10,000 threshold. The AI worker paused execution and routed this one-click card to the operations manager on Slack.
              </p>

              <div className="mt-1 pt-2 border-t border-amber-500/20 pl-7 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Awaiting Manager Sign-Off</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-mono text-[10px] font-bold shadow-2xs">
                    ✓ Approve
                  </span>
                  <span className="px-2.5 py-1 rounded bg-rose-600/80 text-white font-mono text-[10px] font-bold shadow-2xs">
                    ✕ Reject
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

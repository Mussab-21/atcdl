"use client";

import React, { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  Cpu,
  Database,
  FileText,
  Boxes,
  Mail,
  AlertTriangle,
  Zap,
} from "lucide-react";

export function HeroSystemVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [act, setAct] = useState<1 | 2 | 3>(3); // Default to 3 for SSR/initial, animated on mount

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // --- NARRATIVE THREE-ACT TIMELINE ---
        const masterTl = gsap.timeline({
          defaults: { ease: "power2.out" },
        });

        // Set initial Act 1 state
        gsap.set(".hero-act1-elements", { opacity: 1, scale: 1 });
        gsap.set(".hero-act3-elements", { opacity: 0, scale: 0.95 });
        gsap.set(".core-engine-node", { scale: 0, opacity: 0 });
        gsap.set(".signal-beam", { strokeDashoffset: 180 });
        gsap.set(".act3-footer-health", { opacity: 0, y: 8 });

        // --- ACT 1: The Problem (0.0s - 1.8s) ---
        // Subtle alert jitter / friction on problem nodes
        masterTl.to(".act1-badge", {
          opacity: 1,
          duration: 0.4,
        });

        masterTl.to(
          ".act1-node",
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.2"
        );

        // Hold Act 1 for user to perceive the fragmented state
        masterTl.to({}, { duration: 1.2 });

        // --- ACT 2: The System Arriving (1.8s - 3.2s) ---
        // Header shifts from warning to active
        masterTl.add(() => setAct(2));

        // Fade problem nodes, scale down friction badges
        masterTl.to(".act1-badge", { opacity: 0, duration: 0.3 });
        masterTl.to(".hero-act1-elements", {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: "power2.in",
        });

        // Core Engine arrives with dramatic pop
        masterTl.to(
          ".core-engine-node",
          {
            scale: 1,
            opacity: 1,
            duration: 0.65,
            ease: "back.out(1.8)",
          },
          "-=0.2"
        );

        // Connecting lines shoot out to the 4 coordinates
        masterTl.to(
          ".signal-beam",
          {
            strokeDashoffset: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4"
        );

        // Structured Act 3 nodes emerge and lock in place
        masterTl.to(
          ".hero-act3-elements",
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        );

        // System Flow Health bar slides in
        masterTl.to(
          ".act3-footer-health",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.2"
        );

        // --- ACT 3: Settled Resolution & Steady Idle State (3.2s+) ---
        masterTl.add(() => {
          setAct(3);

          // Gentle core breathing pulse
          gsap.to(".core-glow-ring", {
            scale: 1.15,
            opacity: 0.35,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          // Subtle organic float on satellite nodes
          gsap.to(".node-input", {
            y: -3,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".node-intel", {
            y: 3,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".node-auto", {
            y: 3,
            duration: 3.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".node-ctrl", {
            y: -3,
            duration: 3.0,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          // Clean, individual signal particles on dedicated paths (NO compound path jumping)
          gsap.to(".signal-particle-1, .signal-particle-2, .signal-particle-3, .signal-particle-4", {
            strokeDashoffset: -180,
            duration: 2.4,
            repeat: -1,
            ease: "none",
            stagger: 0.35,
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Direct, static resolution end-state
        setAct(3);
        gsap.set(".hero-act1-elements", { display: "none" });
        gsap.set(".hero-act3-elements, .core-engine-node, .act3-footer-health", {
          opacity: 1,
          scale: 1,
          y: 0,
        });
        gsap.set(".signal-beam", { strokeDashoffset: 0 });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto lg:max-w-none text-left select-none"
    >
      {/* Background ambient glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[rgba(0,212,119,0.12)] via-[rgba(201,181,255,0.06)] to-transparent blur-2xl opacity-70 pointer-events-none" />

      {/* Main Living System Window */}
      <div className="hero-sys-window relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(21,42,50,0.18),0_10px_25px_-10px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Window Chrome Header with Narrative State Indicator */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#152A32] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D92D20]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#B54708]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D477]" />
            <span className="font-mono text-[11px] text-white/70 ml-2 tracking-wider">
              {act === 1
                ? "STATUS // FRAGMENTED WORKFLOWS"
                : "ATCDL_SYSTEM // AUTONOMOUS_TOPOLOGY"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {act === 1 ? (
              <span className="act1-badge flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                MANUAL FRICTION
              </span>
            ) : (
              <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--accent-green)]/15 text-[var(--accent-green)] border border-[var(--accent-green)]/35 font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                ENGINE ACTIVE
              </span>
            )}
          </div>
        </div>

        {/* Canvas Area: Desktop 2D Narrative Topology (520 x 410) */}
        <div className="hidden sm:block relative h-[410px] bg-gradient-to-b from-slate-50/70 to-white overflow-hidden p-6">
          {/* Subtle Coordinate Grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#152A32 1px, transparent 1px), linear-gradient(90deg, #152A32 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* SVG Connecting Signal Beams (Dedicated Individual Paths) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 520 410"
            fill="none"
          >
            {/* Background connection guides */}
            <path
              d="M 125 90 C 190 90, 205 175, 260 205"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 395 90 C 330 90, 315 175, 260 205"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 260 205 C 205 235, 190 320, 125 320"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 260 205 C 315 235, 330 320, 395 320"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Act 2/3 Animated Solid Signal Beams */}
            <path
              className="signal-beam"
              d="M 125 90 C 190 90, 205 175, 260 205"
              stroke="#00D477"
              strokeWidth="2"
              strokeDasharray="180"
              strokeDashoffset="180"
            />
            <path
              className="signal-beam"
              d="M 395 90 C 330 90, 315 175, 260 205"
              stroke="#C9B5FF"
              strokeWidth="2"
              strokeDasharray="180"
              strokeDashoffset="180"
            />
            <path
              className="signal-beam"
              d="M 260 205 C 205 235, 190 320, 125 320"
              stroke="#00D477"
              strokeWidth="2"
              strokeDasharray="180"
              strokeDashoffset="180"
            />
            <path
              className="signal-beam"
              d="M 260 205 C 315 235, 330 320, 395 320"
              stroke="#00D477"
              strokeWidth="2"
              strokeDasharray="180"
              strokeDashoffset="180"
            />

            {/* Dedicated Individual Signal Particles (Eliminating the rogue jumping particle bug) */}
            <path
              className="signal-particle-1"
              d="M 125 90 C 190 90, 205 175, 260 205"
              stroke="#00D477"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="8 170"
              strokeDashoffset="0"
            />
            <path
              className="signal-particle-2"
              d="M 395 90 C 330 90, 315 175, 260 205"
              stroke="#C9B5FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="8 170"
              strokeDashoffset="0"
            />
            <path
              className="signal-particle-3"
              d="M 260 205 C 205 235, 190 320, 125 320"
              stroke="#00D477"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="8 170"
              strokeDashoffset="0"
            />
            <path
              className="signal-particle-4"
              d="M 260 205 C 315 235, 330 320, 395 320"
              stroke="#00D477"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="8 170"
              strokeDashoffset="0"
            />
          </svg>

          {/* ========================================================= */}
          {/* ACT 1: SCATTERED & FRAGMENTED NODES (Before AI & System) */}
          {/* ========================================================= */}
          <div className="hero-act1-elements absolute inset-0 pointer-events-none">
            {/* Center Vacuum Callout */}
            <div className="absolute top-[205px] left-[260px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 p-3 rounded-xl bg-amber-50/80 border border-dashed border-amber-200 text-amber-800 text-center shadow-2xs">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
                Disconnected Silos
              </span>
              <span className="text-[9px] text-amber-700">Manual Copy-Paste Handoffs</span>
            </div>

            {/* Problem Node 1: Trapped PDFs (Top-Left) */}
            <div className="act1-node absolute top-[90px] left-[125px] -translate-x-1/2 -translate-y-1/2 w-44 p-3 rounded-xl bg-white/95 border border-dashed border-red-200/90 shadow-xs flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-red-50 text-red-500">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Trapped PDFs</div>
                <div className="text-[10px] font-mono text-red-500">Manual Re-keying</div>
              </div>
            </div>

            {/* Problem Node 2: Spreadsheets (Top-Right) */}
            <div className="act1-node absolute top-[90px] left-[395px] -translate-x-1/2 -translate-y-1/2 w-44 p-3 rounded-xl bg-white/95 border border-dashed border-amber-200/90 shadow-xs flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <Boxes className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Spreadsheets</div>
                <div className="text-[10px] font-mono text-amber-600">Varying Formats</div>
              </div>
            </div>

            {/* Problem Node 3: Manual Inboxes (Bottom-Left) */}
            <div className="act1-node absolute top-[320px] left-[125px] -translate-x-1/2 -translate-y-1/2 w-44 p-3 rounded-xl bg-white/95 border border-dashed border-red-200/90 shadow-xs flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-red-50 text-red-500">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Manual Inboxes</div>
                <div className="text-[10px] font-mono text-red-500">Slow Triage Backlog</div>
              </div>
            </div>

            {/* Problem Node 4: Legacy Databases (Bottom-Right) */}
            <div className="act1-node absolute top-[320px] left-[395px] -translate-x-1/2 -translate-y-1/2 w-44 p-3 rounded-xl bg-white/95 border border-dashed border-amber-200/90 shadow-xs flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Legacy DBs</div>
                <div className="text-[10px] font-mono text-amber-600">Zero Unified View</div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ACT 2 & 3: THE ATCDL CENTRAL ENGINE (Arriving & Active)   */}
          {/* ========================================================= */}
          <div className="core-engine-node absolute top-[205px] left-[260px] -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Breathing Outer Ring */}
            <div className="core-glow-ring absolute -inset-3 rounded-full bg-[var(--accent-green)] opacity-20 blur-md pointer-events-none" />

            <div className="relative w-36 h-36 rounded-full bg-[#152A32] border-2 border-[var(--accent-green)] text-white p-3 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,212,119,0.25)]">
              {/* Spinning subtle dashed orbit */}
              <div className="absolute inset-1 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]" />

              <div className="p-2 rounded-full bg-white/10 text-[var(--accent-green)] mb-1">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-xs font-bold tracking-tight">ATCDL ENGINE</div>
              <div className="text-[9px] font-mono text-[var(--accent-green)] uppercase tracking-wider">
                Orchestrator
              </div>
              <div className="text-[9px] font-mono text-white/60 mt-0.5 flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-[var(--accent-green)]" />
                <span>1.2ms latency</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ACT 3: RESOLVED 4-NODE ORGANIZED TOPOLOGY                  */}
          {/* ========================================================= */}
          <div className="hero-act3-elements absolute inset-0 pointer-events-none">
            {/* Node 1: Input (Top-Left) */}
            <div className="satellite-node node-input absolute top-[90px] left-[125px] -translate-x-1/2 -translate-y-1/2 w-48 p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm pointer-events-auto hover:border-[var(--accent-green)] transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1.5">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  01 // INPUT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
              </div>
              <div className="text-xs font-bold text-slate-900">Data &amp; APIs</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                ERP • Kafka • Docs
              </div>
            </div>

            {/* Node 2: Intelligence (Top-Right) */}
            <div className="satellite-node node-intel absolute top-[90px] left-[395px] -translate-x-1/2 -translate-y-1/2 w-48 p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm pointer-events-auto hover:border-purple-300 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1.5">
                <span className="text-[10px] font-mono text-[#7952DE] font-semibold">
                  02 // INTELLIGENCE
                </span>
                <span className="text-[9px] font-mono px-1 rounded bg-purple-50 text-[#7952DE]">
                  RAG
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900">Neural Models</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                Domain Reasoning
              </div>
            </div>

            {/* Node 3: Automation (Bottom-Left) */}
            <div className="satellite-node node-auto absolute top-[320px] left-[125px] -translate-x-1/2 -translate-y-1/2 w-48 p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm pointer-events-auto hover:border-[var(--accent-green)] transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1.5">
                <span className="text-[10px] font-mono text-[var(--accent-green)] font-semibold">
                  03 // AUTOMATION
                </span>
                <span className="text-[9px] font-mono px-1 rounded bg-emerald-50 text-emerald-700">
                  FLEET
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900">Agent Fleets</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                Multi-Step Execution
              </div>
            </div>

            {/* Node 4: Control (Bottom-Right) */}
            <div className="satellite-node node-ctrl absolute top-[320px] left-[395px] -translate-x-1/2 -translate-y-1/2 w-48 p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm pointer-events-auto hover:border-slate-400 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1.5">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  04 // CONTROL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>
              <div className="text-xs font-bold text-slate-900">Governance</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                RBAC • Audit Trails
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Simplified 3-Act Narrative Flow */}
        <div className="sm:hidden p-4 flex flex-col gap-3 bg-gradient-to-b from-slate-50/70 to-white">
          <div className="p-3.5 rounded-xl bg-[#152A32] border border-[var(--accent-green)] text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[var(--accent-green)]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold">ATCDL Central Engine</div>
                <div className="text-[10px] font-mono text-[var(--accent-green)]">
                  Autonomous Orchestrator
                </div>
              </div>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-[var(--accent-green)] font-semibold">
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[9px] font-mono text-slate-400">01 // INPUT</div>
              <div className="text-xs font-bold text-slate-900">Data &amp; APIs</div>
              <div className="text-[10px] text-slate-500 font-mono">ERP • Kafka</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[9px] font-mono text-[#7952DE]">02 // INTEL</div>
              <div className="text-xs font-bold text-slate-900">Neural Models</div>
              <div className="text-[10px] text-slate-500 font-mono">Private RAG</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[9px] font-mono text-emerald-600">03 // AGENTS</div>
              <div className="text-xs font-bold text-slate-900">Agent Fleets</div>
              <div className="text-[10px] text-slate-500 font-mono">Autonomous</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[9px] font-mono text-slate-400">04 // CONTROL</div>
              <div className="text-xs font-bold text-slate-900">Governance</div>
              <div className="text-[10px] text-slate-500 font-mono">RBAC • Audit</div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GREEN ACCENT DATA DISPLAY: SYSTEM FLOW HEALTH BAR         */}
        {/* Background: #00D477, Text: #152A32 (WCAG AAA 7.58:1 Ratio)*/}
        {/* ========================================================= */}
        <div className="act3-footer-health px-4 py-2.5 bg-[#00D477] text-[#152A32] border-t border-[#00B968] flex items-center justify-between text-xs font-mono font-medium shadow-inner">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#152A32] animate-pulse" />
            <span className="font-bold tracking-tight">
              SYSTEM FLOW HEALTH: <span className="underline decoration-[#152A32]/40">99.8% OPTIMAL</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-[#152A32]/10 font-bold border border-[#152A32]/15">
              1.2ms LATENCY
            </span>
            <span className="font-bold tracking-wider uppercase text-[10px] px-2 py-0.5 rounded-md bg-[#152A32] text-[#00D477]">
              VPC AIR-GAPPED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

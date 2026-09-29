"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  ArrowDownRight,
  ArrowUpRight,
  Database,
  CheckCircle2,
  Activity,
} from "lucide-react";

export function HeroSystemVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // --- 1. INTRO TIMELINE (Plays once) ---
        const introTl = gsap.timeline({
          defaults: { ease: "power2.out" },
        });

        // Window appearance
        introTl.fromTo(
          ".hero-sys-window",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 }
        );

        // Core engine pop
        introTl.fromTo(
          ".core-engine-node",
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.6)" },
          "-=0.2"
        );

        // SVG beam stroke-draw
        introTl.fromTo(
          ".signal-beam",
          { strokeDashoffset: 160 },
          { strokeDashoffset: 0, duration: 0.7, stagger: 0.1 },
          "-=0.2"
        );

        // Satellite nodes pop in
        introTl.fromTo(
          ".satellite-node",
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );

        // --- 2. IDLE LOOP (Settle into subtle living pulses & gentle float) ---
        introTl.add(() => {
          // Subtle orbital floating on satellite nodes with varied timings
          gsap.to(".node-input", {
            y: -4,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".node-intel", {
            y: 4,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".node-auto", {
            y: 3,
            duration: 3.5,
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

          // Gentle core breathing pulse
          gsap.to(".core-glow-ring", {
            scale: 1.12,
            opacity: 0.4,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          // Signal pulse beacons traveling along lines
          gsap.to(".signal-particle", {
            strokeDashoffset: -320,
            duration: 3.5,
            repeat: -1,
            ease: "none",
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Instant static state
        gsap.set(".hero-sys-window, .core-engine-node, .satellite-node", {
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
      {/* Background ambient teal/emerald glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[rgba(0,212,119,0.12)] via-[rgba(201,181,255,0.06)] to-transparent blur-2xl opacity-70 pointer-events-none" />

      {/* Main Living System Window */}
      <div className="hero-sys-window relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(21,42,50,0.18),0_10px_25px_-10px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#152A32] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D92D20]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#B54708]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D477]" />
            <span className="font-mono text-[11px] text-white/70 ml-2 tracking-wider">
              ATCDL_SYSTEM // AUTONOMOUS_TOPOLOGY
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[var(--accent-green)] border border-[var(--accent-green)]/30 font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
              ENGINE ACTIVE
            </span>
          </div>
        </div>

        {/* Canvas Area: Desktop 2D Topology */}
        <div className="hidden sm:block relative h-[420px] bg-gradient-to-b from-slate-50/70 to-white overflow-hidden p-6">
          {/* Subtle Canvas Coordinate Grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#152A32 1px, transparent 1px), linear-gradient(90deg, #152A32 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* SVG Signal Beams Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 520 420"
            fill="none"
          >
            {/* Background connection guides */}
            <path
              d="M 125 90 C 200 90, 210 180, 260 210"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 395 90 C 320 90, 310 180, 260 210"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 260 210 C 210 240, 200 330, 125 330"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 260 210 C 310 240, 320 330, 395 330"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Animated Solid Signal Beams */}
            <path
              className="signal-beam"
              d="M 125 90 C 200 90, 210 180, 260 210"
              stroke="#00D477"
              strokeWidth="2"
              strokeDasharray="160"
              strokeDashoffset="0"
            />
            <path
              className="signal-beam"
              d="M 395 90 C 320 90, 310 180, 260 210"
              stroke="#C9B5FF"
              strokeWidth="2"
              strokeDasharray="160"
              strokeDashoffset="0"
            />
            <path
              className="signal-beam"
              d="M 260 210 C 210 240, 200 330, 125 330"
              stroke="#00D477"
              strokeWidth="2"
              strokeDasharray="160"
              strokeDashoffset="0"
            />
            <path
              className="signal-beam"
              d="M 260 210 C 310 240, 320 330, 395 330"
              stroke="#00D477"
              strokeWidth="2"
              strokeDasharray="160"
              strokeDashoffset="0"
            />

            {/* Glowing Traveling Particles */}
            <path
              className="signal-particle"
              d="M 125 90 C 200 90, 210 180, 260 210 M 395 90 C 320 90, 310 180, 260 210 M 260 210 C 210 240, 200 330, 125 330 M 260 210 C 310 240, 320 330, 395 330"
              stroke="#00D477"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="8 80"
              strokeDashoffset="0"
            />
          </svg>

          {/* SATELLITE NODE 1: INPUT (Top Left) */}
          <div className="satellite-node node-input absolute top-6 left-6 w-[170px] p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                01 // INPUT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-ping" />
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-50 text-[var(--accent-green)] border border-emerald-100">
                <Database className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Data &amp; APIs</div>
                <div className="text-[10px] text-slate-500 font-mono">ERP • Kafka • Docs</div>
              </div>
            </div>
          </div>

          {/* SATELLITE NODE 2: INTELLIGENCE (Top Right) */}
          <div className="satellite-node node-intel absolute top-6 right-6 w-[170px] p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#7952DE]">
                02 // INTELLIGENCE
              </span>
              <span className="text-[9px] font-mono px-1 rounded bg-purple-50 text-[#7952DE]">
                RAG
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-purple-50 text-[#7952DE] border border-purple-100">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Neural Models</div>
                <div className="text-[10px] text-slate-500 font-mono">Domain Reasoning</div>
              </div>
            </div>
          </div>

          {/* CENTRAL NODE: ATCDL CORE ENGINE */}
          <div className="core-engine-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* Ambient Pulsing Glow Halo */}
            <div className="core-glow-ring absolute -inset-3 rounded-full bg-[var(--accent-green)] opacity-20 blur-md pointer-events-none" />

            <div className="relative w-36 h-36 rounded-2xl bg-[#152A32] border-2 border-[var(--accent-green)] p-3 flex flex-col items-center justify-center text-center shadow-[0_12px_36px_rgba(0,212,119,0.25)]">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[var(--accent-green)] mb-1.5">
                <Cpu className="w-4 h-4 animate-pulse" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-white">
                ATCDL ENGINE
              </span>
              <span className="text-[9px] font-mono text-[var(--accent-green)] uppercase tracking-widest mt-0.5">
                ORCHESTRATOR
              </span>
              <div className="mt-2 pt-1.5 border-t border-white/10 w-full flex items-center justify-center gap-1.5 text-[9px] font-mono text-white/70">
                <Activity className="w-2.5 h-2.5 text-[var(--accent-green)]" />
                <span>1.2ms latency</span>
              </div>
            </div>
          </div>

          {/* SATELLITE NODE 3: AUTOMATION (Bottom Left) */}
          <div className="satellite-node node-auto absolute bottom-6 left-6 w-[170px] p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                03 // AUTOMATION
              </span>
              <span className="text-[9px] font-mono px-1 rounded bg-emerald-50 text-[var(--accent-green)]">
                FLEET
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-50 text-[var(--accent-green)] border border-emerald-100">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Agent Fleets</div>
                <div className="text-[10px] text-slate-500 font-mono">Multi-Step Execution</div>
              </div>
            </div>
          </div>

          {/* SATELLITE NODE 4: CONTROL (Bottom Right) */}
          <div className="satellite-node node-ctrl absolute bottom-6 right-6 w-[170px] p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                04 // CONTROL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-slate-100 text-[#152A32] border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Governance</div>
                <div className="text-[10px] text-slate-500 font-mono">RBAC • Audit Trails</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Clean Vertical Flow Topology */}
        <div className="sm:hidden p-5 flex flex-col gap-3 bg-gradient-to-b from-slate-50/70 to-white">
          {/* Mobile Central Core */}
          <div className="p-4 rounded-xl bg-[#152A32] border border-[var(--accent-green)] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[var(--accent-green)]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold">ATCDL Central Engine</div>
                <div className="text-[10px] font-mono text-[var(--accent-green)]">Autonomous Orchestrator</div>
              </div>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-[var(--accent-green)]">
              ACTIVE
            </span>
          </div>

          {/* 4 Flow Elements */}
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[9px] font-mono text-slate-400">01 // INPUT</div>
              <div className="text-xs font-bold text-slate-900">Data &amp; APIs</div>
              <div className="text-[10px] text-slate-500 font-mono">ERP • Kafka</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[9px] font-mono text-[#7952DE]">02 // INTELLIGENCE</div>
              <div className="text-xs font-bold text-slate-900">Neural Models</div>
              <div className="text-[10px] text-slate-500 font-mono">Private RAG</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[9px] font-mono text-emerald-600">03 // AUTOMATION</div>
              <div className="text-xs font-bold text-slate-900">Agent Fleets</div>
              <div className="text-[10px] text-slate-500 font-mono">Task Execution</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[9px] font-mono text-slate-400">04 // CONTROL</div>
              <div className="text-xs font-bold text-slate-900">Governance</div>
              <div className="text-[10px] text-slate-500 font-mono">RBAC • Audits</div>
            </div>
          </div>
        </div>

        {/* Console Bottom Metadata Bar */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
            <span>Living System: Input → Intel → Auto → Control</span>
          </div>
          <span className="hidden sm:inline text-[var(--accent-green)] font-semibold">
            VPC / Air-Gapped Ready
          </span>
        </div>
      </div>
    </div>
  );
}

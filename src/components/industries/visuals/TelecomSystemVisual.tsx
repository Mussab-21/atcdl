"use client";

import React, { useState, useEffect } from "react";
import { Radio, Wifi, Bot, ShieldCheck, Zap, AlertTriangle, Layers, Server } from "lucide-react";

export function TelecomSystemVisual({ isPlaying = true }: { isPlaying?: boolean }) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [pulseCount, setPulseCount] = useState<number>(14240);

  const steps = [
    {
      id: "alert",
      label: "01 NETWORK ALARM",
      tag: "Kafka Stream",
      icon: AlertTriangle,
      color: "text-amber-400",
      detail: "Fiber cuts & cell degradation alerts streamed via high-throughput Kafka bus",
    },
    {
      id: "triage",
      label: "02 AI ROOT CAUSE",
      tag: "Neural Correlator",
      icon: Bot,
      color: "text-blue-400",
      detail: "Neural correlation model isolates root cause from thousands of cascading tower alerts",
    },
    {
      id: "comms",
      label: "03 SUBSCRIBER AGENT",
      tag: "WhatsApp Fleet",
      icon: Zap,
      color: "text-[#00D477]",
      detail: "Automated WhatsApp and web agent fleet handles subscriber inquiries in regional dialects",
    },
    {
      id: "bss",
      label: "04 BSS / OSS BRIDGE",
      tag: "Billing Core",
      icon: Layers,
      color: "text-cyan-400",
      detail: "Fault-tolerant microservice connectors push balance resets & ticket escalations into BSS/OSS",
    },
    {
      id: "action",
      label: "05 NOC RESOLUTION",
      tag: "Operator Cockpit",
      icon: ShieldCheck,
      color: "text-emerald-400",
      detail: "Unified NOC console provides tier-2 supervisors with complete telemetry history and actions",
    },
  ];

  // Auto-cycle through the operations steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setPulseCount((c) => c + Math.floor(Math.random() * 25) + 5);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full flex flex-col gap-5 select-none font-sans">
      {/* Network Infrastructure Topology Canvas */}
      <div className="relative rounded-2xl bg-[#051329] border border-[#18345C] p-4 sm:p-5 overflow-hidden">
        {/* Coordinate Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top Node Status Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono border-b border-[#18345C] pb-3 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
            <span className="font-bold text-white tracking-wider">KAFKA EVENT BUS // CELLULAR CLUSTERS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden sm:inline">Telemetry:</span>
            <span className="text-[#00D477] font-semibold">{pulseCount.toLocaleString()} ev/s</span>
          </div>
        </div>

        {/* Network Nodes Diagram with Animated SVG Interconnects */}
        <div className="relative z-10 py-6 min-h-[200px] flex items-center justify-center">
          <div className="relative w-full max-w-[480px] h-[160px]">
            {/* SVG Connecting Circuit Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 160" fill="none">
              <defs>
                <linearGradient id="telecomLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00D477" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Central connection trunk */}
              <line x1="70" y1="80" x2="410" y2="80" stroke="#18345C" strokeWidth="2" strokeDasharray="4 4" />
              <line
                x1="70"
                y1="80"
                x2={70 + (activeStep / (steps.length - 1)) * 340}
                y2="80"
                stroke="url(#telecomLineGrad)"
                strokeWidth="3"
                className="transition-all duration-500"
              />

              {/* Feed lines */}
              <path d="M 70 30 L 70 80" stroke="#18345C" strokeWidth="1.5" />
              <path d="M 240 30 L 240 80" stroke="#18345C" strokeWidth="1.5" />
              <path d="M 410 30 L 410 80" stroke="#18345C" strokeWidth="1.5" />
              <path d="M 155 130 L 155 80" stroke="#18345C" strokeWidth="1.5" />
              <path d="M 325 130 L 325 80" stroke="#18345C" strokeWidth="1.5" />
            </svg>

            {/* Orbiting Satellite Node Labels */}
            {/* 1. Tower Alarms (Left) */}
            <div className="absolute left-2 top-0 -translate-x-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#091C36] border border-[#18345C] text-[10px] font-mono text-slate-300 shadow-xs">
                <Radio className="w-3 h-3 text-amber-400" />
                <span>Fiber Tower 4B</span>
              </div>
            </div>

            {/* 2. Core Correlator (Top Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#091C36] border border-blue-500/40 text-[10px] font-mono text-blue-300 shadow-xs">
                <Server className="w-3 h-3 text-blue-400" />
                <span>Event Correlator</span>
              </div>
            </div>

            {/* 3. BSS Database (Right) */}
            <div className="absolute right-2 top-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#091C36] border border-[#18345C] text-[10px] font-mono text-slate-300 shadow-xs">
                <Layers className="w-3 h-3 text-cyan-400" />
                <span>Billing OSS/BSS</span>
              </div>
            </div>

            {/* Center Stage: The 5 Step Pipeline Nodes along the central axis */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-6">
              {steps.map((st, i) => {
                const Icon = st.icon;
                const isActive = activeStep === i;
                const isPast = activeStep > i;

                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`relative z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                      isActive
                        ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-500/30 scale-110 ring-4 ring-blue-500/20"
                        : isPast
                        ? "bg-[#091C36] border-[#00D477]/60 text-[#00D477]"
                        : "bg-[#071830] border-[#18345C] text-slate-400 hover:border-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00D477] animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Sub-Nodes */}
            <div className="absolute left-[28%] bottom-0">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#091C36] border border-[#18345C] text-[9px] font-mono text-emerald-400">
                <span>WhatsApp Gateway</span>
              </div>
            </div>
            <div className="absolute right-[28%] bottom-0">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#091C36] border border-[#18345C] text-[9px] font-mono text-slate-300">
                <span>NOC Dashboard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Stage Detailed Live Log Box */}
        <div className="relative z-10 p-3 sm:p-4 rounded-xl bg-[#091C36] border border-[#18345C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-blue-400 shrink-0">
              <Wifi className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-white">
                  {steps[activeStep].label}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#051329] text-cyan-300 border border-[#18345C]">
                  {steps[activeStep].tag}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 font-sans">
                {steps[activeStep].detail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-mono text-slate-400">Stage {activeStep + 1} of 5</span>
            <div className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Lower Micro-Status Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left font-mono">
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">STREAM BUS</span>
          <span className="text-xs font-bold text-slate-200">Apache Kafka</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">P99 LATENCY</span>
          <span className="text-xs font-bold text-[#00D477]">185ms WebRTC</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">AUTO-RESOLVE</span>
          <span className="text-xs font-bold text-blue-300">WhatsApp / Web</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">SECURITY</span>
          <span className="text-xs font-bold text-cyan-300">Air-Gapped VPC</span>
        </div>
      </div>
    </div>
  );
}

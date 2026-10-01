"use client";

import React, { useState, useEffect } from "react";
import { Truck, Package, FileText, CheckCircle2, Anchor, Navigation } from "lucide-react";

export function LogisticsSystemVisual({ isPlaying = true }: { isPlaying?: boolean }) {
  const [activeStep, setActiveStep] = useState<number>(1); // Default to Neural Extraction
  const [activeContainer, setActiveContainer] = useState<string>("MSCU-748921");

  const stages = [
    {
      step: "01",
      name: "DOC INTAKE",
      tag: "Multi-Format",
      desc: "Bills of lading, packing lists & commercial invoices ingested from carrier feeds and freight agents",
      status: "INGESTED",
      icon: FileText,
    },
    {
      step: "02",
      name: "NEURAL PARSER",
      tag: "Layout OCR",
      desc: "Converts messy PDF geometry into structured weights, container IDs, HS tariff codes, and currencies",
      status: "PARSED",
      icon: Package,
    },
    {
      step: "03",
      name: "CUSTOMS MATCH",
      tag: "Cross-Validator",
      desc: "Reconciles invoice line items against manifest weights to eliminate port clearance demurrage risk",
      status: "CLEARED",
      icon: CheckCircle2,
    },
    {
      step: "04",
      name: "TMS DISPATCH",
      tag: "Carrier API",
      desc: "Pushes verified payload directly to Transport Management System and automated customs broker gateway",
      status: "DISPATCHED",
      icon: Truck,
    },
    {
      step: "05",
      name: "MILESTONE TRACK",
      tag: "Control Tower",
      desc: "Live milestones & exception alerts visible to operations controllers, freight forwarders, and client portal",
      status: "IN TRANSIT",
      icon: Navigation,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % stages.length;
        if (next === 0) {
          setActiveContainer(`MSCU-${Math.floor(100000 + Math.random() * 900000)}`);
        }
        return next;
      });
    }, 2850);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  return (
    <div className="w-full flex flex-col gap-5 select-none font-sans">
      {/* Freight Intelligence Canvas */}
      <div className="relative rounded-2xl bg-[#051329] border border-[#18345C] p-4 sm:p-5 overflow-hidden">
        {/* Subtle Map / Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Freight Status Header */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono border-b border-[#18345C] pb-3 text-slate-300">
          <div className="flex items-center gap-2">
            <Anchor className="w-3.5 h-3.5 text-[#00D477]" />
            <span className="font-bold text-white tracking-wider">FREIGHT DISPATCH & CUSTOMS EXTRACTION ENGINE</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
            <span className="font-mono text-[10px]">DEMURRAGE RISK: 0.0%</span>
          </div>
        </div>

        {/* Active Container Milestone Graphic */}
        <div className="relative z-10 py-5">
          <div className="p-3.5 rounded-xl bg-[#091C36] border border-[#18345C] mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white">CONTAINER {activeContainer}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800">
                    PORT ROTTERDAM → SINGAPORE
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono mt-0.5">
                  <span>Bill of Lading: #BL-8821</span>
                  <span>•</span>
                  <span>Payload: 42 Metric Tons</span>
                  <span>•</span>
                  <span>Customs Match: 100% PASS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-[#051329] px-2.5 py-1 rounded-lg border border-[#18345C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
              <span>CLEARED FOR DISPATCH</span>
            </div>
          </div>

          {/* Stepper Pipeline Along Freight Lifecycle */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {stages.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
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
                      STAGE {st.step}
                    </span>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <strong className="text-[11px] font-bold line-clamp-1">
                    {st.name}
                  </strong>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.2 rounded w-fit ${
                      isActive ? "bg-white/20 text-white" : "bg-black/30 text-slate-400"
                    }`}
                  >
                    {st.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Execution Summary */}
        <div className="relative z-10 p-3.5 rounded-xl bg-[#071830] border border-[#18345C] text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <span className="text-white font-bold">{stages[activeStep].name}:</span>{" "}
              <span className="text-slate-300 font-sans text-xs">{stages[activeStep].desc}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-slate-400">STATE:</span>
            <span className="px-2 py-0.5 rounded bg-[#091C36] text-[#00D477] border border-[#18345C] text-[10px] font-bold">
              {stages[activeStep].status}
            </span>
          </div>
        </div>
      </div>

      {/* Logistics Performance Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left font-mono">
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">PARSING TIME</span>
          <span className="text-xs font-bold text-[#00D477]">Sub-30s / Bill of Lading</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">DEMURRAGE RISK</span>
          <span className="text-xs font-bold text-blue-300">Prevented Port Holds</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">TMS INTEGRATION</span>
          <span className="text-xs font-bold text-cyan-300">Carrier API Webhooks</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">MANUAL RE-KEYING</span>
          <span className="text-xs font-bold text-slate-200">0% Human Typo Lag</span>
        </div>
      </div>
    </div>
  );
}

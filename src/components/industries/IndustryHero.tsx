"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Network } from "lucide-react";
import { INDUSTRIES_EXPLORER_DATA } from "@/content/industries-explorer-data";

export function IndustryHero({
  activeIndustryId,
  onSelectIndustry,
}: {
  activeIndustryId: string;
  onSelectIndustry: (id: string) => void;
}) {
  const activeSectorIndex = Math.max(0, INDUSTRIES_EXPLORER_DATA.findIndex(i => i.id === activeIndustryId));

  const sectors = INDUSTRIES_EXPLORER_DATA.map((ind) => ({
    id: ind.id,
    label: ind.shortName,
    fullName: ind.name,
  }));

  const activeSector = sectors[activeSectorIndex];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Narrative & CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E6F4F5] border border-[#BCE3E6] text-[#007F86] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
              <span>INDUSTRY INTELLIGENCE</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#071326] leading-[1.12]">
              Systems engineered around how your industry actually works.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#53657D] leading-relaxed">
              Different industries have different workflows, regulations, data systems and operational bottlenecks. ATCDL engineers software around those realities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#industry-explorer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Explore Industries ↓</span>
                <ArrowDown className="w-4 h-4 ml-1.5" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-[#DCE5EF] text-xs font-semibold text-[#071326] transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Industry System Map (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full rounded-3xl bg-[#071B3B] border border-[#18345C] p-5 sm:p-6 shadow-[0_24px_60px_rgba(7,27,59,0.16)] text-white overflow-hidden flex flex-col gap-4 select-none">
              {/* Coordinate Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Map Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#18345C] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                  <span className="font-bold text-white tracking-wider">
                    ATCDL ADAPTIVE SYSTEM ENGINE
                  </span>
                </div>
                <span className="text-[10px] text-cyan-300 font-mono hidden sm:inline">
                  VERTICAL TOPOLOGY
                </span>
              </div>

              {/* Central Engine Visual Topology */}
              <div className="relative z-10 min-h-[220px] flex items-center justify-center">
                {/* SVG Connections with dynamic active line */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 460 220"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="heroMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00D477" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Lines from Center (230, 110) to the 4 Sector Corners */}
                  {/* Top-Left: Telecom (65, 45) */}
                  <line
                    x1="230"
                    y1="110"
                    x2="75"
                    y2="45"
                    stroke={activeSector.id === "telecom" ? "#00D477" : "#18345C"}
                    strokeWidth={activeSector.id === "telecom" ? "2.5" : "1.5"}
                    strokeDasharray={activeSector.id === "telecom" ? "none" : "4 4"}
                    className={activeSector.id === "telecom" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Top-Right: Banking (395, 45) */}
                  <line
                    x1="230"
                    y1="110"
                    x2="385"
                    y2="45"
                    stroke={activeSector.id === "banking-finance" ? "#00D477" : "#18345C"}
                    strokeWidth={activeSector.id === "banking-finance" ? "2.5" : "1.5"}
                    strokeDasharray={activeSector.id === "banking-finance" ? "none" : "4 4"}
                    className={activeSector.id === "banking-finance" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Bottom-Left: Manufacturing (65, 175) */}
                  <line
                    x1="230"
                    y1="110"
                    x2="75"
                    y2="175"
                    stroke={activeSector.id === "manufacturing" ? "#00D477" : "#18345C"}
                    strokeWidth={activeSector.id === "manufacturing" ? "2.5" : "1.5"}
                    strokeDasharray={activeSector.id === "manufacturing" ? "none" : "4 4"}
                    className={activeSector.id === "manufacturing" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Bottom-Right: Logistics (395, 175) */}
                  <line
                    x1="230"
                    y1="110"
                    x2="385"
                    y2="175"
                    stroke={activeSector.id === "logistics-supply-chain" ? "#00D477" : "#18345C"}
                    strokeWidth={activeSector.id === "logistics-supply-chain" ? "2.5" : "1.5"}
                    strokeDasharray={activeSector.id === "logistics-supply-chain" ? "none" : "4 4"}
                    className={activeSector.id === "logistics-supply-chain" ? "animate-pulse" : "opacity-40"}
                  />

                  {/* Orbit Ring */}
                  <circle
                    cx="230"
                    cy="110"
                    r="85"
                    stroke="#1e3a8a"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-30"
                  />
                </svg>

                {/* Central ATCDL System Hub */}
                <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#102744] to-[#071B3B] border-2 border-[#2563EB] shadow-xl shadow-blue-900/40 flex flex-col items-center justify-center text-center p-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#60A5FA] flex items-center justify-center mb-1">
                    <Network className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white tracking-wider">
                    ATCDL CORE
                  </span>
                  <span className="text-[9px] font-mono text-cyan-300 mt-0.5">
                    Adaptive Engine
                  </span>
                </div>

                {/* 4 Peripheral Industry Nodes */}
                {/* 1. Top-Left: Telecom */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectIndustry("telecom");
                  }}
                  className={`absolute left-2 top-2 z-20 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    activeSector.id === "telecom"
                      ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-[#091C36] border-[#18345C] text-slate-300 hover:border-slate-500"
                  }`}
                >
                  TELECOM
                </button>

                {/* 2. Top-Right: Banking & Finance */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectIndustry("banking-finance");
                  }}
                  className={`absolute right-2 top-2 z-20 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    activeSector.id === "banking-finance"
                      ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-[#091C36] border-[#18345C] text-slate-300 hover:border-slate-500"
                  }`}
                >
                  BANKING
                </button>

                {/* 3. Bottom-Left: Manufacturing */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectIndustry("manufacturing");
                  }}
                  className={`absolute left-2 bottom-2 z-20 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    activeSector.id === "manufacturing"
                      ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-[#091C36] border-[#18345C] text-slate-300 hover:border-slate-500"
                  }`}
                >
                  MANUFACTURING
                </button>

                {/* 4. Bottom-Right: Logistics */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectIndustry("logistics-supply-chain");
                  }}
                  className={`absolute right-2 bottom-2 z-20 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    activeSector.id === "logistics-supply-chain"
                      ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-[#091C36] border-[#18345C] text-slate-300 hover:border-slate-500"
                  }`}
                >
                  LOGISTICS
                </button>
              </div>

              {/* Lower Active Adaptation Banner */}
              <div className="relative z-10 p-3 rounded-xl bg-[#091C36] border border-[#18345C] flex items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D477]" />
                  <span className="text-xs font-mono text-slate-300">
                    Active Architecture: <strong className="text-white">{activeSector.fullName}</strong>
                  </span>
                </div>
                <a
                  href="#industry-explorer"
                  onClick={() => onSelectIndustry(activeSector.id)}
                  className="text-xs font-mono text-cyan-300 hover:underline flex items-center gap-1 font-bold shrink-0"
                >
                  <span>Explore System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

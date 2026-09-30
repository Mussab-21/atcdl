"use client";

import React, { useState } from "react";
import { ENTERPRISE_SOFTWARE_DATA } from "@/content/enterprise-software-data";
import {
  Boxes,
  BadgeDollarSign,
  Briefcase,
  LineChart,
  CheckCircle2,
  Database,
  Layers,
} from "lucide-react";

export function WhatWeBuildEnterpriseMap() {
  const [selectedHotspotId, setSelectedHotspotId] = useState<
    "operations" | "finance" | "sales" | "management"
  >("operations");

  const activeHotspot = ENTERPRISE_SOFTWARE_DATA.systemMap.find(
    (h) => h.id === selectedHotspotId
  )!;

  const nodeIcons = {
    operations: Boxes,
    finance: BadgeDollarSign,
    sales: Briefcase,
    management: LineChart,
  };

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Interactive Business Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          What We Build For You
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Instead of different departments working in disconnected tools, ATCDL connects your operations, finances, sales, and management through one unified system.
        </p>
      </div>

      {/* 4 Interactive Selector Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {ENTERPRISE_SOFTWARE_DATA.systemMap.map((item) => {
          const isSelected = item.id === selectedHotspotId;
          const Icon = nodeIcons[item.id];

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedHotspotId(item.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 relative ${
                isSelected
                  ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/40 scale-[1.02]"
                  : "bg-white border-[#DCE5EF] text-slate-600 hover:border-slate-300 hover:bg-slate-50/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isSelected
                      ? "bg-[#2563EB] text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.step}
                </span>

                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-[#00D477]" : "text-slate-400"
                  }`}
                />
              </div>

              <div>
                <h3
                  className={`text-sm font-bold ${
                    isSelected ? "text-white" : "text-[#091326]"
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`text-[11px] font-mono ${
                    isSelected ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {item.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Architecture Board (~450-550px compact height) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-xs flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left: Active Module Breakdown (6 cols) */}
        <div className="lg:w-1/2 flex flex-col justify-between gap-6 text-left">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-[#2563EB]">
                MODULE {activeHotspot.step} {"//"} {activeHotspot.badge}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#091326]">
              {activeHotspot.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {activeHotspot.description}
            </p>
          </div>

          {/* Key Deliverable Capabilities */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">
              Integrated Capabilities:
            </span>
            <div className="flex flex-col gap-2">
              {activeHotspot.keyOutputs.map((out, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                  <span className="leading-snug">{out}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
            <span>Unified Architecture:</span>
            <strong className="text-[#2563EB]">PostgreSQL Relational DB</strong>
          </div>
        </div>

        {/* Right: Visual System Hub Diagram (6 cols) */}
        <div className="lg:w-1/2 rounded-xl bg-[#071B3B] text-white p-6 flex flex-col justify-center gap-4 relative overflow-hidden min-h-[320px]">
          {/* Subtle Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col gap-4 font-mono text-xs">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-slate-400 text-[10px]">
              <span>ENTERPRISE HUB // {activeHotspot.badge.toUpperCase()}</span>
              <span className="text-[#00D477] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                Live Synchronization
              </span>
            </div>

            {/* Central Connected Hub Map */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-3">
              {/* Management Node (Top) */}
              <div
                className={`px-3 py-1.5 rounded-lg border text-center transition-all ${
                  selectedHotspotId === "management"
                    ? "bg-[#2563EB] border-[#3B82F6] text-white shadow-md"
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}
              >
                Executive Cockpit &bull; Live Margins &bull; KPIs
              </div>

              {/* Connecting Lines */}
              <div className="w-0.5 h-3 bg-white/20" />

              {/* Central Core Strip with Sales on Left and Ops on Right */}
              <div className="w-full flex items-center justify-between gap-2">
                <div
                  className={`p-2 rounded-lg border text-center flex-1 transition-all ${
                    selectedHotspotId === "sales"
                      ? "bg-[#2563EB] border-[#3B82F6] text-white shadow-md"
                      : "bg-white/5 border-white/10 text-slate-300"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 mx-auto mb-1 text-slate-400" />
                  <span className="text-[10px] block">Sales CRM</span>
                </div>

                {/* Central ATCDL Core */}
                <div className="p-3 rounded-xl bg-[#2563EB]/30 border-2 border-[#00D477] text-center flex-1 shadow-lg">
                  <div className="flex items-center justify-center gap-1 text-[#00D477] font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>ATCDL Core</span>
                  </div>
                  <span className="text-[9px] text-slate-300 block mt-0.5">Unified Relational Data</span>
                </div>

                <div
                  className={`p-2 rounded-lg border text-center flex-1 transition-all ${
                    selectedHotspotId === "operations"
                      ? "bg-[#2563EB] border-[#3B82F6] text-white shadow-md"
                      : "bg-white/5 border-white/10 text-slate-300"
                  }`}
                >
                  <Boxes className="w-3.5 h-3.5 mx-auto mb-1 text-slate-400" />
                  <span className="text-[10px] block">Operations</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="w-0.5 h-3 bg-white/20" />

              {/* Finance Node (Bottom) */}
              <div
                className={`px-3 py-1.5 rounded-lg border text-center transition-all ${
                  selectedHotspotId === "finance"
                    ? "bg-[#2563EB] border-[#3B82F6] text-white shadow-md"
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}
              >
                Finance &bull; Invoices &bull; Two-Way Ledger Sync
              </div>
            </div>

            {/* Bottom Database Strip */}
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#00D477]" />
                Single PostgreSQL Cluster
              </span>
              <span className="text-[#00D477] font-bold">Strict Relational ACID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ENTERPRISE_SOFTWARE_DATA } from "@/content/enterprise-software-data";
import { Check, X, ArrowRight } from "lucide-react";

export function EnterpriseInteractiveComparison() {
  const [activeTab, setActiveTab] = useState<"refresh" | "ops" | "core">("ops");

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Capability Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          Which System Fits Your Business?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Compare the engineering scope and capabilities across the three modernization tiers.
        </p>
      </div>

      {/* Modern 3-Tab Selector */}
      <div className="flex items-center justify-start p-1.5 rounded-2xl bg-slate-100 border border-[#DCE5EF] max-w-md">
        <button
          type="button"
          onClick={() => setActiveTab("refresh")}
          className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
            activeTab === "refresh"
              ? "bg-[#071B3B] text-white shadow-sm"
              : "text-slate-600 hover:text-[#091326]"
          }`}
        >
          01 Refresh
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("ops")}
          className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
            activeTab === "ops"
              ? "bg-[#071B3B] text-white shadow-sm"
              : "text-slate-600 hover:text-[#091326]"
          }`}
        >
          02 Operations
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("core")}
          className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
            activeTab === "core"
              ? "bg-[#071B3B] text-white shadow-sm"
              : "text-slate-600 hover:text-[#091326]"
          }`}
        >
          03 Digital Core
        </button>
      </div>

      {/* Visual Execution Progression Diagram for Active Tab */}
      <div className="p-6 rounded-2xl bg-[#071B3B] text-white border border-slate-800 shadow-md flex flex-col gap-4 text-left">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="text-[#00D477] font-bold">
            {activeTab === "refresh"
              ? "TARGET: 1 Process Modernization"
              : activeTab === "ops"
              ? "TARGET: Cross-Department Operational Platform"
              : "TARGET: Company-Wide Digital Backbone"}
          </span>
          <span>Hexagonal Architecture</span>
        </div>

        {/* Animated Flow Progression */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          {activeTab === "refresh" && (
            <>
              <div className="px-3 py-1.5 rounded bg-white/10 text-slate-300">
                Outdated Process / Sheet
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D477]" />
              <div className="px-3 py-1.5 rounded bg-[#2563EB] text-white font-bold">
                Relational PostgreSQL
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D477]" />
              <div className="px-3 py-1.5 rounded bg-emerald-500/20 text-[#00D477] border border-emerald-500/40 font-bold">
                Clean Modern Web UI
              </div>
            </>
          )}

          {activeTab === "ops" && (
            <>
              <div className="px-3 py-1.5 rounded bg-white/10 text-slate-300">
                Operations &bull; Finance &bull; Sales
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D477]" />
              <div className="px-3 py-1.5 rounded bg-[#2563EB] text-white font-bold">
                Multi-Tier Approval Engine
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D477]" />
              <div className="px-3 py-1.5 rounded bg-emerald-500/20 text-[#00D477] border border-emerald-500/40 font-bold">
                Live Executive Cockpit
              </div>
            </>
          )}

          {activeTab === "core" && (
            <>
              <div className="px-3 py-1.5 rounded bg-white/10 text-slate-300">
                Legacy Databases &amp; Branch Systems
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D477]" />
              <div className="px-3 py-1.5 rounded bg-[#2563EB] text-white font-bold">
                ATCDL Digital Core (Kafka / DDD)
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D477]" />
              <div className="px-3 py-1.5 rounded bg-emerald-500/20 text-[#00D477] border border-emerald-500/40 font-bold">
                Zero-Downtime Company Backbone
              </div>
            </>
          )}
        </div>
      </div>

      {/* Capability Checklist Grid */}
      <div className="rounded-2xl bg-white border border-[#DCE5EF] overflow-hidden shadow-2xs">
        <div className="p-4 bg-slate-50 border-b border-slate-200/80 font-mono text-xs font-bold text-slate-600 grid grid-cols-12 gap-2 text-left">
          <span className="col-span-8 sm:col-span-9 uppercase">Enterprise Architecture Feature</span>
          <span className="col-span-4 sm:col-span-3 text-center uppercase">Active Scope</span>
        </div>

        <div className="divide-y divide-slate-100">
          {ENTERPRISE_SOFTWARE_DATA.comparisonMatrix.map((item, idx) => {
            const isIncluded =
              activeTab === "refresh"
                ? item.refresh
                : activeTab === "ops"
                ? item.ops
                : item.core;

            return (
              <div
                key={idx}
                className="p-4 grid grid-cols-12 gap-2 items-center text-left hover:bg-slate-50/50 transition-colors"
              >
                <div className="col-span-8 sm:col-span-9 flex items-center gap-2.5 text-xs sm:text-sm text-[#091326]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  <span>{item.name}</span>
                </div>

                <div className="col-span-4 sm:col-span-3 flex justify-center">
                  {isIncluded ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                      <Check className="w-3.5 h-3.5 text-[#00D477]" />
                      <span>Included</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 text-slate-400 text-xs border border-slate-200">
                      <X className="w-3 h-3 text-slate-400" />
                      <span>Available</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

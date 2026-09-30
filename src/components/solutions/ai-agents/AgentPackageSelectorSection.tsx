"use client";

import React, { useState, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";
import {
  subscribeCurrency,
  getCurrencySnapshot,
  getCurrencyServerSnapshot,
  setCurrency,
  CurrencyCode,
} from "@/lib/currency";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Clock,
  Zap,
} from "lucide-react";

export function AgentPackageSelectorSection() {
  const [selectedId, setSelectedId] = useState<"task-agent" | "workflow-agent" | "autonomous-operations">("workflow-agent");
  const currency = useSyncExternalStore(
    subscribeCurrency,
    getCurrencySnapshot,
    getCurrencyServerSnapshot
  );

  const handleCurrencyChange = (newCurr: CurrencyCode) => {
    setCurrency(newCurr);
  };

  const selectedPkg = AI_AGENTS_DATA.packages.find((p) => p.id === selectedId) || AI_AGENTS_DATA.packages[1];

  return (
    <section id="packages" className="flex flex-col gap-10 w-full scroll-mt-24">
      {/* Section Header with Region/Currency Selector */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DCE5EF] pb-6">
        <div className="flex flex-col gap-2 max-w-2xl text-left">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Structured Deployment Packages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
            Choose Your AI Worker
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Start with one automated task and expand into an integrated operational workforce.
          </p>
        </div>

        {/* Currency Switcher Pill (Displays ONLY ONE active currency) */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => handleCurrencyChange("USD")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              currency === "USD"
                ? "bg-white text-[#091326] shadow-xs"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Global (USD)
          </button>
          <button
            type="button"
            onClick={() => handleCurrencyChange("PKR")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              currency === "PKR"
                ? "bg-white text-[#091326] shadow-xs"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Pakistan (PKR)
          </button>
        </div>
      </div>

      {/* 3 Horizontal Package Cards (Desktop) / Swipeable Grid (Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {AI_AGENTS_DATA.packages.map((pkg) => {
          const isSelected = selectedId === pkg.id;
          const priceData = currency === "PKR" ? pkg.pricing.PKR : pkg.pricing.USD;

          return (
            <div
              key={pkg.id}
              onClick={() => setSelectedId(pkg.id)}
              className={`p-6 sm:p-7 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-6 relative ${
                isSelected
                  ? "bg-white border-[#2563EB] shadow-xl ring-2 ring-[#2563EB]/40 scale-[1.02] z-10"
                  : "bg-white/80 border-[#DCE5EF] shadow-xs hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Badge for Popular or Level Indicator */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    isSelected ? "text-[#2563EB]" : "text-slate-400"
                  }`}
                >
                  PACKAGE {pkg.level}
                </span>

                {pkg.isPopular && (
                  <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#00D477] text-[#071B3B] shadow-2xs">
                    Recommended Tier
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#091326]">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {pkg.tagline}
                </p>
              </div>

              {/* Visual System Micro-Simulation for this specific tier */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col gap-2 min-h-[110px] justify-center">
                {pkg.id === "task-agent" && (
                  <div className="flex flex-col gap-1.5 font-mono text-[10px]">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>SINGLE TASK (EMAIL/PDF)</span>
                      <ArrowRight className="w-3 h-3 text-[#2563EB]" />
                      <span className="text-[#2563EB] font-bold">1 AI WORKER</span>
                    </div>
                    <div className="p-1.5 rounded bg-white border border-slate-200 text-center text-slate-700 font-sans text-[11px] font-medium">
                      &quot;Input → Validate → CRM Updated&quot;
                    </div>
                  </div>
                )}

                {pkg.id === "workflow-agent" && (
                  <div className="flex flex-col gap-1.5 font-mono text-[10px]">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>MULTI-SYSTEM (ERP+CRM)</span>
                      <ArrowRight className="w-3 h-3 text-[#00D477]" />
                      <span className="text-[#071B3B] font-bold">WORKFLOW ENGINE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-sans text-[10px] text-slate-700">
                      <span className="bg-white p-1 rounded border border-slate-200">Validation</span>
                      <span className="bg-amber-50 p-1 rounded border border-amber-200 text-amber-800 font-bold">Human Review</span>
                      <span className="bg-white p-1 rounded border border-slate-200">ERP Sync</span>
                    </div>
                  </div>
                )}

                {pkg.id === "autonomous-operations" && (
                  <div className="flex flex-col gap-1.5 font-mono text-[10px]">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>ENTERPRISE FLEET</span>
                      <ArrowRight className="w-3 h-3 text-purple-600" />
                      <span className="text-purple-700 font-bold">AGENT SWARM MESH</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#071B3B] text-white text-center text-[10px] font-sans font-bold flex items-center justify-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#00D477]" />
                      <span>Coordinating Ops, Finance &amp; Logistics Agents</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Price & Delivery Timeline */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                  Investment Scope:
                </span>
                <div className="text-lg sm:text-xl font-bold font-mono text-[#091326]">
                  {priceData.range}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-200/80">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#2563EB]" />
                    <span>{pkg.timeline}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{priceData.context}</span>
                </div>
              </div>

              {/* Capability Badges */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  Included Architecture:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200"
                    >
                      {cap.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Selection Button */}
              <div className="pt-2 border-t border-slate-100">
                <Button
                  size="md"
                  variant={isSelected ? "primary" : "outline"}
                  className="w-full text-xs font-semibold justify-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(pkg.id);
                  }}
                >
                  <span>{isSelected ? "Selected Option" : `Select ${pkg.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Package Expansion Tray */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#071B3B] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg border border-slate-800">
        <div className="flex flex-col gap-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-[#00D477]">
              Current Selection // {selectedPkg.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/15">
              {selectedPkg.timeline}
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            {selectedPkg.description}
          </h4>
          <p className="text-xs text-slate-300">
            {selectedPkg.deliverableSummary}
          </p>
        </div>

        <NextLink
          href={`/contact?solution=ai-agents&package=${selectedPkg.id}`}
          className="shrink-0 w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="primary"
            className="w-full sm:w-auto text-xs font-bold whitespace-nowrap bg-[#00D477] text-[#071B3B] hover:bg-[#00B968]"
          >
            <span>{selectedPkg.ctaText} →</span>
          </Button>
        </NextLink>
      </div>
    </section>
  );
}

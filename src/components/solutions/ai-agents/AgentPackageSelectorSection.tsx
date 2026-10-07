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
import { PackageCard } from "@/components/solutions/PackageCard";
import { ArrowRight, Zap, CheckCircle2, ShieldCheck } from "lucide-react";

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

  const handleSelectPackage = (id: "task-agent" | "workflow-agent" | "autonomous-operations") => {
    setSelectedId(id);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("atcdl-ai-agent-package", { detail: id }));
    }
  };

  const selectedPkg =
    AI_AGENTS_DATA.packages.find((p) => p.id === selectedId) || AI_AGENTS_DATA.packages[1];

  const packageIndex = AI_AGENTS_DATA.packages.findIndex((p) => p.id === selectedId);

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

      {/* 3 Package Cards (Desktop Grid / Mobile Swipeable Carousel with equal heights) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {AI_AGENTS_DATA.packages.map((pkg) => {
          const isSelected = selectedId === pkg.id;

          const visual = (
            <div className="w-full">
              {pkg.id === "task-agent" && (
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div
                    className={`flex items-center justify-between transition-colors ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span>INPUT → AI → ACTION</span>
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-[#00D084]" : "text-[#2563EB]"
                      }`}
                    >
                      {isSelected ? "ACTIVE PIPELINE" : "1 AI WORKER"}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded border text-center font-sans text-[11px] font-medium transition-all ${
                      isSelected
                        ? "bg-[#091C36] border-[#203D66] text-slate-200"
                        : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                      <span className={isSelected ? "text-slate-300" : "text-slate-600"}>
                        INBOUND PDF/EMAIL
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${
                          isSelected ? "text-[#00D084]" : "text-[#2563EB]"
                        }`}
                      />
                      <span
                        className={`font-bold flex items-center gap-1 ${
                          isSelected ? "text-[#00D084]" : "text-[#071B3B]"
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        CRM POSTED
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {pkg.id === "workflow-agent" && (
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div
                    className={`flex items-center justify-between transition-colors ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span>MULTI-SYSTEM WORKFLOW</span>
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-[#00D084]" : "text-[#00D477]"
                      }`}
                    >
                      {isSelected ? "2–3 CONNECTED APIS" : "HUMAN OVERSIGHT"}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded border text-center font-sans text-[10px] transition-all ${
                      isSelected
                        ? "bg-[#091C36] border-[#203D66] text-slate-200"
                        : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 font-mono text-[9.5px]">
                      <span>INPUT</span>
                      <span className="text-slate-400">→</span>
                      <span className={isSelected ? "text-[#60A5FA] font-bold" : "text-blue-600"}>
                        AI VALIDATE
                      </span>
                      <span className="text-slate-400">→</span>
                      <span className={isSelected ? "text-slate-200" : "text-slate-700"}>
                        ERP
                      </span>
                      <span className="text-slate-400">→</span>
                      <span className="text-[#00D084] font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        HUMAN GATE
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {pkg.id === "autonomous-operations" && (
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div
                    className={`flex items-center justify-between transition-colors ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span>AUTONOMOUS ORCHESTRATOR</span>
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      MULTI-AGENT SWARM
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded border text-center text-[10px] font-sans font-bold flex items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? "bg-[#091C36] border-emerald-500/40 text-white"
                        : "bg-[#071B3B] border-slate-700 text-white"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-[#00D084] animate-pulse" />
                    <span>Cross-Department Orchestration & Oversight</span>
                  </div>
                </div>
              )}
            </div>
          );

          return (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={isSelected}
              onSelect={() =>
                handleSelectPackage(pkg.id as "task-agent" | "workflow-agent" | "autonomous-operations")
              }
              currency={currency}
              visual={visual}
              isRecommended={pkg.isPopular}
              selectedCtaLabel="Selected Package"
              unselectedCtaLabel={`Choose ${pkg.name}`}
            />
          );
        })}
      </div>

      {/* Mobile Subtle Position Indicator (01 / 03, 02 / 03, 03 / 03) */}
      <div className="flex md:hidden items-center justify-center gap-2 pt-1">
        {AI_AGENTS_DATA.packages.map((pkg, idx) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() =>
              handleSelectPackage(pkg.id as "task-agent" | "workflow-agent" | "autonomous-operations")
            }
            className={`w-2 h-2 rounded-full transition-all ${
              selectedId === pkg.id ? "bg-[#3B82F6] w-6" : "bg-slate-300"
            }`}
            aria-label={`Select package ${idx + 1}`}
          />
        ))}
        <span className="text-[11px] font-mono text-slate-500 ml-2">
          0{packageIndex + 1} / 03
        </span>
      </div>

      {/* Selected Package Expansion Tray */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#071B3B] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl border border-slate-700">
        <div className="flex flex-col gap-1.5 max-w-xl text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-[#00D084]">
              Current Selection // {selectedPkg.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/15">
              {selectedPkg.timeline}
            </span>
            {selectedPkg.isPopular && (
              <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#00D084] text-[#071B3B]">
                Recommended
              </span>
            )}
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {selectedPkg.description}
          </h4>
          <p className="text-xs sm:text-sm text-[#D5DFEC] leading-relaxed">
            {selectedPkg.deliverableSummary}
          </p>
          <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-[#8FA6C0]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D084]" />
              Human-in-the-Loop Approval Safeguards
            </span>
            <span>•</span>
            <span>Zero Unchecked LLM Actions</span>
          </div>
        </div>

        <NextLink
          href={`/contact?solution=ai-agents&package=${selectedPkg.id}`}
          className="shrink-0 w-full sm:w-auto"
        >
          <Button as="span"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold whitespace-nowrap bg-[#00D084] hover:bg-[#00BF77] text-[#071B3B] shadow-sm transition-all"
          >
            <span>Proceed with {selectedPkg.name} →</span>
          </Button>
        </NextLink>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { CUSTOM_AI_DATA } from "@/content/custom-ai-data";
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

export function PackageSelectorSection() {
  const [selectedId, setSelectedId] = useState<"starter" | "workspace" | "command-center">("workspace");
  const currency = useSyncExternalStore(
    subscribeCurrency,
    getCurrencySnapshot,
    getCurrencyServerSnapshot
  );

  const handleCurrencyChange = (newCurr: CurrencyCode) => {
    setCurrency(newCurr);
  };

  const handleSelectPackage = (id: "starter" | "workspace" | "command-center") => {
    setSelectedId(id);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("atcdl-custom-ai-package", { detail: id }));
    }
  };

  const selectedPkg =
    CUSTOM_AI_DATA.packages.find((p) => p.id === selectedId) || CUSTOM_AI_DATA.packages[1];

  const packageIndex = CUSTOM_AI_DATA.packages.findIndex((p) => p.id === selectedId);

  return (
    <section id="packages" className="flex flex-col gap-10 w-full scroll-mt-24">
      {/* Section Header with Clean Region/Currency Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DCE5EF] pb-6">
        <div className="flex flex-col gap-2 max-w-2xl text-left">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Structured Deployment Packages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
            Choose Your AI System
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Start with the system you need today and expand as your operation grows.
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
        {CUSTOM_AI_DATA.packages.map((pkg) => {
          const isSelected = selectedId === pkg.id;

          const visual = (
            <div className="w-full">
              {pkg.id === "starter" && (
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div
                    className={`flex items-center justify-between transition-colors ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span>DOCUMENTS (PDF, SOP)</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected ? "text-[#60A5FA]" : "text-[#2563EB]"
                      }`}
                    />
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-[#93C5FD]" : "text-[#2563EB]"
                      }`}
                    >
                      AI CORE
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded border text-center font-sans text-[11px] font-medium transition-all ${
                      isSelected
                        ? "bg-[#091C36] border-[#203D66] text-slate-200"
                        : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D084]" />
                      )}
                      <span>&quot;Ask question → Verified citation&quot;</span>
                      {isSelected && (
                        <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                          p.14
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {pkg.id === "workspace" && (
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div
                    className={`flex items-center justify-between transition-colors ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span>SHAREPOINT / DRIVE / SQL</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected ? "text-[#00D084]" : "text-[#00D477]"
                      }`}
                    />
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-[#00D084]" : "text-[#071B3B]"
                      }`}
                    >
                      AI WORKSPACE
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center font-sans text-[10px]">
                    {["Finance", "Ops / HR", "Engineering"].map((dept) => (
                      <span
                        key={dept}
                        className={`p-1.5 rounded border transition-all ${
                          isSelected
                            ? "bg-[#091C36] border-[#203D66] text-slate-200 font-semibold"
                            : "bg-white border-slate-200 text-slate-700"
                        }`}
                      >
                        {isSelected ? `● ${dept}` : dept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {pkg.id === "command-center" && (
                <div className="flex flex-col gap-2 font-mono text-[10px]">
                  <div
                    className={`flex items-center justify-between transition-colors ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <span>ERP / CRM / APIS / DATA</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      AUTONOMOUS AGENTS
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
                    <span>Air-Gapped VPC + Multi-Agent Execution</span>
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
                handleSelectPackage(pkg.id as "starter" | "workspace" | "command-center")
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
        {CUSTOM_AI_DATA.packages.map((pkg, idx) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() =>
              handleSelectPackage(pkg.id as "starter" | "workspace" | "command-center")
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
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-[#00D084] text-[#071B3B]">
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
              Enterprise Data Isolation
            </span>
            <span>•</span>
            <span>Dedicated Production Deployment</span>
          </div>
        </div>

        <NextLink
          href={`/contact?solution=custom-ai&package=${selectedPkg.id}`}
          className="shrink-0 w-full sm:w-auto"
        >
          <Button
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

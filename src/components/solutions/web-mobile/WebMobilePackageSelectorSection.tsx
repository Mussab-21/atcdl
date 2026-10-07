"use client";

import React, { useState, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { WEB_MOBILE_DATA } from "@/content/web-mobile-data";
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
  CheckCircle2,
} from "lucide-react";

export function WebMobilePackageSelectorSection() {
  const [selectedId, setSelectedId] = useState<
    "digital-launch" | "product-platform" | "digital-ecosystem"
  >("product-platform");

  const currency = useSyncExternalStore(
    subscribeCurrency,
    getCurrencySnapshot,
    getCurrencyServerSnapshot
  );

  const selectedPkg = WEB_MOBILE_DATA.packages.find(
    (p) => p.id === selectedId
  )!;

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Header and Currency Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
        <div className="flex flex-col gap-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Product Delivery Packages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
            Choose Your Product Scope
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Turn your idea into a focused web MVP, deploy across web and mobile app stores, or engineer a high-concurrency digital ecosystem.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center self-start sm:self-auto gap-1 p-1 rounded-xl bg-slate-100 border border-[#DCE5EF] text-xs font-mono">
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
              currency === "USD"
                ? "bg-white text-[#091326] shadow-xs border border-slate-200"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            USD ($)
          </button>
          <button
            type="button"
            onClick={() => setCurrency("PKR")}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
              currency === "PKR"
                ? "bg-white text-[#091326] shadow-xs border border-slate-200"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            PKR (Rs)
          </button>
        </div>
      </div>

      {/* 3 Packages Horizontal Layout (Desktop) / Snap Scroll (Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {WEB_MOBILE_DATA.packages.map((pkg) => {
          const isSelected = pkg.id === selectedId;
          const priceObj = pkg.pricing[currency as CurrencyCode] || pkg.pricing.USD;

          return (
            <div
              key={pkg.id}
              onClick={() => setSelectedId(pkg.id)}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-6 relative group ${
                isSelected
                  ? "bg-[#071B3B] text-white border-[#2563EB] shadow-xl ring-2 ring-[#2563EB]/50 scale-[1.02]"
                  : "bg-white border-[#DCE5EF] text-[#091326] hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Top Row: Level & Popular Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected
                      ? "bg-white/10 text-slate-300 border border-white/10"
                      : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}
                >
                  PACKAGE {pkg.level}
                </span>

                {pkg.isPopular && (
                  <span className="flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#00D477] text-[#071B3B]">
                    <Zap className="w-3 h-3 fill-current" />
                    MOST POPULAR
                  </span>
                )}
              </div>

              {/* Package Title & Tagline */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {pkg.name}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isSelected ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {pkg.tagline}
                </p>
              </div>

              {/* Animated Micro-Diagram Illustrating Progressive Scope */}
              <div
                className={`p-3.5 rounded-xl border flex flex-col gap-2 font-mono text-[11px] transition-colors ${
                  isSelected
                    ? "bg-white/5 border-white/10 text-slate-200"
                    : "bg-slate-50 border-slate-200/80 text-slate-600"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>PRODUCT PLATFORM SCOPE</span>
                  <span className={isSelected ? "text-[#00D477]" : "text-[#2563EB]"}>
                    {pkg.level === "01" ? "Web App" : pkg.level === "02" ? "Web + Mobile + Admin" : "Digital Ecosystem"}
                  </span>
                </div>

                {/* Level 01: Digital Launch */}
                {pkg.level === "01" && (
                  <div className="flex items-center justify-between py-1">
                    <span>Idea / Wireframe</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-bold text-[#00D477]">Next.js Web MVP</span>
                  </div>
                )}

                {/* Level 02: Product Platform */}
                {pkg.level === "02" && (
                  <div className="flex items-center justify-between py-1">
                    <span>Web Portal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-bold text-[#2563EB]">iOS + Android</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-bold text-[#00D477]">Admin &bull; Pay</span>
                  </div>
                )}

                {/* Level 03: Digital Ecosystem */}
                {pkg.level === "03" && (
                  <div className="flex items-center justify-between py-1">
                    <span>Omni-Channel</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-bold text-[#00D477]">Microservices &bull; Edge</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span>Global Scale</span>
                  </div>
                )}
              </div>

              {/* Price & Timeline Strip */}
              <div className="flex flex-col gap-1 pt-2 border-t border-slate-100/20">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {priceObj.range}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-mono ${
                    isSelected ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {priceObj.context}
                </span>

                <div
                  className={`flex items-center gap-1.5 text-xs font-mono mt-1 ${
                    isSelected ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Timeline: {pkg.timeline}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#00D477] text-[#071B3B] hover:bg-[#00B968] shadow-md"
                    : "bg-slate-100 text-[#091326] hover:bg-slate-200"
                }`}
              >
                <span>{isSelected ? "Selected Package" : pkg.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Package Expansion Tray */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-[#2563EB]">
              ACTIVE SCOPE // {selectedPkg.name}
            </span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[#091326]">
            {selectedPkg.deliverableSummary}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {selectedPkg.capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                <span>
                  <strong>{cap.title}:</strong> {cap.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <NextLink href={`/contact?solution=web-mobile-platforms&package=${selectedPkg.id}`}>
          <Button as="span"
            size="lg"
            variant="primary"
            className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854] shrink-0"
          >
            <span>{selectedPkg.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </NextLink>
      </div>
    </section>
  );
}

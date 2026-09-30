"use client";

import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { CurrencyCode } from "@/lib/currency";

export interface PackagePricingItem {
  range: string;
  context: string;
  from?: string;
}

export interface PackageCapabilityItem {
  title: string;
  description?: string;
}

export interface PackageData {
  id: string;
  level: string;
  name: string;
  tagline: string;
  description: string;
  timeline: string;
  pricing: {
    PKR: PackagePricingItem;
    USD: PackagePricingItem;
  };
  capabilities: PackageCapabilityItem[];
  isPopular?: boolean;
  ctaText?: string;
}

export interface PackageCardProps {
  pkg: PackageData;
  isSelected: boolean;
  onSelect: () => void;
  currency: CurrencyCode;
  visual: React.ReactNode;
  isRecommended?: boolean;
  selectedCtaLabel?: string;
  unselectedCtaLabel?: string;
}

export function PackageCard({
  pkg,
  isSelected,
  onSelect,
  currency,
  visual,
  isRecommended,
  selectedCtaLabel = "Selected Package",
  unselectedCtaLabel,
}: PackageCardProps) {
  const priceData = currency === "PKR" ? pkg.pricing.PKR : pkg.pricing.USD;
  const showRecommended = isRecommended ?? pkg.isPopular;
  const defaultUnselectedCta = unselectedCtaLabel || `Choose ${pkg.name}`;

  return (
    <div
      role="tab"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`p-6 sm:p-7 rounded-2xl text-left cursor-pointer flex flex-col justify-between gap-6 relative select-none group outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
        isSelected
          ? "bg-[#071B3B] text-white border-2 border-[#3B82F6] shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_16px_40px_rgba(7,27,59,0.18)] z-10"
          : "bg-white text-[#091326] border border-[#DCE5EF] shadow-xs hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_rgba(7,27,59,0.06)] hover:-translate-y-1"
      } transition-all duration-300 ease-out`}
    >
      {/* Top Header: Level Indicator & Recommended Badge */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-mono font-bold uppercase tracking-wider ${
            isSelected ? "text-[#60A5FA]" : "text-[#61718A]"
          }`}
        >
          PACKAGE {pkg.level}
        </span>

        {showRecommended && (
          <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#00D084] text-[#071B3B] shadow-2xs">
            RECOMMENDED TIER
          </span>
        )}
      </div>

      {/* Title & Business Description */}
      <div className="flex flex-col gap-1.5">
        <h3
          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
            isSelected ? "text-white" : "text-[#091326]"
          }`}
        >
          {pkg.name}
        </h3>
        <p
          className={`text-xs sm:text-sm font-medium leading-relaxed font-sans transition-colors duration-200 ${
            isSelected ? "text-[#D5DFEC]" : "text-[#61718A]"
          }`}
        >
          {pkg.tagline}
        </p>
      </div>

      {/* Internal Package Visualization Panel */}
      <div
        className={`p-3.5 rounded-xl border min-h-[110px] flex flex-col justify-center transition-all duration-300 ease-out ${
          isSelected
            ? "bg-[#102442] border-[#29415F] text-slate-100"
            : "bg-[#F8FAFC] border-[#E2E8F0] text-slate-700"
        }`}
      >
        {visual}
      </div>

      {/* Price & Delivery Scope */}
      <div
        className={`p-4 rounded-xl border flex flex-col gap-1 transition-all duration-300 ease-out ${
          isSelected
            ? "bg-[#0B2144] border-[#20395D]"
            : "bg-[#F8FAFC] border-[#E2E8F0]"
        }`}
      >
        <span
          className={`text-[10px] font-mono uppercase font-semibold tracking-wider ${
            isSelected ? "text-[#8FA6C0]" : "text-[#61718A]"
          }`}
        >
          Investment Scope:
        </span>
        <div
          className={`text-xl sm:text-2xl font-bold font-mono tracking-tight ${
            isSelected ? "text-white" : "text-[#091326]"
          }`}
        >
          {priceData.range}
        </div>
        <div
          className={`flex items-center justify-between text-[11px] font-mono pt-1 border-t ${
            isSelected
              ? "border-[#20395D] text-[#C7D4E5]"
              : "border-slate-200 text-[#61718A]"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <Clock
              className={`w-3 h-3 ${
                isSelected ? "text-[#60A5FA]" : "text-[#2563EB]"
              }`}
            />
            <span>{pkg.timeline}</span>
          </div>
          <span
            className={`text-[10px] ${
              isSelected ? "text-[#8FA6C0]" : "text-slate-400"
            }`}
          >
            {priceData.context}
          </span>
        </div>
      </div>

      {/* Capabilities Badges */}
      <div className="flex flex-col gap-2">
        <span
          className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
            isSelected ? "text-[#8FA6C0]" : "text-[#61718A]"
          }`}
        >
          Included Architecture:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {pkg.capabilities.map((cap, i) => (
            <span
              key={i}
              className={`text-[11px] font-mono px-2 py-0.5 rounded-md font-medium border transition-colors duration-200 ${
                isSelected
                  ? "bg-[#0D2447] text-[#B8C6D8] border-[#233C62]"
                  : "bg-slate-100 text-[#091326] border-slate-200"
              }`}
            >
              {cap.title}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA Action Button */}
      <div
        className={`pt-3 border-t transition-colors duration-200 ${
          isSelected ? "border-[#1E375B]" : "border-slate-100"
        }`}
      >
        {isSelected ? (
          <div className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#00D084] hover:bg-[#00BF77] text-[#071B3B] transition-all flex items-center justify-center gap-2 shadow-xs group-hover:shadow-sm">
            <span>{selectedCtaLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        ) : (
          <div className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 border border-[#DCE5EF] hover:border-[#3B82F6] text-[#091326] transition-all flex items-center justify-center gap-2 group-hover:border-[#3B82F6]">
            <span>{defaultUnselectedCta}</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#3B82F6] transition-all duration-200 group-hover:translate-x-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}

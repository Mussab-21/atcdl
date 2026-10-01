"use client";

import React from "react";
import Link from "next/link";
import { IndustryExplorerItem } from "@/content/industries-explorer-data";
import { IndustrySystemVisual } from "./visuals/IndustrySystemVisual";
import { ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export function InteractiveIndustrySystemSection({
  industry,
  isPlaying,
  onTogglePlay,
}: {
  industry: IndustryExplorerItem;
  isPlaying: boolean;
  onTogglePlay: () => void;
}) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Vertical Problem & ATCDL Systems (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#007F86]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
                <span>{industry.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#071326]">
                {industry.name}
              </h2>
              <p className="text-sm sm:text-base text-[#53657D] leading-relaxed mt-1">
                {industry.summary}
              </p>
            </div>

            {/* Operational Bottleneck Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#DCE5EF]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071326] uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Core Operating Bottleneck:</span>
              </div>
              <p className="text-xs text-[#53657D] leading-relaxed mb-3">
                {industry.operationalBottleneck.description}
              </p>
              <div className="space-y-1.5 text-xs text-[#071326]">
                {industry.operationalBottleneck.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span className="text-[#53657D]">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What ATCDL Builds for this Industry */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#007F86] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>What We Engineer for {industry.shortName}:</span>
              </span>

              <div className="space-y-2.5">
                {industry.whatWeBuildPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#DCE5EF] hover:border-[#3B82F6]/50 shadow-2xs transition-all flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-xs font-bold text-[#071326]">{item.title}</strong>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {item.metricBadge}
                      </span>
                    </div>
                    <p className="text-xs text-[#53657D] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/industries/${industry.slug}`}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#071B3B] hover:bg-[#0c2854] text-xs font-bold text-white transition-all shadow-sm"
              >
                <span>Full Industry Architecture Specs</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>

              <Link
                href={`/contact?industry=${industry.slug}`}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-[#DCE5EF] text-xs font-semibold text-[#071326] transition-all"
              >
                <span>Brief Engineering Team →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive System Console (7 cols) */}
          <div className="lg:col-span-7 w-full sticky top-36">
            <IndustrySystemVisual
              industry={industry}
              isPlaying={isPlaying}
              onTogglePlay={onTogglePlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

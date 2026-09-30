"use client";

import React from "react";
import { CUSTOM_AI_DATA } from "@/content/custom-ai-data";
import {
  FileSearch,
  MessageCircleQuestion,
  CopyX,
  TrendingUp,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function WhoIsThisForSection() {
  const icons = [FileSearch, MessageCircleQuestion, CopyX, TrendingUp];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Operational Fit</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          This Is A Good Fit If...
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Custom AI creates the highest return when internal friction, scattered files, and repetitive questions slow down your operation.
        </p>
      </div>

      {/* 4 Visual Fit Scenarios (2x2 Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CUSTOM_AI_DATA.fitScenarios.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs flex flex-col justify-between gap-4 text-left hover:border-[#2563EB] hover:shadow-xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
                  Scenario 0{idx + 1}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-[#091326]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 text-xs text-slate-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D477] shrink-0 mt-0.5" />
                <span className="leading-snug">{item.solution}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* What We Don't Do Callout (Consultative & Reassuring) */}
      <div className="p-6 rounded-2xl bg-[#071B3B] text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
            <Lock className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <span className="text-xs font-mono font-bold text-[#00D477] uppercase tracking-wider">
              Strict Non-Negotiable Standard // What We Don&apos;t Do
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              We don&apos;t build toy consumer chatbots or send your proprietary company files to public model training queues. We build private, production-grade AI systems with 100% client code ownership, strict data residency, and zero third-party data retention.
            </p>
          </div>
        </div>

        <div className="shrink-0 px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs border border-white/15">
          100% Client Code Ownership
        </div>
      </div>
    </section>
  );
}

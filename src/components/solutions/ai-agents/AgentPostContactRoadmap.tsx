"use client";

import React from "react";
import {
  PhoneCall,
  Search,
  GitMerge,
  FileCheck2,
  Code2,
  PlayCircle,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";

export function AgentPostContactRoadmap() {
  const icons = [PhoneCall, Search, GitMerge, FileCheck2, Code2, PlayCircle, Rocket];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Transparent Engagement Process</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          What Happens After You Contact Us?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          AI automation can feel intimidating. Our structured engagement path eliminates ambiguity so your leadership knows exactly what to expect at each step.
        </p>
      </div>

      {/* Visual Step Pipeline (Desktop 7-col grid / Mobile responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
        {AI_AGENTS_DATA.postContactSteps.map((st, i) => {
          const Icon = icons[i];
          return (
            <div
              key={st.num}
              className="p-4 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs flex flex-col justify-between gap-3 text-left relative group hover:border-[#2563EB] hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#2563EB]">
                  {st.num}
                </span>
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#2563EB]/10 group-hover:text-[#2563EB] transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#091326] leading-snug">
                  {st.label}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {i < AI_AGENTS_DATA.postContactSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

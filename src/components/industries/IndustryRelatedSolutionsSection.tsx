"use client";

import React from "react";
import Link from "next/link";
import { IndustryExplorerItem } from "@/content/industries-explorer-data";
import { SOLUTIONS, Solution } from "@/content/data";
import { ArrowRight, Bot, Brain, LayoutDashboard, Smartphone } from "lucide-react";

export function IndustryRelatedSolutionsSection({ industry }: { industry: IndustryExplorerItem }) {
  // Map solutions
  const relatedSolutions: Solution[] = SOLUTIONS.filter((s) =>
    industry.relatedSolutionSlugs.includes(s.slug)
  );

  const solutionIcons: Record<string, React.ElementType> = {
    "custom-ai": Brain,
    "ai-agents": Bot,
    "enterprise-software": LayoutDashboard,
    "web-mobile-platforms": Smartphone,
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9FC] border-b border-[#DCE5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E6F4F5] border border-[#BCE3E6] text-[#007F86] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
              <span>Modular Solution Tracks</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#071326]">
              Relevant ATCDL Solutions for {industry.shortName}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#53657D]">
              Explore the dedicated technical packages and engagement models we configure for this vertical.
            </p>
          </div>

          <Link
            href="/solutions"
            className="text-xs font-mono text-[#2563EB] hover:underline flex items-center gap-1 font-bold shrink-0"
          >
            <span>Explore All 4 Solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedSolutions.slice(0, 3).map((sol) => {
            const Icon = solutionIcons[sol.slug] || Brain;

            return (
              <div
                key={sol.slug}
                className="p-6 rounded-3xl bg-white border border-[#DCE5EF] hover:border-[#3B82F6]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {sol.typicalTimeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071326] group-hover:text-blue-600 transition-colors mb-1.5">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-[#53657D] leading-relaxed mb-6 font-sans">
                    {sol.businessExplanation || sol.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCE5EF]">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-xs font-mono text-[#071326] group-hover:text-blue-600 font-bold flex items-center justify-between transition-colors"
                  >
                    <span>View Solution Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

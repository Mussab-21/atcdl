"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IndustryFinalCTASection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#071B3B] rounded-3xl border border-[#18345C] shadow-[0_24px_60px_rgba(7,27,59,0.16)] p-8 sm:p-14 text-center relative overflow-hidden text-white">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Coordinate Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/60 border border-blue-700/80 text-blue-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D477]" />
              Vertical System Engineering
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Your industry has its own bottlenecks.
            </h2>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Tell us where information, workflows, or systems are slowing your team down. We design the architecture around your exact operating environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-sm font-semibold text-white transition-all"
              >
                <span>Explore Solutions →</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
                <span>Zero Public Cloud Leakage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Deterministic Safety Guardrails</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Air-Gapped & VPC Deployable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

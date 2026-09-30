"use client";

import React from "react";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative w-full rounded-3xl bg-[#071B3B] text-white p-8 sm:p-14 overflow-hidden border border-slate-800 shadow-xl select-none">
      {/* Background Animated Subtle AI Core Glow & Coordinate Grid */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2563EB]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00D477]/15 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Eyebrow Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-[#00D477]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR PRIVATE AI ARCHITECTURE</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Let&apos;s build the AI system your business actually needs.
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
          Tell us what your team is trying to improve. We&apos;ll help map the problem to the right system with fixed milestones and zero guesswork.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <NextLink href="/contact?solution=custom-ai">
            <Button
              size="lg"
              variant="primary"
              className="text-xs sm:text-sm font-bold bg-[#00D477] text-[#071B3B] hover:bg-[#00B968] shadow-md px-6"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </NextLink>

          <NextLink href="/solutions">
            <Button
              size="lg"
              variant="outline"
              className="text-xs sm:text-sm font-semibold border-white/20 text-white hover:bg-white/10 px-6"
            >
              <Compass className="w-4 h-4 mr-1.5" />
              <span>Explore Other Solutions</span>
            </Button>
          </NextLink>
        </div>

        {/* Reassurance Guarantee Line */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-400">
          <span>✓ Direct Technical Founder Discovery</span>
          <span>✓ Fixed Milestone Scope</span>
          <span>✓ 100% Client IP Ownership</span>
        </div>
      </div>
    </section>
  );
}

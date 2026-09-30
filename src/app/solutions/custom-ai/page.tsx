import React from "react";
import { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { CUSTOM_AI_DATA } from "@/content/custom-ai-data";

// Custom AI Sub-components
import { HeroCustomAISystem } from "@/components/solutions/custom-ai/HeroCustomAISystem";
import { WhatWeBuildInteractive } from "@/components/solutions/custom-ai/WhatWeBuildInteractive";
import { PackageSelectorSection } from "@/components/solutions/custom-ai/PackageSelectorSection";
import { InteractiveComparison } from "@/components/solutions/custom-ai/InteractiveComparison";
import { DeliveryJourneySection } from "@/components/solutions/custom-ai/DeliveryJourneySection";
import { PostContactRoadmap } from "@/components/solutions/custom-ai/PostContactRoadmap";
import { WhoIsThisForSection } from "@/components/solutions/custom-ai/WhoIsThisForSection";
import { TechnicalArchitectureAccordion } from "@/components/solutions/custom-ai/TechnicalArchitectureAccordion";
import { FinalCTASection } from "@/components/solutions/custom-ai/FinalCTASection";

export const metadata: Metadata = {
  title: "Custom AI Systems & Private LLM Engineering | ATCDL",
  description:
    "Turn your company's documents, knowledge, and internal information into a private AI assistant your team can actually use. Zero public training data leakage.",
};

export default function CustomAISolutionPage() {
  return (
    <div className="container-custom py-8 sm:py-14 flex flex-col gap-16 sm:gap-20 max-w-6xl">
      {/* 01. HERO SECTION (Outcome-First: Business Problem + Interactive Live AI Simulation) */}
      <section className="flex flex-col gap-6">
        {/* Breadcrumb nav */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <NextLink
            href="/solutions"
            className="text-[#2563EB] hover:underline uppercase font-bold"
          >
            ← All Solutions
          </NextLink>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500 uppercase">
            {CUSTOM_AI_DATA.hero.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Business Problem, Narrative Copy, CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
              <span>{CUSTOM_AI_DATA.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#091326] leading-[1.12]">
              {CUSTOM_AI_DATA.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {CUSTOM_AI_DATA.hero.subtitle}
            </p>

            {/* Quick Guarantees Strip */}
            <div className="flex flex-wrap items-center gap-4 py-2.5 border-y border-[#DCE5EF] text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>
                  Delivery: <strong className="text-[#091326]">2–8 Weeks</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00D477]" />
                <span>
                  Privacy: <strong className="text-[#091326]">Zero Training Leakage</strong>
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <NextLink href="/contact?solution=custom-ai">
                <Button size="lg" variant="primary" className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854]">
                  <span>{CUSTOM_AI_DATA.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </NextLink>

              <a href="#what-we-build">
                <Button size="lg" variant="outline" className="text-xs font-semibold">
                  <span>{CUSTOM_AI_DATA.hero.secondaryCta}</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Live Animated System Simulation (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <HeroCustomAISystem />
          </div>
        </div>
      </section>

      {/* 02. WHAT WE BUILD FOR YOU (Interactive 4-Hotspot Architecture) */}
      <div id="what-we-build" className="scroll-mt-24">
        <WhatWeBuildInteractive />
      </div>

      {/* 03. PACKAGE SELECTOR SECTION (Primary Sales / Conversion Engine) */}
      <PackageSelectorSection />

      {/* 04. INTERACTIVE COMPARISON (Clean Neutral Surface, Progression Flow) */}
      <InteractiveComparison />

      {/* 05. DELIVERY JOURNEY (Animated 4-Stage Roadmap) */}
      <DeliveryJourneySection />

      {/* 06. WHO IS THIS FOR? (4 Visual Scenarios + Non-Negotiables) */}
      <WhoIsThisForSection />

      {/* 07. HOW ENGAGEMENT WORKS (Post-Contact Uncertainty Reducer) */}
      <PostContactRoadmap />

      {/* 08. TECHNICAL DETAILS (Collapsible Architecture Deep-Dive) */}
      <TechnicalArchitectureAccordion />

      {/* 09. FINAL HIGH-IMPACT CTA */}
      <FinalCTASection />

      {/* Bottom Cross-Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DCE5EF] text-xs font-mono">
        <NextLink
          href="/work"
          className="text-slate-600 hover:text-[#2563EB] flex items-center gap-1 transition-colors"
        >
          <span>View Verified Client Case Studies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
        <NextLink
          href="/solutions/ai-agents"
          className="text-[#2563EB] hover:underline flex items-center gap-1 font-bold"
        >
          <span>Next Solution: Autonomous AI Agents</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
      </div>
    </div>
  );
}

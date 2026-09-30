import React from "react";
import { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, UserCheck } from "lucide-react";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";

// AI Agents Sub-components
import { HeroAIAgentsSystem } from "@/components/solutions/ai-agents/HeroAIAgentsSystem";
import { WhatWeBuildAgentsInteractive } from "@/components/solutions/ai-agents/WhatWeBuildAgentsInteractive";
import { AgentPackageSelectorSection } from "@/components/solutions/ai-agents/AgentPackageSelectorSection";
import { AgentInteractiveComparison } from "@/components/solutions/ai-agents/AgentInteractiveComparison";
import { AgentDeliveryJourneySection } from "@/components/solutions/ai-agents/AgentDeliveryJourneySection";
import { AgentFitScenariosSection } from "@/components/solutions/ai-agents/AgentFitScenariosSection";
import { HumanInTheLoopTrustSection } from "@/components/solutions/ai-agents/HumanInTheLoopTrustSection";
import { AgentPostContactRoadmap } from "@/components/solutions/ai-agents/AgentPostContactRoadmap";
import { AgentTechnicalAccordion } from "@/components/solutions/ai-agents/AgentTechnicalAccordion";
import { AgentFinalCTASection } from "@/components/solutions/ai-agents/AgentFinalCTASection";

export const metadata: Metadata = {
  title: "AI Agents & Autonomous Automation | ATCDL",
  description:
    "Give repetitive business work to AI workers. We build autonomous agents that understand requests, validate against business rules, update your systems, and escalate exceptions to your team.",
};

export default function AIAgentsSolutionPage() {
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
            {AI_AGENTS_DATA.hero.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Business Problem, Narrative Copy, CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
              <span>{AI_AGENTS_DATA.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#091326] leading-[1.12]">
              {AI_AGENTS_DATA.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {AI_AGENTS_DATA.hero.subtitle}
            </p>

            {/* Quick Guarantees Strip */}
            <div className="flex flex-wrap items-center gap-4 py-2.5 border-y border-[#DCE5EF] text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>
                  Delivery: <strong className="text-[#091326]">2–14 Weeks</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#00D477]" />
                <span>
                  Control: <strong className="text-[#091326]">Human-in-the-Loop Safe</strong>
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <NextLink href="/contact?solution=ai-agents">
                <Button size="lg" variant="primary" className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854]">
                  <span>{AI_AGENTS_DATA.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </NextLink>

              <a href="#what-we-build">
                <Button size="lg" variant="outline" className="text-xs font-semibold">
                  <span>{AI_AGENTS_DATA.hero.secondaryCta}</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Live Animated System Simulation (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <HeroAIAgentsSystem />
          </div>
        </div>
      </section>

      {/* 02. WHAT WE BUILD FOR YOU (Interactive 4-Node Architecture) */}
      <div id="what-we-build" className="scroll-mt-24">
        <WhatWeBuildAgentsInteractive />
      </div>

      {/* 03. CHOOSE YOUR AI WORKER (Primary Sales / Conversion Engine) */}
      <AgentPackageSelectorSection />

      {/* 04. COMPARE YOUR AI WORKFORCE (Interactive Comparison) */}
      <AgentInteractiveComparison />

      {/* 05. HOW WE BUILD YOUR AI WORKER (Animated 4-Stage Roadmap) */}
      <AgentDeliveryJourneySection />

      {/* 06. IS AI AUTOMATION A GOOD FIT? (4 Scenarios + Engineering Standards) */}
      <AgentFitScenariosSection />

      {/* 07. HUMAN CONTROL (Trust Section: Routine Auto-Sync vs Manager Escalation) */}
      <HumanInTheLoopTrustSection />

      {/* 08. WHAT HAPPENS AFTER I CONTACT YOU (7-Step Uncertainty Reducer) */}
      <AgentPostContactRoadmap />

      {/* 09. TECHNICAL ARCHITECTURE (Collapsible Deep-Dive for CTOs) */}
      <AgentTechnicalAccordion />

      {/* 10. FINAL HIGH-IMPACT CTA */}
      <AgentFinalCTASection />

      {/* Bottom Cross-Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DCE5EF] text-xs font-mono">
        <NextLink
          href="/solutions/custom-ai"
          className="text-slate-600 hover:text-[#2563EB] flex items-center gap-1 transition-colors"
        >
          <span>← Previous Solution: Custom AI Knowledge</span>
        </NextLink>
        <NextLink
          href="/work"
          className="text-[#2563EB] hover:underline flex items-center gap-1 font-bold"
        >
          <span>Explore Verified Client Case Studies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
      </div>
    </div>
  );
}

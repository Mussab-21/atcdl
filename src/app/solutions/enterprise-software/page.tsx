import React from "react";
import { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { ENTERPRISE_SOFTWARE_DATA } from "@/content/enterprise-software-data";

// Enterprise Software Sub-components
import { HeroEnterpriseSystem } from "@/components/solutions/enterprise-software/HeroEnterpriseSystem";
import { WhatWeBuildEnterpriseMap } from "@/components/solutions/enterprise-software/WhatWeBuildEnterpriseMap";
import { EnterprisePackageSelectorSection } from "@/components/solutions/enterprise-software/EnterprisePackageSelectorSection";
import { EnterpriseInteractiveComparison } from "@/components/solutions/enterprise-software/EnterpriseInteractiveComparison";
import { EnterpriseDeliveryJourneySection } from "@/components/solutions/enterprise-software/EnterpriseDeliveryJourneySection";
import { EnterpriseBeforeAfterSection } from "@/components/solutions/enterprise-software/EnterpriseBeforeAfterSection";
import { EnterpriseFitScenariosSection } from "@/components/solutions/enterprise-software/EnterpriseFitScenariosSection";
import { EnterprisePostContactRoadmap } from "@/components/solutions/enterprise-software/EnterprisePostContactRoadmap";
import { EnterpriseTechnicalAccordion } from "@/components/solutions/enterprise-software/EnterpriseTechnicalAccordion";
import { EnterpriseFinalCTASection } from "@/components/solutions/enterprise-software/EnterpriseFinalCTASection";

export const metadata: Metadata = {
  title: "Enterprise Software & Systems Modernization | ATCDL",
  description:
    "Replace disconnected spreadsheets and outdated legacy tools with one modern, reliable system engineered around how your company actually works.",
};

export default function EnterpriseSoftwareSolutionPage() {
  return (
    <div className="container-custom py-8 sm:py-14 flex flex-col gap-16 sm:gap-20 max-w-6xl">
      {/* 01. HERO SECTION (Outcome-First: Business Problem + Interactive System Transformation) */}
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
            {ENTERPRISE_SOFTWARE_DATA.hero.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Business Problem, Narrative Copy, CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
              <span>{ENTERPRISE_SOFTWARE_DATA.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#091326] leading-[1.12]">
              {ENTERPRISE_SOFTWARE_DATA.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {ENTERPRISE_SOFTWARE_DATA.hero.subtitle}
            </p>

            {/* Quick Guarantees Strip */}
            <div className="flex flex-wrap items-center gap-4 py-2.5 border-y border-[#DCE5EF] text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>
                  Delivery: <strong className="text-[#091326]">3–20 Weeks</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00D477]" />
                <span>
                  Migration: <strong className="text-[#091326]">Zero Downtime</strong>
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <NextLink href="/contact?solution=enterprise-software">
                <Button as="span" size="lg" variant="primary" className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854]">
                  <span>{ENTERPRISE_SOFTWARE_DATA.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </NextLink>

              <a href="#what-we-build">
                <Button as="span" size="lg" variant="outline" className="text-xs font-semibold">
                  <span>{ENTERPRISE_SOFTWARE_DATA.hero.secondaryCta}</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Live Animated Transformation Visual (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <HeroEnterpriseSystem />
          </div>
        </div>
      </section>

      {/* 02. WHAT WE BUILD FOR YOU (Interactive Business System Map) */}
      <div id="what-we-build" className="scroll-mt-24">
        <WhatWeBuildEnterpriseMap />
      </div>

      {/* 03. PACKAGE SELECTOR SECTION (Primary Sales / Conversion Engine) */}
      <EnterprisePackageSelectorSection />

      {/* 04. INTERACTIVE COMPARISON (Clean Neutral Surface, Progression Flow) */}
      <EnterpriseInteractiveComparison />

      {/* 05. HOW WE MODERNIZE YOUR BUSINESS (Animated 4-Stage Roadmap) */}
      <EnterpriseDeliveryJourneySection />

      {/* 06. THE BUSINESS TRANSFORMATION (Side-by-side Before/After) */}
      <EnterpriseBeforeAfterSection />

      {/* 07. THIS IS A GOOD FIT IF... (4 Visual Scenarios + Standards) */}
      <EnterpriseFitScenariosSection />

      {/* 08. WHAT HAPPENS AFTER YOU CONTACT US (7-Step Uncertainty Reducer) */}
      <EnterprisePostContactRoadmap />

      {/* 09. TECHNICAL ARCHITECTURE (Collapsible Deep-Dive for CTOs) */}
      <EnterpriseTechnicalAccordion />

      {/* 10. FINAL HIGH-IMPACT CTA */}
      <EnterpriseFinalCTASection />

      {/* Bottom Cross-Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DCE5EF] text-xs font-mono">
        <NextLink
          href="/solutions/ai-agents"
          className="text-slate-600 hover:text-[#2563EB] flex items-center gap-1 transition-colors"
        >
          <span>← Previous Solution: AI Agents &amp; Automation</span>
        </NextLink>
        <NextLink
          href="/solutions/web-mobile-platforms"
          className="text-[#2563EB] hover:underline flex items-center gap-1 font-bold"
        >
          <span>Next Solution: Web &amp; Mobile Platforms</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
      </div>
    </div>
  );
}

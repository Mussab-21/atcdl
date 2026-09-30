import React from "react";
import { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Smartphone } from "lucide-react";
import { WEB_MOBILE_DATA } from "@/content/web-mobile-data";

// Web & Mobile Sub-components
import { HeroWebMobileSystem } from "@/components/solutions/web-mobile/HeroWebMobileSystem";
import { WhatWeBuildProductInteractive } from "@/components/solutions/web-mobile/WhatWeBuildProductInteractive";
import { WebMobilePackageSelectorSection } from "@/components/solutions/web-mobile/WebMobilePackageSelectorSection";
import { WebMobileInteractiveComparison } from "@/components/solutions/web-mobile/WebMobileInteractiveComparison";
import { WebMobileDeliveryJourneySection } from "@/components/solutions/web-mobile/WebMobileDeliveryJourneySection";
import { WebMobileFitScenariosSection } from "@/components/solutions/web-mobile/WebMobileFitScenariosSection";
import { WebMobilePostContactRoadmap } from "@/components/solutions/web-mobile/WebMobilePostContactRoadmap";
import { WebMobileTechnicalAccordion } from "@/components/solutions/web-mobile/WebMobileTechnicalAccordion";
import { WebMobileFinalCTASection } from "@/components/solutions/web-mobile/WebMobileFinalCTASection";

export const metadata: Metadata = {
  title: "Web & Mobile Platforms | Digital Product Engineering | ATCDL",
  description:
    "Turn your business idea into a fast, reliable digital product. We engineer sub-second web platforms, cross-platform iOS & Android mobile apps, and scalable backends.",
};

export default function WebMobilePlatformsSolutionPage() {
  return (
    <div className="container-custom py-8 sm:py-14 flex flex-col gap-16 sm:gap-20 max-w-6xl">
      {/* 01. HERO SECTION (Outcome-First: Product Concept + Interactive Live System Ecosystem) */}
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
            {WEB_MOBILE_DATA.hero.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Product Narrative Copy, CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
              <span>{WEB_MOBILE_DATA.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#091326] leading-[1.12]">
              {WEB_MOBILE_DATA.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {WEB_MOBILE_DATA.hero.subtitle}
            </p>

            {/* Quick Guarantees Strip */}
            <div className="flex flex-wrap items-center gap-4 py-2.5 border-y border-[#DCE5EF] text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>
                  Delivery: <strong className="text-[#091326]">3–16 Weeks</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#00D477]" />
                <span>
                  Platforms: <strong className="text-[#091326]">Web, iOS &amp; Android</strong>
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <NextLink href="/contact?solution=web-mobile-platforms">
                <Button size="lg" variant="primary" className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854]">
                  <span>{WEB_MOBILE_DATA.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </NextLink>

              <a href="#what-we-build">
                <Button size="lg" variant="outline" className="text-xs font-semibold">
                  <span>{WEB_MOBILE_DATA.hero.secondaryCta}</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Live Animated Product Ecosystem Simulation (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <HeroWebMobileSystem />
          </div>
        </div>
      </section>

      {/* 02. WHAT WE BUILD FOR YOU (Interactive Product Ecosystem) */}
      <div id="what-we-build" className="scroll-mt-24">
        <WhatWeBuildProductInteractive />
      </div>

      {/* 03. PACKAGE SELECTOR SECTION (Primary Sales / Conversion Engine) */}
      <WebMobilePackageSelectorSection />

      {/* 04. INTERACTIVE COMPARISON (Clean Neutral Surface, Progression Flow) */}
      <WebMobileInteractiveComparison />

      {/* 05. HOW WE BUILD YOUR PRODUCT (Animated 4-Stage Roadmap) */}
      <WebMobileDeliveryJourneySection />

      {/* 06. THIS IS A GOOD FIT IF... (4 Visual Scenarios + Standards) */}
      <WebMobileFitScenariosSection />

      {/* 07. WHAT HAPPENS AFTER YOU CONTACT US (7-Step Uncertainty Reducer) */}
      <WebMobilePostContactRoadmap />

      {/* 08. TECHNICAL ARCHITECTURE (Collapsible Deep-Dive for CTOs) */}
      <WebMobileTechnicalAccordion />

      {/* 09. FINAL HIGH-IMPACT CTA */}
      <WebMobileFinalCTASection />

      {/* Bottom Cross-Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DCE5EF] text-xs font-mono">
        <NextLink
          href="/solutions/enterprise-software"
          className="text-slate-600 hover:text-[#2563EB] flex items-center gap-1 transition-colors"
        >
          <span>← Previous Solution: Enterprise Software</span>
        </NextLink>
        <NextLink
          href="/solutions/custom-ai"
          className="text-[#2563EB] hover:underline flex items-center gap-1 font-bold"
        >
          <span>Explore Solution: Custom AI Knowledge Systems</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
      </div>
    </div>
  );
}

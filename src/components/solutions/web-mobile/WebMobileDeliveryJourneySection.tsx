"use client";

import React, { useState } from "react";
import { WEB_MOBILE_DATA } from "@/content/web-mobile-data";
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export function WebMobileDeliveryJourneySection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStage = WEB_MOBILE_DATA.deliveryStages[activeStepIndex];
  const icons = [Compass, Palette, Code2, Rocket];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Product Delivery Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          How We Build Your Product
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From first sketches to App Store and Google Play publishing, we assemble your product through transparent 2-week sprint releases.
        </p>
      </div>

      {/* Interactive Horizontal Delivery Progress Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {WEB_MOBILE_DATA.deliveryStages.map((stage, idx) => {
          const isActive = activeStepIndex === idx;
          const isPassed = activeStepIndex > idx;
          const Icon = icons[idx];

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 relative ${
                isActive
                  ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/40 scale-[1.02]"
                  : isPassed
                  ? "bg-slate-50 border-slate-200 text-[#091326] hover:bg-white"
                  : "bg-white border-[#DCE5EF] text-slate-500 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isActive
                      ? "bg-[#2563EB] text-white"
                      : isPassed
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {stage.step}
                </span>

                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-[#00D477]" : isPassed ? "text-emerald-600" : "text-slate-400"
                  }`}
                />
              </div>

              <div>
                <h4
                  className={`text-sm font-bold ${
                    isActive ? "text-white" : "text-[#091326]"
                  }`}
                >
                  {stage.name}
                </h4>
                <span
                  className={`text-[11px] font-mono ${
                    isActive ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {stage.duration}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Visual Board */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE5EF] shadow-xs flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left: Stage Information & Activities (6 cols) */}
        <div className="lg:w-1/2 flex flex-col justify-between gap-6 text-left">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-[#2563EB]">
                STAGE {activeStage.step} {"//"} {activeStage.tagline}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                {activeStage.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#091326]">
              {activeStage.copy}
            </h3>
          </div>

          {/* Activities Checklist */}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">
              Key Engineering Activities:
            </span>

            <div className="flex flex-col gap-2">
              {activeStage.activities.map((act, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                  <span className="leading-snug">{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable Badge */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
            <span className="text-slate-500 font-mono">Guaranteed Deliverable:</span>
            <strong className="text-[#091326] font-mono">{activeStage.deliverable}</strong>
          </div>
        </div>

        {/* Right: Stage Visual Animation Diagram (6 cols) */}
        <div className="lg:w-1/2 rounded-xl bg-[#071B3B] text-white p-6 flex flex-col justify-center gap-4 relative overflow-hidden min-h-[300px]">
          {/* Subtle Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {activeStage.id === "discover" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10 text-left">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>01 / USER JOURNEY &amp; BLUEPRINT</span>
                <span className="text-amber-400 font-bold">Mapping Scope...</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Customer Persona:</span>
                  <span className="text-white font-semibold">Self-Service Onboarding</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Core Conversion Moment:</span>
                  <span className="text-[#00D477] font-semibold">1-Click Checkout Flow</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/50 text-[#3B82F6] font-bold text-center text-[11px]">
                → Product Specification &amp; Milestone Scope Contract
              </div>
            </div>
          )}

          {activeStage.id === "design" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10 text-left">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>02 / FIGMA PROTOTYPES &amp; TOKENS</span>
                <span className="text-[#00D477] font-bold">Clickable UI Ready</span>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Mobile Screens (iOS &amp; Android)</span>
                  <span className="text-[#00D477] font-bold">34 Screens</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10">
                  <span className="text-slate-300">Desktop Web Experience</span>
                  <span className="text-[#00D477] font-bold">Adaptive Layouts</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-400 text-[11px] text-center">
                ✓ Click through working prototypes on your phone before coding starts
              </div>
            </div>
          )}

          {activeStage.id === "build" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10 text-left">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>03 / FULL-STACK PRODUCT ASSEMBLY</span>
                <span className="text-[#2563EB] font-bold">TestFlight Demos</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">Next.js Web</span>
                  <strong className="text-white text-xs">Sub-Second</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">Mobile Apps</span>
                  <strong className="text-[#00D477] text-xs">iOS &bull; Android</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">Payments</span>
                  <strong className="text-[#00D477] text-xs">Stripe Vault</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-400 text-[10px] block">Backend API</span>
                  <strong className="text-white text-xs">TypeScript</strong>
                </div>
              </div>

              <div className="p-2 rounded bg-[#2563EB]/20 border border-[#2563EB]/50 text-[#3B82F6] font-bold text-center text-[11px]">
                Bi-Weekly Staging Releases on Real Devices
              </div>
            </div>
          )}

          {activeStage.id === "launch" && (
            <div className="flex flex-col gap-3 font-mono text-xs relative z-10 text-left">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>04 / LIVE APP STORE PUBLISHING</span>
                <span className="text-[#00D477] flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                  Live in Stores
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] block">Apple App Store</span>
                  <strong className="text-white text-xs">Approved</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] block">Google Play</span>
                  <strong className="text-[#00D477] text-xs">Published</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] block">Lighthouse</span>
                  <strong className="text-[#00D477] text-xs">98/100</strong>
                </div>
              </div>

              <div className="p-2 rounded bg-white/10 border border-white/20 text-center text-slate-200 text-[11px]">
                Complete Code Handover + Production Telemetry + 99.9% SLA
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

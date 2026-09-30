"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface StepData {
  step: string;
  name: string;
  duration: string;
  badge: string;
  desc: string;
  deliverables: string[];
  checkpoint: string;
}

const STEPS: StepData[] = [
  {
    step: "01",
    name: "Discover",
    duration: "Week 1–2",
    badge: "Architecture Feasibility",
    desc: "Audit existing databases, map exception flows, define data security contracts, and validate baseline ROI.",
    deliverables: ["Technical Specification Document", "Security & Data Residency Audit"],
    checkpoint: "Synthesis review call with Lead Solutions Architect",
  },
  {
    step: "02",
    name: "Design",
    duration: "Week 2–3",
    badge: "Contract & Interface Freeze",
    desc: "Produce architectural blueprints, API specifications, Zod/Pydantic schemas, and interactive prototype mockups.",
    deliverables: ["OpenAPI 3.1 & Schema Contracts", "Interactive User Flow Prototypes"],
    checkpoint: "Interactive prototype walkthrough and schema freeze session",
  },
  {
    step: "03",
    name: "Build",
    duration: "Week 3–8",
    badge: "Weekly Staging Releases",
    desc: "Iterative engineering sprints. Continuous integration, automated test suites, and weekly working builds on staging.",
    deliverables: ["Live Staging Environment Access", "Automated CI/CD Test Coverage (>85%)"],
    checkpoint: "Weekly live demonstration and sprint review with engineering team",
  },
  {
    step: "04",
    name: "Operate",
    duration: "Ongoing",
    badge: "Production SLA & Telemetry",
    desc: "Deployment to VPC/on-prem, Prometheus telemetry, model latency monitoring, and guaranteed maintenance SLAs.",
    deliverables: ["Infrastructure as Code & Runbooks", "Real-time Telemetry & Latency Monitoring"],
    checkpoint: "Production Go-Live executive sign-off and operational handoff",
  },
];

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function MethodologyInteractiveRail() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advancing rotation (4.5s per step) with manual hover/click override
  useEffect(() => {
    if (isReducedMotion || isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isReducedMotion]);

  const handleStepSelect = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);
  };

  // Progress percentage for connecting line
  const progressPercent = (activeStep / (STEPS.length - 1)) * 100;

  return (
    <div
      className="w-full flex flex-col gap-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Progress Track & Indicator Nodes (Desktop/Tablet) */}
      <div className="relative hidden md:block pt-4 pb-2 px-6">
        {/* Background track */}
        <div className="absolute top-[28px] left-12 right-12 h-[2px] bg-slate-200" />

        {/* Animated Connecting Progress Line */}
        <div
          className="absolute top-[28px] left-12 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-ai)] to-[var(--accent-green)] transition-all duration-500 ease-out"
          style={{
            width: isReducedMotion ? "100%" : `calc(${progressPercent}% * (1 - 96px / 100%))`,
          }}
        />

        {/* Node Buttons */}
        <div className="relative flex justify-between items-center">
          {STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => handleStepSelect(idx)}
                className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                aria-label={`Step ${s.step}: ${s.name}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-[var(--accent)] border-[var(--accent)] text-white scale-110 shadow-[0_0_16px_rgba(0,112,107,0.35)]"
                      : isCompleted
                      ? "bg-[var(--accent-green)] border-[var(--accent-green)] text-[var(--header-bg)]"
                      : "bg-white border-slate-300 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-800"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                </div>

                <span
                  className={`text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? "text-[var(--text-primary)]" : "text-slate-500 group-hover:text-slate-700"
                  }`}
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Interactive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {STEPS.map((phase, idx) => {
          const isActive = activeStep === idx;

          return (
            <div
              key={phase.step}
              onClick={() => handleStepSelect(idx)}
              onMouseEnter={() => handleStepSelect(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleStepSelect(idx);
                }
              }}
              className={`p-6 rounded-[var(--radius-lg)] border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4 relative overflow-hidden ${
                isActive
                  ? "bg-white border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]/30 scale-[1.02] z-10"
                  : "bg-white/80 border-slate-200/90 shadow-xs hover:border-slate-300 opacity-75 hover:opacity-100"
              }`}
            >
              {/* Active top color bar indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-colors ${
                  isActive ? "bg-[var(--accent)]" : "bg-transparent"
                }`}
              />

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-lg font-bold transition-colors ${
                        isActive ? "text-[var(--accent)]" : "text-slate-400"
                      }`}
                    >
                      {phase.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {phase.duration}
                    </span>
                  </div>

                  {isActive && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-green)]/20 text-[var(--header-bg)] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{phase.name}</h3>
                  <span className="text-[11px] font-medium text-[var(--accent)] block mt-0.5">
                    {phase.badge}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {phase.desc}
                </p>

                {/* Expanded Details when Active or when Reduced Motion is enabled */}
                <div
                  className={`flex flex-col gap-2 pt-2 border-t border-slate-100 transition-all duration-300 ${
                    isActive || isReducedMotion
                      ? "opacity-100 max-h-48"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-semibold text-slate-400">
                    Key Deliverables:
                  </span>
                  <ul className="flex flex-col gap-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono text-[10px]">
                  Phase {phase.step} of 04
                </span>
                <span
                  className={`font-semibold transition-colors flex items-center gap-1 ${
                    isActive ? "text-[var(--accent)]" : "text-slate-400"
                  }`}
                >
                  <span>{isActive ? "Viewing" : "Click to view"}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Link to Full Process Page */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-200">
        <p className="text-xs text-[var(--text-secondary)]">
          Want the deep technical breakdown of SLAs, evaluation gates, and CI/CD pipelines?
        </p>

        <NextLink href="/process">
          <Button variant="outline" size="sm" className="text-xs font-medium">
            <span>Explore Full 4-Stage Methodology</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </NextLink>
      </div>
    </div>
  );
}

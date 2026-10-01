"use client";

import React, { useRef, useSyncExternalStore } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  ArrowDown,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  FileCheck,
} from "lucide-react";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

const FLOW_STEPS = [
  {
    id: "request",
    label: "Business Request",
    sub: "Your team identifies a challenge",
    icon: Users,
    color: "#64748B",
    bg: "bg-slate-100",
    border: "border-slate-200",
  },
  {
    id: "process",
    label: "Intelligent Processing",
    sub: "ATC Digital Labs engineers the solution",
    icon: Zap,
    color: "#2563EB",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: "automate",
    label: "Automated Workflow",
    sub: "Systems handle the repetitive work",
    icon: FileCheck,
    color: "#059669",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    id: "result",
    label: "Business Result",
    sub: "Teams focus on higher-value decisions",
    icon: TrendingUp,
    color: "#00D084",
    bg: "bg-emerald-50",
    border: "border-emerald-300",
  },
];

const RESULT_METRICS = [
  { icon: Clock, label: "Less manual work", value: "Hours saved" },
  { icon: BarChart3, label: "Better visibility", value: "Real-time data" },
  { icon: CheckCircle2, label: "Fewer errors", value: "Automated checks" },
];

export function HeroBusinessFlowVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useGSAP(
    () => {
      if (isReducedMotion) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Stagger the flow steps in
        gsap.fromTo(
          ".flow-step-card",
          { opacity: 0, y: 18, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.14,
            ease: "power2.out",
            delay: 0.2,
          }
        );

        // Animate the arrows
        gsap.fromTo(
          ".flow-arrow",
          { opacity: 0, scaleY: 0 },
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.3,
            stagger: 0.14,
            ease: "power2.out",
            delay: 0.35,
            transformOrigin: "top center",
          }
        );

        // Pulse the result card subtly
        gsap.to(".result-pulse", {
          boxShadow: "0 0 0 4px rgba(0,208,132,0.18)",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        });

        // Animate metric pills
        gsap.fromTo(
          ".metric-pill",
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.9,
          }
        );

        // Idle float on the entire panel
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            y: -4,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });
    },
    { scope: containerRef, dependencies: [isReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className="flow-panel w-full max-w-sm mx-auto lg:max-w-none"
    >
      {/* Main Panel */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_20px_60px_-12px_rgba(7,19,38,0.12)] overflow-hidden">
        {/* Panel Header */}
        <div className="px-5 py-3.5 bg-[#071B3B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="text-[10px] font-mono text-white/50 ml-1 tracking-wider">
              HOW CHANGE HAPPENS
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            LIVE
          </span>
        </div>

        {/* Flow Steps */}
        <div className="p-5 flex flex-col gap-0">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === FLOW_STEPS.length - 1;
            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div
                  className={`flow-step-card flex items-center gap-3 p-3 rounded-xl border ${step.bg} ${step.border} ${isLast ? "result-pulse" : ""}`}
                  style={{ opacity: isReducedMotion ? 1 : 0 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white border border-current/10 shadow-xs"
                    style={{ color: step.color }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: step.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[11px] font-bold uppercase tracking-wide"
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </div>
                    <div className="text-[10px] text-slate-500 leading-snug mt-0.5">
                      {step.sub}
                    </div>
                  </div>
                  {isLast && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  )}
                </div>

                {/* Arrow connector */}
                {!isLast && (
                  <div
                    className="flow-arrow flex items-center justify-start pl-4 py-1"
                    style={{ opacity: isReducedMotion ? 1 : 0 }}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-3 bg-slate-200" />
                      <ArrowDown className="w-3 h-3 text-slate-300" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Metrics Strip */}
        <div className="px-5 pb-5">
          <div className="pt-4 border-t border-slate-100">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3">
              What changes for your business:
            </div>
            <div className="flex flex-col gap-2">
              {RESULT_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="metric-pill flex items-center gap-2.5 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100"
                    style={{ opacity: isReducedMotion ? 1 : 0 }}
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[11px] text-slate-700 font-medium">
                        {metric.label}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold">
                        {metric.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tag */}
      <div className="mt-3 text-center">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
          ATC Digital Labs — Complex technology, explained simply.
        </span>
      </div>
    </div>
  );
}

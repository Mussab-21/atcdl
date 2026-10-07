"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { SOLUTIONS, Solution } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Pause, Play, CheckCircle2, Sparkles, Bot, Layers, Monitor } from "lucide-react";
import { CustomAIVisual } from "@/components/solutions/visuals/CustomAIVisual";
import { AIAgentsVisual } from "@/components/solutions/visuals/AIAgentsVisual";
import { EnterpriseSystemsVisual } from "@/components/solutions/visuals/EnterpriseSystemsVisual";
import { WebMobileVisual } from "@/components/solutions/visuals/WebMobileVisual";

interface Props {
  solutions?: Solution[];
}

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const motionSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function SolutionsHorizontalSelector({ solutions = SOLUTIONS }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const isReducedMotion = useSyncExternalStore(subscribeMotion, motionSnapshot, () => true);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalSolutions = solutions.length;
  const currentSolution = solutions[activeIdx] || solutions[0];

  // Auto-advance interval: Slow, understated (7 seconds per solution)
  const ROTATION_INTERVAL_MS = 7000;
  const STEP_MS = 100;

  // Intersection observer to pause off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Next / Previous helpers
  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % totalSolutions);
    setProgress(0);
  }, [totalSolutions]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + totalSolutions) % totalSolutions);
    setProgress(0);
  }, [totalSolutions]);

  // Tab click pauses auto-advance or resets timer
  const handleTabSelect = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  // Keyboard navigation for tab list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Timer loop with smooth progress increment
  useEffect(() => {
    const shouldRun = isPlaying && !isHovered && !isFocused && isInView && !isReducedMotion;
    if (!shouldRun) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (STEP_MS / ROTATION_INTERVAL_MS) * 100;
        if (next >= 100) {
          handleNext();
          return 0;
        }
        return next;
      });
    }, STEP_MS);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, isInView, isReducedMotion, handleNext]);

  // Render matching visual component for the active solution
  const renderVisual = (slug: string) => {
    switch (slug) {
      case "custom-ai":
        return <CustomAIVisual className="h-full" />;
      case "ai-agents":
        return <AIAgentsVisual className="h-full" />;
      case "enterprise-software":
        return <EnterpriseSystemsVisual className="h-full" />;
      case "web-mobile-platforms":
      default:
        return <WebMobileVisual className="h-full" />;
    }
  };

  // Icon mapping for tabs
  const getTabIcon = (slug: string) => {
    switch (slug) {
      case "custom-ai":
        return Sparkles;
      case "ai-agents":
        return Bot;
      case "enterprise-software":
        return Layers;
      case "web-mobile-platforms":
      default:
        return Monitor;
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Core Engineering Solutions"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="p-6 sm:p-8 lg:p-10 rounded-[var(--radius-lg)] bg-white border border-[var(--border)] shadow-xs flex flex-col gap-6 lg:gap-8 w-full"
    >
      {/* Top Header Row: Section Identity + View All Link + Play/Pause Control */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ai)] mb-1">
            Core Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Technology is only useful when it solves a real business problem.
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
            We translate technical engineering into four clear business outcomes. Select an area below to see what ATC Digital Labs delivers.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Pause / Play Accessible Toggle (WCAG 2.2.2) */}
          {!isReducedMotion && (
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause auto-advancing solutions" : "Play auto-advancing solutions"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-[var(--border)] text-slate-700 hover:text-[var(--header-bg)] hover:border-slate-300 transition-colors cursor-pointer shadow-2xs"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[var(--header-bg)]" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[var(--accent-green)] fill-[var(--accent-green)]" />
                  <span className="hidden sm:inline">Auto-play</span>
                </>
              )}
            </button>
          )}

          <NextLink href="/solutions">
            <Button as="span" size="sm" variant="outline" className="text-xs font-medium whitespace-nowrap">
              <span>All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </NextLink>
        </div>
      </div>

      {/* Horizontal Solution Switcher Tabs */}
      <div
        role="tablist"
        aria-label="Solution Selection Tabs"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-[var(--border)] pb-2"
      >
        {solutions.map((sol, idx) => {
          const isActive = idx === activeIdx;
          const Icon = getTabIcon(sol.slug);
          return (
            <button
              key={sol.slug}
              role="tab"
              id={`solution-tab-${sol.slug}`}
              aria-selected={isActive}
              aria-controls={`solution-panel-${sol.slug}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabSelect(idx)}
              className={`group relative text-left p-3 rounded-lg transition-all flex flex-col gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                isActive
                  ? "bg-slate-50 border border-slate-300 text-[var(--text-primary)] shadow-2xs"
                  : "hover:bg-slate-50 text-[var(--text-secondary)] border border-transparent"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                    isActive ? "text-[var(--accent-ai)]" : "text-slate-500"
                  }`}
                >
                  {sol.tabTitle || `0${idx + 1}`}
                </span>
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isActive ? "text-[var(--accent-green)]" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />
              </div>

              <div className="text-xs font-bold truncate text-[var(--text-primary)]">
                {sol.title.split("&")[0].trim()}
              </div>

              {/* Progress bar line under active tab */}
              {isActive && isPlaying && !isHovered && !isReducedMotion && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200 overflow-hidden rounded-b-lg">
                  <div
                    className="h-full bg-[var(--accent-green)] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Solution Presentation Panel */}
      <div
        id={`solution-panel-${currentSolution.slug}`}
        role="tabpanel"
        aria-labelledby={`solution-tab-${currentSolution.slug}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Left Column: Business Outcome & Call-to-Action (50%) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent-ai)] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
              <span>{currentSolution.eyebrow}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              {currentSolution.businessHeadline || currentSolution.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {currentSolution.businessExplanation || currentSolution.description}
            </p>

            {/* What you actually get summary points */}
            <div className="pt-2 border-t border-[var(--border)] flex flex-col gap-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                What you actually receive:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-primary)]">
                {(currentSolution.deliverableItems?.slice(0, 4) || []).map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                    <span className="font-medium text-xs">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
            <NextLink href={`/solutions/${currentSolution.slug}`}>
              <Button as="span" size="md" variant="primary" className="text-xs font-semibold">
                <span>Learn How It Works</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>

            <NextLink href={`/contact?solution=${currentSolution.slug}`}>
              <Button as="span" size="md" variant="outline" className="text-xs font-medium">
                <span>Discuss Your Project</span>
              </Button>
            </NextLink>
          </div>
        </div>

        {/* Right Column: Animated Visual Demonstration (50%) */}
        <div className="lg:col-span-6 flex items-stretch">
          {renderVisual(currentSolution.slug)}
        </div>
      </div>
    </div>
  );
}

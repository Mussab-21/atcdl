"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  Sparkles,
  Cpu,
  FileText,
  Database,
  Server,
  Layers,
  Pause,
  Play,
} from "lucide-react";
import { clsx } from "clsx";

interface CapabilityItem {
  id: string;
  name: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  pillBorder: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "ai",
    name: "AI & Intelligent Systems",
    badge: "Smarter Decisions",
    icon: Sparkles,
    accentColor: "text-[var(--accent-green)]",
    pillBorder: "border-[var(--accent-green)]/40",
  },
  {
    id: "agents",
    name: "Business Automation",
    badge: "Less Manual Work",
    icon: Cpu,
    accentColor: "text-[#7952DE]",
    pillBorder: "border-purple-200",
  },
  {
    id: "docs",
    name: "Document Intelligence",
    badge: "Smart Extraction",
    icon: FileText,
    accentColor: "text-[#00706B]",
    pillBorder: "border-teal-200",
  },
  {
    id: "enterprise",
    name: "Enterprise Software",
    badge: "Built for Operations",
    icon: Database,
    accentColor: "text-[var(--accent-green)]",
    pillBorder: "border-[var(--accent-green)]/40",
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    badge: "Reliable & Scalable",
    icon: Server,
    accentColor: "text-slate-800",
    pillBorder: "border-slate-300",
  },
  {
    id: "platforms",
    name: "Web & Mobile Platforms",
    badge: "Customer-Ready Apps",
    icon: Layers,
    accentColor: "text-[#7952DE]",
    pillBorder: "border-purple-200",
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

export function CapabilityStrip() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const shouldAnimate = isPlaying && !isHovered && !isReducedMotion;

  return (
    <section
      aria-label="Core Engineering Capabilities"
      className="relative border-y border-slate-200/90 bg-[#FFFCEE]/70 py-4 sm:py-5 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="container-custom flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#152A32]">
            ENGINEERED CAPABILITIES &amp; ARCHITECTURES
          </span>
        </div>

        {/* Accessible Play/Pause Toggle (WCAG 2.2.2 Compliant) - Subtle corner icon */}
        {!isReducedMotion && (
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause capability ticker" : "Play capability ticker"}
            className="w-6 h-6 rounded-md flex items-center justify-center bg-white/70 hover:bg-white text-[#152A32] border border-slate-200/80 transition-all cursor-pointer shadow-2xs opacity-35 hover:opacity-100 focus:opacity-100"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 text-[#152A32]" />
            ) : (
              <Play className="w-3 h-3 fill-[#152A32] text-[#152A32]" />
            )}
          </button>
        )}
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FFFCEE] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FFFCEE] to-transparent z-10" />

        {isReducedMotion ? (
          // Static layout for users preferring reduced motion
          <div className="container-custom flex flex-wrap items-center justify-center gap-3 py-2">
            {CAPABILITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs"
                >
                  <div className={`p-1.5 rounded-lg bg-slate-50 ${item.accentColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          // Seamless Continuous Marquee
          <div
            className="flex items-center gap-4 w-max py-1.5"
            style={{
              animation: "marquee-slide 32s linear infinite",
              animationPlayState: shouldAnimate ? "running" : "paused",
            }}
          >
            {/* Set 1 */}
            {CAPABILITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={`first-${item.id}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#152A32] shadow-xs hover:shadow-md transition-all duration-200 cursor-default shrink-0 group"
                >
                  <div
                    className={clsx(
                      "p-1.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#152A32] group-hover:text-[var(--accent-green)] transition-colors",
                      item.accentColor
                    )}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#152A32] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-[#152A32] text-slate-600 group-hover:text-white transition-colors font-semibold">
                    {item.badge}
                  </span>
                </div>
              );
            })}

            {/* Set 2 (Duplicate for infinite seamless loop) */}
            {CAPABILITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={`second-${item.id}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#152A32] shadow-xs hover:shadow-md transition-all duration-200 cursor-default shrink-0 group"
                >
                  <div
                    className={clsx(
                      "p-1.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#152A32] group-hover:text-[var(--accent-green)] transition-colors",
                      item.accentColor
                    )}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#152A32] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-[#152A32] text-slate-600 group-hover:text-white transition-colors font-semibold">
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

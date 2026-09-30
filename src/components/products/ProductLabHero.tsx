"use client";

import React, { useState, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  Brain,
  Bot,
  UserSearch,
  GitMerge,
  LayoutDashboard,
  ArrowRight,
  ArrowDown,
  Layers,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { PRODUCTS_LAB_DATA, LabProduct } from "@/content/products-lab-data";

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

export function ProductLabHero({ onSelectProduct }: { onSelectProduct?: (prod: LabProduct) => void }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [activeProductId, setActiveProductId] = useState<string>("atcdl-docs");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const activeProduct =
    PRODUCTS_LAB_DATA.products.find((p) => p.id === activeProductId) ||
    PRODUCTS_LAB_DATA.products[0];

  const productIcons: Record<string, React.ElementType> = {
    "atcdl-docs": FileText,
    "atcdl-ask": Brain,
    "atcdl-agents": Bot,
    "atcdl-talent": UserSearch,
    "atcdl-flow": GitMerge,
    "atcdl-ops": LayoutDashboard,
  };

  // Auto-cycle through products every 5.5 seconds if playing
  React.useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveProductId((prev) => {
        const list = PRODUCTS_LAB_DATA.products;
        const currentIdx = list.findIndex((p) => p.id === prev);
        const nextIdx = (currentIdx + 1) % list.length;
        return list[nextIdx].id;
      });
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion]);

  const handleProductClick = (prod: LabProduct) => {
    setActiveProductId(prod.id);
    if (onSelectProduct) {
      onSelectProduct(prod);
    } else {
      const el = document.getElementById(`product-${prod.id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="flex flex-col gap-6">
      {/* Breadcrumb nav */}
      <div className="flex items-center gap-2 text-xs font-mono">
        <NextLink
          href="/"
          className="text-[#2563EB] hover:underline uppercase font-bold"
        >
          ← Home
        </NextLink>
        <span className="text-slate-300">/</span>
        <span className="text-slate-500 uppercase">
          {PRODUCTS_LAB_DATA.hero.eyebrow}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Product Lab Narrative Copy, CTAs (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
            <span>{PRODUCTS_LAB_DATA.hero.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#091326] leading-[1.12]">
            {PRODUCTS_LAB_DATA.hero.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            {PRODUCTS_LAB_DATA.hero.supporting}
          </p>

          {/* Quick Guarantees / Lab Info Strip */}
          <div className="flex flex-wrap items-center gap-4 py-2.5 border-y border-[#DCE5EF] text-xs font-mono text-slate-600">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <span>
                Systems: <strong className="text-[#091326]">6 Specialized Engines</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00D477]" />
              <span>
                Status: <strong className="text-[#091326]">Active Engineering Prototypes</strong>
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a href="#product-collection">
              <Button size="lg" variant="primary" className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854]">
                <span>{PRODUCTS_LAB_DATA.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4 ml-1.5" />
              </Button>
            </a>

            <NextLink href="/solutions">
              <Button size="lg" variant="outline" className="text-xs font-semibold">
                <span>{PRODUCTS_LAB_DATA.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </NextLink>
          </div>
        </div>

        {/* Right Column: Live Animated Product Ecosystem Simulation (6 cols) */}
        <div className="lg:col-span-6 w-full">
          <div className="relative w-full rounded-2xl bg-[#071B3B] text-white p-5 sm:p-7 border border-slate-800 shadow-xl overflow-hidden flex flex-col gap-4 select-none">
            {/* Subtle Background Coordinate Grid */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Header: Title and Pause/Play Control */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                <span className="text-slate-300 font-bold uppercase">
                  Connected Product Ecosystem
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                  Click any node to preview
                </span>
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                  aria-label={isPlaying ? "Pause auto-advance" : "Resume auto-advance"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Interactive Connected Nodes Canvas */}
            <div className="relative z-10 min-h-[280px] sm:min-h-[300px] flex flex-col items-center justify-center p-2">
              {/* Central ATCDL Core Node */}
              <div className="p-3 rounded-2xl bg-[#2563EB]/25 border-2 border-[#00D477] flex flex-col items-center justify-center text-center shadow-lg z-20 max-w-[200px] backdrop-blur-xs">
                <div className="flex items-center gap-1.5 text-[#00D477] font-bold text-xs">
                  <Layers className="w-4 h-4" />
                  <span>ATCDL PRODUCT LAB</span>
                </div>
                <span className="text-[10px] font-mono text-slate-300 mt-0.5">
                  Core Architecture
                </span>
              </div>

              {/* Orbiting Product Nodes Grid (3 top, 3 bottom) */}
              <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10">
                {PRODUCTS_LAB_DATA.products.map((prod) => {
                  const Icon = productIcons[prod.id] || Sparkles;
                  const isActive = prod.id === activeProductId;

                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => handleProductClick(prod)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-1 relative ${
                        isActive
                          ? "bg-[#2563EB] border-[#3B82F6] text-white shadow-md scale-[1.03] ring-1 ring-white/30"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-slate-400">
                          {prod.number}
                        </span>
                        <Icon
                          className={`w-3.5 h-3.5 ${
                            isActive ? "text-[#00D477]" : "text-slate-400"
                          }`}
                        />
                      </div>

                      <strong className="text-xs truncate font-sans">
                        {prod.name}
                      </strong>

                      <span
                        className={`text-[9px] font-mono truncate ${
                          isActive ? "text-slate-200" : "text-slate-400"
                        }`}
                      >
                        {prod.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Product Preview Tray in Hero */}
            <div className="relative z-10 p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="flex flex-col gap-0.5 max-w-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#00D477] font-bold">
                    {activeProduct.statusBadge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {"//"} {activeProduct.number} {activeProduct.name}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans line-clamp-1">
                  {activeProduct.shortDescription}
                </p>
              </div>

              <a
                href={`#product-${activeProduct.id}`}
                className="text-xs font-mono text-[#00D477] hover:underline flex items-center gap-1 font-bold shrink-0"
              >
                <span>View Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

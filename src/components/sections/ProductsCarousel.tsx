"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { Product } from "@/content/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CursorGlow } from "@/components/motion/CursorGlow";
import {
  ScanLine,
  FileText,
  MessageSquareText,
  BookOpenCheck,
  Bot,
  Headset,
  UserSearch,
  Users,
  Workflow,
  GitBranch,
  LayoutDashboard,
  Radar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
} from "lucide-react";

export const PRODUCT_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ScanLine,
  FileText,
  MessageSquareText,
  BookOpenCheck,
  Bot,
  Headset,
  UserSearch,
  Users,
  Workflow,
  GitBranch,
  LayoutDashboard,
  Radar,
};

function getProductIcon(iconName?: string, slug?: string) {
  if (iconName && PRODUCT_ICON_MAP[iconName]) {
    return PRODUCT_ICON_MAP[iconName];
  }
  if (slug === "atcdl-docs") return ScanLine;
  if (slug === "atcdl-ask") return MessageSquareText;
  if (slug === "atcdl-agents") return Bot;
  if (slug === "atcdl-talent") return UserSearch;
  if (slug === "atcdl-flow") return Workflow;
  if (slug === "atcdl-ops") return LayoutDashboard;
  return Sparkles;
}

interface ProductsCarouselProps {
  products: Product[];
}

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

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [slideWidth, setSlideWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const totalProducts = products.length; // 6 products
  // Extended array to allow seamless wrap: 6 products + first 3 repeated
  const extendedProducts = [...products, ...products.slice(0, 3)];

  // Measure card width + gap dynamically
  const updateSlideWidth = useCallback(() => {
    if (firstCardRef.current && trackRef.current) {
      const cardRect = firstCardRef.current.getBoundingClientRect();
      // On desktop gap is 24px (gap-6), on mobile gap is 16px (gap-4)
      const isDesktop = window.innerWidth >= 1024;
      const gap = isDesktop ? 24 : 16;
      setSlideWidth(cardRect.width + gap);
    }
  }, []);

  useEffect(() => {
    updateSlideWidth();
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSlideWidth);
      return () => window.removeEventListener("resize", updateSlideWidth);
    }

    const ro = new ResizeObserver(() => {
      updateSlideWidth();
    });
    ro.observe(container);

    window.addEventListener("resize", updateSlideWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, [updateSlideWidth]);

  // Pause when scrolled out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Manual navigation handlers
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalProducts - 1;
      }
      return prev - 1;
    });
  }, [totalProducts]);

  const handleDotClick = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  // Seamless wrap transition end
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= totalProducts) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [currentIndex, totalProducts]);

  // Auto-advance timer (every 4.5s)
  useEffect(() => {
    const shouldRun = isPlaying && !isHovered && !isFocused && isInView && !isReducedMotion;
    if (!shouldRun) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, isInView, isReducedMotion, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 45) {
      handleNext(); // Swiped left -> next
    } else if (diff < -45) {
      handlePrev(); // Swiped right -> prev
    }
    touchStartXRef.current = null;
  };

  // Effective highlighted dot index
  const activeDotIndex = currentIndex % totalProducts;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Flagship Products Showcase"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative flex flex-col gap-6 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-xl w-full min-w-0"
    >
      {/* Top Carousel Navigation Bar: Position & Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-[var(--text-muted)]">
          Showing {activeDotIndex + 1} of {totalProducts}
        </span>

        {/* Carousel Controls: Subtle Icon-Only Play/Pause + Left/Right Arrows */}
        <div className="flex items-center gap-2">
          {!isReducedMotion && (
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause auto-advancing products" : "Play auto-advancing products"}
              className="w-7 h-7 rounded-md flex items-center justify-center bg-white/70 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 transition-all cursor-pointer shadow-2xs opacity-40 hover:opacity-100 focus:opacity-100"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-[#152A32]" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-[#152A32] text-[#152A32]" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous product"
            className="w-8 h-8 rounded-full bg-white border border-[var(--border)] text-slate-700 hover:text-[var(--header-bg)] hover:border-[var(--accent)] hover:bg-slate-50 flex items-center justify-center transition-all cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next product"
            className="w-8 h-8 rounded-full bg-white border border-[var(--border)] text-slate-700 hover:text-[var(--header-bg)] hover:border-[var(--accent)] hover:bg-slate-50 flex items-center justify-center transition-all cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Overflow Carousel Viewport */}
      <div className="overflow-hidden w-full min-w-0 py-1">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex gap-4 lg:gap-6 items-stretch"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: isTransitioning && !isReducedMotion ? "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
            willChange: "transform",
          }}
        >
          {extendedProducts.map((product, idx) => {
            const Icon = getProductIcon(product.icon, product.slug);
            const isFirst = idx === 0;

            return (
              <div
                key={`${product.slug}-${idx}`}
                ref={isFirst ? firstCardRef : undefined}
                className="w-full min-w-full lg:min-w-0 lg:w-[calc((100%-48px)/3)] shrink-0 flex"
              >
                <CursorGlow className="w-full h-full flex">
                  <Card
                    variant="interactive"
                    className="p-6 flex flex-col justify-between w-full h-full gap-5 bg-white border-[var(--border)] shadow-xs hover:border-[var(--accent-green)] transition-all"
                  >
                    <div className="flex flex-col gap-3">
                      {/* Card Header: Product Icon + Honesty Status Badge */}
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent-ai)]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <Badge status={product.status} size="sm" />
                      </div>

                      {/* Card Identity */}
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">
                          {product.name}
                        </h3>
                        <div className="text-xs font-semibold text-[var(--accent-ai)] mt-0.5">
                          {product.tagline}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed line-clamp-3">
                          {product.problem}
                        </p>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <NextLink
                        href={`/products/${product.slug}`}
                        className="text-xs font-medium text-[var(--accent)] hover:underline flex items-center gap-1 group/link"
                      >
                        <span>Specs &amp; Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </NextLink>

                      <NextLink href={`/contact?product=${product.slug}`}>
                        <Button size="sm" variant="outline" className="text-xs font-medium">
                          Book Demo
                        </Button>
                      </NextLink>
                    </div>
                  </Card>
                </CursorGlow>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6 Clickable Dot Position Indicators */}
      <div className="flex items-center justify-center gap-1 pt-1" role="tablist" aria-label="Product slides">
        {products.map((p, dotIdx) => {
          const isActive = activeDotIndex === dotIdx;
          return (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleDotClick(dotIdx)}
              aria-label={`Go to product ${dotIdx + 1}: ${p.name}`}
              className="min-w-[32px] min-h-[32px] p-2 flex items-center justify-center rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 block ${
                  isActive
                    ? "w-7 bg-[var(--accent-green)] shadow-2xs"
                    : "w-2.5 bg-slate-400 hover:bg-slate-600"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

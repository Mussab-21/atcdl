"use client";

import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Cpu,
  Database,
  Network,
  Lock,
  Cloud,
  Wrench,
  Compass,
  Sparkles,
  Bot,
  Layers,
  Radio,
  Landmark,
  Truck,
  Stethoscope,
  Factory,
  ShoppingBag,
  Calculator,
} from "lucide-react";

// ── DATA FOR "WHAT WE DO" MEGA-MENU ─────────────────────────────────────────

const SERVICES_ITEMS = [
  {
    title: "AI & Intelligent Systems",
    desc: "Domain-specific AI, document extraction, and private copilots.",
    href: "/services#ai",
    icon: Cpu,
  },
  {
    title: "Software Development",
    desc: "Bespoke web, mobile, and mission-critical business platforms.",
    href: "/services#software",
    icon: Database,
  },
  {
    title: "System Integration",
    desc: "Middleware, APIs, and real-time synchronization between tools.",
    href: "/services#integration",
    icon: Network,
  },
  {
    title: "Cybersecurity",
    desc: "Audits, VPC perimeter hardening, and data protection.",
    href: "/services#cybersecurity",
    icon: Lock,
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Scalable cloud architectures, private deployments, and DevOps.",
    href: "/services#cloud",
    icon: Cloud,
  },
  {
    title: "Managed Services",
    desc: "Continuous monitoring, maintenance, and systems reliability.",
    href: "/services#managed-services",
    icon: Wrench,
  },
  {
    title: "Technology Consulting",
    desc: "Architecture reviews, roadmaps, and technology advisory.",
    href: "/services#consulting",
    icon: Compass,
  },
];

const SOLUTIONS_ITEMS = [
  {
    title: "Business Automation",
    desc: "Eliminate repetitive tasks with intelligent workflow engines.",
    href: "/solutions/ai-agents",
    icon: Bot,
  },
  {
    title: "Enterprise Workflow Systems",
    desc: "Custom platforms connecting departments and core operations.",
    href: "/solutions/enterprise-software",
    icon: Layers,
  },
  {
    title: "Document Intelligence",
    desc: "Extract, classify, and verify high-volume document pipelines.",
    href: "/solutions/custom-ai",
    icon: Sparkles,
  },
  {
    title: "AI-Powered Operations",
    desc: "Assist teams with contextual copilots and decision support.",
    href: "/solutions/ai-agents",
    icon: Cpu,
  },
  {
    title: "Digital Transformation",
    desc: "Modernize legacy systems, spreadsheets, and manual tracking.",
    href: "/solutions/enterprise-software",
    icon: Database,
  },
  {
    title: "Customer & Operations Platforms",
    desc: "Unified portals for customer self-service and internal ops.",
    href: "/solutions/web-mobile-platforms",
    icon: Network,
  },
];

const INDUSTRIES_ITEMS = [
  {
    title: "Telecommunications",
    desc: "Network telemetry, subscriber portals, and BSS/OSS automation.",
    href: "/industries#telecom",
    icon: Radio,
  },
  {
    title: "Banking & Financial Services",
    desc: "Reconciliation engines, compliance workflows, and portal apps.",
    href: "/industries#banking",
    icon: Landmark,
  },
  {
    title: "Logistics & Fleet",
    desc: "Depot routing, dispatch pipelines, and warehouse inventory sync.",
    href: "/industries#logistics",
    icon: Truck,
  },
  {
    title: "Healthcare & Diagnostics",
    desc: "Secure patient portals, specimen tracking, and medical record triage.",
    href: "/industries#healthcare",
    icon: Stethoscope,
  },
  {
    title: "Manufacturing & Industrial",
    desc: "Production tracking, predictive telemetry, and supplier triage.",
    href: "/industries#manufacturing",
    icon: Factory,
  },
  {
    title: "Retail & Commerce",
    desc: "Unified commerce platforms, inventory sync, and client engagement.",
    href: "/industries#retail",
    icon: ShoppingBag,
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileSubSection, setMobileSubSection] = useState<"services" | "solutions" | "industries">("services");

  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for compact navbar state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close mega-menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth hover handlers with grace delay
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  // Keyboard accessibility
  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setMegaMenuOpen(true);
      setTimeout(() => {
        const firstLink = megaMenuRef.current?.querySelector<HTMLAnchorElement>("a[role='menuitem']");
        firstLink?.focus();
      }, 50);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setMegaMenuOpen(false);
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setMegaMenuOpen(false);
      triggerRef.current?.focus();
    }
  };

  const isWhatWeDoActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/solutions") ||
    pathname.startsWith("/industries") ||
    megaMenuOpen;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex items-center bg-[var(--header-bg)] border-b border-white/10 shadow-sm",
          isScrolled ? "h-[70px] shadow-md shadow-black/30 backdrop-blur-md" : "h-[76px] sm:h-[80px]"
        )}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* ── 1. BRAND WORDMARK (Text-only lockup, no circular icon, no Enterprise Technology subtitle) ── */}
          <NextLink
            href="/"
            aria-label="ATC Digital Labs Home"
            className="flex flex-col text-left leading-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] rounded-sm select-none"
          >
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[var(--accent-green)] transition-colors">
              ATC Digital
            </span>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white/90 group-hover:text-[var(--accent-green)] transition-colors mt-0.5">
              Labs
            </span>
          </NextLink>

          {/* ── 2. DESKTOP NAVIGATION (Exactly 4 items: What We Do ▾, Products, Work, About) ── */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {/* 01: What We Do (Mega-Menu Trigger) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={megaMenuOpen}
                aria-haspopup="menu"
                aria-controls="what-we-do-mega-menu"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                onKeyDown={handleTriggerKeyDown}
                className={clsx(
                  "inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold tracking-wider cursor-pointer select-none transition-all duration-150 ease-out origin-center py-2",
                  isWhatWeDoActive
                    ? "text-[var(--accent-green)]"
                    : "text-white/90 hover:text-[var(--accent-green)]"
                )}
              >
                <span>What We Do</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200 ease-out",
                    megaMenuOpen && "rotate-180 text-[var(--accent-green)]"
                  )}
                />
              </button>

              {/* Mega-Menu Panel */}
              {megaMenuOpen && (
                <div
                  ref={megaMenuRef}
                  id="what-we-do-mega-menu"
                  role="menu"
                  aria-label="What We Do"
                  onKeyDown={handleMenuKeyDown}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[960px] max-w-[96vw] z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                >
                  <div className="p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.25),0_10px_30px_-10px_rgba(0,0,0,0.1)] text-[var(--text-primary)]">
                    {/* Header Label */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                          What We Do — Capabilities, Solutions &amp; Industries
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        Complex technology, explained simply.
                      </span>
                    </div>

                    {/* 3-Column Grid: Services, Solutions, Industries */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                      {/* Column 1: SERVICES */}
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 pb-2 border-b border-slate-100">
                          <div className="text-xs font-bold text-[var(--accent-ai)] uppercase tracking-wider font-mono">
                            01. Services
                          </div>
                          <h3 className="text-sm font-bold text-slate-900">
                            What we can do for you
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            Capabilities to build, connect, and manage your technology.
                          </p>
                        </div>

                        <div className="flex flex-col gap-1">
                          {SERVICES_ITEMS.map((svc) => {
                            const Icon = svc.icon;
                            return (
                              <NextLink
                                key={svc.title}
                                href={svc.href}
                                role="menuitem"
                                onClick={() => setMegaMenuOpen(false)}
                                className="p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all group flex items-start gap-2.5 focus:bg-slate-50 focus:outline-none"
                              >
                                <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-[#071B3B] transition-colors">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-[var(--accent-ai)] transition-colors truncate">
                                    {svc.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                    {svc.desc}
                                  </div>
                                </div>
                              </NextLink>
                            );
                          })}
                        </div>

                        <NextLink
                          href="/services"
                          role="menuitem"
                          onClick={() => setMegaMenuOpen(false)}
                          className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 pt-2 mt-auto"
                        >
                          <span>Explore all 7 services →</span>
                        </NextLink>
                      </div>

                      {/* Column 2: SOLUTIONS */}
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 pb-2 border-b border-slate-100">
                          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">
                            02. Solutions
                          </div>
                          <h3 className="text-sm font-bold text-slate-900">
                            Problems we solve
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            Practical systems designed around real business challenges.
                          </p>
                        </div>

                        <div className="flex flex-col gap-1">
                          {SOLUTIONS_ITEMS.map((sol) => {
                            const Icon = sol.icon;
                            return (
                              <NextLink
                                key={sol.title}
                                href={sol.href}
                                role="menuitem"
                                onClick={() => setMegaMenuOpen(false)}
                                className="p-2 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200/80 transition-all group flex items-start gap-2.5 focus:bg-emerald-50/60 focus:outline-none"
                              >
                                <div className="w-6 h-6 rounded-lg bg-emerald-100/60 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-[#071B3B] transition-colors">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors truncate">
                                    {sol.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                    {sol.desc}
                                  </div>
                                </div>
                              </NextLink>
                            );
                          })}
                        </div>

                        {/* Preferred Estimator Integration (§10) */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 mt-auto flex items-center justify-between">
                          <div className="flex flex-col text-[11px]">
                            <span className="text-slate-500">Not sure what you need?</span>
                            <NextLink
                              href="/estimate"
                              role="menuitem"
                              onClick={() => setMegaMenuOpen(false)}
                              className="font-bold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 mt-0.5"
                            >
                              <Calculator className="w-3 h-3 text-[var(--accent-green)]" />
                              <span>Launch Project Estimator →</span>
                            </NextLink>
                          </div>
                        </div>
                      </div>

                      {/* Column 3: INDUSTRIES */}
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 pb-2 border-b border-slate-100">
                          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
                            03. Industries
                          </div>
                          <h3 className="text-sm font-bold text-slate-900">
                            Where we apply capabilities
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            Technology designed for complex operational environments.
                          </p>
                        </div>

                        <div className="flex flex-col gap-1">
                          {INDUSTRIES_ITEMS.map((ind) => {
                            const Icon = ind.icon;
                            return (
                              <NextLink
                                key={ind.title}
                                href={ind.href}
                                role="menuitem"
                                onClick={() => setMegaMenuOpen(false)}
                                className="p-2 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-200/80 transition-all group flex items-start gap-2.5 focus:bg-blue-50/60 focus:outline-none"
                              >
                                <div className="w-6 h-6 rounded-lg bg-blue-100/60 text-blue-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-[#071B3B] transition-colors">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-900 transition-colors truncate">
                                    {ind.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                    {ind.desc}
                                  </div>
                                </div>
                              </NextLink>
                            );
                          })}
                        </div>

                        <NextLink
                          href="/industries"
                          role="menuitem"
                          onClick={() => setMegaMenuOpen(false)}
                          className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1 pt-2 mt-auto"
                        >
                          <span>Explore all industries →</span>
                        </NextLink>
                      </div>
                    </div>

                    {/* Bottom Mega-Menu Action Strip */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <div className="text-slate-600 font-medium">
                        Looking for a custom architecture or technical consultation?
                      </div>
                      <div className="flex items-center gap-3">
                        <NextLink
                          href="/services"
                          role="menuitem"
                          onClick={() => setMegaMenuOpen(false)}
                          className="text-slate-700 hover:text-slate-900 font-semibold"
                        >
                          Overview
                        </NextLink>
                        <span className="text-slate-300">•</span>
                        <NextLink
                          href="/contact?intent=project"
                          role="menuitem"
                          onClick={() => setMegaMenuOpen(false)}
                          className="text-[var(--accent-ai)] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          <span>Discuss Your Project</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                        </NextLink>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 02: Products */}
            <NextLink
              href="/products"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider cursor-pointer select-none transition-colors py-2",
                pathname.startsWith("/products")
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Products
            </NextLink>

            {/* 03: Work */}
            <NextLink
              href="/work"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider cursor-pointer select-none transition-colors py-2",
                pathname.startsWith("/work")
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Work
            </NextLink>

            {/* 04: About */}
            <NextLink
              href="/about"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider cursor-pointer select-none transition-colors py-2",
                pathname === "/about"
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              About
            </NextLink>
          </nav>

          {/* ── 3. PRIMARY CTA (Single prominent green button) ── */}
          <div className="hidden md:flex items-center">
            <NextLink href="/contact?intent=project">
              <button
                type="button"
                className="text-xs font-bold px-4 sm:px-5 py-2.5 rounded-[var(--radius-btn)] bg-[var(--accent-green)] text-[#071B3B] shadow-sm hover:bg-[#00ea83] transition-transform duration-150 ease-out hover:scale-104 active:scale-96 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#071B3B]" />
              </button>
            </NextLink>
          </div>

          {/* ── 4. MOBILE HAMBURGER BUTTON ── */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── 5. MOBILE DRAWER MENU ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-30 bg-white/98 backdrop-blur-xl border-t border-slate-200 p-5 sm:p-6 flex flex-col justify-between md:hidden animate-in fade-in-50 duration-200 overflow-y-auto shadow-2xl">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 font-mono">
              ATC DIGITAL LABS // NAVIGATION
            </div>

            {/* Mobile Accordion: What We Do */}
            <div className="border-b border-slate-200/80 pb-2">
              <button
                type="button"
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                className="w-full text-base font-bold text-slate-900 hover:text-[var(--accent-ai)] py-2.5 flex items-center justify-between cursor-pointer"
              >
                <span>What We Do</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-slate-500 transition-transform duration-200",
                    mobileWhatWeDoOpen && "rotate-180 text-[var(--accent-green)]"
                  )}
                />
              </button>

              {mobileWhatWeDoOpen && (
                <div className="pt-1 pb-3 pl-2 flex flex-col gap-3 animate-in fade-in-50 duration-150">
                  {/* Category switcher pills */}
                  <div className="flex rounded-lg bg-slate-100 p-1 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setMobileSubSection("services")}
                      className={clsx(
                        "flex-1 py-1.5 rounded-md text-center transition-all",
                        mobileSubSection === "services"
                          ? "bg-white text-slate-900 shadow-2xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                    >
                      Services
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileSubSection("solutions")}
                      className={clsx(
                        "flex-1 py-1.5 rounded-md text-center transition-all",
                        mobileSubSection === "solutions"
                          ? "bg-white text-slate-900 shadow-2xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                    >
                      Solutions
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileSubSection("industries")}
                      className={clsx(
                        "flex-1 py-1.5 rounded-md text-center transition-all",
                        mobileSubSection === "industries"
                          ? "bg-white text-slate-900 shadow-2xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                    >
                      Industries
                    </button>
                  </div>

                  {/* Sub-list */}
                  {mobileSubSection === "services" && (
                    <div className="flex flex-col gap-1.5">
                      {SERVICES_ITEMS.map((svc) => (
                        <NextLink
                          key={svc.title}
                          href={svc.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1 text-xs text-slate-700 hover:text-[var(--accent-ai)] font-medium"
                        >
                          • {svc.title}
                        </NextLink>
                      ))}
                      <NextLink
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-bold text-[var(--accent-ai)] mt-1 hover:underline"
                      >
                        View all 7 services →
                      </NextLink>
                    </div>
                  )}

                  {mobileSubSection === "solutions" && (
                    <div className="flex flex-col gap-1.5">
                      {SOLUTIONS_ITEMS.map((sol) => (
                        <NextLink
                          key={sol.title}
                          href={sol.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1 text-xs text-slate-700 hover:text-[var(--accent-ai)] font-medium"
                        >
                          • {sol.title}
                        </NextLink>
                      ))}
                      <NextLink
                        href="/solutions"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-bold text-[var(--accent-ai)] mt-1 hover:underline"
                      >
                        View all solutions →
                      </NextLink>
                    </div>
                  )}

                  {mobileSubSection === "industries" && (
                    <div className="flex flex-col gap-1.5">
                      {INDUSTRIES_ITEMS.map((ind) => (
                        <NextLink
                          key={ind.title}
                          href={ind.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1 text-xs text-slate-700 hover:text-[var(--accent-ai)] font-medium"
                        >
                          • {ind.title}
                        </NextLink>
                      ))}
                      <NextLink
                        href="/industries"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-bold text-[var(--accent-ai)] mt-1 hover:underline"
                      >
                        Explore all industries →
                      </NextLink>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Direct Mobile Links: Products, Work, About */}
            <NextLink
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Products</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Work</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>About</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            {/* Secondary Mobile Resources Link (§24) */}
            <div className="pt-2">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1 font-mono">
                Resources &amp; Tools
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                <NextLink
                  href="/estimate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800"
                >
                  Project Estimator
                </NextLink>
                <NextLink
                  href="/ideas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800"
                >
                  Ideas &amp; R&amp;D
                </NextLink>
                <NextLink
                  href="/labs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800"
                >
                  Labs
                </NextLink>
              </div>
            </div>
          </div>

          {/* Mobile Bottom CTA (§25) */}
          <div className="pt-6 border-t border-slate-200 mt-6">
            <NextLink
              href="/contact?intent=project"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-[var(--accent-green)] text-[#071B3B] text-sm font-bold shadow-sm hover:bg-[#00ea83] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#071B3B]" />
              </button>
            </NextLink>
          </div>
        </div>
      )}
    </>
  );
};

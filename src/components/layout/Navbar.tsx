"use client";

import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  Menu,
  X,
  ArrowRight,
  Cpu,
  Sparkles,
  Database,
  Layers,
  ChevronDown,
  Lightbulb,
  FlaskConical,
  Calculator,
} from "lucide-react";
import { gsap } from "@/lib/gsap";

interface NavDropdownItem {
  title: string;
  desc: string;
  href: string;
  iconAsset: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
}

const SOLUTIONS_DROPDOWN: NavDropdownItem[] = [
  {
    title: "Custom AI & GenAI",
    desc: "Turn enterprise knowledge into cited answers & operational AI pipelines.",
    href: "/solutions/custom-ai",
    iconAsset: "/icons/solution_icon_1.svg",
    fallbackIcon: Sparkles,
  },
  {
    title: "AI Agents & Automation",
    desc: "Automate complex multi-step workflows & document processing.",
    href: "/solutions/ai-agents",
    iconAsset: "/icons/solution_icon_2.svg",
    fallbackIcon: Cpu,
  },
  {
    title: "Enterprise Software",
    desc: "Custom platforms, portals, and operational backbones built for your exact process.",
    href: "/solutions/enterprise-software",
    iconAsset: "/icons/solution_icon_3.svg",
    fallbackIcon: Database,
  },
  {
    title: "Web & Mobile Platforms",
    desc: "Fast, resilient client-facing and operational apps engineered to scale.",
    href: "/solutions/web-mobile-platforms",
    iconAsset: "/icons/solution_icon_4.svg",
    fallbackIcon: Layers,
  },
];

interface ResourceDropdownItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const RESOURCES_DROPDOWN: ResourceDropdownItem[] = [
  {
    title: "Ideas & R&D",
    desc: "Pre-engineered industry concepts & operational architectures ready for pilot.",
    href: "/ideas",
    icon: Lightbulb,
  },
  {
    title: "Labs & Open Source",
    desc: "Internal technical benchmarks, experiments, and developer utilities.",
    href: "/labs",
    icon: FlaskConical,
  },
  {
    title: "Project Estimator",
    desc: "Interactive tool to calculate estimated budgets, timelines, and team shape.",
    href: "/estimate",
    icon: Calculator,
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "resources" | null>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const pathname = usePathname();
  const solutionsBtnRef = useRef<HTMLButtonElement>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // GSAP Interaction-triggered Staggered Pop-in for Solutions Dropdown
  useEffect(() => {
    if (activeDropdown === "solutions" && solutionsMenuRef.current) {
      if (typeof window !== "undefined") {
        const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (isReducedMotion) return;

        const items = solutionsMenuRef.current.querySelectorAll(".solution-pop-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { scale: 0.7, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.32,
              ease: "back.out(1.7)",
              stagger: 0.06,
              clearProps: "transform,opacity",
            }
          );
        }
      }
    }
  }, [activeDropdown]);

  // Handle keyboard events for dropdown triggers
  const handleTriggerKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    menu: "solutions" | "resources"
  ) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setActiveDropdown(menu);
      setTimeout(() => {
        const menuEl = menu === "solutions" ? solutionsMenuRef.current : resourcesMenuRef.current;
        const firstLink = menuEl?.querySelector<HTMLAnchorElement>("a[role='menuitem']");
        firstLink?.focus();
      }, 50);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setActiveDropdown(null);
    }
  };

  // Handle keyboard navigation inside dropdown menus
  const handleMenuKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    menu: "solutions" | "resources"
  ) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setActiveDropdown(null);
      const btnRef = menu === "solutions" ? solutionsBtnRef.current : resourcesBtnRef.current;
      btnRef?.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const menuEl = menu === "solutions" ? solutionsMenuRef.current : resourcesMenuRef.current;
      if (!menuEl) return;
      const items = Array.from(menuEl.querySelectorAll<HTMLAnchorElement>("a[role='menuitem']"));
      const currentIndex = items.indexOf(document.activeElement as HTMLAnchorElement);
      if (e.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
      } else {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex]?.focus();
      }
    }
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-[var(--nav-h)] flex items-center bg-[var(--header-bg)] border-b border-white/10 shadow-sm",
          isScrolled ? "shadow-md shadow-black/30 backdrop-blur-md" : ""
        )}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Brand Wordmark: Two-line stacked typography (ATC / Digital Labs) */}
          <NextLink
            href="/"
            className="flex flex-col text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--header-bg)] rounded-sm transition-transform duration-200 ease-out hover:scale-105 active:scale-95 origin-left"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white leading-tight group-hover:text-[var(--accent-green)] transition-colors">
              ATC
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 leading-tight">
              Digital Labs
            </span>
          </NextLink>

          {/* Desktop Navigation Links: Sitting directly on the bar with generous spacing, no enclosing pills */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                ref={solutionsBtnRef}
                type="button"
                aria-expanded={activeDropdown === "solutions"}
                aria-haspopup="menu"
                aria-controls="solutions-dropdown"
                onKeyDown={(e) => handleTriggerKeyDown(e, "solutions")}
                className={clsx(
                  "inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold tracking-wider uppercase cursor-pointer select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                  pathname.startsWith("/solutions") || activeDropdown === "solutions"
                    ? "text-[var(--accent-green)]"
                    : "text-white/90 hover:text-[var(--accent-green)]"
                )}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200 ease-out",
                    activeDropdown === "solutions" && "rotate-180 text-[var(--accent-green)]"
                  )}
                />
              </button>

              {/* Continuous hover container (pt-2.5 eliminates the gap) */}
              {activeDropdown === "solutions" && (
                <div
                  ref={solutionsMenuRef}
                  id="solutions-dropdown"
                  role="menu"
                  aria-label="Solutions"
                  onKeyDown={(e) => handleMenuKeyDown(e, "solutions")}
                  className="absolute top-full left-0 pt-2.5 w-[620px] z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                >
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(21,42,50,0.22),0_10px_30px_-10px_rgba(0,0,0,0.1)] text-[var(--text-primary)]">
                    <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-100">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                        aria-hidden="true"
                      >
                        Engineering Solutions &amp; Capabilities
                      </span>
                      <NextLink
                        href="/solutions"
                        role="menuitem"
                        className="text-xs font-semibold text-[var(--accent-ai)] hover:underline inline-flex items-center gap-1"
                      >
                        <span>All Solutions</span>
                        <ArrowRight className="w-3 h-3" />
                      </NextLink>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {SOLUTIONS_DROPDOWN.map((sol) => (
                        <NextLink
                          key={sol.title}
                          href={sol.href}
                          role="menuitem"
                          className="solution-pop-item flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 hover:bg-emerald-50/70 border border-slate-200/60 hover:border-[var(--accent-green)]/40 transition-all duration-200 group focus:bg-emerald-50/70 focus:border-[var(--accent-green)] focus:outline-none"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[var(--accent-green)] transition-all mt-0.5">
                            <img
                              src={sol.iconAsset}
                              alt=""
                              width={36}
                              height={36}
                              className="w-7 h-7 object-contain transition-transform duration-200 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[var(--accent-ai)] transition-colors flex items-center justify-between">
                              <span>{sol.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent-green)]" />
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 mt-1 font-normal">
                              {sol.desc}
                            </p>
                          </div>
                        </NextLink>
                      ))}
                    </div>

                    {/* Outcome footer line */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                      <span className="text-slate-600">
                        Not sure what you need?
                      </span>
                      <NextLink
                        href="/contact"
                        role="menuitem"
                        className="text-[var(--accent-ai)] font-semibold hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Start a Project</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                      </NextLink>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links with Pop Hover Effect */}
            <NextLink
              href="/products"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider uppercase select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                pathname.startsWith("/products")
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Products
            </NextLink>

            <NextLink
              href="/work"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider uppercase select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                pathname.startsWith("/work")
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Work
            </NextLink>

            <NextLink
              href="/industries"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider uppercase select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                pathname.startsWith("/industries")
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Industries
            </NextLink>

            <NextLink
              href="/process"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider uppercase select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                pathname.startsWith("/process")
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Process
            </NextLink>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                ref={resourcesBtnRef}
                type="button"
                aria-expanded={activeDropdown === "resources"}
                aria-haspopup="menu"
                aria-controls="resources-dropdown"
                onKeyDown={(e) => handleTriggerKeyDown(e, "resources")}
                className={clsx(
                  "inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold tracking-wider uppercase cursor-pointer select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                  pathname.startsWith("/ideas") ||
                    pathname.startsWith("/labs") ||
                    pathname.startsWith("/estimate") ||
                    activeDropdown === "resources"
                    ? "text-[var(--accent-green)]"
                    : "text-white/90 hover:text-[var(--accent-green)]"
                )}
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200 ease-out",
                    activeDropdown === "resources" && "rotate-180 text-[var(--accent-green)]"
                  )}
                />
              </button>

              {/* Continuous hover container */}
              {activeDropdown === "resources" && (
                <div
                  ref={resourcesMenuRef}
                  id="resources-dropdown"
                  role="menu"
                  aria-label="Resources"
                  onKeyDown={(e) => handleMenuKeyDown(e, "resources")}
                  className="absolute top-full left-0 pt-2.5 w-[380px] z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                >
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(21,42,50,0.22),0_10px_30px_-10px_rgba(0,0,0,0.1)] text-[var(--text-primary)]">
                    <div
                      className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 px-2 pb-2 mb-1 border-b border-slate-100"
                      aria-hidden="true"
                    >
                      Ideas, Tools &amp; Labs
                    </div>
                    <div className="grid gap-1.5 pt-1">
                      {RESOURCES_DROPDOWN.map((res) => {
                        const Icon = res.icon;
                        return (
                          <NextLink
                            key={res.title}
                            href={res.href}
                            role="menuitem"
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group focus:bg-slate-50 focus:outline-none"
                          >
                            <div className="p-2 rounded-lg bg-slate-100/80 border border-slate-200/80 text-[var(--accent-ai)] group-hover:bg-[var(--accent-green)] group-hover:text-[#152A32] group-hover:border-[var(--accent-green)] transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[var(--accent-ai)] transition-colors">
                                {res.title}
                              </div>
                              <div className="text-[11px] text-slate-600 line-clamp-1 mt-0.5 font-normal">
                                {res.desc}
                              </div>
                            </div>
                          </NextLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Direct Link */}
            <NextLink
              href="/contact"
              className={clsx(
                "text-xs lg:text-sm font-semibold tracking-wider uppercase select-none transition-transform duration-200 ease-out hover:scale-108 active:scale-95 origin-center",
                pathname === "/contact"
                  ? "text-[var(--accent-green)]"
                  : "text-white/90 hover:text-[var(--accent-green)]"
              )}
            >
              Contact
            </NextLink>
          </nav>

          {/* Desktop CTA Action with Pop Hover Effect */}
          <div className="hidden md:flex items-center gap-3">
            <NextLink href="/estimate">
              <button
                type="button"
                className="text-xs font-semibold px-3.5 py-1.5 rounded-[var(--radius-btn)] bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 transition-transform duration-200 ease-out hover:scale-108 active:scale-95 cursor-pointer shadow-xs"
              >
                Estimator
              </button>
            </NextLink>
            <NextLink href="/contact">
              <button
                type="button"
                className="text-xs font-bold px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--accent-green)] text-[#152A32] shadow-sm hover:bg-[#00ea83] transition-transform duration-200 ease-out hover:scale-108 active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#152A32]" />
              </button>
            </NextLink>
          </div>

          {/* Mobile Menu Hamburger */}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[var(--nav-h)] z-30 bg-white/98 backdrop-blur-xl border-t border-slate-200 p-6 flex flex-col justify-between md:hidden animate-in fade-in-50 duration-200 overflow-y-auto shadow-2xl">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Navigation Menu
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-slate-200/80">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 flex items-center justify-between cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-slate-500 transition-transform duration-200",
                    mobileSolutionsOpen && "rotate-180 text-[var(--accent-green)]"
                  )}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="pb-3 pl-2 flex flex-col gap-2.5">
                  {SOLUTIONS_DROPDOWN.map((sol) => (
                    <NextLink
                      key={sol.title}
                      href={sol.href}
                      className="py-1.5 px-2 rounded-lg text-sm text-slate-700 hover:text-[var(--accent-ai)] hover:bg-slate-50 flex items-center gap-3"
                    >
                      <img
                        src={sol.iconAsset}
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain shrink-0"
                      />
                      <span className="font-medium">{sol.title}</span>
                    </NextLink>
                  ))}
                  <NextLink
                    href="/solutions"
                    className="py-1 text-xs text-[var(--accent-ai)] font-semibold flex items-center gap-1 mt-1 pl-2"
                  >
                    <span>View All Solutions →</span>
                  </NextLink>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <NextLink
              href="/products"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Products</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/work"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Work</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/industries"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Industries</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/process"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Process</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            {/* Mobile Resources Accordion */}
            <div className="border-b border-slate-200/80">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 flex items-center justify-between cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-slate-500 transition-transform duration-200",
                    mobileResourcesOpen && "rotate-180 text-[var(--accent-green)]"
                  )}
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pb-3 pl-3 flex flex-col gap-2">
                  {RESOURCES_DROPDOWN.map((res) => (
                    <NextLink
                      key={res.title}
                      href={res.href}
                      className="py-1.5 text-sm text-slate-600 hover:text-[var(--accent-ai)] flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[var(--accent-green)]" />
                      <span>{res.title}</span>
                    </NextLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Link */}
            <NextLink
              href="/contact"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent-ai)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <NextLink href="/estimate" className="w-full">
              <button
                type="button"
                className="w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-semibold hover:bg-slate-100 transition-all cursor-pointer"
              >
                Calculate Estimate
              </button>
            </NextLink>
            <NextLink href="/contact" className="w-full">
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-[var(--accent-green)] text-[#152A32] text-sm font-bold shadow-sm hover:bg-[#00ea83] transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1 text-[#152A32]" />
              </button>
            </NextLink>
          </div>
        </div>
      )}
    </>
  );
};

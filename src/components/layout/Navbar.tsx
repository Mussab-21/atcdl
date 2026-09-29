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
import { Button } from "@/components/ui/Button";

interface NavDropdownItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SOLUTIONS_DROPDOWN: NavDropdownItem[] = [
  {
    title: "Custom AI & GenAI",
    desc: "Turn enterprise knowledge into cited answers & operational AI pipelines.",
    href: "/solutions/custom-ai",
    icon: Sparkles,
  },
  {
    title: "AI Agents & Automation",
    desc: "Automate complex multi-step workflows & document processing.",
    href: "/solutions/ai-agents",
    icon: Cpu,
  },
  {
    title: "Enterprise Software",
    desc: "Custom platforms, portals, and operational backbones built for your exact process.",
    href: "/solutions/enterprise-software",
    icon: Database,
  },
  {
    title: "Web & Mobile Platforms",
    desc: "Fast, resilient client-facing and operational apps engineered to scale.",
    href: "/solutions/web-mobile-platforms",
    icon: Layers,
  },
];

const RESOURCES_DROPDOWN: NavDropdownItem[] = [
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-[var(--nav-h)] flex items-center bg-[var(--header-bg)] border-b border-black/10 shadow-sm",
          isScrolled ? "shadow-md shadow-blue-950/20 backdrop-blur-md" : ""
        )}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Brand Wordmark: Two-line stacked typography (ATC / Digital Labs) */}
          <NextLink
            href="/"
            className="flex flex-col text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--header-bg)] rounded-sm"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white leading-tight group-hover:opacity-90 transition-opacity">
              ATC
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-white/90 leading-tight">
              Digital Labs
            </span>
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5 bg-[var(--header-pill-bg)] border border-[var(--header-pill-border)] px-2.5 py-1.5 rounded-full backdrop-blur-sm shadow-xs"
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
                  "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full cursor-pointer",
                  pathname.startsWith("/solutions") || activeDropdown === "solutions"
                    ? "text-white bg-white/25 shadow-xs"
                    : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
                )}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    activeDropdown === "solutions" && "rotate-180 text-white"
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
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(0,110,220,0.18),0_10px_30px_-10px_rgba(0,0,0,0.08)] text-[var(--text-primary)]">
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
                        className="text-xs font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                      >
                        <span>All Solutions</span>
                        <ArrowRight className="w-3 h-3" />
                      </NextLink>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {SOLUTIONS_DROPDOWN.map((sol) => {
                        const Icon = sol.icon;
                        return (
                          <NextLink
                            key={sol.title}
                            href={sol.href}
                            role="menuitem"
                            className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-blue-50/80 border border-slate-200/60 hover:border-blue-200 transition-all duration-200 group focus:bg-blue-50/80 focus:border-blue-300 focus:outline-none"
                          >
                            <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-all shadow-xs shrink-0 mt-0.5">
                              <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                                <span>{sol.title}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
                              </div>
                              <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 mt-1 font-normal">
                                {sol.desc}
                              </p>
                            </div>
                          </NextLink>
                        );
                      })}
                    </div>

                    {/* Outcome footer line */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                      <span className="text-slate-600">
                        Not sure what you need?
                      </span>
                      <NextLink
                        href="/contact"
                        role="menuitem"
                        className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Start a Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </NextLink>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <NextLink
              href="/products"
              className={clsx(
                "px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/products")
                  ? "text-white bg-white/25 shadow-xs"
                  : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
              )}
            >
              Products
            </NextLink>

            <NextLink
              href="/work"
              className={clsx(
                "px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/work")
                  ? "text-white bg-white/25 shadow-xs"
                  : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
              )}
            >
              Work
            </NextLink>

            <NextLink
              href="/industries"
              className={clsx(
                "px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/industries")
                  ? "text-white bg-white/25 shadow-xs"
                  : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
              )}
            >
              Industries
            </NextLink>

            <NextLink
              href="/process"
              className={clsx(
                "px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/process")
                  ? "text-white bg-white/25 shadow-xs"
                  : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
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
                  "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full cursor-pointer",
                  pathname.startsWith("/ideas") ||
                    pathname.startsWith("/labs") ||
                    pathname.startsWith("/estimate") ||
                    activeDropdown === "resources"
                    ? "text-white bg-white/25 shadow-xs"
                    : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
                )}
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    activeDropdown === "resources" && "rotate-180 text-white"
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
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(0,110,220,0.18),0_10px_30px_-10px_rgba(0,0,0,0.08)] text-[var(--text-primary)]">
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
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all group focus:bg-blue-50/70 focus:outline-none"
                          >
                            <div className="p-2 rounded-lg bg-slate-100/80 border border-slate-200/80 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[var(--accent)] transition-colors">
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
                "px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full",
                pathname === "/contact"
                  ? "text-white bg-white/25 shadow-xs"
                  : "text-[var(--header-text-secondary)] hover:text-white hover:bg-white/15"
              )}
            >
              Contact
            </NextLink>
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <NextLink href="/estimate">
              <Button
                size="sm"
                variant="secondary"
                className="text-xs hidden lg:inline-flex bg-white/15 text-white border-white/30 hover:bg-white/25 shadow-xs font-medium"
              >
                <span>Estimator</span>
              </Button>
            </NextLink>
            <NextLink href="/contact">
              <Button
                size="sm"
                variant="secondary"
                className="text-xs font-bold !bg-white !text-[#0055B3] hover:!bg-blue-50 shadow-sm !border-transparent hover:shadow transition-all"
              >
                <span className="text-[#0055B3]">Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#0055B3]" />
              </Button>
            </NextLink>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white rounded-lg border border-white/30 bg-white/15 hover:bg-white/25 cursor-pointer transition-colors"
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
                className="w-full text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 flex items-center justify-between cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-slate-500 transition-transform duration-200",
                    mobileSolutionsOpen && "rotate-180 text-[var(--accent)]"
                  )}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="pb-3 pl-3 flex flex-col gap-2">
                  {SOLUTIONS_DROPDOWN.map((sol) => (
                    <NextLink
                      key={sol.title}
                      href={sol.href}
                      className="py-1.5 text-sm text-slate-600 hover:text-[var(--accent)] flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[var(--accent)]" />
                      <span>{sol.title}</span>
                    </NextLink>
                  ))}
                  <NextLink
                    href="/solutions"
                    className="py-1 text-xs text-[var(--accent)] font-semibold flex items-center gap-1 mt-1"
                  >
                    <span>View All Solutions →</span>
                  </NextLink>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <NextLink
              href="/products"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Products</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/work"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Work</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/industries"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Industries</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            <NextLink
              href="/process"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Process</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>

            {/* Mobile Resources Accordion */}
            <div className="border-b border-slate-200/80">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 flex items-center justify-between cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-slate-500 transition-transform duration-200",
                    mobileResourcesOpen && "rotate-180 text-[var(--accent)]"
                  )}
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pb-3 pl-3 flex flex-col gap-2">
                  {RESOURCES_DROPDOWN.map((res) => (
                    <NextLink
                      key={res.title}
                      href={res.href}
                      className="py-1.5 text-sm text-slate-600 hover:text-[var(--accent)] flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[var(--accent)]" />
                      <span>{res.title}</span>
                    </NextLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Link */}
            <NextLink
              href="/contact"
              className="text-base font-semibold text-slate-900 hover:text-[var(--accent)] py-3 border-b border-slate-200/80 flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </NextLink>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <NextLink href="/estimate" className="w-full">
              <Button size="lg" variant="secondary" className="w-full text-sm font-semibold">
                <span>Calculate Estimate</span>
              </Button>
            </NextLink>
            <NextLink href="/contact" className="w-full">
              <Button size="lg" variant="primary" className="w-full text-sm font-semibold">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
          </div>
        </div>
      )}
    </>
  );
};

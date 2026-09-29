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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-[var(--nav-h)] flex items-center bg-[var(--header-bg)] border-b border-white/10",
          isScrolled ? "shadow-lg shadow-black/20 backdrop-blur-md" : ""
        )}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Brand Logo */}
          <NextLink
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-offset-2"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center group-hover:border-[var(--header-accent)] transition-colors shadow-sm">
              <span className="text-[var(--header-accent)] font-bold text-sm tracking-wider">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-[0.2em] text-[var(--header-text)]">
                ATCDL
              </span>
              <span className="text-[9px] tracking-widest text-[var(--header-accent)] uppercase -mt-0.5">
                DIGITAL LAB
              </span>
            </div>
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm"
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
                  "flex items-center gap-1 px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-full cursor-pointer",
                  pathname.startsWith("/solutions") || activeDropdown === "solutions"
                    ? "text-[var(--header-text)] bg-white/10"
                    : "text-[var(--header-text-secondary)] hover:text-[var(--header-text)]"
                )}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    activeDropdown === "solutions" && "rotate-180 text-[var(--header-accent)]"
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
                  className="absolute top-full left-0 pt-2.5 w-[420px] z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                >
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] shadow-[0_16px_48px_rgba(0,0,0,0.15)] text-[var(--text-primary)]">
                    <div
                      className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] px-3 py-1 mb-1"
                      aria-hidden="true"
                    >
                      Core Engineering Practices
                    </div>
                    <div className="grid gap-1">
                      {SOLUTIONS_DROPDOWN.map((sol) => {
                        const Icon = sol.icon;
                        return (
                          <NextLink
                            key={sol.title}
                            href={sol.href}
                            role="menuitem"
                            className="flex items-start gap-3 p-2.5 rounded-[var(--radius-sm)] hover:bg-[var(--bg-soft-blue)] transition-all group focus:bg-[var(--bg-soft-blue)] focus:outline-none"
                          >
                            <div className="p-2 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                                {sol.title}
                              </div>
                              <div className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                                {sol.desc}
                              </div>
                            </div>
                          </NextLink>
                        );
                      })}
                    </div>
                    {/* Outcome footer line */}
                    <div className="mt-2 pt-2.5 border-t border-[var(--border)] flex items-center justify-between px-3 text-xs">
                      <span className="text-[var(--text-secondary)]">
                        Not sure what you need?
                      </span>
                      <NextLink
                        href="/contact"
                        role="menuitem"
                        className="text-[var(--accent)] font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>Start a Project</span>
                        <ArrowRight className="w-3 h-3" />
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
                "px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/products")
                  ? "text-[var(--header-text)] bg-white/10"
                  : "text-[var(--header-text-secondary)] hover:text-[var(--header-text)]"
              )}
            >
              Products
            </NextLink>

            <NextLink
              href="/work"
              className={clsx(
                "px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/work")
                  ? "text-[var(--header-text)] bg-white/10"
                  : "text-[var(--header-text-secondary)] hover:text-[var(--header-text)]"
              )}
            >
              Work
            </NextLink>

            <NextLink
              href="/industries"
              className={clsx(
                "px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/industries")
                  ? "text-[var(--header-text)] bg-white/10"
                  : "text-[var(--header-text-secondary)] hover:text-[var(--header-text)]"
              )}
            >
              Industries
            </NextLink>

            <NextLink
              href="/process"
              className={clsx(
                "px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-full",
                pathname.startsWith("/process")
                  ? "text-[var(--header-text)] bg-white/10"
                  : "text-[var(--header-text-secondary)] hover:text-[var(--header-text)]"
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
                  "flex items-center gap-1 px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-full cursor-pointer",
                  pathname.startsWith("/ideas") ||
                    pathname.startsWith("/labs") ||
                    pathname.startsWith("/estimate") ||
                    activeDropdown === "resources"
                    ? "text-[var(--header-text)] bg-white/10"
                    : "text-[var(--header-text-secondary)] hover:text-[var(--header-text)]"
                )}
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    activeDropdown === "resources" && "rotate-180 text-[var(--header-accent)]"
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
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] shadow-[0_16px_48px_rgba(0,0,0,0.15)] text-[var(--text-primary)]">
                    <div
                      className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] px-3 py-1 mb-1"
                      aria-hidden="true"
                    >
                      Ideas, Tools &amp; Labs
                    </div>
                    <div className="grid gap-1">
                      {RESOURCES_DROPDOWN.map((res) => {
                        const Icon = res.icon;
                        return (
                          <NextLink
                            key={res.title}
                            href={res.href}
                            role="menuitem"
                            className="flex items-start gap-3 p-2.5 rounded-[var(--radius-sm)] hover:bg-[var(--bg-soft-blue)] transition-all group focus:bg-[var(--bg-soft-blue)] focus:outline-none"
                          >
                            <div className="p-2 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                                {res.title}
                              </div>
                              <div className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">
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
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <NextLink href="/estimate">
              <Button
                size="sm"
                variant="secondary"
                className="text-xs hidden lg:inline-flex bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <span>Estimator</span>
              </Button>
            </NextLink>
            <NextLink href="/contact">
              <Button size="sm" variant="primary" className="text-xs font-medium">
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </NextLink>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white rounded-lg border border-white/20 bg-white/10 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[var(--nav-h)] z-30 bg-[var(--bg-primary)]/98 backdrop-blur-xl border-t border-[var(--border)] p-6 flex flex-col justify-between md:hidden animate-in fade-in-50 duration-200 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1">
              Menu
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-[var(--border)]/60">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-3 flex items-center justify-between cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-[var(--text-muted)] transition-transform duration-200",
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
                      className="py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[var(--accent)]" />
                      <span>{sol.title}</span>
                    </NextLink>
                  ))}
                  <NextLink
                    href="/solutions"
                    className="py-1 text-xs text-[var(--accent)] font-medium flex items-center gap-1 mt-1"
                  >
                    <span>View All Solutions →</span>
                  </NextLink>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <NextLink
              href="/products"
              className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-3 border-b border-[var(--border)]/60 flex items-center justify-between"
            >
              <span>Products</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </NextLink>

            <NextLink
              href="/work"
              className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-3 border-b border-[var(--border)]/60 flex items-center justify-between"
            >
              <span>Work</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </NextLink>

            <NextLink
              href="/industries"
              className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-3 border-b border-[var(--border)]/60 flex items-center justify-between"
            >
              <span>Industries</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </NextLink>

            <NextLink
              href="/process"
              className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-3 border-b border-[var(--border)]/60 flex items-center justify-between"
            >
              <span>Process</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </NextLink>

            {/* Mobile Resources Accordion */}
            <div className="border-b border-[var(--border)]/60">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-3 flex items-center justify-between cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-[var(--text-muted)] transition-transform duration-200",
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
                      className="py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[var(--accent)]" />
                      <span>{res.title}</span>
                    </NextLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border)] flex flex-col gap-3">
            <NextLink href="/estimate" className="w-full">
              <Button size="lg" variant="secondary" className="w-full text-sm font-medium">
                <span>Calculate Estimate</span>
              </Button>
            </NextLink>
            <NextLink href="/contact" className="w-full">
              <Button size="lg" variant="primary" className="w-full text-sm font-medium">
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

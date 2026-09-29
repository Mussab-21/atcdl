"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X, ArrowRight, Cpu, Sparkles, Database, Layers, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Pitch Lab", href: "/ideas" },
  { label: "Process", href: "/process" },
];

const SOLUTIONS_DROPDOWN = [
  {
    title: "Custom AI & GenAI",
    desc: "Private copilots, RAG architectures, and custom LLM inference pipelines.",
    href: "/solutions/custom-ai",
    icon: Sparkles,
  },
  {
    title: "AI Agents & Automation",
    desc: "Autonomous workflow agents, document OCR, and human-in-the-loop pipelines.",
    href: "/solutions/ai-agents",
    icon: Cpu,
  },
  {
    title: "Enterprise Software",
    desc: "Mission-critical internal systems, ERP/CRM integration, and approval engines.",
    href: "/solutions/enterprise-software",
    icon: Database,
  },
  {
    title: "Web & Mobile Platforms",
    desc: "High-performance digital products engineered for enterprise scale.",
    href: "/solutions/web-mobile-platforms",
    icon: Layers,
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-[var(--nav-h)] flex items-center",
          isScrolled
            ? "bg-[rgba(7,10,15,0.85)] backdrop-blur-md border-b border-[var(--border)] shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Brand Logo */}
          <NextLink
            href="/"
            aria-label="NIMBRIX — Go to homepage"
            className="flex items-center gap-3 group focus-visible:ring-offset-2"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors shadow-sm">
              <span className="text-[var(--accent)] font-mono font-bold text-sm tracking-wider">
                N
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-sm tracking-[0.2em] text-[var(--text-primary)]">
                NIMBRIX
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[var(--accent-ai)] uppercase -mt-0.5">
                ENGINEERING
              </span>
            </div>
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[var(--bg-secondary)]/60 border border-[var(--border)]/80 px-3 py-1.5 rounded-full backdrop-blur-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={solutionsOpen}
                      aria-haspopup="menu"
                      aria-controls="solutions-dropdown"
                      className={clsx(
                        "flex items-center gap-1 px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-full",
                        isActive || solutionsOpen
                          ? "text-[var(--text-primary)] bg-[rgba(255,255,255,0.06)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={clsx(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          solutionsOpen && "rotate-180 text-[var(--accent)]"
                        )}
                      />
                    </button>

                    {/* Solutions Mega Dropdown */}
                    {solutionsOpen && (
                      <div
                        id="solutions-dropdown"
                        role="menu"
                        aria-label="Solutions"
                        className="absolute top-full left-0 mt-2 w-96 p-3 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] shadow-2xl shadow-black/80 animate-in fade-in-50 zoom-in-95 duration-150"
                      >
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 py-1 mb-1" aria-hidden="true">
                          Core Capabilities
                        </div>
                        <div className="grid gap-1">
                          {SOLUTIONS_DROPDOWN.map((sol) => {
                            const Icon = sol.icon;
                            return (
                              <NextLink
                                key={sol.title}
                                href={sol.href}
                                role="menuitem"
                                className="flex items-start gap-3 p-2.5 rounded-[var(--radius-sm)] hover:bg-[rgba(77,141,255,0.06)] hover:border-[var(--border)] transition-all group"
                              >
                                <div className="p-2 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                                    {sol.title}
                                  </div>
                                  <div className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">
                                    {sol.desc}
                                  </div>
                                </div>
                              </NextLink>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NextLink
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-full",
                    isActive
                      ? "text-[var(--text-primary)] bg-[rgba(255,255,255,0.06)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {item.label}
                </NextLink>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <NextLink href="/estimate">
              <Button size="sm" variant="secondary" className="font-mono text-xs hidden lg:inline-flex">
                <span>Estimator</span>
              </Button>
            </NextLink>
            <NextLink href="/contact">
              <Button size="sm" variant="primary" className="font-mono text-xs">
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
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[var(--nav-h)] z-30 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-t border-[var(--border)] p-6 flex flex-col justify-between md:hidden animate-in fade-in-50 duration-200 overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-1">
              Navigation
            </div>
            {NAV_ITEMS.map((item) => (
              <NextLink
                key={item.label}
                href={item.href}
                className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)]/50 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
              </NextLink>
            ))}
            <NextLink
              href="/estimate"
              className="text-base font-medium text-[var(--accent-ai)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)]/50 flex items-center justify-between"
            >
              <span>Project Estimator</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </NextLink>
            <NextLink
              href="/labs"
              className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)]/50 flex items-center justify-between"
            >
              <span>R&amp;D Labs &amp; Open Source</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </NextLink>
          </div>

          <div className="pt-6 border-t border-[var(--border)]">
            <NextLink href="/contact" className="w-full">
              <Button size="lg" className="w-full font-mono text-sm">
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

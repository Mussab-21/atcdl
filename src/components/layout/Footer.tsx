import React from "react";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] py-16 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <NextLink href="/" className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center">
                <span className="text-[var(--accent)] font-mono font-bold text-xs">
                  N
                </span>
              </div>
              <span className="font-mono font-bold text-sm tracking-[0.2em] text-[var(--text-primary)]">
                NIMBRIX
              </span>
            </NextLink>
            <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
              Technology engineering for high-complexity businesses. We build
              production AI pipelines, enterprise workflow software, and autonomous agents.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              <span className="text-xs font-mono text-[var(--text-muted)]">
                System Status: All Engines Operational
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)]">
              Solutions
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
              <li>
                <NextLink href="/solutions/custom-ai" className="hover:text-[var(--text-primary)] transition-colors">
                  Custom AI & GenAI
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/ai-agents" className="hover:text-[var(--text-primary)] transition-colors">
                  AI Agents & Automation
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/enterprise-software" className="hover:text-[var(--text-primary)] transition-colors">
                  Enterprise Software
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/web-mobile-platforms" className="hover:text-[var(--text-primary)] transition-colors">
                  Web & Mobile Platforms
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)]">
              Flagship Products
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
              <li>
                <NextLink href="/products/nimbrix-docs" className="hover:text-[var(--accent-ai)] transition-colors flex items-center gap-1">
                  <span>NimbrixDocs</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--warning)]">
                    Prototype
                  </span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/nimbrix-ask" className="hover:text-[var(--accent-ai)] transition-colors flex items-center gap-1">
                  <span>NimbrixAsk</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--warning)]">
                    Prototype
                  </span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/nimbrix-agents" className="hover:text-[var(--accent-ai)] transition-colors flex items-center gap-1">
                  <span>NimbrixAgents</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--warning)]">
                    Prototype
                  </span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/products" className="hover:text-[var(--text-primary)] transition-colors">
                  View All Products →
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)]">
              Company
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
              <li>
                <NextLink href="/about" className="hover:text-[var(--text-primary)] transition-colors">
                  About Nimbrix
                </NextLink>
              </li>
              <li>
                <NextLink href="/work" className="hover:text-[var(--text-primary)] transition-colors">
                  Engineering Case Studies
                </NextLink>
              </li>
              <li>
                <NextLink href="/trust" className="hover:text-[var(--text-primary)] transition-colors">
                  Trust & Security
                </NextLink>
              </li>
              <li>
                <NextLink href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
                  Privacy Policy
                </NextLink>
              </li>
              <li>
                <NextLink href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
                  Terms of Service
                </NextLink>
              </li>
              <li>
                <a
                  href="https://github.com/Mussab-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 text-[var(--text-secondary)]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <div>
            © {new Date().getFullYear()} NIMBRIX Technology Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <NextLink href="/design-system" className="hover:text-[var(--accent)] font-mono">
              /design-system [Dev]
            </NextLink>
            <NextLink href="/privacy" className="hover:text-[var(--text-secondary)]">
              Privacy
            </NextLink>
            <NextLink href="/terms" className="hover:text-[var(--text-secondary)]">
              Terms
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

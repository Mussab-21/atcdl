import React from "react";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#162D50] bg-[var(--accent-deep)] text-[#B9C7DC] py-16 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <NextLink href="/" className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-[var(--header-accent)] font-bold text-xs">
                  A
                </span>
              </div>
              <span className="font-bold text-sm tracking-[0.2em] text-white">
                ATCDL
              </span>
            </NextLink>
            <p className="text-sm text-[#8DA0BA] max-w-sm leading-relaxed">
              ATCDL (Azaan Trading Contracting Digital Lab) is a digital engineering company
              that builds AI systems, business software, automation platforms, and digital products
              for organizations with complex operational needs.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              <span className="text-xs text-[#8DA0BA]">
                System Status: All Production Clusters Operational
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <nav aria-labelledby="footer-solutions-heading" className="flex flex-col gap-3">
            <h3 id="footer-solutions-heading" className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/solutions/custom-ai" className="hover:text-white transition-colors">
                  Custom AI &amp; GenAI
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/ai-agents" className="hover:text-white transition-colors">
                  AI Agents &amp; Automation
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/enterprise-software" className="hover:text-white transition-colors">
                  Enterprise Software
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/web-mobile-platforms" className="hover:text-white transition-colors">
                  Web &amp; Mobile Platforms
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* Products Column */}
          <nav aria-labelledby="footer-products-heading" className="flex flex-col gap-3">
            <h3 id="footer-products-heading" className="text-xs font-semibold uppercase tracking-wider text-white">
              Engineered Products
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/products/atcdl-docs" className="hover:text-[var(--header-accent)] transition-colors flex items-center gap-1">
                  <span>ATCDL Docs</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 border border-white/20 text-[#FDB022]">
                    Prototype
                  </span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-ask" className="hover:text-[var(--header-accent)] transition-colors flex items-center gap-1">
                  <span>ATCDL Ask</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 border border-white/20 text-[#FDB022]">
                    Prototype
                  </span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-agents" className="hover:text-[var(--header-accent)] transition-colors flex items-center gap-1">
                  <span>ATCDL Agents</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 border border-white/20 text-[#FDB022]">
                    Prototype
                  </span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/products" className="hover:text-white transition-colors">
                  View All Products →
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* Company & Legal Column */}
          <nav aria-labelledby="footer-company-heading" className="flex flex-col gap-3">
            <h3 id="footer-company-heading" className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/about" className="hover:text-white transition-colors">
                  About ATCDL
                </NextLink>
              </li>
              <li>
                <NextLink href="/work" className="hover:text-white transition-colors">
                  Engineering Portfolio
                </NextLink>
              </li>
              <li>
                <NextLink href="/trust" className="hover:text-white transition-colors">
                  Trust &amp; Security
                </NextLink>
              </li>
              <li>
                <NextLink href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </NextLink>
              </li>
              <li>
                <NextLink href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </NextLink>
              </li>
              <li>
                <a
                  href="https://github.com/Mussab-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#B9C7DC]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#162D50] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8DA0BA] gap-4">
          <div>
            © {new Date().getFullYear()} ATCDL (Azaan Trading Contracting Digital Lab). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <NextLink href="/design-system" className="hover:text-[var(--header-accent)] font-mono">
              /design-system [Dev]
            </NextLink>
            <NextLink href="/privacy" className="hover:text-white">
              Privacy
            </NextLink>
            <NextLink href="/terms" className="hover:text-white">
              Terms
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

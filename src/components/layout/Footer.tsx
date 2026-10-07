import React from "react";
import NextLink from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#162D50] bg-[var(--accent-deep)] text-[#B9C7DC] py-14 sm:py-16 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-12">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <NextLink
              href="/"
              className="flex flex-col text-left leading-none group w-fit"
            >
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[var(--accent-green)] transition-colors">
                ATC Digital
              </span>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white/90 group-hover:text-[var(--accent-green)] transition-colors mt-0.5">
                Labs
              </span>
            </NextLink>

            <p className="text-xs text-[#8DA0BA] max-w-sm leading-relaxed">
              ATC Digital Labs engineers technology for complex businesses — building AI systems, enterprise software, system integrations, and managed operations.
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
              <span className="text-[11px] font-mono text-[#8DA0BA]">
                AI · Software · Connected systems
              </span>
            </div>

            <div className="pt-2">
              <NextLink
                href="/contact?intent=project"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-green)] text-[#071B3B] text-xs font-bold hover:bg-[#00ea83] transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#071B3B]" />
              </NextLink>
            </div>
          </div>

          {/* WHAT WE DO Column (2 cols) */}
          <nav aria-labelledby="footer-whatwedo-heading" className="md:col-span-2 flex flex-col gap-3">
            <h3 id="footer-whatwedo-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              What We Do
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/services" className="hover:text-white transition-colors">
                  Services Overview
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions" className="hover:text-white transition-colors">
                  Business Solutions
                </NextLink>
              </li>
              <li>
                <NextLink href="/industries" className="hover:text-white transition-colors">
                  Industry Intelligence
                </NextLink>
              </li>
              <li>
                <NextLink href="/services#ai" className="hover:text-white transition-colors text-[#8DA0BA]">
                  AI &amp; Intelligent Systems
                </NextLink>
              </li>
              <li>
                <NextLink href="/services#software" className="hover:text-white transition-colors text-[#8DA0BA]">
                  Software Development
                </NextLink>
              </li>
              <li>
                <NextLink href="/services#integration" className="hover:text-white transition-colors text-[#8DA0BA]">
                  System Integration
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* PRODUCTS Column (2 cols) */}
          <nav aria-labelledby="footer-products-heading" className="md:col-span-2 flex flex-col gap-3">
            <h3 id="footer-products-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Products
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/products" className="hover:text-white transition-colors font-medium text-[var(--accent-green)]">
                  All Products →
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-docs" className="hover:text-white transition-colors">
                  ATCDL Docs
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-ask" className="hover:text-white transition-colors">
                  ATCDL Ask
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-agents" className="hover:text-white transition-colors">
                  ATCDL Agents
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-talent" className="hover:text-white transition-colors">
                  ATCDL Talent
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-flow" className="hover:text-white transition-colors">
                  ATCDL Flow
                </NextLink>
              </li>
              <li>
                <NextLink href="/products/atcdl-ops" className="hover:text-white transition-colors">
                  ATCDL Ops
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* COMPANY Column (2 cols) */}
          <nav aria-labelledby="footer-company-heading" className="md:col-span-2 flex flex-col gap-3">
            <h3 id="footer-company-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Company
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/work" className="hover:text-white transition-colors">
                  What We&apos;ve Built (Work)
                </NextLink>
              </li>
              <li>
                <NextLink href="/about" className="hover:text-white transition-colors">
                  About Us
                </NextLink>
              </li>
              <li>
                <NextLink href="/contact" className="hover:text-white transition-colors">
                  Contact
                </NextLink>
              </li>
              <li>
                <NextLink href="/trust" className="hover:text-white transition-colors">
                  Trust &amp; Security
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* RESOURCES Column (2 cols) */}
          <nav aria-labelledby="footer-resources-heading" className="md:col-span-2 flex flex-col gap-3">
            <h3 id="footer-resources-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Resources
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/estimate" className="hover:text-white transition-colors text-[var(--accent-green)] font-medium">
                  Project Estimator
                </NextLink>
              </li>
              <li>
                <NextLink href="/ideas" className="hover:text-white transition-colors">
                  Ideas &amp; Blueprints
                </NextLink>
              </li>
              <li>
                <NextLink href="/labs" className="hover:text-white transition-colors">
                  Labs &amp; Open Source
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

        {/* Bottom Line — Clean & Professional */}
        <div className="border-t border-[#162D50] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8DA0BA] gap-4">
          <div>
            &copy; {new Date().getFullYear()} ATC Digital Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <NextLink href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </NextLink>
            <NextLink href="/terms" className="hover:text-white transition-colors">
              Terms
            </NextLink>
            <NextLink href="/trust" className="hover:text-white transition-colors">
              Security Practices
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#162D50] bg-[var(--accent-deep)] text-[#B9C7DC] py-14 sm:py-16 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-12">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <NextLink
              href="/"
              className="flex items-center group w-fit"
              aria-label="ATC Technix"
            >
              <Image
                src="/atc-technix-logo.png"
                alt="ATC Technix"
                width={150}
                height={50}
                className="h-10 w-auto object-contain shrink-0"
              />
            </NextLink>

            <p className="text-xs text-[#8DA0BA] max-w-sm leading-relaxed">
              ATC Technix engineers technology for complex businesses — building AI systems, enterprise software, system integrations, and managed operations.
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

          {/* NAVIGATION Column (2 cols) */}
          <nav aria-labelledby="footer-nav-heading" className="md:col-span-2 flex flex-col gap-3">
            <h3 id="footer-nav-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Pages
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/" className="hover:text-white transition-colors">
                  Home
                </NextLink>
              </li>
              <li>
                <NextLink href="/about" className="hover:text-white transition-colors">
                  About Us
                </NextLink>
              </li>
              <li>
                <NextLink href="/services" className="hover:text-white transition-colors">
                  Our Services
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions" className="hover:text-white transition-colors">
                  Solutions
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* OUR SERVICES Column (3 cols) */}
          <nav aria-labelledby="footer-services-heading" className="md:col-span-3 flex flex-col gap-3">
            <h3 id="footer-services-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/services" className="hover:text-white transition-colors font-medium text-[var(--accent-green)]">
                  Services Overview →
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
              <li>
                <NextLink href="/services#cloud" className="hover:text-white transition-colors text-[#8DA0BA]">
                  Cloud &amp; Infrastructure
                </NextLink>
              </li>
              <li>
                <NextLink href="/services#cybersecurity" className="hover:text-white transition-colors text-[#8DA0BA]">
                  Cybersecurity &amp; Managed Ops
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* SOLUTIONS Column (3 cols) */}
          <nav aria-labelledby="footer-solutions-heading" className="md:col-span-3 flex flex-col gap-3">
            <h3 id="footer-solutions-heading" className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#B9C7DC]">
              <li>
                <NextLink href="/solutions" className="hover:text-white transition-colors font-medium text-[var(--accent-green)]">
                  All Solutions →
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions#custom-ai" className="hover:text-white transition-colors">
                  Custom AI &amp; Knowledge
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions#ai-agents" className="hover:text-white transition-colors">
                  Autonomous AI Agents
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions#enterprise-software" className="hover:text-white transition-colors">
                  Enterprise Software
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions#web-mobile-platforms" className="hover:text-white transition-colors">
                  Web &amp; Mobile Platforms
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Line — Legal Links */}
        <div className="border-t border-[#162D50] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8DA0BA] gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/atc-logo.png"
              alt="ATC Technix"
              width={26}
              height={26}
              className="h-6 w-6 rounded object-contain shrink-0"
            />
            <span>
              &copy; {new Date().getFullYear()} ATC Technix. All rights reserved.
            </span>
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

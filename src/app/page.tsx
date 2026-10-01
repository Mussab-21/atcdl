import React from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { SOLUTIONS, PROJECTS } from "@/content/data";
import { PRODUCTS_LAB_DATA } from "@/content/products-lab-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { HeroBusinessFlowVisual } from "@/components/sections/HeroBusinessFlowVisual";
import { RotatingHeadlineWord } from "@/components/motion/RotatingHeadlineWord";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { OperationalBottleneckVisual } from "@/components/sections/OperationalBottleneckVisual";
import { ProductsCarousel } from "@/components/sections/ProductsCarousel";
import { SolutionsHorizontalSelector } from "@/components/sections/SolutionsHorizontalSelector";
import { MethodologyInteractiveRail } from "@/components/sections/MethodologyInteractiveRail";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ATC Digital Labs | AI, Software & Enterprise Technology Solutions",
  description:
    "ATC Digital Labs builds AI systems, enterprise software, integrations and managed technology solutions for organizations with complex operational needs.",
};

export default function Home() {
  const featuredProducts = PRODUCTS_LAB_DATA.products.slice(0, 4);
  const featuredWork = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-4 sm:py-8">
      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="container-custom section-peek-snap pt-2 pb-4 sm:pt-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span>ATC DIGITAL LABS</span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.04]">
                We engineer technology for{" "}
                <RotatingHeadlineWord
                  words={[
                    "complex businesses.",
                    "growing enterprises.",
                    "operational scale.",
                    "mission-critical teams.",
                  ]}
                />
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                ATC Digital Labs helps organizations automate operations, connect
                systems, and make better use of their data — through AI, custom
                software, and managed technology services.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <NextLink href="/contact?intent=project">
                  <Button size="lg" variant="primary" className="text-sm font-semibold">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </NextLink>

                <NextLink href="/services">
                  <Button size="lg" variant="outline" className="text-sm font-semibold">
                    <span>Explore Our Services</span>
                  </Button>
                </NextLink>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-6 pt-2 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)]" />
                  Production-Grade Delivery
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                  Private Cloud &amp; On-Premise Ready
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Column — Business Flow Visual */}
          <div className="lg:col-span-5 lg:pt-1">
            <HeroBusinessFlowVisual />
          </div>
        </div>
      </section>

      {/* ── 2. CAPABILITY STRIP ────────────────────────────────────────────── */}
      <CapabilityStrip />

      {/* ── 3. WHAT WE DO: THE 7 CORE SERVICES ────────────────────────────── */}
      <HomeServicesSection />

      {/* ── 4. WHY ATC DIGITAL LABS: BEFORE → AFTER ──────────────────────── */}
      <section className="container-custom py-4 sm:py-6">
        <OperationalBottleneckVisual />
      </section>

      {/* ── 5. SOLUTIONS SECTION ──────────────────────────────────────────── */}
      <section className="container-custom section-peek-snap py-4">
        <SolutionsHorizontalSelector solutions={SOLUTIONS} />
      </section>

      {/* ── 6. SELECTED WORK — Problem → Solution → Result ───────────────── */}
      <section className="container-custom py-4">
        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-semibold text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  Selected Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  What we have actually built
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  Real problems solved. Real software delivered.
                </p>
              </div>
              <NextLink href="/work">
                <Button variant="ghost" size="sm" className="text-xs font-medium">
                  <span>View Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project) => (
              <Reveal key={project.slug}>
                <Card
                  variant="interactive"
                  className="p-6 flex flex-col justify-between h-full gap-5 bg-white border-[var(--border)] shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                        {project.category}
                      </span>
                      <Badge status={project.status} size="sm" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      <NextLink
                        href={`/work/${project.slug}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {project.title}
                      </NextLink>
                    </h3>

                    {/* Problem → Solution (business-first) */}
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {project.problem}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                    <NextLink
                      href={`/work/${project.slug}`}
                      className="text-[var(--accent)] font-medium hover:underline"
                    >
                      See how we built it →
                    </NextLink>
                    {project.githubUrl && (
                      <span className="text-[var(--text-muted)] font-mono text-[10px]">
                        Open Source
                      </span>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="w-full bg-[#F8FAFC] border-y border-[var(--border)] py-12 sm:py-18">
        <div className="container-custom flex flex-col gap-8 sm:gap-10">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Understand. Design. Build. Integrate. Operate.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                We work in clear stages with defined milestones. You always know what
                is being built, when it will be ready, and how it fits your business.
              </p>
            </div>
          </Reveal>

          <MethodologyInteractiveRail />
        </div>
      </section>

      {/* ── 8. OUR PRODUCTS ──────────────────────────────────────────────── */}
      <section className="container-custom section-peek-snap py-4">
        <div className="p-6 sm:p-8 lg:p-10 rounded-[var(--radius-lg)] bg-white border border-[var(--border)] shadow-xs flex flex-col gap-6 sm:gap-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
              <div>
                <div className="text-xs font-semibold text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  ATC Digital Labs Products
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Software we have created
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
                  Intelligent software products built to solve real operational
                  problems — available for deployment, demo, and customization.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <NextLink href="/contact?intent=demo">
                  <Button size="sm" variant="outline" className="text-xs font-medium whitespace-nowrap">
                    <span>Book a Demo</span>
                  </Button>
                </NextLink>
                <NextLink href="/products">
                  <Button size="sm" variant="primary" className="text-xs font-medium whitespace-nowrap">
                    <span>View All Products</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </NextLink>
              </div>
            </div>
          </Reveal>

          <ProductsCarousel products={featuredProducts} />
        </div>
      </section>

      {/* ── 9. FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="container-custom section-peek-snap py-8 sm:py-12">
        <Reveal>
          <div className="p-8 sm:p-12 lg:p-14 rounded-[var(--radius-lg)] bg-[var(--accent-deep)] text-white border border-[#162D50] shadow-2xl flex flex-col items-center text-center gap-8">
            <div className="max-w-2xl flex flex-col items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-green)] font-semibold font-mono">
                ATC DIGITAL LABS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Ready to simplify your operations?
              </h2>
              <p className="text-sm sm:text-base text-[#B9C7DC] leading-relaxed">
                Tell us about your challenge. We will show you a clear path from
                where you are to where you need to be.
              </p>
            </div>

            {/* Three entry paths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left">
              <NextLink
                href="/contact?intent=project&service=AI+%26+Intelligent+Systems"
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-green)] hover:bg-white/10 transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs text-[var(--accent-green)] uppercase font-semibold flex items-center justify-between">
                  <span>Apply AI</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[#B9C7DC]">
                  Automate decisions, extract documents, and build intelligent workflows.
                </div>
              </NextLink>

              <NextLink
                href="/contact?intent=project&service=Software+Development"
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-green)] hover:bg-white/10 transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs text-[var(--accent-green)] uppercase font-semibold flex items-center justify-between">
                  <span>Build Software</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[#B9C7DC]">
                  Custom platforms, portals, and operational tools for your exact needs.
                </div>
              </NextLink>

              <NextLink
                href="/contact?intent=project&service=System+Integration"
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-green)] hover:bg-white/10 transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs text-[var(--accent-green)] uppercase font-semibold flex items-center justify-between">
                  <span>Connect Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[#B9C7DC]">
                  Eliminate data silos and connect your existing software and teams.
                </div>
              </NextLink>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
              <NextLink href="/contact?intent=project" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto text-sm px-8 font-semibold"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </NextLink>

              <NextLink href="/contact?intent=consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-sm px-6 font-semibold bg-white/5 text-white border-white/20 hover:bg-white/10"
                >
                  <span>Request Consultation</span>
                </Button>
              </NextLink>

              <NextLink href="/estimate" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto text-sm px-6 font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <Calculator className="w-4 h-4 mr-2 text-[var(--accent-green)]" />
                  <span>Estimate Your Project</span>
                </Button>
              </NextLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

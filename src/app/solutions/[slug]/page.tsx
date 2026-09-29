import React from "react";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import { SOLUTIONS } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Coins,
  Shield,
  Layers,
  Sparkles,
  HelpCircle,
  Check,
  ChevronRight,
} from "lucide-react";
import { CustomAIVisual } from "@/components/solutions/visuals/CustomAIVisual";
import { AIAgentsVisual } from "@/components/solutions/visuals/AIAgentsVisual";
import { EnterpriseSystemsVisual } from "@/components/solutions/visuals/EnterpriseSystemsVisual";
import { WebMobileVisual } from "@/components/solutions/visuals/WebMobileVisual";
import { PackageVisual } from "@/components/solutions/visuals/PackageVisual";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SOLUTIONS.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.title} | ATCDL Engineering`,
    description: solution.businessHeadline || solution.tagline,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  // Helper to render the corresponding visual for the solution
  const renderHeroVisual = () => {
    switch (solution.slug) {
      case "custom-ai":
        return <CustomAIVisual className="h-full min-h-[340px]" />;
      case "ai-agents":
        return <AIAgentsVisual className="h-full min-h-[340px]" />;
      case "enterprise-software":
        return <EnterpriseSystemsVisual className="h-full min-h-[340px]" />;
      case "web-mobile-platforms":
      default:
        return <WebMobileVisual className="h-full min-h-[340px]" />;
    }
  };

  const deliverableItems = solution.deliverableItems || [];
  const packages = solution.packages || [];
  const howItWorksSteps = solution.howItWorksSteps || [];
  const idealFor = solution.idealFor || [];
  const comparisonFeatures = solution.comparisonFeatures || [];

  return (
    <div className="container-custom py-10 sm:py-16 flex flex-col gap-16 sm:gap-24 max-w-6xl">
      {/* 1. HERO SECTION (Outcome-First: Business Problem & Visual Story) */}
      <section className="flex flex-col gap-8">
        {/* Breadcrumb nav */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <NextLink
            href="/solutions"
            className="text-[var(--accent)] hover:underline uppercase"
          >
            ← All Solutions
          </NextLink>
          <span className="text-[var(--text-muted)]">/</span>
          <span className="text-[var(--text-muted)] uppercase">
            {solution.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Business Headline, Explanation, CTAs (7 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span>{solution.title}</span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                {solution.businessHeadline || solution.title}
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {solution.description}
              </p>
            </Reveal>

            {/* Quick Scope/Investment snapshot */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 py-2 border-y border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[var(--accent-ai)]" />
                  <span>
                    Typical Delivery: <strong className="text-[var(--text-primary)]">{solution.typicalTimeline}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-[var(--accent-green)]" />
                  <span>
                    Entry Tier: <strong className="text-[var(--text-primary)]">From PKR 150k / $8k</strong>
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Primary & Secondary CTAs */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <NextLink href={`/contact?solution=${solution.slug}`}>
                  <Button size="lg" variant="primary" className="text-xs font-semibold">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </NextLink>

                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="text-xs font-medium">
                    <span>See How It Works</span>
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Animated System Visual (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <Reveal>
              {renderHeroVisual()}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. "WHAT YOU ACTUALLY GET" SECTION (Deliverables, not tech jargon) */}
      <section className="flex flex-col gap-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ai)] mb-1">
              Tangible Outcomes
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              What You Actually Get
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              When you hire ATCDL, you receive concrete, production-ready deliverables built specifically for your organization — not abstract research reports.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deliverableItems.map((item, idx) => (
            <Reveal key={idx}>
              <Card
                variant="interactive"
                className="p-6 h-full flex flex-col justify-between gap-4 bg-white border-[var(--border)] hover:border-[var(--accent-green)] transition-all"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent-ai)]">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50/60 p-2 rounded border border-emerald-200/60">
                  {item.metricOrDetail}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. THREE PACKAGE SYSTEM (Starter, Growth, Scale with transparent dual pricing) */}
      <section className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ai)] mb-1">
                Engagement Scopes
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Three Transparent Packages
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
                Choose the scope that matches your current operational maturity. From a focused first deployment to an enterprise-wide core transformation.
              </p>
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)] bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
              PKR for Domestic SMEs &bull; USD for Global Enterprise
            </div>
          </div>
        </Reveal>

        {/* Package Cards: Desktop 3-column / Mobile horizontal scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Reveal key={pkg.id}>
              <Card
                variant={pkg.isPopular ? "elevated" : "default"}
                className={`p-6 sm:p-7 flex flex-col justify-between h-full gap-6 bg-white relative transition-all ${
                  pkg.isPopular
                    ? "border-2 border-[var(--accent-green)] shadow-md"
                    : "border-[var(--border)]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 right-6 bg-[var(--accent-green)] text-[var(--header-bg)] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {/* Package Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-medium text-[var(--accent-ai)] mt-0.5">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Animated / Conceptual Package Micro-visual */}
                  <PackageVisual type={pkg.visualType} name={pkg.name} />

                  {/* Scope & Designed For */}
                  <div className="flex flex-col gap-1.5 text-xs">
                    <span className="font-mono text-slate-500 text-[10px] uppercase font-semibold">
                      Designed for:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {pkg.designedFor}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-500">Pakistan SME:</span>
                      <strong className="text-[var(--text-primary)] font-mono">{pkg.pricingPkr}</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs border-t border-slate-200/80 pt-1.5">
                      <span className="font-mono text-slate-500">International:</span>
                      <strong className="text-emerald-700 font-mono">{pkg.pricingUsd}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-200/80 pt-1.5">
                      <span>Timeline:</span>
                      <span>{pkg.timeline}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold">
                      Included in Scope:
                    </span>
                    <ul className="space-y-2">
                      {pkg.features.map((feat, fi) => (
                        <li key={fi} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[var(--border)]">
                  <NextLink
                    href={`/contact?solution=${solution.slug}&package=${pkg.id}`}
                    className="w-full block"
                  >
                    <Button
                      size="md"
                      variant={pkg.isPopular ? "primary" : "outline"}
                      className="w-full text-xs font-semibold justify-center"
                    >
                      <span>Discuss {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </NextLink>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. COMPACT PACKAGE COMPARISON TABLE */}
      {comparisonFeatures.length > 0 && (
        <section className="flex flex-col gap-6">
          <Reveal>
            <div className="max-w-xl">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Compare Package Capabilities
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                A visual summary of how capabilities progress across the three tiers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-[var(--border)] text-slate-700 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="p-3.5 font-bold">Capability / Feature</th>
                    <th className="p-3.5 text-center font-bold">{packages[0]?.name || "Starter"}</th>
                    <th className="p-3.5 text-center font-bold text-emerald-700 bg-emerald-50/50">
                      {packages[1]?.name || "Workspace"}
                    </th>
                    <th className="p-3.5 text-center font-bold">{packages[2]?.name || "Command"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparisonFeatures.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 font-medium text-[var(--text-primary)]">
                        {row.name}
                      </td>
                      <td className="p-3.5 text-center">
                        {row.starter ? (
                          <Check className="w-4 h-4 text-[var(--accent-green)] mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-mono">—</span>
                        )}
                      </td>
                      <td className="p-3.5 text-center bg-emerald-50/30">
                        {row.growth ? (
                          <Check className="w-4 h-4 text-[var(--accent-green)] mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-mono">—</span>
                        )}
                      </td>
                      <td className="p-3.5 text-center">
                        {row.scale ? (
                          <Check className="w-4 h-4 text-[var(--accent-green)] mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-mono">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>
      )}

      {/* 5. "HOW IT WORKS" VISUAL (Numbered 4-step progressive timeline) */}
      <section id="how-it-works" className="flex flex-col gap-8 scroll-mt-24">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ai)] mb-1">
              Delivery Roadmap
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              How We Build Your System
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              We work in clear, verified sprints with strict milestone deliverables. You see working software early and often.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorksSteps.map((st, sIdx) => (
            <Reveal key={sIdx}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col gap-3 h-full relative">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-mono font-bold text-[var(--accent-ai)]">
                    {st.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {st.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {st.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. "THIS IS FOR YOU IF..." & "WHAT WE DON'T DO" */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Ideal Customer Checklist (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-8 rounded-xl bg-white border border-[var(--border)] shadow-xs">
          <Reveal>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ai)] mb-1">
                Operational Fit
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                This Is For You If...
              </h3>
            </div>
          </Reveal>

          <ul className="space-y-3.5">
            {idealFor.map((point, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: What We Don't Do & Consultative Positioning (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-xl bg-slate-900 border border-slate-800 text-white shadow-xs">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>WHAT WE DON&apos;T DO</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {solution.whatWeDontDo}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono">
              Complete Client Code Ownership &bull; Standard Open-Source Stacks &bull; Zero Vendor Lock-in
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <NextLink href={`/contact?solution=${solution.slug}`} className="w-full block">
              <Button size="md" variant="primary" className="w-full text-xs font-semibold justify-center">
                <span>Talk to an Architect</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
          </div>
        </div>
      </section>

      {/* 7. CONSULTATIVE CLOSING BOX */}
      <Reveal>
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-slate-50 border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="text-xs font-mono text-[var(--accent-ai)] uppercase font-semibold">
              Need Guidance?
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Not sure which option fits your organization?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Tell us what your business is trying to improve or automate. We will review your workflow and map the problem to the most cost-effective package.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <NextLink href="/estimate">
              <Button size="md" variant="outline" className="text-xs font-medium whitespace-nowrap">
                <span>Run Interactive Estimator</span>
              </Button>
            </NextLink>
            <NextLink href={`/contact?solution=${solution.slug}`}>
              <Button size="md" variant="primary" className="text-xs font-semibold whitespace-nowrap">
                <span>Talk to ATCDL</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
          </div>
        </div>
      </Reveal>

      {/* 8. CROSS NAVIGATION STRIP */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)] text-xs font-mono">
        <NextLink href="/work" className="text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-1">
          <span>View Verified Client Codebases</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
        <NextLink href="/products" className="text-[var(--accent-ai)] hover:underline flex items-center gap-1">
          <span>Explore Modular Flagship Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
      </div>
    </div>
  );
}

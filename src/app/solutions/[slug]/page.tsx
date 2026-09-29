import React from "react";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import { SOLUTIONS, Solution } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, CheckCircle2, Shield, Layers, Clock, DollarSign } from "lucide-react";

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
    title: `${solution.title} | NIMBRIX Engineering`,
    description: solution.tagline,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="container-custom py-16 flex flex-col gap-20 max-w-4xl">
      {/* Solution Header */}
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-10">
          <div className="flex items-center gap-2">
            <NextLink
              href="/solutions"
              className="text-xs font-mono text-[var(--accent)] hover:underline uppercase"
            >
              ← All Solutions
            </NextLink>
            <span className="text-[var(--text-muted)] text-xs">/</span>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
              {solution.eyebrow}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {solution.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {solution.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--accent-ai)]" />
              <span>Horizon: <strong className="text-[var(--text-primary)]">{solution.typicalTimeline}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-[var(--success)]" />
              <span>Investment: <strong className="text-[var(--text-primary)]">{solution.typicalScope}</strong></span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Description & Problem Context */}
      <Reveal>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            Engineering Strategy &amp; Business Rationale
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {solution.description}
          </p>
        </section>
      </Reveal>

      {/* Capabilities & Architectural Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal>
          <Card variant="default" className="p-6 sm:p-8 h-full flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Core Technical Capabilities
              </h3>
            </div>
            <ul className="space-y-3">
              {solution.capabilities.map((cap, i) => (
                <li key={i} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-ai)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="default" className="p-6 sm:p-8 h-full flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--accent-ai)]" />
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Architectural Blueprint
              </h3>
            </div>
            <ul className="space-y-3">
              {solution.architecturePoints.map((arch, i) => (
                <li key={i} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[var(--accent)] shrink-0 mt-0.5">[{i + 1}]</span>
                  <span className="leading-relaxed">{arch}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>

      {/* Deliverables */}
      <Reveal>
        <section className="p-6 sm:p-8 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-4">
          <h3 className="text-base font-semibold text-[var(--text-primary)] font-mono uppercase tracking-wider">
            Standard Engagement Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {solution.deliverables.map((del, i) => (
              <div key={i} className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                <span className="text-xs font-medium text-[var(--text-primary)]">{del}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CTA Box */}
      <Reveal>
        <div className="p-8 sm:p-10 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Ready to architect this system?
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md">
              Send us your technical requirements or current system bottlenecks. We’ll schedule an architectural review call.
            </p>
          </div>

          <NextLink href={`/contact?type=${solution.slug}`}>
            <Button size="lg" variant="primary" className="whitespace-nowrap">
              <span>Start Project Brief</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </NextLink>
        </div>
      </Reveal>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IDEAS, PRODUCTS, SOLUTIONS } from "@/content/data";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  Workflow,
  Cpu,
  Layers,
  Calendar,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ noindex?: string }>;
}

export async function generateStaticParams() {
  return IDEAS.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : {};
  const idea = IDEAS.find((i) => i.slug === slug);
  if (!idea) return {};

  return {
    title: `${idea.title} — Pitch Lab Concept | NIMBRIX`,
    description: idea.concept,
    // Per-prospect noindex: share /ideas/slug?noindex=1 for private prospect links
    robots: sp?.noindex === "1" ? { index: false, follow: false } : undefined,
  };
}

export default async function IdeaDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : {};
  const idea = IDEAS.find((i) => i.slug === slug);

  if (!idea) {
    notFound();
  }

  const mappedProduct = PRODUCTS.find((p) => p.slug === idea.relevantProduct);
  const mappedSolution = SOLUTIONS.find((s) => s.slug === idea.relevantSolution);

  return (
    <div className="container-custom py-16 sm:py-24 max-w-4xl">
      {/* Navigation Breadcrumb */}
      <Reveal>
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/ideas"
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Pitch Lab</span>
          </Link>
          <span className="text-xs text-[var(--text-muted)]">/</span>
          <span className="text-xs font-mono text-[var(--text-secondary)]">{idea.industry}</span>
        </div>
      </Reveal>

      {/* Header */}
      <Reveal>
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="ai">PITCH LAB BLUEPRINT</Badge>
            <Badge variant="outline" className="font-mono text-xs">
              Industry: {idea.industry}
            </Badge>
            <Badge variant="outline" className="text-xs text-[var(--warning)] border-[var(--warning)]/30">
              {idea.status}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[var(--text-primary)]">
            {idea.title}
          </h1>

          <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            {idea.concept}
          </p>
        </div>
      </Reveal>

      {/* Projected Value — clearly labelled as illustrative */}
      <Reveal>
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-start gap-3 mb-12">
          <Lightbulb className="w-5 h-5 shrink-0 text-[var(--warning)] mt-0.5" />
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--warning)] mb-1">
              Illustrative Projection · Concept Stage{sp?.noindex === "1" ? " · Private Prospect View" : ""}
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{idea.potentialValue}</p>
          </div>
        </div>
      </Reveal>

      {/* The Operational Bottleneck & The Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Reveal>
          <Card variant="elevated" className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--error)] mb-2">
                The Operational Bottleneck
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                Why legacy workflows fail
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {idea.problem}
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="elevated" className="p-6 h-full border-[var(--accent)]/30 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2">
                The Engineered System
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                NIMBRIX Architecture Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {idea.solution}
              </p>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* How it Works / Workflow Architecture */}
      <Reveal>
        <Card variant="elevated" className="p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Workflow className="w-5 h-5 text-[var(--accent)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Workflow &amp; Data Pipeline Architecture
            </h2>
          </div>

          <div className="space-y-4">
            {idea.howItWorks.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <div className="w-7 h-7 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* Suggested 4-Phase Roadmap */}
      {idea.roadmap && (
        <Reveal>
          <Card variant="elevated" className="p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-[var(--accent)]" />
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Proposed 6–10 Week Pilot Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {idea.roadmap.map((stage, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] mb-1">
                    Phase 0{idx + 1}
                  </div>
                  <div className="font-semibold text-xs text-[var(--text-primary)]">
                    {stage}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      )}

      {/* Cross-linking: Mapped Product & Solution */}
      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {mappedProduct && (
            <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Mapped Reusable Asset
              </div>
              <div className="font-bold text-sm text-[var(--text-primary)] mb-2">
                {mappedProduct.name} ({mappedProduct.tagline})
              </div>
              <Link
                href={`/products/${mappedProduct.slug}`}
                className="text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>View Product Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {mappedSolution && (
            <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Related Core Solution
              </div>
              <div className="font-bold text-sm text-[var(--text-primary)] mb-2">
                {mappedSolution.title}
              </div>
              <Link
                href={`/solutions/${mappedSolution.slug}`}
                className="text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Explore Solution Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </Reveal>

      {/* Bottom Conversion Box */}
      <Reveal>
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-elevated)] border border-[var(--accent)]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Pilot this blueprint</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              We validate data schemas, API integration points, and security constraints in a 10-day discovery sprint.
            </p>
          </div>
          <Link href={`/contact?idea=${idea.slug}`}>
            <Button variant="primary" size="lg" className="shrink-0">
              <span>Initiate Pilot Brief</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

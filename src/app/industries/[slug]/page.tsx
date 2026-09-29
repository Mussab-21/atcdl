import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES, PRODUCTS, IDEAS, PROJECTS } from "@/content/data";
import {
  Building2,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `${industry.name} — Industry Engineering | ATCDL`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const mappedProducts = PRODUCTS.filter((p) => industry.relevantProducts.includes(p.slug));
  const mappedIdeas = IDEAS.filter((i) => industry.relevantIdeas.includes(i.slug));
  const mappedProjects = PROJECTS.filter((p) => industry.relevantProjects.includes(p.slug));

  return (
    <div className="container-custom py-16 sm:py-24 max-w-4xl">
      {/* Navigation Breadcrumb */}
      <Reveal>
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/industries"
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Industries</span>
          </Link>
          <span className="text-xs text-[var(--text-muted)]">/</span>
          <span className="text-xs font-mono text-[var(--text-secondary)]">{industry.name}</span>
        </div>
      </Reveal>

      {/* Header */}
      <Reveal>
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[var(--accent)] font-semibold tracking-wider">
              {industry.eyebrow}
            </span>
            <Badge variant="outline" className="text-xs font-mono">
              Enterprise Vertical
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[var(--text-primary)]">
            {industry.name}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-[var(--text-primary)] mb-4">
            {industry.tagline}
          </p>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {industry.summary}
          </p>
        </div>
      </Reveal>

      {/* Challenges & Solutions Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Core Challenges */}
        <Reveal>
          <Card variant="elevated" className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--error)] mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>Sector Operational Friction</span>
              </div>
              <ul className="space-y-3">
                {industry.challenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="text-[var(--error)] font-bold mt-0.5">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>

        {/* Engineered Solutions */}
        <Reveal>
          <Card variant="elevated" className="p-6 h-full border-[var(--accent)]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>ATCDL Systems Strategy</span>
              </div>
              <ul className="space-y-3">
                {industry.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                    <span className="text-[var(--accent)] font-bold mt-0.5">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* Architecture Highlights */}
      <Reveal>
        <Card variant="elevated" className="p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-[var(--accent)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Infrastructure &amp; Compliance Highlights
            </h2>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-6">
            Architectural patterns configured for {industry.name} deployment standards:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {industry.architectureHighlights.map((arch, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-xs text-[var(--text-secondary)] leading-relaxed">
                <div className="font-mono text-[10px] text-[var(--text-muted)] mb-1">
                  Spec 0{idx + 1}
                </div>
                <div className="text-[var(--text-primary)] font-medium">{arch}</div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* Relevant Pitch Lab Ideas */}
      {mappedIdeas.length > 0 && (
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Pitch Lab Blueprints for {industry.name}
                </h3>
              </div>
              <Link href="/ideas" className="text-xs text-[var(--accent)] hover:underline">
                View All Concepts →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mappedIdeas.map((idea) => (
                <Card key={idea.slug} variant="elevated" className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-[10px] font-mono text-[var(--warning)] border-[var(--warning)]/30">
                        {idea.status}
                      </Badge>
                    </div>
                    <div className="font-bold text-sm text-[var(--text-primary)] mb-1">
                      {idea.title}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                      {idea.concept}
                    </p>
                  </div>
                  <Link
                    href={`/ideas/${idea.slug}`}
                    className="text-xs text-[var(--accent)] font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>View Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Relevant Products */}
      {mappedProducts.length > 0 && (
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Applicable Flagship Products
                </h3>
              </div>
              <Link href="/products" className="text-xs text-[var(--accent)] hover:underline">
                View All Products →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mappedProducts.map((prod) => (
                <div key={prod.slug} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[var(--text-primary)]">
                      {prod.name}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">{prod.tagline}</div>
                  </div>
                  <Link href={`/products/${prod.slug}`}>
                    <Button variant="outline" size="sm">
                      Inspect
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Bottom Discovery Brief CTA */}
      <Reveal>
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Build for {industry.name}</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Schedule an architectural discovery session with our engineering leads to review SLAs, compliance parameters, and project scope.
            </p>
          </div>
          <Link href={`/contact?industry=${industry.slug}`}>
            <Button variant="primary" size="lg" className="shrink-0">
              <span>Start Discovery Brief</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

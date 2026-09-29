import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IDEAS } from "@/content/data";
import { Sparkles, ArrowRight, Lightbulb, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Ideas & Blueprints — Pre-Engineered Enterprise Concepts | ATCDL",
  description:
    "Explore architectural blueprints, operational workflow designs, and technology proposals engineered by ATCDL for enterprise sectors.",
};

export default function PitchLabPage() {
  return (
    <div className="container-custom py-16 sm:py-24">
      {/* Header */}
      <Reveal>
        <div className="max-w-3xl mb-12">
          <Badge variant="ai" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>ATCDL IDEAS &amp; BLUEPRINTS</span>
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Pre-Engineered Enterprise Concepts
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            We don&apos;t wait for discovery meetings to start thinking about complex systems. Explore architectural blueprints, workflow engines, and pilot proposals designed for high-concurrency enterprise sectors.
          </p>
        </div>
      </Reveal>

      {/* Honest Status Callout */}
      <Reveal>
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[var(--text-muted)]">
            <Compass className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span>
              <strong>Rule 4 Honesty Standard:</strong> Concepts in the Pitch Lab represent pre-engineered architecture blueprints and functional design proposals. None are claimed as completed client case studies until signed into production.
            </span>
          </div>
          <Badge variant="outline" className="font-mono text-[11px] shrink-0">
            Status: Concept
          </Badge>
        </div>
      </Reveal>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {IDEAS.map((idea) => (
          <Reveal key={idea.slug}>
            <Card
              variant="elevated"
              className="p-6 sm:p-8 flex flex-col justify-between h-full border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="font-mono text-[11px] text-[var(--text-secondary)]">
                    {idea.industry}
                  </Badge>
                  <Badge variant="outline" className="text-[11px] text-[var(--warning)] border-[var(--warning)]/30">
                    {idea.status}
                  </Badge>
                </div>

                <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {idea.title}
                </h2>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {idea.concept}
                </p>

                {/* Problem & Solution Snippet */}
                <div className="space-y-3 p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-xs mb-6">
                  <div>
                    <span className="font-mono font-semibold text-[var(--text-primary)]">The Operational Bottleneck: </span>
                    <span className="text-[var(--text-muted)]">{idea.problem}</span>
                  </div>
                  <div className="pt-2 border-t border-[var(--border)]/60">
                    <span className="font-mono font-semibold text-[var(--accent)]">Engineered Blueprint: </span>
                    <span className="text-[var(--text-muted)]">{idea.solution}</span>
                  </div>
                </div>

                {/* Projected Value — labelled explicitly as illustrative */}
                <div className="text-xs font-mono mb-6 flex items-start gap-1.5 p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[var(--warning)]" />
                  <div>
                    <span className="text-[var(--warning)] uppercase tracking-widest text-[10px]">Illustrative Projection · Concept Stage</span>
                    <p className="text-[var(--text-secondary)] mt-0.5 leading-relaxed">{idea.potentialValue}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <Link
                  href={`/ideas/${idea.slug}`}
                  className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                >
                  <span>Inspect Blueprint &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/contact?idea=${idea.slug}`}
                  className="text-xs font-mono text-[var(--accent)] hover:underline"
                >
                  Pilot This →
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* CTA Box */}
      <Reveal>
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-elevated)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Have a sector-specific challenge?</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              We design custom proof-of-concept blueprints in 5 business days. Send your requirements and data parameters to engineering leadership.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/estimate">
              <Button variant="outline" size="md">
                Calculate Estimate
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="md">
                <span>Submit Brief</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

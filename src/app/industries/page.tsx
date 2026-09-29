import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/content/data";
import { Building2, ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — High-Complexity Vertical Engineering | ATCDL",
  description:
    "Production AI systems and enterprise software engineered for Telecom, Banking, Manufacturing, and Logistics operations.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="container-custom py-16 sm:py-24">
      {/* Header */}
      <Reveal>
        <div className="max-w-3xl mb-12">
          <Badge variant="ai" className="mb-4">
            <Building2 className="w-3.5 h-3.5 mr-1" />
            <span>VERTICAL SECTORS</span>
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineered for High-Complexity Industries
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            We don&apos;t build generic web templates. We engineer systems for organizations where data concurrency, regulatory compliance, legacy ERP anchors, and security isolation dictate technical viability.
          </p>
        </div>
      </Reveal>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRIES.map((ind) => (
          <Reveal key={ind.slug}>
            <Card
              variant="elevated"
              className="p-6 sm:p-8 flex flex-col justify-between h-full border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[var(--accent)] font-semibold">
                    {ind.eyebrow}
                  </span>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    Sector Architecture
                  </Badge>
                </div>

                <h2 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {ind.name}
                </h2>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {ind.summary}
                </p>

                {/* Key Challenges */}
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                    Core Operational Friction
                  </div>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {ind.challenges.slice(0, 3).map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--error)] font-bold">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Delivered */}
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--accent)]/20 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] mb-2.5">
                    ATCDL Solutions
                  </div>
                  <ul className="space-y-1.5 text-xs text-[var(--text-primary)]">
                    {ind.solutions.slice(0, 3).map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold">✓</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                >
                  <span>Explore Industry Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/contact?industry=${ind.slug}`}
                  className="text-xs font-mono text-[var(--accent)] hover:underline"
                >
                  Brief Us →
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Discovery CTA Banner */}
      <Reveal>
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-elevated)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Operating in a different regulated domain?</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Our engineering leadership reviews architectural feasibility, integration constraints, and security compliance directly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/estimate">
              <Button variant="outline" size="md">
                Project Estimator
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="md">
                <span>Start Discovery Brief</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

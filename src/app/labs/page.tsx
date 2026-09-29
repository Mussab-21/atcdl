import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LAB_EXPERIMENTS } from "@/content/data";
import { FlaskConical, ExternalLink, ArrowRight, Activity, Terminal, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Labs & Open Source R&D | NIMBRIX",
  description:
    "Internal research benchmarks, vision experiments, and event-driven automation tools engineered by the NIMBRIX team.",
};

export default function LabsPage() {
  return (
    <div className="container-custom py-16 sm:py-24">
      {/* Header */}
      <Reveal>
        <div className="max-w-3xl mb-12">
          <Badge variant="ai" className="mb-4">
            <FlaskConical className="w-3.5 h-3.5 mr-1" />
            <span>R&amp;D &amp; BENCHMARKS</span>
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineering Labs &amp; Open Source
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Before we deploy architecture into production enterprise workflows, we stress-test models, evaluate RAG retrieval algorithms, and benchmark failover resilience in internal labs.
          </p>
        </div>
      </Reveal>

      {/* Honesty Standard Banner */}
      <Reveal>
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[var(--text-muted)]">
            <Activity className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span>
              <strong>Rule 4 Honesty Standard:</strong> Labs entries represent empirical internal benchmarks, proof-of-concept prototypes, and open source utilities. All metrics listed are reproducible test results.
            </span>
          </div>
          <Badge variant="outline" className="font-mono text-[11px] shrink-0">
            Open Source &amp; Lab Benchmarks
          </Badge>
        </div>
      </Reveal>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LAB_EXPERIMENTS.map((exp) => (
          <Reveal key={exp.slug}>
            <Card
              variant="elevated"
              className="p-6 sm:p-8 flex flex-col justify-between h-full border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-[11px] font-mono text-[var(--text-secondary)]">
                    {exp.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-[11px] font-mono ${
                      exp.status === "Open Source"
                        ? "text-[var(--success)] border-[var(--success)]/30"
                        : "text-[var(--accent)] border-[var(--accent)]/30"
                    }`}
                  >
                    {exp.status}
                  </Badge>
                </div>

                <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {exp.title}
                </h2>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technical Takeaway */}
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-xs mb-6">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)] uppercase tracking-wider mb-1 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Technical Finding</span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {exp.technicalTakeaway}
                  </p>
                </div>

                {/* Empirical Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5 p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] mb-6">
                    {exp.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] font-mono text-[var(--text-muted)] truncate">
                          {m.label}
                        </div>
                        <div className="font-bold font-mono text-xs text-[var(--text-primary)] mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {exp.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Link / Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                {exp.repoUrl ? (
                  <a
                    href={exp.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)] flex items-center gap-1.5 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Inspect Repository</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[var(--text-muted)]">Internal Blueprint</span>
                )}
                <Link
                  href="/contact"
                  className="text-xs font-mono text-[var(--accent)] hover:underline"
                >
                  Request Full Report →
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Research Partnership CTA */}
      <Reveal>
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-elevated)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Want to benchmark a custom dataset?</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              We conduct private empirical evaluations for model latency, RAG hallucination rates, and edge inference viability.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="md">
              <span>Contact Lab Leads</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

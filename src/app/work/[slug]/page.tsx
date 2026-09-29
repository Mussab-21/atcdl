import React from "react";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import { PROJECTS, Project } from "@/content/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, ExternalLink, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { CaseStudyBeforeAfter } from "@/components/sections/CaseStudyBeforeAfter";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ATCDL Technical Architecture`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-custom py-16 flex flex-col gap-16 max-w-4xl">
      {/* Navigation & Header */}
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-10">
          <div className="flex items-center gap-2">
            <NextLink
              href="/work"
              className="text-xs font-mono text-[var(--accent)] hover:underline uppercase"
            >
              ← All Engineering Work
            </NextLink>
            <span className="text-[var(--text-muted)] text-xs">/</span>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
              {project.category}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h1>
            <Badge status={project.status} size="md" />
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[var(--text-muted)]">
            <div>
              Industry: <strong className="text-[var(--text-primary)]">{project.industry || "General Enterprise"}</strong>
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {/* Before / After Visual — M3 Case Study Template */}
      <Reveal>
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-2">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Before &amp; After Engineering</h2>
          </div>
          <CaseStudyBeforeAfter
            beforeHeadline="The Legacy Bottleneck"
            beforePoints={[
              project.problem,
            ]}
            afterHeadline="The ATCDL Engineering Solution"
            afterPoints={[
              project.solution,
            ]}
            metrics={[
              // Real measured outcomes from the project.
              // Add rows here when verified data is available.
              // Example: { label: "Screening time per CV", before: "15 min", after: "< 30 sec" }
              ...(project.businessValue
                ? [{ label: "Verified Business Impact", before: "Legacy process", after: project.businessValue }]
                : []),
            ]}
          />
        </section>
      </Reveal>

      {/* Business Impact & Technology Stack */}
      <Reveal>
        <section className="p-6 sm:p-8 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col gap-6">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--success)] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Outcome &amp; Impact</span>
            </h2>
            <p className="text-base text-[var(--text-primary)] font-medium leading-relaxed">
              {project.businessValue}
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Technologies &amp; Protocols
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] font-mono text-xs text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Similar Build CTA */}
      <Reveal>
        <div className="p-8 sm:p-10 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Need a similar architecture deployed?
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md">
              We customize and harden this pipeline for your proprietary enterprise environment and compliance policies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <NextLink href="/estimate">
              <Button size="lg" variant="secondary" className="font-mono text-xs whitespace-nowrap">
                <span>Run Estimator</span>
              </Button>
            </NextLink>
            <NextLink href={`/contact?ref=${project.slug}`}>
              <Button size="lg" variant="primary" className="font-mono text-xs whitespace-nowrap">
                <span>Start Project Brief</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
          </div>
        </div>
      </Reveal>

      {/* Cross Navigation Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)] text-xs font-mono">
        <NextLink href="/industries" className="text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-1">
          <span>Explore Industry Deployments</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
        <NextLink href="/ideas" className="text-[var(--accent-ai)] hover:underline flex items-center gap-1">
          <span>Inspect Pitch Lab Architecture Concepts</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>
      </div>
    </div>
  );
}

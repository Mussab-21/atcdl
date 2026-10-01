import React from "react";
import NextLink from "next/link";
import { PROJECTS, Project } from "@/content/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { ArrowRight, ExternalLink, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Engineering Portfolio & Technical Prototypes | ATC Digital Labs",
  description:
    "Review technical implementations, AI prototypes, enterprise software, and open-source integrations engineered by ATC Digital Labs.",
};

export default function WorkPage() {
  return (
    <div className="container-custom py-16 flex flex-col gap-16">
      {/* Header (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
              Verified Solutions
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              What we have actually built.
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Real problems solved. Real software delivered. Every build carries an honest
              status badge — verified architectures and working implementations, never invented
              metrics or unverifiable claims.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Projects Grid — Problem → Solution → Result */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Reveal key={project.slug}>
            <CursorGlow className="h-full">
              <Card variant="interactive" className="flex flex-col justify-between h-full p-6 gap-6 bg-white border-[var(--border)] shadow-xs hover:border-[var(--accent-green)] transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                      {project.category} // {project.industry || "Enterprise"}
                    </span>
                    <Badge status={project.status} size="sm" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                      <NextLink href={`/work/${project.slug}`}>
                        {project.title}
                      </NextLink>
                    </h2>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="flex flex-col gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col gap-1">
                      <span className="font-semibold text-slate-800 uppercase tracking-wider text-[10px]">
                        The Challenge:
                      </span>
                      <p className="text-slate-600 leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex flex-col gap-1">
                      <span className="font-semibold text-emerald-900 uppercase tracking-wider text-[10px]">
                        What We Built:
                      </span>
                      <p className="text-emerald-800 leading-relaxed line-clamp-2">
                        {project.solution}
                      </p>
                    </div>

                    {project.businessValue && (
                      <div className="text-[11px] text-[var(--text-secondary)] font-medium">
                        <strong className="text-[var(--text-primary)]">Outcome:</strong>{" "}
                        <span className="line-clamp-2">{project.businessValue}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technology.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technology.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[var(--text-muted)]">
                        +{project.technology.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <NextLink
                    href={`/work/${project.slug}`}
                    className="text-[var(--accent)] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>See how we built it</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NextLink>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 text-[11px] font-mono"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </Card>
            </CursorGlow>
          </Reveal>
        ))}
      </div>

      {/* Business Consultation CTA */}
      <Reveal>
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--accent-deep)] text-white border border-[#162D50] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[var(--accent-green)] font-semibold font-mono">
              ENGINEERED FOR YOUR OPERATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Have a similar operational challenge?
            </h3>
            <p className="text-xs sm:text-sm text-[#B9C7DC] leading-relaxed">
              Tell us about your systems and workflows. We will show you how tailored AI, custom software, or system integrations can eliminate manual friction.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <NextLink href="/contact?intent=project">
              <Button size="lg" variant="primary" className="text-sm font-semibold w-full sm:w-auto">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </NextLink>
            <NextLink href="/services">
              <Button size="lg" variant="outline" className="text-sm font-semibold w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white/10">
                <span>Explore Services</span>
              </Button>
            </NextLink>
          </div>
        </div>
      </Reveal>

      {/* GitHub Proof Banner (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-4 sm:py-6">
        <Reveal>
          <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  Looking for open codebases?
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Inspect public prototypes, models, and community automations on GitHub.
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Mussab-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="md">
                <GithubIcon className="w-4 h-4 mr-2" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-60" />
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

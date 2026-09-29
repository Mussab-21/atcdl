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
  title: "Engineering Portfolio & Technical Prototypes | ATCDL",
  description:
    "Review technical implementations, AI prototypes, enterprise software, and open-source integrations engineered by ATCDL.",
};

export default function WorkPage() {
  return (
    <div className="container-custom py-16 flex flex-col gap-16">
      {/* Header */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
            Technical Evidence
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Systems We&apos;ve Engineered.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Every build carries an honest status badge. We showcase verified code,
            working prototypes, and real architectures — never invented metrics or
            unverifiable claims.
          </p>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Reveal key={project.slug}>
            <CursorGlow className="h-full">
              <Card variant="interactive" className="flex flex-col justify-between h-full p-6 gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                      {project.category} // {project.industry}
                    </span>
                    <Badge status={project.status} size="sm" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                      <NextLink href={`/work/${project.slug}`}>
                        {project.title}
                      </NextLink>
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <NextLink
                    href={`/work/${project.slug}`}
                    className="text-[var(--accent)] font-mono flex items-center gap-1 hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NextLink>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            </CursorGlow>
          </Reveal>
        ))}
      </div>

      {/* GitHub Proof Banner */}
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
    </div>
  );
}

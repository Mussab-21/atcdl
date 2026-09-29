import React from "react";
import NextLink from "next/link";
import { SOLUTIONS } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { ArrowRight, CheckCircle2, Sparkles, Cpu, Database, Layers } from "lucide-react";

const icons = {
  "custom-ai": Sparkles,
  "ai-agents": Cpu,
  "enterprise-software": Database,
  "web-mobile-platforms": Layers,
};

export const metadata = {
  title: "Solutions & Engineering Capabilities | ATCDL",
  description:
    "Explore our four primary engineering capabilities: Custom AI & GenAI, AI Agents & Automation, Enterprise Software, and Web & Mobile Platforms.",
};

export default function SolutionsPage() {
  return (
    <div className="container-custom py-16 flex flex-col gap-20">
      {/* Header (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
              Core Engineering Practices
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Four ways we build business value.
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              We don&apos;t build generic toy demos. We engineer production-grade
              software, private intelligence systems, and automated agent fleets
              designed for enterprise compliance and high operational load.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOLUTIONS.map((sol) => {
          const Icon = icons[sol.slug as keyof typeof icons] || Sparkles;

          return (
            <Reveal key={sol.slug}>
              <CursorGlow className="h-full">
                <Card variant="interactive" className="p-8 flex flex-col justify-between h-full gap-8">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-[var(--accent-ai)]">
                        {sol.typicalTimeline}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                        {sol.eyebrow}
                      </div>
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        {sol.title}
                      </h2>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {sol.tagline}
                      </p>
                    </div>

                    <div className="border-t border-[var(--border)]/70 pt-4 flex flex-col gap-2.5">
                      <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                        Core Competencies:
                      </div>
                      <ul className="space-y-1.5">
                        {sol.capabilities.slice(0, 3).map((cap, i) => (
                          <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <div className="text-xs font-mono text-[var(--text-muted)]">
                      Typical Scope: <span className="text-[var(--text-primary)] font-medium">{sol.typicalScope}</span>
                    </div>
                    <NextLink href={`/solutions/${sol.slug}`}>
                      <Button variant="outline" size="sm" className="font-mono text-xs">
                        <span>Deep Dive</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </NextLink>
                  </div>
                </Card>
              </CursorGlow>
            </Reveal>
          );
        })}
      </div>

      {/* Advisory CTA Banner (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Have an atypical technical challenge?
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl">
              Many enterprise problems require a synthesis across multiple domains (e.g., custom AI running inside a modernized ERP with field mobile apps). Let’s structure a discovery engagement.
            </p>
            <div className="pt-2">
              <NextLink href="/contact">
                <Button size="lg" variant="primary">
                  <span>Submit a Project Brief</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </NextLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

import React from "react";
import NextLink from "next/link";
import { SOLUTIONS } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { ArrowRight, CheckCircle2, Sparkles, Bot, Layers, Monitor, Coins, Clock } from "lucide-react";

const icons = {
  "custom-ai": Sparkles,
  "ai-agents": Bot,
  "enterprise-software": Layers,
  "web-mobile-platforms": Monitor,
};

export const metadata = {
  title: "Engineering Solutions & Business Outcomes | ATCDL",
  description:
    "Explore our four primary business solutions: Custom AI & GenAI Systems, AI Agents & Automation, Enterprise Software Modernization, and Web & Mobile Platforms.",
};

export default function SolutionsPage() {
  return (
    <div className="container-custom py-12 sm:py-16 flex flex-col gap-16 sm:gap-20">
      {/* Header (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
              Engineered Business Outcomes
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Four ways we build business value.
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              We translate advanced software and AI engineering into clear, measurable operational outcomes. Explore our four solution categories and find the right package for your organization.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOLUTIONS.map((sol) => {
          const Icon = icons[sol.slug as keyof typeof icons] || Sparkles;

          return (
            <Reveal key={sol.slug}>
              <CursorGlow className="h-full">
                <Card
                  variant="interactive"
                  className="p-8 flex flex-col justify-between h-full gap-7 bg-white border-[var(--border)] hover:border-[var(--accent-green)] transition-all"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[var(--accent-green)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                        <Clock className="w-3.5 h-3.5 text-[var(--accent-ai)]" />
                        <span>{sol.typicalTimeline}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] mb-1 font-semibold">
                        {sol.eyebrow}
                      </div>
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        {sol.businessHeadline || sol.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {sol.businessExplanation || sol.description}
                      </p>
                    </div>

                    {/* Three Package Preview Badges */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-2">
                      <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold">
                        Available Package Tiers:
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                        {(sol.packages || []).map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`p-1.5 rounded-lg border text-[11px] ${
                              pkg.isPopular
                                ? "bg-white border-[var(--accent-green)] text-emerald-800 font-bold shadow-2xs"
                                : "bg-white/80 border-slate-200 text-slate-700"
                            }`}
                          >
                            {pkg.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What You Get Highlights */}
                    <div className="border-t border-[var(--border)] pt-4 flex flex-col gap-2">
                      <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                        What You Actually Receive:
                      </div>
                      <ul className="space-y-1.5">
                        {(sol.deliverableItems?.slice(0, 3) || []).map((item, i) => (
                          <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                            <span>{item.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                      <Coins className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                      <span>Entry: <strong className="text-[var(--text-primary)]">From PKR 150k</strong></span>
                    </div>
                    <NextLink href={`/solutions/${sol.slug}`}>
                      <Button variant="primary" size="sm" className="text-xs font-semibold">
                        <span>Explore Solution</span>
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
          <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] text-center flex flex-col items-center gap-4 max-w-3xl mx-auto shadow-xs">
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Not sure which solution matches your business problem?
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Many enterprise systems require a multi-disciplinary approach (for instance, custom AI integrated into an approval workflow with mobile apps). Schedule a consultative architecture call with our team.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <NextLink href="/estimate">
                <Button size="lg" variant="outline" className="text-xs font-medium">
                  <span>Interactive Estimator</span>
                </Button>
              </NextLink>
              <NextLink href="/contact">
                <Button size="lg" variant="primary" className="text-xs font-semibold">
                  <span>Start Project Brief</span>
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

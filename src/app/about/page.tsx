import React from "react";
import NextLink from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, Code, Shield, Terminal, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About NIMBRIX | Technology Engineering",
  description:
    "We are a technology engineering practice focused on custom AI, autonomous agents, and enterprise workflow software.",
};

export default function AboutPage() {
  return (
    <div className="container-custom py-16 flex flex-col gap-16 max-w-4xl">
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent-ai)]">
            Our Purpose
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Engineering for Complex Businesses
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            Most businesses don’t need more bloated software subscriptions. They need
            resilient, bespoke systems that fit their exact operational friction, connect
            their isolated data silos, and automate high-cost workflows.
          </p>
        </div>
      </Reveal>

      {/* Engineering Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal>
          <Card variant="default" className="p-6 h-full flex flex-col gap-3">
            <Code className="w-5 h-5 text-[var(--accent)]" />
            <h2 className="text-base font-bold text-[var(--text-primary)]">
              No Toy Prototypes
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We design for production concurrency, automated error-recovery, edge-case validation, and strict SLA compliance from day one.
            </p>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="default" className="p-6 h-full flex flex-col gap-3">
            <Shield className="w-5 h-5 text-[var(--accent-ai)]" />
            <h2 className="text-base font-bold text-[var(--text-primary)]">
              Sovereignty First
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Complete data ownership. Air-gapped on-premise deployments and private VPC architectures ensure enterprise compliance.
            </p>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="default" className="p-6 h-full flex flex-col gap-3">
            <Terminal className="w-5 h-5 text-[var(--success)]" />
            <h2 className="text-base font-bold text-[var(--text-primary)]">
              Honest Engineering
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Transparent status badges on all codebases. We publish real capabilities and pricing ranges without marketing smoke.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Team / Engineering Leadership Section */}
      <Reveal>
        <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Partner Directly with Senior Engineers
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-lg leading-relaxed">
              We don&apos;t hand off client projects to offshore non-technical account managers. You work directly with senior systems architects who write and review production code.
            </p>
          </div>

          <NextLink href="/contact">
            <Button size="lg" variant="primary">
              <span>Start Discovery Brief</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </NextLink>
        </div>
      </Reveal>
    </div>
  );
}

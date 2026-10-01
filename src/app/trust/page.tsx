import React from "react";
import NextLink from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Shield, Lock, Server, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Trust, Security & Data Sovereignty | ATC Digital Labs",
  description:
    "How ATC Digital Labs protects enterprise data: private VPC deployments, air-gapped models, zero data retention, and strict NDA commitments.",
};

export default function TrustPage() {
  return (
    <div className="container-custom py-12 flex flex-col gap-14 max-w-4xl">
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent-ai)]">
              Security &amp; Compliance Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Enterprise Trust &amp; Data Sovereignty
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              We build for regulated industries — banks, telecoms, healthcare systems, and
              critical supply chains. Every architectural decision prioritizes zero data leakage,
              auditable access logs, and self-hosted control.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Security Pillars */}
      <section className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <Card variant="default" className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)] w-fit">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Zero Third-Party Model Training
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Your proprietary documents, prompts, and database records are never used to train public models. We enforce strict Zero-Data-Retention (ZDR) contracts with API providers or deploy completely self-hosted models (Ollama, vLLM).
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card variant="default" className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent-ai)] w-fit">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Air-Gapped &amp; On-Premise Support
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                For clients subject to strict regulatory jurisdictions or national data localization laws, our entire product and AI agent fleet can run inside your private VPC, dedicated Kubernetes cluster, or physical bare-metal hardware.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card variant="default" className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--success)] w-fit">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Permission-Aware RBAC Filters
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                ATCDL Ask and our AI agent pipelines mirror your existing Active Directory / LDAP access privileges. A junior clerk querying the system will never receive retrieved answers or citations from executive-only payroll or M&amp;A files.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card variant="default" className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--warning)] w-fit">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Immutable Cryptographic Audit Trails
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Every automated decision, OCR extraction, confidence score, and human review override is logged with cryptographic hashes, enabling effortless SOC2, ISO 27001, and regulatory compliance audits.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* NDA & Inquiries */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Need a Mutual NDA before sharing requirements?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-lg">
                We routinely execute bilateral NDAs with enterprise legal teams prior to architectural review sessions.
              </p>
            </div>
            <NextLink href="/contact">
              <Button variant="primary">
                <span>Request NDA Brief</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

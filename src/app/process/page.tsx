import { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Cpu, Clock, Layers, Sparkles } from "lucide-react";
import { ProcessTimeline } from "./ProcessTimeline";

export const metadata: Metadata = {
  title: "Delivery Process & Methodology | NIMBRIX Engineering",
  description:
    "Explore NIMBRIX's 4-phase delivery framework: Discover, Design, Build, and Operate. Mathematical precision, weekly working builds, and zero black-box handoffs.",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col gap-20 py-12 md:py-20">
      {/* Header */}
      <section className="container-custom">
        <div className="max-w-3xl flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
              Engineering Delivery Framework
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--accent-ai)]/10 text-[var(--accent-ai)] border border-[var(--accent-ai)]/20">
              v2.4 Methodology
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            How We Engineer and Ship Enterprise Software
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            We operate with mathematical transparency. You never wait months to discover whether your software works. Every project follows a disciplined 4-stage lifecycle with weekly staging deployments, deterministic test suites, and transparent technical gates.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <NextLink href="/estimate">
              <Button variant="primary" size="md">
                <span>Estimate Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
            <NextLink href="/contact?type=Custom+Engineering">
              <Button variant="secondary" size="md">
                Book Technical Discovery Call
              </Button>
            </NextLink>
          </div>
        </div>
      </section>

      {/* A7 Interactive Process Timeline */}
      <section className="container-custom">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
            <div>
              <span className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider">
                Phase-by-Phase Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                The 4-Stage Delivery Track
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Scroll or click stages to inspect deliverables
            </span>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Technical Quality Gates & SLA Standards */}
      <section className="container-custom">
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-8">
          <div>
            <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-1">
              Rigorous Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Our 4 Non-Negotiable Engineering Gates
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              No code moves to production without automated verification against these operational criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-5 flex flex-col gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-mono font-bold text-sm">
                G1
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Schema & Type Invariance</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Zero untyped JSON blobs. All network boundaries, database models, and LLM payloads are strictly validated using Zod or Pydantic.
              </p>
              <div className="pt-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--accent-ai)]">
                Strict TS / Zero `any`
              </div>
            </Card>

            <Card className="p-5 flex flex-col gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-ai)]/10 text-[var(--accent-ai)] flex items-center justify-center font-mono font-bold text-sm">
                G2
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Grounding & Hallucination Guard</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Every AI response requires explicit citation to verified context chunks. Strict cosine similarity thresholds and deterministic fallback paths.
              </p>
              <div className="pt-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--accent-ai)]">
                Citation Verification &gt; 99%
              </div>
            </Card>

            <Card className="p-5 flex flex-col gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center font-mono font-bold text-sm">
                G3
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Automated Regression Suite</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Every pull request triggers full test pipelines in ephemeral environments. Minimum 85% branch coverage on domain business logic.
              </p>
              <div className="pt-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--success)]">
                CI/CD Ephemeral Previews
              </div>
            </Card>

            <Card className="p-5 flex flex-col gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] flex items-center justify-center font-mono font-bold text-sm">
                G4
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Data Sovereignty & Security</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Data residency enforced. Zero model training on enterprise telemetry. Encrypted at rest (AES-256) and in transit (TLS 1.3).
              </p>
              <div className="pt-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--accent-cyan)]">
                VPC / Air-gapped Ready
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison: NIMBRIX vs Traditional Dev Agencies */}
      <section className="container-custom">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider">
              Transparency Audit
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              NIMBRIX vs. Traditional Software Agencies
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-card)]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--text-muted)] font-mono text-[11px] uppercase bg-[var(--bg-secondary)]">
                  <th className="py-3 px-5">Dimension</th>
                  <th className="py-3 px-5 text-[var(--accent)] font-bold">NIMBRIX Engineering</th>
                  <th className="py-3 px-5 text-[var(--text-muted)]">Typical Agency / Outsource Shop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="py-4 px-5 font-semibold text-[var(--text-primary)]">Commercial Model</td>
                  <td className="py-4 px-5 text-[var(--text-primary)] font-medium">
                    Strict milestone-based deliverables with defined technical success criteria.
                  </td>
                  <td className="py-4 px-5 text-[var(--text-secondary)]">
                    Vague Time &amp; Materials billing with unpredictable overruns.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-[var(--text-primary)]">Demonstration Cadence</td>
                  <td className="py-4 px-5 text-[var(--text-primary)] font-medium">
                    Live staging build updated and demonstrated weekly with working code.
                  </td>
                  <td className="py-4 px-5 text-[var(--text-secondary)]">
                    Monthly slide decks and wireframes with delayed code deployment.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-[var(--text-primary)]">IP &amp; Code Ownership</td>
                  <td className="py-4 px-5 text-[var(--text-primary)] font-medium">
                    100% client code ownership in your private GitHub/GitLab from day one.
                  </td>
                  <td className="py-4 px-5 text-[var(--text-secondary)]">
                    Vendor lock-in, proprietary platforms, or delayed IP transfer upon final payment.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-[var(--text-primary)]">AI Systems Architecture</td>
                  <td className="py-4 px-5 text-[var(--text-primary)] font-medium">
                    Custom pipelines (pgvector, hybrid rerankers, deterministic guardrails, local model fallbacks).
                  </td>
                  <td className="py-4 px-5 text-[var(--text-secondary)]">
                    Shallow OpenAI wrapper API calls without latency optimization or auditability.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-[var(--text-primary)]">Deployment Flexibility</td>
                  <td className="py-4 px-5 text-[var(--text-primary)] font-medium">
                    Cloud agnostic (AWS, GCP, Azure, bare-metal on-prem, or hybrid VPC).
                  </td>
                  <td className="py-4 px-5 text-[var(--text-secondary)]">
                    Locked to their preferred hosting vendor with high ongoing markups.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="container-custom">
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl flex flex-col gap-2">
            <span className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider">
              Ready to Scope Your Solution?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Calculate your budget &amp; timeline in 60 seconds
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Use our interactive engineering estimator to select your offering, integration depth, and deployment requirements to generate a transparent scope brief.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <NextLink href="/estimate" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                <span>Launch Estimator</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
            <NextLink href="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full sm:w-auto">
                Direct Contact Brief
              </Button>
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

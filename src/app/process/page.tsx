import { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { ProcessTimeline } from "./ProcessTimeline";
import { MethodologyInteractiveRail } from "@/components/sections/MethodologyInteractiveRail";

export const metadata: Metadata = {
  title: "Delivery Process & Methodology | ATC Digital Labs",
  description:
    "Explore ATC Digital Labs' engineering delivery framework: Understand, Design, Build, Integrate, and Operate. Milestone precision, weekly working builds, and zero black-box handoffs.",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col gap-20 py-12 md:py-20">
      {/* Header (Peek Scroll Snap: ~80% Viewport) */}
      <section className="container-custom section-peek-snap peek-contained py-8 sm:py-12">
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
              <Button as="span" variant="primary" size="md">
                <span>Estimate Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
            <NextLink href="/contact?type=Custom+Engineering">
              <Button as="span" variant="secondary" size="md">
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

          <MethodologyInteractiveRail showPageLink={false} />
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

      {/* Comparison: ATCDL vs Traditional Dev Agencies */}
      {/* A8 Comparative Audit (Green Accent Treatment Data Display) */}
      <section className="container-custom">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#00D477] text-[#152A32] border border-[#00B968] shadow-lg flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#152A32] bg-[#152A32]/10 px-2.5 py-0.5 rounded-full w-fit border border-[#152A32]/20">
              Comparative Engineering Audit
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#152A32] tracking-tight">
              ATCDL vs. Traditional Software Agencies
            </h2>
            <p className="text-xs sm:text-sm text-[#152A32]/85 max-w-2xl leading-relaxed">
              Transparent side-by-side architecture standards, code governance, and milestone delivery models.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#152A32]/20 bg-[#152A32]/5 shadow-inner">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#152A32]/20 text-[#152A32] font-mono text-[11px] uppercase bg-[#152A32]/10 font-bold">
                  <th className="py-3.5 px-5">Dimension</th>
                  <th className="py-3.5 px-5 bg-[#152A32]/15 text-[#152A32]">ATCDL Engineering</th>
                  <th className="py-3.5 px-5 text-[#152A32]/80">Typical Agency / Outsource Shop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#152A32]/15">
                <tr className="hover:bg-[#152A32]/5 transition-colors">
                  <td className="py-4 px-5 font-bold text-[#152A32]">Commercial Model</td>
                  <td className="py-4 px-5 text-[#152A32] font-semibold bg-[#152A32]/10">
                    Strict milestone-based deliverables with defined technical success criteria.
                  </td>
                  <td className="py-4 px-5 text-[#152A32]/85">
                    Vague Time &amp; Materials billing with unpredictable overruns.
                  </td>
                </tr>
                <tr className="hover:bg-[#152A32]/5 transition-colors">
                  <td className="py-4 px-5 font-bold text-[#152A32]">Demonstration Cadence</td>
                  <td className="py-4 px-5 text-[#152A32] font-semibold bg-[#152A32]/10">
                    Live staging build updated and demonstrated weekly with working code.
                  </td>
                  <td className="py-4 px-5 text-[#152A32]/85">
                    Monthly slide decks and wireframes with delayed code deployment.
                  </td>
                </tr>
                <tr className="hover:bg-[#152A32]/5 transition-colors">
                  <td className="py-4 px-5 font-bold text-[#152A32]">IP &amp; Code Ownership</td>
                  <td className="py-4 px-5 text-[#152A32] font-semibold bg-[#152A32]/10">
                    100% client code ownership in your private GitHub/GitLab from day one.
                  </td>
                  <td className="py-4 px-5 text-[#152A32]/85">
                    Vendor lock-in, proprietary platforms, or delayed IP transfer upon final payment.
                  </td>
                </tr>
                <tr className="hover:bg-[#152A32]/5 transition-colors">
                  <td className="py-4 px-5 font-bold text-[#152A32]">AI Systems Architecture</td>
                  <td className="py-4 px-5 text-[#152A32] font-semibold bg-[#152A32]/10">
                    Custom pipelines (pgvector, hybrid rerankers, deterministic guardrails, local model fallbacks).
                  </td>
                  <td className="py-4 px-5 text-[#152A32]/85">
                    Shallow OpenAI wrapper API calls without latency optimization or auditability.
                  </td>
                </tr>
                <tr className="hover:bg-[#152A32]/5 transition-colors">
                  <td className="py-4 px-5 font-bold text-[#152A32]">Deployment Flexibility</td>
                  <td className="py-4 px-5 text-[#152A32] font-semibold bg-[#152A32]/10">
                    Cloud agnostic (AWS, GCP, Azure, bare-metal on-prem, or hybrid VPC).
                  </td>
                  <td className="py-4 px-5 text-[#152A32]/85">
                    Locked to their preferred hosting vendor with high ongoing markups.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conversion Banner (Peek Scroll Snap: ~80% Viewport) */}
      <section className="container-custom section-peek-snap peek-contained py-8 sm:py-12">
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
              <Button as="span" variant="primary" size="md" className="w-full sm:w-auto">
                <span>Launch Estimator</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
            <NextLink href="/contact" className="w-full sm:w-auto">
              <Button as="span" variant="secondary" size="md" className="w-full sm:w-auto">
                Direct Contact Brief
              </Button>
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import NextLink from "next/link";
import { SOLUTIONS, PRODUCTS, PROJECTS } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { HeroSystemVisual } from "@/components/sections/HeroSystemVisual";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  AlertCircle,
  Server,
  ShieldCheck,
  Code2,
  FileCode,
  DollarSign,
  Workflow,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "NIMBRIX — Technology Engineering | AI Systems, Enterprise Software & Autonomous Agents",
  description:
    "We engineer production-grade AI pipelines, document intelligence, private knowledge copilots, and enterprise software for complex businesses.",
};

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);
  const featuredWork = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 py-12 sm:py-20">
      {/* 1. HERO SECTION */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-xs font-mono text-[var(--accent-ai)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-ai)] animate-pulse" />
                <span>NIMBRIX // TECHNOLOGY ENGINEERING</span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.04]">
                Build what your business{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] via-[#64A2FF] to-[var(--accent-ai)] bg-clip-text text-transparent">
                  actually needs.
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                We engineer production AI pipelines, document extraction engines, and
                enterprise workflow software for organizations with high technical and
                operational complexity.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <NextLink href="/contact">
                  <Button size="lg" variant="primary" className="font-mono text-sm">
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </NextLink>

                <NextLink href="/work">
                  <Button size="lg" variant="outline" className="font-mono text-sm">
                    <span>Explore Our Work</span>
                  </Button>
                </NextLink>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-6 pt-2 text-xs font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)]" />
                  Zero Toy Demos
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                  Air-Gapped &amp; VPC Ready
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Column (5 cols) -> Hero System Interface (A3) */}
          <div className="lg:col-span-5">
            <HeroSystemVisual />
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY STRIP */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]/50 py-5">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            <span className="hover:text-[var(--text-primary)] transition-colors">AI &amp; GenAI</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Autonomous Agents</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Document Intelligence</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Enterprise Software</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Cloud &amp; On-Prem</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Web &amp; Mobile</span>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION (The Friction Chain) */}
      <section className="container-custom">
        <div className="flex flex-col gap-12">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--error)] mb-2">
                The Core Bottleneck
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                Your business doesn&apos;t need more software. It needs the right system.
              </h2>
              <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
                Most organizations operate a patchwork of disconnected SaaS tools. Data is trapped in PDFs, spreadsheets, and legacy databases. Knowledge workers waste hours copying information between windows instead of driving decisions.
              </p>
            </div>
          </Reveal>

          {/* Friction Chain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-3">
                <div className="text-xs font-mono text-[var(--error)]">FRICTION 01 // SILOES</div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Unstructured Data Trapped in Files</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Policies, invoices, contracts, and customer logs exist as unstructured PDFs and docs that no system can query reliably.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-3">
                <div className="text-xs font-mono text-[var(--error)]">FRICTION 02 // LABOUR</div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Manual Re-Keying &amp; Hand-offs</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Employees spend 30%+ of their working hours manually transcribing data between forms, ERPs, and customer channels.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-3">
                <div className="text-xs font-mono text-[var(--accent-ai)]">RESOLUTION // NIMBRIX</div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Engineered Systems &amp; Agents</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  We build custom ingestion pipelines, autonomous agents, and unified APIs that turn chaotic friction into automated throughput.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION (The 4 Offers) */}
      <section className="container-custom">
        <div className="flex flex-col gap-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] mb-1">
                  Core Solutions
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Four ways we build business value.
                </h2>
              </div>
              <NextLink href="/solutions">
                <Button variant="ghost" size="sm" className="font-mono text-xs">
                  <span>View all solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol) => (
              <Reveal key={sol.slug}>
                <CursorGlow className="h-full">
                  <Card variant="interactive" className="p-8 flex flex-col justify-between h-full gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[var(--accent-ai)] uppercase">
                          {sol.eyebrow}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {sol.typicalTimeline}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                        {sol.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {sol.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        Scope: <strong className="text-[var(--text-primary)]">{sol.typicalScope}</strong>
                      </span>
                      <NextLink href={`/solutions/${sol.slug}`}>
                        <Button size="sm" variant="outline" className="font-mono text-xs">
                          <span>Explore Solution</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </NextLink>
                    </div>
                  </Card>
                </CursorGlow>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FLAGSHIP PRODUCTS SECTION (Ready to Demo Daily) */}
      <section className="container-custom">
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  Ready-to-Deploy Software
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Flagship Products Ready to Demo
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
                  Test-drive working product engines live in a 60-second screen-share. Available for immediate pilot deployment or bespoke customization.
                </p>
              </div>

              <NextLink href="/products">
                <Button size="sm" variant="primary" className="font-mono text-xs whitespace-nowrap">
                  <span>View All 6 Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Reveal key={product.slug}>
                <CursorGlow className="h-full">
                  <Card variant="interactive" className="p-6 flex flex-col justify-between h-full gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent-ai)]">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <Badge status={product.status} size="sm" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">
                          {product.name}
                        </h3>
                        <div className="text-xs font-mono text-[var(--accent-ai)] mt-0.5">
                          {product.tagline}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed">
                          {product.problem}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <NextLink
                        href={`/products/${product.slug}`}
                        className="text-xs font-mono text-[var(--accent)] hover:underline"
                      >
                        Specs &amp; Pipeline →
                      </NextLink>

                      <NextLink href={`/contact?product=${product.slug}`}>
                        <Button size="sm" variant="outline" className="font-mono text-xs">
                          Book Demo
                        </Button>
                      </NextLink>
                    </div>
                  </Card>
                </CursorGlow>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE BUILD (Process Section A7) */}
      <section className="container-custom">
        <div className="flex flex-col gap-12">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2">
                Execution Methodology
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Discover. Design. Build. Operate.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                We adhere to strict milestone delivery. You never wait months to see whether software works — we deploy verified working builds after every cycle.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                name: "Discover",
                duration: "Week 1–2",
                desc: "Audit existing databases, map exception flows, define data security contracts, and validate baseline ROI.",
              },
              {
                step: "02",
                name: "Design",
                duration: "Week 2–3",
                desc: "Produce architectural blueprints, API specifications, Zod/Pydantic schemas, and interactive prototype mockups.",
              },
              {
                step: "03",
                name: "Build",
                duration: "Week 3–8",
                desc: "Iterative engineering sprints. Continuous integration, automated test suites, and weekly working builds on staging.",
              },
              {
                step: "04",
                name: "Operate",
                duration: "Ongoing",
                desc: "Deployment to VPC/on-prem, Prometheus telemetry, model latency monitoring, and guaranteed maintenance SLAs.",
              },
            ].map((phase, i) => (
              <Reveal key={phase.step}>
                <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-3 h-full">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-lg font-bold text-[var(--accent)]">{phase.step}</span>
                    <span className="text-[11px] text-[var(--accent-ai)]">{phase.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{phase.name}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-1">
                    {phase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED TECHNICAL WORK */}
      <section className="container-custom">
        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  Verified Codebases
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Featured Prototypes &amp; Architectures
                </h2>
              </div>
              <NextLink href="/work">
                <Button variant="ghost" size="sm" className="font-mono text-xs">
                  <span>View all engineering work</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project) => (
              <Reveal key={project.slug}>
                <Card variant="interactive" className="p-6 flex flex-col justify-between h-full gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                        {project.category}
                      </span>
                      <Badge status={project.status} size="sm" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      <NextLink href={`/work/${project.slug}`} className="hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </NextLink>
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                    <NextLink href={`/work/${project.slug}`} className="text-[var(--accent)] font-mono hover:underline">
                      Inspect Build →
                    </NextLink>
                    {project.githubUrl && (
                      <span className="text-[var(--text-muted)] font-mono text-[10px]">Verified Repo</span>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMMERCIAL SCOPES (Typical Ranges Table) */}
      <section className="container-custom">
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] mb-1">
                Commercial Transparency
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Typical Engagement Scope Ranges
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                We believe in upfront commercial clarity. While custom software varies based on integration depth, these are typical investment bands.
              </p>
            </div>
          </Reveal>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--text-muted)] font-mono text-[11px] uppercase">
                  <th className="py-3 px-4">Offering Tier</th>
                  <th className="py-3 px-4">Scope Description</th>
                  <th className="py-3 px-4">Timeline</th>
                  <th className="py-3 px-4">Investment Band</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[var(--text-primary)]">Targeted MVP / Pilot</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">Focused agent or RAG copilot on single document set with baseline integration.</td>
                  <td className="py-4 px-4 font-mono text-xs text-[var(--accent-ai)]">3–5 weeks</td>
                  <td className="py-4 px-4 font-mono text-xs text-[var(--success)] font-semibold">$10K – $25K</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[var(--text-primary)]">Production Solution</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">Multi-model RAG, custom OCR pipeline, ERP connector, RBAC security, human review queue.</td>
                  <td className="py-4 px-4 font-mono text-xs text-[var(--accent-ai)]">6–10 weeks</td>
                  <td className="py-4 px-4 font-mono text-xs text-[var(--success)] font-semibold">$25K – $60K</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[var(--text-primary)]">Enterprise System Overhaul</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">Full workflow modernization, on-prem VPC deployment, multi-channel agent fleet, custom SLA.</td>
                  <td className="py-4 px-4 font-mono text-xs text-[var(--accent-ai)]">10–16 weeks</td>
                  <td className="py-4 px-4 font-mono text-xs text-[var(--success)] font-semibold">$60K – $150K+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[11px] text-[var(--text-muted)] font-mono border-t border-[var(--border)]/70 pt-4">
            * Note: Final scope and financial deliverables are calibrated after the technical discovery phase.
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION (3 Entry Points) */}
      <section className="container-custom">
        <Reveal>
          <div className="p-8 sm:p-14 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col items-center text-center gap-8">
            <div className="max-w-2xl flex flex-col items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-ai)]">
                Start Discovery
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                Have a project or product in mind?
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Connect with our senior engineering leads to audit your technical requirements,
                explore live product demos, or receive an architectural estimate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left">
              <NextLink
                href="/contact?type=Custom AI / GenAI"
                className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs font-mono text-[var(--accent)] uppercase font-semibold flex items-center justify-between">
                  <span>01. Custom AI</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  Deploy a private knowledge copilot or fine-tuned model for internal ops.
                </div>
              </NextLink>

              <NextLink
                href="/contact?type=AI Agents & Automation"
                className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-ai)] transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs font-mono text-[var(--accent-ai)] uppercase font-semibold flex items-center justify-between">
                  <span>02. Agent Automation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  Automate invoice extraction, document processing, and CRM sync.
                </div>
              </NextLink>

              <NextLink
                href="/contact?type=Enterprise Software"
                className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--success)] transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs font-mono text-[var(--success)] uppercase font-semibold flex items-center justify-between">
                  <span>03. Enterprise Core</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  Modernize legacy ERP software, build approval engines, and scale portals.
                </div>
              </NextLink>
            </div>

            <div className="pt-2">
              <NextLink href="/contact">
                <Button size="lg" variant="primary" className="font-mono text-sm px-8">
                  <span>Open Full Project Brief Form</span>
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

import React from "react";
import NextLink from "next/link";
import { SOLUTIONS, PRODUCTS, PROJECTS, IDEAS, INDUSTRIES } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { HeroSystemVisual } from "@/components/sections/HeroSystemVisual";
import { RotatingHeadlineWord } from "@/components/motion/RotatingHeadlineWord";
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
  Calculator,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "ATCDL — Digital Engineering & AI Solutions",
  description:
    "We build software that makes complex businesses simpler. AI systems, business software, automation platforms, and digital products.",
};

export default function Home() {
  const featuredProducts = PRODUCTS;
  const featuredIdeas = IDEAS.slice(0, 4);
  const featuredWork = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 py-12 sm:py-20">
      {/* 1. HERO SECTION */}
      <section className="container-custom pt-6 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-ai)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span>ATCDL // DIGITAL ENGINEERING &amp; AI SOLUTIONS</span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.04]">
                We build software that makes complex businesses{" "}
                <RotatingHeadlineWord words={["simpler.", "faster.", "smarter.", "scalable."]} />
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                ATCDL engineers custom AI systems, autonomous workflow platforms, and enterprise software for organizations with high operational complexity.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <NextLink href="/contact">
                  <Button size="lg" variant="primary" className="text-sm font-semibold">
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </NextLink>

                <NextLink href="/solutions">
                  <Button size="lg" variant="outline" className="text-sm font-semibold">
                    <span>Explore Solutions</span>
                  </Button>
                </NextLink>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-6 pt-2 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)]" />
                  Production-Grade AI &amp; Software
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                  Air-Gapped &amp; VPC Ready
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Column (5 cols) -> Living System Visual aligned with headline */}
          <div className="lg:col-span-5 lg:pt-1">
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
      <section className="container-custom py-4">
        <div className="flex flex-col gap-12">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--error)] mb-2">
                The Operational Bottleneck
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                Your business doesn&apos;t need more disconnected software. It needs the right system.
              </h2>
              <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
                Most organizations operate a patchwork of disconnected SaaS tools. Data is trapped in PDFs, spreadsheets, and legacy databases. Knowledge workers waste hours copying information between windows instead of driving strategic decisions.
              </p>
            </div>
          </Reveal>

          {/* Friction Chain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] shadow-sm flex flex-col gap-3">
                <div className="text-xs font-mono font-semibold text-[var(--error)]">FRICTION 01 // SILOES</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Unstructured Data Trapped in Files</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Policies, invoices, contracts, and customer logs exist as unstructured PDFs and docs that no system can query reliably.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] shadow-sm flex flex-col gap-3">
                <div className="text-xs font-mono font-semibold text-[var(--error)]">FRICTION 02 // LABOUR</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Manual Re-Keying &amp; Hand-offs</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Employees spend 30%+ of their working hours manually transcribing data between forms, ERPs, and customer channels.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] shadow-sm flex flex-col gap-3">
                <div className="text-xs font-mono font-semibold text-[var(--accent-ai)]">RESOLUTION // ATCDL</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Engineered Systems &amp; Agents</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  We build custom ingestion pipelines, autonomous agents, and unified APIs that turn chaotic friction into automated throughput.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION (The 4 Offers) — Section background rhythm: --bg-secondary */}
      <section className="w-full bg-[var(--bg-secondary)] border-y border-[var(--border)] py-16 sm:py-24">
        <div className="container-custom flex flex-col gap-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ai)] mb-1">
                  Core Solutions
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Four ways we build business value.
                </h2>
              </div>
              <NextLink href="/solutions">
                <Button variant="ghost" size="sm" className="text-xs font-medium">
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
                  <Card variant="interactive" className="p-8 flex flex-col justify-between h-full gap-6 bg-white border-[var(--border)]">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[var(--accent-ai)] uppercase font-semibold">
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
                        <Button size="sm" variant="outline" className="text-xs font-medium">
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
      <section className="container-custom py-4">
        <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-white border border-[var(--border)] shadow-sm flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-semibold text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  Proven Software Platforms
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Flagship Products Ready to Demo
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
                  Pre-built, modular software engines ready for private cloud or on-premise deployment. Test-drive working systems live in a 60-second screen-share.
                </p>
              </div>

              <NextLink href="/products">
                <Button size="sm" variant="primary" className="text-xs font-medium whitespace-nowrap">
                  <span>View All Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Reveal key={product.slug}>
                <CursorGlow className="h-full">
                  <Card variant="interactive" className="p-6 flex flex-col justify-between h-full gap-6 bg-white border-[var(--border)]">
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
                        <div className="text-xs font-semibold text-[var(--accent-ai)] mt-0.5">
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
                        className="text-xs font-medium text-[var(--accent)] hover:underline"
                      >
                        Specs &amp; Architecture →
                      </NextLink>

                      <NextLink href={`/contact?product=${product.slug}`}>
                        <Button size="sm" variant="outline" className="text-xs font-medium">
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

      {/* 6. HOW WE BUILD (Process Section A7) — Section background rhythm: #F8FAFC */}
      <section className="w-full bg-[#F8FAFC] border-y border-[var(--border)] py-16 sm:py-24">
        <div className="container-custom flex flex-col gap-12">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
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
            ].map((phase) => (
              <Reveal key={phase.step}>
                <div className="p-6 rounded-[var(--radius-md)] bg-white border border-[var(--border)] shadow-sm flex flex-col gap-3 h-full">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-lg font-bold text-[var(--accent)]">{phase.step}</span>
                    <span className="text-[11px] font-semibold text-[var(--accent-ai)]">{phase.duration}</span>
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

      {/* 7. FEATURED TECHNICAL WORK — Framed as Evidence & Proof */}
      <section className="container-custom py-4">
        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-semibold text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  Engineering Proof &amp; Evidence
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Verified Projects &amp; Architectures
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  Production software, client delivery implementations, and auditable open-source prototypes.
                </p>
              </div>
              <NextLink href="/work">
                <Button variant="ghost" size="sm" className="text-xs font-medium">
                  <span>View all engineering work</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project) => (
              <Reveal key={project.slug}>
                <Card variant="interactive" className="p-6 flex flex-col justify-between h-full gap-5 bg-white border-[var(--border)] shadow-sm">
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
                    <NextLink href={`/work/${project.slug}`} className="text-[var(--accent)] font-medium hover:underline">
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

      {/* 8. INDUSTRIES SECTION — Section background rhythm: --bg-secondary */}
      <section className="w-full bg-[var(--bg-secondary)] border-y border-[var(--border)] py-16 sm:py-24">
        <div className="container-custom flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-1">
                  Complex Domain Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Built for Complex Businesses
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
                  We engineer systems for organizations where data concurrency, regulatory compliance, legacy ERP anchors, and security isolation dictate viability.
                </p>
              </div>
              <NextLink href="/industries">
                <Button variant="ghost" size="sm" className="text-xs font-medium">
                  <span>View all 4 sectors</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.slice(0, 4).map((ind) => (
              <Reveal key={ind.slug}>
                <Card variant="interactive" className="p-6 sm:p-8 flex flex-col justify-between h-full gap-6 bg-white border-[var(--border)] shadow-sm">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[var(--accent)] uppercase font-semibold">
                        {ind.eyebrow}
                      </span>
                      <Badge status="Client Project" size="sm" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                        <NextLink href={`/industries/${ind.slug}`} className="hover:text-[var(--accent)] transition-colors">
                          {ind.name}
                        </NextLink>
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
                        {ind.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {ind.challenges.slice(0, 2).map((ch, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-[11px] bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] font-medium"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <NextLink
                      href={`/industries/${ind.slug}`}
                      className="text-xs font-medium text-[var(--accent)] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Sector Architecture</span>
                      <ArrowRight className="w-3 h-3" />
                    </NextLink>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PITCH LAB — READY-TO-ENGINEER CONCEPTS */}
      <section className="container-custom">
        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                  ATCDL Ideas &amp; Blueprints
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Pre-Engineered Architecture Blueprints
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  Validated concept architectures ready for rapid prototyping and enterprise co-development.
                </p>
              </div>
              <NextLink href="/ideas">
                <Button variant="ghost" size="sm" className="text-xs font-medium">
                  <span>Browse all concepts</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredIdeas.map((idea) => (
              <Reveal key={idea.slug}>
                <Card variant="interactive" className="p-5 flex flex-col justify-between h-full gap-4 bg-white border-[var(--border)] shadow-sm">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                        {idea.industry}
                      </span>
                      <Badge status="Concept" size="sm" />
                    </div>

                    <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
                      <NextLink href={`/ideas/${idea.slug}`} className="hover:text-[var(--accent)] transition-colors">
                        {idea.title}
                      </NextLink>
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {idea.concept}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
                    <NextLink href={`/ideas/${idea.slug}`} className="text-[var(--accent)] font-medium hover:underline flex items-center gap-1">
                      <span>View Blueprint</span>
                      <ArrowRight className="w-3 h-3" />
                    </NextLink>
                    <span className="text-[10px] font-semibold text-[var(--accent-ai)]">Blueprint Ready</span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE ESTIMATOR CALLOUT BANNER */}
      <section className="container-custom">
        <Reveal>
          <div className="p-8 sm:p-12 rounded-[var(--radius-lg)] bg-[var(--bg-secondary)] border border-[var(--accent)]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="max-w-xl flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
                  Transparent Estimation Engine
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Calculate Your Budget &amp; Delivery Horizon
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Answer 4 structured engineering questions to compute a realistic capital investment bracket and delivery timeline — then receive a pre-filled technical brief.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <NextLink href="/estimate" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full sm:w-auto text-xs font-medium">
                  <span>Launch Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </NextLink>
              <NextLink href="/process" className="w-full sm:w-auto">
                <Button variant="secondary" size="md" className="w-full sm:w-auto text-xs font-medium">
                  How We Build
                </Button>
              </NextLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 11. COMMERCIAL SCOPES (Typical Ranges Table) */}
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
          <div className="p-8 sm:p-14 rounded-[var(--radius-lg)] bg-[var(--accent-deep)] text-white border border-[#162D50] shadow-2xl flex flex-col items-center text-center gap-8">
            <div className="max-w-2xl flex flex-col items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[var(--header-accent)] font-semibold">
                Start Discovery
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Have a project or product in mind?
              </h2>
              <p className="text-sm sm:text-base text-[#B9C7DC] leading-relaxed">
                Connect with our senior engineering leads to audit your technical requirements,
                explore live product demos, or receive an architectural estimate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left">
              <NextLink
                href="/contact?type=Custom AI / GenAI"
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--header-accent)] transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs text-[var(--header-accent)] uppercase font-semibold flex items-center justify-between">
                  <span>01. Custom AI</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[#B9C7DC]">
                  Deploy a private knowledge copilot or fine-tuned model for internal ops.
                </div>
              </NextLink>

              <NextLink
                href="/contact?type=AI Agents & Automation"
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--header-accent)] transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs text-[var(--header-accent)] uppercase font-semibold flex items-center justify-between">
                  <span>02. Agent Automation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[#B9C7DC]">
                  Automate invoice extraction, document processing, and CRM sync.
                </div>
              </NextLink>

              <NextLink
                href="/contact?type=Enterprise Software"
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--header-accent)] transition-all flex flex-col gap-2 group"
              >
                <div className="text-xs text-[var(--header-accent)] uppercase font-semibold flex items-center justify-between">
                  <span>03. Enterprise Core</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-[#B9C7DC]">
                  Modernize legacy ERP software, build approval engines, and scale portals.
                </div>
              </NextLink>
            </div>

            <div className="pt-2">
              <NextLink href="/contact">
                <Button size="lg" variant="primary" className="text-sm px-8">
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

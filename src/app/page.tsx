import React from "react";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Cpu, Sparkles, Database, Layers, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="container-custom">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-xs font-mono text-[var(--accent-ai)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-ai)] animate-pulse" />
              <span>NIMBRIX / TECHNOLOGY ENGINEERING</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Build what your business{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-ai)] bg-clip-text text-transparent">
                actually needs.
              </span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              We engineer production AI pipelines, autonomous agents, and enterprise
              workflow software for businesses with high technical and operational complexity.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <NextLink href="/contact">
                <Button size="lg" variant="primary" className="font-mono text-sm">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </NextLink>

              <NextLink href="/design-system">
                <Button size="lg" variant="outline" className="font-mono text-sm">
                  <span>Inspect Design System</span>
                </Button>
              </NextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capability Strip */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]/50 py-5">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            <span className="hover:text-[var(--text-primary)] transition-colors">Custom AI &amp; GenAI</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Autonomous Agents</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Document Intelligence</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Enterprise Software</span>
            <span className="text-[var(--border)]">•</span>
            <span className="hover:text-[var(--text-primary)] transition-colors">Cloud &amp; On-Premises</span>
          </div>
        </div>
      </section>

      {/* Flagship Products Preview for Daily Client Pitching */}
      <section className="container-custom">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-wider mb-1">
                Demoable Daily
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Flagship Products Ready to Deploy
              </h2>
            </div>
            <NextLink
              href="/design-system"
              className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore full token library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NextLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <CursorGlow>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent-ai)]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <Badge status="Prototype" size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    NimbrixDocs
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Document &amp; Invoice Intelligence. OCR + LLM extraction turning invoices and contracts into validated ERP-ready payloads with human verification.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                  <span>60s Live Demo</span>
                  <span className="text-[var(--accent)]">Explore →</span>
                </div>
              </div>
            </CursorGlow>

            {/* Product 2 */}
            <CursorGlow>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)]">
                      <Database className="w-5 h-5" />
                    </div>
                    <Badge status="Prototype" size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    NimbrixAsk
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Private Knowledge Copilot. Connects to enterprise docs (SharePoint, Drive, Confluence), answers questions with precise citations, and enforces strict RBAC.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                  <span>Cloud or On-Prem</span>
                  <span className="text-[var(--accent)]">Explore →</span>
                </div>
              </div>
            </CursorGlow>

            {/* Product 3 */}
            <CursorGlow>
              <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent-ai)]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <Badge status="Prototype" size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    NimbrixAgents
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Sales &amp; Support Agent Platform. Autonomous agents qualifying inbound leads, answering support queries, and syncing directly to CRM with human handoff.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                  <span>Web &amp; WhatsApp</span>
                  <span className="text-[var(--accent)]">Explore →</span>
                </div>
              </div>
            </CursorGlow>
          </div>
        </div>
      </section>

      {/* Milestone 0 Status Card */}
      <section className="container-custom">
        <div className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
              <span className="font-mono text-xs text-[var(--success)] uppercase tracking-wider font-semibold">
                Milestone 0 Foundation Complete
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Architecture, GSAP Motion, and Accessible UI System Verified
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-xl">
              Inspect all components, honest status badges, form states, modals, and motion primitives on the dedicated design system verification page.
            </p>
          </div>

          <NextLink href="/design-system">
            <Button variant="primary" className="font-mono text-xs whitespace-nowrap">
              Open /design-system →
            </Button>
          </NextLink>
        </div>
      </section>
    </div>
  );
}

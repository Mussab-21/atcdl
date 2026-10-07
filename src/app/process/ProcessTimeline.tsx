"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, Clock, FileCode, Shield, Layers, Terminal } from "lucide-react";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";

interface PhaseData {
  id: string;
  step: string;
  name: string;
  duration: string;
  badge: string;
  tagline: string;
  summary: string;
  activities: string[];
  deliverables: string[];
  technicalGate: string;
  clientCheckpoint: string;
}

const PHASES: PhaseData[] = [
  {
    id: "discover",
    step: "01",
    name: "Discover & Feasibility",
    duration: "Week 1–2",
    badge: "Architecture Audit",
    tagline: "Uncover requirements, validate data readiness, and establish ROI baselines.",
    summary:
      "Before writing a line of application code, our principal engineers audit your data sources, existing infrastructure, security requirements, and domain logic to define a deterministic roadmap.",
    activities: [
      "Audit existing databases, API contracts, and vector data readiness",
      "Benchmark model latencies, token consumption, and compute cost projections",
      "Map out exception flows and human-in-the-loop review thresholds",
      "Define strict data residency and security compliance parameters",
    ],
    deliverables: [
      "Technical Specification Document (TSD)",
      "Architecture Feasibility Benchmark Report",
      "Data Residency & Security Threat Assessment",
      "Fixed Milestone & SLA Schedule",
    ],
    technicalGate: "Gate 1: Architectural feasibility confirmed and ROI threshold verified.",
    clientCheckpoint: "Discovery synthesis review call with Lead Solutions Architect.",
  },
  {
    id: "design",
    step: "02",
    name: "Design & System Blueprint",
    duration: "Week 2–3",
    badge: "Schema & Interface Contract",
    tagline: "Locking down data structures, API contracts, and interactive prototypes.",
    summary:
      "We design the exact schema contracts, network topologies, and high-fidelity interface workflows. All parties agree on data shapes before engineering begins.",
    activities: [
      "Author strict Zod/Pydantic schemas for every API endpoint and LLM tool call",
      "Produce high-fidelity interactive user flows in Figma with real state dynamics",
      "Model PostgreSQL / pgvector schemas and index topologies",
      "Build a synthetic data test generator for offline evaluation",
    ],
    deliverables: [
      "Interactive Figma Design Prototype",
      "OpenAPI 3.1 & Zod Type Contract Specifications",
      "Database Schema Migration Scripts (DDL)",
      "Synthetic Evaluation Dataset (>500 golden examples)",
    ],
    technicalGate: "Gate 2: API schema validation and UI interaction approval.",
    clientCheckpoint: "Interactive prototype walkthrough and schema freeze session.",
  },
  {
    id: "build",
    step: "03",
    name: "Iterative Engineering & Sprints",
    duration: "Week 3–8",
    badge: "Weekly Staging Releases",
    tagline: "Continuous integration, verified test coverage, and transparent demo builds.",
    summary:
      "We build in strict 2-week milestones. You get continuous visibility via private Git repositories, ephemeral PR preview environments, and live weekly staging demos.",
    activities: [
      "Engineered backend pipelines, vector search, and model orchestration",
      "Automated test suite execution (unit, integration, and LLM evaluation tests)",
      "Continuous deployment to isolated staging environments for user testing",
      "Zero hallucination guardrails and grounding validation layers",
    ],
    deliverables: [
      "Live Verified Staging Environment (URL + auth)",
      "Full Source Code in Private Client Git Repository",
      "Automated CI/CD Pipeline (GitHub Actions)",
      "Test Coverage Reports (>85% branch coverage)",
    ],
    technicalGate: "Gate 3: 100% CI pass rate, deterministic grounding, and UAT sign-off.",
    clientCheckpoint: "Weekly staging demonstration and sprint review with engineering team.",
  },
  {
    id: "operate",
    step: "04",
    name: "Deploy, Telemetry & Operate",
    duration: "Ongoing",
    badge: "Production SLA & Telemetry",
    tagline: "Seamless deployment to your VPC or on-prem with continuous observability.",
    summary:
      "We execute zero-downtime production deployment, configure telemetry for model accuracy and latency, and provide committed operational SLAs.",
    activities: [
      "Deploy to target cloud (AWS, GCP, Azure) or air-gapped on-premise Kubernetes",
      "Instrument Prometheus, Grafana, and OpenTelemetry distributed tracing",
      "Configure automated alerting for latency spikes, error rates, and model drift",
      "Provide engineer-led operational training and comprehensive runbooks",
    ],
    deliverables: [
      "Production Deployment Runbook & Infrastructure as Code",
      "Real-time Grafana Telemetry & Latency Dashboards",
      "Enterprise SLA & 24/7 Severity-1 Incident Protocol",
      "Post-Launch Technical Retrospective & Phase 2 Roadmap",
    ],
    technicalGate: "Gate 4: Security scan clean, load testing passed, and telemetry online.",
    clientCheckpoint: "Production Go-Live executive sign-off and operational handoff.",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  useGSAP(
    () => {
      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const container = containerRef.current;
      const progressBar = progressBarRef.current;
      if (!container || !progressBar) return;

      // Animate progress line with scrub
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top 30%",
        end: "bottom 70%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(progressBar, { scaleY: progress, transformOrigin: "top center" });

          // Determine which step is active based on progress
          const index = Math.min(
            PHASES.length - 1,
            Math.floor(progress * PHASES.length)
          );
          setActivePhaseIndex(index);
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row gap-12 relative pt-6">
      {/* Left Column: Progress Rail & Navigation (Desktop Sticky) */}
      <div className="lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-28 h-fit">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)]">
            Milestone Navigation
          </span>
          <p className="text-xs text-[var(--text-secondary)]">
            Select a phase or scroll through the technical execution details.
          </p>
        </div>

        {/* Phase Selectors with Connecting Line */}
        <div className="relative pl-6 flex flex-col gap-6">
          {/* Background Rail */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[var(--border)]" />

          {/* Scrubbed Active Rail (GSAP animated) */}
          <div
            ref={progressBarRef}
            className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent-ai)] to-[var(--success)] origin-top"
            style={{ transform: "scaleY(0)" }}
          />

          {PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.id}
                onClick={() => {
                  setActivePhaseIndex(idx);
                  const element = document.getElementById(`phase-section-${phase.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`relative flex items-center gap-4 text-left transition-all group ${
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-85"
                }`}
              >
                {/* Node Indicator */}
                <div
                  className={`relative -ml-[23px] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] font-bold transition-all border ${
                    isActive
                      ? "bg-[var(--accent)] border-[var(--accent-hover)] text-white shadow-[0_0_12px_rgba(77,141,255,0.4)]"
                      : "bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-muted)] group-hover:border-[var(--text-secondary)]"
                  }`}
                >
                  {phase.step}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {phase.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {phase.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col gap-3 mt-4">
          <span className="text-xs font-mono text-[var(--accent-ai)] uppercase">
            Need a timeline estimate?
          </span>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Every project timeline is tailored to your data readiness and architecture scope.
          </p>
          <NextLink href="/estimate">
            <Button as="span" variant="secondary" size="sm" className="w-full justify-between font-mono text-xs">
              <span>Run Estimator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </NextLink>
        </div>
      </div>

      {/* Right Column: Detailed Phase Cards */}
      <div className="lg:w-2/3 flex flex-col gap-16">
        {PHASES.map((phase, idx) => (
          <div
            key={phase.id}
            id={`phase-section-${phase.id}`}
            className={`p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border transition-all duration-300 flex flex-col gap-6 ${
              activePhaseIndex === idx
                ? "border-[var(--accent)]/50 shadow-[0_0_24px_rgba(77,141,255,0.08)]"
                : "border-[var(--border)]"
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono font-bold text-[var(--accent)]">
                  {phase.step}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {phase.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span className="text-xs font-mono text-[var(--accent-ai)]">{phase.duration}</span>
                  </div>
                </div>
              </div>
              <span className="self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)]">
                {phase.badge}
              </span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {phase.summary}
            </p>

            {/* Core Activities */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                Core Engineering Sprints
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {phase.activities.map((act, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]/70 text-xs text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="leading-snug">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-ai)] font-semibold">
                Tangible Deliverables Handed to You
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {phase.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]/70 text-xs text-[var(--text-primary)] flex items-start gap-2 font-mono"
                  >
                    <FileCode className="w-4 h-4 text-[var(--accent-ai)] shrink-0 mt-0.5" />
                    <span className="leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkpoint & Gate Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col gap-1.5">
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                  Technical Quality Gate
                </span>
                <span className="text-xs font-medium text-[var(--text-primary)]">
                  {phase.technicalGate}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col gap-1.5">
                <span className="text-[11px] font-mono text-[var(--accent)] uppercase">
                  Client Collaboration Gate
                </span>
                <span className="text-xs font-medium text-[var(--text-primary)]">
                  {phase.clientCheckpoint}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

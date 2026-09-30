"use client";

import React, { useState } from "react";

export function ProductRoadmapSection() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(1); // default Prototype

  const stages = [
    {
      step: "01",
      name: "Concept & Problem Validation",
      statusLabel: "Discovery",
      headline: "Scoping the Operational Bottleneck",
      description:
        "We identify recurring enterprise friction points — like manual document re-keying or scattered company policies — and design the mathematical and system architecture to eliminate them.",
      deliverables: [
        "Problem statement & workflow audit",
        "API schema and data dictionary design",
        "Initial feasibility benchmark against real-world sample files",
      ],
      currentEngines: ["Custom Client Engines"],
    },
    {
      step: "02",
      name: "Architecture & Functional Prototype",
      statusLabel: "Active Engineering",
      headline: "Interactive Engine & Parser Validation",
      description:
        "Building working OCR, semantic parsing, and agent triage pipelines with live APIs. We benchmark token latency, math verification, and human review fallback workflows.",
      deliverables: [
        "Core parsing & inference pipelines",
        "Interactive test sandbox & mock ERP integrations",
        "Confidence score threshold calibration",
      ],
      currentEngines: ["ATCDL Docs", "ATCDL Ask", "ATCDL Flow"],
    },
    {
      step: "03",
      name: "Private Partner Beta",
      statusLabel: "Supervised Pilots",
      headline: "Parallel Run with Enterprise Operators",
      description:
        "Selected enterprise partners run the engine alongside their existing team workflows under direct engineering observation to discover edge cases and audit performance.",
      deliverables: [
        "Zero-risk dual-entry evaluation",
        "Real-world edge case stress testing",
        "Custom ERP connector hardening (SAP, QuickBooks, etc.)",
      ],
      currentEngines: ["ATCDL Agents", "ATCDL Talent"],
    },
    {
      step: "04",
      name: "General Production Release",
      statusLabel: "Production Grade",
      headline: "Commercial Deployment & SLAs",
      description:
        "General availability with self-serve API access, multi-tenant isolation, automated failover, comprehensive audit logs, and enterprise uptime commitments.",
      deliverables: [
        "Committed 99.9% uptime SLA",
        "SOC-aligned security controls & RBAC",
        "On-premise air-gapped Docker container distribution option",
      ],
      currentEngines: ["ATCDL Ops"],
    },
    {
      step: "05",
      name: "Continuous Iteration",
      statusLabel: "Long-Term Evolution",
      headline: "Model Tuning & Ecosystem Expansion",
      description:
        "Ongoing model fine-tuning, automated retraining on user corrections, and weekly connector updates to support new third-party enterprise tools.",
      deliverables: [
        "Quarterly performance optimizations",
        "New horizontal workflow connectors",
        "Continuous feedback loop from human operators",
      ],
      currentEngines: ["All Core Engines"],
    },
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <section className="py-20 bg-[#071b3b] text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/50 border border-blue-700/60 text-blue-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Engineering Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            From Idea to Enterprise Product
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don&apos;t ship speculative mockups. Every ATCDL engine progresses through a
            disciplined 5-stage engineering pipeline designed to prove accuracy, data privacy, and
            reliability before commercial scale.
          </p>
        </div>

        {/* 5-Step Stepper Bar */}
        <div className="relative mb-12">
          {/* Progress track */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStageIndex / (stages.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
            {stages.map((st, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-gradient-to-b from-blue-600/40 to-blue-950/80 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-2 ring-cyan-400/40"
                      : isPast
                      ? "bg-slate-900/80 border-slate-700 hover:border-slate-500"
                      : "bg-[#06142c]/90 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-cyan-400 text-slate-950"
                          : isPast
                          ? "bg-blue-900/60 text-blue-300"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      STAGE {st.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                      {st.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{st.statusLabel}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-[#091b3a] rounded-2xl border border-slate-700 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                <span>Stage {currentStage.step} of 05</span>
                <span>•</span>
                <span>{currentStage.statusLabel}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                {currentStage.headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {currentStage.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Verification Milestones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStage.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200"
                    >
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full bg-[#06142c] rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Engines in this Stage
                </div>
                <div className="space-y-2 mb-6">
                  {currentStage.currentEngines.map((engine) => (
                    <div
                      key={engine}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs"
                    >
                      <span className="font-semibold text-white">{engine}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-800/60">
                        {currentStage.statusLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-[11px] text-slate-400 leading-normal mb-3">
                  Interested in testing an engine during private beta or early access?
                </p>
                <a
                  href="#collection"
                  className="block text-center w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
                >
                  Explore Early Access Options ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

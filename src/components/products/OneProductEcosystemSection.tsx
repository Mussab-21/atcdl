"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS_LAB_DATA, LabProduct } from "@/content/products-lab-data";

interface OneProductEcosystemSectionProps {
  onSelectProduct?: (product: LabProduct) => void;
}

export function OneProductEcosystemSection({
  onSelectProduct,
}: OneProductEcosystemSectionProps) {
  const [activeNode, setActiveNode] = useState<string>("core");

  const nodes = [
    {
      id: "docs",
      slug: "atcdl-docs",
      label: "ATCDL Docs",
      sub: "Document Ingestion",
      pos: "left",
      flow: "Documents → Extraction → Core Data Bus",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-400/40 text-blue-300",
    },
    {
      id: "ask",
      slug: "atcdl-ask",
      label: "ATCDL Ask",
      sub: "Knowledge Intelligence",
      pos: "top",
      flow: "Core Knowledge Base → Semantic Retrieval → Real-Time Answers",
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-400/40 text-cyan-300",
    },
    {
      id: "flow",
      slug: "atcdl-flow",
      label: "ATCDL Flow",
      sub: "Workflow Automation",
      pos: "right",
      flow: "Core Event Bus → Multi-Step Rules → System Action",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-400/40 text-emerald-300",
    },
    {
      id: "agents",
      slug: "atcdl-agents",
      label: "ATCDL Agents",
      sub: "Communication Agents",
      pos: "bottom-left",
      flow: "Omnichannel Dialogue → AI Resolution → Human Escalation",
      color: "from-sky-500/20 to-blue-500/10 border-sky-400/40 text-sky-300",
    },
    {
      id: "talent",
      slug: "atcdl-talent",
      label: "ATCDL Talent",
      sub: "Document Screening",
      pos: "bottom-right",
      flow: "Application Feed → Criteria Match → Structured Shortlist",
      color: "from-purple-500/20 to-indigo-500/10 border-purple-400/40 text-purple-300",
    },
    {
      id: "ops",
      slug: "atcdl-ops",
      label: "ATCDL Ops",
      sub: "Operations Platform",
      pos: "bottom",
      flow: "All Engines → Telemetry & Health → Unified Control Cockpit",
      color: "from-amber-500/20 to-orange-500/10 border-amber-400/40 text-amber-300",
    },
  ];

  const handleProductClick = (slug: string) => {
    const product = PRODUCTS_LAB_DATA.products.find((p) => p.slug === slug);
    if (product && onSelectProduct) {
      onSelectProduct(product);
    }
  };

  return (
    <section className="py-20 bg-[#061229] border-t border-b border-slate-800 relative overflow-hidden text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/40 border border-blue-700/60 text-blue-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Unified Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            One Interconnected Product Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            ATCDL software engines aren&apos;t isolated tools. They communicate through a shared
            data bus — passing extracted records into contextual memory, automated triggers,
            and centralized operational oversight.
          </p>
        </div>

        {/* Interactive Ecosystem Diagram Container */}
        <div className="bg-[#091b3a]/80 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Visual Ecosystem Canvas */}
            <div className="w-full lg:w-3/5 flex flex-col items-center">
              <div className="relative w-full max-w-[560px] aspect-[4/3] flex items-center justify-center">
                {/* SVG Connecting Lines with animated pulse */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 500 380"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Lines from center (250, 190) to peripheral nodes */}
                  {/* Top: Ask (250, 50) */}
                  <line
                    x1="250"
                    y1="190"
                    x2="250"
                    y2="65"
                    stroke="#38bdf8"
                    strokeWidth={activeNode === "ask" ? "3" : "1.5"}
                    strokeDasharray={activeNode === "ask" ? "none" : "4 4"}
                    className={activeNode === "ask" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Left: Docs (80, 190) */}
                  <line
                    x1="250"
                    y1="190"
                    x2="95"
                    y2="190"
                    stroke="#38bdf8"
                    strokeWidth={activeNode === "docs" ? "3" : "1.5"}
                    strokeDasharray={activeNode === "docs" ? "none" : "4 4"}
                    className={activeNode === "docs" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Right: Flow (405, 190) */}
                  <line
                    x1="250"
                    y1="190"
                    x2="405"
                    y2="190"
                    stroke="#10b981"
                    strokeWidth={activeNode === "flow" ? "3" : "1.5"}
                    strokeDasharray={activeNode === "flow" ? "none" : "4 4"}
                    className={activeNode === "flow" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Bottom Left: Agents (120, 310) */}
                  <line
                    x1="250"
                    y1="190"
                    x2="135"
                    y2="300"
                    stroke="#38bdf8"
                    strokeWidth={activeNode === "agents" ? "3" : "1.5"}
                    strokeDasharray={activeNode === "agents" ? "none" : "4 4"}
                    className={activeNode === "agents" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Bottom Right: Talent (370, 310) */}
                  <line
                    x1="250"
                    y1="190"
                    x2="365"
                    y2="300"
                    stroke="#a855f7"
                    strokeWidth={activeNode === "talent" ? "3" : "1.5"}
                    strokeDasharray={activeNode === "talent" ? "none" : "4 4"}
                    className={activeNode === "talent" ? "animate-pulse" : "opacity-40"}
                  />
                  {/* Bottom Center: Ops (250, 345) */}
                  <line
                    x1="250"
                    y1="190"
                    x2="250"
                    y2="330"
                    stroke="#f59e0b"
                    strokeWidth={activeNode === "ops" ? "3" : "1.5"}
                    strokeDasharray={activeNode === "ops" ? "none" : "4 4"}
                    className={activeNode === "ops" ? "animate-pulse" : "opacity-40"}
                  />

                  {/* Outer Orbit Ring */}
                  <ellipse
                    cx="250"
                    cy="190"
                    rx="180"
                    ry="140"
                    stroke="#1e3a8a"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    className="opacity-30"
                  />
                </svg>

                {/* Central Hub: ATCDL Core */}
                <button
                  type="button"
                  onClick={() => setActiveNode("core")}
                  className={`relative z-20 w-32 h-32 rounded-full flex flex-col items-center justify-center p-3 text-center transition-all duration-300 shadow-xl border ${
                    activeNode === "core"
                      ? "bg-gradient-to-br from-blue-600 to-indigo-800 border-blue-300 shadow-blue-500/40 ring-4 ring-blue-500/20 scale-105"
                      : "bg-[#0b1f44] border-blue-500/40 hover:border-blue-400"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-400/20 flex items-center justify-center text-blue-300 mb-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">ATCDL CORE</span>
                  <span className="text-[10px] text-blue-200 mt-0.5 leading-tight">
                    Unified Data Bus
                  </span>
                </button>

                {/* Peripheral Nodes */}
                {/* 1. Top: Ask */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
                  <button
                    type="button"
                    onClick={() => setActiveNode("ask")}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      activeNode === "ask"
                        ? "bg-cyan-500/30 border-cyan-400 text-white ring-2 ring-cyan-400/30 shadow-lg shadow-cyan-500/20"
                        : "bg-[#0b1f44]/90 border-slate-700 text-slate-300 hover:border-cyan-400/60"
                    }`}
                  >
                    <span className="font-semibold text-cyan-300">02</span> ATCDL Ask
                  </button>
                </div>

                {/* 2. Left: Docs */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
                  <button
                    type="button"
                    onClick={() => setActiveNode("docs")}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      activeNode === "docs"
                        ? "bg-blue-500/30 border-blue-400 text-white ring-2 ring-blue-400/30 shadow-lg shadow-blue-500/20"
                        : "bg-[#0b1f44]/90 border-slate-700 text-slate-300 hover:border-blue-400/60"
                    }`}
                  >
                    <span className="font-semibold text-blue-300">01</span> ATCDL Docs
                  </button>
                </div>

                {/* 3. Right: Flow */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
                  <button
                    type="button"
                    onClick={() => setActiveNode("flow")}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      activeNode === "flow"
                        ? "bg-emerald-500/30 border-emerald-400 text-white ring-2 ring-emerald-400/30 shadow-lg shadow-emerald-500/20"
                        : "bg-[#0b1f44]/90 border-slate-700 text-slate-300 hover:border-emerald-400/60"
                    }`}
                  >
                    <span className="font-semibold text-emerald-300">05</span> ATCDL Flow
                  </button>
                </div>

                {/* 4. Bottom Left: Agents */}
                <div className="absolute bottom-6 left-8 z-20">
                  <button
                    type="button"
                    onClick={() => setActiveNode("agents")}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      activeNode === "agents"
                        ? "bg-sky-500/30 border-sky-400 text-white ring-2 ring-sky-400/30 shadow-lg shadow-sky-500/20"
                        : "bg-[#0b1f44]/90 border-slate-700 text-slate-300 hover:border-sky-400/60"
                    }`}
                  >
                    <span className="font-semibold text-sky-300">03</span> ATCDL Agents
                  </button>
                </div>

                {/* 5. Bottom Right: Talent */}
                <div className="absolute bottom-6 right-8 z-20">
                  <button
                    type="button"
                    onClick={() => setActiveNode("talent")}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      activeNode === "talent"
                        ? "bg-purple-500/30 border-purple-400 text-white ring-2 ring-purple-400/30 shadow-lg shadow-purple-500/20"
                        : "bg-[#0b1f44]/90 border-slate-700 text-slate-300 hover:border-purple-400/60"
                    }`}
                  >
                    <span className="font-semibold text-purple-300">04</span> ATCDL Talent
                  </button>
                </div>

                {/* 6. Far Bottom: Ops */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
                  <button
                    type="button"
                    onClick={() => setActiveNode("ops")}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      activeNode === "ops"
                        ? "bg-amber-500/30 border-amber-400 text-white ring-2 ring-amber-400/30 shadow-lg shadow-amber-500/20"
                        : "bg-[#0b1f44]/90 border-slate-700 text-slate-300 hover:border-amber-400/60"
                    }`}
                  >
                    <span className="font-semibold text-amber-300">06</span> ATCDL Ops
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {nodes.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => setActiveNode(n.id)}
                    className={`text-xs px-2.5 py-1 rounded transition-colors ${
                      activeNode === n.id
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white bg-slate-800/60"
                    }`}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Detail Box on the Right */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              {activeNode === "core" ? (
                <div className="bg-[#0b1f44] border border-blue-500/40 rounded-xl p-6 shadow-inner">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    Central Architecture Bus
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Unified Operational Data Bus
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    The core data bus unifies documents, internal knowledge bases, conversation
                    logs, and workflow events into a single authenticated event stream. Data
                    extracted by one product is immediately accessible to others.
                  </p>
                  <div className="space-y-2 border-t border-slate-700 pt-4 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-200">
                        Zero data silos — structured JSON output shared across all engines.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-200">
                        Shared security, tenant isolation, and audit logging.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-200">
                        Single API key / webhook infrastructure for your entire enterprise stack.
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                (() => {
                  const node = nodes.find((n) => n.id === activeNode);
                  if (!node) return null;
                  const product = PRODUCTS_LAB_DATA.products.find((p) => p.slug === node.slug);

                  return (
                    <div className="bg-[#0b1f44] border border-slate-700 rounded-xl p-6 shadow-inner">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                          {node.sub}
                        </span>
                        {product && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {product.statusBadge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{node.label}</h3>
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        {product?.shortDescription}
                      </p>

                      <div className="bg-[#07152b] rounded-lg p-3 border border-slate-800 mb-4">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1">
                          Ecosystem Data Flow
                        </div>
                        <div className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                          <span>{node.flow}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        {product && onSelectProduct ? (
                          <button
                            type="button"
                            onClick={() => handleProductClick(node.slug)}
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
                          >
                            Explore Engine Preview →
                          </button>
                        ) : (
                          <Link
                            href={`/products/${node.slug}`}
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
                          >
                            View Product Page →
                          </Link>
                        )}
                        <button
                          type="button"
                          onClick={() => setActiveNode("core")}
                          className="text-xs text-slate-400 hover:text-white px-2 py-1"
                        >
                          Back to Core
                        </button>
                      </div>
                    </div>
                  );
                })()
              )}
            </div>
          </div>
        </div>

        {/* 3 Pillar Ecosystem Strengths */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 text-sm font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-white mb-1">Single Schema Ingestion</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Documents parsed in ATCDL Docs are automatically indexed for contextual semantic
              search in ATCDL Ask without repetitive data migration or ETL scripts.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 text-sm font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-white mb-1">Autonomous Event Triggers</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Incoming communications handled by ATCDL Agents can trigger verification flows in
              ATCDL Flow and prompt human supervisor sign-offs in real time.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 text-sm font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-white mb-1">Total Observability</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ATCDL Ops monitors all 6 engines continuously — tracking latency, confidence
              thresholds, human escalation queues, and system error rates in one dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

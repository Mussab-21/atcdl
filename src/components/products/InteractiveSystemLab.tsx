"use client";

import React, { useState } from "react";
import {
  FileText,
  Brain,
  GitMerge,
  Users,
  Database,
  Server,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type LabDomain = "documents" | "ai" | "workflows" | "users" | "data" | "systems";

export function InteractiveSystemLab() {
  const [activeDomain, setActiveDomain] = useState<LabDomain>("documents");

  const domainTabs: { id: LabDomain; label: string; icon: React.ElementType }[] = [
    { id: "documents", label: "Documents", icon: FileText },
    { id: "ai", label: "AI & Models", icon: Brain },
    { id: "workflows", label: "Workflows", icon: GitMerge },
    { id: "users", label: "Users", icon: Users },
    { id: "data", label: "Data Layer", icon: Database },
    { id: "systems", label: "Systems", icon: Server },
  ];

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#007F86]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          <span>Interactive Product Lab</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#071326]">
          Explore The System
        </h2>
        <p className="text-sm sm:text-base text-[#53657D] leading-relaxed">
          See how our software products connect documents, AI models, workflows, and business systems into one unified operational architecture.
        </p>
      </div>

      {/* 6-Node Selector Rail */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#DCE5EF] shadow-xs w-fit">
        {domainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeDomain === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveDomain(tab.id)}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "text-[#52647B] hover:text-[#071326] hover:bg-slate-50"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive System Canvas */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#071B3B] text-white border border-[#18345C] shadow-[0_24px_60px_rgba(7,27,59,0.16)] flex flex-col gap-6 text-left relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#2563EB]/20 blur-3xl pointer-events-none" />

        {/* Canvas Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-slate-400">
          <span className="text-[#00D477] font-bold uppercase">
            ARCHITECTURAL FOCUS // {activeDomain.toUpperCase()}
          </span>
          <span>Unified Engine Mesh</span>
        </div>

        {/* Dynamic Architectural Data Flow */}
        <div className="relative z-10 p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 font-mono text-xs">
          {activeDomain === "documents" && (
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Document Intelligence Pipeline:</span>
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">Inbound PDFs &amp; Invoices</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#2563EB] font-bold">OCR &amp; Geometry Engine</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#00D477] font-bold">ERP Relational Payload</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                ATCDL Docs ingests unstructured files, validates calculations, and synchronizes clean records with zero manual re-keying.
              </p>
            </div>
          )}

          {activeDomain === "ai" && (
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Grounded Intelligence Core:</span>
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">Company SOPs &amp; Wikis</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#2563EB] font-bold">Hybrid Vector Index</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#00D477] font-bold">Cited Answers (Zero Hallucination)</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                ATCDL Ask transforms corporate documents into an interactive copilot that cites exact pages and sections.
              </p>
            </div>
          )}

          {activeDomain === "workflows" && (
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Automated State Machine:</span>
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">Operational Trigger</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#2563EB] font-bold">Policy &amp; SLA Rules</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#00D477] font-bold">Slack/Teams 1-Click Approval</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                ATCDL Flow routes decisions according to spend thresholds, escalating to managers only when required.
              </p>
            </div>
          )}

          {activeDomain === "users" && (
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Omnichannel Communication Layer:</span>
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">WhatsApp &bull; Web &bull; Email</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#2563EB] font-bold">ATCDL Agents Assistant</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#00D477] font-bold">Human Takeover Console</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Customer conversations are answered 24/7 with instant lead qualification and seamless routing to human reps.
              </p>
            </div>
          )}

          {activeDomain === "data" && (
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Strict Relational Schema:</span>
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">PostgreSQL ACID Store</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#2563EB] font-bold">Idempotent Keys</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#00D477] font-bold">Immutable Audit Logs</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Every transaction and edit is timestamped with previous/new state diffs for complete regulatory compliance.
              </p>
            </div>
          )}

          {activeDomain === "systems" && (
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Central Operations Tower:</span>
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">SAP &bull; QuickBooks &bull; APIs</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#2563EB] font-bold">ATCDL Ops Command Tower</span>
                <ArrowRight className="w-4 h-4 text-[#00D477]" />
                <span className="text-[#00D477] font-bold">Real-Time Telemetry</span>
              </div>
              <p className="text-slate-300 font-sans text-xs">
                A single pane of glass coordinating multiple department systems with automated anomaly alerts.
              </p>
            </div>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00D477]" />
            All engines deployable in your dedicated private cloud tenant.
          </span>
          <span className="text-[#00D477] font-bold hidden sm:inline">
            Air-Gapped Ready
          </span>
        </div>
      </div>
    </section>
  );
}

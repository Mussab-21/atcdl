"use client";

import React, { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { FileText, Cpu, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSystemVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [statusChip, setStatusChip] = useState<"QUEUED" | "PROCESSING" | "COMPLETED">("QUEUED");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });

        // 1. Initial visual container fade in
        tl.fromTo(
          ".hero-sys-window",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 }
        );

        // 2. Node 1 activation
        tl.fromTo(
          ".node-ingest",
          { borderColor: "rgba(32,43,58,0.8)" },
          { borderColor: "rgba(77,141,255,0.8)", duration: 0.4 },
          "+=0.2"
        );

        // 3. Status flips to PROCESSING
        tl.add(() => {
          setStatusChip("PROCESSING");
        });

        // 4. Line 1 draw
        tl.fromTo(
          ".line-path-1",
          { strokeDashoffset: 120 },
          { strokeDashoffset: 0, duration: 0.8 }
        );

        // 5. Node 2 (Extraction) activation
        tl.fromTo(
          ".node-extract",
          { borderColor: "rgba(32,43,58,0.8)", scale: 0.98 },
          { borderColor: "rgba(57,214,208,0.9)", scale: 1, duration: 0.5 }
        );

        // 6. Extraction progress meter fill
        tl.fromTo(
          ".extract-progress-fill",
          { width: "0%" },
          { width: "100%", duration: 0.7 }
        );

        // 7. Line 2 draw
        tl.fromTo(
          ".line-path-2",
          { strokeDashoffset: 120 },
          { strokeDashoffset: 0, duration: 0.8 }
        );

        // 8. Node 3 (ERP Sync) activation
        tl.fromTo(
          ".node-erp",
          { borderColor: "rgba(32,43,58,0.8)" },
          { borderColor: "rgba(53,201,139,0.8)", duration: 0.5 }
        );

        // 9. Output ledger receipt fade in & status flips to COMPLETED
        tl.fromTo(
          ".output-receipt",
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            onComplete: () => {
              setStatusChip("COMPLETED");
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Immediate final state
        setStatusChip("COMPLETED");
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto lg:max-w-none text-left select-none"
    >
      {/* Background ambient glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[rgba(77,141,255,0.15)] to-[rgba(57,214,208,0.12)] blur-xl opacity-60 pointer-events-none" />

      {/* Main Window */}
      <div className="hero-sys-window relative rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-2xl shadow-black/80 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--error)] opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--warning)] opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)] opacity-80" />
            <span className="font-mono text-[11px] text-[var(--text-muted)] ml-2">
              NIMBRIX_SYSTEM // INGESTION_PIPELINE.EXE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold transition-colors ${
                statusChip === "COMPLETED"
                  ? "bg-[rgba(53,201,139,0.15)] text-[var(--success)] border border-[rgba(53,201,139,0.3)]"
                  : statusChip === "PROCESSING"
                  ? "bg-[rgba(57,214,208,0.15)] text-[var(--accent-ai)] border border-[rgba(57,214,208,0.3)] animate-pulse"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)]"
              }`}
            >
              {statusChip}
            </span>
          </div>
        </div>

        {/* Console Content */}
        <div className="p-5 sm:p-6 flex flex-col gap-5">
          {/* Top telemetry bar */}
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] border-b border-[var(--border)]/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[var(--text-secondary)] font-medium">Batch #4821</span>
              <span>•</span>
              <span>1.4MB PDF</span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--accent-ai)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SOC2 / VPC Isolated</span>
            </div>
          </div>

          {/* Interactive Pipeline Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
            {/* Stage 1: Ingestion */}
            <div className="node-ingest p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-2 transition-all">
              <div className="flex items-center justify-between">
                <FileText className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">01_INGEST</span>
              </div>
              <div>
                <div className="text-xs font-medium text-[var(--text-primary)]">Invoice #4821.pdf</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">Scanned PO Header</div>
              </div>
            </div>

            {/* Stage 2: OCR & LLM Extraction */}
            <div className="node-extract p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-2 transition-all">
              <div className="flex items-center justify-between">
                <Cpu className="w-4 h-4 text-[var(--accent-ai)]" />
                <span className="font-mono text-[10px] text-[var(--accent-ai)]">02_EXTRACT</span>
              </div>
              <div>
                <div className="text-xs font-medium text-[var(--text-primary)]">OCR + Token Parser</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">Conf: 99.4% • 18 fields</div>
              </div>
              {/* Progress meter */}
              <div className="w-full h-1 rounded-full bg-[var(--bg-secondary)] overflow-hidden mt-1">
                <div className="extract-progress-fill h-full bg-[var(--accent-ai)] w-full transition-all" />
              </div>
            </div>

            {/* Stage 3: ERP Integration */}
            <div className="node-erp p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-2 transition-all">
              <div className="flex items-center justify-between">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
                <span className="font-mono text-[10px] text-[var(--success)]">03_POST</span>
              </div>
              <div>
                <div className="text-xs font-medium text-[var(--text-primary)]">SAP Ledger Sync</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">Ledger ID: #8894-GL</div>
              </div>
            </div>
          </div>

          {/* SVG Connecting Flow Paths */}
          <div className="hidden sm:block relative -my-2 h-6 px-12">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 400 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Line 1 */}
              <path
                className="line-path-1"
                d="M 50 12 L 180 12"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="120"
                strokeDashoffset="0"
              />
              {/* Line 2 */}
              <path
                className="line-path-2"
                d="M 220 12 L 350 12"
                stroke="var(--accent-ai)"
                strokeWidth="2"
                strokeDasharray="120"
                strokeDashoffset="0"
              />
            </svg>
          </div>

          {/* Output Ledger Payload Box */}
          <div className="output-receipt p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col gap-2 font-mono text-[11px]">
            <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pb-1 border-b border-[var(--border)]/50">
              <span>STRUCTURED JSON OUTPUT</span>
              <span className="text-[var(--success)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                Reconciled in 1.2s
              </span>
            </div>
            <div className="text-[var(--text-secondary)] space-y-0.5">
              <div><span className="text-[var(--accent)]">&quot;vendor&quot;</span>: <span className="text-[var(--text-primary)]">&quot;Apex Industrial Supplies&quot;</span>,</div>
              <div><span className="text-[var(--accent)]">&quot;subtotal&quot;</span>: <span className="text-[var(--success)]">14820.00</span>, <span className="text-[var(--accent)]">&quot;tax&quot;</span>: <span className="text-[var(--success)]">1185.60</span>,</div>
              <div><span className="text-[var(--accent)]">&quot;status&quot;</span>: <span className="text-[var(--accent-ai)]">&quot;APPROVED_FOR_DISBURSEMENT&quot;</span></div>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-2.5 bg-[var(--bg-secondary)]/80 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span>Engine: NimbrixDocs Core</span>
          <span className="text-[var(--accent)] flex items-center gap-1 hover:underline cursor-pointer">
            View Live API Documentation <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

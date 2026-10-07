"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Building2,
  Calendar,
  Hash,
  BadgeDollarSign,
  Lock,
  Play,
  Monitor,
} from "lucide-react";
import { LabProduct } from "@/content/products-lab-data";

export function FeaturedProductShowcase({
  product,
  onOpenPreview,
}: {
  product: LabProduct;
  onOpenPreview: (prod: LabProduct) => void;
}) {
  const [viewMode, setViewMode] = useState<"video" | "interactive">("video");
  const [extractState, setExtractState] = useState<"idle" | "scanning" | "extracted">("extracted");

  const runSampleExtraction = () => {
    setExtractState("scanning");
    setTimeout(() => {
      setExtractState("extracted");
    }, 1800);
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Eyebrow Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#007F86]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
          <span>FEATURED LAB ENGINE // CURRENTLY BUILDING</span>
        </div>

        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
          Interactive example
        </span>
      </div>

      {/* Featured Showcase Card (Split Layout) */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#DCE5EF] shadow-sm flex flex-col lg:flex-row items-stretch gap-8 text-left relative overflow-hidden">
        {/* Left Column: Product Explanation & CTAs (6 cols) */}
        <div className="lg:w-1/2 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                PRODUCT {product.number}
              </span>
              <span className="text-xs font-mono text-[#00D084] font-bold">
                {product.statusBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#071326]">
              {product.name}
            </h2>

            <p className="text-sm sm:text-base font-mono text-[#2563EB] font-semibold">
              {product.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#53657D] leading-relaxed font-sans mt-1">
              {product.longDescription}
            </p>

            {/* Core Modules List */}
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">
                Engine Modules:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.modules.slice(0, 4).map((mod, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D084] shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
            <NextLink href={`/contact?product=${product.id}`}>
              <Button as="span" size="lg" variant="primary" className="text-xs font-bold bg-[#2563EB] hover:bg-blue-700 text-white shadow-xs">
                <span>{product.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </NextLink>

            <button
              type="button"
              onClick={() => onOpenPreview(product)}
              className="text-xs font-mono font-bold text-[#2563EB] hover:underline px-3 py-2 cursor-pointer flex items-center gap-1"
            >
              <span>Inspect Full Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Live Interactive Product Interface Simulation (6 cols) */}
        <div className="lg:w-1/2 rounded-2xl bg-[#071B3B] text-white p-5 sm:p-7 border border-[#18345C] shadow-[0_24px_60px_rgba(7,27,59,0.16)] flex flex-col justify-between gap-4 font-mono text-xs relative overflow-hidden">
          {/* Header with View Toggle */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00D477]" />
              <span className="font-bold text-slate-200">INVOICE EXTRACTION ENGINE</span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode("video")}
                className={`px-2.5 py-1 rounded-md text-[10px] flex items-center gap-1 transition-colors cursor-pointer ${
                  viewMode === "video" ? "bg-[#00D477] text-[#071326] font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                <Play className="w-2.5 h-2.5" />
                <span>Video Loop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("interactive")}
                className={`px-2.5 py-1 rounded-md text-[10px] flex items-center gap-1 transition-colors cursor-pointer ${
                  viewMode === "interactive" ? "bg-[#2563EB] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                <Monitor className="w-2.5 h-2.5" />
                <span>Console</span>
              </button>
            </div>
          </div>

          {viewMode === "video" ? (
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 relative flex flex-col justify-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                poster="/recordings/atcdl_docs_loop.jpg"
                className="w-full aspect-[16/10] object-cover bg-black"
              >
                <source src="/recordings/atcdl_docs_loop.webm" type="video/webm" />
                <source src="/recordings/atcdl_docs_loop.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="p-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
                  Real-time capture &bull; validation &bull; export
                </span>
                <span className="font-mono text-slate-400">Recorded Prototype Loop</span>
              </div>
            </div>
          ) : (
            <>
              {/* Simulated Inbound Document Box */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#3B82F6]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-white font-bold">INV-8492_ApexIndustrial.pdf</span>
                    <span className="text-[10px] text-slate-400">PDF Document &bull; 2 Pages &bull; 1.4 MB</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={runSampleExtraction}
                  disabled={extractState === "scanning"}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1.5 text-[11px]"
                >
                  <RefreshCw className={`w-3 h-3 ${extractState === "scanning" ? "animate-spin text-[#00D477]" : ""}`} />
                  <span>{extractState === "scanning" ? "Processing..." : "Re-Scan"}</span>
                </button>
              </div>

              {/* Interactive Extraction Scan Flow */}
              {extractState === "scanning" ? (
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 text-center min-h-[180px]">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/30 border border-[#2563EB] flex items-center justify-center text-[#00D477] animate-pulse">
                    <Sparkles className="w-5 h-5 animate-spin" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white">Scanning Geometry &amp; OCR Tokens...</span>
                    <span className="text-[10px] text-slate-400">Validating line-item math against PO #4821</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
                    <span className="text-slate-300">Extracted Structured Record:</span>
                    <span className="text-[#00D477] flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Parsed
                    </span>
                  </div>

                  {/* Extracted Key-Values */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] text-slate-400">Vendor:</span>
                        <strong className="text-white text-xs truncate">Apex Industrial Ltd</strong>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                      <BadgeDollarSign className="w-3.5 h-3.5 text-[#00D477]" />
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] text-slate-400">Total Amount:</span>
                        <strong className="text-[#00D477] text-xs">PKR 148,200.00</strong>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                      <Hash className="w-3.5 h-3.5 text-[#2563EB]" />
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] text-slate-400">Matched PO:</span>
                        <strong className="text-white text-xs">#PO-4821 (Verified)</strong>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] text-slate-400">Due Date:</span>
                        <strong className="text-white text-xs">15 Oct 2026</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Bottom Security / API Payload Strip */}
          <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-[11px] flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#00D477]" />
              SAP S/4HANA &bull; QuickBooks Ready Payload
            </span>
            <span className="text-[#00D477] font-bold">Zero Re-Keying</span>
          </div>
        </div>
      </div>
    </section>
  );
}

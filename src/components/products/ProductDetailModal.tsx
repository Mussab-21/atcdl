"use client";

import React, { useEffect } from "react";
import NextLink from "next/link";
import { Button } from "@/components/ui/Button";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Layers,
  Workflow,
  Users,
} from "lucide-react";
import { LabProduct } from "@/content/products-lab-data";

export function ProductDetailModal({
  product,
  onClose,
}: {
  product: LabProduct | null;
  onClose: () => void;
}) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#DCE5EF] shadow-2xl p-6 sm:p-8 flex flex-col gap-6 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              PRODUCT {product.number}
            </span>
            <span className="text-xs font-mono text-[#00D477] font-bold">
              {product.statusBadge}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Title & Tagline */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#091326]">
            {product.name}
          </h2>
          <span className="text-xs sm:text-sm font-mono text-[#2563EB] font-semibold">
            {product.tagline}
          </span>
        </div>

        {/* What It Does (Business Value First) */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono font-bold uppercase text-slate-400">
            What It Solves:
          </span>
          <p className="text-sm text-slate-700 leading-relaxed font-sans bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            {product.problem}
          </p>
        </div>

        {/* How It Works (Step-by-step) */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-mono font-bold uppercase text-slate-400 flex items-center gap-1.5">
            <Workflow className="w-3.5 h-3.5 text-[#2563EB]" />
            How The Engine Works:
          </span>
          <div className="flex flex-col gap-2">
            {product.howItWorks.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00D477] shrink-0 mt-0.5" />
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Target Users & Integrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-xs">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono font-bold uppercase text-slate-400 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#2563EB]" />
              Who It Helps:
            </span>
            <p className="text-slate-600">{product.targetUsers}</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-mono font-bold uppercase text-slate-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
              Verified Integrations:
            </span>
            <div className="flex flex-wrap gap-1">
              {product.integrations.map((int, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px] border border-slate-200"
                >
                  {int}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <NextLink
            href={`/products/${product.slug}`}
            className="text-xs font-mono text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Open Dedicated Specs Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </NextLink>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="md"
              onClick={onClose}
              className="text-xs font-semibold"
            >
              Close
            </Button>

            <NextLink href={`/contact?product=${product.id}`}>
              <Button
                variant="primary"
                size="md"
                className="text-xs font-bold bg-[#071B3B] hover:bg-[#0c2854]"
              >
                <span>{product.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

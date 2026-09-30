"use client";

import React from "react";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { LabProduct } from "@/content/products-lab-data";

export function ProductCollectionGrid({
  products,
  onOpenPreview,
}: {
  products: LabProduct[];
  onOpenPreview: (prod: LabProduct) => void;
}) {
  return (
    <section id="product-collection" className="scroll-mt-24 flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-2 max-w-2xl text-left">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Product Catalog &bull; Lab Portfolio</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#091326]">
          Explore The Software Engines
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Each product is engineered to eliminate a specific manual bottleneck in enterprise operations.
        </p>
      </div>

      {/* Editorial Layout: 2 Large, 2 Medium, 2 Wide */}
      <div className="flex flex-col gap-6">
        {/* Tier 1: 2 Large Cards (Docs & Ask) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {products.slice(0, 2).map((prod) => (
            <ProductCardItem
              key={prod.id}
              product={prod}
              variant="large"
              onOpenPreview={onOpenPreview}
            />
          ))}
        </div>

        {/* Tier 2: 2 Medium Cards (Agents & Talent) */}
        {products.length > 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {products.slice(2, 4).map((prod) => (
              <ProductCardItem
                key={prod.id}
                product={prod}
                variant="medium"
                onOpenPreview={onOpenPreview}
              />
            ))}
          </div>
        )}

        {/* Tier 3: 2 Wide Cards (Flow & Ops) */}
        {products.length > 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {products.slice(4, 6).map((prod) => (
              <ProductCardItem
                key={prod.id}
                product={prod}
                variant="wide"
                onOpenPreview={onOpenPreview}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCardItem({
  product,
  variant,
  onOpenPreview,
}: {
  product: LabProduct;
  variant: "large" | "medium" | "wide";
  onOpenPreview: (prod: LabProduct) => void;
}) {
  const isWide = variant === "wide";

  return (
    <div
      id={`product-${product.id}`}
      className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DCE5EF] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-6 text-left group"
    >
      {/* Top Header: ID, Category, Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
            PRODUCT {product.number}
          </span>
          <span className="text-[11px] font-mono text-[#2563EB] font-bold">
            {product.category}
          </span>
        </div>

        <span className="text-[11px] font-mono text-[#00D477] font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D477] animate-pulse" />
          {product.status}
        </span>
      </div>

      {/* Product Title & Short Business Explanation */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#091326] group-hover:text-[#2563EB] transition-colors">
          {product.name}
        </h3>
        <span className="text-xs font-mono text-[#2563EB] font-semibold">
          {product.tagline}
        </span>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-1">
          {product.shortDescription}
        </p>
      </div>

      {/* Dedicated Interactive Mini Product Visual Container */}
      <div
        className={`p-4 rounded-xl bg-[#071B3B] text-white border border-slate-800 flex flex-col justify-center relative overflow-hidden font-mono text-xs ${
          isWide ? "min-h-[190px]" : "min-h-[170px]"
        }`}
      >
        {/* Subtle Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <ProductMiniVisual visualType={product.visualType} />
      </div>

      {/* Footer Action Row */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <NextLink
          href={`/products/${product.slug}`}
          className="text-xs font-mono text-slate-500 hover:text-[#2563EB] flex items-center gap-1"
        >
          <span>View Specs</span>
        </NextLink>

        <button
          type="button"
          onClick={() => onOpenPreview(product)}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-[#071B3B] text-white hover:bg-[#2563EB] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
        >
          <span>{product.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function ProductMiniVisual({
  visualType,
}: {
  visualType: LabProduct["visualType"];
}) {
  if (visualType === "document-flow") {
    return (
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>INVOICE PIPELINE</span>
          <span className="text-[#00D477] font-bold">Scanning OCR</span>
        </div>
        <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Invoice #4821</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00D477]" />
          <span className="text-[#00D477] font-bold">ERP Reconciliation</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Amount: PKR 148,200</span>
          <span className="text-[#00D477]">✓ Verified</span>
        </div>
      </div>
    );
  }

  if (visualType === "knowledge-brain") {
    return (
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>KNOWLEDGE SEARCH</span>
          <span className="text-[#00D477] font-bold">Indexed SOPs</span>
        </div>
        <div className="p-2.5 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300">
          &quot;What is our vendor payment SLA?&quot;
        </div>
        <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-[10px] text-emerald-300 flex items-center justify-between">
          <span>Answer: 30 Net Days</span>
          <span className="text-emerald-400 font-bold">Policy.pdf p.18</span>
        </div>
      </div>
    );
  }

  if (visualType === "agent-triage") {
    return (
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>OMNICHANNEL ASSISTANT</span>
          <span className="text-[#00D477] font-bold">24/7 Active</span>
        </div>
        <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">WhatsApp Lead</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
          <span className="text-white font-bold">CRM Qualified</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Complexity: High</span>
          <span className="text-amber-400 font-bold">→ Human Handoff</span>
        </div>
      </div>
    );
  }

  if (visualType === "talent-screening") {
    return (
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>RESUME INTELLIGENCE</span>
          <span className="text-[#00D477] font-bold">ATS Integrated</span>
        </div>
        <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Candidate: Senior Eng</span>
          <span className="text-[#00D477] font-bold">94% Match</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Skills: TypeScript, Cloud</span>
          <span className="text-white font-bold">Shortlisted</span>
        </div>
      </div>
    );
  }

  if (visualType === "workflow-sequence") {
    return (
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>APPROVAL ENGINE</span>
          <span className="text-[#00D477] font-bold">SLA Timers Active</span>
        </div>
        <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
          <span>PO &gt; $5,000</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-amber-300 font-bold">Director Review</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#00D477] font-bold">Approved</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Slack Action Card</span>
          <span className="text-[#00D477]">1-Click Sign-Off</span>
        </div>
      </div>
    );
  }

  if (visualType === "operations-tower") {
    return (
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>OPERATIONS COCKPIT</span>
          <span className="text-[#00D477] font-bold">Telemetry Live</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[9px]">Orders</span>
            <strong className="text-white text-xs">412</strong>
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[9px]">Inventory</span>
            <strong className="text-[#00D477] text-xs">99.8%</strong>
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-slate-400 block text-[9px]">Anomaly</span>
            <strong className="text-slate-300 text-xs">0</strong>
          </div>
        </div>
        <div className="p-1.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300 text-center">
          All Department Databases Connected
        </div>
      </div>
    );
  }

  return null;
}

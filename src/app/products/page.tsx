import React from "react";
import NextLink from "next/link";
import { PRODUCTS, Product } from "@/content/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { ArrowRight, Sparkles, Cpu, Database, Server, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Flagship AI & Enterprise Products | ATCDL",
  description:
    "Explore ATCDL's production-ready AI products: ATCDL Docs (Document AI), ATCDL Ask (Knowledge Copilot), and ATCDL Agents (Workflow Automation).",
};

export default function ProductsPage() {
  const flagships = PRODUCTS.filter((p) => p.featured);
  const otherProducts = PRODUCTS.filter((p) => !p.featured);

  return (
    <div className="container-custom py-16 flex flex-col gap-20">
      {/* Header (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <div className="text-xs font-mono text-[var(--accent-ai)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
              Ready-to-Deploy Assets
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Engineered Products for Daily Operations
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Need faster time-to-value? Deploy our pre-built product engines as-is,
              or contract our engineering team to deeply customize and integrate them into
              your proprietary enterprise systems.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Flagship Tier 1 Products */}
      <section className="flex flex-col gap-8">
        <div className="border-b border-[var(--border)] pb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-[var(--accent-ai)] font-mono">01.</span> Flagship Products (Tier 1)
          </h2>
          <span className="text-xs font-mono text-[var(--text-muted)]">Live Demos Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flagships.map((product) => (
            <Reveal key={product.slug}>
              <CursorGlow className="h-full">
                <Card variant="interactive" className="p-6 flex flex-col justify-between h-full gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent-ai)]">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <Badge status={product.status} size="sm" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                        <NextLink href={`/products/${product.slug}`}>
                          {product.name}
                        </NextLink>
                      </h3>
                      <div className="text-xs font-mono text-[var(--accent-ai)] mt-0.5">
                        {product.tagline}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed">
                        {product.problem}
                      </p>
                    </div>

                    <div className="border-t border-[var(--border)]/70 pt-3">
                      <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase mb-2">
                        Key Modules:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.modules.slice(0, 3).map((mod, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <NextLink
                      href={`/products/${product.slug}`}
                      className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Product Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </NextLink>

                    <NextLink href={`/contact?product=${product.slug}`}>
                      <Button size="sm" variant="outline" className="text-xs font-mono">
                        Book Demo
                      </Button>
                    </NextLink>
                  </div>
                </Card>
              </CursorGlow>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tier 2 Products */}
      <section className="flex flex-col gap-8">
        <div className="border-b border-[var(--border)] pb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-[var(--accent)] font-mono">02.</span> Enterprise Accelerators (Tier 2)
          </h2>
          <span className="text-xs font-mono text-[var(--text-muted)]">Custom Implementations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((product) => (
            <Reveal key={product.slug}>
              <Card variant="default" className="p-6 flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                      {product.offer}
                    </span>
                    <Badge status={product.status} size="sm" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      <NextLink href={`/products/${product.slug}`} className="hover:text-[var(--accent)] transition-colors">
                        {product.name}
                      </NextLink>
                    </h3>
                    <div className="text-xs font-mono text-[var(--accent)] mt-0.5">
                      {product.tagline}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                      {product.problem}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <NextLink
                    href={`/products/${product.slug}`}
                    className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NextLink>

                  <NextLink href={`/contact?product=${product.slug}`}>
                    <Button size="sm" variant="ghost" className="text-xs font-mono">
                      Inquire
                    </Button>
                  </NextLink>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deployment & Security Guarantee (Peek Scroll Snap: ~80% Viewport) */}
      <section className="section-peek-snap peek-contained py-6 sm:py-10">
        <Reveal>
          <div className="p-8 sm:p-10 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent-ai)]">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">On-Prem &amp; Air-Gapped</div>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  Deployable in your own VPC, private cloud, or physical server room for regulated banking and healthcare clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">Zero Data Leakage</div>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  Your documents and prompts are never used to train public foundation models. Complete data sovereignty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--success)]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">Custom ERP Connectors</div>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  Seamless bi-directional integration with SAP, Oracle, Salesforce, QuickBooks, and proprietary internal databases.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import { PRODUCTS, Product } from "@/content/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.tagline} | ATCDL`,
    description: product.problem,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container-custom py-16 flex flex-col gap-20 max-w-4xl">
      {/* Product Hero */}
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-10">
          <div className="flex items-center gap-2">
            <NextLink
              href="/products"
              className="text-xs font-mono text-[var(--accent)] hover:underline uppercase"
            >
              ← All Products
            </NextLink>
            <span className="text-[var(--text-muted)] text-xs">/</span>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
              {product.offer}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {product.name}
            </h1>
            <Badge status={product.status} size="md" />
          </div>

          <div className="text-lg text-[var(--accent-ai)] font-mono font-medium">
            {product.tagline}
          </div>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {product.problem}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <NextLink href={`/contact?product=${product.slug}`}>
              <Button as="span" size="lg" variant="primary">
                <span>Book a Live 60-Second Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>

            <div className="text-xs font-mono text-[var(--text-muted)] px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
              ⚡ Demo Spec: <strong className="text-[var(--text-primary)]">{product.demoHighlight}</strong>
            </div>
          </div>
        </div>
      </Reveal>

      {/* How It Works (Pipeline Workflow Diagram) */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Zap className="w-5 h-5 text-[var(--accent-ai)]" />
              <span>How It Works (System Pipeline)</span>
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">Sequential Flow</span>
          </div>

          <div className="p-6 sm:p-8 rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col gap-4">
            {product.howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] transition-colors hover:border-[var(--accent)]"
              >
                <div className="w-7 h-7 rounded-md bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-0.5">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Modules & Integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Modules */}
        <Reveal>
          <Card variant="default" className="p-6 sm:p-8 h-full flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Core Architectural Modules
              </h3>
            </div>
            <ul className="space-y-2.5">
              {product.modules.map((mod, i) => (
                <li key={i} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        {/* Integrations */}
        <Reveal>
          <Card variant="default" className="p-6 sm:p-8 h-full flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--accent-ai)]" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Enterprise Connectors &amp; APIs
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.integrations.map((integ, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  {integ}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-auto pt-4 border-t border-[var(--border)] leading-relaxed">
              Custom webhook adapters and proprietary REST/SOAP wrappers engineered upon request during deployment.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Deployment & Pricing Guidance */}
      <Reveal>
        <div className="p-6 sm:p-8 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                Supported Deployment Topologies:
              </div>
              <ul className="space-y-1.5">
                {product.deployment.map((dep, i) => (
                  <li key={i} className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{dep}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                Commercial Model:
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {product.pricingModel}
              </p>
              <div className="text-[11px] text-[var(--text-muted)] mt-1">
                Final scope &amp; volume pricing calibrated post-discovery.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Book Demo Final CTA */}
      <Reveal>
        <div className="p-8 sm:p-10 rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Schedule a Technical Walkthrough of {product.name}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md">
              We&apos;ll walk your engineering and operations teams through a live 60-second execution on sample data.
            </p>
          </div>

          <NextLink href={`/contact?product=${product.slug}`}>
            <Button as="span" size="lg" variant="primary" className="whitespace-nowrap">
              <span>Book Demo →</span>
            </Button>
          </NextLink>
        </div>
      </Reveal>
    </div>
  );
}

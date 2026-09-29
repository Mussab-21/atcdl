"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Clock,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { calculateProjectEstimate, EstimatorInput } from "@/lib/estimator/calculate";
import { track } from "@/lib/analytics";

export default function EstimatorPage() {
  const router = useRouter();

  const [form, setForm] = useState<EstimatorInput>({
    offering: "Custom AI / GenAI",
    integrationScope: "moderate",
    deploymentTier: "standard_cloud",
    targetHorizon: "standard",
    email: "",
    name: "",
    company: "",
  });

  const [activeStep, setActiveStep] = useState(1);
  const [currency, setCurrency] = useState<"USD" | "PKR">("USD");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live recalculate
  const estimate = useMemo(() => {
    return calculateProjectEstimate(form);
  }, [form]);

  const handleFinishAndHandoff = async () => {
    setIsSubmitting(true);
    track("project_estimator_completed", {
      offering: form.offering,
      budget: estimate.budgetBracket,
      timeline: estimate.timelineBracket,
      currency,
    });
    try {
      const res = await fetch("/api/estimator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok && data.handoffUrl) {
        router.push(data.handoffUrl);
        return;
      }
    } catch (err) {
      console.error("[Estimator Handoff Error]", err);
    } finally {
      setIsSubmitting(false);
    }

    // Fallback direct navigation
    const fallbackParams = new URLSearchParams({
      projectType: form.offering,
      budget: estimate.budgetBracket,
      timeline: estimate.timelineBracket,
    });
    router.push(`/contact?${fallbackParams.toString()}`);
  };

  return (
    <div className="container-custom py-16 sm:py-24 max-w-5xl">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="ai" className="mb-4">
            <Calculator className="w-3.5 h-3.5 mr-1" />
            <span>INTERACTIVE PROJECT ESTIMATOR</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Estimate Engineering Scope &amp; Capital Budget
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Configure your technical requirements, security boundaries, and delivery horizon to calculate an honest, data-driven implementation bracket.
          </p>
        </div>
      </Reveal>

      {/* Grid: 2 columns on desktop (Questions left, Live Calculation right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Wizard Form (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Step Indicators */}
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            {[
              { num: 1, label: "Offering" },
              { num: 2, label: "Integrations" },
              { num: 3, label: "Security" },
              { num: 4, label: "Timeline" },
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`flex items-center gap-2 text-xs font-mono transition-colors ${
                  activeStep === s.num
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    activeStep === s.num
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--bg-secondary)] border border-[var(--border)]"
                  }`}
                >
                  {s.num}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          <Card variant="elevated" className="p-6 sm:p-8">
            {/* STEP 1: Offering */}
            {activeStep === 1 && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[var(--accent)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    1. Target Offering / System Archetype
                  </h2>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Which category of technology engineering best describes your planned initiative?
                </p>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    {
                      value: "Custom AI / GenAI",
                      title: "Custom AI / GenAI",
                      desc: "Private RAG pipelines, bespoke copilots, domain fine-tuned LLMs, source citation engines.",
                    },
                    {
                      value: "AI Agents & Automation",
                      title: "AI Agents & Autonomous Automation",
                      desc: "Invoice/document extraction, multi-channel agents (WhatsApp/web), exception workflows.",
                    },
                    {
                      value: "Enterprise Software",
                      title: "Enterprise Software Modernization",
                      desc: "Core transactional databases, multi-tier approval engines, warehouse portals, legacy decoupling.",
                    },
                    {
                      value: "Web & Mobile Platforms",
                      title: "High-Scale Web & Mobile Platforms",
                      desc: "High-performance client portals, React Native/Flutter field apps, sub-second APIs.",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, offering: opt.value as EstimatorInput["offering"] })}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        form.offering === opt.value
                          ? "bg-[var(--accent)]/10 border-[var(--accent)] shadow-[0_0_15px_rgba(77,141,255,0.2)]"
                          : "bg-[var(--bg-secondary)] border-[var(--border)] hover:border-[var(--text-muted)]"
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold text-sm text-[var(--text-primary)] mb-1">
                        <span>{opt.title}</span>
                        {form.offering === opt.value && <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <Button type="button" variant="primary" onClick={() => setActiveStep(2)}>
                    <span>Next: Integrations</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Integration Scope */}
            {activeStep === 2 && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[var(--accent)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    2. Integration &amp; System Interop Scope
                  </h2>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  How deeply will this system connect with existing legacy platforms or databases?
                </p>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    {
                      value: "standalone",
                      title: "Standalone Greenfield",
                      badge: "Standard",
                      desc: "Clean modern databases (PostgreSQL), REST/GraphQL APIs, no legacy database constraints.",
                    },
                    {
                      value: "moderate",
                      title: "Moderate Platform Interop",
                      badge: "+20% effort",
                      desc: "Syncs with 1–2 standard SaaS platforms (Salesforce, HubSpot, Stripe, S3, QuickBooks).",
                    },
                    {
                      value: "enterprise",
                      title: "Complex Enterprise Infrastructure",
                      badge: "+45% effort",
                      desc: "Integrates with SAP, Oracle, AS/400, on-prem active directories, or legacy mainframes.",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, integrationScope: opt.value as EstimatorInput["integrationScope"] })}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        form.integrationScope === opt.value
                          ? "bg-[var(--accent)]/10 border-[var(--accent)] shadow-[0_0_15px_rgba(77,141,255,0.2)]"
                          : "bg-[var(--bg-secondary)] border-[var(--border)] hover:border-[var(--text-muted)]"
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold text-sm text-[var(--text-primary)] mb-1">
                        <span className="flex items-center gap-2">
                          {opt.title}
                          <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-mono">{opt.badge}</Badge>
                        </span>
                        {form.integrationScope === opt.value && <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="ghost" onClick={() => setActiveStep(1)}>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button type="button" variant="primary" onClick={() => setActiveStep(3)}>
                    <span>Next: Security Posture</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Security & Deployment */}
            {activeStep === 3 && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--accent)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    3. Security Boundaries &amp; Hosting Tier
                  </h2>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  What compliance and isolation guarantees are required for your operational data?
                </p>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    {
                      value: "standard_cloud",
                      title: "Standard Multi-Tenant Cloud",
                      badge: "Baseline",
                      desc: "Hosted on secure AWS / GCP cloud environments with encrypted SSL/TLS data in transit and at rest.",
                    },
                    {
                      value: "dedicated_vpc",
                      title: "Dedicated Virtual Private Cloud (VPC)",
                      badge: "+15% scope",
                      desc: "Isolated VPC, private endpoint peering, customer-managed KMS encryption keys, strict IP allowlisting.",
                    },
                    {
                      value: "air_gapped",
                      title: "On-Premises / Air-Gapped Sovereign Hardware",
                      badge: "+35% scope",
                      desc: "Zero external network egress. Local GPU model inference (vLLM / Ollama) behind strict hardware firewalls.",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, deploymentTier: opt.value as EstimatorInput["deploymentTier"] })}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        form.deploymentTier === opt.value
                          ? "bg-[var(--accent)]/10 border-[var(--accent)] shadow-[0_0_15px_rgba(77,141,255,0.2)]"
                          : "bg-[var(--bg-secondary)] border-[var(--border)] hover:border-[var(--text-muted)]"
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold text-sm text-[var(--text-primary)] mb-1">
                        <span className="flex items-center gap-2">
                          {opt.title}
                          <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-mono">{opt.badge}</Badge>
                        </span>
                        {form.deploymentTier === opt.value && <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="ghost" onClick={() => setActiveStep(2)}>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button type="button" variant="primary" onClick={() => setActiveStep(4)}>
                    <span>Next: Target Horizon</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: Target Horizon & Optional Info */}
            {activeStep === 4 && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[var(--accent)]" />
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    4. Target Horizon &amp; Delivery Pace
                  </h2>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  When do you need the production system or pilot live?
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { value: "urgent", title: "Urgent Sprint", sub: "< 1 month (Overtime allocation)" },
                    { value: "standard", title: "Standard Delivery", sub: "1–3 months (Balanced cycle)" },
                    { value: "phased", title: "Multi-Phase", sub: "3–6 months (Tiered rollout)" },
                    { value: "multi_phase", title: "Strategic Roadmap", sub: "6+ months (Enterprise program)" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, targetHorizon: opt.value as EstimatorInput["targetHorizon"] })}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        form.targetHorizon === opt.value
                          ? "bg-[var(--accent)]/10 border-[var(--accent)]"
                          : "bg-[var(--bg-secondary)] border-[var(--border)]"
                      }`}
                    >
                      <div className="font-semibold text-xs text-[var(--text-primary)] mb-0.5">{opt.title}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">{opt.sub}</div>
                    </button>
                  ))}
                </div>

                <div className="border-t border-[var(--border)] pt-4 mt-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Optional: Save discovery bracket
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-xs text-[var(--text-primary)]"
                    />
                    <input
                      type="email"
                      placeholder="work@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-xs text-[var(--text-primary)]"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="ghost" onClick={() => setActiveStep(3)}>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    onClick={handleFinishAndHandoff}
                  >
                    <span>Apply to Project Brief</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right: Live Calculation Output Card (5 cols sticky) */}
        <div className="lg:col-span-5 sticky top-24">
          <Card variant="elevated" className="p-6 sm:p-8 border-[var(--accent)]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Live Engineering Estimate
              </span>
              <Badge variant="outline" className="font-mono text-[10px]">
                {estimate.confidence}
              </Badge>
            </div>

            {/* Estimated Budget Range with Segmented Currency Toggle */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[var(--text-secondary)] font-medium">Estimated Capital Range</span>
                <div className="inline-flex rounded-lg border border-[var(--border)] p-0.5 bg-[var(--bg-secondary)]">
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      currency === "USD"
                        ? "bg-white text-[var(--accent)] shadow-sm"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("PKR")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      currency === "PKR"
                        ? "bg-white text-[var(--accent)] shadow-sm"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    PKR (Rs)
                  </button>
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {currency === "USD" ? estimate.usdFormatted : estimate.pkrFormatted}
              </div>

              <div className="text-[11px] text-[var(--text-secondary)] mt-2 leading-relaxed bg-[var(--bg-secondary)] p-2.5 rounded-lg border border-[var(--border)]">
                {currency === "USD" ? estimate.usdContext : estimate.pkrContext}
              </div>
            </div>

            {/* Estimated Timeline */}
            <div className="border-t border-[var(--border)] pt-4 mb-6">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[var(--text-secondary)]">Delivery Horizon:</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{estimate.weeksFormatted}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--text-secondary)]">Target Sprint Band:</span>
                <span className="font-mono text-[var(--text-muted)]">{estimate.timelineBracket}</span>
              </div>
            </div>

            {/* Recommended Architecture */}
            <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-xs mb-6">
              <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Architecture Recommendation</span>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                {estimate.recommendedArchitecture}
              </p>
            </div>

            {/* Scope Summary */}
            <p className="text-xs text-[var(--text-muted)] mb-6 leading-relaxed">
              💡 {estimate.summary} Final scope and contractual SLAs are finalized during architectural discovery.
            </p>

            {/* Direct CTA */}
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              isLoading={isSubmitting}
              onClick={handleFinishAndHandoff}
            >
              <span>Transfer to Project Brief</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <div className="text-center mt-3">
              <Link href="/contact" className="text-[11px] text-[var(--text-muted)] hover:text-[var(--accent)] underline inline-flex items-center gap-1">
                <span>Skip to custom blank brief</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

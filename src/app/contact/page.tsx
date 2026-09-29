"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField, Input, Textarea, Select } from "@/components/ui/Form";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
import { Turnstile } from "@/components/forms/Turnstile";
import { track } from "@/lib/analytics";

function ContactFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const ideaParam = searchParams.get("idea");
  const industryParam = searchParams.get("industry");
  const projectTypeParam = searchParams.get("projectType");
  const budgetParam = searchParams.get("budget");
  const timelineParam = searchParams.get("timeline");
  const summaryParam = searchParams.get("summary");

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Custom AI / GenAI" as
      | "Custom AI / GenAI"
      | "AI Agents & Automation"
      | "Enterprise Software"
      | "Web & Mobile Platforms"
      | "Not Sure / Needs Advisory",
    problem: "",
    existingSystems: "",
    budget: "$25K–$50K" as
      | "$100K+"
      | "$50K–$100K"
      | "$25K–$50K"
      | "$10K–$25K"
      | "$5K–$10K"
      | "Not sure yet",
    timeline: "1–3 months" as
      | "< 1 month"
      | "1–3 months"
      | "3–6 months"
      | "6+ months",
    honeypot: "",
    turnstileToken: "",
  });

  // Pre-fill based on query params (Estimator, Product, Pitch Lab Idea, Industry)
  useEffect(() => {
    setFormData((prev) => {
      const updated = { ...prev };

      if (projectTypeParam && [
        "Custom AI / GenAI",
        "AI Agents & Automation",
        "Enterprise Software",
        "Web & Mobile Platforms",
        "Not Sure / Needs Advisory",
      ].includes(projectTypeParam)) {
        updated.projectType = projectTypeParam as typeof prev.projectType;
      }

      if (budgetParam && [
        "$100K+",
        "$50K–$100K",
        "$25K–$50K",
        "$10K–$25K",
        "$5K–$10K",
        "Not sure yet",
      ].includes(budgetParam)) {
        updated.budget = budgetParam as typeof prev.budget;
      }

      if (timelineParam && [
        "< 1 month",
        "1–3 months",
        "3–6 months",
        "6+ months",
      ].includes(timelineParam)) {
        updated.timeline = timelineParam as typeof prev.timeline;
      }

      if (summaryParam) {
        updated.problem = summaryParam;
      } else if (productParam) {
        if (productParam.includes("ask") || productParam.includes("talent")) {
          updated.projectType = "Custom AI / GenAI";
          updated.problem = `Interested in evaluating the ${productParam.toUpperCase()} private copilot / RAG architecture for our enterprise operations.`;
        } else if (productParam.includes("docs") || productParam.includes("agents")) {
          updated.projectType = "AI Agents & Automation";
          updated.problem = `Interested in deploying ${productParam.toUpperCase()} autonomous workflow and document extraction intelligence.`;
        } else if (productParam.includes("flow") || productParam.includes("ops")) {
          updated.projectType = "Enterprise Software";
          updated.problem = `Interested in evaluating ${productParam.toUpperCase()} for operational control and multi-tier systems integration.`;
        }
      } else if (ideaParam) {
        updated.problem = `Interested in piloting the ${ideaParam.replace(/-/g, " ").toUpperCase()} blueprint from ATCDL.`;
      } else if (industryParam) {
        updated.problem = `Interested in exploring technology engineering solutions tailored for the ${industryParam.toUpperCase()} sector.`;
      }

      return updated;
    });
  }, [productParam, ideaParam, industryParam, projectTypeParam, budgetParam, timelineParam, summaryParam]);

  const validateStep1 = () => {
    if (formData.problem.trim().length < 20) {
      setSubmitError("Please provide at least 20 characters describing your problem or objective.");
      return false;
    }
    setSubmitError(null);
    return true;
  };

  const validateStep2 = () => {
    setSubmitError(null);
    return true;
  };

  const validateStep3 = () => {
    if (formData.name.trim().length < 2) {
      setSubmitError("Please enter your full name.");
      return false;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setSubmitError("Please enter a valid work email address.");
      return false;
    }
    setSubmitError(null);
    return true;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const prevStep = () => {
    setSubmitError(null);
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Extract Turnstile token from state or direct input
    const cfInput = typeof document !== "undefined"
      ? (document.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement | null)
      : null;
    const effectiveToken = formData.turnstileToken || (cfInput ? cfInput.value : "");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken: effectiveToken,
          source: productParam ? `product_${productParam}` : "direct_brief",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed. Please check your inputs.");
      }

      // Track lead submission analytics
      track("contact_submitted", {
        projectType: formData.projectType,
        budget: formData.budget,
        source: productParam ? `product_${productParam}` : "direct_brief",
      });

      if (productParam) {
        track("product_demo_requested", { product: productParam });
      }

      // Route to thank you page with reference
      router.push(`/contact/thank-you?ref=${data.id}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-custom py-16 max-w-3xl">
      <Reveal>
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <Badge status="Concept" size="sm">
            CONFIDENTIAL SCOPE BRIEF
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Start Your Project Brief
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-xl">
            Tell us about your business friction, target timeline, and systems. An
            engineering lead will review the architecture and reach back within 24 hours.
          </p>

          {/* Stepper Progress */}
          <div className="flex items-center gap-3 mt-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all ${
                    step === num
                      ? "bg-[var(--accent)] text-white shadow-[0_0_15px_rgba(77,141,255,0.4)]"
                      : step > num
                      ? "bg-[var(--bg-elevated)] border border-[var(--success)] text-[var(--success)]"
                      : "bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)]"
                  }`}
                >
                  {step > num ? <CheckCircle2 className="w-4 h-4" /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-12 sm:w-16 h-0.5 rounded ${
                      step > num ? "bg-[var(--success)]" : "bg-[var(--border)]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Form Card */}
      <Reveal>
        <Card variant="elevated" className="p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Honeypot field (hidden from real users) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error Banner */}
            {submitError && (
              <div
                role="alert"
                className="p-4 rounded-lg bg-[rgba(255,98,98,0.1)] border border-[rgba(255,98,98,0.3)] text-xs text-[var(--error)] flex items-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* STEP 1: The Problem & Offering */}
            {step === 1 && (
              <div className="flex flex-col gap-6 animate-in fade-in-50 duration-200">
                <div className="border-b border-[var(--border)] pb-3">
                  <h2 className="text-base font-semibold text-[var(--text-primary)]">
                    Step 1: Offering &amp; Operational Problem
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    What capability are you looking to engineer or solve?
                  </p>
                </div>

                <FormField label="Target Offering" required>
                  <Select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectType: e.target.value as typeof formData.projectType,
                      })
                    }
                    options={[
                      { value: "Custom AI / GenAI", label: "Custom AI / GenAI (RAG, Copilots, Custom LLMs)" },
                      { value: "AI Agents & Automation", label: "AI Agents & Automation (Workflows, Document OCR)" },
                      { value: "Enterprise Software", label: "Enterprise Software (ERP, Custom Portals, SLAs)" },
                      { value: "Web & Mobile Platforms", label: "Web & Mobile Platforms (High-Scale Apps)" },
                      { value: "Not Sure / Needs Advisory", label: "Not Sure / Needs Technical Advisory" },
                    ]}
                  />
                </FormField>

                <FormField
                  label="What problem does your business need solved?"
                  required
                  hint="Minimum 20 characters. Include business impact, current bottlenecks, or desired features."
                >
                  <Textarea
                    rows={5}
                    placeholder="We spend ~35 hours a week manually re-keying invoices into SAP and reconciling discrepancies across branches..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  />
                </FormField>

                <FormField
                  label="Existing Systems &amp; Integrations"
                  hint="e.g. SAP, Salesforce, PostgreSQL, QuickBooks, AWS, SharePoint"
                >
                  <Input
                    placeholder="List existing tech stack or databases to integrate with"
                    value={formData.existingSystems}
                    onChange={(e) =>
                      setFormData({ ...formData, existingSystems: e.target.value })
                    }
                  />
                </FormField>

                <div className="flex justify-end pt-4">
                  <Button type="button" variant="primary" onClick={nextStep}>
                    <span>Continue to Budget &amp; Timeline</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Budget & Timeline */}
            {step === 2 && (
              <div className="flex flex-col gap-6 animate-in fade-in-50 duration-200">
                <div className="border-b border-[var(--border)] pb-3">
                  <h2 className="text-base font-semibold text-[var(--text-primary)]">
                    Step 2: Budget &amp; Target Horizon
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Helps us calibrate discovery scope, architectural tiers, and delivery pace.
                  </p>
                </div>

                <FormField label="Anticipated Capital / Budget Range" required>
                  <Select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        budget: e.target.value as typeof formData.budget,
                      })
                    }
                    options={[
                      { value: "$100K+", label: "$100,000+ (Enterprise Overhaul / Full Agent Fleet)" },
                      { value: "$50K–$100K", label: "$50,000–$100,000 (Production System / Deep Integration)" },
                      { value: "$25K–$50K", label: "$25,000–$50,000 (Targeted Solution / Custom Copilot)" },
                      { value: "$10K–$25K", label: "$10,000–$25,000 (Production MVP / Workflow Automation)" },
                      { value: "$5K–$10K", label: "$5,000–$10,000 (Focused Pilot / Prototype)" },
                      { value: "Not sure yet", label: "Not sure yet (Explore during Discovery)" },
                    ]}
                  />
                </FormField>

                <FormField label="Target Delivery Timeline" required>
                  <Select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        timeline: e.target.value as typeof formData.timeline,
                      })
                    }
                    options={[
                      { value: "< 1 month", label: "< 1 month (Immediate Sprint / Urgent)" },
                      { value: "1–3 months", label: "1–3 months (Standard Engineering Cycle)" },
                      { value: "3–6 months", label: "3–6 months (Multi-phase Deployment)" },
                      { value: "6+ months", label: "6+ months (Long-term Strategy)" },
                    ]}
                  />
                </FormField>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="ghost" onClick={prevStep}>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button type="button" variant="primary" onClick={nextStep}>
                    <span>Continue to Contact</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Submission */}
            {step === 3 && (
              <div className="flex flex-col gap-6 animate-in fade-in-50 duration-200">
                <div className="border-b border-[var(--border)] pb-3">
                  <h2 className="text-base font-semibold text-[var(--text-primary)]">
                    Step 3: Point of Contact
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Where should our engineering leadership send discovery findings?
                  </p>
                </div>

                <FormField label="Your Full Name" required>
                  <Input
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </FormField>

                <FormField label="Work Email Address" required hint="Business domain preferred">
                  <Input
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </FormField>

                <FormField label="Company or Organization">
                  <Input
                    placeholder="e.g. Acme Logistics, Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </FormField>

                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[11px] text-[var(--text-muted)] leading-relaxed">
                  🔒 We sign NDAs prior to accessing any internal data or architecture. No spam, ever.
                </div>

                <Turnstile
                  onSuccess={(token) => setFormData((prev) => ({ ...prev, turnstileToken: token }))}
                />

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="ghost" onClick={prevStep}>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>
      </Reveal>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container-custom py-24 text-center">Loading brief...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}

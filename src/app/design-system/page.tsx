"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge, StatusType } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { FormField, Input, Textarea, Select } from "@/components/ui/Form";
import { Accordion } from "@/components/ui/Accordion";
import { Tabs } from "@/components/ui/Tabs";
import { Modal } from "@/components/ui/Modal";
import { Toast } from "@/components/ui/Toast";
import { Reveal } from "@/components/motion/Reveal";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { Sparkles, Terminal, Shield, ArrowRight } from "lucide-react";

export default function DesignSystemPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>("sample");

  const statuses: StatusType[] = [
    "Client",
    "Product",
    "Prototype",
    "Lab",
    "Concept",
    "Open Source",
  ];

  return (
    <div className="container-custom py-12 flex flex-col gap-16">
      {/* Header */}
      <Reveal>
        <div className="flex flex-col gap-2 border-b border-[var(--border)] pb-8">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent-ai)]">
              Antigravity Design System
            </span>
            <Badge status="Lab" size="sm" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            NIMBRIX Component & Motion Primitives
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-2xl">
            Living verification page for Milestone 0. Tests token rendering, accessible
            states (default, hover, focus-visible, active, disabled), GSAP motion, and honest
            status badge rules.
          </p>
        </div>
      </Reveal>

      {/* 1. Color & Surface Tokens */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <span className="text-[var(--accent)] font-mono">01.</span> Surfaces & Design Tokens
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">src/styles/tokens.css</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[
              { name: "bg-primary", hex: "#070A0F", desc: "Main viewport" },
              { name: "bg-secondary", hex: "#0B1018", desc: "Inputs & nav" },
              { name: "bg-card", hex: "#101722", desc: "Default card" },
              { name: "bg-elevated", hex: "#141C28", desc: "Modals & menus" },
              { name: "border", hex: "#202B3A", desc: "Dividers & frames" },
              { name: "accent", hex: "#4D8DFF", desc: "Primary CTA" },
              { name: "accent-ai", hex: "#39D6D0", desc: "AI / GenAI only" },
              { name: "success", hex: "#35C98B", desc: "Live client / OK" },
              { name: "warning", hex: "#F3B84B", desc: "Prototype / alert" },
              { name: "error", hex: "#FF6262", desc: "Validation fail" },
              { name: "text-primary", hex: "#F4F7FB", desc: "Headings" },
              { name: "text-muted", hex: "#6F7A8A", desc: "Metadata & notes" },
            ].map((token) => (
              <div
                key={token.name}
                className="p-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-card)] flex flex-col gap-2"
              >
                <div
                  className="w-full h-8 rounded border border-white/10"
                  style={{ backgroundColor: token.hex }}
                />
                <div>
                  <div className="font-mono text-xs text-[var(--text-primary)]">{token.name}</div>
                  <div className="font-mono text-[10px] text-[var(--text-muted)]">{token.hex}</div>
                  <div className="text-[10px] text-[var(--text-secondary)] mt-0.5">{token.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 2. Status Badges */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <span className="text-[var(--accent)] font-mono">02.</span> Status Badges (Rule 4)
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">Rule 4 &amp; 12</span>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)] flex flex-col gap-4">
            <p className="text-xs text-[var(--text-secondary)]">
              Rule 4: Every project, idea, and product must honestly show its stage. Only
              <code className="text-[var(--success)] ml-1">Client</code> may be labeled a case study.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {statuses.map((status) => (
                <div key={status} className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <Badge status={status} size="md" />
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    status=&quot;{status}&quot;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. Buttons & Links */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <span className="text-[var(--accent)] font-mono">03.</span> Buttons &amp; Action Links
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">Hover, Focus, Loading, A9 Micro-animation</span>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)] flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="ai">
                <Sparkles className="w-4 h-4 mr-1" />
                AI Pipeline Button
              </Button>
              <Button variant="primary" isLoading>
                Loading
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>

            <div className="border-t border-[var(--border)] pt-4 flex flex-wrap items-center gap-8">
              <Link href="/solutions">Solutions Overview (A9 Arrow)</Link>
              <Link href="/contact" variant="button">
                Get an Estimate
              </Link>
              <Link href="https://github.com/Mussab-21" external variant="secondary">
                GitHub Organization (External)
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. Cards & Cursor Glow */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <span className="text-[var(--accent)] font-mono">04.</span> Cards &amp; Interactive Cursor Glow
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">A5 &amp; A6 Tokens</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <div className="text-xs font-mono text-[var(--text-muted)]">DEFAULT CARD</div>
                <h3 className="text-lg font-semibold">Standard Surface</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)]">
                  Uses `--bg-card` with static border. Ideal for informational containers, logs, and secondary metrics.
                </p>
              </CardContent>
              <CardFooter>
                <span className="text-xs font-mono text-[var(--text-muted)]">Static Frame</span>
              </CardFooter>
            </Card>

            <CursorGlow>
              <Card variant="interactive" className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent)]">INTERACTIVE + GLOW</span>
                    <Badge status="Product" size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    NimbrixDocs Intelligence
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Hover your mouse over this card on desktop to see the fluid cursor glow (A6) and subtle 3px elevation (A5).
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/products/nimbrix-docs">Explore Demo</Link>
                </CardFooter>
              </Card>
            </CursorGlow>

            <Card variant="elevated">
              <CardHeader>
                <div className="text-xs font-mono text-[var(--accent-ai)]">ELEVATED CARD</div>
                <h3 className="text-lg font-semibold">Mission-Critical System</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)]">
                  Uses `--bg-elevated` with deep shadow for emphasized modals, drawer items, and hero stats.
                </p>
              </CardContent>
              <CardFooter>
                <Badge status="Client" size="sm" />
              </CardFooter>
            </Card>
          </div>
        </section>
      </Reveal>

      {/* 5. Accessible Form Controls */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <span className="text-[var(--accent)] font-mono">05.</span> Form Controls &amp; Validation States
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">WCAG 2.2 AA ARIA Labels</span>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)] grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Full Name" required hint="e.g. Alex Mercer">
              <Input placeholder="Enter your full name" defaultValue="Alex Mercer" />
            </FormField>

            <FormField
              label="Work Email"
              required
              error="Business email required (no personal Gmail/Yahoo)"
            >
              <Input
                type="email"
                defaultValue="alex@personal.com"
                error
                aria-invalid={true}
              />
            </FormField>

            <FormField label="Service Offering" required>
              <Select
                defaultValue="ai"
                options={[
                  { value: "ai", label: "Custom AI & GenAI Systems" },
                  { value: "agents", label: "AI Agents & Autonomous Automation" },
                  { value: "enterprise", label: "Enterprise Software & ERP" },
                  { value: "platform", label: "Web & Mobile Platforms" },
                ]}
              />
            </FormField>

            <FormField label="Estimated Timeline">
              <Select
                defaultValue="1-3"
                options={[
                  { value: "quick", label: "< 1 month (Rapid MVP)" },
                  { value: "1-3", label: "1–3 months (Production Ready)" },
                  { value: "3-6", label: "3–6 months (Enterprise Scale)" },
                ]}
              />
            </FormField>

            <div className="md:col-span-2">
              <FormField
                label="Core Business Problem"
                required
                hint="Describe systems to integrate, data volume, and target outcomes"
              >
                <Textarea
                  placeholder="Tell us what friction your operations team is encountering..."
                  rows={3}
                />
              </FormField>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. Tabs, Accordion, Modal & Toast */}
      <Reveal>
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <span className="text-[var(--accent)] font-mono">06.</span> Interactive Primitives (Tabs, Accordion, Modal, Toast)
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">Accessible State Components</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tabs */}
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)]">
              <h3 className="text-sm font-mono text-[var(--text-muted)] uppercase mb-4">
                Architecture Tabs Demo
              </h3>
              <Tabs
                tabs={[
                  {
                    id: "tab-copilot",
                    label: "NimbrixAsk",
                    badge: "RAG",
                    content: (
                      <div className="flex flex-col gap-2 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                        <div className="text-sm font-semibold text-[var(--accent-ai)]">
                          Private Document Copilot
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          Permission-aware retrieval pipeline querying vector indices with document citation chips and zero data leakage.
                        </p>
                      </div>
                    ),
                  },
                  {
                    id: "tab-docs",
                    label: "NimbrixDocs",
                    badge: "OCR",
                    content: (
                      <div className="flex flex-col gap-2 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                        <div className="text-sm font-semibold text-[var(--accent)]">
                          Invoice &amp; Document Intelligence
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          Vision + LLM extraction pipeline turning scanned PDFs into validated ERP-ready ledger payloads.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            {/* Accordion */}
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)]">
              <h3 className="text-sm font-mono text-[var(--text-muted)] uppercase mb-4">
                FAQ / Process Accordion
              </h3>
              <Accordion
                defaultOpenId="acc-1"
                items={[
                  {
                    id: "acc-1",
                    title: "How do we deploy products in regulated environments?",
                    content:
                      "We support multi-cloud (AWS, GCP, Azure), private virtual clouds (VPC), and full on-premise air-gapped deployments for banking and telecom clients.",
                  },
                  {
                    id: "acc-2",
                    title: "What is your commercial model for custom engineering?",
                    content:
                      "Discovery-first milestones with fixed-price scope deliverables, followed by monthly support and SLA maintenance guarantees.",
                  },
                ]}
              />
            </div>
          </div>

          {/* Modal & Toast triggers */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setModalOpen(true)}>
                <Terminal className="w-4 h-4 mr-1.5 text-[var(--accent)]" />
                Launch Demo Modal
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setActiveToast(activeToast ? null : "Verification alert triggered!")
                }
              >
                <Shield className="w-4 h-4 mr-1.5 text-[var(--success)]" />
                Toggle Test Toast
              </Button>
            </div>

            {activeToast && (
              <Toast
                type="success"
                title="M0 Foundation Verified"
                message="All design tokens, GSAP primitives, and accessible components are loaded."
                onClose={() => setActiveToast(null)}
              />
            )}
          </div>
        </section>
      </Reveal>

      {/* Modal Dialog */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Interactive Verification Modal"
        description="Verifies backdrop blur, focus containment, keyboard Esc dismiss, and portal rendering."
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            This modal conforms to the high-trust engineering aesthetic of NIMBRIX: no ungrounded styling, dark surface contrast, and crisp typography.
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Confirm &amp; Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

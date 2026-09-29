import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Terms of Service | ATCDL",
  description: "Terms and conditions governing the use of ATCDL (Azaan Trading Contracting Digital Lab) website and engineering services.",
};

export default function TermsPage() {
  return (
    <div className="container-custom py-16 max-w-3xl flex flex-col gap-10 text-sm text-[var(--text-secondary)] leading-relaxed">
      <Reveal>
        <div className="border-b border-[var(--border)] pb-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
            Legal &amp; Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Terms of Service
          </h1>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            Effective Date: September 2026 // Version 1.1
          </p>
        </div>
      </Reveal>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">1. Scope of Engagement</h2>
        <p>
          ATCDL (Azaan Trading Contracting Digital Lab) provides technology engineering, custom AI development, autonomous workflow automation,
          and software implementation services. Specific deliverables, delivery milestones, SLAs, and
          financial terms are governed by mutually executed Statements of Work (SOW) and Master Services
          Agreements (MSA).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">2. Intellectual Property</h2>
        <p>
          Unless explicitly agreed otherwise in a specific SOW:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>Clients retain sole ownership of all pre-existing data, proprietary workflows, and bespoke application code built specifically for their engagement upon full payment.</li>
          <li>ATCDL retains ownership of pre-existing core components, open-source libraries, and reusable architecture frameworks (including ATCDL Docs, ATCDL Ask, and ATCDL Agents base engines), granting the client a perpetual, non-exclusive license to operate the deployed solution.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">3. Confidentiality &amp; NDA</h2>
        <p>
          Both parties agree to protect and treat as strictly confidential all technical specifications,
          business operations, and customer data disclosed during discovery and engagement execution.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">4. Warranty &amp; Liability</h2>
        <p>
          Custom software and AI systems are provided with warranty periods as specified in active
          client contracts. ATCDL implements rigorous unit, integration, and security testing prior to
          deployment sign-off.
        </p>
      </section>
    </div>
  );
}

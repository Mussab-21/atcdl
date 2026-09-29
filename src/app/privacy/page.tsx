import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Privacy Policy | NIMBRIX",
  description: "NIMBRIX Privacy Policy regarding client data, site analytics, and information security.",
};

export default function PrivacyPage() {
  return (
    <div className="container-custom py-16 max-w-3xl flex flex-col gap-10 text-sm text-[var(--text-secondary)] leading-relaxed">
      <Reveal>
        <div className="border-b border-[var(--border)] pb-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
            Legal &amp; Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            Effective Date: September 2026 // Last Updated: v1.1
          </p>
        </div>
      </Reveal>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">1. Information We Collect</h2>
        <p>
          We collect information provided directly through our Project Brief and contact forms,
          including your name, business email, organization name, project scope, budget range, and
          technical descriptions of the problems you seek to solve.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">2. How We Use Information</h2>
        <p>
          Information submitted to NIMBRIX is utilized solely to evaluate engineering feasibility,
          provide technical scopes, execute agreed-upon development contracts, and communicate regarding
          our services. We do not sell, rent, or trade your personal or corporate information to third
          parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">3. AI &amp; Client Data Isolation</h2>
        <p>
          Client documents, training data, embeddings, and API prompts processed by NIMBRIX custom
          solutions or product deployments remain the strict, unalienable property of the client. Under no
          circumstances are client datasets used to train public machine learning foundation models.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">4. Security &amp; Retention</h2>
        <p>
          We employ industry-standard encryption (TLS in transit, AES-256 at rest) and strict access
          controls. IP addresses collected for spam prevention are hashed and retained only as long as
          necessary for security auditing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">5. Inquiries &amp; Data Subject Rights</h2>
        <p>
          To request deletion, review, or modification of any submitted information, contact our privacy
          team at <code className="text-[var(--accent)]">privacy@nimbrix.com</code>.
        </p>
      </section>
    </div>
  );
}

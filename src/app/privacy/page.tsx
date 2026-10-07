import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Privacy Policy | ATCDL",
  description: "ATCDL (Azaan Trading Contracting Digital Lab) Privacy Policy regarding client data, site analytics, and information security.",
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
            Updated: October 2026
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
          Information submitted to ATCDL (Azaan Trading Contracting Digital Lab) is utilized solely to evaluate engineering feasibility,
          provide technical scopes, execute agreed-upon development contracts, and communicate regarding
          our services. We do not sell, rent, or trade your personal or corporate information to third
          parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">3. AI &amp; Client Data Isolation</h2>
        <p>
          Data handling, model providers, ownership and access controls for client projects are agreed in the project contract. Please do not submit confidential documents or credentials through this public inquiry form.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">4. Security &amp; Retention</h2>
        <p>
          Inquiry details are saved in our database and may be forwarded through configured communication providers, including Discord and Resend, so our team can respond. Hosting providers process the information needed to operate the website. We use an IP-derived identifier for abuse prevention. The form stores a temporary, essential confirmation cookie for one hour; this cookie is not used for advertising.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">5. Inquiries &amp; Data Subject Rights</h2>
        <p>
          To request deletion, review, or modification of any submitted information, contact our privacy
          team at <code className="text-[var(--accent)]">privacy@atcdl.com</code>.
        </p>
      </section>
    </div>
  );
}

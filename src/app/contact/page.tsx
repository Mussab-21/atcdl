import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactFormClient } from "@/components/forms/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact & Discovery | ATC Digital Labs",
  description:
    "Discuss your project, book an engineered product demo, or request a technology consultation with ATC Digital Labs engineering leadership.",
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="container-custom py-24 text-center text-sm text-slate-500 font-mono">
          Loading discovery brief...
        </div>
      }
    >
      <ContactFormClient />
    </Suspense>
  );
}

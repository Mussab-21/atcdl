"use client";

import React, { Suspense } from "react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CheckCircle2, Clock, ShieldCheck, ArrowRight } from "lucide-react";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const refId = searchParams.get("ref") || "NBX-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="container-custom py-20 max-w-2xl">
      <Reveal>
        <Card variant="elevated" className="p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[rgba(53,201,139,0.15)] border border-[rgba(53,201,139,0.3)] flex items-center justify-center text-[var(--success)] shadow-[0_0_30px_rgba(53,201,139,0.2)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-[var(--accent-ai)] uppercase tracking-widest">
              Brief Received &amp; Logged
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              We&apos;ve got the brief.
            </h1>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              Your inquiry has been assigned reference{" "}
              <code className="px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)] font-mono text-[var(--accent)] text-xs font-semibold">
                {refId}
              </code>
              . Our engineering leadership is reviewing the requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left my-2">
            <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">24-Hour Review</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                  An engineering lead conducts architectural fit review and prepares initial discovery questions.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">Confidentiality Assured</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                  All details shared are held strictly under mutual NDA standards. No data is shared with third parties.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-[var(--border)] w-full">
            <NextLink href="/">
              <Button variant="outline" size="md">
                Return to Home
              </Button>
            </NextLink>
            <NextLink href="/work">
              <Button variant="primary" size="md">
                <span>Explore Technical Implementations</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </NextLink>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="container-custom py-24 text-center">Loading confirmation...</div>}>
      <ThankYouInner />
    </Suspense>
  );
}

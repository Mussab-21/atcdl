import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

interface MetricItem {
  label: string;
  before: string;
  after: string;
}

interface CaseStudyBeforeAfterProps {
  /** Short description of the pain state before the project */
  beforeHeadline: string;
  beforePoints: string[];
  /** Short description of the engineered outcome after the project */
  afterHeadline: string;
  afterPoints: string[];
  /**
   * Real, measurable deltas. Only include metrics you can substantiate.
   * Do NOT invent numbers — leave this array empty if no real data exists.
   */
  metrics: MetricItem[];
  className?: string;
}

export function CaseStudyBeforeAfter({
  beforeHeadline,
  beforePoints,
  afterHeadline,
  afterPoints,
  metrics,
  className = "",
}: CaseStudyBeforeAfterProps) {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {/* Split Before / After Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)]">
        {/* Before */}
        <div className="p-6 sm:p-8 bg-[rgba(255,98,98,0.04)] border-b md:border-b-0 md:border-r border-[var(--border)] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[var(--error)] shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--error)]">
              Before
            </span>
          </div>
          <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
            {beforeHeadline}
          </h3>
          <ul className="flex flex-col gap-2.5">
            {beforePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--error)]/60 mt-1.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="p-6 sm:p-8 bg-[rgba(53,201,139,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--success)]">
              After
            </span>
          </div>
          <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
            {afterHeadline}
          </h3>
          <ul className="flex flex-col gap-2.5">
            {afterPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)] shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Real Metrics Delta Table — only render if real data provided */}
      {metrics.length > 0 && (
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden">
          <div className="px-6 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Measured Outcomes (Real Data)
            </span>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 px-6 py-4 items-center hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <div className="text-xs font-medium text-[var(--text-secondary)]">{m.label}</div>
                <div className="text-xs font-mono text-[var(--error)] bg-[rgba(255,98,98,0.08)] px-2 py-1 rounded text-center">
                  {m.before}
                </div>
                <div className="flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                  <div className="text-xs font-mono text-[var(--success)] bg-[rgba(53,201,139,0.08)] px-2 py-1 rounded flex-1 text-center">
                    {m.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

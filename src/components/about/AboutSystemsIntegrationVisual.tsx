import React from "react";
import {
  FileSpreadsheet,
  Server,
  FileText,
  AppWindow,
  ArrowRight,
  ArrowDown,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SystemNode {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SOURCE_NODES: SystemNode[] = [
  {
    title: "Spreadsheets",
    category: "Manual records & sheets",
    icon: FileSpreadsheet,
  },
  {
    title: "Legacy Systems",
    category: "Databases & ERPs",
    icon: Server,
  },
  {
    title: "Documents & Files",
    category: "SOPs, contracts & PDFs",
    icon: FileText,
  },
  {
    title: "External Apps",
    category: "SaaS & email queues",
    icon: AppWindow,
  },
];

export function AboutSystemsIntegrationVisual() {
  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none">
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(7,27,59,0.12)] overflow-hidden transition-all hover:shadow-[0_25px_60px_-12px_rgba(7,27,59,0.18)]">
        {/* Dark Navy Header Bar */}
        <div className="px-5 py-3.5 bg-[#071B3B] border-b border-[#162D50] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-slate-300 font-semibold ml-1">
              SYSTEM INTEGRATION // ARCHITECTURE
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
            ILLUSTRATIVE
          </span>
        </div>

        {/* Diagram Body */}
        <div className="p-5 sm:p-6 bg-slate-50/60 flex flex-col gap-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Disconnected Sources → Consolidated System
          </div>

          {/* 4 Source System Nodes Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {SOURCE_NODES.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.title}
                  className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2.5 transition-colors hover:border-slate-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {node.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate font-sans">
                      {node.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Convergence Flow Indicator */}
          <div className="flex items-center justify-center gap-2 py-1 text-slate-400">
            <div className="h-px flex-1 bg-slate-200" />
            <div className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-600 flex items-center gap-1 shadow-2xs">
              <span>Ingested &amp; Connected</span>
              <ArrowDown className="w-3 h-3 text-[var(--accent-green)]" />
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Central Core System Node */}
          <div className="p-4 rounded-xl bg-[#071B3B] text-white border border-[#162D50] shadow-sm flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-green)]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[var(--accent-green)] text-[#071B3B] flex items-center justify-center font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-tight">
                    ATC Technix
                  </div>
                  <div className="text-[10px] font-mono text-[var(--accent-green)]">
                    Unified Operations Core
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Synchronized</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed font-sans mt-0.5">
              Consolidated data models, automated workflows, and audit-ready access across teams and devices.
            </p>
          </div>

          {/* Footnote */}
          <div className="text-[10px] text-slate-400 font-mono text-center pt-1">
            *Conceptual diagram representing operational software consolidation.
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Shield, Database, Sparkles, Users, Cpu } from "lucide-react";

interface Props {
  type: string;
  name: string;
  className?: string;
}

export function PackageVisual({ type, name, className = "" }: Props) {
  if (type === "starter") {
    return (
      <div className={`p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs flex flex-col gap-2 ${className}`}>
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
          <span>ONE CORE CAPABILITY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="flex items-center justify-between gap-1 text-[11px] font-mono bg-slate-950 p-2 rounded border border-slate-800">
          <span className="text-slate-300">Target Ingestion</span>
          <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="text-emerald-400 font-semibold">Verified System</span>
          <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="text-slate-300">Action</span>
        </div>
      </div>
    );
  }

  if (type === "workspace") {
    return (
      <div className={`p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs flex flex-col gap-2 ${className}`}>
        <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
          <span>CONNECTED WORKSPACE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono text-center">
          <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Data Hub</div>
          <div className="p-1.5 rounded bg-purple-950/80 border border-purple-800 text-purple-300 font-semibold">Workflow</div>
          <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Team / SLA</div>
        </div>
      </div>
    );
  }

  // Command Center / Scale
  return (
    <div className={`p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
        <span>FOUNDING PARTNER SCALE</span>
        <Shield className="w-3 h-3 text-emerald-400" />
      </div>
      <div className="flex items-center justify-between gap-1 text-[10px] font-mono bg-slate-950 p-1.5 rounded border border-slate-800">
        <span className="text-slate-300">Multi-System</span>
        <span>&bull;</span>
        <span className="text-emerald-400 font-semibold">VPC / Air-gapped</span>
        <span>&bull;</span>
        <span className="text-slate-300">24/7 SLA</span>
      </div>
    </div>
  );
}

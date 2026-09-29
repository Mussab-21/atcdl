"use client";

import React from "react";
import { Monitor, Smartphone, Zap, CreditCard, Users, TrendingUp } from "lucide-react";

interface Props {
  interactive?: boolean;
  className?: string;
}

export function WebMobileVisual({ className = "" }: Props) {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-slate-900 border border-slate-800 p-5 sm:p-6 text-white overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Animated Web and Mobile Platforms digital product visual diagram"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--header-bg)] via-slate-950 to-slate-950 opacity-90 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--accent-lime)]/10 blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          04 / DIGITAL PRODUCT PLATFORM
        </span>
        <span className="text-[10px] text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded border border-lime-800/60 font-semibold">
          Sub-second Velocity
        </span>
      </div>

      {/* Device Mockups: Web + Mobile */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        {/* Web Application Mockup (7 cols) */}
        <div className="sm:col-span-7 p-3 rounded-lg bg-slate-800/90 border border-slate-700 flex flex-col gap-2 shadow-md">
          {/* Mock Browser Top bar */}
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-1.5">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[9px] font-mono text-slate-400">app.clientportal.com</span>
            <Monitor className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Web Viewport Content */}
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-mono">Monthly Active</div>
              <div className="text-sm font-bold text-slate-100 flex items-center gap-1">
                <span>48,290</span>
                <span className="text-[9px] text-emerald-400 font-mono">+34%</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-mono">Checkout SLA</div>
              <div className="text-sm font-bold text-slate-100 flex items-center gap-1">
                <span>0.4s</span>
                <span className="text-[9px] text-emerald-400 font-mono">Fast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Device Mockup (5 cols) */}
        <div className="sm:col-span-5 p-3 rounded-xl bg-slate-800/90 border border-[var(--accent-green)] flex flex-col gap-1.5 shadow-[0_0_15px_rgba(0,212,119,0.1)]">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-1">
            <span className="text-[9px] font-mono text-emerald-400 font-bold">iOS / Android</span>
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-500/20 text-[var(--accent-green)] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-200">Instant Order</div>
                <div className="text-[8px] font-mono text-slate-400">Offline Sync</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1">
          <CreditCard className="w-3 h-3 text-purple-400" />
          <span>Stripe / Local Gateways</span>
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3 text-blue-400" />
          <span>Global Edge CDN</span>
        </span>
        <span className="flex items-center gap-1 text-emerald-400">
          <TrendingUp className="w-3 h-3" />
          <span>Lighthouse 90+</span>
        </span>
      </div>
    </div>
  );
}

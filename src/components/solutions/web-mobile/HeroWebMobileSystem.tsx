"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  BarChart3,
  Play,
  Pause,
  ArrowRight,
  CreditCard,
  BellRing,
  CheckCircle2,
  Zap,
} from "lucide-react";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroWebMobileSystem() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [activeNode, setActiveNode] = useState<"web" | "mobile" | "backend" | "dashboard">("web");
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle between nodes every 6 seconds if playing
  React.useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    const nodes: Array<"web" | "mobile" | "backend" | "dashboard"> = [
      "web",
      "mobile",
      "backend",
      "dashboard",
    ];
    const interval = setInterval(() => {
      setActiveNode((prev) => {
        const nextIdx = (nodes.indexOf(prev) + 1) % nodes.length;
        return nodes[nextIdx];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion]);

  return (
    <div className="relative w-full rounded-2xl bg-[#071B3B] text-white p-5 sm:p-7 border border-slate-800 shadow-xl overflow-hidden flex flex-col gap-5 select-none">
      {/* Background Subtle Coordinate Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Header Bar: 4 Interactive Node Switchers */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveNode("web")}
            className={`px-2.5 py-1.5 rounded-lg transition-all font-semibold cursor-pointer flex items-center gap-1.5 ${
              activeNode === "web"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Web</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveNode("mobile")}
            className={`px-2.5 py-1.5 rounded-lg transition-all font-semibold cursor-pointer flex items-center gap-1.5 ${
              activeNode === "mobile"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveNode("backend")}
            className={`px-2.5 py-1.5 rounded-lg transition-all font-semibold cursor-pointer flex items-center gap-1.5 ${
              activeNode === "backend"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Backend</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveNode("dashboard")}
            className={`px-2.5 py-1.5 rounded-lg transition-all font-semibold cursor-pointer flex items-center gap-1.5 ${
              activeNode === "dashboard"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>
        </div>

        {/* Small accessibility pause/play control */}
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5 shrink-0"
          aria-label={isPlaying ? "Pause visual animation" : "Resume visual animation"}
          title={isPlaying ? "Pause visual animation" : "Resume visual animation"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Interactive Product Ecosystem Stage */}
      <div className="relative z-10 min-h-[300px] sm:min-h-[320px] flex flex-col justify-center">
        {activeNode === "web" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300 text-left font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00D477] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                Next.js Web Application // Sub-Second Performance
              </span>
              <span className="text-white">Lighthouse: 98/100</span>
            </div>

            {/* Mock Web Browser Shell */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300">app.yourcompany.com</span>
                </div>
                <span className="text-[#00D477]">HTTPS &bull; TLS 1.3</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-white">
                  <span className="font-bold font-sans text-sm">Customer Self-Service Portal</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-[#00D477] border border-emerald-500/30">
                    Live Session
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                  Responsive design tokens adapted dynamically for ultra-wide monitors down to handheld mobile devices.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">First Contentful</span>
                  <strong className="text-white text-xs">0.4s</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Server Renders</span>
                  <strong className="text-[#00D477] text-xs">Edge CDN</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">SEO Ranking</span>
                  <strong className="text-white text-xs">Optimized</strong>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between">
              <span>Fast transitions that convert visitors into active paying users.</span>
              <span className="text-[#00D477] font-bold">100% Responsive</span>
            </div>
          </div>
        )}

        {activeNode === "mobile" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300 text-left font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00D477] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                Cross-Platform Mobile // iOS &amp; Android
              </span>
              <span className="text-white">60 FPS Native</span>
            </div>

            {/* Mobile Application Display */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#2563EB]" />
                  Native Device Capabilities
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#3B82F6]">
                  App Store + Play Store Ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <BellRing className="w-3.5 h-3.5 text-[#00D477]" />
                  <span>Push Notifications</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D477]" />
                  <span>Biometric FaceID</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#00D477]" />
                  <span>Instant Offline Sync</span>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-[#00D477]" />
                  <span>Unified API Layer</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 font-sans leading-relaxed pt-1">
                One codebase deployed across Apple iOS and Google Android, slashing maintenance costs while delivering genuine native app performance.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 text-blue-200 text-xs flex items-center justify-between">
              <span>Offline-first storage ensures smooth operation in low-connectivity areas.</span>
              <span className="text-[#3B82F6] font-bold">Auto-Sync</span>
            </div>
          </div>
        )}

        {activeNode === "backend" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300 text-left font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00D477] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                Type-Safe Backend APIs &amp; Payments
              </span>
              <span className="text-white">PostgreSQL &bull; Redis</span>
            </div>

            {/* Backend Architecture Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-[#00D477]" />
                  Secure Transaction Layer
                </span>
                <span className="text-[10px] text-[#00D477]">24/7 Monitored</span>
              </div>

              <div className="flex flex-col gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-[#00D477]" />
                    PCI-DSS Payments (Stripe / Local)
                  </span>
                  <span className="text-[#00D477] font-bold">Tokenized</span>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D477]" />
                    Type-Safe REST / GraphQL Endpoints
                  </span>
                  <span className="text-white">Strict Schemas</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                Horizontal scaling architecture with automatic failover, database connection pooling, and background queue workers for reliable transaction processing.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between">
              <span>Encrypted secrets vault and tokenized payment security.</span>
              <span className="text-[#00D477] font-bold">Zero Data Leaks</span>
            </div>
          </div>
        )}

        {activeNode === "dashboard" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300 text-left font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00D477] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
                Executive Cockpit &bull; Product Telemetry
              </span>
              <span className="text-white">Live Real-Time</span>
            </div>

            {/* Telemetry Display */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Active Users</span>
                  <strong className="text-white text-xs">12,480</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Checkout Rate</span>
                  <strong className="text-[#00D477] text-xs">84.2%</strong>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">API Latency</span>
                  <strong className="text-white text-xs">32ms</strong>
                </div>
              </div>

              <div className="p-2.5 rounded bg-white/5 border border-white/10 text-xs text-slate-300 font-sans flex items-center justify-between">
                <span>User Session &bull; Error Tracking &bull; Conversion Cohorts</span>
                <span className="text-[#00D477] font-mono text-[10px]">Live Telemetry</span>
              </div>

              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                Empower your leadership and growth teams with real-time insight into adoption funnels, user churn triggers, and feature engagement.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 text-blue-200 text-xs flex items-center justify-between">
              <span>Complete product analytics without compromising user privacy.</span>
              <span className="text-[#3B82F6] font-bold">Actionable KPIs</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          Full Source Code Ownership
        </span>
        <button
          type="button"
          onClick={() => {
            const nodes: Array<"web" | "mobile" | "backend" | "dashboard"> = [
              "web",
              "mobile",
              "backend",
              "dashboard",
            ];
            const nextIdx = (nodes.indexOf(activeNode) + 1) % nodes.length;
            setActiveNode(nodes[nextIdx]);
          }}
          className="text-[#00D477] hover:underline flex items-center gap-1 cursor-pointer font-bold"
        >
          <span>Next: Inspect {activeNode === "web" ? "Mobile" : activeNode === "mobile" ? "Backend" : activeNode === "backend" ? "Dashboard" : "Web"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

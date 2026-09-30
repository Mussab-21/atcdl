"use client";

import React, { useState } from "react";
import Link from "next/link";

export function ProductsCustomBridgeSection() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const operationFlow = [
    {
      label: "DATA",
      detail: "Invoices, emails, PDFs, ERP records & audio streams",
      icon: "M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z",
    },
    {
      label: "SYSTEM",
      detail: "ATCDL model inference, validation rules & state machines",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      label: "WORKFLOW",
      detail: "Automated routing, ledger posting & notifications",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      label: "PEOPLE",
      detail: "Exception queues, approval dashboards & supervisor sign-off",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      label: "RESULT",
      detail: "Verified records in ERP, zero manual re-entry & complete audit trail",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Built For Real Operations */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-800 border border-blue-200 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Operational Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built for Real Operations
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              ATCDL products are designed around the way organizations actually work — not
              isolated features or hype. Data moves seamlessly through validation into human oversight.
            </p>
          </div>

          {/* Interactive Moving Data Path */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {operationFlow.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      isActive
                        ? "bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                        : "bg-slate-50/70 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <svg
                          className={`w-5 h-5 ${
                            isActive ? "text-blue-600" : "text-slate-400"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <div className="font-mono text-xs font-bold tracking-wider text-slate-900 mb-1">
                        {item.label}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                    {/* Step indicator arrow for desktop */}
                    {idx < operationFlow.length - 1 && (
                      <div className="hidden md:flex justify-end pt-3">
                        <span className="text-slate-300 text-xs">→</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
              <span className="font-mono">
                Click any stage to examine the end-to-end operational lineage.
              </span>
              <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Zero isolated features • Complete enterprise accountability
              </span>
            </div>
          </div>
        </div>

        {/* Part 2: Product + Custom Solution Connection ("NEED SOMETHING DIFFERENT?") */}
        <div className="bg-gradient-to-br from-[#071b3b] to-[#0b244d] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-slate-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/60 border border-blue-700/80 text-blue-300 mb-3">
                Hybrid Deployment
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Need Something Different?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Start with an ATCDL ready-to-deploy product engine, or partner with our engineering
                team to build a bespoke system tailored exactly to your proprietary formats, legacy
                ERPs, and regulatory compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all"
                >
                  Explore Solutions →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-sm font-semibold text-white transition-all"
                >
                  Build Something Custom →
                </Link>
              </div>
            </div>

            {/* Architecture Comparison Graphic */}
            <div className="w-full lg:w-96 bg-[#040e20]/80 rounded-2xl p-5 border border-slate-700/80 backdrop-blur-sm text-xs font-mono">
              <div className="text-slate-400 uppercase tracking-wider text-[11px] mb-3">
                Engagement Model Choice
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/60">
                  <div className="text-blue-300 font-bold mb-1">ATCDL Product Engines</div>
                  <div className="text-slate-300 text-[11px] font-sans">
                    Fast deployment of pre-built parsing, knowledge, and workflow software.
                  </div>
                </div>
                <div className="flex justify-center text-slate-500 text-xs">
                  ↕ or combine both
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/60">
                  <div className="text-emerald-300 font-bold mb-1">Custom Engineering</div>
                  <div className="text-slate-300 text-[11px] font-sans">
                    Full-cycle custom AI, web/mobile systems, and enterprise legacy integration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

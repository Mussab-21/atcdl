"use client";

import React, { useState } from "react";
import { AI_AGENTS_DATA } from "@/content/ai-agents-data";
import { ChevronDown, Terminal } from "lucide-react";

export function AgentTechnicalAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col gap-4 w-full">
      {/* Collapsible Trigger Box */}
      <div className="rounded-2xl bg-white border border-[#DCE5EF] overflow-hidden shadow-2xs">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full p-6 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/80 transition-colors"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold uppercase text-[#2563EB]">
                Deep Architectural Specifications
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#091326]">
                Technical Architecture &amp; Enterprise Governance
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500">
            <span className="hidden sm:inline">{isOpen ? "Hide Specs" : "Inspect Specs"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180 text-[#2563EB]" : ""
              }`}
            />
          </div>
        </button>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/60 flex flex-col gap-6">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              For CTOs, Principal Architects, and Security Teams: how we engineer agent reliability, idempotency, strict tool-calling schemas, and durable execution state machines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AI_AGENTS_DATA.technicalSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 flex flex-col gap-2 shadow-2xs text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <h4 className="text-sm font-bold text-[#091326]">
                      {spec.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans pl-3.5">
                    {spec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture Invariants Badge Strip */}
            <div className="p-4 rounded-xl bg-[#071B3B] text-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#00D477] font-bold">Standard Agent Stack:</span>
              <span className="text-slate-300">Temporal / Durable Orchestration</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">Python 3.12 / Pydantic V2</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">Redis / Kafka Event Streams</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">OpenTelemetry Traces</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">Private VPC / Air-Gapped</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

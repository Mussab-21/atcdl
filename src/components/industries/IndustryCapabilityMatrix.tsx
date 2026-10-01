"use client";

import React, { useState } from "react";
import { INDUSTRIES_EXPLORER_DATA, INDUSTRY_CAPABILITY_MATRIX } from "@/content/industries-explorer-data";
import { Check, Sparkles } from "lucide-react";

export function IndustryCapabilityMatrix() {
  const [selectedCell, setSelectedCell] = useState<{ industryId: string; capabilityId: string }>({
    industryId: "banking-finance",
    capabilityId: "ai-systems",
  });

  const capabilities = [
    { id: "ai-systems", label: "AI & Reasoning Systems", short: "AI Systems" },
    { id: "automation", label: "Workflow & Agent Automation", short: "Automation" },
    { id: "integrations", label: "Legacy Core Integrations", short: "Integrations" },
    { id: "platforms", label: "Operational Digital Platforms", short: "Platforms" },
  ];

  const currentDetail =
    INDUSTRY_CAPABILITY_MATRIX.find(
      (m) => m.industryId === selectedCell.industryId && m.capabilityId === selectedCell.capabilityId
    ) || INDUSTRY_CAPABILITY_MATRIX[0];

  const selectedIndustry =
    INDUSTRIES_EXPLORER_DATA.find((ind) => ind.id === selectedCell.industryId) ||
    INDUSTRIES_EXPLORER_DATA[0];

  const selectedCapability =
    capabilities.find((cap) => cap.id === selectedCell.capabilityId) || capabilities[0];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9FC] border-b border-[#DCE5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E6F4F5] border border-[#BCE3E6] text-[#007F86] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
            <span>Cross-Vertical Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#071326]">
            Industry &times; Capability Architecture Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#53657D] leading-relaxed">
            Click or hover over any intersection to inspect the exact engineering implementation we deploy for that operational requirement.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="bg-white rounded-3xl border border-[#DCE5EF] shadow-sm p-4 sm:p-8 overflow-hidden">
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#DCE5EF]">
                  <th className="py-3 px-4 font-mono text-xs font-bold text-slate-400 uppercase w-1/4">
                    Capability Module
                  </th>
                  {INDUSTRIES_EXPLORER_DATA.map((ind) => (
                    <th
                      key={ind.id}
                      className="py-3 px-4 font-mono text-xs font-bold text-[#071326] uppercase text-center w-[18.75%]"
                    >
                      {ind.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE5EF]">
                {capabilities.map((cap) => (
                  <tr key={cap.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-xs sm:text-sm text-[#071326]">
                      {cap.label}
                    </td>

                    {INDUSTRIES_EXPLORER_DATA.map((ind) => {
                      const isSelected =
                        selectedCell.industryId === ind.id && selectedCell.capabilityId === cap.id;

                      return (
                        <td key={ind.id} className="py-3 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => setSelectedCell({ industryId: ind.id, capabilityId: cap.id })}
                            onMouseEnter={() => setSelectedCell({ industryId: ind.id, capabilityId: cap.id })}
                            className={`w-full py-2.5 px-3 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                              isSelected
                                ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md shadow-blue-900/10 ring-2 ring-blue-500/20"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-white"
                            }`}
                          >
                            <Check className={`w-3.5 h-3.5 ${isSelected ? "text-[#00D477]" : "text-blue-600"}`} />
                            <span className="hidden sm:inline">Engineered</span>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Inspection Detail Card Below Matrix */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#071B3B] border border-[#18345C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#00D477]" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <span className="font-bold uppercase">{selectedIndustry.name}</span>
                  <span>&bull;</span>
                  <span>{selectedCapability.label}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {currentDetail.headline}
                </h4>
                <p className="text-xs text-slate-300 font-sans mt-0.5 leading-relaxed">
                  {currentDetail.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 font-mono text-[11px] text-slate-400 bg-[#091C36] px-3 py-1.5 rounded-lg border border-[#18345C]">
              <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
              <span>Production Validated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

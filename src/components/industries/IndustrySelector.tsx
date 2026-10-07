"use client";

import React from "react";
import { INDUSTRIES_EXPLORER_DATA } from "@/content/industries-explorer-data";
import { Radio, Landmark, Factory, Truck } from "lucide-react";

export function IndustrySelector({
  activeIndustryId,
  onSelectIndustry,
}: {
  activeIndustryId: string;
  onSelectIndustry: (id: string) => void;
}) {
  const industryIcons: Record<string, React.ElementType> = {
    telecom: Radio,
    "banking-finance": Landmark,
    manufacturing: Factory,
    "logistics-supply-chain": Truck,
  };

  return (
    <div id="industry-explorer" className="scroll-mt-20 py-4 bg-white border-b border-[#DCE5EF] sticky top-[var(--nav-h)] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#007F86] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
            <span>SELECT VERTICAL:</span>
          </div>

          {/* Horizontal Scrollable Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 w-full lg:w-auto scrollbar-none">
            {INDUSTRIES_EXPLORER_DATA.map((ind) => {
              const Icon = industryIcons[ind.id] || Radio;
              const isActive = activeIndustryId === ind.id;

              return (
                <button
                  key={ind.id}
                  type="button"
                  aria-pressed={activeIndustryId === ind.id} onClick={() => onSelectIndustry(ind.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? "bg-[#071B3B] text-white border-[#2563EB] shadow-md shadow-blue-900/10 ring-2 ring-blue-500/20"
                      : "bg-white text-[#52647B] border-[#DCE5EF] hover:border-[#3B82F6] hover:text-[#071326] hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#00D477]" : "text-slate-400"}`} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { track } from "@/lib/analytics";
import { INDUSTRIES_EXPLORER_DATA, IndustryExplorerItem } from "@/content/industries-explorer-data";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { IndustrySelector } from "@/components/industries/IndustrySelector";
import { InteractiveIndustrySystemSection } from "@/components/industries/InteractiveIndustrySystemSection";
import { IndustryOperationalBottlenecks } from "@/components/industries/IndustryOperationalBottlenecks";
import { IndustryWhatWeBuildSection } from "@/components/industries/IndustryWhatWeBuildSection";
import { IndustryCapabilityMatrix } from "@/components/industries/IndustryCapabilityMatrix";
import { IndustryRelatedWorkSection } from "@/components/industries/IndustryRelatedWorkSection";
import { IndustryRelatedSolutionsSection } from "@/components/industries/IndustryRelatedSolutionsSection";
import { IndustryFinalCTASection } from "@/components/industries/IndustryFinalCTASection";

export function IndustriesExplorerClient() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("telecom");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => { const sync = () => {const raw=location.hash.slice(1);const id=({banking:"banking-finance",logistics:"logistics-supply-chain"} as Record<string,string>)[raw]||raw;if(INDUSTRIES_EXPLORER_DATA.some(i=>i.id===id))setSelectedIndustryId(id);};sync();window.addEventListener("hashchange",sync);return()=>window.removeEventListener("hashchange",sync);},[]);
  const activeIndustry: IndustryExplorerItem =
    INDUSTRIES_EXPLORER_DATA.find((ind) => ind.id === selectedIndustryId) ||
    INDUSTRIES_EXPLORER_DATA[0];

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    track("industry_selected", {industry: id});
    history.replaceState(null,"",`#${id}`);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white text-[#071326] flex flex-col">
      {/* 01: Industry Hero (Compact ~450-550px with adaptive Industry System Map) */}
      <IndustryHero activeIndustryId={selectedIndustryId} onSelectIndustry={handleSelectIndustry} />

      {/* 02: Horizontal Industry Selector (Sticky Navigation) */}
      <IndustrySelector
        activeIndustryId={selectedIndustryId}
        onSelectIndustry={handleSelectIndustry}
      />

      {/* 03: Main Interactive Industry System Explorer */}
      <InteractiveIndustrySystemSection
        industry={activeIndustry}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
      />

      {/* 04: The 3 Operational Bottlenecks (Data, Workflow, Decisions) */}
      <IndustryOperationalBottlenecks />

      {/* 05: What We Can Build Around Your Industry (4 Capability Modules) */}
      <IndustryWhatWeBuildSection />

      {/* 06: Cross-Vertical Capability Matrix */}
      <IndustryCapabilityMatrix />

      {/* 07: Verified Related Work */}
      <IndustryRelatedWorkSection industry={activeIndustry} />

      {/* 08: Relevant Solutions */}
      <IndustryRelatedSolutionsSection industry={activeIndustry} />

      {/* 09: Final Contained CTA */}
      <IndustryFinalCTASection />
    </div>
  );
}

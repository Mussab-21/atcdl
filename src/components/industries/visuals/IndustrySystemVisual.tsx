"use client";

import { useVisibleMotion } from "@/components/motion/useVisibleMotion";
import React, {useRef} from "react";
import { TelecomSystemVisual } from "./TelecomSystemVisual";
import { BankingSystemVisual } from "./BankingSystemVisual";
import { ManufacturingSystemVisual } from "./ManufacturingSystemVisual";
import { LogisticsSystemVisual } from "./LogisticsSystemVisual";
import { IndustryExplorerItem } from "@/content/industries-explorer-data";
import { Pause, Play } from "lucide-react";

export function IndustrySystemVisual({
  industry,
  isPlaying,
  onTogglePlay,
}: {
  industry: IndustryExplorerItem;
  isPlaying: boolean;
  onTogglePlay: () => void;
}) {
  const motionRef = useRef<HTMLDivElement>(null);
  const visibleMotion = useVisibleMotion(motionRef);
  return (
    <div ref={motionRef} className="w-full rounded-3xl bg-[#071B3B] border border-[#18345C] p-5 sm:p-7 shadow-[0_24px_60px_rgba(7,27,59,0.16)] text-white relative overflow-hidden flex flex-col gap-4 text-left transition-all duration-500">
      {/* Subtle Coordinate Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Internal ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Technical Console Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#18345C] text-xs font-mono gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00D477] animate-pulse" />
          <span className="font-bold text-white tracking-wider">
            ILLUSTRATIVE SYSTEM // {industry.shortName.toUpperCase()} OPERATIONS ENGINE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
            STATUS: <strong className="text-[#00D477]">ACTIVE SIMULATION</strong>
          </span>

          <button
            type="button"
            onClick={onTogglePlay}
            className="min-w-11 min-h-11 flex items-center justify-center p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
            aria-label={isPlaying ? "Pause automated workflow" : "Resume automated workflow"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Dynamic Industry Visual Viewport with Transition */}
      <div key={industry.id} className="relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
        {industry.id === "telecom" && <TelecomSystemVisual isPlaying={isPlaying && visibleMotion} />}
        {industry.id === "banking-finance" && <BankingSystemVisual isPlaying={isPlaying && visibleMotion} />}
        {industry.id === "manufacturing" && <ManufacturingSystemVisual isPlaying={isPlaying && visibleMotion} />}
        {industry.id === "logistics-supply-chain" && <LogisticsSystemVisual isPlaying={isPlaying && visibleMotion} />}
      </div>
    </div>
  );
}

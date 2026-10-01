"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Activity, Wrench, FileCheck, Layers, Gauge } from "lucide-react";

export function ManufacturingSystemVisual({ isPlaying = true }: { isPlaying?: boolean }) {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to anomaly detection
  const [vibrationVal, setVibrationVal] = useState<number>(3.8);

  const steps = [
    {
      step: "01",
      name: "PLC & SENSOR FEED",
      tag: "MQTT / Modbus",
      desc: "Vibration, acoustic, thermal & cycle sensors streaming continuously from production lines",
      status: "NORMAL",
      icon: Gauge,
    },
    {
      step: "02",
      name: "EDGE TELEMETRY BUS",
      tag: "Timeseries Cache",
      desc: "Aggregates 12,000 edge pings/second across SCADA terminals with microsecond timestamps",
      status: "SYNCED",
      icon: Cpu,
    },
    {
      step: "03",
      name: "ANOMALY DETECTION",
      tag: "Drift ML Model",
      desc: "Identifies micro-deviations in motor acoustics 48 hours prior to mechanical bearing fatigue",
      status: "DRIFT DETECTED",
      icon: Activity,
    },
    {
      step: "04",
      name: "SLA WORK-ORDER BOT",
      tag: "Automated Dispatch",
      desc: "Creates preventive maintenance ticket with required spare parts checklist sent to technician tablet",
      status: "ROUTED",
      icon: Wrench,
    },
    {
      step: "05",
      name: "SAP PM INTEGRATION",
      tag: "Enterprise Ledger",
      desc: "Syncs work orders, parts inventory deductions, and audit completion into corporate ERP",
      status: "RECORDED",
      icon: FileCheck,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setVibrationVal(+(3.2 + Math.random() * 1.6).toFixed(2));
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full flex flex-col gap-5 select-none font-sans">
      {/* Industrial Telemetry Canvas */}
      <div className="relative rounded-2xl bg-[#051329] border border-[#18345C] p-4 sm:p-5 overflow-hidden">
        {/* Subtle SCADA Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Industrial Header Strip */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono border-b border-[#18345C] pb-3 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D477] animate-pulse" />
            <span className="font-bold text-white tracking-wider">PLANT FLOOR TELEMETRY // SCADA MQTT BRIDGE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden sm:inline">Telemetry Frequency:</span>
            <span className="text-cyan-400 font-bold">100ms Polling</span>
          </div>
        </div>

        {/* Telemetry Sensor Dashboard Sim */}
        <div className="relative z-10 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3 rounded-xl bg-[#091C36] border border-[#18345C] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>BEARING VIBRATION</span>
                <span className="w-2 h-2 rounded-full bg-[#00D477]" />
              </div>
              <div className="my-1 flex items-baseline gap-1.5">
                <span className="text-xl font-bold font-mono text-white">{vibrationVal}</span>
                <span className="text-[10px] font-mono text-slate-400">mm/s RMS</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-[#00D477] transition-all duration-300"
                  style={{ width: `${(vibrationVal / 6) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#091C36] border border-[#18345C] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>THERMAL GRADIENT</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div className="my-1 flex items-baseline gap-1.5">
                <span className="text-xl font-bold font-mono text-white">68.4</span>
                <span className="text-[10px] font-mono text-slate-400">&deg;C Delta</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-cyan-400" style={{ width: "54%" }} />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#091C36] border border-[#18345C] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PREDICTIVE LEAD</span>
                <span className="text-[10px] font-mono text-[#00D477]">SLA SAFE</span>
              </div>
              <div className="my-1 flex items-baseline gap-1.5">
                <span className="text-xl font-bold font-mono text-[#00D477]">48h</span>
                <span className="text-[10px] font-mono text-slate-400">Advance Warning</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-[#00D477]" style={{ width: "88%" }} />
              </div>
            </div>
          </div>

          {/* Stepper Pipeline Along Manufacturing Lifecycle */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? "bg-[#2563EB] border-[#60A5FA] text-white shadow-lg shadow-blue-900/30 scale-[1.02]"
                      : isPast
                      ? "bg-[#091C36] border-[#00D477]/50 text-slate-200"
                      : "bg-[#071830] border-[#18345C] text-slate-400 hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold opacity-80">
                      STEP {st.step}
                    </span>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <strong className="text-[11px] font-bold line-clamp-1">
                    {st.name}
                  </strong>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.2 rounded w-fit ${
                      isActive ? "bg-white/20 text-white" : "bg-black/30 text-slate-400"
                    }`}
                  >
                    {st.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Log Bar */}
        <div className="relative z-10 p-3.5 rounded-xl bg-[#071830] border border-[#18345C] text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <span className="text-white font-bold">{steps[activeStep].name}:</span>{" "}
              <span className="text-slate-300 font-sans text-xs">{steps[activeStep].desc}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-slate-400">TELEMETRY:</span>
            <span className="px-2 py-0.5 rounded bg-[#091C36] text-[#00D477] border border-[#18345C] text-[10px] font-bold">
              {steps[activeStep].status}
            </span>
          </div>
        </div>
      </div>

      {/* Industrial Architecture Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left font-mono">
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">PROTOCOL</span>
          <span className="text-xs font-bold text-slate-200">MQTT / Modbus Edge</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">DOWNTIME LEAD</span>
          <span className="text-xs font-bold text-[#00D477]">48h Mechanical Warning</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">WORK-ORDER SYNC</span>
          <span className="text-xs font-bold text-blue-300">SAP PM / MM Ledger</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#051329] border border-[#18345C]">
          <span className="text-[10px] text-slate-400 block">SHIFT LOGS</span>
          <span className="text-xs font-bold text-cyan-300">Zero Paper Clipboards</span>
        </div>
      </div>
    </div>
  );
}

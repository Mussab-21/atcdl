"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Database,
  FileText,
  GitBranch,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
const scenarios = [
  {
    name: "Document intelligence",
    engine: "Extract & validate",
    result: "Ready for human review",
    detail:
      "Turn unstructured documents into useful records. Review exceptions before they reach your systems.",
    href: "/solutions/custom-ai",
    icon: FileText,
    nodes: ["Invoices", "Purchase orders", "Documents"],
  },
  {
    name: "Connected operations",
    engine: "Connect & coordinate",
    result: "One shared workflow",
    detail:
      "Connect the tools your teams already use, with clear handoffs and visibility into every step.",
    href: "/solutions/enterprise-software",
    icon: GitBranch,
    nodes: ["Your ERP", "Customer portal", "Team requests"],
  },
  {
    name: "Private AI",
    engine: "Retrieve & reason",
    result: "Answer with sources",
    detail:
      "Make your company knowledge easier to find, with grounded answers and access controls.",
    href: "/solutions/custom-ai",
    icon: Sparkles,
    nodes: ["Company docs", "Knowledge base", "Policies"],
  },
];
export function SystemPlayground() {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [canAnimate, setCanAnimate] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const sync = () =>
      setCanAnimate(inView && !media.matches && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 },
    );
    if (root.current) observer.observe(root.current);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  const scene = scenarios[selected];
  const Icon = scene.icon;
  return (
    <div
      className="system-playground"
      ref={root}
      data-running={playing && canAnimate}
    >
      <div className="system-topline">
        <span>
          <span className="signal-dot" /> SYSTEM EXPLORER
        </span>
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={
            playing ? "Pause system animation" : "Play system animation"
          }
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>
      </div>
      <div className="system-diagram" aria-hidden="true">
        <div className="diagram-grid" />
        <div className="source-nodes">
          {scene.nodes.map((name, i) => (
            <div className="source-node" key={name}>
              <span>
                {i === 0 ? <Icon size={17} /> : <Database size={17} />}
              </span>
              {name}
              <i />
            </div>
          ))}
        </div>
        <svg
          className="system-wires"
          viewBox="0 0 520 250"
          preserveAspectRatio="none"
        >
          <path d="M130 46 C230 46 200 124 260 124 M130 124 H260 M130 202 C230 202 200 124 260 124 M260 124 H405" />
          <path
            className="wire-flow"
            d="M130 46 C230 46 200 124 260 124 H405 M130 124 H260 M130 202 C230 202 200 124 260 124"
          />
        </svg>
        <div className="core-node">
          <div className="core-ring" />
          <Sparkles size={28} />
          <span>ATC</span>
          <small>INTELLIGENCE LAYER</small>
        </div>
        <div className="output-node">
          <ShieldCheck size={24} />
          <span>
            Human
            <br />
            oversight
          </span>
        </div>
        <span className="diagram-caption">
          YOUR DATA. CONNECTED POSSIBILITIES.
        </span>
      </div>
      <div className="system-event" key={selected}>
        <span className="event-icon">
          <Check size={16} />
        </span>
        <div>
          <small>{scene.engine}</small>
          <strong>{scene.result}</strong>
        </div>
        <span className="example-label">Illustrative workflow</span>
      </div>
      <div
        className="scenario-switch"
        role="group"
        aria-label="Explore a workflow"
      >
        {scenarios.map((s, i) => (
          <button
            key={s.name}
            aria-pressed={i === selected}
            onClick={() => setSelected(i)}
          >
            <span>0{i + 1}</span>
            {s.name}
          </button>
        ))}
      </div>
      <div className="scenario-description" aria-live="polite">
        <p>{scene.detail}</p>
        <Link href={scene.href}>
          Explore solution <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}

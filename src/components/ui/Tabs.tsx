"use client";

import React, { useState } from "react";
import { clsx } from "clsx";

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  onChange,
  className,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || (tabs[0]?.id ?? "")
  );

  const handleSelect = (id: string) => {
    setActiveTabId(id);
    onChange?.(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else {
      return;
    }
    e.preventDefault();
    const nextTab = tabs[nextIndex];
    if (nextTab) {
      handleSelect(nextTab.id);
      document.getElementById(`tab-${nextTab.id}`)?.focus();
    }
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex items-center gap-2 p-1.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[var(--radius-btn)] overflow-x-auto"
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleSelect(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={clsx(
                "px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-[calc(var(--radius-btn)-4px)] font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer",
                isActive
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.03)]"
              )}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={clsx(
                    "text-[10px] px-1.5 py-0.2 rounded-full",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[var(--bg-elevated)] text-[var(--text-muted)]"
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {activeTab && (
        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          tabIndex={0}
          className="focus:outline-none animate-in fade-in-50 duration-200"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
  defaultOpenId,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={clsx("divide-y divide-[var(--border)] border-y border-[var(--border)]", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="py-2">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full py-4 text-left flex items-center justify-between font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors gap-4"
              >
                <span className="text-base">{item.title}</span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 shrink-0",
                    isOpen && "rotate-180 text-[var(--accent)]"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={clsx(
                "overflow-hidden transition-all duration-300",
                isOpen ? "pb-4 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

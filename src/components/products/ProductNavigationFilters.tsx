"use client";

import React from "react";
import { PRODUCTS_LAB_DATA, ProductCategory } from "@/content/products-lab-data";

export function ProductNavigationFilters({
  activeCategory,
  onCategoryChange,
  counts,
}: {
  activeCategory: ProductCategory;
  onCategoryChange: (cat: ProductCategory) => void;
  counts: Record<ProductCategory, number>;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 w-full">
      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#007F86]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
        <span>Filter By Domain:</span>
      </div>

      {/* Horizontal Filter Pills (Scrollable on small mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 max-w-full">
        {PRODUCTS_LAB_DATA.categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.id] || 0;

          return (
            <button aria-pressed={activeCategory === cat.id}
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3 py-1.5 min-h-11 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border ${
                isActive
                  ? "bg-[#071B3B] text-white border-[#071B3B] shadow-xs"
                  : "bg-white text-[#52647B] border-[#DCE5EF] hover:border-[#3B82F6] hover:text-[#071326]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500 border border-slate-200"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

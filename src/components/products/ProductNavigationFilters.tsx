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
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-y border-[#DCE5EF] w-full">
      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        <span>Filter By Domain:</span>
      </div>

      {/* Horizontal Filter Pills (Scrollable on small mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 max-w-full">
        {PRODUCTS_LAB_DATA.categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#071B3B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#091326]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-white text-slate-500 border border-slate-200"
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

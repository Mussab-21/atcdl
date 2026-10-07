"use client";

import React from "react";
import NextLink from "next/link";
import { LabProduct } from "@/content/products-lab-data";
import { Badge } from "@/components/ui/Badge";
import {
  ScanLine,
  FileText,
  MessageSquareText,
  BookOpenCheck,
  Bot,
  Headset,
  UserSearch,
  Users,
  Workflow,
  GitBranch,
  LayoutDashboard,
  Radar,
  ArrowRight,
} from "lucide-react";

export const PRODUCT_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ScanLine,
  FileText,
  MessageSquareText,
  BookOpenCheck,
  Bot,
  Headset,
  UserSearch,
  Users,
  Workflow,
  GitBranch,
  LayoutDashboard,
  Radar,
};

interface ProductsCarouselProps {
  products: LabProduct[];
}

export function ProductsCarousel({products}:ProductsCarouselProps){return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map(product=><NextLink key={product.slug} href={`/products/${product.slug}`} className="block rounded-xl border border-[var(--border)] p-6 hover:border-[var(--accent)]"><Badge status={product.status}/><h3 className="mt-4 text-xl font-semibold">{product.name}</h3><p className="my-3 text-sm text-[var(--text-secondary)]">{product.tagline}</p><span className="text-link">Explore product <ArrowRight size={16}/></span></NextLink>)}</div>;}

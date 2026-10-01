"use client";

import React, { useState } from "react";
import {
  ProductCategory,
  LabProduct,
  PRODUCTS_LAB_DATA,
} from "@/content/products-lab-data";
import { ProductLabHero } from "@/components/products/ProductLabHero";
import { ProductNavigationFilters } from "@/components/products/ProductNavigationFilters";
import { FeaturedProductShowcase } from "@/components/products/FeaturedProductShowcase";
import { ProductCollectionGrid } from "@/components/products/ProductCollectionGrid";
import { InteractiveSystemLab } from "@/components/products/InteractiveSystemLab";
import { OneProductEcosystemSection } from "@/components/products/OneProductEcosystemSection";
import { ProductRoadmapSection } from "@/components/products/ProductRoadmapSection";
import { ProductsCustomBridgeSection } from "@/components/products/ProductsCustomBridgeSection";
import { ProductsFinalCTASection } from "@/components/products/ProductsFinalCTASection";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

export function ProductsLabClient() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("ALL");
  const [previewProduct, setPreviewProduct] = useState<LabProduct | null>(null);

  // Compute category counts for badge indicators
  const categoryCounts = PRODUCTS_LAB_DATA.categories.reduce((acc, cat) => {
    if (cat.id === "ALL") {
      acc[cat.id] = PRODUCTS_LAB_DATA.products.length;
    } else {
      acc[cat.id] = PRODUCTS_LAB_DATA.products.filter((p) =>
        p.categories.includes(cat.id)
      ).length;
    }
    return acc;
  }, {} as Record<ProductCategory, number>);

  const featuredProduct =
    PRODUCTS_LAB_DATA.products.find((p) => p.isFeatured) || PRODUCTS_LAB_DATA.products[0];

  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCTS_LAB_DATA.products
      : PRODUCTS_LAB_DATA.products.filter((p) =>
          p.categories.includes(activeCategory)
        );

  const handleOpenProduct = (product: LabProduct) => {
    setPreviewProduct(product);
  };

  const handleCloseModal = () => {
    setPreviewProduct(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#071326] flex flex-col">
      {/* 01: Product Lab Hero */}
      <ProductLabHero onSelectProduct={handleOpenProduct} />

      {/* 02: Product Navigation Filter Bar */}
      <div className="bg-white border-y border-[#DCE5EF] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-2">
        <ProductNavigationFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          counts={categoryCounts}
        />
      </div>

      {/* 03: Featured Product Showcase (ATCDL Docs) */}
      <FeaturedProductShowcase
        product={featuredProduct}
        onOpenPreview={handleOpenProduct}
      />

      {/* 04: Product Collection (Editorial layout: 2 large, 2 medium, 2 wide) */}
      <div id="collection" className="scroll-mt-16">
        <ProductCollectionGrid
          products={filteredProducts}
          onOpenPreview={handleOpenProduct}
        />
      </div>

      {/* 05: Interactive Product Lab (Explore the System Architecture) */}
      <InteractiveSystemLab />

      {/* 06: One Product Ecosystem (Unified Architecture Diagram) */}
      <OneProductEcosystemSection onSelectProduct={handleOpenProduct} />

      {/* 07: Product Development Roadmap (From Idea to Product) */}
      <ProductRoadmapSection />

      {/* 08: Products + Custom Engineering (Built for Real Operations & Bridge) */}
      <div id="custom-bridge" className="scroll-mt-16">
        <ProductsCustomBridgeSection />
      </div>

      {/* 09: Final CTA Section */}
      <ProductsFinalCTASection />

      {/* Interactive Product Preview Modal */}
      <ProductDetailModal
        product={previewProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}

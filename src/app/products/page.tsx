import React from "react";
import { Metadata } from "next";
import { ProductsLabClient } from "@/components/products/ProductsLabClient";

export const metadata: Metadata = {
  title: "Product Lab | ATC Digital Labs",
  description:
    "Explore ATC Digital Labs' intelligent software products — document intelligence, knowledge copilot, communication agents, talent screening, workflow automation, and operations control.",
  openGraph: {
    title: "Product Lab | ATC Digital Labs",
    description:
      "Explore ATC Digital Labs' intelligent software products — document intelligence, knowledge copilot, communication agents, talent screening, workflow automation, and operations control.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsLabClient />;
}

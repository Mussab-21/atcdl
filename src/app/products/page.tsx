import React from "react";
import { Metadata } from "next";
import { ProductsLabClient } from "@/components/products/ProductsLabClient";

export const metadata: Metadata = {
  title: "ATCDL Product Lab | Intelligent Software Engines & Ecosystem",
  description:
    "Explore ATCDL's intelligent software products — document intelligence, knowledge copilot, communication agents, talent screening, workflow automation, and operations control.",
  openGraph: {
    title: "ATCDL Product Lab | Intelligent Software Engines",
    description:
      "Explore ATCDL's intelligent software products — document intelligence, knowledge copilot, communication agents, talent screening, workflow automation, and operations control.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsLabClient />;
}

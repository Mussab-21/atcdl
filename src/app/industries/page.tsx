import React from "react";
import { Metadata } from "next";
import { IndustriesExplorerClient } from "@/components/industries/IndustriesExplorerClient";

export const metadata: Metadata = {
  title: "Industry Intelligence — High-Complexity Vertical Engineering | ATCDL",
  description:
    "Explore how ATCDL engineers software and AI around high-complexity industry workflows across Telecom, Banking, Manufacturing, and Logistics.",
  openGraph: {
    title: "Industry Intelligence — High-Complexity Vertical Engineering | ATCDL",
    description:
      "Explore how ATCDL engineers software and AI around high-complexity industry workflows across Telecom, Banking, Manufacturing, and Logistics.",
    type: "website",
  },
};

export default function IndustriesIndexPage() {
  return <IndustriesExplorerClient />;
}

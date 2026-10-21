import { MetadataRoute } from "next";
import { SOLUTIONS, IDEAS, INDUSTRIES } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://atcdl.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/ideas",
    "/estimate",
    "/process",
    "/labs",
    "/contact",
    "/trust",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/estimate" || route === "/contact" ? 0.9 : 0.8,
  }));

  const solutionRoutes = SOLUTIONS.map((s) => ({
    url: `${siteUrl}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const ideaRoutes = IDEAS.map((idea) => ({
    url: `${siteUrl}/ideas/${idea.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryRoutes = INDUSTRIES.map((ind) => ({
    url: `${siteUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...ideaRoutes,
    ...industryRoutes,
  ];
}

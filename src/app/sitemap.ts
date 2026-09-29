import { MetadataRoute } from "next";
import { SOLUTIONS, PRODUCTS, PROJECTS, IDEAS, INDUSTRIES } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nimbrix.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/solutions",
    "/products",
    "/work",
    "/industries",
    "/ideas",
    "/estimate",
    "/process",
    "/labs",
    "/contact",
    "/about",
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

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projectRoutes = PROJECTS.map((proj) => ({
    url: `${siteUrl}/work/${proj.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
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
    ...productRoutes,
    ...projectRoutes,
    ...ideaRoutes,
    ...industryRoutes,
  ];
}

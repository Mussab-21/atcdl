"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";
export function AnalyticsEvents() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/solutions"))
      track("solutions_viewed", { path: pathname });
    if (pathname.startsWith("/products/"))
      track("product_opened", { slug: pathname.split("/")[2] });
    if (pathname.startsWith("/work/"))
      track("case_study_viewed", { slug: pathname.split("/")[2] });
    if (pathname === "/estimate") track("pricing_viewed");
  }, [pathname]);
  useEffect(() => {
    let estimatorStarted = false;
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a");
      if (link?.dataset.track === "hero_cta_clicked")
        track("hero_cta_clicked", { placement: "hero" });
      if (link?.hostname === "github.com") track("github_clicked");
      if (
        !estimatorStarted &&
        location.pathname === "/estimate" &&
        event.target.closest("main button")
      ) {
        estimatorStarted = true;
        track("project_estimator_started");
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}

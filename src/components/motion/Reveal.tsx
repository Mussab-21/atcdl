"use client";
import React, { useEffect, useRef } from "react";
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  staggerItems?: boolean;
}
/** Visible server output; a short enhancement runs only when the content enters view. */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el || !el.animate) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!media.matches)
            animation = el.animate(
              [
                { transform: "translateY(14px)", opacity: 0.75 },
                { transform: "none", opacity: 1 },
              ],
              { duration: 420, easing: "cubic-bezier(.2,.7,.2,1)" },
            );
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    const stop = () => {
      if (media.matches) animation?.cancel();
    };
    media.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animation?.cancel();
      media.removeEventListener("change", stop);
    };
  }, []);
  return (
    <Tag ref={root} className={className}>
      {children}
    </Tag>
  );
}

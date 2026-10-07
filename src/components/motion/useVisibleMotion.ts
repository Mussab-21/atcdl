"use client";
import { useEffect, useState, type RefObject } from "react";

/** Animation runs only while visible, in the foreground, and allowed by the OS. */
export function useVisibleMotion(ref: RefObject<HTMLElement | null>) {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => setAllowed(visible && !document.hidden && !media.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [ref]);
  return allowed;
}

"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  staggerItems?: boolean;
}

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  staggerItems = false,
}: RevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!containerRef.current) return;

        const items = containerRef.current.querySelectorAll("[data-reveal-item]");
        const targets = items.length > 0 ? items : containerRef.current;

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: motion.duration.base,
          ease: motion.ease.out,
          stagger: items.length > 0 || staggerItems ? motion.stagger : 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: motion.start,
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <Tag ref={containerRef} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}

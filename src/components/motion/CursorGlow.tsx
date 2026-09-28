"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface CursorGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function CursorGlow({
  children,
  className = "",
  glowColor = "rgba(77, 141, 255, 0.12)",
}: CursorGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)",
        () => {
          const setX = gsap.quickTo(card, "--mx", { duration: 0.2, ease: "power3" });
          const setY = gsap.quickTo(card, "--my", { duration: 0.2, ease: "power3" });

          const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            setX(e.clientX - rect.left);
            setY(e.clientY - rect.top);
          };

          card.addEventListener("mousemove", handleMouseMove);

          return () => {
            card.removeEventListener("mousemove", handleMouseMove);
          };
        }
      );

      return () => mm.revert();
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden group ${className}`}
      style={
        {
          "--mx": "-999px",
          "--my": "-999px",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[inherit]"
        style={{
          background: `radial-gradient(400px circle at var(--mx) var(--my), ${glowColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

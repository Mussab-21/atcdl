"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface RotatingHeadlineWordProps {
  words?: string[];
  className?: string;
}

const DEFAULT_WORDS = ["simpler.", "faster.", "smarter.", "scalable."];

export const RotatingHeadlineWord: React.FC<RotatingHeadlineWordProps> = ({
  words = DEFAULT_WORDS,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    isReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion.current) return;

    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const cycleNextWord = () => {
      if (!isTabVisible || !wordRef.current) return;

      // Animate current word sliding up and fading out
      gsap.to(wordRef.current, {
        y: -18,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
          // Animate new word entering from below
          if (wordRef.current) {
            gsap.fromTo(
              wordRef.current,
              { y: 18, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.4)" }
            );
          }
        },
      });
    };

    const interval = setInterval(cycleNextWord, 2600);
    timerRef.current = interval;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [words]);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative overflow-hidden align-baseline min-w-[140px] sm:min-w-[190px] md:min-w-[230px] lg:min-w-[270px] text-left ${className}`}
    >
      <span
        ref={wordRef}
        className="inline-block bg-gradient-to-r from-[var(--accent-green)] via-[#00B565] to-[var(--accent-ai)] bg-clip-text text-transparent font-extrabold"
      >
        {words[index]}
      </span>
    </span>
  );
};

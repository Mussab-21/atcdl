// Motion tokens per Build Plan §5.2
export const motion = {
  duration: {
    fast: 0.2,
    base: 0.5,
    slow: 0.8,
    hero: 5,
  },
  ease: {
    out: "power3.out",
    inOut: "power2.inOut",
  },
  distance: {
    load: 12,
    reveal: 20,
  },
  stagger: 0.08,
  start: "top 85%",
} as const;

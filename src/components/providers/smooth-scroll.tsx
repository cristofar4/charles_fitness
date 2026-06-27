"use client";

import * as React from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-app";

const LenisContext = React.createContext<Lenis | null>(null);
export const useLenis = () => React.useContext(LenisContext);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduced) return;

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    setLenis(instance);

    instance.on("scroll", ScrollTrigger.update);

    const onRaf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    // Make ScrollTrigger aware of Lenis scrolling.
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onRaf);
      instance.destroy();
      setLenis(null);
    };
  }, [reduced]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

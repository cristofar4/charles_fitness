"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/shared/logo";
import { usePrefersReducedMotion } from "@/hooks/use-app";

export function Preloader() {
  const [count, setCount] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const reduced = usePrefersReducedMotion();

  const signalReady = React.useCallback(() => {
    setDone(true);
    // Let the hero (and any gated animation) start once the curtain lifts.
    window.dispatchEvent(new Event("ctf:ready"));
    (window as unknown as { __ctfReady?: boolean }).__ctfReady = true;
  }, []);

  React.useEffect(() => {
    setReady(true);
    const seen = sessionStorage.getItem("ctf-preloaded");
    if (seen || reduced) {
      signalReady();
      return;
    }
    const start = performance.now();
    const dur = 1900;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("ctf-preloaded", "1");
        setTimeout(signalReady, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, signalReady]);

  // Avoid SSR flash: only render the overlay after mount decision.
  if (!ready) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <LogoMark className="size-20" animated />
          </motion.div>

          <div className="mt-10 h-px w-56 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-energy"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ transformOrigin: "left" }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="mt-5 flex w-56 items-center justify-between font-sans text-xs uppercase tracking-[0.3em] text-smoke">
            <span>Charlie&apos;s Total Fitness</span>
            <span className="tabular-nums text-white">{count}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

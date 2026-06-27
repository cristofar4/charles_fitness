"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/** SSR-safe layout effect. */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Returns true once mounted on the client (avoids hydration mismatch). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/** Reactive media query. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/** Respects the user's reduced-motion preference. */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True on fine-pointer (mouse) devices — gate cursor/magnetic effects. */
export function useHasPointer() {
  return useMediaQuery("(pointer: fine)");
}

/** Resolves true once the preloader curtain has lifted (or immediately if already done). */
export function useAppReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ((window as unknown as { __ctfReady?: boolean }).__ctfReady) {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener("ctf:ready", onReady);
    // Safety fallback in case the event was missed.
    const t = setTimeout(() => setReady(true), 3200);
    return () => {
      window.removeEventListener("ctf:ready", onReady);
      clearTimeout(t);
    };
  }, []);
  return ready;
}

"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect, usePrefersReducedMotion } from "@/hooks/use-app";
import { cn } from "@/lib/utils";

/** Counts up to `value` when scrolled into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: value,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [value, prefix, suffix, duration, reduced]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {reduced ? value : 0}
      {suffix}
    </span>
  );
}

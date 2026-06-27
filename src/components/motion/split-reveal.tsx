"use client";

import * as React from "react";
import { gsap, SplitText, EASE } from "@/lib/gsap";
import { useIsomorphicLayoutEffect, usePrefersReducedMotion } from "@/hooks/use-app";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type SplitRevealProps = {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  delay?: number;
  /** start animation as soon as mounted instead of on scroll */
  immediate?: boolean;
  y?: number;
};

/** Reveals text by splitting it into chars/words/lines and animating each in. */
export function SplitReveal({
  children,
  as = "h2",
  className,
  type = "lines",
  stagger = 0.08,
  duration = 1,
  delay = 0,
  immediate = false,
  y = 110,
}: SplitRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(el, {
        type,
        linesClass: "split-line overflow-hidden",
      });
      const targets =
        type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

      gsap.set(el, { autoAlpha: 1 });
      gsap.from(targets, {
        yPercent: type === "lines" ? 110 : 0,
        y: type === "lines" ? 0 : y,
        opacity: 0,
        rotateX: type === "chars" ? -40 : 0,
        duration,
        ease: EASE.expo,
        stagger,
        delay,
        scrollTrigger: immediate
          ? undefined
          : { trigger: el, start: "top 85%", once: true },
      });

      return () => split.revert();
    }, ref);

    return () => ctx.revert();
  }, [reduced, type, stagger, duration, delay, immediate, y]);

  return React.createElement(
    as,
    {
      ref: ref as React.Ref<HTMLElement>,
      className: cn("split-ready [perspective:800px]", !reduced && "invisible", className),
      style: { textWrap: "balance" as const },
    },
    children
  );
}

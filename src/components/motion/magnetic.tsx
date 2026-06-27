"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHasPointer } from "@/hooks/use-app";
import { cn } from "@/lib/utils";

/** Wraps content so it's magnetically attracted to the cursor. */
export function Magnetic({
  children,
  className,
  strength = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const hasPointer = useHasPointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hasPointer || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-flex", className)}
      data-cursor="hover"
    >
      {children}
    </motion.div>
  );
}

"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useHasPointer } from "@/hooks/use-app";
import { cn } from "@/lib/utils";

/** 3D tilt-on-hover card with optional parallax content layer. */
export function TiltCard({
  children,
  className,
  max = 10,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const hasPointer = useHasPointer();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hasPointer || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={cn("relative [perspective:1000px]", className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-overlay"
          style={{
            background: useTransform(
              glareX,
              (gx) => `radial-gradient(220px circle at ${gx} 0%, rgba(255,255,255,0.25), transparent 60%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
}

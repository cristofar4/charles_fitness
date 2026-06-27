"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-app";

// WebGL scene is client-only; never SSR it.
const Scene = dynamic(() => import("./scene"), { ssr: false });

/**
 * Mounts the WebGL ambient scene only while near the viewport (perf) and never
 * when the user prefers reduced motion. A static branded glow is the fallback.
 */
export function Ambient({
  variant = "hero",
  className,
}: {
  variant?: "hero" | "subtle";
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("absolute inset-0", className)} aria-hidden>
      {/* Always-present branded glow (and the reduced-motion fallback). */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(0,178,255,0.18),transparent_70%)]" />
      {!reduced && visible && <Scene variant={variant} />}
    </div>
  );
}

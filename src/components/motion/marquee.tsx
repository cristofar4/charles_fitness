"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/** Infinite, seamless marquee. Duplicates children for a continuous loop. */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("marquee-mask group flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

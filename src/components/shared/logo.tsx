import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The Charlie's Total Fitness monogram — a kinetic ring around a bold "C"
 * with an energy bolt. Pure SVG so it animates crisply at any size.
 */
export function LogoMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden role="img">
      <defs>
        <linearGradient id="ctf-ring" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B35" />
          <stop offset="1" stopColor="#F6B23E" />
        </linearGradient>
      </defs>
      {/* outer kinetic ring (open arc) */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="url(#ctf-ring)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="150 26"
        className={cn(animated && "origin-center animate-[spin_8s_linear_infinite]")}
      />
      {/* bold C */}
      <path
        d="M41 23.5a13 13 0 1 0 0 17"
        stroke="#F5F5F7"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* energy bolt */}
      <path d="M33 24l-6 9h5l-3 8 9-11h-5l3-6z" fill="#F6B23E" />
    </svg>
  );
}

export function Logo({
  className,
  showText = true,
  textClassName,
}: {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-9 shrink-0" />
      {showText && (
        <span className={cn("flex flex-col leading-none", textClassName)}>
          <span className="font-display text-lg tracking-wide text-white">CHARLIE&apos;S</span>
          <span className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.34em] text-electric-soft">
            Total Fitness
          </span>
        </span>
      )}
    </span>
  );
}

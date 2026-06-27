"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { type Tone } from "@/lib/data";
import { toneMap, patternForSeed, SHOW_PHOTOS, type ArtPattern } from "@/lib/media";

/* ----------------------------- SVG art motifs ----------------------------- */

function PatternSvg({ pattern, color }: { pattern: ArtPattern; color: string }) {
  const common = "absolute inset-0 h-full w-full";
  switch (pattern) {
    case "rings":
      return (
        <svg className={common} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {[40, 90, 140, 190, 240].map((r) => (
            <circle key={r} cx="300" cy="120" r={r} fill="none" stroke={color} strokeWidth="1" opacity={0.18} />
          ))}
          <circle cx="300" cy="120" r="6" fill={color} opacity={0.5} />
        </svg>
      );
    case "grid":
      return (
        <svg className={common} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <pattern id={`g-${color}`} width="34" height="34" patternUnits="userSpaceOnUse">
              <path d="M34 0H0V34" fill="none" stroke={color} strokeWidth="0.6" opacity={0.22} />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#g-${color})`} />
        </svg>
      );
    case "lines":
      return (
        <svg className={common} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1={-100 + i * 44}
              y1="420"
              x2={120 + i * 44}
              y2="-20"
              stroke={color}
              strokeWidth={i % 3 === 0 ? 1.4 : 0.6}
              opacity={0.16}
            />
          ))}
        </svg>
      );
    case "mesh":
      return (
        <svg className={common} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <radialGradient id={`m1-${color}`} cx="30%" cy="30%" r="60%">
              <stop offset="0%" stopColor={color} stopOpacity="0.55" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`m2-${color}`} cx="75%" cy="70%" r="55%">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill={`url(#m1-${color})`} />
          <rect width="400" height="400" fill={`url(#m2-${color})`} />
        </svg>
      );
    case "topo":
    default:
      return (
        <svg className={common} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M-20 ${60 + i * 38} C 100 ${20 + i * 38}, 300 ${110 + i * 38}, 420 ${50 + i * 38}`}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={0.14}
            />
          ))}
        </svg>
      );
  }
}

/* ------------------------------- MediaArt --------------------------------- */

export function MediaArt({
  tone = "electric",
  seed,
  className,
  pattern,
  monogram,
  intensity = 1,
}: {
  tone?: Tone;
  seed?: string;
  className?: string;
  pattern?: ArtPattern;
  /** show a large ghosted CTF monogram in the corner */
  monogram?: boolean;
  intensity?: number;
}) {
  const t = toneMap[tone];
  const p = pattern ?? patternForSeed(seed ?? tone);
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* base diagonal gradient */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to} 75%)` }}
      />
      {/* radial brand glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 60% at 70% 20%, ${t.glow}${Math.round(
            38 * intensity
          ).toString(16)}, transparent 70%)`,
        }}
      />
      {/* geometric motif */}
      <PatternSvg pattern={p} color={t.accent} />
      {monogram && (
        <span
          className="pointer-events-none absolute -bottom-6 -right-2 font-display text-[9rem] leading-none opacity-[0.06]"
          style={{ color: t.accent }}
        >
          CTF
        </span>
      )}
      {/* vignette + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_40%,rgba(5,5,6,0.85))]" />
      <div className="noise absolute inset-0" />
    </div>
  );
}

/* ------------------------------ MediaImage -------------------------------- */

/**
 * Renders generative art and, when enabled + reachable, fades a real photo on top.
 * The art layer is always present, so a missing/blocked photo never breaks the design.
 */
export function MediaImage({
  src,
  alt,
  tone = "electric",
  seed,
  pattern,
  monogram,
  className,
  imgClassName,
  sizes = "100vw",
  priority,
  overlay = true,
}: {
  src?: string;
  alt: string;
  tone?: Tone;
  seed?: string;
  pattern?: ArtPattern;
  monogram?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const showPhoto = SHOW_PHOTOS && !!src && !failed;

  return (
    <div className={cn("relative overflow-hidden bg-charcoal-900", className)}>
      <MediaArt tone={tone} seed={seed ?? alt} pattern={pattern} monogram={monogram} />
      {showPhoto && (
        <Image
          src={src!}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      )}
    </div>
  );
}

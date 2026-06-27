import type { Tone } from "./data";

/**
 * Set to `true` only in environments where the remote image host is reachable
 * AND the `image` URLs in `data.ts` are valid. When `false` (default), the site
 * renders its bespoke cinematic generative art — looking fully intentional with
 * zero external media. This keeps the experience flawless in restricted networks.
 */
export const SHOW_PHOTOS = true;

export type ToneConfig = {
  from: string;
  to: string;
  glow: string;
  accent: string;
  /** text/overlay accent used for labels on this tone */
  ink: string;
};

export const toneMap: Record<Tone, ToneConfig> = {
  // brand accents — ember (flame orange) + gold (champagne)
  electric: { from: "#2a1206", to: "#0A0A0C", glow: "#FF6B35", accent: "#FF7A45", ink: "#FF9466" },
  volt: { from: "#2a2008", to: "#0A0A0C", glow: "#F6B23E", accent: "#F6B23E", ink: "#FFD37A" },
  aqua: { from: "#04263a", to: "#070d12", glow: "#22D3EE", accent: "#22D3EE", ink: "#7DE9F5" },
  ember: { from: "#3a1505", to: "#0c0705", glow: "#FF8A3D", accent: "#FF8A3D", ink: "#FFB680" },
  violet: { from: "#26083a", to: "#0a0610", glow: "#A855F7", accent: "#A855F7", ink: "#C99DF7" },
  mono: { from: "#1c1c22", to: "#08080a", glow: "#8A8A93", accent: "#C9C9D1", ink: "#C9C9D1" },
};

/** Deterministic pattern selector so each item keeps a stable look. */
export type ArtPattern = "rings" | "grid" | "lines" | "mesh" | "topo";
export const artPatterns: ArtPattern[] = ["rings", "grid", "lines", "mesh", "topo"];

export function patternForSeed(seed: string): ArtPattern {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return artPatterns[h % artPatterns.length];
}

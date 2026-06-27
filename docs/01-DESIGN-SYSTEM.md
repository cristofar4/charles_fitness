# Charlie's Total Fitness Center — Design System

> **Creative direction:** What if Nike, Technogym, Equinox and Apple built a fitness
> brand together — in Port Harcourt. Cinematic, disciplined, luxurious, electric.

---

## 1. Brand Foundation

- **Name:** Charlie's Total Fitness Center
- **Location:** Port Harcourt, Rivers State, Nigeria
- **Positioning:** The leading premium fitness & wellness destination in Port Harcourt and one of the best in Nigeria.
- **Personality:** Strength · Discipline · Energy · Wellness · Luxury · Motivation
- **Promise:** _"Train like it matters."_ — a total transformation of body, mind and lifestyle.

### Logo
A custom wordmark + monogram ("CTF" inside a kinetic ring). Delivered as inline SVG so it
can be animated, recoloured and rendered crisp at any size. The monogram doubles as a
loader, favicon and section motif.

---

## 2. Colour System

A disciplined, high-contrast palette: near-black canvas, charcoal architecture, and two
energetic accents (electric blue + volt green) used surgically.

| Token | Hex | Use |
|-------|-----|-----|
| `ink` (base) | `#050506` | Page background |
| `charcoal-900` | `#0A0A0C` | Section base |
| `charcoal-800` | `#101013` | Cards / surfaces |
| `charcoal-700` | `#17171B` | Raised surfaces |
| `charcoal-600` | `#222228` | Borders / hairlines |
| `smoke` | `#8A8A93` | Muted text |
| `fog` | `#C9C9D1` | Secondary text |
| `white` | `#F5F5F7` | Primary text |
| **`electric` (blue)** | `#00B2FF` | Primary accent — links, focus, energy |
| `electric-deep` | `#0077E6` | Gradients / depth |
| **`volt` (neon green)** | `#CCFF00` | Secondary accent — CTAs, highlights, sport |
| `volt-deep` | `#A6D400` | Gradients / hover |
| `danger` | `#FF4D4D` | Form errors only |

**Rules**
- Accents never exceed ~10% of any viewport. Black + charcoal carry the luxury.
- Electric blue = motion/water/tech (pool, tech, links). Volt = power/sport (CTAs, stats).
- Gradients flow `electric → volt` for hero energy; `charcoal → ink` for depth.

### Signature gradients
- **Energy:** `linear-gradient(120deg, #00B2FF, #CCFF00)`
- **Aurora glow (radial):** `radial-gradient(circle, rgba(0,178,255,.35), transparent 70%)`
- **Surface sheen (glass):** `linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02))`

---

## 3. Typography

| Role | Typeface | Notes |
|------|----------|-------|
| Display / hero | **Bebas Neue** | Athletic, condensed, monumental. Uppercase. Tracking tight. |
| Headings / UI | **Sora** | Geometric, premium, confident. 600–800. |
| Body / long-form | **Inter** | Neutral, legible, 300–500. |

**Type scale (fluid, `clamp()`):**
`display` 5–11rem · `h1` 3–6rem · `h2` 2.2–3.8rem · `h3` 1.5–2.2rem · `body-lg` 1.125–1.25rem · `body` 1rem · `caption` 0.8125rem.

**Eyebrows / labels:** Sora, uppercase, 0.78rem, `tracking-[0.3em]`, often prefixed with a
volt/electric tick `—` and a 2-digit index (`01 — WHY CHARLIE'S`).

---

## 4. Spacing, Grid & Radius

- **Spacing scale (8pt):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- **Section rhythm:** vertical padding `clamp(6rem, 12vw, 12rem)` — massive whitespace.
- **Grid:** 12-col, max-width `1440px`, gutter 24–32px, generous side margins.
- **Radius:** `sm 10px · md 16px · lg 24px · xl 32px · pill 999px`. Premium = larger radii.
- **Hairlines:** 1px `charcoal-600` at 40–60% opacity; never pure white borders.

---

## 5. Surfaces & Effects

- **Glassmorphism:** `bg-white/5 backdrop-blur-xl border border-white/10` with inner sheen.
- **Glow:** accent box-shadows `0 0 40px -10px rgba(0,178,255,.6)` on hover/focus.
- **Noise:** subtle film-grain overlay (2–4% opacity) for cinematic texture.
- **Imagery:** desaturated-to-rich treatment; duotone (ink↔electric) for moody sections.
- **Depth:** layered parallax, soft vignettes, radial aurora behind focal content.

---

## 6. Motion Principles (summary — full strategy in `03-ANIMATION-STRATEGY.md`)

1. **Purposeful** — motion reveals hierarchy & guides the eye, never decoration for its own sake.
2. **Cinematic** — slow, weighted easings (`expo`, `power4`), 0.8–1.4s reveals.
3. **Responsive to input** — magnetic buttons, cursor follower, 3D tilt, parallax.
4. **Performant** — transforms/opacity only, GPU-friendly, `prefers-reduced-motion` respected.

**Signature easings:** `expo.out` (reveals), `power4.inOut` (transitions), spring `[0.16,1,0.3,1]` (UI).

---

## 7. Accessibility & Quality Bar

- WCAG AA contrast for all text (accents only on dark, verified).
- Full keyboard navigation; visible `:focus-visible` ring (electric).
- `prefers-reduced-motion`: disable parallax/auto-motion, keep content static & legible.
- Semantic landmarks, alt text, ARIA on interactive widgets, skip-to-content.
- Performance budget: lazy-load media, `next/image`, dynamic-import 3D, fonts via `next/font`.

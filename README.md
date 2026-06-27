# Charlie's Total Fitness Center

A world-class, award-quality fitness & wellness platform for **Charlie's Total Fitness
Center** — Port Harcourt's premier fitness destination. Built to feel like a collaboration
between Nike, Technogym, Equinox and Apple: cinematic, disciplined, luxurious and electric.

> **Train Like It Matters.**

---

## ✨ Highlights

- **Cinematic, immersive experience** — WebGL ambient scenes, GSAP scroll storytelling,
  custom cursor, magnetic buttons, 3D tilt, smooth inertia scroll and page transitions.
- **13 bespoke pages** — Home, About, Membership, Programs, Personal Training, Swimming
  Pool, Sports Facilities, Spa & Wellness, Gallery, Testimonials, Pricing, Blog, Contact.
- **No template layouts** — every section is custom-composed with a strong visual hierarchy.
- **Luxury dark design system** — near-black canvas, charcoal architecture, electric-blue +
  volt-green accents, premium typography, glassmorphism and massive whitespace.
- **Production-ready** — fully responsive, accessible (keyboard nav, reduced-motion, skip
  link), SEO-optimised (per-route metadata, JSON-LD, sitemap, robots) and statically rendered.

## 🧱 Tech Stack

| Concern | Tech |
|--------|------|
| Framework | **Next.js 15** (App Router) + **React 19** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** + custom design tokens |
| Scroll animation | **GSAP** (ScrollTrigger + **SplitText**) |
| UI animation | **Framer Motion** |
| 3D / WebGL | **Three.js** + **React Three Fiber** + **drei** |
| Smooth scroll | **Lenis** |
| Components | **shadcn-style** primitives on **Radix UI** |
| Forms | **React Hook Form** + **Zod** |
| Icons | **lucide-react** |

## 🚀 Getting Started

```bash
npm install          # install dependencies
npm run dev          # start the dev server → http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint         # lint
```

Requires Node 18.18+ (developed on Node 22).

## 📁 Project Structure

```
docs/                         Design system, sitemap, animation strategy, wireframes
src/
├─ app/                       Routes (one folder per page) + layout, template, SEO
├─ components/
│  ├─ ui/                     shadcn-style primitives (button, card, dialog, tabs…)
│  ├─ motion/                 SplitReveal, Reveal, Parallax, Counter, Marquee,
│  │                          Magnetic, TiltCard, CustomCursor, ScrollProgress, …
│  ├─ three/                  WebGL ambient scene (particles, floating geometry, lights)
│  ├─ layout/                 Navbar + overlay menu, Footer, Preloader
│  ├─ providers/              SmoothScroll (Lenis), AppShell
│  ├─ sections/               Reusable page sections (PageHero, CTA, FAQ, gallery…)
│  ├─ cards/                  Program, Facility, Trainer, Pricing, Testimonial, Blog
│  ├─ forms/                  Contact, Booking, Registration (RHF + Zod)
│  └─ home/                   Home-page sections
├─ hooks/                     Reduced-motion, pointer, media-query, app-ready
└─ lib/                       data (single source of truth), media, gsap, seo, utils
```

## 🎨 Design System

The full design system, sitemap, animation strategy and wireframes live in [`/docs`](./docs).
Brand tokens are encoded in `tailwind.config.ts` and `src/app/globals.css`:

- **Colour:** `ink` / `charcoal` canvas · `electric` (#00B2FF) · `volt` (#CCFF00)
- **Type:** Bebas Neue (display) · Sora (headings) · Inter (body)
- **Motion:** `expo.out` reveals · spring micro-interactions · scrubbed parallax

## 🖼️ Imagery & Media (important)

The site ships with a **bespoke generative art system** (`src/components/shared/media.tsx`)
— category-toned gradients, athletic SVG motifs, grain and 3D backgrounds — so it looks
complete and intentional **without any external media**. This is why it renders flawlessly
in restricted/offline environments.

Every content item in `src/lib/data.ts` already carries a ready-to-use `image` URL. To layer
in **real photography / cinematic video**:

1. Add your images (or keep the provided Unsplash references) and ensure the host is in
   `next.config.mjs → images.remotePatterns`.
2. Set `SHOW_PHOTOS = true` in `src/lib/media.ts`.

Photos then fade in over the generative art (which remains as an elegant fallback).

## 🛠️ Customisation

Almost everything is data-driven from **`src/lib/data.ts`** — programs, facilities,
memberships, pricing, trainers, transformations, testimonials, blog posts, FAQs, gallery,
navigation and the `site` object.

> **Note:** Contact details (phone, email, social handles) in the `site` object are
> placeholders — replace them with the real business details before launch. The Google Maps
> link points to the Charlie's Total Fitness Center listing.

## ♿ Accessibility & Performance

- Respects `prefers-reduced-motion` (disables scrubbed/auto motion, static 3D fallback).
- Keyboard navigable with visible focus rings and a skip-to-content link.
- WebGL is lazy-loaded, viewport-gated and DPR-capped; fonts via `next/font`.
- All routes are statically pre-rendered.

## 📦 Deployment

Deploy anywhere that supports Next.js 15 (Vercel recommended). For real imagery, deploy in an
environment with network access to your image host and flip `SHOW_PHOTOS` as above.

---

© Charlie's Total Fitness Center — Port Harcourt, Rivers State, Nigeria.

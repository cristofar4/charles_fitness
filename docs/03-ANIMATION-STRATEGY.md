# Charlie's Total Fitness Center — Animation Strategy

Motion is the product's signature. Three engines, one choreography.

| Engine | Responsibility |
|--------|----------------|
| **GSAP + ScrollTrigger + SplitText** | Scroll-driven storytelling, text reveals, pinning, parallax, counters, horizontal scroll, marquees. |
| **Framer Motion** | Component state: page transitions, overlay menu, hovers, micro-interactions, loaders, layout. |
| **Three.js / R3F** | Ambient WebGL: particle fields, energy waves, floating geometry, lighting. |
| **Lenis** | Inertia smooth-scroll that drives both ScrollTrigger and parallax. |

---

## 1. Choreography per page section

### Preloader (first load)
Monogram path draws in (`strokeDashoffset`) → "00→100" counter (GSAP) → curtain wipes up
(Framer) revealing hero. ~2.2s, skippable, runs once per session.

### Hero
- Headline via **SplitText** → chars stagger up + blur-out → 0, `expo.out`, 0.04 stagger.
- Background: layered video/WebGL particles with mouse parallax (depth).
- Floating **membership card** with 3D tilt on pointer move.
- Stat counters animate when in view.
- Scroll cue pulses; on scroll the hero scales/fades (ScrollTrigger scrub).

### "Why Charlie's" — pinned storytelling
Section pins; as the user scrolls, six value panels cross-fade/translate through a single
stage (scrubbed). Background imagery parallaxes; an index (01–06) tracks progress.

### Programs
Cards reveal with stagger + clip-path image reveal. Hover: image scale, volt outline,
detail slide-up, magnetic CTA. Optional **horizontal scroll** rail on desktop.

### Facilities
Alternating full-bleed panels; image clip-path reveal on enter; parallax on the media;
text lines (SplitText) rise per line. Interactive cards tilt in 3D.

### Stats / marquee
Counter animations (count-up on view). Infinite **marquee** of credentials/brands, dual
direction, speed reacts to scroll velocity (Lenis).

### Transformations
Draggable **before/after slider** (Framer drag). Cards stack & rotate slightly (card-stack
reveal). Video testimonials open in a Framer modal.

### CTA / Footer
Giant SplitText headline; magnetic primary button; aurora glow follows cursor.

---

## 2. Reusable motion primitives (`src/components/motion`, `src/lib`)
- `SplitReveal` — SplitText line/char reveal on scroll.
- `Reveal` / `Stagger` — Framer in-view fade-rise wrappers.
- `Counter` — GSAP count-up.
- `Marquee` — infinite, velocity-aware.
- `MagneticButton` — pointer-follow + spring return.
- `TiltCard` — 3D rotation from pointer.
- `Parallax` — translateY from scroll progress.
- `CustomCursor` — blended-difference dot + label states.
- `PageTransition` — route curtain.

---

## 3. Performance & accessibility guardrails
- Animate only `transform` & `opacity`; `will-change` applied transiently.
- 3D: capped DPR (≤1.75), frustum culling, paused off-screen, lazy `dynamic(ssr:false)`.
- `ScrollTrigger.refresh()` on resize; markers off in prod.
- **`prefers-reduced-motion`** → kill scrubbed/auto motion, instant reveals, static 3D poster.
- Cursor/magnetic/tilt gated to `(pointer: fine)` devices.
- Everything degrades gracefully: no-JS still renders semantic, styled content.

---

## 4. Timing language
| Intent | Duration | Ease |
|--------|----------|------|
| Text reveal | 0.8–1.2s | `expo.out` |
| Section transition | 1.0–1.4s | `power4.inOut` |
| Hover / micro | 0.25–0.45s | spring `[0.16,1,0.3,1]` |
| Parallax / scrub | tied to scroll | linear (scrubbed) |
| Counter | 1.6–2.2s | `power2.out` |

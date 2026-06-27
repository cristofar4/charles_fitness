# Charlie's Total Fitness Center — Wireframes & Component Inventory

## A. Page wireframes (section order)

**Home**
1. Hero (fullscreen WebGL/video, SplitText headline, floating membership card, scroll cue)
2. Marquee strip (credentials)
3. Intro / brand statement (big SplitText paragraph)
4. Why Charlie's (pinned 6-panel storytelling)
5. Stats band (animated counters)
6. Programs preview (card rail / grid → /programs)
7. Facilities showcase (alternating full-bleed → /sports, /pool, /spa)
8. Transformations teaser (before/after slider → /testimonials)
9. Trainers preview (→ /personal-training)
10. Pricing teaser (3 featured plans → /pricing)
11. Testimonials quote marquee
12. Final CTA + Footer

**About** — Hero · story/mission · values grid · timeline · stats · leadership · location/CTA
**Membership** — Hero · how-it-works · 6 plans · comparison table · benefits · registration form · FAQ
**Programs** — Hero · filter chips · 11 program cards · detail drawer (trainer, level, duration) · CTA
**Personal Training** — Hero · method · trainer roster (tilt cards) · booking form · packages · CTA
**Swimming Pool** — Hero (aquatic) · features · lessons · lane schedule · gallery · booking · CTA
**Sports Facilities** — Hero · pitch/court panels · indoor sports · lounge/restaurant · booking · CTA
**Spa & Wellness** — Hero · spa/sauna/steam/massage/salon panels · recovery · packages · booking · CTA
**Gallery** — Hero · filter bar · masonry grid · lightbox
**Testimonials** — Hero · before/after slider · story cards · video testimonials · stats · CTA
**Pricing** — Hero · billing toggle · plan matrix · full comparison table · FAQ · CTA
**Blog** — Hero · featured post · category filter · article grid · newsletter
**Contact** — Hero · contact + hours + map · contact form · departments · FAQ · socials

## B. Component inventory

**Layout:** `Navbar`, `OverlayMenu`, `Footer`, `Preloader`, `SmoothScrollProvider`, `PageShell`.

**Motion / interaction:** `CustomCursor`, `MagneticButton`, `TiltCard`, `SplitReveal`,
`Reveal`, `Stagger`, `Parallax`, `Counter`, `Marquee`, `PageTransition`, `ScrollProgress`.

**Three.js:** `AmbientScene` (particle field + floating geometry + lights), `EnergyWaves`.

**UI (shadcn-style, Radix):** `Button`, `Card`, `Badge`, `Accordion`, `Tabs`, `Dialog`,
`Input`, `Textarea`, `Label`, `Select`.

**Sections (composed):** `Hero`, `BrandStatement`, `WhyUs`, `StatsBand`, `ProgramsShowcase`,
`FacilitiesShowcase`, `TransformationSlider`, `TrainersGrid`, `PricingCards`, `ComparisonTable`,
`TestimonialMarquee`, `CTASection`, `BookingForm`, `RegistrationForm`, `ContactForm`,
`MasonryGallery`, `Lightbox`, `BlogGrid`, `SectionHeading`, `PageHero`.

**Data (`lib/data.ts`):** `programs`, `facilities`, `memberships`, `pricing`, `trainers`,
`transformations`, `testimonials`, `stats`, `blogPosts`, `faqs`, `values`, `timeline`,
`navLinks`, `site` (name, address, phone, email, hours, socials, geo).

## C. Build order
1. Config + design tokens (tailwind, globals, fonts) ✅
2. `lib`: utils, data, gsap registration, hooks
3. UI primitives (Button, Card, …)
4. Motion primitives + Three scene
5. Layout (Navbar, Footer, Preloader, providers)
6. Home sections → Home page
7. Remaining 12 pages
8. SEO (metadata, sitemap, robots, JSON-LD)
9. Build, fix, verify, commit, push

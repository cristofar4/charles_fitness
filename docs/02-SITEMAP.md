# Charlie's Total Fitness Center — Sitemap & Information Architecture

## Primary navigation
A glass top-bar that condenses on scroll. Logo (left) · centred links · "Join Now" magnetic
CTA (right). A full-screen overlay menu (Framer Motion) holds the complete map + featured media.

```
/                       Home          — cinematic hero, why-us, programs, facilities, stats, CTA
/about                  About         — story, mission, values, timeline, leadership, location
/membership             Membership    — plans, comparison, benefits, registration flow
/programs               Programs      — 11 training programs grid + detail drawers
/personal-training      Personal      — 1:1 coaching, trainer roster, booking
/swimming-pool          Pool          — aquatics, lessons, lanes, schedule, booking
/sports-facilities      Sports        — football pitch, basketball, indoor courts, lounge
/spa-wellness           Spa           — spa, sauna, steam, massage, salon, recovery
/gallery                Gallery       — filterable masonry + lightbox
/testimonials           Stories       — transformations (before/after slider) + video reviews
/pricing                Pricing       — full pricing matrix, toggles, FAQ
/blog                   Blog          — articles grid (fitness, nutrition, wellness)
/contact                Contact       — map, hours, contact form, FAQ, socials
```

## Global components (every page)
- **Preloader** (first visit) — monogram draw-in + counter.
- **Smooth-scroll** (Lenis) wrapper.
- **Custom cursor** + magnetic interactions (pointer devices only).
- **Navbar** + **overlay menu**.
- **Footer** — big CTA, sitemap, hours, location, newsletter (React Hook Form), socials.
- **Three.js ambient layer** (particles/energy) behind hero & select sections.
- **Page transition** curtain (Framer Motion) between routes.

## Content domains (single source of truth → `src/lib/data.ts`)
- **Programs (11):** Strength, Weight Loss, Bodybuilding, HIIT, Cross Training, Aerobics, Zumba, Yoga, Indoor Cycling, Personal Training, Nutrition Coaching.
- **Facilities (14):** Gym, Swimming Pool, Spa, Steam Room, Sauna, Massage, Indoor Sports, Football Pitch, Basketball Court, Restaurant, Lounge, Salon, Kids Area, Business Centre.
- **Memberships (6):** Monthly, Quarterly, Annual, VIP, Corporate, Student.
- **Trainers:** profiles w/ experience, certifications, specialties, "Book" CTA.
- **Transformations:** before/after + metrics + quote.
- **Testimonials / Blog / Stats / FAQ.**

## Conversion paths
Every page funnels to one of: **Join Now** (membership), **Book a Trainer**, **Book a Tour**,
**Book Swimming Lessons**. CTAs are persistent (navbar, footer, section ends).

## SEO
Per-route `metadata` (title/description/OpenGraph), JSON-LD `HealthClub` + `LocalBusiness`
(name, geo, hours, Port Harcourt address), sitemap.xml, robots.txt, semantic headings.

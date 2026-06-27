import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FacilityPanel } from "@/components/cards/facility-panel";
import { BookingForm } from "@/components/forms/booking-form";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { MediaImage } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { facilities } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Sports Facilities",
  description:
    "Football pitch, basketball court, indoor sports, restaurant and lounge at Charlie's Total Fitness Center, Port Harcourt. Leagues, pickup games and the beautiful game under the lights.",
  path: "/sports-facilities",
});

const sportPanels = facilities.filter((f) =>
  ["football-pitch", "basketball-court", "indoor-sports"].includes(f.slug)
);
const social = facilities.filter((f) => ["restaurant", "lounge"].includes(f.slug));

export default function SportsFacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports Complex"
        title={<>Play at the<br />highest level.</>}
        description="A championship football pitch, a pro basketball court and climate-controlled indoor courts — Charlie's is where Port Harcourt comes to compete."
        tone="volt"
        cta={[{ label: "Book a court", href: "#book" }, { label: "Join a league", href: "/contact" }]}
      />

      <section className="container-fluid py-section">
        <div className="flex flex-col gap-24 md:gap-32">
          {sportPanels.map((f, i) => (
            <FacilityPanel key={f.slug} facility={f} index={i + 1} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Leagues */}
      <section className="relative bg-charcoal-900 py-section">
        <div className="container-fluid">
          <SectionHeading
            align="center"
            eyebrow="Leagues & Events"
            title={<>Competition every <span className="text-gradient">week</span></>}
            description="Five-a-side football leagues, basketball pickup nights and tournaments that bring the whole community together."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {[
              { t: "5-a-Side League", d: "Weekly fixtures, real stakes and a trophy worth chasing. Build a team or join one." },
              { t: "Basketball Nights", d: "Pickup games and 3-on-3 tournaments every week on pro hardwood." },
              { t: "Tournament Weekends", d: "Seasonal multi-sport tournaments with prizes, food and a brilliant atmosphere." },
            ].map((e) => (
              <StaggerItem key={e.t}>
                <div className="h-full rounded-3xl border border-white/10 bg-charcoal-800/40 p-8">
                  <h3 className="font-sans text-2xl font-bold text-white">{e.t}</h3>
                  <p className="mt-3 text-smoke">{e.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Social spaces */}
      <section className="container-fluid py-section">
        <SectionHeading
          eyebrow="Refuel & Relax"
          title={<>The post-game <span className="text-gradient">experience</span></>}
          description="Sport works up an appetite. Recover, refuel and connect in our restaurant and members' lounge."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {social.map((f) => (
            <Reveal key={f.slug}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <div className="relative aspect-[16/10]">
                  <MediaImage
                    src={f.image}
                    alt={f.name}
                    tone={f.tone}
                    seed={f.slug}
                    monogram
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                    <h3 className="font-display text-3xl uppercase tracking-wide text-white">{f.name}</h3>
                    <p className="mt-1 text-fog">{f.tagline}</p>
                    <p className="mt-2 max-w-md text-sm text-smoke">{f.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="container-fluid scroll-mt-28 pb-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Book a Court"
            title={<>Reserve your<br /><span className="text-gradient">slot</span></>}
            description="Pick your sport and time and we'll lock it in. Members get priority booking and preferential rates."
          />
          <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-7 md:p-9">
            <BookingForm
              serviceLabel="Sport / facility"
              services={["Football Pitch", "Basketball Court", "Badminton", "Table Tennis", "Squash", "League enquiry"]}
              cta="Book my slot"
              successTitle="Court reserved"
              successMessage="Your booking request is in. We'll confirm your slot by phone or email. Game on."
            />
          </div>
        </div>
      </section>

      <CTASection
        tone="volt"
        eyebrow="Bring your A-game"
        title={<>Your team<br />trains here.</>}
        description="Membership unlocks the pitch, the courts and every league. Come compete with the best in Port Harcourt."
        secondary={{ label: "See facilities", href: "/gallery" }}
      />
    </>
  );
}

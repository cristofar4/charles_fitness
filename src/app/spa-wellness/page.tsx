import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FacilityPanel } from "@/components/cards/facility-panel";
import { BookingForm } from "@/components/forms/booking-form";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { MediaImage, MediaArt } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { facilities } from "@/lib/data";
import { naira } from "@/lib/utils";

export const metadata: Metadata = pageMeta({
  title: "Spa & Wellness",
  description:
    "Recover and restore at the luxury spa of Charlie's Total Fitness Center, Port Harcourt — signature treatments, sauna, steam room, massage therapy and a full beauty salon.",
  path: "/spa-wellness",
});

const featured = facilities.filter((f) => ["spa", "massage"].includes(f.slug));
const grid = facilities.filter((f) => ["sauna", "steam-room", "salon"].includes(f.slug));

const packages = [
  { name: "Recovery Hour", price: 25000, text: "Sauna, steam and a 30-minute recovery massage to reset tired muscles." },
  { name: "Half-Day Escape", price: 55000, text: "A signature treatment, full thermal circuit and time to truly switch off.", popular: true },
  { name: "Total Renewal", price: 90000, text: "The complete spa day — treatment, massage, salon session and lunch." },
];

export default function SpaWellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Spa & Wellness"
        title={<>Recovery<br />as ritual.</>}
        description="Training breaks you down — recovery builds you back stronger. Our luxury spa, sauna, steam room and therapists are the elite athlete's secret weapon."
        tone="violet"
        cta={[{ label: "Book a treatment", href: "#book" }, { label: "View packages", href: "#packages" }]}
      />

      <section className="container-fluid py-section">
        <div className="flex flex-col gap-24 md:gap-32">
          {featured.map((f, i) => (
            <FacilityPanel key={f.slug} facility={f} index={i + 1} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Thermal circuit grid */}
      <section className="relative bg-charcoal-900 py-section">
        <div className="container-fluid">
          <SectionHeading
            eyebrow="The Thermal Circuit"
            title={<>Heat, steam <span className="text-gradient">& restoration</span></>}
            description="Move through our recovery sanctuary — each space designed to soothe, detox and renew."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {grid.map((f) => (
              <StaggerItem key={f.slug}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10">
                  <div className="relative aspect-[4/5]">
                    <MediaImage
                      src={f.image}
                      alt={f.name}
                      tone={f.tone}
                      seed={f.slug}
                      monogram
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <h3 className="font-display text-3xl uppercase tracking-wide text-white">{f.name}</h3>
                      <p className="mt-1 text-sm text-fog">{f.tagline}</p>
                      <p className="mt-2 text-sm text-smoke">{f.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="container-fluid scroll-mt-28 py-section">
        <SectionHeading
          align="center"
          eyebrow="Spa Packages"
          title={<>Escape, <span className="text-gradient">restored</span></>}
          description="Curated wellness experiences. Members enjoy preferential rates and priority booking."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <Reveal key={p.name}>
              <div
                className={`relative h-full overflow-hidden rounded-3xl border p-8 ${
                  p.popular ? "border-volt/40 bg-charcoal-800/80 lg:-translate-y-3" : "border-white/10 bg-charcoal-800/40"
                }`}
              >
                {p.popular && <MediaArt tone="violet" seed={p.name} intensity={0.4} />}
                <div className="relative z-10">
                  <h3 className="font-display text-3xl uppercase tracking-wide text-white">{p.name}</h3>
                  <p className="mt-4 font-display text-4xl text-white">{naira(p.price)}</p>
                  <p className="mt-4 text-sm text-smoke">{p.text}</p>
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
            eyebrow="Book Wellness"
            title={<>Time to<br /><span className="text-gradient">restore</span></>}
            description="Choose your treatment and preferred time. Let us take care of the rest."
          />
          <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-7 md:p-9">
            <BookingForm
              serviceLabel="Treatment"
              services={["Signature Treatment", "Sports Massage", "Deep Tissue Massage", "Relaxation Massage", "Sauna & Steam", "Salon Appointment", "Spa Package"]}
              cta="Book treatment"
              successTitle="Treatment booked"
              successMessage="Your wellness session is reserved. We'll confirm your therapist and time shortly. Breathe out."
            />
          </div>
        </div>
      </section>

      <CTASection
        tone="violet"
        eyebrow="You've earned this"
        title={<>Train hard.<br />Recover like royalty.</>}
        description="Spa and massage credits are included with VIP membership — and available to every member at preferential rates."
        secondary={{ label: "See memberships", href: "/membership" }}
      />
    </>
  );
}

import { type Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal } from "@/components/motion/reveal";
import { MediaArt } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Visit or contact Charlie's Total Fitness Center in Port Harcourt, Rivers State. Book a tour, get directions, see our opening hours and reach our membership team.",
  path: "/contact",
});

const departments = [
  { name: "Membership", desc: "Plans, sign-ups and tours", contact: site.email },
  { name: "Personal Training", desc: "Coaching & bookings", contact: site.email },
  { name: "Corporate Wellness", desc: "Team & business plans", contact: site.email },
  { name: "Spa & Bookings", desc: "Treatments & appointments", contact: site.phone },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Come train<br />with us.</>}
        description="Questions, tours or bookings — we're here. Reach out and our team will help you take the first step."
        tone="electric"
        cta={[{ label: "Get directions", href: site.mapsUrl }]}
      />

      {/* Contact + info */}
      <section className="container-fluid py-section">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title={<>Let&apos;s <span className="text-gradient">talk</span></>}
              description="Fill in the form and we'll get back to you within one business day."
              className="mb-10"
            />
            <ContactForm />
          </div>

          <div className="flex flex-col gap-4">
            {/* Map */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <MediaArt tone="electric" seed="map" pattern="grid" monogram />
              <div className="absolute inset-0 z-10 grid place-items-center">
                <div className="flex flex-col items-center text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-volt text-ink">
                    <MapPin className="size-7" />
                  </span>
                  <p className="mt-4 font-display text-2xl uppercase tracking-wide text-white">
                    {site.city}, {site.region}
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-electric-soft hover:text-electric"
                  >
                    Open in Google Maps <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} label="Call us" lines={[site.phone]} href={site.phoneHref} />
              <InfoCard icon={Mail} label="Email" lines={[site.email]} href={site.emailHref} />
              <InfoCard icon={MapPin} label="Visit" lines={[site.address]} href={site.mapsUrl} />
              <InfoCard icon={Clock} label="Hours" lines={site.hours.map((h) => `${h.day.split(" ")[0]}: ${h.time}`)} />
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container-fluid pb-section">
        <SectionHeading
          eyebrow="Departments"
          title={<>Reach the <span className="text-gradient">right team</span></>}
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((d) => (
            <Reveal key={d.name}>
              <div className="h-full rounded-3xl border border-white/10 bg-charcoal-800/40 p-7">
                <h3 className="font-sans text-lg font-bold text-white">{d.name}</h3>
                <p className="mt-1 text-sm text-smoke">{d.desc}</p>
                <p className="mt-4 text-sm text-electric-soft">{d.contact}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FaqSection />
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="h-full rounded-3xl border border-white/10 bg-charcoal-800/40 p-6 transition-colors hover:border-white/25">
      <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-volt">
        <Icon className="size-5" />
      </span>
      <p className="mt-4 text-xs uppercase tracking-widest text-smoke">{label}</p>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-sm text-fog">
          {l}
        </p>
      ))}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

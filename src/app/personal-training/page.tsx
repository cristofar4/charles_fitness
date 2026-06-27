import { type Metadata } from "next";
import { Target, ClipboardList, TrendingUp, Repeat } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { TrainerCard } from "@/components/cards/trainer-card";
import { BookingForm } from "@/components/forms/booking-form";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { MediaArt } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { trainers } from "@/lib/data";
import { naira } from "@/lib/utils";

export const metadata: Metadata = pageMeta({
  title: "Personal Training",
  description:
    "One-to-one personal training at Charlie's Total Fitness Center. Internationally certified coaches, bespoke programming and guaranteed accountability in Port Harcourt.",
  path: "/personal-training",
});

const method = [
  { icon: ClipboardList, title: "Assess", text: "A full movement, body-composition and goal assessment to map your starting point." },
  { icon: Target, title: "Program", text: "A bespoke plan built to your body, your schedule and your ambition." },
  { icon: Repeat, title: "Coach", text: "Every rep supervised, every session adjusted — form and intensity dialled in." },
  { icon: TrendingUp, title: "Progress", text: "Measured, tracked and celebrated. We never let you plateau." },
];

const packages = [
  { name: "Starter", sessions: "4 sessions", price: 60000, text: "Perfect for learning the ropes with expert guidance.", tone: "electric" as const },
  { name: "Committed", sessions: "12 sessions", price: 160000, text: "The sweet spot for building real momentum and habits.", popular: true, tone: "volt" as const },
  { name: "Transformation", sessions: "24 sessions", price: 300000, text: "Total accountability for a complete transformation.", tone: "ember" as const },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Training"
        title={<>Your goals.<br />One-to-one.</>}
        description="A dedicated elite coach, a plan built only for you, and the accountability that guarantees you'll never train without purpose again."
        tone="electric"
        cta={[{ label: "Book a session", href: "#book" }, { label: "Meet the team", href: "#trainers" }]}
      />

      {/* Method */}
      <section className="container-fluid py-section">
        <SectionHeading
          eyebrow="The Method"
          title={<>Coaching that&apos;s <span className="text-gradient">actually personal</span></>}
          description="No templates. No guesswork. A proven four-step system that turns your potential into measurable results."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {method.map((m, i) => (
            <StaggerItem key={m.title}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 p-7">
                <MediaArt tone="electric" seed={m.title} intensity={0.4} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-volt">
                      <m.icon className="size-6" />
                    </span>
                    <span className="font-display text-4xl text-white/15">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-sans text-xl font-bold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm text-smoke">{m.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Trainers */}
      <section id="trainers" className="relative scroll-mt-28 bg-charcoal-900 py-section">
        <div className="container-fluid">
          <SectionHeading
            eyebrow="The Roster"
            title={<>Meet your <span className="text-gradient">coaches</span></>}
            description="Internationally certified, relentlessly invested. Hover a coach to see their specialties — then book the one who fits your goals."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {trainers.map((t) => (
              <StaggerItem key={t.name}>
                <TrainerCard trainer={t} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Packages */}
      <section className="container-fluid py-section">
        <SectionHeading
          align="center"
          eyebrow="Packages"
          title={<>Invest in <span className="text-gradient">yourself</span></>}
          description="Flexible session bundles for every level of commitment. Members enjoy preferential rates."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <Reveal key={p.name}>
              <div
                className={`relative h-full overflow-hidden rounded-3xl border p-8 ${
                  p.popular ? "border-volt/40 bg-charcoal-800/80 lg:-translate-y-3" : "border-white/10 bg-charcoal-800/40"
                }`}
              >
                {p.popular && <MediaArt tone="volt" seed={p.name} intensity={0.4} />}
                <div className="relative z-10">
                  <h3 className="font-display text-3xl uppercase tracking-wide text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-volt">{p.sessions}</p>
                  <p className="mt-5 font-display text-4xl text-white">{naira(p.price)}</p>
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
            eyebrow="Book a Session"
            title={<>Let&apos;s build your<br /><span className="text-gradient">blueprint</span></>}
            description="Tell us your goals and choose a coach. We'll confirm your first session — your complimentary consultation is on us."
          />
          <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-7 md:p-9">
            <BookingForm
              serviceLabel="Preferred coach"
              services={[...trainers.map((t) => `${t.name} — ${t.specialty}`), "No preference — match me"]}
              cta="Book my session"
              successTitle="Session requested"
              successMessage="Your coach will reach out to confirm your first session and consultation. Time to get to work."
            />
          </div>
        </div>
      </section>
    </>
  );
}

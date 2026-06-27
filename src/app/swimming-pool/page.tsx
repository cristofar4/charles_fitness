import { type Metadata } from "next";
import { Waves, Thermometer, ShieldCheck, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FacilityPanel } from "@/components/cards/facility-panel";
import { ScheduleTable } from "@/components/sections/schedule-table";
import { BookingForm } from "@/components/forms/booking-form";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { MediaArt } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { facilities } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Swimming Pool",
  description:
    "Dive into the temperature-controlled swimming pool at Charlie's Total Fitness Center, Port Harcourt. Lap swimming, swimming lessons for all ages, aqua aerobics and qualified lifeguards.",
  path: "/swimming-pool",
});

const pool = facilities.find((f) => f.slug === "swimming-pool")!;

const features = [
  { icon: Waves, title: "Multi-lane laps", text: "Dedicated lanes for serious swimmers, from first lap to personal best." },
  { icon: Thermometer, title: "Temperature-controlled", text: "A perfectly heated pool, comfortable in every season." },
  { icon: GraduationCap, title: "Lessons for all ages", text: "From toddlers to adults — learn to swim with patient, certified instructors." },
  { icon: ShieldCheck, title: "Lifeguard on duty", text: "Trained lifeguards supervise every session for total peace of mind." },
];

const lessons = [
  { name: "Kids Learn-to-Swim", level: "Ages 4–12", text: "Water confidence, safety and stroke fundamentals in a fun, supportive group." },
  { name: "Adult Beginners", level: "Never too late", text: "Overcome the fear and master the basics in small, judgement-free classes." },
  { name: "Private 1:1 Coaching", level: "All levels", text: "Refine technique, build endurance or train for competition with a dedicated coach." },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const schedule = [
  { time: "06:00 – 08:00", sessions: ["Lap Swim", "Lap Swim", "Lap Swim", "Lap Swim", "Lap Swim", "Open Swim"] },
  { time: "09:00 – 11:00", sessions: ["Aqua Aerobics", "Kids Lessons", "Aqua Aerobics", "Kids Lessons", "Aqua Aerobics", "Family Swim"] },
  { time: "14:00 – 16:00", sessions: ["Adult Lessons", "Private", "Adult Lessons", "Private", "Adult Lessons", "Kids Lessons"] },
  { time: "17:00 – 20:00", sessions: ["Open Swim", "Squad", "Open Swim", "Squad", "Open Swim", "Open Swim"] },
];

export default function SwimmingPoolPage() {
  return (
    <>
      <PageHero
        eyebrow="The Aquatic Center"
        title={<>Glide through<br />luxury.</>}
        description="Our temperature-controlled, multi-lane pool is the crown jewel of Charlie's — built for laps, lessons, aqua fitness and pure escape."
        tone="aqua"
        cta={[{ label: "Book swimming lessons", href: "#book" }, { label: "View schedule", href: "#schedule" }]}
        meta={[
          { label: "Lanes", value: "6" },
          { label: "Temperature", value: "29°C" },
          { label: "Depth", value: "1.2–2m" },
        ]}
      />

      <section className="container-fluid py-section">
        <FacilityPanel facility={pool} index={1} />
      </section>

      {/* Features */}
      <section className="container-fluid pb-section">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 p-7">
                <MediaArt tone="aqua" seed={f.title} intensity={0.4} />
                <div className="relative z-10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-electric-soft">
                    <f.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-smoke">{f.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Lessons */}
      <section className="relative bg-charcoal-900 py-section">
        <div className="container-fluid">
          <SectionHeading
            eyebrow="Swimming Lessons"
            title={<>Learn to swim, <span className="text-gradient">love the water</span></>}
            description="Structured programs for every age and ability, led by certified instructors who make progress feel effortless."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {lessons.map((l) => (
              <Reveal key={l.name}>
                <div className="h-full rounded-3xl border border-white/10 bg-charcoal-800/40 p-8">
                  <span className="text-xs uppercase tracking-widest text-electric-soft">{l.level}</span>
                  <h3 className="mt-2 font-sans text-2xl font-bold text-white">{l.name}</h3>
                  <p className="mt-3 text-smoke">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="container-fluid scroll-mt-28 py-section">
        <SectionHeading
          eyebrow="Weekly Schedule"
          title={<>Pool <span className="text-gradient">timetable</span></>}
          description="Lanes and classes throughout the week. Sundays are reserved for open family swim."
          className="mb-12"
        />
        <ScheduleTable days={days} rows={schedule} />
      </section>

      {/* Booking */}
      <section id="book" className="container-fluid scroll-mt-28 pb-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Book Lessons"
            title={<>Reserve your<br /><span className="text-gradient">place in the pool</span></>}
            description="Choose your lesson type and preferred time. We'll confirm availability and get you in the water."
          />
          <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-7 md:p-9">
            <BookingForm
              serviceLabel="Lesson type"
              services={["Kids Learn-to-Swim", "Adult Beginners", "Private 1:1 Coaching", "Aqua Aerobics", "Competitive Squad"]}
              cta="Book swimming lessons"
              successTitle="Lessons booked"
              successMessage="We've received your request and will confirm your lane and instructor shortly. See you poolside."
            />
          </div>
        </div>
      </section>

      <CTASection
        tone="aqua"
        eyebrow="Make a splash"
        title={<>The water<br />is waiting.</>}
        description="Pool access is included from the Quarterly plan upwards — with unlimited swimming on Annual and VIP."
        primary={{ label: "Become a member", href: "/membership" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}

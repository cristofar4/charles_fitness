import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Training Programs",
  description:
    "Eleven world-class training programs at Charlie's Total Fitness Center — strength, weight loss, bodybuilding, HIIT, cross training, yoga, zumba, cycling, nutrition and personal coaching in Port Harcourt.",
  path: "/programs",
});

const steps = [
  { n: "01", t: "Choose your program", d: "Pick the discipline that fires you up — or let a coach recommend one after your assessment." },
  { n: "02", t: "Meet your coach", d: "Get matched with a certified specialist who builds your plan around your body and goals." },
  { n: "03", t: "Train & transform", d: "Show up, follow the blueprint, track your progress and watch the results compound." },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Programs"
        title={<>Eleven ways<br />to get strong.</>}
        description="From raw power to total calm, every program is led by certified coaches and engineered for real results. Tap any program for the full breakdown."
        tone="volt"
        cta={[
          { label: "Join Now", href: "/membership" },
          { label: "Book a trainer", href: "/personal-training" },
        ]}
      />

      <section className="py-section">
        <ProgramsGrid />
      </section>

      {/* How it works */}
      <section className="container-fluid pb-section">
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title={<>Three steps to a <span className="text-gradient">stronger you</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Reveal key={s.n}>
              <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-8">
                <span className="font-display text-6xl text-gradient">{s.n}</span>
                <h3 className="mt-4 font-sans text-2xl font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-smoke">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Ready to commit?"
        title={<>Your program<br />is waiting.</>}
        description="Become a member today and get instant access to all eleven programs, 40+ weekly classes and the coaches who'll get you there."
        secondary={{ label: "Compare plans", href: "/pricing" }}
      />
    </>
  );
}

import { type Metadata } from "next";
import { Dumbbell, HeartPulse, Trophy, Users } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SplitReveal } from "@/components/motion/split-reveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Timeline } from "@/components/sections/timeline";
import { StatsBand } from "@/components/home/stats-band";
import { TrainersPreview } from "@/components/home/trainers-preview";
import { CTASection } from "@/components/sections/cta-section";
import { MediaArt } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { whyChooseUs, site } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "The story behind Charlie's Total Fitness Center — Port Harcourt's premier fitness & wellness destination. Our mission, values, milestones and the team forging champions.",
  path: "/about",
});

const pillars = [
  { icon: Dumbbell, title: "Performance", text: "Elite equipment and programming that produce real, measurable results." },
  { icon: HeartPulse, title: "Wellness", text: "A total approach — body, mind and recovery, all under one roof." },
  { icon: Users, title: "Community", text: "500+ members who push, support and celebrate every win together." },
  { icon: Trophy, title: "Excellence", text: "An obsessive standard, from the changing rooms to the championship pitch." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Charlie's"
        title={<>More than<br />a gym.</>}
        description="We set out to give Port Harcourt a fitness destination worthy of world-class ambition — and built a movement instead."
        tone="electric"
        meta={[
          { label: "Founded", value: "2018" },
          { label: "Members", value: "500+" },
          { label: "Trainers", value: "25+" },
          { label: "Facilities", value: "14" },
        ]}
      />

      {/* Story */}
      <section className="container-fluid py-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow mb-8 block">Our Story</span>
            <SplitReveal
              as="h2"
              type="lines"
              className="font-sans text-h2 font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Built in Port Harcourt, for the world&apos;s standard.
            </SplitReveal>
          </div>
          <div className="space-y-5 text-body-lg text-smoke">
            <Reveal>
              <p>
                Charlie&apos;s Total Fitness Center began with a simple conviction: that the people of
                Port Harcourt deserved a fitness experience that rivalled anything in Lagos, London or
                Los Angeles — without leaving home.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Today we are a complete ecosystem of strength, sport, water and wellness. An olympic-grade
                pool, a championship pitch, a luxury spa and a gym floor stocked with the world&apos;s best
                equipment — all served by coaches who treat your goals as their own.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white">
                We don&apos;t sell memberships. We build champions, lifelong habits and a community that
                refuses to let you settle.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-fluid pb-section">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 p-7">
                <MediaArt tone="electric" seed={p.title} intensity={0.4} />
                <div className="relative z-10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-volt">
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-sans text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-smoke">{p.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <StatsBand />

      {/* Values */}
      <section className="container-fluid py-section">
        <SectionHeading
          eyebrow="What We Stand For"
          title={<>The principles that <span className="text-gradient">shape everything</span></>}
          description="Six commitments that define how we train, coach and care — every single day."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((v) => (
            <Reveal key={v.index}>
              <div className="h-full bg-charcoal-900 p-8 transition-colors hover:bg-charcoal-800">
                <span className="font-display text-5xl text-white/15">{v.index}</span>
                <h3 className="mt-3 font-sans text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-smoke">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-fluid py-section">
        <SectionHeading
          align="center"
          eyebrow="Our Journey"
          title={<>From one room to a <span className="text-gradient">total destination</span></>}
        />
        <div className="mx-auto mt-16 max-w-4xl">
          <Timeline />
        </div>
      </section>

      <TrainersPreview />

      <CTASection
        eyebrow="Become part of the story"
        title={<>Write your<br />transformation here.</>}
        description={`Join 500+ members at ${site.name} and discover what total fitness really feels like.`}
        secondary={{ label: "Visit us", href: "/contact" }}
      />
    </>
  );
}

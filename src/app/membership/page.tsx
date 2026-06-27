import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { PricingCard } from "@/components/cards/pricing-card";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { RegistrationForm } from "@/components/forms/registration-form";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { MediaArt } from "@/components/shared/media";
import { pageMeta } from "@/lib/seo";
import { memberships } from "@/lib/data";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Membership",
  description:
    "Become a member of Charlie's Total Fitness Center. Flexible monthly, quarterly, annual, VIP, corporate and student plans with full access to Port Harcourt's finest facilities.",
  path: "/membership",
});

const perks = [
  { icon: Zap, title: "Instant access", text: "All facilities, 40+ classes and the member app from day one." },
  { icon: ShieldCheck, title: "No lock-in", text: "Flexible plans you can pause or upgrade as your goals evolve." },
  { icon: Sparkles, title: "Member perks", text: "Exclusive events, guest passes, spa days and dining credits." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title={<>Join the<br />movement.</>}
        description="One membership unlocks a gym, a pool, a spa, courts, a pitch and a community of 500+. Choose the access that fits your ambition."
        tone="volt"
        cta={[{ label: "Register now", href: "#register" }, { label: "Compare plans", href: "/pricing" }]}
      />

      {/* Perks */}
      <section className="container-fluid py-section">
        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.1}>
          {perks.map((p) => (
            <StaggerItem key={p.title}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 p-8">
                <MediaArt tone="volt" seed={p.title} intensity={0.35} />
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

      {/* Plans */}
      <section className="container-fluid pb-section">
        <SectionHeading
          align="center"
          eyebrow="Choose Your Plan"
          title={<>Six ways to <span className="text-gradient">belong</span></>}
          description="Every plan includes the gym floor, group classes and the Charlie's experience. Scale up for pool, coaching and luxury wellness."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {memberships.map((m) => (
            <StaggerItem key={m.slug} className="h-full">
              <PricingCard plan={m} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Comparison */}
      <section className="container-fluid pb-section">
        <SectionHeading
          eyebrow="Compare"
          title={<>Find your <span className="text-gradient">perfect fit</span></>}
          description="A side-by-side look at what each tier unlocks."
          className="mb-12"
        />
        <ComparisonTable />
      </section>

      {/* Registration */}
      <section id="register" className="container-fluid scroll-mt-28 pb-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Register"
              title={<>Start in<br /><span className="text-gradient">minutes</span></>}
              description="Fill in your details and our membership team will call you within 24 hours to finalise everything and book your free induction."
            />
            <Reveal>
              <ul className="mt-8 space-y-3 text-fog">
                {["Free fitness assessment", "Complimentary induction session", "Personalised plan recommendation", "No payment required to apply"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-volt" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-7 md:p-9">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <FaqSection eyebrow="Membership FAQ" title="Good to know" />
    </>
  );
}

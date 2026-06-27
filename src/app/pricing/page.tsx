import { type Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { PricingCard } from "@/components/cards/pricing-card";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { FaqSection } from "@/components/sections/faq-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";
import { memberships } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "Transparent pricing for Charlie's Total Fitness Center in Port Harcourt. Compare monthly, quarterly, annual, VIP, corporate and student memberships side by side.",
  path: "/pricing",
});

const groups = {
  All: memberships,
  Individual: memberships.filter((m) => ["monthly", "quarterly", "annual", "vip"].includes(m.slug)),
  "Corporate & Student": memberships.filter((m) => ["corporate", "student"].includes(m.slug)),
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Honest pricing.<br />Total value.</>}
        description="No hidden fees, no fine print. Just world-class fitness at a price that makes sense — with our best value on the annual plan."
        tone="electric"
      />

      <section className="container-fluid py-section">
        <Tabs defaultValue="All" className="flex flex-col items-center">
          <TabsList>
            {Object.keys(groups).map((g) => (
              <TabsTrigger key={g} value={g}>
                {g}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groups).map(([g, plans]) => (
            <TabsContent key={g} value={g} className="mt-12 w-full">
              <div
                className={`grid gap-6 ${
                  plans.length <= 2 ? "mx-auto max-w-3xl md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {plans.map((m) => (
                  <PricingCard key={m.slug} plan={m} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="container-fluid pb-section">
        <SectionHeading
          eyebrow="Full Comparison"
          title={<>Everything, <span className="text-gradient">side by side</span></>}
          description="The complete breakdown of what's included in each individual membership tier."
          className="mb-12"
        />
        <ComparisonTable />
        <Reveal>
          <p className="mt-8 text-center text-sm text-smoke">
            Corporate and student rates available — {""}
            <Link href="/contact" className="text-electric-soft hover:text-electric">
              talk to our team
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="container-fluid pb-section">
        <div className="relative overflow-hidden rounded-3xl border border-volt/30 bg-volt/5 p-10 text-center md:p-16">
          <span className="eyebrow justify-center">Risk-free</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.95] text-white">
            7-day money-back guarantee
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-smoke">
            Join, train, and if Charlie&apos;s isn&apos;t the best fitness decision you&apos;ve made,
            we&apos;ll refund your first week — no questions asked.
          </p>
          <Button asChild size="lg" variant="primary" className="btn-glow mt-8">
            <Link href="/membership">Claim your spot</Link>
          </Button>
        </div>
      </section>

      <FaqSection eyebrow="Pricing FAQ" title="Common questions" />
    </>
  );
}

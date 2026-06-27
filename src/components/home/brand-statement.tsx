"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SplitReveal } from "@/components/motion/split-reveal";
import { Reveal } from "@/components/motion/reveal";

export function BrandStatement() {
  return (
    <section className="container-fluid py-section">
      <Reveal>
        <span className="eyebrow mb-10 block">Why Charlie&apos;s</span>
      </Reveal>
      <SplitReveal
        as="h2"
        type="lines"
        className="max-w-6xl font-sans text-[clamp(1.8rem,4.4vw,4rem)] font-bold leading-[1.08] tracking-tight text-white"
      >
        We don&apos;t build gyms. We build a total fitness ecosystem — where elite training,
        an olympic pool, luxury wellness and a relentless community make extraordinary
        results feel inevitable.
      </SplitReveal>
      <Reveal delay={0.15}>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-2 font-sans text-lg font-semibold text-electric-soft transition-colors hover:text-electric"
        >
          Discover our story <ArrowUpRight className="size-5" />
        </Link>
      </Reveal>
    </section>
  );
}

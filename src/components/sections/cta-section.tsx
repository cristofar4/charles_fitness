"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MediaArt } from "@/components/shared/media";
import { SplitReveal } from "@/components/motion/split-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { type Tone } from "@/lib/data";

export function CTASection({
  eyebrow = "Ready when you are",
  title,
  description,
  tone = "volt",
  primary = { label: "Join Now", href: "/membership" },
  secondary,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  tone?: Tone;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="container-fluid py-section">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-7 py-16 md:px-16 md:py-24">
        <MediaArt tone={tone} seed="cta" monogram intensity={1.2} />
        <div className="relative z-10 flex flex-col items-start gap-7 text-left">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <SplitReveal
            as="h2"
            type="lines"
            className="max-w-4xl font-display text-[clamp(2.4rem,6vw,5.5rem)] uppercase leading-[0.92] text-white"
          >
            {title}
          </SplitReveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-body-lg text-fog">{description}</p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <Button asChild size="lg" variant="primary" className="btn-glow">
                  <Link href={primary.href}>
                    {primary.label} <ArrowUpRight className="size-5" />
                  </Link>
                </Button>
              </Magnetic>
              {secondary && (
                <Button asChild size="lg" variant="glass">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "electric",
  align = "left",
  cta,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: Tone;
  align?: "left" | "center";
  cta?: { label: string; href: string }[];
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden pb-16 pt-36 md:min-h-[82vh] md:pb-24">
      <MediaArt tone={tone} seed={eyebrow} monogram intensity={1.1} />
      <div
        className={cn(
          "container-fluid relative z-10 flex flex-col gap-7",
          align === "center" && "items-center text-center"
        )}
      >
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <SplitReveal
          as="h1"
          type="lines"
          className={cn(
            "font-display text-[clamp(3rem,10vw,9rem)] uppercase leading-[0.88] text-white",
            align === "center" && "mx-auto max-w-5xl"
          )}
        >
          {title}
        </SplitReveal>
        {description && (
          <Reveal delay={0.1}>
            <p className={cn("max-w-2xl text-body-lg text-fog", align === "center" && "mx-auto")}>
              {description}
            </p>
          </Reveal>
        )}

        {cta && cta.length > 0 && (
          <Reveal delay={0.2}>
            <div className={cn("flex flex-wrap gap-3", align === "center" && "justify-center")}>
              {cta.map((c, i) => (
                <Magnetic key={c.href}>
                  <Button
                    asChild
                    size="lg"
                    variant={i === 0 ? "primary" : "outline"}
                    className={i === 0 ? "btn-glow" : ""}
                  >
                    <Link href={c.href}>
                      {c.label}
                      {i === 0 && <ArrowUpRight className="size-5" />}
                    </Link>
                  </Button>
                </Magnetic>
              ))}
            </div>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal delay={0.25}>
            <dl className="mt-4 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-xs uppercase tracking-widest text-smoke">{m.label}</dt>
                  <dd className="mt-1 font-display text-3xl text-white">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { MediaImage } from "@/components/shared/media";
import { SplitReveal } from "@/components/motion/split-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { Button } from "@/components/ui/button";
import { type Facility } from "@/lib/data";
import { cn, pad } from "@/lib/utils";

export function FacilityPanel({
  facility,
  index,
  reversed,
}: {
  facility: Facility;
  index: number;
  reversed?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Media */}
      <motion.div
        initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)", opacity: 0.4 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn("relative", reversed && "lg:order-2")}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
          <Parallax speed={0.18} className="absolute inset-0 scale-110">
            <MediaImage
              src={facility.image}
              alt={facility.name}
              tone={facility.tone}
              seed={facility.slug}
              monogram
              className="absolute inset-0"
            />
          </Parallax>
        </div>
      </motion.div>

      {/* Copy */}
      <div className={cn(reversed && "lg:order-1")}>
        <Reveal>
          <span className="font-display text-6xl text-white/15">{pad(index)}</span>
        </Reveal>
        <SplitReveal
          as="h3"
          type="lines"
          className="mt-2 font-sans text-h2 font-extrabold tracking-tight text-white"
        >
          {facility.name}
        </SplitReveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-lg font-medium text-electric-soft">{facility.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-lg text-body-lg text-smoke">{facility.description}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-7 grid max-w-md grid-cols-2 gap-3">
            {facility.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fog">
                <Check className="size-4 shrink-0 text-volt" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        {facility.page && (
          <Reveal delay={0.25}>
            <Button asChild variant="outline" className="mt-8">
              <Link href={facility.page}>
                Explore {facility.name} <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        )}
      </div>
    </div>
  );
}

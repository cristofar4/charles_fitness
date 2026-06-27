"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { TransformationSlider } from "@/components/sections/transformation-slider";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { transformations } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Transformations() {
  const [active, setActive] = React.useState(0);
  const item = transformations[active];

  return (
    <section className="container-fluid py-section">
      <SectionHeading
        eyebrow="Transformation Stories"
        title={<>Real people. <span className="text-gradient">Real results.</span></>}
        description="Drag the slider. This is what showing up — with the right coaching — actually looks like."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <Reveal>
          <TransformationSlider key={item.name} item={item} />
        </Reveal>

        <div>
          <blockquote className="text-2xl font-medium leading-relaxed text-white">
            &ldquo;{item.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-electric-soft">
            {item.name} — {item.result}
          </p>

          <div className="mt-8 space-y-2">
            {transformations.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                data-cursor="hover"
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all",
                  i === active
                    ? "border-volt/40 bg-volt/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                )}
              >
                <span>
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-smoke">{t.headline}</span>
                </span>
                <span className="font-display text-2xl text-white/40">{t.weeks}w</span>
              </button>
            ))}
          </div>

          <Button asChild variant="outline" className="mt-8">
            <Link href="/testimonials">
              All success stories <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

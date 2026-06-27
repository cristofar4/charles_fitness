"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProgramCard } from "@/components/cards/program-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/data";

export function ProgramsShowcase() {
  const featured = programs.slice(0, 6);
  return (
    <section className="container-fluid py-section">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Training Programs"
          title={<>Eleven ways to <span className="text-gradient">forge greatness</span></>}
          description="From raw strength to total wellbeing — find the program that moves you, led by coaches who refuse to let you settle."
        />
        <Button asChild variant="outline" className="shrink-0">
          <Link href="/programs">
            All 11 programs <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {featured.map((p) => (
          <StaggerItem key={p.slug}>
            <ProgramCard program={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

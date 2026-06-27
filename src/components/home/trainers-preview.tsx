"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { TrainerCard } from "@/components/cards/trainer-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { trainers } from "@/lib/data";

export function TrainersPreview() {
  return (
    <section className="relative bg-charcoal-900 py-section">
      <div className="container-fluid">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Meet the Coaches"
            title={<>Trained by the <span className="text-gradient">very best</span></>}
            description="Internationally certified, relentlessly dedicated. Our coaches don't follow templates — they read your body and build your blueprint."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/personal-training">
              All trainers <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {trainers.slice(0, 4).map((t) => (
            <StaggerItem key={t.name}>
              <TrainerCard trainer={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { PricingCard } from "@/components/cards/pricing-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { memberships } from "@/lib/data";

export function PricingTeaser() {
  const featured = memberships.filter((m) => ["monthly", "annual", "vip"].includes(m.slug));
  return (
    <section className="container-fluid py-section">
      <SectionHeading
        align="center"
        eyebrow="Membership"
        title={<>Choose your <span className="text-gradient">level of access</span></>}
        description="Flexible plans for every goal and budget — from drop-in flexibility to the all-access VIP experience."
      />

      <Stagger className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3" stagger={0.1}>
        {featured.map((m) => (
          <StaggerItem key={m.slug} className="h-full">
            <PricingCard plan={m} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 text-center">
        <Button asChild variant="ghost" size="lg">
          <Link href="/pricing">
            Compare all six plans <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

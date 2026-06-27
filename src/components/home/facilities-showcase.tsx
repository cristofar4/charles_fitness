"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { FacilityPanel } from "@/components/cards/facility-panel";
import { Button } from "@/components/ui/button";
import { facilities } from "@/lib/data";

export function FacilitiesShowcase() {
  // Showcase the four flagship facilities on the home page.
  const flagship = facilities.filter((f) =>
    ["gym", "swimming-pool", "spa", "football-pitch"].includes(f.slug)
  );

  return (
    <section className="relative bg-charcoal-900 py-section">
      <div className="container-fluid">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="World-Class Facilities"
            title={<>Fourteen luxury spaces.<br /><span className="text-gradient">One destination.</span></>}
            description="A gym, olympic pool, spa, courts, a championship pitch and more — every facility engineered for performance and pleasure."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/sports-facilities">
              Explore facilities <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {flagship.map((f, i) => (
            <FacilityPanel key={f.slug} facility={f} index={i + 1} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

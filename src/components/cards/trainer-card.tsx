"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { MediaImage } from "@/components/shared/media";
import { Button } from "@/components/ui/button";
import { type Trainer } from "@/lib/data";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/25"
      data-cursor="hover"
    >
      <div className="relative aspect-[3/4]">
        <MediaImage
          src={trainer.image}
          alt={trainer.name}
          tone={trainer.tone}
          seed={trainer.name}
          monogram
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 p-6">
          <p className="text-xs uppercase tracking-widest text-volt">{trainer.role}</p>
          <h3 className="mt-1 font-display text-3xl uppercase tracking-wide text-white">{trainer.name}</h3>
          <p className="mt-1 text-sm text-fog">{trainer.specialty}</p>

          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <div className="overflow-hidden">
              <p className="mt-4 text-sm text-smoke">{trainer.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {trainer.certifications.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-fog">
                    <BadgeCheck className="size-3 text-electric" />
                    {c}
                  </span>
                ))}
              </div>
              <Button asChild size="sm" variant="primary" className="mt-5">
                <Link href="/personal-training">
                  Book {trainer.name.split(" ")[0]} <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <p className="mt-3 text-xs uppercase tracking-widest text-smoke group-hover:hidden">
            {trainer.experience} experience
          </p>
        </div>
      </div>
    </div>
  );
}

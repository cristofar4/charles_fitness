"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Flame, Signal, User } from "lucide-react";
import { MediaImage } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Program } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProgramCard({ program, className }: { program: Program; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "group relative block h-full w-full overflow-hidden rounded-3xl border border-white/10 text-left transition-all duration-500 hover:border-white/25 hover:shadow-card",
            className
          )}
          data-cursor="hover"
        >
          <div className="relative aspect-[4/5] w-full">
            <MediaImage
              src={program.image}
              alt={program.name}
              tone={program.tone}
              seed={program.slug}
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
              imgClassName="group-hover:scale-105"
            />
            <div className="absolute left-4 top-4 z-10">
              <Badge variant="electric">{program.category}</Badge>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="font-sans text-2xl font-bold text-white">{program.name}</h3>
              <p className="mt-1 text-sm text-fog">{program.tagline}</p>

              {/* slide-up detail */}
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                <div className="overflow-hidden">
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-smoke">
                    <span className="inline-flex items-center gap-1.5"><Signal className="size-3.5 text-volt" />{program.level}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 text-volt" />{program.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><Flame className="size-3.5 text-volt" />{program.calories}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-soft">
                    View program <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl overflow-hidden p-0">
        <div className="relative h-44 w-full">
          <MediaImage src={program.image} alt={program.name} tone={program.tone} seed={program.slug} className="absolute inset-0" />
          <div className="absolute bottom-4 left-6 z-10">
            <Badge variant="electric">{program.category}</Badge>
          </div>
        </div>
        <div className="p-8 pt-4">
          <DialogHeader>
            <DialogTitle className="font-display text-4xl uppercase tracking-wide">{program.name}</DialogTitle>
            <DialogDescription className="text-fog">{program.description}</DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Signal, label: "Level", value: program.level },
              { icon: Clock, label: "Duration", value: program.duration },
              { icon: Flame, label: "Burn", value: program.calories },
              { icon: User, label: "Coach", value: program.trainer },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <m.icon className="size-4 text-electric" />
                <p className="mt-2 text-[0.65rem] uppercase tracking-widest text-smoke">{m.label}</p>
                <p className="text-sm font-medium text-white">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-smoke">What you&apos;ll get</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {program.highlights.map((h) => (
                <span key={h} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-fog">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary" className="btn-glow">
              <Link href="/membership">Join &amp; start training <ArrowUpRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/personal-training">Book a trainer</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

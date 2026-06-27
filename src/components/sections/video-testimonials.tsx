"use client";

import { Play, Star } from "lucide-react";
import { MediaArt } from "@/components/shared/media";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { testimonials } from "@/lib/data";

export function VideoTestimonials() {
  const items = testimonials.slice(0, 3);
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <Dialog key={t.name}>
          <DialogTrigger asChild>
            <button
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 text-left"
              data-cursor="hover"
            >
              <MediaArt tone={t.tone} seed={t.name} monogram />
              <div className="absolute inset-0 z-10 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full border border-white/30 bg-ink/40 text-white backdrop-blur-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 translate-x-0.5 fill-current" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <p className="font-display text-2xl uppercase tracking-wide text-white">{t.name}</p>
                <p className="text-sm text-fog">{t.role}</p>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="relative mb-4 grid aspect-video place-items-center overflow-hidden rounded-2xl border border-white/10">
              <MediaArt tone={t.tone} seed={t.name} monogram />
              <span className="relative z-10 grid size-16 place-items-center rounded-full border border-white/30 bg-ink/40 text-white backdrop-blur-xl">
                <Play className="size-6 translate-x-0.5 fill-current" />
              </span>
            </div>
            <DialogHeader>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-volt text-volt" />
                ))}
              </div>
              <DialogTitle className="font-display text-3xl uppercase tracking-wide">{t.name}</DialogTitle>
            </DialogHeader>
            <blockquote className="text-lg leading-relaxed text-fog">&ldquo;{t.quote}&rdquo;</blockquote>
            <p className="text-sm text-smoke">{t.role}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

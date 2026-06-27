import { Star } from "lucide-react";
import { type Testimonial } from "@/lib/data";
import { toneMap } from "@/lib/media";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const t = toneMap[testimonial.tone];
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-charcoal-800/50 p-7 backdrop-blur-xl",
        className
      )}
    >
      <span
        className="pointer-events-none absolute -right-3 -top-6 font-display text-9xl leading-none opacity-10"
        style={{ color: t.accent }}
        aria-hidden
      >
        &rdquo;
      </span>
      <div className="relative">
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-volt text-volt" />
          ))}
        </div>
        <blockquote className="mt-4 text-lg leading-relaxed text-white">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="relative flex items-center gap-3">
        <span
          className="grid size-11 shrink-0 place-items-center rounded-full font-sans text-sm font-bold text-ink"
          style={{ background: t.accent }}
        >
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold text-white">{testimonial.name}</span>
          <span className="block text-xs text-smoke">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

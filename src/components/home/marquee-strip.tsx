"use client";

import { Marquee } from "@/components/motion/marquee";

const items = [
  "Strength Training",
  "Olympic Pool",
  "Elite Coaching",
  "Luxury Spa",
  "HIIT",
  "Yoga",
  "Football Pitch",
  "Sauna & Steam",
  "Nutrition",
  "Indoor Cycling",
  "Basketball",
  "Recovery",
];

export function MarqueeStrip() {
  return (
    <div className="border-y border-white/10 bg-charcoal-900/60 py-6">
      <Marquee speed={38}>
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl uppercase tracking-wide text-white/70">{it}</span>
            <span className="size-2 rounded-full bg-volt" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

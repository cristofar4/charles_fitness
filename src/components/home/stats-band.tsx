"use client";

import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/lib/data";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink py-section">
      <div className="absolute inset-0 bg-aurora opacity-40" aria-hidden />
      <div className="container-fluid relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="flex flex-col">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  className="font-display text-[clamp(3rem,5vw,5rem)] leading-none text-white"
                />
                <span className="mt-3 text-sm uppercase tracking-wider text-smoke">{s.label}</span>
                <span className="mt-3 h-px w-10 bg-gradient-to-r from-electric to-volt" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

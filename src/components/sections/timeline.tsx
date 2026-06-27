"use client";

import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-electric via-volt to-transparent md:left-1/2" aria-hidden />
      <div className="space-y-12">
        {timeline.map((item, i) => (
          <Reveal key={item.year} delay={i * 0.05}>
            <div
              className={`relative grid gap-4 pl-10 md:grid-cols-2 md:gap-12 md:pl-0 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <span className="absolute left-0 top-2 size-3 -translate-x-[5px] rounded-full bg-volt ring-4 ring-volt/20 md:left-1/2" />
              <div className={`[direction:ltr] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="font-display text-5xl text-gradient">{item.year}</span>
                <h3 className="mt-2 font-sans text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-smoke">{item.description}</p>
              </div>
              <div />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

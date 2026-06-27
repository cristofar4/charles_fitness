"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/use-app";
import { MediaArt } from "@/components/shared/media";
import { whyChooseUs } from "@/lib/data";
import { pad } from "@/lib/utils";

export function WhyUs() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    // Horizontal pinned scroll on larger screens with motion enabled.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      // Per-panel parallax on the inner art.
      gsap.utils.toArray<HTMLElement>(".why-art").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-charcoal-900">
      <div className="pointer-events-none absolute left-0 top-0 z-10 w-full px-6 pt-10 md:px-10 lg:px-16">
        <span className="eyebrow">The Charlie&apos;s Difference</span>
      </div>
      <div
        ref={trackRef}
        className="flex flex-col lg:h-svh lg:flex-row lg:flex-nowrap lg:items-stretch"
      >
        {/* Intro panel */}
        <div className="flex shrink-0 items-center px-6 py-20 md:px-10 lg:h-svh lg:w-[44vw] lg:py-0 lg:px-16">
          <div>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] uppercase leading-[0.9] text-white">
              Six reasons
              <br />
              <span className="text-gradient">we&apos;re different</span>
            </h2>
            <p className="mt-6 max-w-md text-body-lg text-smoke">
              Everything under one roof, engineered to make your results inevitable.
              <span className="hidden lg:inline"> Keep scrolling — the story moves with you. →</span>
            </p>
          </div>
        </div>

        {whyChooseUs.map((v) => (
          <article
            key={v.index}
            className="group relative flex shrink-0 items-end overflow-hidden border-t border-white/10 lg:h-svh lg:w-[34vw] lg:border-l lg:border-t-0"
          >
            <div className="why-art absolute inset-0">
              <MediaArt tone={v.tone} seed={v.title} monogram />
            </div>
            <div className="relative z-10 w-full p-8 md:p-12">
              <span className="font-display text-7xl text-white/15 transition-colors group-hover:text-white/25">
                {v.index}
              </span>
              <h3 className="mt-3 font-sans text-h3 font-bold text-white">{v.title}</h3>
              <p className="mt-3 max-w-sm text-fog">{v.description}</p>
            </div>
            <span className="absolute right-8 top-8 z-10 text-xs uppercase tracking-widest text-smoke">
              {v.index} / {pad(whyChooseUs.length)}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

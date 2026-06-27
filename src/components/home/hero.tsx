"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { gsap, SplitText, EASE } from "@/lib/gsap";
import { useAppReady, usePrefersReducedMotion } from "@/hooks/use-app";
import { Ambient } from "@/components/three/ambient";
import { MediaArt } from "@/components/shared/media";
import { Magnetic } from "@/components/motion/magnetic";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/logo";
import { heroHighlights } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ready = useAppReady();
  const reduced = usePrefersReducedMotion();
  const [videoOk, setVideoOk] = React.useState(false);
  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  const scopeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ready || reduced || !headlineRef.current) return;
    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, {
        type: "lines,chars",
        linesClass: "overflow-hidden",
      });
      gsap.set(headlineRef.current, { autoAlpha: 1 });
      gsap.from(split.chars, {
        yPercent: 120,
        opacity: 0,
        rotateX: -55,
        stagger: 0.022,
        duration: 1.1,
        ease: EASE.expo,
      });
      return () => split.revert();
    }, scopeRef);
    return () => ctx.revert();
  }, [ready, reduced]);

  // Declarative fade-rise for the supporting content, gated on the curtain lift.
  const show = reduced || ready;
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.9, ease: EASE_OUT, delay },
  });

  return (
    <section
      ref={scopeRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-12 pt-32"
    >
      {/* Backgrounds — generative art base, 3D fallback, then the gym video on top */}
      <MediaArt tone="electric" seed="hero" intensity={0.8} />
      {!videoOk && <Ambient variant="hero" />}
      {!reduced && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          onCanPlay={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            videoOk ? "opacity-60" : "opacity-0"
          )}
          aria-hidden
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-exercising-in-a-gym-23401-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-exercising-in-a-gym-with-dumbbells-30349-large.mp4"
            type="video/mp4"
          />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" aria-hidden />

      <div className="container-fluid relative z-10 grid items-center gap-12 lg:grid-cols-12">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <motion.div
            {...fade(0.05)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fog backdrop-blur-xl"
          >
            <Sparkles className="size-3.5 text-volt" />
            Port Harcourt&apos;s #1 Fitness Destination
          </motion.div>

          <h1
            ref={headlineRef}
            className="font-display text-[clamp(3.4rem,11vw,10rem)] uppercase leading-[0.85] text-white [perspective:900px]"
            style={reduced ? undefined : { visibility: "hidden" }}
          >
            Train like
            <br />
            <span className="text-volt">it matters</span>
          </h1>

          <motion.p {...fade(0.15)} className="mt-7 max-w-xl text-body-lg text-fog">
            World-class equipment, elite coaching and luxury wellness — under one roof.
            This is where total transformation begins.
          </motion.p>

          <motion.div {...fade(0.25)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg" variant="primary" className="btn-glow">
                <Link href="/membership">
                  Start Your Journey <ArrowUpRight className="size-5" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="glass">
              <Link href="/about">
                <Play className="size-4" /> Take a Tour
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            {...fade(0.35)}
            className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          >
            {heroHighlights.map((h) => (
              <div key={h.label}>
                <dt className="font-display text-4xl text-white">{h.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-smoke">{h.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — floating membership card */}
        <motion.div
          {...fade(0.4)}
          className="hidden justify-self-end lg:col-span-5 lg:block"
        >
          <MembershipCard />
        </motion.div>
      </div>
    </section>
  );
}

function MembershipCard() {
  return (
    <TiltCard max={14} className="w-[22rem] animate-float">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-charcoal-800/70 p-7 shadow-card backdrop-blur-2xl">
        <MediaArt tone="volt" seed="member-card" pattern="mesh" intensity={0.9} />
        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center justify-between">
            <LogoMark className="size-10" />
            <span className="rounded-full border border-volt/40 bg-volt/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-volt">
              VIP Access
            </span>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-smoke">Member</p>
            <p className="mt-1 font-display text-3xl tracking-wide text-white">Charlie&apos;s Elite</p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-8 w-11 rounded-md bg-gradient-to-br from-volt to-electric opacity-90" />
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-[0.6rem] uppercase tracking-widest text-smoke">Member No.</p>
              <p className="font-sans text-sm tracking-widest text-white">CTF · 000 · 001</p>
            </div>
            <div className="text-right">
              <p className="text-[0.6rem] uppercase tracking-widest text-smoke">Valid Thru</p>
              <p className="font-sans text-sm tracking-widest text-white">∞</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -inset-6 -z-10 rounded-full bg-volt/20 blur-3xl" aria-hidden />
    </TiltCard>
  );
}

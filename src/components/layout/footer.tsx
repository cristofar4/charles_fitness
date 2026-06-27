"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navLinks, site } from "@/lib/data";

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={onSubmit} className="mt-5">
      <div className="flex gap-2">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Email address"
          className="h-12"
        />
        <Button type="submit" variant="electric" size="md" aria-label="Subscribe">
          {sent ? <Check className="size-4" /> : <ArrowUpRight className="size-4" />}
        </Button>
      </div>
      <p className="mt-2 text-xs text-smoke">
        {sent ? "You're on the list. Welcome to the movement." : "Training tips & member offers. No spam."}
      </p>
    </form>
  );
}

export function Footer() {
  const explore = navLinks.filter((l) => l.group === "main");
  const facilities = navLinks.filter((l) => l.group === "facilities");
  const discover = navLinks.filter((l) => l.group === "more");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-charcoal-900">
      <div className="absolute inset-0 bg-aurora opacity-30" aria-hidden />

      {/* Big CTA */}
      <div className="container-fluid relative border-b border-white/10 py-20 md:py-28">
        <p className="eyebrow mb-6">Your transformation starts now</p>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] uppercase leading-[0.9] text-white">
            Train like
            <br />
            <span className="text-gradient">it matters.</span>
          </h2>
          <Magnetic>
            <Button asChild size="xl" variant="primary" className="btn-glow">
              <Link href="/membership">
                Join Charlie&apos;s <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>

      {/* Columns */}
      <div className="container-fluid relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-smoke">{site.intro}</p>
          <NewsletterForm />
        </div>

        <FooterCol title="Explore" links={explore} />
        <FooterCol title="Facilities" links={facilities} />
        <FooterCol title="Discover" links={discover} />
      </div>

      {/* Visit / hours */}
      <div className="container-fluid relative grid gap-8 border-t border-white/10 py-10 md:grid-cols-3">
        <div>
          <p className="eyebrow mb-3">Visit</p>
          <p className="text-fog">{site.address}</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-electric-soft hover:text-electric">
            Get directions <ArrowUpRight className="size-3.5" />
          </a>
        </div>
        <div>
          <p className="eyebrow mb-3">Hours</p>
          <ul className="space-y-1 text-sm text-fog">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span className="text-smoke">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <a href={site.phoneHref} className="block text-fog hover:text-white">{site.phone}</a>
          <a href={site.emailHref} className="block text-fog hover:text-white">{site.email}</a>
          <div className="mt-3 flex gap-4">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-smoke hover:text-volt">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-fluid relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-smoke sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>
          {site.city}, {site.region}, {site.country} · Crafted for champions.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: typeof navLinks }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-smoke transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

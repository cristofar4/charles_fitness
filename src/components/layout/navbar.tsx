"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/data";
import { cn } from "@/lib/utils";

const primary = navLinks.filter((l) =>
  ["/about", "/membership", "/programs", "/personal-training", "/pricing"].includes(l.href)
);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[110] transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "container-fluid flex items-center justify-between rounded-full transition-all duration-500",
            scrolled && "border border-white/10 bg-ink/70 px-5 py-2.5 backdrop-blur-xl"
          )}
        >
          <Link href="/" aria-label="Charlie's Total Fitness Center — Home" data-cursor="hover">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primary.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors",
                    active ? "text-white" : "text-smoke hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/8"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Magnetic className="hidden sm:inline-flex">
              <Button asChild size="sm" variant="primary" className="btn-glow">
                <Link href="/membership">
                  Join Now <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-cursor="hover"
              className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-white transition-colors hover:border-electric/50 hover:bg-electric/10"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <OverlayMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}

function OverlayMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const groups: { title: string; key: string }[] = [
    { title: "Explore", key: "main" },
    { title: "Facilities", key: "facilities" },
    { title: "Discover", key: "more" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[130] overflow-y-auto bg-ink/95 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-aurora opacity-40" aria-hidden />
          <div className="container-fluid relative flex min-h-svh flex-col py-6">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                data-cursor="hover"
                className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-white transition-colors hover:border-electric/50 hover:bg-white/10"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid flex-1 content-center gap-10 py-12 lg:grid-cols-3 lg:gap-8">
              {groups.map((group, gi) => (
                <div key={group.key}>
                  <p className="eyebrow mb-6">{group.title}</p>
                  <ul className="space-y-1">
                    {navLinks
                      .filter((l) => l.group === group.key)
                      .map((l, i) => {
                        const active = pathname === l.href;
                        return (
                          <motion.li
                            key={l.href}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.1 + gi * 0.05 + i * 0.04,
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <Link
                              href={l.href}
                              onClick={onClose}
                              className="group flex items-baseline justify-between gap-4 border-b border-white/8 py-3"
                            >
                              <span
                                className={cn(
                                  "font-display text-3xl uppercase tracking-wide transition-colors lg:text-4xl",
                                  active
                                    ? "text-volt"
                                    : "text-white/80 group-hover:text-white"
                                )}
                              >
                                {l.label}
                              </span>
                              <span className="hidden text-xs text-smoke transition-colors group-hover:text-electric-soft sm:block">
                                {l.desc}
                              </span>
                            </Link>
                          </motion.li>
                        );
                      })}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-smoke">
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
                <span>{site.address}</span>
              </div>
              <div className="flex gap-4 text-sm">
                {site.socials.slice(0, 4).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-smoke transition-colors hover:text-volt"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

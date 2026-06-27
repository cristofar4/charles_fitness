"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { SmoothScroll } from "./smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { ScrollTrigger } from "@/lib/gsap";

/** Refresh ScrollTrigger after route changes so pinned/scrubbed triggers re-measure. */
function RouteRefresh() {
  const pathname = usePathname();
  React.useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 300);
    window.scrollTo(0, 0);
    return () => clearTimeout(id);
  }, [pathname]);
  return null;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Preloader />
      <ScrollProgress />
      <RouteRefresh />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-volt focus:px-5 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}

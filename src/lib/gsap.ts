"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins once on the client. SplitText is free as of GSAP 3.13+.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export const EASE = {
  expo: "expo.out",
  power4: "power4.out",
  power4InOut: "power4.inOut",
  power2: "power2.out",
} as const;

export { gsap, ScrollTrigger, SplitText };

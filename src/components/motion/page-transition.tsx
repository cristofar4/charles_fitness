"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * Wraps page content; runs on every route change (via app/template.tsx).
 * A clip-reveal curtain + content rise gives cinematic page transitions.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[150] origin-top bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {children}
      </motion.div>
    </>
  );
}

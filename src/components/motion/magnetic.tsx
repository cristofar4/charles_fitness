"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Passthrough wrapper (kept for API stability). The magnetic pull was removed in
 * favour of a subtle button scale (see the Button component). Renders children inline.
 */
export function Magnetic({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  /** @deprecated no longer used */
  strength?: number;
}) {
  return <span className={cn("inline-flex", className)}>{children}</span>;
}

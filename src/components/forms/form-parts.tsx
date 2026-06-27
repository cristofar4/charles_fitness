"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
}

export const selectClass =
  "flex h-13 w-full appearance-none rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3.5 text-white transition-colors focus-visible:border-electric/60 focus-visible:bg-white/[0.05] focus-visible:outline-none [&>option]:bg-charcoal-800";

export function FormSuccess({ title, message }: { title: string; message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-volt/30 bg-volt/5 p-12 text-center"
    >
      <span className="grid size-16 place-items-center rounded-full bg-volt text-ink">
        <Check className="size-8" />
      </span>
      <h3 className="font-display text-3xl uppercase tracking-wide text-white">{title}</h3>
      <p className="max-w-md text-smoke">{message}</p>
    </motion.div>
  );
}

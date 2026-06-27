import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-white/15 bg-white/5 text-fog",
        volt: "border-volt/30 bg-volt/10 text-volt",
        electric: "border-electric/30 bg-electric/10 text-electric-soft",
        solid: "border-transparent bg-volt text-ink",
        outline: "border-white/20 bg-transparent text-white",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

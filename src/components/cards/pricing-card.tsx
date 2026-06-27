"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { MediaArt } from "@/components/shared/media";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Membership } from "@/lib/data";
import { cn, naira } from "@/lib/utils";

export function PricingCard({ plan }: { plan: Membership }) {
  const featured = plan.popular;
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500",
        featured
          ? "border-volt/40 bg-charcoal-800/80 shadow-glow-volt lg:-translate-y-3"
          : "border-white/10 bg-charcoal-800/40 hover:border-white/25"
      )}
    >
      {featured && <MediaArt tone="volt" seed={plan.slug} intensity={0.5} />}

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-3xl uppercase tracking-wide text-white">{plan.name}</h3>
          {plan.badge && (
            <Badge variant={featured ? "solid" : "default"}>{plan.badge}</Badge>
          )}
        </div>
        <p className="mt-1 text-sm text-fog">{plan.tagline}</p>

        <div className="mt-6 flex items-end gap-1">
          <span className="font-display text-5xl text-white">{naira(plan.price)}</span>
          <span className="mb-1.5 text-sm text-smoke">{plan.unit}</span>
        </div>
        <p className="mt-1 text-xs text-smoke">{plan.cadence}</p>

        <p className="mt-5 text-sm text-smoke">{plan.description}</p>

        <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-fog">
              <Check className={cn("mt-0.5 size-4 shrink-0", featured ? "text-volt" : "text-electric")} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2">
          <Button
            asChild
            variant={featured ? "primary" : "outline"}
            size="lg"
            className={cn("w-full", featured && "btn-glow")}
          >
            <Link href="/membership">
              Choose {plan.name} <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

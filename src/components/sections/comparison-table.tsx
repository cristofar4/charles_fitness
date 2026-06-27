"use client";

import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { comparisonFeatures } from "@/lib/data";
import { cn } from "@/lib/utils";

const plans = ["Monthly", "Quarterly", "Annual", "VIP"];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-5 text-volt" />;
  if (value === false) return <Minus className="mx-auto size-5 text-smoke/40" />;
  return <span className="text-sm font-medium text-white">{value}</span>;
}

export function ComparisonTable() {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="p-5 text-left font-sans text-sm font-semibold uppercase tracking-wider text-smoke">
                What&apos;s included
              </th>
              {plans.map((p) => (
                <th
                  key={p}
                  className={cn(
                    "p-5 text-center font-display text-2xl uppercase tracking-wide text-white",
                    p === "Annual" && "bg-volt/5 text-volt"
                  )}
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row, i) => (
              <tr key={row.label} className={cn("border-b border-white/8", i % 2 && "bg-white/[0.015]")}>
                <td className="p-5 text-sm text-fog">{row.label}</td>
                {plans.map((p) => (
                  <td key={p} className={cn("p-5 text-center", p === "Annual" && "bg-volt/5")}>
                    <Cell value={row.plans[p] ?? false} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

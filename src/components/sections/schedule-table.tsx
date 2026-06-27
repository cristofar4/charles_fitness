"use client";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type ScheduleRow = { time: string; sessions: string[] };

export function ScheduleTable({
  days,
  rows,
}: {
  days: string[];
  rows: ScheduleRow[];
}) {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="p-4 text-left font-sans font-semibold uppercase tracking-wider text-smoke">Time</th>
              {days.map((d) => (
                <th key={d} className="p-4 text-left font-sans font-semibold uppercase tracking-wider text-smoke">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.time} className={cn("border-b border-white/8", i % 2 && "bg-white/[0.015]")}>
                <td className="whitespace-nowrap p-4 font-medium text-white">{row.time}</td>
                {row.sessions.map((s, j) => (
                  <td key={j} className="p-4 text-fog">
                    {s ? (
                      <span className="inline-block rounded-full border border-electric/20 bg-electric/5 px-3 py-1 text-electric-soft">
                        {s}
                      </span>
                    ) : (
                      <span className="text-smoke/30">—</span>
                    )}
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

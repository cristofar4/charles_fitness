"use client";

import * as React from "react";
import { MoveHorizontal } from "lucide-react";
import { MediaImage } from "@/components/shared/media";
import { type Transformation } from "@/lib/data";

export function TransformationSlider({ item }: { item: Transformation }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const setFromClientX = React.useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/11] w-full select-none overflow-hidden rounded-3xl border border-white/12"
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      data-cursor="hover"
    >
      {/* After (full, vibrant) */}
      <MediaImage src={item.after} alt={`${item.name} after`} tone={item.tone} seed={`${item.name}-after`} className="absolute inset-0" overlay={false} />
      <span className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-ink/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-volt backdrop-blur">
        After
      </span>

      {/* Before (clipped, muted) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <MediaImage src={item.before} alt={`${item.name} before`} tone="mono" seed={`${item.name}-before`} className="absolute inset-0" overlay={false} />
        <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-ink/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-fog backdrop-blur">
          Before
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 z-20 w-px bg-white/80" style={{ left: `${pos}%` }}>
        <button
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-ink/70 text-white backdrop-blur-xl"
          onPointerDown={(e) => {
            e.stopPropagation();
            dragging.current = true;
          }}
        >
          <MoveHorizontal className="size-5" />
        </button>
      </div>

      {/* Result chip */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink to-transparent p-6">
        <p className="font-display text-3xl uppercase tracking-wide text-white">{item.headline}</p>
        <p className="text-sm text-fog">{item.name} · {item.weeks} weeks</p>
      </div>
    </div>
  );
}

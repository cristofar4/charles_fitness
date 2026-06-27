"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { MediaImage } from "@/components/shared/media";
import { galleryFilters, gallery } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MasonryGallery() {
  const [filter, setFilter] = React.useState<(typeof galleryFilters)[number]>("All");
  const [active, setActive] = React.useState<number | null>(null);

  const items = React.useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  const activeItem = active !== null ? items[active] : null;
  const go = (dir: number) =>
    setActive((a) => (a === null ? a : (a + dir + items.length) % items.length));

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // `go` is stable for a given filter; changing the filter resets `active` to null.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.length]);

  return (
    <div className="container-fluid">
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setActive(null);
            }}
            data-cursor="hover"
            className={cn(
              "rounded-full border px-5 py-2.5 font-sans text-sm font-semibold transition-all",
              filter === f
                ? "border-volt bg-volt text-ink"
                : "border-white/12 bg-white/[0.02] text-smoke hover:border-white/30 hover:text-white"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <motion.div layout className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              data-cursor="hover"
              className={cn(
                "group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10",
                item.span === "tall" && "aspect-[3/4]",
                item.span === "wide" && "aspect-[4/3]",
                item.span === "square" && "aspect-square"
              )}
            >
              <MediaImage
                src={item.image}
                alt={item.caption}
                tone={item.tone}
                seed={`g-${item.id}`}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 z-10 translate-y-3 p-4 text-left text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[140] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <button
              className="absolute left-4 grid size-12 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10 md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              className="absolute right-4 grid size-12 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10 md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next"
            >
              <ChevronRight className="size-6" />
            </button>

            <motion.figure
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <MediaImage
                src={activeItem.image}
                alt={activeItem.caption}
                tone={activeItem.tone}
                seed={`g-${activeItem.id}`}
                monogram
                className="absolute inset-0"
                overlay={false}
              />
              <figcaption className="absolute bottom-0 left-0 z-10 bg-gradient-to-t from-ink to-transparent p-6 text-lg font-medium text-white">
                {activeItem.caption}
                <span className="ml-2 text-sm text-smoke">— {activeItem.category}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

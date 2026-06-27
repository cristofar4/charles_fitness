"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlogCard } from "@/components/cards/blog-card";
import { blogPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Training", "Nutrition", "Wellness", "Lifestyle"] as const;

export function BlogGrid() {
  const [filter, setFilter] = React.useState<(typeof categories)[number]>("All");
  const posts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <div className="container-fluid">
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            data-cursor="hover"
            className={cn(
              "rounded-full border px-5 py-2.5 font-sans text-sm font-semibold transition-all",
              filter === c
                ? "border-volt bg-volt text-ink"
                : "border-white/12 bg-white/[0.02] text-smoke hover:border-white/30 hover:text-white"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {posts.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <BlogCard post={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

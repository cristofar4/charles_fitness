"use client";

import { ArrowUpRight } from "lucide-react";
import { MediaImage } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import { type BlogPost } from "@/lib/data";
import { cn } from "@/lib/utils";

export function BlogCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/25",
        featured && "lg:col-span-2 lg:flex-row"
      )}
      data-cursor="hover"
    >
      <div className={cn("relative", featured ? "aspect-[16/10] lg:w-1/2" : "aspect-[16/10]")}>
        <MediaImage
          src={post.image}
          alt={post.title}
          tone={post.tone}
          seed={post.slug}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 z-10">
          <Badge variant="electric">{post.category}</Badge>
        </div>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:justify-center lg:p-10")}>
        <div className="flex items-center gap-3 text-xs text-smoke">
          <span>{post.date}</span>
          <span className="size-1 rounded-full bg-smoke" />
          <span>{post.readTime} read</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-sans font-bold text-white transition-colors group-hover:text-electric-soft",
            featured ? "text-h3" : "text-xl"
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-smoke">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric-soft">
          Read article
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </article>
  );
}

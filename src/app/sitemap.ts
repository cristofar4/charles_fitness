import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { navLinks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return navLinks.map((l) => ({
    url: `${BASE_URL}${l.href}`,
    lastModified: now,
    changeFrequency: l.href === "/" ? "weekly" : "monthly",
    priority: l.href === "/" ? 1 : 0.7,
  }));
}

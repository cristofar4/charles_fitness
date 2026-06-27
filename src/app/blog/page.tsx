import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { BlogCard } from "@/components/cards/blog-card";
import { BlogGrid } from "@/components/sections/blog-grid";
import { Reveal } from "@/components/motion/reveal";
import { pageMeta } from "@/lib/seo";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  description:
    "The Charlie's Total Fitness journal — training guides, nutrition advice, recovery science and wellness inspiration from Port Harcourt's leading coaches.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={<>Train your<br />mind too.</>}
        description="Science-backed training, nutrition and wellness insight from the coaches who get Port Harcourt in the best shape of its life."
        tone="ember"
      />

      {/* Featured */}
      <section className="container-fluid py-section">
        <Reveal>
          <span className="eyebrow mb-8 block">Featured</span>
        </Reveal>
        <div className="grid">
          <BlogCard post={featured} featured />
        </div>
      </section>

      {/* Grid */}
      <section className="pb-section">
        <div className="container-fluid mb-10">
          <SectionHeading
            eyebrow="Latest Articles"
            title={<>Fresh from <span className="text-gradient">the floor</span></>}
          />
        </div>
        <BlogGrid />
      </section>

      {/* Newsletter */}
      <section className="container-fluid pb-section">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal-800/40 p-10 text-center md:p-16">
          <span className="eyebrow justify-center">Stay in the loop</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.95] text-white">
            The best fitness advice, in your inbox
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-smoke">
            Join our newsletter for weekly training tips, recipes and member-only offers. No spam, ever.
          </p>
          <p className="mt-6 text-sm text-electric-soft">Subscribe via the form in the footer below ↓</p>
        </div>
      </section>
    </>
  );
}

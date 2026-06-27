import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MasonryGallery } from "@/components/sections/masonry-gallery";
import { CTASection } from "@/components/sections/cta-section";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "Step inside Charlie's Total Fitness Center, Port Harcourt. Browse our gym floor, pool, classes, spa, sports facilities and community in a full-screen luxury gallery.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside<br />Charlie&apos;s.</>}
        description="A glimpse of the spaces, the energy and the people. Filter, explore, and tap any image to view it full-screen."
        tone="electric"
      />

      <section className="py-section">
        <MasonryGallery />
      </section>

      <CTASection
        eyebrow="Pictures don't do it justice"
        title={<>See it for<br />yourself.</>}
        description="Book a free guided tour and experience the scale, the energy and the luxury in person."
        primary={{ label: "Book a tour", href: "/contact" }}
        secondary={{ label: "Join now", href: "/membership" }}
      />
    </>
  );
}

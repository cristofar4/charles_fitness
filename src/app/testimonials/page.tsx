import { type Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Transformations } from "@/components/home/transformations";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { VideoTestimonials } from "@/components/sections/video-testimonials";
import { StatsBand } from "@/components/home/stats-band";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { pageMeta } from "@/lib/seo";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Testimonials",
  description:
    "Real transformation stories from members of Charlie's Total Fitness Center, Port Harcourt. Before-and-after results, video testimonials and five-star reviews.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Transformation Stories"
        title={<>Results that<br />speak.</>}
        description="Behind every membership is a person who decided to change. These are their stories — drag, watch and read what's possible at Charlie's."
        tone="volt"
        meta={[
          { label: "Members", value: "500+" },
          { label: "Avg. rating", value: "4.9★" },
          { label: "Transformations", value: "300+" },
        ]}
      />

      <Transformations />

      {/* Video testimonials */}
      <section className="relative bg-charcoal-900 py-section">
        <div className="container-fluid">
          <SectionHeading
            eyebrow="In Their Words"
            title={<>Hear it <span className="text-gradient">first-hand</span></>}
            description="Tap a story to hear how Charlie's changed the way our members live, train and feel."
          />
          <div className="mt-14">
            <VideoTestimonials />
          </div>
        </div>
      </section>

      {/* Review grid */}
      <section className="container-fluid py-section">
        <SectionHeading
          align="center"
          eyebrow="Five-Star Reviews"
          title={<>Loved by the <span className="text-gradient">whole city</span></>}
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <StatsBand />

      <CTASection
        eyebrow="Your story is next"
        title={<>Start your<br />transformation.</>}
        description="Join 500+ members who decided to change. The hardest step is the first one — take it today."
        secondary={{ label: "View programs", href: "/programs" }}
      />
    </>
  );
}

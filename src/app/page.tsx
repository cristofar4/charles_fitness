import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { BrandStatement } from "@/components/home/brand-statement";
import { WhyUs } from "@/components/home/why-us";
import { StatsBand } from "@/components/home/stats-band";
import { ProgramsShowcase } from "@/components/home/programs-showcase";
import { FacilitiesShowcase } from "@/components/home/facilities-showcase";
import { Transformations } from "@/components/home/transformations";
import { TrainersPreview } from "@/components/home/trainers-preview";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { TestimonialsMarquee } from "@/components/home/testimonials-marquee";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <BrandStatement />
      <WhyUs />
      <StatsBand />
      <ProgramsShowcase />
      <FacilitiesShowcase />
      <Transformations />
      <TrainersPreview />
      <PricingTeaser />
      <TestimonialsMarquee />
      <CTASection
        eyebrow="Your first session is on us"
        title={<>Come see why<br />Port Harcourt trains here.</>}
        description="Book a free guided tour and a complimentary day pass. Experience the gym floor, the pool and the energy before you commit."
        primary={{ label: "Claim your free pass", href: "/membership" }}
        secondary={{ label: "Book a tour", href: "/contact" }}
      />
    </>
  );
}

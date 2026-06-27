"use client";

import { SectionHeading } from "@/components/sections/section-heading";
import { Marquee } from "@/components/motion/marquee";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { testimonials } from "@/lib/data";

export function TestimonialsMarquee() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="overflow-hidden py-section">
      <div className="container-fluid">
        <SectionHeading
          align="center"
          eyebrow="Loved by 500+ Members"
          title={<>The verdict is <span className="text-gradient">unanimous</span></>}
        />
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <Marquee speed={48}>
          {row1.map((t, i) => (
            <div key={i} className="mx-3 w-[min(86vw,30rem)]">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </Marquee>
        <Marquee speed={56} reverse>
          {row2.map((t, i) => (
            <div key={i} className="mx-3 w-[min(86vw,30rem)]">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

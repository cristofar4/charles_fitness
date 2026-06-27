"use client";

import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs as defaultFaqs, type Faq } from "@/lib/data";

export function FaqSection({
  items = defaultFaqs,
  eyebrow = "Questions, answered",
  title = "Frequently asked",
}: {
  items?: Faq[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="container-fluid py-section">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {items.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

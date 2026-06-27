import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { BrandStatement } from "@/components/home/brand-statement";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <BrandStatement />
    </>
  );
}

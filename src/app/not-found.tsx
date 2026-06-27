import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MediaArt } from "@/components/shared/media";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <MediaArt tone="electric" seed="404" monogram intensity={1} />
      <div className="relative z-10">
        <p className="font-display text-[clamp(6rem,22vw,18rem)] leading-none text-gradient">404</p>
        <h1 className="mt-2 font-sans text-h3 font-bold text-white">This rep doesn&apos;t exist.</h1>
        <p className="mx-auto mt-3 max-w-md text-smoke">
          The page you&apos;re looking for has left the building. Let&apos;s get you back to the floor.
        </p>
        <Button asChild size="lg" variant="primary" className="btn-glow mt-8">
          <Link href="/">
            <ArrowLeft className="size-5" /> Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}

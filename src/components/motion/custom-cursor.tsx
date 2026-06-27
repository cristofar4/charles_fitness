"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHasPointer } from "@/hooks/use-app";

/** A premium blended cursor: a small dot + a lagging ring that reacts to hover targets. */
export function CustomCursor() {
  const hasPointer = useHasPointer();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });
  const [hovering, setHovering] = React.useState(false);
  const [down, setDown] = React.useState(false);

  React.useEffect(() => {
    if (!hasPointer) return;
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest(
        "a,button,[data-cursor='hover'],input,textarea,[role='button']"
      );
      setHovering(!!target);
    };
    const downH = () => setDown(true);
    const upH = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", downH);
    window.addEventListener("mouseup", upH);
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", downH);
      window.removeEventListener("mouseup", upH);
    };
  }, [hasPointer, x, y]);

  if (!hasPointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      {/* dot */}
      <motion.div style={{ x, y }} className="absolute -ml-1 -mt-1 size-2 rounded-full bg-volt" />
      {/* lagging ring — fixed size, animated via scale so it stays centred */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.span
          animate={{ scale: down ? 0.8 : hovering ? 1.7 : 1, opacity: hovering ? 1 : 0.7 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="absolute -ml-[18px] -mt-[18px] block size-9 rounded-full border border-electric mix-blend-difference"
        />
      </motion.div>
    </div>
  );
}

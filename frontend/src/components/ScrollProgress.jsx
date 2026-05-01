import React from "react";
import { motion, useScroll } from "framer-motion";

/** Thin terracota progress bar, fixed at top. Editorial, breath-easy. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      data-testid="scroll-progress"
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0% 50%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "#C08261",
        zIndex: 100,
      }}
    />
  );
}

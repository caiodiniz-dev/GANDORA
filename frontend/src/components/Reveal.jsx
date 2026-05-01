import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — editorial breath-like entrance.
 * Soft fade + small upward translate, never bouncy.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = "",
  as = "div",
  ...rest
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.36, 0.07, 0.19, 0.97],
      }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** RevealText — splits a single line into words and reveals them with stagger.
 *  Use for big editorial titles. */
export function RevealText({ text, className = "", delay = 0, wordDelay = 0.06, style = {} }) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline-block", ...style }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1,
              delay: delay + i * wordDelay,
              ease: [0.36, 0.07, 0.19, 0.97],
            }}
            style={{ display: "inline-block", paddingRight: "0.28em" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

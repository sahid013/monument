"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Fades + lifts + focuses its children into view as they enter the viewport.
 * Animates once. Falls back to a static element when reduced motion is set.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

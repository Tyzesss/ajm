import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Vertical travel in px. Keep small for a calm feel. */
  y?: number;
  /** Subtle scale-in. Off by default for text blocks. */
  scale?: boolean;
};

export function Reveal({ children, delay = 0, className, y = 18, scale = false }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y,
              ...(scale ? { scale: 0.98 } : null),
            }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: reduce ? 0 : 0.65,
        delay: reduce ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

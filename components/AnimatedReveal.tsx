"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type AnimatedRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function AnimatedReveal({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

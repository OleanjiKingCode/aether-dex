"use client";

import { type MotionProps, motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

interface AnimatedQuoteProps extends MotionProps {
  text: string;
  delayChildren?: number;
  className?: string;
}

export const AnimatedQuote = ({
  text,
  delayChildren,
  className,
  ...props
}: AnimatedQuoteProps) => {
  const letters = text.split(""); // split into characters

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren: 0.02,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
      y: 0,
    },
  };

  return (
    <motion.div
      className={cn("quote inline-block", className)}
      initial="hidden"
      variants={container}
      viewport={{ amount: 0.5, once: false }}
      whileInView="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          className="inline-block"
          key={`${letter}-${index.toString()}-${delayChildren}`}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

"use client";

import { motion, type Variants } from "motion/react";

export const FeaturePoints = () => {
  const containerVariants: Variants = {
    animate: {
      transition: {
        damping: 15,
        delayChildren: 0.5,
        staggerChildren: 0.2,
        stiffness: 300,
        type: "spring",
      },
    },
  };

  const itemVariants = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 20 },
  };
  return (
    <div className="flex w-full basis-1/2 flex-col gap-4">
      <div className="flex flex-col gap-4 p-4 sm:p-12">
        <div className="py-4 font-geist-mono font-medium text-secondary text-xl sm:text-2xl">
          Making Every Transaction...
        </div>
        <motion.div
          className="flex flex-col gap-4 font-geist-mono"
          initial="initial"
          variants={containerVariants}
          whileInView="animate"
        >
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <div className="font-semibold text-base sm:text-lg">Simpler</div>
            <div className="w-full max-w-xl text-muted-foreground text-sm sm:text-base">
              One-click cross-chain trades with natural language commands and
              intuitive interface design.
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <div className="font-semibold text-base sm:text-lg">Smarter</div>
            <div className="w-full max-w-xl text-muted-foreground text-sm sm:text-base">
              AI-driven optimization finds the best routes, timing, and
              execution strategies automatically.
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <div className="font-semibold text-base sm:text-lg">Safer</div>
            <div className="w-full max-w-xl text-muted-foreground text-sm sm:text-base">
              Zero-knowledge privacy protection and advanced security auditing
              keep your trades secure.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

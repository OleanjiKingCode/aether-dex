"use client";

import { motion, type Variants } from "motion/react";

export const Tokens = () => {
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
    <motion.div
      className="flex flex-col gap-4 py-4 font-geist-mono"
      initial="initial"
      variants={containerVariants}
      whileInView="animate"
    >
      <motion.div
        className="flex flex-row items-center justify-between border-b pb-3"
        variants={itemVariants}
      >
        <div className="flex flex-row items-center gap-4">
          <div className="flex size-6 items-center justify-center bg-secondary font-bold text-black text-xl sm:size-8 sm:text-3xl">
            I
          </div>
          <div className="font-semibold text-2xl sm:text-3xl">$INJ</div>
        </div>
        <div className="font-medium text-sm sm:text-base">Render Network</div>
      </motion.div>
      <motion.div
        className="flex flex-row items-center justify-between border-b pb-3"
        variants={itemVariants}
      >
        <div className="flex flex-row items-center gap-4">
          <div className="flex size-6 items-center justify-center bg-primary font-bold text-black text-xl sm:size-8 sm:text-3xl">
            I
          </div>
          <div className="font-semibold text-2xl sm:text-3xl">$RNDR</div>
        </div>
        <div className="font-medium text-sm sm:text-base">
          Injective Protocol
        </div>
      </motion.div>
    </motion.div>
  );
};

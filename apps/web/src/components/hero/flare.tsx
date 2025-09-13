"use client";

import { motion, type Variants } from "motion/react";

import { FlareEffect } from "../icons";

const flareVariants = (direction: "right" | "left"): Variants => ({
  animate: {
    x: 0,
    y: 0,
  },
  initial: {
    x: direction === "left" ? "-100%" : "100%",
    y: "-100%",
  },
});

export const Flare = () => {
  return (
    <>
      <motion.div
        animate="animate"
        className="absolute top-0 left-0"
        initial="initial"
        transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
        variants={flareVariants("left")}
      >
        <FlareEffect />
      </motion.div>
      <motion.div
        animate="animate"
        className="absolute top-0 right-0"
        initial="initial"
        transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
        variants={flareVariants("right")}
      >
        <FlareEffect
          style={{
            transform: "rotateY(180deg)",
          }}
        />
      </motion.div>
    </>
  );
};

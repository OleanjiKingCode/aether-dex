"use client";

import Image from "next/image";

import { motion, type Variants } from "motion/react";
import BotIcon from "public/assets/bot.svg";
import ChainIcon from "public/assets/chain.svg";
import PackageIcon from "public/assets/package-icon.svg";

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

const itemVariants: Variants = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 20 },
};

export const Badges = () => {
  return (
    <motion.div
      animate="animate"
      className="mx-auto flex flex-col gap-3 pb-[18dvh] text-base sm:pb-0 md:flex-row md:gap-8 md:text-lg"
      initial="initial"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-row items-center gap-3 border border-secondary px-5 py-1 text-secondary md:py-2"
        variants={itemVariants}
      >
        <Image
          alt="Logo"
          className="size-4 md:size-6"
          height={24}
          src={PackageIcon}
          width={24}
        />
        Zero-Knowledge Proofs
      </motion.div>
      <motion.div
        className="flex flex-row items-center gap-3 border border-primary px-5 py-1 text-primary md:py-2"
        variants={itemVariants}
      >
        <Image alt="Logo" height={24} src={BotIcon} width={24} />
        AI-Driven Routing
      </motion.div>
      <motion.div
        className="flex flex-row items-center gap-3 border border-secondary px-5 py-1 text-secondary md:py-2"
        variants={itemVariants}
      >
        <Image alt="Logo" height={24} src={ChainIcon} width={24} />
        Cross-Chain Trading
      </motion.div>
    </motion.div>
  );
};

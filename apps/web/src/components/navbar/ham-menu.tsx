import { motion } from "motion/react";

import { StarsThinIcon } from "../icons";

export const HamburgerMenuContent = ({ isOpen }: { isOpen: boolean }) => {
  const variants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-0 top-0 right-0 z-[2] max-h-screen min-h-screen w-screen bg-background"
      initial="closed"
      transition={{
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      variants={variants}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute top-0 left-[5dvw] h-screen border border-white/20"></div>
        <div className="absolute top-0 right-[5dvw] h-screen border border-white/20"></div>
        <div className="absolute top-[10dvh] right-0 w-screen border border-white/20"></div>
        <StarsThinIcon className="-translate-y-[calc(50%-1px)] absolute top-[10dvh] right-[5%] translate-x-[calc(50%-1px)]" />
        <StarsThinIcon className="-translate-y-[calc(50%-1px)] -translate-x-[calc(50%-1px)] absolute top-[10dvh] left-[5%]" />

        <div className="mx-auto flex max-w-[90%] translate-y-[10dvh] flex-col font-geist-mono font-medium text-muted-foreground text-xl">
          <div className="border-white/20 border-b p-6">About</div>
          <div className="border-white/20 border-b p-6">Features</div>
          <div className="border-white/20 border-b p-6">Demo</div>
          <div className="border-white/20 border-b p-6">FAQ</div>

          <div className="p-4">
            <div className="group relative w-full">
              <button
                className="btn-gradient flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-4 border border-border px-4 font-geist-mono font-semibold"
                type="button"
              >
                Coming Soon
              </button>
              <div className="absolute top-0 right-0 size-3 border-[#FB9B00] border-t border-r"></div>
              <div className="absolute right-0 bottom-0 size-3 border-[#FB9B00] border-r border-b"></div>
              <div className="absolute top-0 left-0 size-3 border-[#FB9B00] border-t border-l"></div>
              <div className="absolute bottom-0 left-0 size-3 border-[#FB9B00] border-b border-l"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

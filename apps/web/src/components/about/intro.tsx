import { AnimatedQuote } from "../animate-quote";
import { TextAnimate } from "../text-animate";

export const Intro = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center gap-6 border-white/20 border-b pb-4 sm:pb-0 md:flex-row">
      <div className="absolute bottom-0 left-0 size-3 border-secondary border-b border-l"></div>
      <div className="absolute right-0 bottom-0 size-3 border-secondary border-r border-b"></div>
      <div className="flex basis-2/5 flex-col border-primary/20 sm:border-r sm:pb-8">
        <div className="flex flex-col gap-8 p-8">
          <div className="flex w-fit flex-row items-center gap-2 border border-secondary px-4 py-1 sm:py-2">
            <div className="size-3 rounded-full bg-secondary" />
            <div className="font-geist-mono text-secondary text-sm sm:text-base">
              About
            </div>
          </div>
          <div className="flex flex-col font-sans font-semibold text-3xl sm:text-4xl md:text-7xl">
            <AnimatedQuote text="What is" />
            <AnimatedQuote className="about-text-gradient" text="Aether DEX" />
          </div>
          <div className="font-geist-mono text-base">
            Built for the Next Generation of Traders
          </div>
        </div>
      </div>
      <div className="w-full border-white/20 border-t md:hidden" />
      <div className="flex basis-3/5 py-4">
        <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-4 px-4 sm:px-0">
          <div className="font-semibold text-2xl">DeFi has a problem!</div>
          <TextAnimate
            animation="fadeIn"
            as="p"
            by="word"
            className="font-geist-mono text-muted-foreground text-sm sm:text-base"
            delay={0.35}
          >
            Fragmented liquidity, high costs, and little attention to privacy.
            AetherDEX solves these challenges by combining cross-chain swaps,
            advanced privacy protection, and AI-powered trade optimization into
            one seamless platform.
          </TextAnimate>
          <div className="flex flex-row flex-wrap items-center justify-between gap-2 font-geist-mono text-primary">
            <div className="border border-primary px-4 py-2">
              Fragmented Liquidity
            </div>
            <div className="border border-primary px-4 py-2">High Cost</div>
            <div className="border border-primary px-4 py-2">
              Privacy Concerns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

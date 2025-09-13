import { AnimatedQuote } from "../animate-quote";
import { TextAnimate } from "../text-animate";

export const Title = () => {
  return (
    <div className="flex w-[896px] flex-col gap-[20px] p-8">
      <div className="flex w-fit flex-row items-center gap-2 border border-secondary px-4 py-1 sm:py-2">
        <div className="size-3 rounded-full bg-secondary" />
        <div className="font-geist-mono text-secondary text-sm sm:text-base">
          Core Features
        </div>
      </div>
      <div className="flex flex-col font-sans font-semibold text-3xl sm:text-4xl md:text-7xl">
        <AnimatedQuote text="What You'll Get with" />
        <AnimatedQuote className="about-text-gradient" text="AetherDEX" />
      </div>
      <TextAnimate
        animation="fadeIn"
        as="p"
        by="word"
        className="font-geist-mono text-muted-foreground text-sm sm:text-base"
        delay={0.35}
      >
        We're laying the foundation for a decentralized exchange that does more
        than execute swaps—it empowers traders with privacy, intelligence, and
        control.
      </TextAnimate>
    </div>
  );
};

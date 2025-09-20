import { AnimatedQuote } from "../animate-quote";

export const Intro = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center gap-6 border-white/20 border-b pb-4 sm:pb-0 lg:flex-row">
      <div className="absolute bottom-0 left-3 size-3 border-secondary border-b border-l lg:left-0"></div>
      <div className="absolute right-3 bottom-0 size-3 border-secondary border-r border-b lg:right-0"></div>
      <div className="flex flex-col sm:border-r sm:pb-8 lg:border-0 lg:border-b-0">
        <div className="flex flex-col gap-8 p-7">
          <div className="flex w-fit flex-row items-center gap-2 border border-secondary px-4 py-1 sm:py-2">
            <div className="size-3 rounded-full bg-secondary" />
            <div className="font-geist-mono text-secondary text-sm sm:text-base">
              Interactive Demo
            </div>
          </div>
          <div className="flex flex-col font-sans font-semibold text-3xl sm:text-4xl lg:text-7xl">
            <AnimatedQuote text="A Glimpse Into the" />
            <AnimatedQuote
              className="about-text-gradient"
              text="Future of Trading"
            />
          </div>
          <div className="font-geist-mono text-base">
            Picture this: you choose a token, toggle privacy on, and watch as AI
            finds the optimal route for your <br className="hidden lg:block" />{" "}
            trade—completed in under 30 seconds. This is the experience
            AetherDEX is being built to deliver.
          </div>
        </div>
      </div>
    </div>
  );
};

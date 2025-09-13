import { StarsThinIcon } from "../icons";
import { FeaturePoints } from "./feature-points";
import { Tokens } from "./tokens";

export const Features = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col border-white/20 border-b md:flex-row">
      <StarsThinIcon className="-translate-y-1/2 absolute top-0 right-1/2 translate-x-1/2" />
      <StarsThinIcon className="absolute right-1/2 bottom-0 translate-x-1/2 translate-y-1/2" />

      <div className="flex w-full basis-1/2 flex-col gap-4 border-white/20 px-4 py-8 sm:py-12 md:border-r md:px-8">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-2xl">
            Built for AI and DePIN tokens
          </div>
          <div className="max-w-xl font-geist-mono text-base text-muted-foreground">
            Whether you're trading $RNDR, $INJ, or other emerging AI and DePIN
            tokens, AetherDEX provides specialized support and optimized trading
            routes.
          </div>
        </div>
        <Tokens />

        <div className="group mx-auto flex flex-row items-center gap-2 text-center font-geist-mono text-sm sm:text-base">
          <div className="transition-all duration-200 ease-in-out group-hover:rotate-90">
            +
          </div>{" "}
          <div>Other emerging AI and DePIN tokens</div>
        </div>
      </div>
      <div className="relative md:hidden">
        <StarsThinIcon className="-translate-y-1/2 absolute top-0 right-0 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-0" />
        <div className="w-full border-white/20 border-t" />
      </div>
      <FeaturePoints />
    </div>
  );
};

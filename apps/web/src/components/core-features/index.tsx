import { StarsThinIcon } from "../icons";
import { Features } from "./features";
import { Title } from "./title";

export const CoreFeatures = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center px-[80px] pb-4 sm:pb-0">
      <div className="relative flex w-full flex-col sm:pb-8">
        <div className="absolute top-0 left-0 size-3 border-secondary border-t border-l"></div>
        <div className="absolute top-0 right-0 size-3 border-secondary border-t border-r"></div>
        <div className="absolute bottom-0 left-0 size-3 border-secondary border-b border-l"></div>
        <div className="absolute right-0 bottom-0 size-3 border-secondary border-r border-b"></div>
        <div className="absolute right-0 bottom-0 w-full border-[#FFFFFF33] border-[1px] border-t-0" />
        <Title />
        <div className="absolute top-0 right-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
      </div>
      <div className="relative h-fit">
        <div className="absolute top-0 left-1/2 h-full w-[1px] border-[#FFFFFF33] border-[1px] border-l-0" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 translate-x-1/2" />

        <Features />
      </div>
    </div>
  );
};

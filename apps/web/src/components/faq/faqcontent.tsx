import { AetherDEXFAQ } from "./faqquestions";

export const Faqcontent = () => {
  return (
    <div className="relative w-full border border-white/20 bg-background lg:max-h-[694px] lg:w-[1000px]">
      <div className="absolute top-0 left-0 size-3 border-secondary border-t border-l"></div>
      <div className="absolute right-0 bottom-0 size-3 rotate-180 border-secondary border-t border-l"></div>
      <div className="absolute top-0 right-0 size-3 border-secondary border-t border-r"></div>
      <div className="absolute bottom-0 left-0 size-3 rotate-180 border-secondary border-t border-r"></div>
      <AetherDEXFAQ />
    </div>
  );
};

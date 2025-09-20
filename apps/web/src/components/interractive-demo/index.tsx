import { Lines } from "../about/lines";
import { Body } from "./body";
import { AbsoluteImages } from "./images";
import { Intro } from "./intro";

export const Interractive = () => {
  return (
    <div className="relative flex flex-col overflow-hidden lg:px-[80px]">
      <Lines />
      <AbsoluteImages />
      <Intro />
      <Body />
    </div>
  );
};

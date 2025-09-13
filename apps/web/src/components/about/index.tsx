import { Features } from "./features";
import { AbsoluteImages } from "./images";
import { Intro } from "./intro";
import { Lines } from "./lines";
import { Tagline } from "./tagline";

export const About = () => {
  return (
    <div className="relative overflow-hidden px-[80px]">
      <Lines />
      <AbsoluteImages />

      <Intro />
      <Features />
      <Tagline />
    </div>
  );
};

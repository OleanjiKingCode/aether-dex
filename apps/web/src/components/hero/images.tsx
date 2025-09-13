import Image from "next/image";

import HeroBG from "public/assets/hero-bg.svg";
import Stars from "public/assets/stars.svg";

import { StarsThinIcon } from "../icons";

export const AbsoluteImages = () => {
  return (
    <>
      <Image
        alt="HeroBG"
        className="absolute top-0 right-1/2 w-full translate-x-1/2"
        height={200}
        src={HeroBG}
        width={200}
      />

      <StarsThinIcon className="-translate-y-1/2 absolute top-[10dvh] right-20 translate-x-1/2" />
      <StarsThinIcon className="-translate-y-1/2 -translate-x-1/2 absolute top-[10dvh] left-20" />
      <Image
        alt="Stars"
        className="absolute top-0 right-1/2 translate-x-1/2"
        height={705}
        src={Stars}
        width={685}
      />
    </>
  );
};

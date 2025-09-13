import Image from "next/image";

import AboutDivider from "public/assets/about-divider.svg";
import BlurPrimary from "public/assets/blur-primary.svg";
import BlurSecondary from "public/assets/blur-secondary.svg";

import { StarsThinIcon } from "../icons";

export const AbsoluteImages = () => {
  return (
    <>
      <Image
        alt="Blur Primary"
        className="absolute top-0 right-[5%] size-[48rem]"
        height={200}
        src={BlurPrimary}
        width={200}
      />
      <Image
        alt="Blur Secondary"
        className="absolute bottom-0 left-[5%] size-[48rem]"
        height={200}
        src={BlurSecondary}
        width={200}
      />
      <Image
        alt="About Divider"
        className="w-full"
        height={100}
        src={AboutDivider}
        width={100}
      />
      <StarsThinIcon className="-translate-y-1/2 absolute top-0 right-[20%] hidden translate-x-1/2 sm:block" />
      <StarsThinIcon className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-[20%] hidden sm:block" />
    </>
  );
};

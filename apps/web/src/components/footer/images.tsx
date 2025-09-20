import Image from "next/image";

import AboutDivider from "public/assets/about-divider.svg";
import BlurPrimary from "public/assets/blur-primary.svg";
import BlurSecondary from "public/assets/blur-secondary.svg";

import { StarsThinIcon2 } from "../icons/starrs-thin2";

export const AbsoluteImages = () => {
  return (
    <>
      <Image
        alt="Blur Primary"
        className="-top-20 absolute right-10 size-[48rem]"
        height={200}
        src={BlurSecondary}
        width={200}
      />
      <Image
        alt="Blur Secondary"
        className="-top-20 absolute left-[5%] size-[48rem]"
        height={200}
        src={BlurPrimary}
        width={200}
      />
      <Image
        alt="About Divider"
        className="w-full"
        height={100}
        src={AboutDivider}
        width={100}
      />
      <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-[30%] lg:hidden" />
      <StarsThinIcon2 className="-translate-y-1/2 absolute top-0 right-[30%] z-[5000] translate-x-1/2 lg:hidden" />

      <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 absolute top-5 left-[80px] hidden sm:block" />
      <StarsThinIcon2 className="-translate-y-1/2 absolute top-5 right-[calc(30%+32px)] z-[5000] hidden translate-x-1/2 sm:block" />
      <StarsThinIcon2 className="-translate-y-1/2 absolute top-5 right-[calc(12.5%+60px)] hidden translate-x-1/2 sm:block" />
      <StarsThinIcon2 className="-translate-y-1/2 absolute top-18.5 right-[calc(55%-8px)] hidden translate-x-1/2 sm:block" />
      <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 absolute top-5 left-[calc(12.4%+62px)] hidden sm:block" />
      <StarsThinIcon2 className="-translate-y-1/2 absolute top-5 right-[80px] hidden translate-x-1/2 sm:block" />
    </>
  );
};

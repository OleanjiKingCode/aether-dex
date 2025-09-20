import Image from "next/image";

import BlurPrimary from "public/assets/blur-primary.svg";

export const AbsoluteImages = () => {
  return (
    <>
      <Image
        alt="Blur Primary"
        className="absolute top-[30%] right-20 size-[48rem]"
        height={200}
        src={BlurPrimary}
        width={200}
      />

      {/* <StarsThinIcon className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-[20%] hidden sm:block" /> */}
    </>
  );
};

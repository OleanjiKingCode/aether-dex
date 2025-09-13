"use client";

import Image from "next/image";

import HamburgerClosed from "public/assets/ham-closed.svg";
import HamburgerOpen from "public/assets/ham-open.svg";

export const HamburgerMenuButton = ({
  toggleOpen,
  isOpen,
}: {
  toggleOpen: () => void;
  isOpen: boolean;
}) => {
  return (
    <button className="cursor-pointer" onClick={toggleOpen} type="button">
      <Image
        alt="Hamburger Open"
        className="z-[1000000000] size-10"
        height={100}
        src={isOpen ? HamburgerOpen : HamburgerClosed}
        width={100}
      />
    </button>
  );
};

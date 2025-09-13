"use client";

import Image from "next/image";

import { useState } from "react";

import LogoText from "public/assets/logo-text.svg";

import { HamburgerMenuContent } from "./ham-menu";
import { HamburgerMenuButton } from "./hamburger";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute right-1/2 z-[100000] mx-auto flex h-[10dvh] w-[90%] translate-x-1/2 flex-row items-center justify-between gap-5 bg-transparent px-2 md:hidden">
        <Image
          alt="Logo"
          className="w-[8rem]"
          height={100}
          src={LogoText}
          width={100}
        />
        <HamburgerMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>
      <HamburgerMenuContent isOpen={isOpen} />
    </>
  );
};

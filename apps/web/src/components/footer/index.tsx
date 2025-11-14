import Image from "next/image";

import AboutDivider from "public/assets/about-divider.svg";
import LogoText from "public/assets/logo-text.svg";

import { StarsThinIcon } from "../icons";
import { StarsThinIcon2 } from "../icons/starrs-thin2";
import { AbsoluteImages } from "./images";
import { Lines } from "./lines";

export const Footer = () => {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[url('/assets/footer-layer-blur.png')] bg-center bg-cover bg-no-repeat pb-20 lg:bg-contain lg:px-[80px] lg:pt-5">
      <AbsoluteImages />
      <Lines />

      <div className="mx-auto flex w-full flex-col justify-between py-[4%] pb-0 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 px-7">
          <div>
            <Image
              alt="Logo"
              className="w-[8rem] lg:w-84"
              height={100}
              src={LogoText}
              width={100}
            />
          </div>
          <p>
            The privacy-first decentralized exchange for AI <br /> and DePIN
            tokens.{" "}
            <a
              className="text-primary hover:underline"
              href="https://trade.aetherdex.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Launch Dapp
            </a>
          </p>
          <div className="flex flex-row gap-[44px]">
            <a
              className="transition-opacity hover:opacity-70"
              href="https://x.com/the_aether_dex?s=21"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="x logo"
                height={32}
                src={"/assets/twitter.svg"}
                width={32}
              />
            </a>
            <Image
              alt="reddit logo"
              height={32}
              src={"/assets/reddit.svg"}
              width={32}
            />
            <Image
              alt="mail logo"
              height={32}
              src={"/assets/mail.svg"}
              width={32}
            />
          </div>
        </div>
        <div className="relative mt-10 flex w-full flex-2 justify-between border-white/20 border-t-[1px] px-7 py-10 lg:mt-0 lg:justify-around lg:border-0">
          <div className="absolute top-0 left-1/2 h-full w-[1px] border-white/20 border-r-[1px] lg:hidden" />
          <StarsThinIcon className="!size-[30px] absolute top-[-15px] left-[calc(50%-15px)] lg:hidden" />
          <StarsThinIcon className="!size-[30px] absolute top-[-15px] left-[-2px] lg:hidden" />
          <StarsThinIcon className="!size-[30px] absolute top-[-15px] right-[-2px] lg:hidden" />

          <div className="flex flex-col items-start justify-start gap-6">
            <div>
              <p className="font-medium lg:text-[18px]">Product</p>
            </div>
            <div className="flex flex-col gap-[8px] text-[16px]">
              <a
                className="transition-opacity hover:underline hover:opacity-70"
                href="https://aether-dex.gitbook.io/aether-dex-docs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Whitepaper
              </a>
              <a
                className="transition-opacity hover:underline hover:opacity-70"
                href="https://www.aetherdex.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Website
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <div>
              <p className="font-medium lg:text-[18px]">Development</p>
            </div>
            <div className="flex flex-col gap-[8px] text-[16px]">
              <div className="flex flex-row items-center gap-2">
                <div className="h-[10px] w-[10px] rounded-full bg-secondary"></div>
                <a
                  className="text-primary hover:underline"
                  href="https://trade.aetherdex.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Launch Dapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="About Divider"
        className="relative mt-5 hidden w-full lg:block"
        height={100}
        src={AboutDivider}
        width={100}
      />
      <div className="relative px-7">
        <StarsThinIcon2 className="-translate-y-1/2 absolute right-[30%] bottom-[22px] hidden translate-x-1/2 lg:block" />
        <StarsThinIcon2 className="-translate-y-1/2 absolute right-[12.5%] bottom-[22px] hidden translate-x-1/2 lg:block" />
        <StarsThinIcon2 className="-translate-y-1/2 absolute right-0 bottom-[22px] hidden translate-x-1/2 lg:block" />
        <StarsThinIcon2 className="-translate-y-1/2 -bottom-8 absolute right-[55%] hidden translate-x-1/2 lg:block" />
        <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 absolute bottom-[22px] left-0 hidden lg:block" />
        <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 absolute bottom-[22px] left-[12.4%] hidden lg:block" />
      </div>
      <div className="lg:hidden">
        <div className="relative mx-auto flex flex w-full justify-between border-white/20 border-t-[1px] px-7 py-10 text-[14px] lg:flex-row">
          <div className="absolute top-0 left-1/2 h-full w-[1px] border-white/20 border-r-[1px]" />
          <StarsThinIcon className="!size-[30px] absolute top-[-15px] left-[calc(50%-15px)]" />
          <StarsThinIcon className="!size-[30px] absolute top-[-15px] left-[-2px]" />
          <StarsThinIcon className="!size-[30px] absolute top-[-15px] right-[-2px]" />
          <StarsThinIcon className="!size-[30px] absolute bottom-[-15px] left-[calc(50%-15px)]" />
          <StarsThinIcon className="!size-[30px] absolute bottom-[-15px] left-[-2px]" />
          <StarsThinIcon className="!size-[30px] absolute right-[-2px] bottom-[-15px]" />
        </div>
        <div className="mx-auto flex flex w-full flex-col justify-between border-white/20 border-y-[1px] px-7 py-10 text-[14px] lg:flex-row">
          <p>Built with❤️for DeFi</p>
          <p>© 2025 AetherDEX. All rights reserved.</p>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="relative mx-auto flex flex w-full justify-between border-white/20 border-b-[1px] px-7 py-10 text-[14px] lg:flex-row">
          <p>© 2025 AetherDEX. All rights reserved.</p>

          <p>Built with❤️for DeFi</p>
        </div>
      </div>
      <div className="relative">
        <div className="-bottom-20 absolute right-[0%] hidden h-[1px] w-full translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
        <div>
          <StarsThinIcon2 className="-translate-y-1/2 -bottom-8 absolute right-[30%] hidden translate-x-1/2 lg:block" />
          <StarsThinIcon2 className="-translate-y-1/2 -bottom-8 absolute right-[12.5%] hidden translate-x-1/2 lg:block" />
          <StarsThinIcon2 className="-translate-y-1/2 -bottom-8 absolute right-0 hidden translate-x-1/2 lg:block" />
          <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 -bottom-8 absolute left-0 hidden lg:block" />
          <StarsThinIcon2 className="-translate-y-1/2 -translate-x-1/2 -bottom-8 absolute left-[12.4%] hidden lg:block" />
          <StarsThinIcon2 className="-translate-y-1/2 -bottom-8 absolute right-[55%] hidden translate-x-1/2 lg:block" />
        </div>
      </div>
    </div>
  );
};

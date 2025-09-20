import Image from "next/image";

import { MoveRightIcon, ZapIcon } from "lucide-react";
import Logo from "public/assets/logo.png";

import { TextAnimate } from "../text-animate";
import { Badges } from "./badges";
import { Flare } from "./flare";
import { AbsoluteImages } from "./images";
import { Lines } from "./lines";

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center gap-8 sm:overflow-hidden lg:px-[80px]">
      <Lines />
      <AbsoluteImages />
      <Flare />
      <div className="mx-auto flex w-[calc(100%-24px)] translate-y-[12dvh] flex-col items-center justify-center gap-8 sm:translate-y-0 lg:mt-30">
        <div className="z-[3] mx-auto flex flex-col items-center justify-center gap-4">
          <Image
            alt="Logo"
            className="size-16 lg:size-20"
            height={84}
            src={Logo}
            width={84}
          />
          <div className="mx-2 flex w-fit flex-row items-center gap-2 border border-secondary px-2 py-2 lg:px-8 lg:py-3">
            <div className="size-2 rounded-full bg-secondary lg:size-3" />
            <div className="font-geist-mono text-[13px] text-secondary lg:text-base">
              PRIVACY-FIRST DECENTRALIZED EXCHANGE
            </div>
          </div>
        </div>
        <div className="max-w-sm text-center font-medium text-3xl leading-[1] sm:max-w-4xl sm:text-[4rem] lg:text-4xl lg:text-[5rem] lg:tracking-tighter">
          <TextAnimate animation="slideUp" as="span" by="word">
            The Privacy-First Exchange for
          </TextAnimate>{" "}
          <span className="font-instrument text-primary italic">
            <span className="text-secondary">
              <TextAnimate animation="scaleUp" as="span" by="text" delay={0.4}>
                AI
              </TextAnimate>
            </span>{" "}
            <TextAnimate animation="scaleUp" as="span" by="text" delay={0.5}>
              and
            </TextAnimate>
            <br className="block sm:hidden" />{" "}
            <span className="text-secondary">
              <TextAnimate animation="scaleUp" as="span" by="text" delay={0.6}>
                DePIN
              </TextAnimate>
            </span>{" "}
            <TextAnimate animation="scaleUp" as="span" by="text" delay={0.7}>
              Tokens
            </TextAnimate>
          </span>
        </div>
        <TextAnimate
          animation="fadeIn"
          as="p"
          by="word"
          className="mx-auto max-w-3xl px-2 text-center font-geist-mono text-[#D2D2D2] text-sm lg:text-lg"
          delay={0.35}
        >
          AetherDEX is building a decentralized exchange that lets you trade AI
          and DePIN tokens across multiple blockchains with unmatched privacy
          and efficiency. Powered by zero-knowledge proofs and AI-driven
          routing, we're rethinking what secure, intelligent trading looks like.
        </TextAnimate>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
          <div className="group relative w-full">
            <button
              className="btn-gradient flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-4 border border-border px-4 font-geist-mono font-semibold"
              type="button"
            >
              Discover AetherDEX
              <MoveRightIcon className="transition-all duration-300 ease-in-out group-hover:translate-x-2" />
            </button>
            <div className="absolute top-0 right-0 size-3 border-[#FB9B00] border-t border-r"></div>
            <div className="absolute right-0 bottom-0 size-3 border-[#FB9B00] border-r border-b"></div>
            <div className="absolute top-0 left-0 size-3 border-[#FB9B00] border-t border-l"></div>
            <div className="absolute bottom-0 left-0 size-3 border-[#FB9B00] border-b border-l"></div>
          </div>
          <div className="group relative w-full">
            <button
              className="flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-4 border border-primary px-4 font-geist-mono font-semibold"
              type="button"
            >
              See How it works
              <ZapIcon className="text-accent transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105" />
            </button>
            <div className="absolute top-0 right-0 size-3 border-[#FB9B00] border-t border-r"></div>
            <div className="absolute right-0 bottom-0 size-3 border-[#FB9B00] border-r border-b"></div>
            <div className="absolute top-0 left-0 size-3 border-[#FB9B00] border-t border-l"></div>
            <div className="absolute bottom-0 left-0 size-3 border-[#FB9B00] border-b border-l"></div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl border-white/20 border-t" />
        <Badges />
      </div>
    </div>
  );
};

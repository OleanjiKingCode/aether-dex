import Image from "next/image";

import BlurPrimary from "public/assets/blur-primary.svg";
import BlurSecondary from "public/assets/blur-secondary.svg";

import { StarsThinIcon } from "../icons";
import { ConversationalTrading } from "./conversational-trading";
import { CrossChainSwap } from "./cross-chain-swap";
import { GovernanceAndStaking } from "./governance-staking";
import { PrivacyAtCore } from "./privacy-at-core";
import { SmartTrading } from "./smarter-trading";

export const Features = () => {
  return (
    <div className="flex flex-col">
      <div className="relative px-3 py-8 lg:px-8 lg:py-[50px]">
        <CrossChainSwap />
        <div className="absolute top-0 right-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
        <Image
          alt="Blur Secondary"
          className="absolute top-1/4 right-0 size-[40rem] lg:bottom-[-320px]"
          height={200}
          src={BlurSecondary}
          width={200}
        />
      </div>
      <div className="relative px-3 py-8 lg:px-8 lg:py-[50px]">
        <div className="absolute top-0 left-0 hidden h-[1px] w-1/2 translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <div className="absolute top-0 left-0 h-[1px] w-full border-white/20 border-t-[1px] lg:left-1/2 lg:w-1/2" />
        <div className="absolute top-0 left-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 hidden translate-x-1/2 lg:block" />
        <PrivacyAtCore />
      </div>
      <div className="relative px-3 py-8 lg:px-8 lg:py-[50px]">
        <div className="absolute top-0 left-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <div className="absolute top-0 left-0 h-[1px] w-full border-white/20 border-t-[1px]" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 hidden translate-x-1/2 lg:block" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-[12px] translate-x-1/2" />
        <Image
          alt="Blur Primary"
          className="absolute top-[-200px] left-0 w-full lg:top-[-350px] lg:left-[220px] lg:size-[24rem]"
          height={200}
          src={BlurPrimary}
          width={200}
        />
        <SmartTrading />
      </div>
      <div className="relative px-3 py-8 lg:px-8 lg:py-[50px]">
        <div className="absolute top-0 left-0 h-[1px] w-full border-white/20 border-t-[1px] lg:w-1/2" />
        <div className="absolute top-0 left-1/2 hidden h-[1px] w-1/2 translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 hidden translate-x-1/2 lg:block" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 left-[-30px] translate-x-1/2" />
        <ConversationalTrading />
      </div>

      <div className="relative px-3 py-8 pb-0 lg:px-8 lg:py-[50px]">
        <div className="absolute top-0 left-0 h-[1px] w-full border-white/20 border-t-[1px]" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 hidden translate-x-1/2 lg:block" />
        <Image
          alt="Blur Primary"
          className="absolute top-[-200px] left-0 w-full lg:top-[-350px] lg:left-[220px] lg:size-[24rem]"
          height={200}
          src={BlurPrimary}
          width={200}
        />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-0 hidden translate-x-1/2 lg:block" />
        <GovernanceAndStaking />
      </div>
    </div>
  );
};

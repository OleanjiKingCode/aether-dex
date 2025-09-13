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
    <div className="flex flex-col pb-[50px]">
      <div className="relative px-8 py-[50px]">
        <CrossChainSwap />
        <div className="absolute top-0 right-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
        <Image
          alt="Blur Secondary"
          className="absolute right-0 bottom-[-320px] size-[40rem]"
          height={200}
          src={BlurSecondary}
          width={200}
        />
      </div>
      <div className="relative px-8 py-10">
        <div className="absolute top-0 left-0 hidden h-[1px] w-1/2 translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <div className="absolute top-0 left-1/2 h-[1px] w-1/2 border-[#FFFFFF33] border-t-[1px]" />
        <div className="absolute top-0 left-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 translate-x-1/2" />
        <PrivacyAtCore />
      </div>
      <div className="relative px-8 py-10">
        <div className="absolute top-0 left-26 hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />

        <div className="absolute top-0 left-0 h-[1px] w-full border-[#FFFFFF33] border-t-[1px]" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-0 translate-x-1/2" />
        <Image
          alt="Blur Primary"
          className="absolute top-[-350px] left-[220px] size-[48rem]"
          height={200}
          src={BlurPrimary}
          width={200}
        />
        <SmartTrading />
      </div>
      <div className="relative px-8 py-10">
        <div className="absolute top-0 left-0 h-[1px] w-1/2 border-[#FFFFFF33] border-t-[1px]" />
        <div className="absolute top-0 left-1/2 hidden h-[1px] w-1/2 translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 left-[-30px] translate-x-1/2" />
        <ConversationalTrading />
      </div>

      <div className="relative px-8 py-10 pb-0">
        <div className="absolute top-0 left-0 h-[1px] w-full border-[#FFFFFF33] border-t-[1px]" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-1/2 translate-x-1/2" />
        <Image
          alt="Blur Primary"
          className="absolute top-[-350px] left-[0px] size-[48rem]"
          height={200}
          src={BlurPrimary}
          width={200}
        />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-0 translate-x-1/2" />
        <GovernanceAndStaking />
      </div>
    </div>
  );
};

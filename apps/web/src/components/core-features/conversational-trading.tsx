"use client";

import Image from "next/image";

import ConversationalTradingFlow from "public/assets/core-features/flow/conversational-trading.svg";
import ConversationalTradingIcon from "public/assets/core-features/icon/conversational-trading-icon.svg";
import ThinkingIcon from "public/assets/core-features/icon/thinking.svg";

import { StarsThinIcon } from "../icons";
import { SubTitle } from "./sub-title";

export const ConversationalTrading = () => {
  return (
    <div className="relative flex h-fit w-full flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="flex flex-1 flex-col gap-[20px] px-4 py-0 lg:ml-0 lg:py-8">
        <SubTitle
          color="primary"
          icon={ConversationalTradingIcon}
          orderNumber={"04"}
          title="Conversational Trading Assistant"
        />
        <div className="max-w-[576px] font-geist-mono text-base text-muted-foreground">
          Turn on Privacy Mode with a single toggle. Powered by zero-knowledge
          proofs, AetherDEX ensures that your trades remain private and
          encrypted while staying verifiable on-chain.
        </div>
        <div className="flex items-center justify-between border-[#FFFFFF33] border-[1px] bg-card px-5 py-[6px]">
          <div className="font-geist-mono text-[18px] text-primary">
            "Swap 1 ETH for $RNDR privately"
          </div>
        </div>
        <div className="flex items-center justify-between border-[#FFFFFF33] border-[1px] bg-card px-5 py-[6px]">
          <div className="font-geist-mono text-[18px] text-primary">
            "What's the best yield option right now?"
          </div>
        </div>
        <div className="flex items-center justify-between border-[#FFFFFF33] border-[1px] bg-card px-5 py-[6px]">
          <div className="font-geist-mono text-lg text-primary">
            "Show me $INJ trading pairs"
          </div>
        </div>
        <div className="flex items-center justify-between lg:mt-6">
          <div className="flex items-center justify-between gap-3">
            <Image alt="" height={20} src={ThinkingIcon} width={20} />
            <div className="font-geist-mono text-lg text-muted-foreground">
              Natural language processing
            </div>
          </div>
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
      </div>
      <div className="relative h-[1px] w-full border-white/20 border-b-[1px] lg:hidden">
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-0 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 left-[-30px] translate-x-1/2" />
      </div>
      <div className="flex flex-1 items-center justify-center px-4 lg:ml-0">
        <Image
          alt="Conversational trading"
          className="w-full"
          src={ConversationalTradingFlow}
        />
      </div>
    </div>
  );
};

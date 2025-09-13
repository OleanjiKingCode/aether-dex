"use client";

import Image from "next/image";

import ConversationalTradingFlow from "public/assets/core-features/flow/conversational-trading.svg";
import ConversationalTradingIcon from "public/assets/core-features/icon/conversational-trading-icon.svg";
import ThinkingIcon from "public/assets/core-features/icon/thinking.svg";

import { SubTitle } from "./sub-title";

export const ConversationalTrading = () => {
  return (
    <div className="flex w-full gap-12">
      <div className="flex flex-1 flex-col gap-[20px] py-8">
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
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <Image alt="" height={20} src={ThinkingIcon} width={20} />
            <div className="font-geist-mono text-lg text-muted-foreground">
              Natural language processing
            </div>
          </div>
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image alt="Conversational trading" src={ConversationalTradingFlow} />
      </div>
    </div>
  );
};

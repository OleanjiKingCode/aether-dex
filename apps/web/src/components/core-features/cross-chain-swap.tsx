import Image from "next/image";

import CrossChainSwapFlow from "public/assets/core-features/flow/cross-chain-swap.svg";
import CrossChainSwapIcon from "public/assets/core-features/icon/cross-chain-swap-icon.svg";
import SlippageIcon from "public/assets/core-features/icon/slippage-icon.svg";
import SpeedIcon from "public/assets/core-features/icon/speed-icon.svg";

import { BaseButton } from "../base/button";
import { InfoCard } from "./info-card";
import { SubTitle } from "./sub-title";

export const CrossChainSwap = () => {
  return (
    <div className="relative flex h-fit w-full gap-12">
      <div className="flex flex-1 flex-col gap-[20px] py-8">
        <SubTitle
          color="secondary"
          icon={CrossChainSwapIcon}
          orderNumber={"01"}
          title="Seamless Cross-Chain Swaps"
        />
        <div className="max-w-[576px] font-geist-mono text-base text-muted-foreground">
          Swap AI and DePIN tokens across Ethereum and Solana in less than 30
          seconds. Liquidity aggregation ensures better pricing and lower
          slippage without needing multiple platforms.
        </div>
        <div className="flex gap-[27px]">
          <InfoCard content="> 30S" header="SPEED" iconUrl={SpeedIcon} />
          <InfoCard content="0.1%" header="SLIPPAGE" iconUrl={SlippageIcon} />
        </div>
        <div className="flex gap-[27px]">
          <BaseButton
            className="border-[#3F2A63] border-[1px] text-primary"
            name="ETHEREUM"
          />
          <BaseButton
            className="border-[#997740] border-[1px] text-secondary"
            name="SOLANA"
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image alt="cross chain swap flow" src={CrossChainSwapFlow} />
      </div>
    </div>
  );
};

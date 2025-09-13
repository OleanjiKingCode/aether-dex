import Image from "next/image";

import GridContainer from "public/assets/service/Grid Container.svg";
import OneClickIcon from "public/assets/service/icon/1-click.svg";
import AIPoweredIcon from "public/assets/service/icon/ai-powered.svg";
import CrossChainSpeedIcon from "public/assets/service/icon/cross-chain-speed.svg";
import LiquidityIcon from "public/assets/service/icon/liquidity-source.svg";
import PrivateSwapIcon from "public/assets/service/icon/private-swap.svg";
import TradingSpeedIcon from "public/assets/service/icon/trading-speed.svg";

import { StarsThinIcon } from "../icons";
import { Card } from "./card";

export const Service = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center px-[80px] pb-4 sm:pb-0">
      <div className="absolute top-0 left-[112px] h-full border-white/20 border-r"></div>
      <div className="absolute top-0 right-[112px] h-full border-white/20 border-r"></div>
      <StarsThinIcon className="!size-[30px] absolute right-[98px] bottom-[-15px]" />
      <StarsThinIcon className="!size-[30px] absolute bottom-[-15px] left-[98px]" />
      <div className="w-full px-8">
        <div className="flex justify-between">
          <Card
            cardClass="!w-1/3 border-r-[1px] !border-dashed border-[#FFFFFF33]"
            content="Zero-knowledge proof protection for anonymous trades"
            header="Private Swaps"
            iconUrl={PrivateSwapIcon}
            serviceClassName="text-primary "
            serviceName="100%"
          />
          <Card
            cardClass="!w-1/3 border-r-[1px] !border-dashed border-[#FFFFFF33]"
            content="Smart routing suggestions always on"
            header="AI-Powered"
            iconUrl={AIPoweredIcon}
            serviceClassName="text-secondary "
            serviceName="24/7"
          />
          <Card
            cardClass=""
            content="Aggregated for better prices and lower slippage"
            header="Liquidity Sources"
            iconUrl={LiquidityIcon}
            serviceClassName="text-primary "
            serviceName="150+"
          />
        </div>
      </div>
      <div>
        <Image alt="" src={GridContainer} />
      </div>
      <div className="w-full px-8">
        <div className="flex justify-between">
          <Card
            cardClass="!w-1/3 border-r-[1px] !border-dashed border-[#FFFFFF33]"
            content="Bridge tokens between Ethereum and Solana"
            header="Private Swaps"
            iconUrl={CrossChainSpeedIcon}
            serviceClassName="text-secondary "
            serviceName="< 30s"
          />
          <Card
            cardClass="!w-1/3 border-r-[1px] !border-dashed border-[#FFFFFF33]"
            content="Half shared back to $AETH stakers"
            header="Private Swaps"
            iconUrl={TradingSpeedIcon}
            serviceClassName="text-primary "
            serviceName="0.2%"
          />
          <Card
            cardClass=""
            content="Privacy toggle and wallet connection"
            header="Private Swaps"
            iconUrl={OneClickIcon}
            serviceClassName="text-secondary "
            serviceName="1-Click"
          />
        </div>
      </div>
    </div>
  );
};

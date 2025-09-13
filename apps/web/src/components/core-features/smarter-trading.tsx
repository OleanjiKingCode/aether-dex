"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import SmarterTradingFlow from "public/assets/core-features/flow/smarter-trading.svg";
import SmarterTradingIcon from "public/assets/core-features/icon/smarter-trading-icon.svg";

import { Progressbar } from "../base/progressBar";
import { SubTitle } from "./sub-title";

export const SmartTrading = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(90);
  });
  return (
    <div className="relative z-10 flex w-full gap-12">
      <div className="flex flex-1 flex-col gap-[20px] py-8">
        <SubTitle
          color="secondary"
          icon={SmarterTradingIcon}
          orderNumber={"03"}
          title="Smarter Trading with AI"
        />
        <div className="max-w-[576px] font-geist-mono text-base text-muted-foreground">
          Behind the scenes, AI optimizes trade routes, lowers fees, and
          suggests better options in real time. Instead of comparing chains and
          pools manually, AetherDEX helps you make the smartest move instantly.
        </div>
        <div className="flex w-full items-center justify-between border-[#FFFFFF33] border-[1px] bg-card p-[20px]">
          <div className="flex w-full flex-col gap-[14px]">
            <div className="font-geist-mono text-muted-foreground text-sm">
              AI_OPTIMIZATION_ACTIVE
            </div>
            <div className="flex w-full flex-col gap-1 text-[18px] text-primary">
              <div className="flex justify-between">
                <div className="font-geist-mono text-secondary text-xs">
                  Route Optimization
                </div>
                <div className="font-geist-mono text-secondary text-xs">
                  {progress}%
                </div>
              </div>
              <Progressbar
                color={`!bg-secondary !rounded-[90px]`}
                containerClass={`!border-none !bg-border !h-2 !rounded-[90px]`}
                max={100}
                min={0}
                now={progress}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-[27px]">
          <div className="flex w-[173px] flex-col items-center justify-center gap-[10px]">
            <div className="font-geist-mono text-2xl text-secondary">67%</div>
            <div className="font-geist-mono text-muted-foreground text-xs">
              Fee Reduction
            </div>
          </div>
          <div className="flex w-[173px] flex-col items-center justify-center gap-[10px]">
            <div className="font-geist-mono text-2xl text-secondary">12ms</div>
            <div className="font-geist-mono text-muted-foreground text-xs">
              Response Time
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image alt="smarter trading with AI" src={SmarterTradingFlow} />
      </div>
    </div>
  );
};

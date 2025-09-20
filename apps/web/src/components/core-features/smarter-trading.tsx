"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SmarterTradingFlow from "public/assets/core-features/flow/smarter-trading.svg";
import SmarterTradingIcon from "public/assets/core-features/icon/smarter-trading-icon.svg";
import { StarsThinIcon } from "../icons";
import { SubTitle } from "./sub-title";
import { Progressbar } from "../base/progressBar";

export const SmartTrading = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(90);
  });
  return (
    <div className="relative flex h-fit w-full flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="flex flex-1 flex-col gap-[20px] px-4 py-0 lg:ml-0 lg:py-8">
        <SubTitle
          color="secondary"
          icon={SmarterTradingIcon}
          orderNumber={"03"}
          title="Smarter Trading with AI"
        />
        <div className="text-justify font-geist-mono text-base text-muted-foreground lg:max-w-[576px] lg:text-start">
          Behind the scenes, AI optimizes trade routes, lowers fees, and
          suggests better options in real time. Instead of comparing chains and
          pools manually, AetherDEX helps you make the smartest move instantly.
        </div>
        <div className="flex w-full flex-row items-center bg-card p-4 lg:hidden">
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

        <div className="hidden w-full items-center justify-between border-[#FFFFFF33] border-[1px] bg-card p-[20px] lg:flex">
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
          <div className="flex flex-col items-center justify-center gap-[10px] lg:w-[173px]">
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
      <div className="relative h-[1px] w-full border-white/20 border-b-[1px] lg:hidden">
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-0 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 left-[-30px] translate-x-1/2" />
      </div>
      <div className="flex flex-1 items-center justify-center px-4 lg:ml-0">
        <Image
          alt="smarter trading with AI"
          className="w-full"
          src={SmarterTradingFlow}
        />
      </div>
    </div>
  );
};

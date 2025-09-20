"use client";

import Image from "next/image";

import { useId, useState } from "react";

import PrivacyFlow from "public/assets/core-features/flow/privacy.svg";
import CheckIcon from "public/assets/core-features/icon/check.svg";
import PrivacyIcon from "public/assets/core-features/icon/privacy.svg";

import { StarsThinIcon } from "../icons";
import { SubTitle } from "./sub-title";

export const PrivacyAtCore = () => {
  const [checked, setChecked] = useState(true);
  const checkBoxId = useId();
  return (
    <div className="relative flex h-fit w-full flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="flex flex-1 flex-col gap-[20px] px-4 py-0 lg:ml-0 lg:py-8">
        <SubTitle
          color="primary"
          icon={PrivacyIcon}
          orderNumber={"02"}
          title="Privacy at the Core"
        />
        <div className="w-full text-justify font-geist-mono text-base text-muted-foreground sm:text-sm lg:max-w-[576px] lg:text-start">
          Turn on Privacy Mode with a single toggle. Powered by zero-knowledge
          proofs, AetherDEX ensures that your trades remain private and
          encrypted while staying verifiable on-chain.
        </div>
        <div className="flex w-full flex-row items-center bg-card p-4 lg:hidden">
          <div className="flex flex-col gap-[14px]">
            <div className="text-muted-foreground text-sm">Privacy Mode</div>
            <div className="text-primary lg:text-[18px]">
              ZK-PROOFS ENABLED<strong>・</strong>ENCYPTED<strong>・</strong>
              VERIFIED
            </div>
          </div>
          <div>
            <div className="relative inline-block h-5 w-11">
              <input
                checked={checked}
                className="peer h-6 w-12 cursor-pointer appearance-none bg-foreground transition-colors duration-300 checked:bg-primary"
                id={checkBoxId}
                onChange={() => {
                  setChecked(!checked);
                }}
                type="checkbox"
              />
              <label
                aria-labelledby="A label"
                className="absolute top-[2px] left-[2px] h-5 w-5 cursor-pointer border bg-foreground shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-primary"
                htmlFor={checkBoxId}
              />
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-between border-[#FFFFFF33] border-[1px] bg-card p-[20px] lg:flex lg:w-full">
          <div className="flex flex-col gap-[14px]">
            <div className="text-muted-foreground text-sm">Privacy Mode</div>
            <div className="text-[18px] text-primary">
              ZK-PROOFS ENABLED<strong>・</strong>ENCYPTED<strong>・</strong>
              VERIFIED
            </div>
          </div>
          <div>
            <div className="relative inline-block h-5 w-11">
              <input
                checked={checked}
                className="peer h-6 w-12 cursor-pointer appearance-none bg-foreground transition-colors duration-300 checked:bg-primary"
                id={checkBoxId}
                onChange={() => {
                  setChecked(!checked);
                }}
                type="checkbox"
              />
              <label
                aria-labelledby="A label"
                className="absolute top-[2px] left-[2px] h-5 w-5 cursor-pointer border bg-foreground shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-primary"
                htmlFor={checkBoxId}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-4">
          <div className="flex gap-[12px]">
            <div>
              <Image alt="" height={28} src={CheckIcon} width={28} />
            </div>
            <div className="font-geist-mono text-base text-muted-foreground">
              Zero-knowledge transaction proofs
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-4">
          <div className="flex gap-[12px]">
            <div>
              <Image alt="" height={28} src={CheckIcon} width={28} />
            </div>
            <div className="font-geist-mono text-muted-foreground lg:text-base">
              On-chain verification without <br className="block lg:hidden" />{" "}
              exposure
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-4">
          <div className="flex gap-[12px]">
            <div>
              <Image alt="" height={28} src={CheckIcon} width={28} />
            </div>
            <div className="font-geist-mono text-base text-muted-foreground">
              Optical transaction anonymization
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[1px] w-full border-white/20 border-b-[1px] lg:hidden">
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 right-0 translate-x-1/2" />
        <StarsThinIcon className="-translate-y-1/2 !size-[30px] absolute top-0 left-[-30px] translate-x-1/2" />
      </div>
      <div className="flex flex-1 items-center justify-center px-4 lg:ml-0">
        <Image alt="Privacy at the core" className="w-full" src={PrivacyFlow} />
      </div>
    </div>
  );
};

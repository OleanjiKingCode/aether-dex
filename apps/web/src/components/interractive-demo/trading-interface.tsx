"use client";

import Image from "next/image";

import { type ChangeEvent, useEffect, useState } from "react";

import { Check, PlayIcon } from "lucide-react";

import { StarsThinIcon } from "../icons";
import { Line2 } from "./line2";
import { Lines } from "./lines";

export const TradingInterface = () => {
  const process = [
    {
      id: "token-selection",
      no: 1,
      subject: "Token Selection",
    },
    {
      id: "privacy-toggle",
      no: 2,
      subject: "Privacy Toggle",
    },
    {
      id: "ai-route-analysis",
      no: 3,
      subject: "AI Route Analysis",
    },
    {
      id: "cross-chain-routing",
      no: 4,
      subject: "Cross-Chain Routing",
    },
    {
      id: "transaction-complete",
      no: 5,
      subject: "Transaction Complete",
    },
  ];

  const others = [
    {
      id: "ai-optimized-routing",
      img: "/assets/Flash1.svg",
      title: "AI-optimized routing",
    },
    {
      id: "privacy-first-transactions",
      img: "/assets/Flash2.svg",
      title: "Privacy-first transactions",
    },
    {
      id: "cross-chain-compatibility",
      img: "/assets/Flash1.svg",
      title: "Cross-chain compatibility",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivacyToggled, setIsPrivacyToggled] = useState(false);
  const [buttonText, setButtonText] = useState("Start Demo");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showAIRouteAnalysis, setShowAIRouteAnalysis] = useState(false);

  // Handle the 3-second delay for showing AI Route Analysis after button click
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (buttonText === "Processing..." && currentStep >= 2) {
      timeout = setTimeout(() => {
        setShowAIRouteAnalysis(true);
      }, 3000); // 3-second delay
    }
    return () => clearTimeout(timeout);
  }, [buttonText, currentStep]);

  const startStepLoading = (stepIndex: number) => {
    setIsLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          setCurrentStep(stepIndex + 1);
          if (stepIndex + 1 === process.length) {
            setButtonText("Completed");
          }
          return 100;
        }
        return prev + 2; // Increment to reach 100% in ~5 seconds
      });
    }, 100);
  };

  const handleTokenSelect = () => {
    if (currentStep >= 1) return;
    startStepLoading(0);
  };

  const handlePrivacyToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPrivacyToggled(e.target.checked);
    if (e.target.checked && currentStep >= 2) return;
    if (e.target.checked) {
      startStepLoading(1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTokenSelect();
    }
  };

  const handleStartDemo = () => {
    if (currentStep < process.length) {
      setButtonText("Processing...");
      setIsButtonDisabled(true);
      const nextStep = Math.max(currentStep, 2);
      startSequentialSteps(nextStep);
    }
  };

  const startSequentialSteps = (startIndex: number) => {
    if (startIndex >= process.length) return;
    startStepLoading(startIndex);
    setTimeout(() => {
      startSequentialSteps(startIndex + 1);
    }, 5000);
  };

  const getProgressTitle = () => {
    if (currentStep === process.length) {
      return "Transaction Complete";
    } else if (isLoading) {
      return process[currentStep]?.subject || "Processing";
    }
    return "Progress";
  };

  const getProcessBg = (index: number) => {
    if (index < currentStep) {
      return "bg-[#00C951] border-[#00C951]";
    } else if (index === currentStep && isLoading) {
      return "bg-[#FB9B00] border";
    }
    return "bg-[#110C2A]";
  };

  return (
    <div className="w-full lg:h-[120vh]">
      <Lines />
      <StarsThinIcon className="-translate-y-1/2 absolute top-[0] right-[39%] hidden translate-x-1/2 sm:block" />
      <div className="relative flex w-full items-center justify-center lg:h-[120vh]">
        <StarsThinIcon className="-translate-y-1/2 absolute right-[39%] bottom-[-13%] hidden translate-x-1/2 sm:block" />
        <div className="flex w-full flex-col justify-between lg:h-[110vh] lg:flex-row">
          <div className="relative flex flex-col border-[1px] border-white/20 bg-background p-5 lg:h-[110vh] lg:w-[60%]">
            <Line2 />
            {/* top */}
            <div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-1">
                  <Image
                    alt="interface-energy"
                    height={32}
                    src="/assets/interface.svg"
                    width={32}
                  />
                  <p className="font-medium lg:text-[18px]">
                    AetherDEX Trading Interface
                  </p>
                </div>
                <div className="flex flex-row items-center gap-[12px]">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#00C951]"></div>
                  <p className="text-[#00C951]">Connected</p>
                </div>
              </div>
            </div>
            {/* from, to and the start button area */}
            <div className="mt-6">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[#D2D2D2] lg:text-[16px]">From</p>
                  <button
                    className="flex h-[56px] w-full cursor-pointer flex-row items-center justify-between border-[#3F2A63] border-[0.97px] bg-[#110C2A] px-[3%] hover:bg-[#110C2A]/80"
                    onClick={handleTokenSelect}
                    onKeyDown={handleKeyDown}
                    type="button"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex h-[32px] w-[55px] items-center justify-center bg-secondary shadow-[#0000000D]">
                        <p className="text-[#FFFFFF] lg:text-[18px]">ETH</p>
                      </div>
                      <p className="text-[#FFFFFF] lg:text-[18px]">ETH</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[#FFFFFF] lg:text-[18px]">1.0</p>
                      <Image
                        alt="arrow down"
                        height={16}
                        src="/assets/arrow-down.svg"
                        width={16}
                      />
                    </div>
                  </button>
                </div>
                <div className="flex w-full items-center justify-center">
                  <Image
                    alt="arrow-right"
                    height={40}
                    src="/assets/arrow-right.svg"
                    width={40}
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[#D2D2D2] lg:text-[16px]">To</p>
                  <div className="flex h-[56px] w-full flex-row items-center justify-between border-[#3F2A63] border-[0.97px] bg-[#110C2A] px-[3%]">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex h-[32px] w-[55px] items-center justify-center bg-primary shadow-[#0000000D]">
                        <p className="text-[#FFFFFF] lg:text-[18px]">RNDR</p>
                      </div>
                      <p className="text-[#FFFFFF] lg:text-[18px]">RNDR</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <p>~</p>
                      <p className="text-[#FFFFFF] lg:text-[18px]">24.7</p>
                      <Image
                        alt="arrow down"
                        height={16}
                        src="/assets/arrow-down.svg"
                        width={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* privacy div and start button */}
              <div className="mt-6 flex flex-col gap-[24px]">
                <div className="flex w-full flex-row items-center justify-between border-[#3F2A63] border-[0.97px] bg-[#110C2A] px-[3%] py-2 lg:h-[60px] lg:py-0">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-row items-center gap-[4px]">
                      <Image
                        alt="privacy-icon"
                        height={20}
                        src="/assets/privacy-icon.svg"
                        width={20}
                      />
                      <p className="font-medium text-[#FFFFFF] lg:text-[12px]">
                        Privacy Mode
                      </p>
                    </div>
                    <p className="font-medium text-[#FFFFFF] lg:text-[12px]">
                      Zero-knowledge transaction proofs
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <label className="switch">
                      <input
                        checked={isPrivacyToggled}
                        onChange={handlePrivacyToggle}
                        type="checkbox"
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                {/* Display AI Route Analysis section 3 seconds after button click and keep it until transaction complete */}
                {showAIRouteAnalysis && currentStep <= process.length && (
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row items-center gap-1.5">
                      <Image
                        alt="AI-Icon"
                        height={24}
                        src="/assets/AI-Icon.svg"
                        width={24}
                      />
                      <p className="text-primary">AI Route Analysis</p>
                    </div>
                    <div className="flex w-full flex-row justify-between border bg-secondary/20 px-3.5 py-1.5">
                      <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-center gap-1">
                          <div className="h-[10px] w-[10px] rounded-full bg-secondary"></div>
                          <p>Ethereum</p>
                        </div>
                        <p className="text-[#D2D2D299]">Uniswap V3</p>
                      </div>
                      <div className="flex flex-row items-center gap-1">
                        <p className="text-[#D2D2D299]">Fee: 0.05%</p>
                        <Image
                          alt="flash-icon"
                          height={23.33}
                          src="/assets/Flash2.svg"
                          width={23.33}
                        />
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-between border bg-[#110C2A] px-3.5 py-1.5">
                      <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-center gap-1">
                          <div className="h-[10px] w-[10px] rounded-full bg-white/20"></div>
                          <p>Solana</p>
                        </div>
                        <p className="text-[#D2D2D299]">Raydium</p>
                      </div>
                      <div className="flex flex-row items-center gap-1">
                        <p className="text-[#D2D2D299]">Fee: 0.03%</p>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  className={`${
                    buttonText === "Completed"
                      ? "bg-[#00A63E] text-white disabled:cursor-not-allowed disabled:opacity-50"
                      : "btn-gradient"
                  } flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-2 border border-border px-4 font-geist-mono font-semibold disabled:cursor-not-allowed disabled:opacity-50`}
                  disabled={isButtonDisabled}
                  onClick={handleStartDemo}
                  type="button"
                >
                  {buttonText === "Completed" ? <Check /> : <PlayIcon />}
                  {buttonText}
                </button>
                {/* progress bar */}
                <div>
                  <p className="mb-2 text-muted-foreground lg:text-[14px]">
                    {getProgressTitle()}
                  </p>
                  <div className="h-[8px] w-full rounded-full bg-[#110C2A]">
                    <div
                      className={`h-[8px] rounded-full transition-all duration-300 ease-in-out ${
                        isLoading ? "bg-[#FB9B00]" : "bg-[#00C951]"
                      } ${!isLoading && progress === 0 ? "w-0" : ""}`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[27px] py-[10%] lg:w-[35%] lg:py-0">
            <div>
              <div>
                <div className="flex flex-row gap-1.5">
                  <Image
                    alt="live-demo"
                    height={56}
                    src="/assets/livedemo-img.svg"
                    width={56}
                  />
                  <div className="flex flex-col gap-[7px]">
                    <p className="text-[12px] text-primary">LIVE DEMO</p>
                    <p className="font-bold text-[#FFFFFF] lg:text-[24px]">
                      Experience the Flow
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground lg:text-[16px]">
                This interactive demo showcases the complete AetherDEX trading
                experience. Watch as the interface guides you through token
                selection, privacy configuration, and AI-optimized routing.
              </p>
              {/* steps from 1 - 5 */}
              <div className="mt-4 flex flex-col gap-2">
                {process.map((item) => (
                  <div
                    className={`flex flex-row items-center gap-3 border-[#3F2A63] border-[1px] px-3.5 py-2 text-muted-foreground transition-colors duration-300 ${getProcessBg(
                      item.no - 1,
                    )}`}
                    key={item.id}
                  >
                    <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border bg-[#06081E]">
                      {item.no}
                    </div>
                    <p className="font-medium lg:text-[18px]">{item.subject}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-[112px] w-full flex-col gap-2 border-[#3F2A63] border-[1px] bg-[#110C2A] px-4 py-2 text-muted-foreground">
              <div className="flex flex-row items-center gap-2">
                <Image
                  alt="time"
                  height={16.67}
                  src="/assets/time.svg"
                  width={16.67}
                />
                <p className="text-[14px]">Execution Time</p>
              </div>
              <p className="font-semibold text-[18px] text-secondary">≤ 30s</p>
              <p>Zero-knowledge transaction proofs</p>
            </div>
            <div className="flex flex-col gap-2">
              {others.map((item) => (
                <div className="flex flex-row items-center gap-3" key={item.id}>
                  <Image
                    alt={item.title}
                    height={23.33}
                    src={item.img}
                    width={23.33}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

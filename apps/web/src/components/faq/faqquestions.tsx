"use client";

import Image from "next/image";

import { useState } from "react";

import BlurPrimary from "public/assets/blur-primary.svg";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
};

export const AetherDEXFAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      answer:
        "AI tokens support artificial intelligence ecosystems (RNDR, FET, OCEAN, AGIX), while DePIN tokens power decentralized infrastructure networks (HNT, IOTX, DIMO, MOBILE). AetherDEX specializes in these emerging sectors, plus major assets like ETH, SOL, and USDC for trading pairs.",
      id: "faq-1",
      isOpen: true,
      question: "What are AI and DePIN tokens and what can I trade?",
    },
    {
      answer:
        "AetherDEX specializes in AI and DePIN tokens with privacy-first architecture, AI-optimized routing, and cross-chain efficiency. Unlike general DEXs, we focus on emerging tech sectors with advanced privacy protection and intelligent trade execution.",
      id: "faq-2",
      isOpen: false,
      question: "What makes AetherDEX different from other DEXs?",
    },
    {
      answer:
        "Our privacy layer uses zero-knowledge proofs (ZK-SNARKs) to hide transaction details while maintaining blockchain verification. Users can toggle Privacy Mode for anonymous trading with encrypted routing and private balance protection.",
      id: "faq-3",
      isOpen: false,
      question: "How does the privacy layer work?",
    },
    {
      answer:
        "AetherDEX will support Solana, Polygon, and Injective Protocol at launch, with additional chains like BSC, Avalanche, and Cosmos planned based on community governance votes.",
      id: "faq-4",
      isOpen: false,
      question: "Which blockchains does AetherDEX support?",
    },
    {
      answer:
        "Trading fees are 0.2% per swap, with 50% shared back to $AETH stakers. This is significantly lower than most DEXs while rewarding our community and ensuring sustainable liquidity.",
      id: "faq-5",
      isOpen: false,
      question: "What are the trading fees on AetherDEX?",
    },
    {
      answer:
        "$AETH is used for staking (12.5% APY), fee-sharing (50% of trading fees), and governance. Token holders vote on protocol upgrades, new chain integrations, fee structures, and partnerships. Staked tokens carry 2x voting weight.",
      id: "faq-6",
      isOpen: false,
      question:
        "What role does $AETH play and can I participate in governance?",
    },
  ]);

  const toggleFAQ = (id: string) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return { ...faq, isOpen: false };
        }
      }),
    );
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <div className="relative w-full py-4 text-white">
      <Image
        alt="Blur Primary"
        className="absolute top-0 right-20 size-[48rem]"
        height={200}
        src={BlurPrimary}
        width={200}
      />
      <div className="w-full">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              className={`overflow-hidden ${
                index === 5 ? "" : "border-white/20 border-b-[2px]"
              } transition-all duration-300`}
              key={faq.id}
            >
              <button
                aria-controls={`faq-content-${faq.id}`}
                aria-expanded={faq.isOpen}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                type="button"
              >
                <span className="font-medium lg:text-[18px]">
                  {faq.question}
                </span>
                <Image
                  alt={faq.isOpen ? "Collapse" : "Expand"}
                  height={24}
                  src={
                    faq.isOpen
                      ? "/assets/minus-circle.svg"
                      : "/assets/plus-circle.svg"
                  }
                  width={24}
                />
              </button>

              <div
                className={`px-6 pb-6 transition-all duration-300 ${
                  faq.isOpen ? "block" : "hidden"
                }`}
                id={`faq-content-${faq.id}`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

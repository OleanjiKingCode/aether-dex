import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

import type { ReactNode } from "react";

import { TRPCReactProvider } from "@/trpc/react";

import "../styles/globals.css";

import { SmoothScroll } from "@/components";

const satoshiFont = localFont({
  src: "../../public/fonts/satoshi.ttf",
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  description:
    "AetherDEX is building a decentralized exchange that lets you trade AI and DePIN tokens across multiple blockchains with unmatched privacy and efficiency. Powered by zero-knowledge proofs and AI-driven routing, we're rethinking what secure, intelligent trading looks like.",
  icons: [{ rel: "icon", url: "/assets/logo.png" }],
  title: "AetherDEX",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      className={`${satoshiFont.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}
      lang="en"
    >
      <SmoothScroll>
        <body className="relative">
          <div
            className="pointer-events-none fixed inset-0 z-50 bg-repeat"
            style={{
              background: "url('/assets/grain.png')",
            }}
          />
          <TRPCReactProvider>
            <div className="relative z-[0]">{children}</div>
          </TRPCReactProvider>
        </body>
      </SmoothScroll>
    </html>
  );
};

export default RootLayout;

import { TradingInterface } from "./trading-interface";

export const Body = () => {
  return (
    <div className="relative mx-auto mt-5 flex w-full flex-col items-center gap-6 border-white/20 border-b p-5 pb-4 sm:pb-0 lg:mt-0 lg:flex-row">
      <div className="absolute bottom-0 left-3 hidden size-3 border-secondary border-b border-l lg:left-0 lg:block"></div>
      <div className="absolute right-3 bottom-0 hidden size-3 border-secondary border-r border-b lg:right-0 lg:block"></div>
      <div className="flex w-full flex-col sm:border-r sm:pb-8 lg:border-0 lg:border-b-0">
        <TradingInterface />
      </div>
    </div>
  );
};

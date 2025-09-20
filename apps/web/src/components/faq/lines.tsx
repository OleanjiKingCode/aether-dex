export const Lines = () => {
  return (
    <>
      {/* <div className="absolute top-[0dvh] w-full border-white/20 border-b" /> */}
      <div className="absolute top-[0%] left-[45%] hidden h-[calc(100%-2px)] translate-y-[1px] border-white/20 border-r sm:block" />
      <div className="absolute top-[0%] right-[30%] hidden h-[calc(100%-2px)] translate-y-[1px] border-white/20 border-r sm:block" />
      <div className="absolute top-[0%] left-[30%] h-[calc(100%-2px)] w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block lg:left-[12.5%]" />
      <div className="absolute top-[0%] right-[30%] h-[calc(100%-2px)] w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block lg:right-[12.5%]" />
    </>
  );
};

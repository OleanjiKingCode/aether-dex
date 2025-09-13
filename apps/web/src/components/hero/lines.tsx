export const Lines = () => {
  return (
    <>
      <div className="absolute top-[10dvh] w-full border-white/20 border-b" />

      <div className="absolute top-[10%] left-[20%] hidden h-[calc(100%-2px)] translate-y-[1px] border-white/20 border-r sm:block" />
      <div className="absolute top-[10%] right-[20%] hidden h-[calc(100%-2px)] translate-y-[1px] border-white/20 border-r sm:block" />
      <div className="absolute top-[10%] left-[12.5%] hidden h-[calc(100%-2px)] w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
      <div className="absolute top-[10%] right-[12.5%] hidden h-[calc(100%-2px)] w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
    </>
  );
};

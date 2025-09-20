import Image from "next/image";

import BlurSecondary from "public/assets/blur-secondary.svg";

import { About, Hero, MobileNavbar, Navbar } from "@/components";
import { CoreFeatures } from "@/components/core-features";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { DividerGrid } from "@/components/icons";
import { Interractive } from "@/components/interractive-demo";
import { Service } from "@/components/service";

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative m-auto h-full w-[390px] lg:w-[1440px]">
        <div className="absolute top-0 left-[12px] h-full border-white/20 border-r lg:top-0 lg:left-[80px]"></div>
        <div className="absolute top-0 right-[12px] h-full border-white/20 border-r lg:right-[80px]"></div>
        <Navbar />
        <MobileNavbar />
        <Hero />
        <About />
      </div>
      <div className="relative">
        <DividerGrid />
        <div className="absolute top-0 right-[calc((100%-1440px)/2+184px)] hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
      </div>
      <div className="relative m-auto h-full w-[390px] lg:w-[1440px]">
        <div className="absolute top-0 left-[12px] h-full border-white/20 border-r lg:left-[80px]"></div>
        <div className="absolute top-0 right-[12px] h-full border-white/20 border-r lg:right-[80px]"></div>
        <CoreFeatures />
      </div>
      <DividerGrid />
      <div className="relative m-auto h-full w-full lg:w-[1440px]">
        <div className="absolute top-0 left-3 h-full border-white/20 border-r lg:left-[80px]"></div>
        <div className="absolute top-0 right-3 h-full border-white/20 border-r lg:right-[80px]"></div>
        <Service />
      </div>
      <DividerGrid />
      <div className="relative m-auto h-full w-[390px] w-full lg:w-[1440px]">
        <div className="absolute top-0 left-3 h-full border-white/20 border-r lg:left-[80px]"></div>
        <div className="absolute top-0 right-3 h-full border-white/20 border-r lg:right-[80px]"></div>
        <Interractive />
      </div>
      <DividerGrid />
      <div className="relative m-auto h-full w-[390px] w-full lg:w-[1440px]">
        <Image
          alt="Blur Secondary"
          className="absolute top-[-37%] left-[-3%] z-[500] size-[48rem]"
          height={200}
          src={BlurSecondary}
          width={200}
        />
        <div className="absolute top-0 left-3 h-full border-white/20 border-r lg:left-[80px]"></div>
        <div className="absolute top-0 right-3 h-full border-white/20 border-r lg:right-[80px]"></div>
        <FAQ />
      </div>
      <div className="relative m-auto h-full w-[390px] w-full lg:w-[1440px]">
        <div className="absolute top-0 left-3 h-full border-white/20 border-r lg:left-[80px]"></div>
        <div className="absolute top-0 right-3 h-full border-white/20 border-r lg:right-[80px]"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

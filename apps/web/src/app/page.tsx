import { About, Hero, MobileNavbar, Navbar } from "@/components";
import { CoreFeatures } from "@/components/core-features";
import { DividerGrid } from "@/components/icons";
import { Service } from "@/components/service";

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative m-auto h-full w-[1440px]">
        <div className="absolute top-0 left-[80px] h-full border-white/20 border-r"></div>
        <div className="absolute top-0 right-[80px] h-full border-white/20 border-r"></div>
        <Navbar />
        <MobileNavbar />
        <Hero />
        <About />
      </div>
      <div className="relative">
        <DividerGrid />
        <div className="absolute top-0 right-[calc((100%-1440px)/2+184px)] hidden h-full w-[1px] translate-y-[1px] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_8px,transparent_8px_16px)] sm:block" />
      </div>

      <div className="relative m-auto h-full w-[1440px]">
        <div className="absolute top-0 left-[80px] h-full border-white/20 border-r"></div>
        <div className="absolute top-0 right-[80px] h-full border-white/20 border-r"></div>
        <CoreFeatures />
      </div>
      <DividerGrid />
      <div className="relative m-auto h-full w-[1440px]">
        <div className="absolute top-0 left-[80px] h-full border-white/20 border-r"></div>
        <div className="absolute top-0 right-[80px] h-full border-white/20 border-r"></div>
        <Service />
      </div>
      <DividerGrid />
    </div>
  );
};

export default Home;

import React from "react";
import { HeroSection, StatsSection, ServicesCard } from "./index";

export default function Home({ refs, scrollToSection }) {
  return (
    <div ref={refs.homeRef} className="flex flex-col lg:flex-row items-center justify-evenly px-8 py-12 lg:px-18 lg:py-20 bg-[#181e38]">
      <div className="space-y-8 md:w-[55%]">
        <HeroSection refs={refs} scrollToSection={scrollToSection}/>
        <hr className="border-gray-700 w-[90%]" />
        <StatsSection />
      </div>
      <div className="md:w-full lg:w-[40%] mt-20 lg:mt-0">
        <ServicesCard />
      </div>
    </div>
  );
}

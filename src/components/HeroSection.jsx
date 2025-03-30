import { ArrowRight } from "lucide-react";
import { Button, Badge } from "./ui";

import React from "react";

export default function HeroSection({ scrollToSection, refs }) {
  return (
    <div className="space-y-6">
      <Badge
        variant="outline"
        className="bg-opacity-20 bg-gray-600 text-white border-gray-600 py-2 px-3 rounded-full"
      >
        <span className="mr-1 text-green-400">●</span> Trusted by 10,000+
        clients across India
      </Badge>

      <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Expert{" "}
        <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
          Regulatory
        </span>{" "}
        <span className="bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text">
          Solutions
        </span>{" "}
        for India
      </div>

      <p className="text-gray-300 text-lg max-w-xl">
        Navigate complex regulatory challenges with confidence. Our team of experts provide comprehensive legal services and business compliance solutions tailored to your specific needs across all jurisdictions in India.
      </p>

      <div className="flex flex-wrap gap-8 pt-4">
        <button className="relative group"
          onClick={() => scrollToSection(refs.consultationRef)}
        >
        {/* Gradient glow effect (positioned behind the button) */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-emerald-500 to-amber-500 opacity-75 blur-md transition-all duration-300 group-hover:opacity-100"></div>
        
        {/* Main button with dark background */}
        <div className="relative px-8 py-3 bg-gray-800 rounded-md text-white font-medium flex items-center justify-between cursor-pointer">
          <span>Schedule Consultation</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </div>
      </button>
        <Button
          variant="outline"
          className="text-white border-gray-600 hover:bg-gray-800 rounded-md px-6 py-5 cursor-pointer"
          onClick={() => scrollToSection(refs.servicesRef)}
        >
          Explore Services <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

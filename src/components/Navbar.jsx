import { Button } from "./ui";

import React from "react";

export default function Navbar({ scrollToSection, refs }) {
  const menuItems = [
    { name: "Home", ref: refs.homeRef },
    { name: "Services", ref: refs.servicesRef },
    { name: "Testimonials", ref: refs.testimonialsRef },
    { name: "Consultation", ref: refs.consultationRef },
    { name: "Blogs", ref: refs.updatesRef },
    { name: "About", ref: refs.aboutRef },
    { name: "FAQ", ref: refs.faqRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  return (
    <header className="bg-white py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-evenly">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-[#ff9d3a]">Legal</span>
            <span className="text-[#138808]">Dakhil</span>
            <span className="text-[#4b0082]">Services</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center flex-col group">
              <div
                className="text-gray-500 hover:text-orange-600 font-bold cursor-pointer"
                onClick={() => scrollToSection(item.ref)}
              >
                {item.name}
              </div>
              <div className="w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </nav>

        <Button variant="ghost" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
}

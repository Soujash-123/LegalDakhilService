import { Menu, X } from "lucide-react";
import { Button } from "./ui";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaModal from "./SocialMediaModal";

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

  const [openNav, setOpenNav] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);

  const handleNavClick = (ref) => {
    if (ref === refs.contactRef) {
      setIsSocialModalOpen(true);
    } else {
      scrollToSection(ref);
      setTimeout(() => {
        setOpenNav(false);
      }, 1000);
    }
  }

  return (
    <header className="bg-white w-full py-4 flex flex-col items-center justify-between shadow-md fixed top-0 z-50">
      <div className="w-full px-8 lg:px-18 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className=" bg-gradient-to-br from-orange-600 via-white to-green-600 border border-purple-600 rounded-full flex items-center justify-center">
            <img src="/img/logo.png" alt="logo" className="h-10 w-10" />
          </div>
          <a
            onClick={() => scrollToSection(refs.homeRef)}
            className="flex items-center cursor-pointer"
          >
            <span className="text-xl font-bold">
              <span className="text-[#ff9d3a]">Daakhil</span>
              <span className="text-[#138808]">Now</span>
              <span className="text-[#4b0082]">Services</span>
            </span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center flex-col group">
              <div
                className="text-gray-500 hover:text-orange-600 font-bold cursor-pointer"
                onClick={() => handleNavClick(item.ref)}
              >
                {item.name}
              </div>
              <div className="w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden lg:flex text-black hover:bg-gray-200 cursor-pointer"
            >
              <div className="font-bold text-gray-500">Login</div>
            </Button>
            <Button
              variant="ghost"
              className="hidden lg:flex bg-[#181e38] hover:opacity-80 cursor-pointer"
            >
              <div className="font-bold text-gray-200 hover:text-white">
                Sign Up
              </div>
            </Button>
          </div>
        </nav>

        <Button
          variant="ghost"
          className="lg:hidden text-black hover:bg-gray-200 cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <X size={24} className="text-gray-500" />
          ) : (
            <Menu size={24} className="text-gray-500" />
          )}
        </Button>
      </div>
      <AnimatePresence>
        {openNav && (
          <motion.div 
            className="lg:hidden mt-4 w-full bg-white flex items-center justify-baseline pl-10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          > 
            <motion.nav 
              className="flex flex-col w-full"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
            > 
              {menuItems.map((item, index) => ( 
                <motion.div 
                  key={item.name} 
                  className="text-lg font-bold text-gray-500 hover:text-orange-600 hover:bg-gray-300 cursor-pointer rounded-xl p-2" 
                  onClick={() => handleNavClick(item.ref)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                > 
                  {item.name} 
                </motion.div> 
              ))} 
              <motion.div 
                className="flex items-center space-x-2 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              > 
                <Button variant="outline" className="text-black hover:bg-gray-200 cursor-pointer"> 
                  <div className="font-bold text-gray-500">Login</div> 
                </Button> 
                <Button variant="ghost" className="bg-[#181e38] hover:opacity-80 cursor-pointer"> 
                  <div className="font-bold text-gray-200 hover:text-white">Sign Up</div> 
                </Button> 
              </motion.div> 
            </motion.nav> 
          </motion.div>
        )}
      </AnimatePresence>

      <SocialMediaModal 
        isOpen={isSocialModalOpen} 
        onClose={() => setIsSocialModalOpen(false)} 
      />
    </header>
  );
}

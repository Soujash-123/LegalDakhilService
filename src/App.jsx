import React, { useRef, useState, useEffect } from "react";
import {
  Navbar,
  ScrollBar,
  ServicesSection,
  ConsultationSection,
  Footer,
  AboutSection,
  ContactSection,
  FAQSection,
  UpdatesSection,
  Home,
  TestimonialSection,
  ChatSection,
} from "./components";
import { ThemeProvider } from "./components/ui";
import { ChevronUp, MessageCircleMore } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp } from "./utils/utils";

export default function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const consultationRef = useRef(null);
  const updatesRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = 30; // Offset from top
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleVisibility = () => {
    if (window.scrollY > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [])

  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <div className="min-h-screen bg-white text-white relative">
        <Navbar scrollToSection={scrollToSection} refs={{ homeRef, servicesRef, consultationRef, updatesRef, aboutRef, faqRef, contactRef, testimonialsRef }}/>
        <Home refs={{ homeRef, servicesRef, consultationRef }} scrollToSection={scrollToSection} />
        <ScrollBar />
        <ServicesSection ref={servicesRef}/>
        <TestimonialSection ref={testimonialsRef}/>
        <ConsultationSection ref={consultationRef}/>
        <UpdatesSection ref={updatesRef}/>
        <AboutSection ref={aboutRef}/>
        <FAQSection refs={{ faqRef, contactRef }} scrollToSection={scrollToSection} />
        <ContactSection ref={contactRef}/>
        <Footer scrollToSection={scrollToSection} refs={{ homeRef, servicesRef, consultationRef, updatesRef, aboutRef, faqRef, contactRef, testimonialsRef }}/>
        <div className="w-15 h-15 fixed lg:right-10 right-20 bottom-25 p-4 bg-green-500 rounded-full text-white flex items-center justify-center cursor-pointer" onClick={openWhatsApp}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" id="el-jsx73r7y">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" id="el-yyooyfd8"></path>
          </svg>
        </div>
        <div className="w-15 h-15 fixed lg:right-10 right-20 bottom-7 p-4 bg-[#ba0cca] rounded-full text-white flex items-center justify-center cursor-pointer"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircleMore />
        </div>
        {isVisible && (<div className="w-15 h-15 fixed lg:right-30 right-40 bottom-7 p-4 bg-[#ba0cca] rounded-full text-white flex items-center justify-center cursor-pointer" onClick={() => scrollToSection(homeRef)}>
          <ChevronUp />
        </div>)}
        <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0.5, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white rounded-lg shadow-xl mb-4 w-[360px] overflow-hidden"
          >
            <ChatSection setIsOpen={setIsChatOpen}/>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

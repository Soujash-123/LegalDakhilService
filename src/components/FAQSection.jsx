import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  PhoneIcon as WhatsappIcon,
} from "lucide-react";
import { Button } from "./ui";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp } from "../utils/utils";

export default function FAQSection({ refs, scrollToSection }) {
  const [activeTab, setActiveTab] = useState("general");
  const [openItem, setOpenItem] = useState(null);

  const tabs = [
    { id: "general", label: "General" },
    { id: "services", label: "Services" },
    { id: "payment", label: "Payment" },
    { id: "consultation", label: "Consultation" },
  ];

  const faqs = {
    general: [
      {
        question: "What legal services does Dakhil Now offer?",
        answer:
          "Dakhil Now offers a comprehensive range of legal services including insurance claims, startup & company registration, trademark & intellectual property, GST services, income tax services, and legal consultancy for various matters.",
      },
      {
        question: "How can I get in touch with Dakhil Now Services?",
        answer:
          "You can reach us through multiple channels: phone, email, or by filling out our contact form. Our customer support team is available Monday to Friday, 9:00 AM - 6:00 PM.",
      },
      {
        question: "What areas of India do you serve?",
        answer:
          "We provide legal services across all major cities in India through our network of 25 branch offices. Our services are accessible nationwide with a focus on metropolitan areas.",
      },
      {
        question:
          "Do you offer legal services for individuals or just businesses?",
        answer:
          "We cater to both individuals and businesses. Our services are tailored to meet the specific needs of each client, whether personal legal matters or business-related legal requirements.",
      },
    ],
  };

  return (
    <section ref={refs.faqRef} className="py-16 bg-[#181e38] text-white">
      <div className="w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-purple-400">Questions</span>
          </h2>
          <hr className="w-24 mx-auto border-2 border-yellow-500 rounded-full" />
          <p className="text-gray-60 max-w-2xl mx-auto mt-5">
            Find answers to common questions about our legal services,
            processes, and consultations.
          </p>
        </div>

        {/* FAQ Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-purple-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs[activeTab]?.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-600 border-none"
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-transparent border-t">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-gray-60"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still Have Questions Card */}
        <div className="mt-12 bg-purple-800 rounded-xl p-8 text-white max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-purple-100">
                We're here to help. Contact our customer support team for
                assistance with any queries not covered above.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                variant="secondary"
                className="bg-white text-purple-800 hover:bg-gray-100 cursor-pointer"
                onClick={() => scrollToSection(refs.contactRef)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white lg:w-[250px] cursor-pointer" size="lg" onClick={openWhatsApp}>
                <WhatsappIcon className="h-4 w-4 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

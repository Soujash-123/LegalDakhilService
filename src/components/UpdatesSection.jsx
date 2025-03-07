import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, Input } from "./ui";

const UpdateCard = ({
  icon,
  category,
  title,
  description,
  ctaText,
  ctaLink,
  bgClass = "bg-purple-700",
}) => (
  <div
    className={`${bgClass} rounded-lg p-6 min-w-[400px] max-w-[400px] mr-6 flex flex-col justify-between gap-4 transition-transform transform hover:scale-105 duration-300 overflow-hidden`}
  >
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <span className="text-purple-100 text-xl font-bold">{category}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-purple-100 mb-4">{description}</p>
    <div className="bg-purple-800/50 p-2 rounded-3xl inline-block px-4">
      <a
        href={ctaLink}
        className="inline-flex items-center text-md font-medium text-purple-200 hover:text-white"
      >
        {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  </div>
);

const MarqueeContent = () => {
  const updates = [
    {
      icon: (
        <div className="bg-[#FF9933] p-2 rounded-full mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="el-cm3ag0xg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              id="el-j3shirpp"
            ></path>
          </svg>
        </div>
      ),
      category: "Legal Update",
      title: "New GST Filing Regulations",
      description:
        "The government has announced new GST filing regulations effective from April 1st, 2023. Businesses need to comply with additional reporting requirements.",
      ctaText: "Read Details",
      ctaLink: "#",
      bgClass: "bg-purple-700",
    },
    {
      icon: (
        <div className="bg-[#138808] p-2 rounded-full mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="el-8gfvwkln"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              id="el-x3h74x0n"
            ></path>
          </svg>
        </div>
      ),
      category: "Special Offer",
      title: "20% Discount on Trademark Registration",
      description:
        "For a limited time, enjoy a 20% discount on all trademark registration services. Protect your brand identity at a special price.",
      ctaText: "Avail Offer",
      ctaLink: "#",
      bgClass: "bg-purple-700",
    },
    {
      icon: (
        <div className="bg-[#4B0082] p-2 rounded-full mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="el-qmk9limg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              id="el-iw5dh4xu"
            ></path>
          </svg>
        </div>
      ),
      category: "Service Announcement",
      title: "New Office Locations",
      description:
        "We're excited to announce the opening of our new legal consultancy offices in Bangalore, Mumbai, and Delhi to better serve our clients.",
      ctaText: "Find Nearest Office",
      ctaLink: "#",
      bgClass: "bg-purple-700",
    },
    {
      icon: (
        <div className="bg-[#FF9933] p-2 rounded-full mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="el-v25g2v0b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              id="el-2lj9e9a4"
            ></path>
          </svg>
        </div>
      ),
      category: "New Service Launch",
      title: "International Trademark Registration",
      description:
        "We now offer international trademark registration services to help businesses protect their brands globally across multiple jurisdictions.",
      ctaText: "Explore Service",
      ctaLink: "#",
      bgClass: "bg-purple-700",
    },
    {
      icon: (
        <div className="bg-[#138808] p-2 rounded-full mr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="el-9vuy0tb4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              id="el-n6x5pkg3"
            ></path>
          </svg>
        </div>
      ),
      category: "Important Reminder",
      title: "ITR Filing Deadline Approaching",
      description:
        "The last date for filing Income Tax Returns is July 31st. Avoid penalties by filing your returns before the deadline.",
      ctaText: "File Your ITR Now",
      ctaLink: "#",
      bgClass: "bg-purple-700",
    },
    {
      icon: (
        <div className="bg-[#4B0082] p-2 rounded-full mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            id="el-5yehm73t"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              id="el-lfpo4ocd"
            ></path>
          </svg>
        </div>
      ),
      category: "Weekly Webinar",
      title: "Understanding Legal Implications of Startups",
      description:
        "Join our free webinar every Friday at 5 PM to learn about legal considerations for startups and new businesses.",
      ctaText: "Register Now",
      ctaLink: "#",
      bgClass: "bg-purple-700",
    },
  ];

  return (
    <>
      {updates.map((update, index) => (
        <UpdateCard key={index} {...update} />
      ))}
    </>
  );
};

export default function UpdatesSection({ ref }) {
  const [width, setWidth] = useState(0);
  const marqueeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section ref={ref} className="bg-gradient-to-br from-[#560172] to-[#3e0170] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Legal Updates & Announcements
          </h2>
          <p className="text-purple-100">
            Stay informed about the latest legal developments and services
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="overflow-hidden mb-16 h-[400px] flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: isHovered ? 0 : [0, -width],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 0,
              },
            }}
            ref={marqueeRef}
          >
            <MarqueeContent />
            <MarqueeContent />
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center bg-purple-800 p-8 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-purple-100 mb-6">
              Subscribe to our newsletter for regular updates on legal
              developments, service announcements, and exclusive offers.
            </p>
          </div>

          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-purple-800 border-purple-700 text-white placeholder:text-purple-300"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

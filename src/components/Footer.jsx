import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { config } from "../config/config";

export default function Footer({ scrollToSection, refs }) {
  return (
    <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <a href="#hero" className="text-2xl font-bold flex items-center">
                <span className="text-[#FF9933]">Daakhil</span>
                <span className="text-white">Now</span>
              </a>
              <p className="mt-3 text-gray-400 text-sm">
                Professional legal assistance made simple, affordable, and
                accessible for everyone across India.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF9933] mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  Dhanbad, Jharkhand, 826001, India
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF9933] mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">+91 82526 70079</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF9933] mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                info.daakhilnow@gmail.com
                </span>
              </div>
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">
                    <span className="font-medium">Office Hours:</span> Monday - Sunday
                  </p>
                  <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400 text-sm">
                    <span className="font-medium">24/7 Emergency Assistance Available</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  onClick={() => scrollToSection(refs.homeRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.testimonialsRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.consultationRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Book Consultation
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.updatesRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Blogs
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.aboutRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.contactRef)}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Insurance Claims
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Company Registration
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Trademark & IP
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  GST & Income Tax
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Legal Consultancy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#FF9933]"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for legal updates, tips, and company
              news.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FF9933] text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white px-4 py-2 rounded-r-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-[#FF9933] w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  // href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-[#FF9933] w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-[#FF9933] w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-neutral-800 my-8"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-10">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 Daakhil Now. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/docs/Policy/TERMS AND CONDITIONS FOR DAAKHIL NOW SERVICES WEBSITE.pdf"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              type="application/pdf"
              target="_blank"
            >
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/docs/Policy/PRIVACY POLICY FOR DAAKHIL NOW SERVICES.pdf"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              type="application/pdf"
              target="_blank"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/docs/Policy/Refund Policy.pdf"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              type="application/pdf"
              target="_blank"
            >
              Refund Policy
            </a>
            <span className="text-gray-600">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
      rating: 5,
      text: "After struggling with GST compliance issues, I approached Legal Dakhil Services for help. Their team handled everything efficiently and resolved all pending notices. Their knowledge of tax regulations is impressive, and I would highly recommend their services to any business owner.",
      name: "Sunita Kapoor",
      title: "Business Owner, Delhi",
      initials: "SK",
      avatarColor: "bg-green-800",
      textColor: "text-green-400",
      service: "GST Compliance & Notice Resolution",
    },
    {
      rating: 5,
      text: "Legal Dakhil Services provided exceptional guidance during my trademark registration process. Their expertise saved me time and potential legal complications. The team was professional, responsive, and truly cared about my business needs.",
      name: "Rajesh Patel",
      title: "Startup Founder, Mumbai",
      initials: "RP",
      avatarColor: "bg-purple-800",
      textColor: "text-purple-400",
      service: "Trademark Registration",
    },
    {
      rating: 5,
      text: "Outstanding service from Legal Dakhil for company registration. The process was smooth, and they handled all documentation expertly. Their attention to detail and professional approach made the entire experience hassle-free.",
      name: "Priya Sharma",
      title: "CEO, Bangalore",
      initials: "PS",
      avatarColor: "bg-orange-800",
      textColor: "text-orange-400",
      service: "Company Registration",
    },
    {
      rating: 5,
      text: "Excellent support with international trademark matters. The team's global expertise and thorough understanding of intellectual property laws across jurisdictions was invaluable for our expansion plans.",
      name: "Amit Kumar",
      title: "Director of Operations, Hyderabad",
      initials: "AK",
      avatarColor: "bg-blue-800",
      textColor: "text-blue-400",
      service: "International Trademark Services",
    },
  ]

export default function TestimonialSection({ ref }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
  
    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }),
    }
  
    const swipeConfidenceThreshold = 10000
    const swipePower = (offset, velocity) => {
      return Math.abs(offset) * velocity
    }
  
    const paginate = (newDirection) => {
      setDirection(newDirection)
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection
        if (nextIndex < 0) nextIndex = testimonials.length - 1
        if (nextIndex >= testimonials.length) nextIndex = 0
        return nextIndex
      })
    }

    useEffect(() => {
        const autoPaginate = setInterval(() => {
          paginate(1)
        }, 3000)

        return () => clearInterval(autoPaginate)
    }, [testimonials.length])
  
    return (
      <section ref={ref} className="py-16 bg-[#1d2441]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">
              What Our <span className="text-purple-400">Clients</span> Say
            </h2>
            <div className="w-[100px] h-[2px] bg-amber-500 mb-4 rounded-t-4xl"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from satisfied clients who have experienced our professional legal services and support.
            </p>
          </div>
  
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute hidden left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-gray-600 shadow-lg md:flex items-center justify-center text-gray-300 hover:text-purple-400 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
  
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-gray-600 shadow-lg hidden md:flex items-center justify-center text-gray-300 hover:text-purple-400 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
  
            {/* Testimonial Cards */}
            <div className="relative h-[400px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="absolute w-full"
                >
                  <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
  
                    {/* Quote */}
                    <blockquote className="text-xl text-gray-200 mb-6">
                      <span className="text-orange-300 text-4xl font-serif">"</span>
                      {testimonials[currentIndex].text}
                      <span className="text-orange-300 text-4xl font-serif">"</span>
                    </blockquote>
  
                    {/* Author */}
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-full ${testimonials[currentIndex].avatarColor} ${testimonials[currentIndex].textColor} flex items-center justify-center text-lg font-semibold mr-4`}
                      >
                        {testimonials[currentIndex].initials}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                        <div className="text-gray-400 text-sm">{testimonials[currentIndex].title}</div>
                      </div>
                    </div>
  
                    {/* Service Type */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="text-sm">
                        <span className="text-purple-400 font-medium">Service: </span>
                        <span className="text-gray-300">{testimonials[currentIndex].service}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
  
            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-700" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

import {
  CheckCircle,
  Scale,
  CircleCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter, Button } from "./ui";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mediaData = [
  {
    id: 1,
    type: "video",
    title: "Legal Consultation",
    src: "/videos/1.mp4", // Replace with actual video URLs
    thumbnail: "/placeholder.svg?height=250&width=320",
  },
  {
    id: 2,
    type: "image",
    title: "Legal Consultation",
    src: "/img/1.jpg", // Replace with actual video URLs
  },
  {
    id: 3,
    type: "video",
    title: "Document Preparation",
    src: "/videos/2.mp4",
    thumbnail: "/placeholder.svg?height=200&width=320",
  },
  {
    id: 4,
    type: "video",
    title: "Court Representation",
    src: "/videos/3.mp4",
    thumbnail: "/placeholder.svg?height=200&width=320",
  },
];

export default function ServicesCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const nextMedia = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaData.length);
  };

  const prevMedia = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaData.length) % mediaData.length);
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (mediaData[currentIndex].type === "video") {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.play().catch((error) => console.error("Error playing video:", error));
      }
    } else {
      intervalRef.current = setInterval(() => {
        nextMedia();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const handleVideoEnd = () => {
    nextMedia();
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  // Indicator animation
  const indicatorVariants = {
    inactive: { width: 8, backgroundColor: "rgba(255, 255, 255, 0.3)" },
    active: { width: 24, backgroundColor: "#4caf50" },
  };

  return (
    <div className="bg-white/5 rounded-xl p-6 w-full max-w-lg shadow-xl shadow-black/20">
      <div className="mb-2 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
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
          >
            {mediaData[currentIndex].type === "video" ? (
              <video
                ref={videoRef}
                src={mediaData[currentIndex].src}
                poster={mediaData[currentIndex].thumbnail}
                playsInline
                controls
                autoPlay
                muted
                onEnded={handleVideoEnd}
                className="w-full rounded-lg aspect-video object-cover bg-black"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={mediaData[currentIndex].src || "/placeholder.svg"}
                alt={mediaData[currentIndex].title}
                className="w-full rounded-lg aspect-video object-cover"
              />
            )}
            <motion.div 
              className="p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-white font-medium">
                {mediaData[currentIndex].title}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevMedia}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextMedia}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Media Indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {mediaData.map((media, index) => (
          <motion.div
            key={media.id}
            className="h-2 rounded-full cursor-pointer"
            variants={indicatorVariants}
            animate={index === currentIndex ? "active" : "inactive"}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}
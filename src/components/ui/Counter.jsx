import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Counter({ from = 0, end, duration = 2, repeatInterval = 10 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval;
    const startAnimation = () => {
      setCount(0);
      let start = from;
      const increment = end / (duration * 60); // 60fps
      const countingInterval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(countingInterval);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
    };

    if (isVisible) {
      startAnimation();
      interval = setInterval(startAnimation, repeatInterval * 1000); // Restart animation after `repeatInterval` seconds
    }

    return () => clearInterval(interval);
  }, [isVisible, end, duration, repeatInterval]);
  return (
    <motion.div ref={ref} className="text-4xl font-bold">
      {count.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </motion.div>
  );
}

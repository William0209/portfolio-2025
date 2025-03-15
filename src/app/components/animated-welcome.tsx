"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Welcome To My Portfolio",
  "Bienvenido a mi portafolio",
  "Bienvenue dans mon portfolio",
  "私のポートフォリオへようこそ",
];

export default function AnimatedWelcome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 6000); // Change message every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#343434] py-6 mt-[-3.5rem] mb-[4rem]">
      <motion.div
        key={currentIndex}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 6,
          ease: "linear",
        }}
        className="whitespace-nowrap text-4xl font-light tracking-wide text-white"
      >
        {messages[currentIndex]}
      </motion.div>
    </div>
  );
}

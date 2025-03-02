"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ text, onClick, className = "" }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#343434] text-white hover:bg-[#343434]/90 relative overflow-hidden group ${className}`}
    >
      <motion.span
        className="relative z-10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {text}
      </motion.span>
      <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </button>
  );
});
Button.displayName = "Button";

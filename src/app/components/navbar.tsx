"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Shared animation configuration
  const transition = {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  };

  // Navigation items
  const navItems = ["about", "stack", "projects", "contact me"];

  return (
    <nav className="relative bg-[#F5F5F5]">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center h-20 px-8 bg-[#F5F5F5]">
        <Logo />
        <div className="flex space-x-12 ml-auto">
          <Link href="/about" className="text-black text-xl hover:opacity-70 transition-opacity">
            about
          </Link>
          <Link href="/stack" className="text-black text-xl hover:opacity-70 transition-opacity">
            stack
          </Link>
          <Link href="/projects" className="text-black text-xl hover:opacity-70 transition-opacity">
            projects
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between h-20 px-6 bg-[#bg-[#F5F5F5]]">
        <Logo />
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
            transition={transition}
            className="h-0.5 bg-black absolute origin-center"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: 6, width: "24px" } : { rotate: 0, y: 12, width: "24px" }}
            transition={transition}
            className="h-0.5 bg-black absolute origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.5, // Updated delay
                duration: 0.4, // Updated duration
              },
            }}
            className="fixed inset-0 bg-[#e0e0e0] z-40 flex flex-col items-center justify-center md:hidden"
          >
            <motion.div
              className="flex flex-col items-center space-y-16"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.15, // Updated staggerChildren
                    delayChildren: 0.15, // Updated delayChildren
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                    when: "afterChildren",
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }, // Updated duration
                        opacity: { duration: 0.3 }, // Updated duration
                      },
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }, // Updated duration
                        opacity: { duration: 0.3 }, // Updated duration
                      },
                    },
                  }}
                >
                  <Link
                    href={item === "contact me" ? "/contact" : `/${item.toLowerCase()}`}
                    className="text-black text-2xl hover:opacity-70 transition-opacity"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

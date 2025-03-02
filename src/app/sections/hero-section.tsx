"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/app/components/button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#e0e0e0]">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-[15rem]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2">
            <motion.h1
              className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#343434]"
              variants={itemVariants}
            >
              William Janssen
            </motion.h1>
            <motion.p className="mx-auto max-w-[700px] text-[#343434]/80 md:text-xl" variants={itemVariants}>
              Professional developer crafting elegant digital experiences
            </motion.p>
          </div>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
              },
            }}
          >
            <Link href="#contact">
              <Button text="Contact Me" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

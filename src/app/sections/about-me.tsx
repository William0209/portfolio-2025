import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import Äng from "../../../public/assets/äng.jpg";
import Pic from "../../../public/assets/bild.jpg";
import Brygga from "../../../public/assets/brygga.jpg";
import Flowers from "../../../public/assets/flowers.jpg";
import Flowers2 from "../../../public/assets/flowers2.jpg";
import Forest from "../../../public/assets/forest.jpg";
import Landscape from "../../../public/assets/landscape.jpg";

// Container animation variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Item animation variant
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

// Hover animation for items
const hoverAnimation = {
  scale: 1.02,
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  transition: { type: "spring" as const, stiffness: 200, damping: 20 },
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // Reduced from 0.3 for better mobile triggering
    margin: "0px 0px -50px 0px", // Reduced margin for mobile
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#343434] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      {/* Mobile Layout (below sm) */}
      <motion.div
        ref={ref}
        className="sm:hidden flex flex-col w-full max-w-sm mx-4 gap-3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="relative h-48 rounded-lg overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Pic}
            alt="Pic"
            fill
            priority
            sizes="90vw"
            className="absolute inset-0 object-cover z-0"
            style={{ filter: "brightness(0.9)" }}
          />
        </motion.div>
        <motion.div
          className="relative h-32 rounded-lg overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image src={Brygga} alt="Brygga" fill sizes="90vw" className="absolute inset-0 object-cover z-0" />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="text-white text-lg font-bold px-2 text-center">This Is Me</h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            className="relative h-24 rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={hoverAnimation}
          >
            <Image src={Äng} alt="Äng" fill sizes="45vw" className="absolute inset-0 object-cover z-0" />
          </motion.div>
          <motion.div
            className="relative h-24 rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={hoverAnimation}
          >
            <Image src={Landscape} alt="Landscape" fill sizes="45vw" className="absolute inset-0 object-cover z-0" />
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            className="relative h-20 rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={hoverAnimation}
          >
            <Image src={Forest} alt="Forest" fill sizes="30vw" className="absolute inset-0 object-cover z-0" />
          </motion.div>
          <motion.div
            className="relative h-20 rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={hoverAnimation}
          >
            <Image src={Flowers} alt="Flowers" fill sizes="30vw" className="absolute inset-0 object-cover z-0" />
          </motion.div>
          <motion.div
            className="relative h-20 rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={hoverAnimation}
          >
            <Image src={Flowers2} alt="Flowers2" fill sizes="30vw" className="absolute inset-0 object-cover z-0" />
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop/Tablet Layout (sm and above) */}
      <motion.div
        ref={ref}
        className="hidden sm:grid grid-cols-7 grid-rows-7 w-full max-w-[80rem] h-[40rem] sm:h-[50rem] md:h-[55rem] lg:h-[60rem] p-4 sm:p-6 md:p-8 gap-2 sm:gap-3 mx-4 sm:mx-6 lg:mx-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="relative min-h-[50px] col-span-3 row-span-5 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Pic}
            alt="Pic"
            fill
            priority
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
            className="absolute inset-0 object-cover z-0"
            style={{ filter: "brightness(0.9)" }}
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-2 col-start-4 row-start-1 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Äng}
            alt="Äng"
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 25vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-3 col-start-6 row-start-1 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Landscape}
            alt="Landscape"
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 25vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-2 col-start-6 row-start-4 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Forest}
            alt="Forest"
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 25vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-3 col-start-4 row-start-3 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Brygga}
            alt="Brygga"
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 25vw"
            className="absolute inset-0 object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold px-2 text-center">This Is Me</h2>
          </div>
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-4 row-span-2 col-start-4 row-start-6 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Flowers}
            alt="Flowers"
            fill
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 50vw, 40vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-3 row-span-2 row-start-6 rounded-lg sm:rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Flowers2}
            alt="Flowers2"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

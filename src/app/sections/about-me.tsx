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
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Hover animation for items
const hoverAnimation = {
  scale: 1.02,
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  transition: { type: "spring", stiffness: 200, damping: 20 },
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, // Trigger + 30%
    margin: "0px 0px -100px 0px",
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#343434]">
      <motion.div
        ref={ref}
        className="grid grid-cols-7 grid-rows-7 w-[80rem] h-[60rem] p-8 gap-3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="relative min-h-[50px] col-span-3 row-span-5 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Pic}
            alt="Pic"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
            style={{ filter: "brightness(0.9)" }}
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-2 col-start-4 row-start-1 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Äng}
            alt="Äng"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-3 col-start-6 row-start-1 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Landscape}
            alt="Landscape"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-2 col-start-6 row-start-4 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Forest}
            alt="Forest"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-2 row-span-3 col-start-4 row-start-3 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Brygga}
            alt="Brygga"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="text-white text-xl font-bold">This is me</h2>
          </div>
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-4 row-span-2 col-start-4 row-start-6 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Flowers}
            alt="Flowers"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
        <motion.div
          className="relative min-h-[50px] col-span-3 row-span-2 row-start-6 rounded overflow-hidden"
          variants={itemVariants}
          whileHover={hoverAnimation}
        >
          <Image
            src={Flowers2}
            alt="Flowers2"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 object-cover z-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

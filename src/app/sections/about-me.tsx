import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    once: true, // Only trigger the animation once
    amount: 0.3, // Trigger when 30% of the element is in view
    margin: "0px 0px -100px 0px", // Optional: negative bottom margin to trigger earlier
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
          className="min-h[50px] col-span-3 row-span-5 rounded"
          style={{ backgroundImage: `url(${Pic.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
        <motion.div
          className="min-h[50px] col-span-2 row-span-2 col-start-4 row-start-1 rounded"
          style={{ backgroundImage: `url(${Äng.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
        <motion.div
          className="bg-white min-h[50px] col-span-2 row-span-3 col-start-6 row-start-1 rounded"
          style={{ backgroundImage: `url(${Landscape.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
        <motion.div
          className="bg-white min-h[50px] col-span-2 row-span-2 col-start-6 row-start-4 rounded"
          style={{ backgroundImage: `url(${Forest.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
        <motion.div
          className="bg-white min-h[50px] col-span-2 row-span-3 col-start-4 row-start-3 rounded"
          style={{ backgroundImage: `url(${Brygga.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
        <motion.div
          className="bg-white min-h[50px] col-span-4 row-span-2 col-start-4 row-start-6 rounded"
          style={{ backgroundImage: `url(${Flowers.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
        <motion.div
          className="bg-white min-h[50px] col-span-3 row-span-2 row-start-6 rounded"
          style={{ backgroundImage: `url(${Flowers2.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          variants={itemVariants}
          whileHover={hoverAnimation}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

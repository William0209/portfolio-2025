"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Stack() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Typing animation variants
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.1,
      },
    }),
  };

  // Create refs for each section to detect when they're in view
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 }); // Trigger + 40%
  const heroControls = useAnimation();

  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true });
  const section1Controls = useAnimation();

  const section2Ref = useRef(null);
  const section2InView = useInView(section2Ref, { once: true });
  const section2Controls = useAnimation();

  const section3Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true });
  const section3Controls = useAnimation();

  // Start animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
    if (section1InView) {
      section1Controls.start("visible");
    }
    if (section2InView) {
      section2Controls.start("visible");
    }
    if (section3InView) {
      section3Controls.start("visible");
    }
  }, [
    heroInView,
    section1InView,
    section2InView,
    section3InView,
    heroControls,
    section1Controls,
    section2Controls,
    section3Controls,
  ]);

  const headingText = "I'M WILLIAM\nBASED IN STOCKHOLM.";

  return (
    <div className="min-h-screen text-[#343434] pb-12 md:pb-16 lg:pb-24 xl:pb-32">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={staggerContainer}
        className="container mx-auto px-4 py-0 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div variants={fadeIn} className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative whitespace-pre-line">
            {headingText.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                style={{ display: letter === "\n" ? "block" : "inline" }}
              >
                {letter === "\n" ? "" : letter}
                {index === headingText.length - 1 && (
                  <motion.span
                    className="inline-block w-[3px] h-[0.7em] bg-[#343434] ml-[1px] align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.span>
            ))}
          </h1>
          {/* Mobile-only text - shown below heading on mobile */}
          <p className="text-sm md:hidden max-w-xs">
            I utilize responsive design techniques to ensure a consistent experience across all devices.
          </p>
        </motion.div>
        <motion.div variants={fadeIn} className="flex items-end justify-end">
          {/* Desktop-only text - shown on right side on desktop */}
          <p className="text-sm md:text-base max-w-xs hidden md:block">
            I utilize responsive design techniques to ensure a consistent experience across all devices.
          </p>
        </motion.div>
      </motion.section>

      {/* Process Sections */}
      <div className="container mx-auto px-4 pt-6 md:py-10 space-y-16 md:space-y-32">
        {/* Section 1 */}
        <motion.div
          ref={section1Ref}
          initial="hidden"
          animate={section1Controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3 hidden md:flex items-start justify-center md:justify-start">
            <div className="flex space-x-1">
              <motion.div
                variants={fadeIn}
                className="w-2 h-2 rounded-full bg-[#343434]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div variants={fadeIn} className="w-2 h-2 rounded-full bg-[#343434] opacity-50"></motion.div>
            </div>
          </div>
          <div className="md:col-span-9 space-y-4">
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold">
              TECH STACK
            </motion.h2>
            <motion.p variants={fadeIn} className="text-sm md:text-base opacity-80 max-w-2xl">
              I specialize in Next.js, Tailwind CSS, Framer Motion, Node.js, and MongoDB, building high-performance,
              scalable, and visually engaging applications.
            </motion.p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          ref={section2Ref}
          initial="hidden"
          animate={section2Controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3 hidden md:flex items-start justify-center md:justify-start">
            <div className="flex space-x-1">
              <motion.div variants={fadeIn} className="w-2 h-2 rounded-full bg-[#343434] opacity-50"></motion.div>
              <motion.div
                variants={fadeIn}
                className="w-2 h-2 rounded-full bg-[#343434]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
            </div>
          </div>
          <div className="md:col-span-9 pb-[6rem] md:pb-0">
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold">
              EXPERIENCE
            </motion.h2>
            <motion.h3 variants={fadeIn} className="text-xl md:text-xl mt-8 font-semibold">
              Carelyo – Team Lead & Full-Stack Developer
            </motion.h3>
            <motion.p variants={fadeIn} className="text-sm md:text-base opacity-80 max-w-2xl mt-4">
              Focused on Next.js, Tailwind, ShadCN, MongoDB, Node.js, and Express. Started as a full-stack developer and
              was promoted to Team Lead, overseeing new full-stack interns. While still contributing to development, my
              primary focus shifted to structuring workflows, leading meetings, and ensuring alignment between interns,
              the Product Owner, and customers to meet business needs effectively. Additionally, worked on price
              conversion from USD to Naira, optimized the payment flow with Paystack, and refactored the payment model
              to ensure structured and reliable data handling.
            </motion.p>
            <motion.h3 variants={fadeIn} className="text-xl md:text-xl mt-8 font-semibold">
              Vakansa – Full-Stack Developer
            </motion.h3>
            <motion.p variants={fadeIn} className="text-sm md:text-base opacity-80 max-w-2xl mt-4">
              Worked on optimization, significantly reducing costs by improving image handling with Cloudinary. Resolved
              self-referencing canonical tags, improving SEO performance to 96. Ensured consistency and a high-quality
              visual experience across the application. Focused on website performance, accessibility (WCAG AA
              compliance), SEO, and overall user experience. Tech stack included React, CSS, Node.js, and MongoDB.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

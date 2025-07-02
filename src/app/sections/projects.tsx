"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "TastyBites",
    subtitle: "Recipe Platform",
    status: "Coming Soon",
    tech: ["Next", "Tailwind", "Framer Motion", "Node", "MongoDB"],
    url: "https://tastybites.example.com",
    gradient: "from-white via-green-300 to-green-800",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Portfolio",
    subtitle: "Personal Website",
    status: "Live",
    tech: ["Next", "Tailwind", "Framer Motion", "Figma"],
    url: "/",
    gradient: "from-[#F5F5F5] via-gray-450 to-[#343434]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Notex",
    subtitle: "Note Taker",
    status: "In Development",
    tech: ["Next", "Tailwind", "TypeScript", "TipTap"],
    url: "https://notex.example.com",
    gradient: "from-white via-blue-300 to-blue-900",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Todoz",
    subtitle: "Todo App",
    status: "Live",
    tech: ["Next", "Tailwind", "Framer Motion"],
    url: "https://todo-indol-mu.vercel.app/",
    gradient: "from-gray-700 via-[#343434] to-red-500",
    textColor: "text-white",
  },
];

interface TechBadgeProps {
  tech: string;
  index: number;
}

function TechBadge({ tech, index }: TechBadgeProps) {
  const techRef = useRef<HTMLSpanElement>(null);
  const techInView = useInView(techRef, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.span
      ref={techRef}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={techInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.08,
        y: -2,
        transition: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      whileTap={{ scale: 0.98 }}
      className="rounded-full bg-gray-100 px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 border border-gray-200 hover:bg-gray-700 hover:text-white hover:border-gray-600 transition-colors duration-200 ease-out cursor-pointer"
    >
      {tech}
    </motion.span>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16 mt-4 sm:mt-6 md:mt-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-3 sm:mb-4 px-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            A collection of projects I&apos;ve worked on, from web applications to creative experiments.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10"
        >
          {projects.map((project) => {
            const isClickable = project.id === 2 || project.id === 4; // Portfolio and Todoz are clickable

            const cardContent = (
              <motion.div
                variants={item}
                className={`group ${isClickable ? "cursor-pointer" : "cursor-default"}`}
                whileHover={isClickable ? { y: -8 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  className={`relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br ${
                    project.gradient
                  } p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-lg ${
                    isClickable ? "hover:shadow-2xl" : ""
                  } transition-shadow duration-300 ${!isClickable ? "opacity-90" : ""}`}
                >
                  {/* Status Badge */}
                  <div className="flex justify-end">
                    <motion.span
                      className="rounded-full bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-white border border-white/30"
                      whileHover={isClickable ? { scale: 1.05 } : {}}
                    >
                      {project.status}
                    </motion.span>
                  </div>

                  {/* Title Section */}
                  <div className="flex flex-col justify-center items-center text-center space-y-1 sm:space-y-2 flex-1">
                    <motion.h3
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${project.textColor} leading-tight px-2`}
                      whileHover={isClickable ? { scale: 1.05 } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className={`text-sm sm:text-base md:text-lg ${project.textColor} opacity-90 px-2`}
                      initial={{ opacity: 0.7 }}
                      whileHover={isClickable ? { opacity: 1 } : {}}
                    >
                      {project.subtitle}
                    </motion.p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12"></div>

                  {/* Hover Arrow - Only show for clickable cards */}
                  {isClickable && (
                    <motion.div
                      className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <svg width="20" height="20" className="sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {project.tech.map((tech, index) => (
                    <TechBadge key={index} tech={tech} index={index} />
                  ))}
                </div>
              </motion.div>
            );

            return isClickable ? (
              <Link key={project.id} href={project.url} passHref>
                {cardContent}
              </Link>
            ) : (
              <div key={project.id}>{cardContent}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

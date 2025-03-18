"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import NextPic from "../../../public/assets/nextjs.png";
import PortfolioPic from "../../../public/assets/porto-pic.png";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "TastyBites - (live soon)",
    tech: ["Next", "Tailwind", "Framer Motion", "node", "MongoDB"],
    url: "https://notex.example.com",
    image: NextPic,
  },
  {
    id: 2,
    title: "Portfolio",
    tech: ["Next", "Tailwind", "Framer Motion", "Figma"],
    url: "/",
    image: PortfolioPic,
  },
  {
    id: 3,
    title: "Notex - (in development)",
    tech: ["Next", "Tailwind"],
    url: "https://notex.example.com",
    image: NextPic,
  },
  {
    id: 4,
    title: "GymTrack - (coming soon)",
    tech: ["Next", "Tailwind", "Framer Motion", "node", "MongoDB"],
    url: "https://gymtrack.example.com",
    image: NextPic,
  },
];

interface TechBadgeProps {
  tech: string;
  index: number;
}

function TechBadge({ tech, index }: TechBadgeProps) {
  const techRef = useRef<HTMLSpanElement>(null);
  const techInView = useInView(techRef, { once: true });

  return (
    <motion.span
      ref={techRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={techInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-colors"
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

  // Animation for the image container only
  const imageContainer = {
    initial: { opacity: 1 },
    hover: { opacity: 0.9 },
  };

  return (
    <section className="w-full py-12">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <Link key={project.id} href={project.url} passHref>
              <motion.div
                variants={item}
                className="space-y-3 group"
                whileHover={{ scale: 1.01 }}
                transition={{
                  scale: { duration: 0.3 },
                  // Ensure animations don't interfere with each other
                  layout: { duration: 0 },
                }}
              >
                {/* Image container with its own animation scope */}
                <motion.div
                  className="relative aspect-square overflow-hidden rounded-2xl bg-[#F5F5F5] will-change-transform"
                  variants={imageContainer}
                  initial="initial"
                  whileHover="hover"
                  // Ensure this animation doesn't affect child elements
                  style={{
                    // Create a new stacking context
                    isolation: "isolate",
                    // Ensure hardware acceleration
                    transform: "translateZ(0)",
                  }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={project.id <= 2} // Prioritize loading first two images
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      // Ensure image stays visible during animations
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      // Prevent image from being affected by parent animations
                      willChange: "transform",
                      // Ensure hardware acceleration
                      transform: "translateZ(0)",
                    }}
                  />
                </motion.div>
                <motion.h3
                  className="text-lg font-medium text-[#F5F5F5]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <TechBadge key={index} tech={tech} index={index} />
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

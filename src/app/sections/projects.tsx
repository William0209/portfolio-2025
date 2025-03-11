"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "TastyBites",
    tech: ["Next", "Tailwind", "Framer Motion", "node", "MongoDB"],
  },
  {
    id: 2,
    title: "TastyBites",
    tech: ["Next", "Tailwind", "Framer Motion", "node", "MongoDB"],
  },
  {
    id: 3,
    title: "TastyBites",
    tech: ["Next", "Tailwind", "Framer Motion", "node", "MongoDB"],
  },
  {
    id: 4,
    title: "TastyBites",
    tech: ["Next", "Tailwind", "Framer Motion", "node", "MongoDB"],
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
            <motion.div key={project.id} variants={item} whileHover={{ scale: 1.01 }} className="space-y-3">
              <motion.div
                whileHover={{ opacity: 0.8 }}
                className="aspect-square overflow-hidden rounded-2xl bg-[#F5F5F5]"
              />
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}

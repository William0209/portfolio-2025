"use client";
import { useEffect } from "react";
import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/sections/hero-section";
import BottomHero from "@/app/sections/bottom-hero";
import AboutMe from "@/app/sections/about-me";
import Stack from "@/app/sections/stack";
import Projects from "@/app/sections/projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex-grow">
          <HeroSection />
          <BottomHero />
        </section>
        {/* About Me */}
        <section className="w-full min-h-screen flex-grow">
          <AboutMe />
        </section>
        {/* Stack */}
        <section className="w-full min-h-screen flex-grow bg-[#F5F5F5]">
          <Stack />
        </section>
        {/* Projects */}
        <section className="w-full min-h-screen flex-grow bg-[#343434] flex items-center justify-center">
          <Projects />
        </section>
      </main>
    </>
  );
}

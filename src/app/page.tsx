"use client";
import { useEffect } from "react";
import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/sections/hero-section";
import BottomHero from "@/app/sections/bottom-hero";
import AboutMe from "@/app/sections/about-me";
import Stack from "@/app/sections/stack";
import Projects from "@/app/sections/projects";
import Footer from "@/app/sections/footer";
import Welcome from "@/app/components/animated-welcome";

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
        <section id="home" className="w-full min-h-screen flex-grow bg-[#F5F5F5]">
          <HeroSection />
          <BottomHero />
        </section>
        {/* Welcome */}
        <div className="block sm:hidden w-full">
          <Welcome />
        </div>
        {/* About Me */}
        <section id="about" className="w-full min-h-screen hidden lg:flex flex-grow">
          <AboutMe />
        </section>
        {/* Stack */}
        <section id="stack" className="w-full min-h-screen flex-grow bg-[#F5F5F5]">
          <Stack />
        </section>
        {/* Projects */}
        <section id="projects" className="w-full min-h-screen flex-grow bg-[#343434] flex items-center justify-center">
          <Projects />
        </section>
        {/* Footer */}
        <div id="footer">
          <Footer />
        </div>
      </main>
    </>
  );
}

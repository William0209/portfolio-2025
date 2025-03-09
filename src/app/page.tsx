"use client";
import { useEffect } from "react";
import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/sections/hero-section";
import BottomHero from "@/app/sections/bottom-hero";
import AboutMe from "@/app/sections/about-me";

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
        <section className="w-full flex-grow">
          <HeroSection />
          <BottomHero />
        </section>
        {/* About Me */}
        <section className="w-full flex-grow">
          <AboutMe />
        </section>
        {/* Footer */}
      </main>
    </>
  );
}

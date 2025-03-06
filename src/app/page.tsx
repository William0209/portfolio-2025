import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/sections/hero-section";
import BottomHero from "@/app/sections/bottom-hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex-grow">
          <HeroSection />
          <BottomHero />
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 bg-white" id="about">
          {/* Your About Section Component */}
        </section>

        {/* Projects Section */}
        <section className="w-full py-12 md:py-24 bg-[#e0e0e0]" id="projects">
          {/* Your Projects Section Component */}
        </section>

        {/* Skills Section */}
        <section className="w-full py-12 md:py-24 bg-white" id="skills">
          {/* Your Skills Section Component */}
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 bg-[#e0e0e0]" id="contact">
          {/* Your Contact Section Component */}
        </section>

        {/* Footer */}
        <footer className="w-full py-8 bg-[#343434] text-white">{/* Your Footer Component */}</footer>
      </main>
    </>
  );
}

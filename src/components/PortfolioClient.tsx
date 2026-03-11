"use client";

import Navbar from "@/components/Navbar";
import CenterTrack from "@/components/CenterTrack";
import { MarqueeBar, Footer } from "@/components/MarqueeFooter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { useScrollTracker } from "@/hooks/useScrollTracker";

export default function PortfolioClient() {
  const { frac, active, scrolled } = useScrollTracker();

  return (
    <div className="bg-[#020d07] text-emerald-100 font-sans min-h-screen overflow-x-hidden">
      <Navbar active={active} scrolled={scrolled} />
      <CenterTrack frac={frac} />

      <div className="pt-14">
        <Hero />
        <MarqueeBar />
        <About isActive={active >= 1} />
        <Projects isActive={active >= 2} />
        <Skills isActive={active >= 3} />
        <Experience isActive={active >= 4} />
        <Contact isActive={active >= 5} />
        <Footer />
      </div>
    </div>
  );
}

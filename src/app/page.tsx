import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <TechStack />

      <WhyUs />

      <Projects />

      <Stats />

      <Process />

      <CTA />

      <Footer />
    </>
  );
}
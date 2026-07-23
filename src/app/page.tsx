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
import Contact from "@/components/sections/Contact";

import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col">

        <Hero />

        <div className="h-24 lg:h-32" />

        <Services />

        <div className="h-24 lg:h-32" />

        <Stats />

        <div className="h-24 lg:h-32" />

        <WhyUs />

        <div className="h-24 lg:h-32" />

        <Projects />

        <div className="h-24 lg:h-32" />

        <TechStack />

        <div className="h-24 lg:h-32" />

        <Process />

        <div className="h-24 lg:h-32" />

        <CTA />

        <div className="h-24 lg:h-32" />

        <Contact />

      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
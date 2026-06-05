import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Identification } from "@/components/Identification";
import { HowItHelps } from "@/components/HowItHelps";
import { About } from "@/components/About";
import { Trajectory } from "@/components/Trajectory";
import { Differentials } from "@/components/Differentials";
import { Process } from "@/components/Process";
import { Objections } from "@/components/Objections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Identification />
        <HowItHelps />
        <About />
        <Trajectory />
        <Differentials />
        <Process />
        <Objections />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

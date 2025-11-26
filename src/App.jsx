import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/Footer";

export default function AgencyLanding() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

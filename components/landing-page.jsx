"use client";

import { useState } from "react";
import Hero from "./sections/Hero";
import ServicesPage from "@/components/services-section";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <main className="flex-1  flex flex-col justify-center items-center">
      <Hero scrollToSection={scrollToSection} />
      <ServicesPage />
    </main>
  );
}

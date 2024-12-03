"use client";

import { useState } from "react";
import Hero from "@/components/sections/homepage/Hero"
import ServicesPage from "@/components/sections/homepage/ServicesSection";
import { extractLocationDetails } from "@/lib/utils/homepage";
import { locations } from "@/lib/constants/locations";

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
      <ServicesPage locations={extractLocationDetails(locations)} />
    </main>
  );
}

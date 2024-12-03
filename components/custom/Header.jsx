"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { menuItems } from "@/lib/constants/header";
import Link from "next/link";
import HStack from "./HStack";

function Navigation({ menuItems, scrollToSection }) {
  return (
    <nav className="ml-auto">
      <ul className="flex space-x-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => scrollToSection(item)}
              className="text-black text-lg"
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="px-4 lg:px-6 h-24 bg-gray-200 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/krishalilogo.svg"
          alt="Krishali Wellness Logo"
          width={200}
          priority={1}
          height={200}
          className="object-contain"
        />
      </Link>
      <HStack className="w-full justify-center items-center">
        <h1 className=" sm:text-lg md:text-2xl font-semibold text-gray-900 tracking-wide">
          <span className="border-b-2 border-gray-800 pb-1">KRISHALI</span>{" "}
          WELLNESS
        </h1>
      </HStack>
      <Navigation menuItems={menuItems} scrollToSection={scrollToSection} />
    </header>
  );
}

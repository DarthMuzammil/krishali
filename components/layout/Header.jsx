"use client";
import logoImage from '../../app/utilities/KRISHALI .svg';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
    return (
      <header className="px-4 lg:px-6 h-20 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Image
            src={logoImage}
            alt="Krishali Wellness Logo"
            width={100} // Increased width
            height={200} // Increased height
            className="h-30 w-30" // Adjusted CSS classes
          />
          <span className="sr-only">Krishali Wellness</span> 
        </a>
        {/* <h1 className="text-lg text-center ml-auto font-bold font-serif">
          Krishali Wellness
        </h1> */}
        <nav className="ml-auto">
          <Button
            variant="ghost"
            className="md:hidden"
          >
            Menu
          </Button>
          <ul
            className={`flex flex-col md:flex-row gap-4 sm:gap-6 ${true
              ? 'absolute top-20 left-0 right-0 bg-white dark:bg-gray-800 p-4 md:p-0 md:relative md:top-0'
              : 'hidden md:flex'}`}
          >
            <li>
              <Button variant="ghost" onClick={() => scrollToSection('massage')}>
                Massage
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => scrollToSection('gyms')}>
                Gyms
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => scrollToSection('trainers')}>
                Trainers
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => scrollToSection('contact')}>
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    );
}

"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#032022] text-white py-12">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
          <Image src={"/krishalilogo.png"} height={150} width={150} alt="f" />
          <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-8">
            {/* Company Info Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Krishali Consultancy FZE
              </h4>
              <p className="text-sm mb-4">
                Providing expert consultancy services in Sharjah and beyond.
                Your trusted partner for business solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="hover:text-blue-400"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="hover:text-pink-400"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="hover:text-blue-600"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Address</h4>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=SAIF+Zone,+Sharjah+Office+2309,+R2,+Near+Multi+Trade,+M6,+SAIF+Zone,+Sharjah"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-start space-x-2 text-sm group-hover:text-blue-400 transition-colors duration-200">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p>
                    SAIF Zone, Sharjah
                    <br />
                    Office 2309, R2, Near Multi Trade,
                    <br />
                    M6, SAIF Zone, Sharjah
                  </p>
                </div>
              </Link>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-2">
                <p className="text-sm flex items-center">
                  <Phone size={18} className="mr-2" />
                  <Link
                    href="https://wa.me/971503714039"
                    className="hover:underline"
                  >
                    +971 50 371 4039
                  </Link>
                </p>
                <p className="text-sm flex items-center">
                  <Mail size={18} className="mr-2" />
                  <Link
                    href="mailto:contact@krishaliconsultancy.com"
                    className="hover:underline"
                  >
                    contact@krishaliconsultancy.com
                  </Link>
                </p>
                <p className="text-sm mt-2">Contact: Anand</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 text-center w-full text-xs">
            <p>
              &copy; {new Date().getFullYear()} Krishali Consultancy FZE. All
              rights reserved.
            </p>
            <div className="mt-1 space-x-4">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
}

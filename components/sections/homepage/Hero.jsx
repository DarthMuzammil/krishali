"use client";

import { useState, useEffect } from "react";
import {
  contactUsLink,
  slideChangeTime,
  heroDescription,
  heroTitle,
} from "@/lib/constants/homepage";
import { sendGAEvent } from "@next/third-parties/google";
import { Button } from "../../ui/button";
import Image from "next/image";
import { backgroundImages } from "@/lib/constants/homepage";

function ImageCarousel({ images, currentSlide }) {
  const handleContactClick = (ContactUsLink) => {
    sendGAEvent("event", "buttonClicked", { value: "custom_event" });
    window.open(ContactUsLink);
  };

  return (
    <div>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute bg-fuchsia-700 inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill" // This makes the image fill the container
            objectFit="cover" // This makes sure the image covers the entire area without stretching
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {heroTitle}
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  {heroDescription}
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={() => handleContactClick(contactUsLink)}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CarouselControl({ images, setCurrentSlide, currentSlide }) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? "bg-white" : "bg-white/50"
          }`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  );
}
export default function Hero({ scrollToSection }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = backgroundImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, slideChangeTime);

    return () => clearInterval(timer);
  }, [images.length]);

  return images ? (
    <section id="#hero" className="w-full relative h-[900px] overflow-hidden">
      <ImageCarousel images={images} currentSlide={currentSlide} />
      <CarouselControl
        images={images}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </section>
  ) : (
    <p>hi</p>
  );
}

'use client'

import { useState, useEffect } from "react"
import ContactButton from "../shared/ContactButton"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Hero({ scrollToSection }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "/2.jpg",
    "/2.jpg",
    "/3.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="w-full relative h-[600px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt={`Slide ${index + 1}`} width={1200} height={100} />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Krishali Wellness
            </h1>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Your partner in holistic wellness. We manage state-of-the-art gyms
              and offer rejuvenating Ayurvedic massages.
            </p>
          </div>
          <div className="space-x-4">
            <Button onClick={() => scrollToSection("gyms")}>Learn More</Button>
            <ContactButton />
          </div>
        </div>
      </div>
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
    </section>
  )
}


"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star } from 'lucide-react'
import Image from "next/image"
import TrainersCarousel from "@/components/trainers-carousel"
import logoImage from '../app/utilities/photo.png'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Image
            src={logoImage}
            alt="Krishali Wellness Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="sr-only">Krishali Wellness</span>
        </a>
        <nav className="ml-auto">
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </Button>
          <ul className={`flex flex-col md:flex-row gap-4 sm:gap-6 ${isMenuOpen ? 'absolute top-14 left-0 right-0 bg-white dark:bg-gray-800 p-4 md:p-0 md:relative md:top-0' : 'hidden md:flex'}`}>
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Krishali Wellness
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your partner in holistic wellness. We manage state-of-the-art gyms and offer rejuvenating Ayurvedic massages.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={() => scrollToSection('gyms')}>Learn More</Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')}>Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="massage" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Ayurvedic Massage Centers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((center) => (
                <Card key={center}>
                  <CardHeader>
                    <CardTitle>Massage Center {center}</CardTitle>
                    <CardDescription>Rejuvenate your body and mind</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Massage Center ${center}`}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                      width={300}
                      height={200}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Experience the healing power of Ayurvedic massages in our serene centers.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="gyms" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Managed Gyms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((gym) => (
                <Card key={gym}>
                  <CardHeader>
                    <CardTitle>Gym Location {gym}</CardTitle>
                    <CardDescription>State-of-the-art facilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Gym ${gym}`}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                      width={300}
                      height={200}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our expertly managed gym with top-notch equipment and professional staff.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <TrainersCarousel id="trainers" />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((testimonial) => (
                <Card key={testimonial}>
                  <CardHeader>
                    <CardTitle>Client Name {testimonial}</CardTitle>
                    <CardDescription>Ayurvedic Massage Client</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "The Ayurvedic massage at Krishali Wellness was truly transformative. I left feeling rejuvenated and
                      balanced."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>We'd love to hear from you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name">Name</label>
                      <input id="name" placeholder="Enter your name" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <input id="email" placeholder="Enter your email" className="w-full p-2 border rounded" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" placeholder="Enter your message" className="w-full p-2 border rounded" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Visit Us</CardTitle>
                  <CardDescription>Our locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>123 Wellness Street, City, Country</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>456 Health Avenue, Town, Country</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Krishali Wellness. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
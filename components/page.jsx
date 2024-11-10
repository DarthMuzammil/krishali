"'use client'";
import Link from "next/link"
import { MessageCircle, Megaphone, Users, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function BlockPage() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="font-bold">KRISHALI GROUP</Link>
          <nav className="flex items-center ml-auto space-x-4">
            <Link href="#features" className="text-sm font-medium">FEATURES</Link>
            <Link href="#about" className="text-sm font-medium">ABOUT</Link>
            <Link href="#services" className="text-sm font-medium">SERVICES</Link>
            <Link href="#gallery" className="text-sm font-medium">GALLERY</Link>
            <Link href="#testimonials" className="text-sm font-medium">TESTIMONIALS</Link>
            <Link href="#team" className="text-sm font-medium">TEAM</Link>
            <Link href="#contact" className="text-sm font-medium">CONTACT</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-[#1a2942] text-white">
          <div
            className="container flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-5xl font-bold mb-4">KRISHALI</h1>
            <p className="text-xl mb-8 max-w-2xl">
              IT services company that offers innovative and cutting-edge solutions to help businesses achieve their goals
            </p>
            <Button size="lg" variant="secondary">LEARN MORE</Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">FEATURES</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: MessageCircle, title: "Customer Support", description: "We provide excellent customer support to ensure your satisfaction and success." },
                { icon: Megaphone, title: "Marketing Strategy", description: "We help you develop a comprehensive marketing strategy to reach and engage your target audience." },
                { icon: Users, title: "Team Collaboration", description: "We facilitate team collaboration and communication to enhance productivity efficiency." },
                { icon: Wand2, title: "Innovative Solutions", description: "We provide innovative and customized solutions to address your business challenges achieve goals." }
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">OUR SERVICES</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Website Design and Development", description: "We provide professional website design and development services." },
                { title: "E-commerce Solutions", description: "We help you develop and implement effective e-commerce solutions." },
                { title: "Cloud Computing Services", description: "We offer customized cloud computing services." }
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">GET IN TOUCH</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-4">
                  <Input type="text" placeholder="Name" className="bg-white" />
                  <Input type="email" placeholder="Email" className="bg-white" />
                  <Textarea placeholder="Message" className="bg-white h-32" />
                  <Button variant="secondary" size="lg" className="w-full">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Info</h3>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>Saif Suite XT-49 P.O.Box 123170</p>
                  <p>Sharjah - U.A.E</p>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+971 50 9384388</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>anand@krishaligroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-4 text-center text-sm">
          © 2024 Krishali Group. All rights reserved.
        </div>
      </footer>
    </div>)
  );
}
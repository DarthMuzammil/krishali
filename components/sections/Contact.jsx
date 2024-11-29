"use client"
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import { MapPin } from "lucide-react"

export default function Contact() {
    return(
        <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Contact Us
          </h2>
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
                    <input
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border rounded"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="w-full p-2 border rounded"
                    />
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
    )
}
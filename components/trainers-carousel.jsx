"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const trainers = [
  {
    name: "Lumar",
    activity: "Swimming",
    location: "Landmark, Abu Dhabi",
    timing: "Mon to Fri: 6 AM - 2 PM\nSat & Sun: 7 PM - 9 PM"
  },
  {
    name: "Arafat",
    activity: "Swimming",
    location: "Landmark, Abu Dhabi",
    timing: "Sat & Sun: 3 PM - 8 PM"
  },
  {
    name: "Mehtab",
    activity: "Fitness",
    location: "Golden Falcon Tower, Abu Dhabi",
    timing: "Mon, Tue, Wed: 6 PM - 9 PM"
  },
  {
    name: "Rovin",
    activity: "Fitness",
    location: "Landmark Tower, Abu Dhabi",
    timing: "Mon to Sun: 9 AM - 9 PM"
  },
  {
    name: "Evelyn",
    activity: "Zumba",
    location: "Landmark Tower, Abu Dhabi",
    timing: "Sun, Mon, Tue, Thu: 4:30 PM - 5:30 PM"
  },
  {
    name: "Deepthi",
    activity: "Swimming",
    location: "Golden Falcon Tower, Abu Dhabi",
    timing: "Mon to Thu: 5:30 PM - 6:30 PM"
  },
  {
    name: "Mahmoud Allam",
    activity: "Swimming",
    location: "Sama Tower, Dubai",
    timing: "Mon & Wed: 1 PM - 3 PM\nTue & Thu: 9 AM - 3 PM\nSat & Sun: 7 PM - 10 PM"
  }
]

export default function TrainersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 }
    }
  }, [Autoplay()])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <section id="trainers" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Trainers</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {trainers.map((trainer) => (
                <div
                  key={trainer.name}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="relative w-32 h-32">
                          <Image
                            src={`/placeholder.svg?height=200&width=200`}
                            alt={`Trainer ${trainer.name}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full border-2 border-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                          />
                        </div>
                        <div>
                          <CardTitle>{trainer.name}</CardTitle>
                          <CardDescription>{trainer.activity}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <strong>Location:</strong> {trainer.location}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line">
                        <strong>Timing:</strong><br />{trainer.timing}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const images = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
]

const amenities = ["State-of-the-art Equipment", "Swimming Pool", "Sauna", "Group Fitness Classes"]

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    (<div className="mb-12">
      <div className="relative">
        <img
          src={images[currentImage]}
          alt={`Gym image ${currentImage + 1}`}
          className="w-full h-[400px] object-cover rounded-lg" />
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevImage}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextImage}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Location & Amenities</h2>
          <p className="text-gray-600 mb-4">123 Landmark Tower, City Center, 12345</p>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-neutral-900 rounded-full mr-2 dark:bg-neutral-50"></div>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}


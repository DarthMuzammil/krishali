"use client"
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "../ui/card"
import Image from "next/image"

export default function AyurvedicMassage() {
    return (
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
                  <CardDescription>
                    Rejuvenate your body and mind
                  </CardDescription>
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
                    Experience the healing power of Ayurvedic massages in our
                    serene centers.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}
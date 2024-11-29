"use client"
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "../ui/card"
import Image from "next/image"
export default function Gyms() {
    return (
        <section
        id="gyms"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Managed Gyms
          </h2>
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
                    Our expertly managed gym with top-notch equipment and
                    professional staff.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}
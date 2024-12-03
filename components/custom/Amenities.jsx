"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Amenities({amenities, address}){
    return (
        <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Location & Amenities</h2>
          <p className="text-gray-600 mb-4">{address}</p>
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
    )
}
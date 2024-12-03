"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ContactButton from "../../custom/ContactButton"


export default function ActivityCards() {
  const activities = [
    {
      name: "Swimming",
      pricing: [
        { classes: "1 Class", price: 20 },
        { classes: "2 Classes", price: 30 },
      ],
      timing: [
        { days: "Mon - Wed", time: "2:00pm - 3:00pm" },
        { days: "Thu - Sat", time: "4:00pm - 5:00pm" },
      ],
      caption: "Lorem ipsum dolor sit amet",
    },
    {
      name: "Zumba",
      pricing: [
        { classes: "1 Class", price: 20 },
        { classes: "2 Classes", price: 30 },
      ],
      timing: [
        { days: "Tue - Thu", time: "6:00pm - 7:00pm" },
        { days: "Sat", time: "10:00am - 11:00am" },
      ],
      caption: "Book Now! Only 10% Seats left",
    },
  ]
  return (
    (<div>
      <h2 className="text-2xl font-semibold mb-4">Choose Your Activities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {activities?.map((activity, index) => (
          <Card key={activity.name + activity.caption} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{activity.caption}</p>
              <div className="mb-4">
                <h2 className="font-semibold mb-2">Schedule</h2>
                <RadioGroup

                  >
                  {activity?.timing?.map((schedule) => (
                    <div key={activity.name + schedule.time} className="flex items-center space-x-2">
                      <RadioGroupItem value={schedule.time} id={`${activity.name}-${schedule}`} />
                      <Label htmlFor={`${activity.name}-${schedule.days}`}>{schedule.time}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Number of Sessions</h2>
                <RadioGroup>
                  {activity.pricing.map((option) => (
                    <div key={activity.name + option.price} className="flex items-center space-x-2">
                      <RadioGroupItem
                        id={`${activity.name}-session-${option.price}`} />
                      <Label htmlFor={`${activity.name}-session-${option.classes}`}>
                        {option.classes} (AED {option.price})
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <ContactButton />
          
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}


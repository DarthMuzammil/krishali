"use client"
import { useEffect, useState } from "react";
import Image from "next/image"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { locations } from "@/lib/locations"
import PricingCard from "@/components/shared/PricingCard"

function Activities({activities}) {
    return (
        activities.map((activity, index) => {
            console.log(activity)

            return(
                <PricingCard key={index} name={activity.name} pricing={activity.pricing} schedule={activity.timing} caption={activity.caption} />
            )
          
        })
    )
}
export default function LocationPage() {
    const { id } = useParams();
    console.log(id)
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      const fetchLocation = async () => {
        try {
          const res = await fetch(`/api/locations/${id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch location");
          }
          const data = await res.json();
          console.log(data)
          setLocation(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchLocation();
    }, [id]);
  
    if (!location) return <p>Loading...</p>;
  return (
    (<div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{location.buildingName}</h1>
      <div className="mb-8  flex flex-row gap-5">
        <Image
          src={location.buildingImage}
          alt={location.buildingName}
          width={500}
          height={300}
          className="rounded-lg" />
                <Card className="mt-8 h-full shadow-md bg-gray-200">
        <CardHeader>
          <CardTitle>Trainer</CardTitle>
        </CardHeader>
        <CardContent className="flex items-start space-x-4">
          <Image
            src={location.trainer.image}
            alt={location.trainer.name}
            width={200}
            height={200}
            className="rounded-full" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{location.trainer.name}</h3>
            <p>{location.trainer.information}</p>
          </div>
        </CardContent>
      </Card>
      </div>
      <Activities activities={location.activities}/>
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {location.activities.map((activity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Pricing:</h3>
              <ul className="list-disc list-inside mb-4">
                {activity.pricing.map((price, idx) => (
                  <li key={idx}>{price.classes} class{price.classes > 1 ? "es" : ""}: {price.price} AED</li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2">Timing:</h3>
              <ul className="space-y-2">
                {activity.timing.map((time, idx) => (
                  <li key={idx}>
                    <Badge variant="outline" className="mr-2">{time.days}</Badge>
                    {time.time}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>)
  );
}


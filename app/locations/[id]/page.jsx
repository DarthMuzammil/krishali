"use client";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import BuildingPage from "@/components/custom/BuildingPage";

// function Activities({activities}) {
//     return (
//         activities.map((activity, index) => {
//             console.log(activity)

//             return(
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {activities.map((activity, index) => (
//                   <PricingCard
//                     key={index}
//                     name={activity.name}
//                     pricing={activity.pricing}
//                     schedule={activity.timing}
//                     caption={activity.caption}
//                   />
//                 ))}
//               </div>
//             )

//         })
//     )
// }
export default function LocationPage() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  console.log(id, "sssw")

  useEffect(() => {
 
    const fetchLocation = async () => {
      try {
        const res = await fetch(`/api/locations/${id}`);
        console.log(`/api/locations/${id}`, "GET API CALL")

        if (!res.ok) {
          throw new Error("Failed to fetch location");
        }
        const data = await res.json();
        setLocation(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation().then().catch((e) =>  console.log)
  }, [id]);

  if (!location) return <p>Loading...</p>;
  return (
    <div className="container mx-auto p-4">
     {location ? <BuildingPage activities={location.activities} locationObject={location} /> : <div>Loading...</div>} 
    </div>
  );
}

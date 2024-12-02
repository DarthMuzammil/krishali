"use client";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import BuildingPage from "@/components/custom/BuildingPage";

export default function LocationPage() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch(`/api/locations/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch location");
        }
        const data = await res.json();
        setLocation(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation()
      .then()
      .catch((e) => console.log);
  }, [id]);

  if (!location) return <p>Loading.sss..</p>;
  return (
    <div className="container mx-auto p-4">
      {location ? (
        <BuildingPage
          activities={location.activities}
          name={location.buildingName}
          image={location.buildingImage}
          trainer={location.trainer}
        />
      ) : (
        <div>Loading Building Information...</div>
      )}
    </div>
  );
}

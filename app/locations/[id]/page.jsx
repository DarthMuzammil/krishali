"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BuildingPage from "@/components/screens/BuildingPage";
import { extractActivityNames } from "@/lib/utils/locations";
import { trainers } from "@/lib/constants/phonebook";

export default function LocationPage() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [trainerss, setTrainers] = useState(["Allam"]);

  useEffect(() => {
    let isMounted = true;

    const fetchLocation = async () => {
      try {
        const res = await fetch(`/api/locations/${id}`);
        if (!res.ok) throw new Error("Failed to fetch location");
        const data = await res.json();
        if (isMounted) {
          setLocation(data);
          setTrainers(data.trainers);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!location) return <p>Loading.sss..</p>;
  return (
    <div className="container mx-auto p-4">
      {location ? (
        <BuildingPage
          amenities={extractActivityNames(location)}
          activities={location.activities}
          name={location.buildingName}
          image={location.buildingImage}
          images={location.activityImages}
          googleMapsLink={location.locationLink}
          displayName={location.metadata.title}
          address={location.location}
          locationsTrainers={trainerss}
          trainer={trainers}
        />
      ) : (
        <div>Loading Building Information...</div>
      )}
    </div>
  );
}

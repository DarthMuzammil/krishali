"use client";

import ImageCarousel from "../custom/ImageCarousel";
import PricingCard from "../custom/PricingCard";
import HStack from "../custom/HStack";
import AnimatedHeading from "../custom/AnimatedTitle";
import Link from "next/link";

function transformTrainersObjectToArray(trainers) {
  return Object.keys(trainers).map((key) => ({
    name: trainers[key].name,
    title: trainers[key].title,
    image: trainers[key].image,
    description: trainers[key].description,
  }));
}

export default function BuildingPage({
  name,
  trainer,
  displayName,
  locationsTrainers,
  googleMapsLink,
  activities,
  amenities,
  address,
  images,
}) {
  return (
    <div className="min-h-screen bg-gray-50">
     <Link href={googleMapsLink}>
     <AnimatedHeading className="mt-12 mb-12" title={displayName} />  
     </Link> 
      <ImageCarousel address={address} images={images} amenities={amenities} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {activities.map((activity, index) => (
    <PricingCard
      key={index}
      name={activity.name}
      timing={activity.timing}
      pricing={activity.pricing}
      trainers={activity.trainer}
      locationsTrainers={locationsTrainers}
    />
  ))}
</div>

    </div>
  );
}

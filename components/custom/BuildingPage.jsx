"use client"

import TrainerBio from "@/components/trainer-bio";
import ActivityCards from "@/components/activity-cards";

export default function BuildingPage({ activities, name, trainer, image }) {
  console.log("hi")
  return (
    <div className="min-h-screen bg-gray-50">
      <TrainerBio name={trainer.name} title={trainer.title} description={trainer.description} image={trainer.image} />
      <ActivityCards activities={activities} />
    </div>
  );
}

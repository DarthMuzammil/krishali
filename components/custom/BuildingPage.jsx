"use client"

import TrainerBio from "@/components/trainer-bio";
import ActivityCards from "@/components/activity-cards";

export default function BuildingPage({ activities, locationObject }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TrainerBio name={locationObject?.trainer?.name} title={locationObject?.trainer?.information} description={locationObject?.trainer?.description} image={locationObject?.trainer?.image} />
      <ActivityCards activities={activities} />
    </div>
  );
}

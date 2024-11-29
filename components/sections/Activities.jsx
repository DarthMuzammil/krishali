"use client";
import ActivityCard from "../shared/ActivityCard";
import React from "react";

const activities = [
  {
    id: 1,
    activityName: "Fitness",
    buildingName: "Landmark Tower",
    timing: "Mon, Tue & Wed 6:00pm to 9:00pm",
    prices: [
      { classes: 1, price: 60 },
      { classes: 2, price: 250 },
    ],
  },
  {
    id: 2,
    activityName: "Fitness",
    buildingName: "Landmark Tower",
    timing: "Mon, Tue & Wed 6:00pm to 9:00pm",
    prices: [
      { classes: 1, price: 60 },
      { classes: 2, price: 250 },
    ],
  },
  {
    id: 3,
    activityName: "Fitness",
    buildingName: "Landmark Tower",
    timing: "Mon, Tue & Wed 6:00pm to 9:00pm",
    prices: [
      { classes: 1, price: 60 },
      { classes: 2, price: 250 },
    ],
  },
  {
    id: 4,
    activityName: "Fitness",
    buildingName: "Landmark Tower",
    timing: "Mon, Tue & Wed 6:00pm to 9:00pm",
    prices: [
      { classes: 1, price: 60 },
      { classes: 2, price: 250 },
    ],
  },
  {
    id: 5,
    activityName: "Fitness",
    buildingName: "Landmark Tower",
    timing: "Mon, Tue & Wed 6:00pm to 9:00pm",
    prices: [
      { classes: 1, price: 60 },
      { classes: 2, price: 250 },
    ],
  },
];
function ActivitiesGallery({activities}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square overflow-hidden"
          >
            <ActivityCard
            key={item.id}
              activityName = {item.activityName}
              buildingName = {item.buildingName}
              timing = {item.timing}
              prices = {item.prices}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Activities() {
  return (
    <div className="flex p-4 flex-col w-full">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Our Services
      </h2>
      <div className="flex w-full sm:flex-col sm:items-center  md:justify-center md:gap-6 md:flex-row">
        <ActivitiesGallery activities={activities} />
      </div>
    </div>
  );
}

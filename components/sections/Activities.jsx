"use client";
import ActivityCard from "../shared/ActivityCard";
import React from "react";

const activities = [
  {
    id: 1,
    activityName: "Swimming Class",
    buildingName: "Landmark Tower",
    timing: "Sat & Sun 3:00pm to 8:00pm",
    prices: [
      { classes: 1, price: 140 },
      { classes: 8, price: 800 },
      { classes: 10, price: 950 },
      { classes: 12, price: 1100 },
    ],
  },
  {
    id: 2,
    activityName: "Zumba Class",
    buildingName: "Landmark Tower",
    timing: "Sun, Mon, Tue & Thu 4:30pm to 5:30pm",
    prices: [
      { classes: 1, price: 60 },
      { classes: 5, price: 250 },
      { classes: 10, price: 400 },
    ],
  },
  {
    id: 3,
    activityName: "Swimming Class",
    buildingName: "GOLDEN FALCON TOWER",
    timing: "Mon, Tue ,Wed  & Thu 5:30pm to 6:30pm",
    prices: [
      { classes: 1, price: 120 },
      { classes: 8, price: 700 },
      { classes: 10, price: 800 },
      { classes: 12, price: 920 },              
    ],
  },
  {
    id: 4,
    activityName: "Swimming class",
    buildingName: "AL BUSTAN COMPLEX",
    timing: "Sat & Sun 3:00pm to 8:00pm",
    prices: [
      { classes: 1, price: 120 },
      { classes: 8, price: 700 },
      { classes: 10, price: 800 },
      { classes: 12, price: 920 },
    ],
  },
  {
    id: 5,
    activityName: "Swimming Class",
    buildingName: "Landmark Tower",
    timing: "Mon, Tue, Wed, Thu & Fri 6:00am to 2:00pm, Sat & Sun 7:00pm to 9:00pm",
    prices: [
      { classes: 1, price: 140 },
      { classes: 8, price: 800 },
      { classes: 10, price: 950 },
      { classes: 12, price: 1100},
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

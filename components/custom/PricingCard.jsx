"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfilePicture from "./ProfilePicture";
import { Calendar } from "lucide-react";
import ContactButton from "./ContactButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function filterByNames(trainersArray, namesArray) {
  return trainersArray.filter((trainer) => namesArray.includes(trainer.name));
}

function Pricing({ pricing, isHovered }) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Pricing:</h2>
      <motion.ul
        className="space-y-3"
        animate={{ x: isHovered ? 10 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {pricing.map((item, index) => {
          return (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-neutral-900 rounded-full dark:bg-neutral-50" />
              <span className="font-bold">{item.classes + ":"}</span>
              <span className="ml-auto font-bold">{item.price}</span>
              <span className="font-bold">{"AED"}</span>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}

function Schedule({ timing }) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg flex items-center gap-2">
        <Calendar className="w-4 h-4" /> Schedule:
      </h2>
      <ul className="space-y-3 text-sm">
        {timing.map((item, index) => {
          return (
            <li
              key={item.days}
              className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/5 dark:bg-neutral-50/5"
            >
              <span className=" text-sm font-black">{item.days}</span>
              <span className=" text-sm font-black">{item.time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Header({ trainers, locationsTrainers, name , isRosehafeet}) {
  return (
    <CardHeader className=" flex flex-col gap-2 justify-center items-center">
      <h2 className="text-2xl font-bold ">{name}</h2>
{  !isRosehafeet &&    <><h2 className="text-2xl font-bold ">By</h2><div className="flex w-full justify-center items-center flex-row gap-2">
        {[{ name: trainers }].map((item, idx) => {
          return (
            <div key={item.name + idx} className="flex flex-col gap-2">
              <ProfilePicture
                source={`/trainers/${item.name}.jpeg`}
                alt="test"
                size={50} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div></>}
    </CardHeader>
  );
}

function Footer({ caption }) {
  return (
    <CardFooter className="flex flex-col gap-3">
      <ContactButton />
      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
        {caption}
      </p>
    </CardFooter>
  );
}

function Content({ pricing, timing, isHovered }) {
  return (
    <CardContent className="space-y-6">
      <Pricing pricing={pricing} isHovered={isHovered} />
      <Schedule timing={timing} />
    </CardContent>
  );
}

export default function PricingCard({
  pricing,
  timing,
  locationsTrainers,
  trainers,
  name,
  caption,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return name === "Ayurvedic Massage" || name === "Sports Massage" ? (
    <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <Card className="w-[350px]">
        <Header
          trainers={trainers}
          isRosehafeet={true}
          locationsTrainers={locationsTrainers}
          name={name}
        />
        <Content pricing={pricing} timing={timing} isHovered={isHovered} />
        <Footer caption={caption} />
      </Card>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <Card className="w-[350px]">
        <Header
          trainers={trainers}
          locationsTrainers={locationsTrainers}
          name={name}
        />
        <Content pricing={pricing} timing={timing} isHovered={isHovered} />
        <Footer caption={caption} />
      </Card>
    </div>
  );
}

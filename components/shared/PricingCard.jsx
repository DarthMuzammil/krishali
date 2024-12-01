import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import ContactButton from "./ContactButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function PricingCard({
  name,
  description,
  pricing,
  schedule,
  caption,
}) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(name, description, pricing, schedule, caption, "aihswihi");

  return (
    <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <Card className="w-[350px]">
        {/* Decorative background elements */}
        {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div> */}

        <CardHeader className="space-y-2 text-center pb-4">
          <h2 className="text-2xl font-bold ">{name}</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
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
                    <span className="font-medium">{item.classes + ":"}</span>
                    <span className="ml-auto font-bold">{item.price}</span>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Schedule:
            </h2>
            <ul className="space-y-3 text-sm">
              {schedule.map((item, index) => {
                return (
                  <li
                    key={item.days}
                    className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/5 dark:bg-neutral-50/5"
                  >
                    <span className="font-medium">{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <ContactButton />
          <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
            {caption}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

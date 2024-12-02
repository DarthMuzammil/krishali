"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function TrainerBio({ name, title, description, image }) {
  console.log("sss", name, title, description, image)
  return name && title && description && image ? (
    <Card className="mb-12">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={image}
            className=" rounded-full "
            width={100}
            height={100}
            alt="allam"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{title}</p>
            <p className="text-gray-800">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <div>loadssing....</div>
  );
}

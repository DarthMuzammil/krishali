"use client";
import Image from "next/image";
import MotionHStack from "@/components/custom/MotionHStack";
import MotionWithLink from "@/components/custom/MotionWithLink";
import DisplayLocation from "@/components/custom/DisplayLoction";
import DisplayActivities from "./DisplayActivities";
import MotionGrid from "./MotionGrid";

function DisplayImage({ service }) {
  return (
    <div className="relative w-auto h-64 flex flex-row justify-center items-center overflow-hidden">
      <Image
        src={service.image}
        alt={service.name}
        width={500}
        height={1000}
        className="transform hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
        {service.title}
      </h2>
    </div>
  );
}

function BottomContainer({ children }) {
  return <div className="p-6 bg-white">{children}</div>;
}

function MainContainer({ children }) {
  return (
    <div className="bg-gray-200 w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.4)] transition-all duration-300">
      {children}
    </div>
  );
}

export default function AnimatedCard({ locations, orientation = "grid", className="" }) {
  return orientation === "grid" ? (
    <MotionGrid className={className}>
      {locations.map((service, index) => (
        <MotionWithLink key={index} service={service} index={index}>
          <MainContainer>
            <DisplayImage service={service} />
            <BottomContainer>
              <DisplayLocation location={service.location} />
              <DisplayActivities activities={service.activities} />
            </BottomContainer>
          </MainContainer>
        </MotionWithLink>
      ))}
    </MotionGrid>
  ) : (
    <MotionHStack>
      {locations.map((service, index) => (
        <MotionWithLink key={index} service={service} index={index}>
          <MainContainer>
            <DisplayImage service={service} />
            <BottomContainer>
              <DisplayLocation location={service.location} />
              <DisplayActivities activities={service.activities} />
            </BottomContainer>
          </MainContainer>
        </MotionWithLink>
      ))}
    </MotionHStack>
  );
}

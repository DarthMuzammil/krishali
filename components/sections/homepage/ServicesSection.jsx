import AnimatedCard from "@/components/custom/AnimatedCard";
import AnimatedHeading from "@/components/custom/AnimatedTitle";

export default function ServicesSection({ locations }) {
  return (
    <section
      id="Locations"
      className="py-16  w-full bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="container mx-auto px-4">
        <AnimatedHeading className=" mb-12" title="Our Premium Projects" />
        <AnimatedCard locations={locations} />
      </div>
    </section>
  );
}

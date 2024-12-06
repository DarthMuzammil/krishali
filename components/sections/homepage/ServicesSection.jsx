import AnimatedCard from "@/components/custom/AnimatedCard";
import AnimatedHeading from "@/components/custom/AnimatedTitle";

export default function ServicesSection({ locations }) {
  return (
    <section
      id="Locations"
      className="sm:my-12"
    >
      <AnimatedHeading
        className="mb-8 md:mb-12 text-center"
        title="Our Premium Projects"
      />
      <AnimatedCard
        locations={locations}
        className="md:grid-cols-2 md:grid md:gap-28 sm:grid sm:pl-28 sm:mb-10 sm:grid-cols-1"
      />
    </section>
  );
}

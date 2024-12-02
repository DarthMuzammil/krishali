"use client";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { locationsLandingPage } from "@/lib/constants/locations";

const services = locationsLandingPage

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function ServicesSection() {
  return (
    (<section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-sky-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Our Premium Locations
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}>
              <Link href={`/locations/${service.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.4)] transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={500}
                      height={500}
                      className="transform hover:scale-110 transition-transform duration-700" />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {service.name}
                    </h2>
                  </div>
                  
                <div className="p-6 bg-white">
          <div className="flex items-center mb-4">
                      <span className="text-sky-600 font-semibold">{service.location}</span>
                    </div> 
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-sky-900 mb-2">Activities</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.activities.map((activity, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-sky-900 mb-2">Trainers</h4>
                        <p className="text-gray-600">{service.trainers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>)
  );
}


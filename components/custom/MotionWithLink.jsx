"use client"
import { motion } from "framer-motion"
import Link from "next/link";

export default function MotionWithLink({ children, index, service }) {
    return (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 },
        }}
      >
        <Link
          href={`/locations/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
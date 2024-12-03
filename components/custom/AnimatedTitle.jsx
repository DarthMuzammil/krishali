"use client"
import { motion } from "framer-motion";


export default function AnimatedHeading({ title, className = ""  }) {
    return (
      <motion.h2
        className={`sm:text-3xl md:text-4xl text-2xl font-bold text-center text-sky-900` + " " + className}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
    );
  }
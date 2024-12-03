"use client"
import { motion } from "framer-motion";
export default function MotionHStack({ children }) {
    return (
      <motion.div
        className="flex flex-col md:flex md:flex-row gap-10"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    );
  }
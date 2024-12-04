"use client"
import { motion } from "framer-motion";
export default function MotionGrid({ children, className }) {
    return (
      <motion.div
        className={"grid" + " " + className}
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
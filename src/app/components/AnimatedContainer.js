import React from 'react';
import { motion } from "framer-motion";

export default function AnimatedContainer({
  children, className = ""
}) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.35,
        delay: 0.7
      }}
      className={`container ${className}`}>{children}</motion.div>
  );
}

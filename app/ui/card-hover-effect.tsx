'use client';

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardHoverEffectProps {
  children: ReactNode;
  className?: string;
}

export function CardHoverEffect({ children, className }: CardHoverEffectProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="h-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
}

export default CardHoverEffect;

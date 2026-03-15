'use client';

import { motion } from 'framer-motion';

interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const Stagger = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className,
}: StaggerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

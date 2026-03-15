'use modular';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  shimmer?: boolean;
}

export const AnimatedText = ({ text, className, shimmer = true }: AnimatedTextProps) => {
  return (
    <motion.span
      className={cn(
        'inline-block',
        shimmer && 'shimmer-text',
        className
      )}
    >
      {text}
    </motion.span>
  );
};

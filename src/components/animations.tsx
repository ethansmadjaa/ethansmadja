'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';

// Variants d'animation plus douces pour les éléments
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 }
};

// Composants d'animation réutilisables avec timing optimisé
interface AnimatedDivProps {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export const AnimatedDiv = ({ 
  children, 
  variant = fadeInUp, 
  delay = 0, 
  duration = 0.5, 
  className,
  ...props 
}: AnimatedDivProps) => (
  <motion.div
    variants={variant}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ 
      duration, 
      delay,
      ease: "easeOut"
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedSection = ({ 
  children, 
  variant = fadeInUp, 
  delay = 0, 
  duration = 0.5, 
  className,
  ...props 
}: AnimatedDivProps) => (
  <motion.section
    variants={variant}
    initial="initial"
    whileInView="animate"
    exit="exit"
    viewport={{ once: true, margin: "-50px", amount: 0.1 }}
    transition={{ 
      duration, 
      delay,
      ease: "easeOut"
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
);

export const StaggerContainer = ({ children, className, ...props }: AnimatedDivProps) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-30px", amount: 0.1 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, ...props }: AnimatedDivProps) => (
  <motion.div
    variants={staggerItem}
    transition={{ 
      duration: 0.4,
      ease: "easeOut"
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Animation de bouton avec hover plus douce
interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  whileHover?: any;
  whileTap?: any;
  [key: string]: any;
}

export const AnimatedButton = ({ 
  children, 
  className,
  whileHover = { scale: 1.02 },
  whileTap = { scale: 0.98 },
  ...props 
}: AnimatedButtonProps) => (
  <motion.div
    whileHover={whileHover}
    whileTap={whileTap}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Animation de carte avec hover plus subtile
export const AnimatedCard = ({ 
  children, 
  className,
  ...props 
}: AnimatedDivProps) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ 
      y: -4, 
      boxShadow: "0 10px 25px -12px rgba(0, 0, 0, 0.15)" 
    }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Animation de texte plus fluide
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    className={className}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 }
        }}
        transition={{
          duration: 0.3,
          delay: delay + index * 0.02,
          ease: "easeOut"
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.div>
); 
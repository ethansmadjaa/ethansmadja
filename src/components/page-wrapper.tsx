'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Petit délai pour s'assurer que tout est monté
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
} 
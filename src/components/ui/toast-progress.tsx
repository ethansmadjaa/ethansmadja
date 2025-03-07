'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ToastProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
}

export function ToastProgress({
  className,
  duration = 5000, // Default to 5 seconds
  ...props
}: ToastProgressProps) {
  const [width, setWidth] = React.useState(100);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setWidth((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, duration / 100);

      return () => clearInterval(interval);
    }, 100); // Small delay before starting

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 h-1 bg-primary transition-all duration-100',
        className
      )}
      style={{ width: `${width}%` }}
      {...props}
    />
  );
} 
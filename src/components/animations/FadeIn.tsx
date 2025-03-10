
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  distance?: number;
  initialOpacity?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.9,
  className = '',
  threshold = 0.1,
  once = true,
  distance = 40,
  initialOpacity = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, threshold]);

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translate-y-[${distance}px]`;
        case 'down':
          return `translate-y-[-${distance}px]`;
        case 'left':
          return `translate-x-[${distance}px]`;
        case 'right':
          return `translate-x-[-${distance}px]`;
        case 'none':
          return '';
        default:
          return `translate-y-[${distance}px]`;
      }
    }
    return '';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ${
        isVisible ? 'opacity-100' : `opacity-${initialOpacity}`
      } ${getDirectionStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

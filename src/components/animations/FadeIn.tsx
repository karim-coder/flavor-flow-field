
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  className = '',
  threshold = 0.1,
  once = true,
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
          return 'translate-y-[30px]';
        case 'down':
          return 'translate-y-[-30px]';
        case 'left':
          return 'translate-x-[30px]';
        case 'right':
          return 'translate-x-[-30px]';
        case 'none':
          return '';
        default:
          return 'translate-y-[30px]';
      }
    }
    return '';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getDirectionStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;


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

  const getTransformStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        case 'none':
          return '';
        default:
          return `translateY(${distance}px)`;
      }
    }
    return '';
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : initialOpacity / 100,
        transform: isVisible ? 'translate(0, 0)' : getTransformStyle(),
        transition: `opacity ${duration}s ${delay}s cubic-bezier(0.215, 0.61, 0.355, 1), transform ${duration}s ${delay}s cubic-bezier(0.215, 0.61, 0.355, 1)`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

import { useEffect, useRef, useState } from 'react';
import './FadeInView.css';

const FadeInView = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible TRUE kalo masuk viewport, FALSE kalo keluar
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`fade-in-view ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        '--fade-delay': `${delay}s`,
        '--fade-duration': `${duration}s`,
        '--fade-transform': getInitialTransform()
      }}
    >
      {children}
    </div>
  );
};

export default FadeInView;
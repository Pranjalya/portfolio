import React, { useState, useEffect, useRef } from 'react';
import './AnimateWhenVisible.css';

const AnimateWhenVisible = ({
  name,
  appear = false,
  offsetTop = 0,
  duration = 1,
  children,
  className,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const inViewport = () => {
    const rect = elementRef.current.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight - offsetTop &&
      rect.left <= window.innerWidth
    );
  };

  const detectVisibility = () => {
    setIsVisible(inViewport());
  };

  useEffect(() => {
    detectVisibility();
    window.addEventListener('scroll', detectVisibility);
    window.addEventListener('resize', detectVisibility);
    window.addEventListener('orientationchange', detectVisibility);

    return () => {
      window.removeEventListener('scroll', detectVisibility);
      window.removeEventListener('resize', detectVisibility);
      window.removeEventListener('orientationchange', detectVisibility);
    };
  }, []);

  return (
    <div ref={elementRef} className={className} {...rest}>
      <div
        className={`${name} ${isVisible ? 'animate' : ''}`}
        style={{
          animationDuration: `${duration}s`,
          transitionDuration: `${duration}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimateWhenVisible;
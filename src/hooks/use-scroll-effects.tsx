import { useEffect, useState, useCallback } from 'react';

interface ScrollEffectsOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollEffects = (options: ScrollEffectsOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress calculation
  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / scrollHeight, 1);
    setScrollProgress(progress);
    setScrollY(scrollTop);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe all elements with scroll animation classes
    const elements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-scale-in, .scroll-slide-left, .scroll-slide-right'
    );
    
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      updateScrollProgress();
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [updateScrollProgress]);

  return {
    isVisible,
    scrollY,
    scrollProgress,
  };
};

// Parallax hook for luxury effects
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setOffset(scrollY * speed);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [speed]);

  return offset;
};

// Smooth scroll to element
export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return {
    scrollToElement,
    scrollToTop,
  };
};

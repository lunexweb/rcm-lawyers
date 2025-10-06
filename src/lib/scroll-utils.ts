// Performance-optimized scroll utilities for luxury feel

export class ScrollManager {
  private static instance: ScrollManager;
  private scrollHandlers: Map<string, () => void> = new Map();
  private rafId: number | null = null;
  private isScrolling = false;

  private constructor() {
    this.setupGlobalScrollListener();
  }

  static getInstance(): ScrollManager {
    if (!ScrollManager.instance) {
      ScrollManager.instance = new ScrollManager();
    }
    return ScrollManager.instance;
  }

  private setupGlobalScrollListener(): void {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        this.rafId = requestAnimationFrame(() => {
          this.isScrolling = true;
          this.scrollHandlers.forEach(handler => handler());
          
          // Reset scrolling state after a brief delay
          setTimeout(() => {
            this.isScrolling = false;
          }, 100);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  addScrollHandler(id: string, handler: () => void): void {
    this.scrollHandlers.set(id, handler);
  }

  removeScrollHandler(id: string): void {
    this.scrollHandlers.delete(id);
  }

  getScrollProgress(): number {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min(scrollTop / scrollHeight, 1);
  }

  getScrollY(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  isCurrentlyScrolling(): boolean {
    return this.isScrolling;
  }

  destroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.scrollHandlers.clear();
  }
}

// Utility functions for smooth scrolling
export const smoothScrollTo = (targetY: number, duration: number = 800): Promise<void> => {
  return new Promise((resolve) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startY + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};

export const scrollToElement = (elementId: string, offset: number = 80): Promise<void> => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetY = element.offsetTop - offset;
    return smoothScrollTo(targetY);
  }
  return Promise.resolve();
};

export const scrollToTop = (): Promise<void> => {
  return smoothScrollTo(0);
};

// Intersection Observer utilities for performance
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Parallax effect utilities
export const createParallaxEffect = (element: HTMLElement, speed: number = 0.5) => {
  const scrollManager = ScrollManager.getInstance();
  
  const handler = () => {
    const scrollY = scrollManager.getScrollY();
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // Only apply parallax when element is in view
    if (rect.bottom >= 0 && rect.top <= windowHeight) {
      const yPos = -(scrollY - elementTop + windowHeight) * speed;
      element.style.transform = `translateY(${yPos}px)`;
    }
  };

  const id = `parallax-${Math.random().toString(36).substr(2, 9)}`;
  scrollManager.addScrollHandler(id, handler);
  
  return () => {
    scrollManager.removeScrollHandler(id);
  };
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

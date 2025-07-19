import { useEffect, useState } from 'react';

export default function useParallax(speed = 0.2) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    transform: `translateY(${offset * speed}px)`,
    willChange: 'transform',
    transition: 'transform 0.1s cubic-bezier(.4,0,.2,1)',
  };
} 
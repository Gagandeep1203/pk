import { useRef, useEffect, useState } from 'react';

export default function useElementParallax(speed = 0.8) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let frame;
    function updateParallax() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Center of element relative to viewport
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const offset = (elementCenter - viewportCenter) * speed;
        setStyle({
          transform: `translateY(${offset}px)`,
          willChange: 'transform',
          transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)',
        });
      }
      frame = requestAnimationFrame(updateParallax);
    }
    updateParallax();
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return [ref, style];
} 
import { useRef, useEffect, useState } from 'react';

export default function useRevealOnScroll(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      options
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
} 
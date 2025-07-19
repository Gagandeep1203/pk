import React, { useEffect, useState } from 'react';
import './AnimatedGallery.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import img1 from '../assets/img/1750066368814.jpeg';
import img2 from '../assets/img/1750066369966.jpeg';
import img3 from '../assets/img/1750649844907.jpeg';
import img4 from '../assets/img/1750649849253.jpeg';
import img5 from '../assets/img/1750649845045.jpeg';
import img6 from '../assets/img/1750649844402.jpeg';
import img7 from '../assets/img/1750649844402.jpeg';
import img8 from '../assets/img/Screenshot2025-07-18144907.png';
import img9 from '../assets/img/Screenshot2025-07-18145009.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function ScrollProgressLine() {
  const [progress, setProgress] = useState(0);
  const checkpoints = 6;

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrolled);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-vertical enhanced">
      <div
        className="scroll-progress-bar enhanced"
        style={{ height: `${progress * 100}%` }}
      />
      {/* Checkpoints (dots) */}
      {Array.from({ length: checkpoints }).map((_, i) => (
        <div
          key={i}
          className={`scroll-progress-dot${progress >= i / (checkpoints - 1) ? ' active' : ''}`}
          style={{ top: `calc(${(i / (checkpoints - 1)) * 100}% - 7px)` }}
        />
      ))}
    </div>
  );
}

function AnimatedGallery() {
  // Center of the container
  const centerX = 50; // vw
  const centerY = 50; // vh
  const radiusVW = 18; // how far from center (vw)
  const radiusVH = 12; // how far from center (vh)
  const baseRotation = -15; // min rotation
  const rotationRange = 30; // max rotation span

  // Create refs and visibility states for all images
  const revealStates = images.map(() => useRevealOnScroll());

  return (
    <div className="animated-gallery-container">
      <ScrollProgressLine />
      {images.map((src, idx) => {
        const [imgRef, visible] = revealStates[idx];
        const angle = (idx / images.length) * 2 * Math.PI;
        const left = centerX + Math.cos(angle) * radiusVW;
        const top = centerY + Math.sin(angle) * radiusVH;
        const rotation = baseRotation + Math.random() * rotationRange;
        const style = {
          left: `calc(${left}vw - 160px)`, // 160px = half image width
          top: `calc(${top}vh - 120px)`,   // 120px = half image height
          transform: `rotate(${rotation}deg) scale(0.8)`
        };
        return (
          <img
            key={src}
            ref={imgRef}
            src={src}
            alt={`gallery-${idx}`}
            className={`gallery-img${visible ? ' scatter-animate' : ''}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

export default AnimatedGallery;

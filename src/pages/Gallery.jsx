import React from 'react';
import './Gallery.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const images = [
  { src: 'https://via.placeholder.com/200', alt: 'Gallery Image 1' },
  { src: 'https://via.placeholder.com/200', alt: 'Gallery Image 2' },
  { src: 'https://via.placeholder.com/200', alt: 'Gallery Image 3' },
  { src: 'https://via.placeholder.com/200', alt: 'Gallery Image 4' },
];

function Gallery() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const itemRefs = images.map(() => useRevealOnScroll());
  return (
    <div id="gallery" className="gallery-container">
      <h2
        className={`gallery-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Gallery
      </h2>
      <div className="gallery-grid">
        {images.map((img, idx) => {
          const [itemRef, itemVisible] = itemRefs[idx];
          return (
            <div
              className={`gallery-item reveal-on-scroll${itemVisible ? ' visible' : ''}`}
              ref={itemRef}
              key={idx}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = e.clientX;
      const y = e.clientY;
      const centerX = w / 2;
      const centerY = h / 2;
      const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
      const rotateY = ((x - centerX) / centerX) * 16; // max 16deg
      setTransform(`perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`);
      setCursorPos({ x, y });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-3d"
          style={{ transform }}
        >
          <div className="halo-ball"></div>
          <h1 className="hero-title">Welcome to Bandy and Moot</h1>
          <p className="hero-subtitle">Your trusted partner in business solutions</p>
          <button className="primary-button" onClick={() => scrollToSection('book')}>
            Book Now
          </button>
        </div>
      </section>
 
      {/* Custom Cursor */}
      <div
        className={`custom-cursor${isClicking ? ' clicking' : ''}`}
        style={{
          left: cursorPos.x + 'px',
          top: cursorPos.y + 'px',
        }}
      />
    </div>
  );
}

export default Home;

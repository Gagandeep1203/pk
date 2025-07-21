import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import OurClients from './pages/OurClients';
import OurPartners from './pages/OurPartners';
import Career from './pages/Career';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import AnimatedGallery from './pages/AnimatedGallery';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorClasses = `custom-cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`;

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Blogs />
      <OurClients />
      <OurPartners />
      <Career /> 
      <AnimatedGallery />
      <BookNow />
      <Footer />
    </>
  );
}

export default App;

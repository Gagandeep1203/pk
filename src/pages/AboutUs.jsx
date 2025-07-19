import React from 'react';
import './AboutUs.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function AboutUs() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const [storyRef, storyVisible] = useRevealOnScroll();
  const [missionRef, missionVisible] = useRevealOnScroll();
  const [visionRef, visionVisible] = useRevealOnScroll();
  const [teamRef, teamVisible] = useRevealOnScroll();
  return (
    <div id="about" className="about-container">
      <h2
        className={`about-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        About Us
      </h2>
      <div
        className={`about-section reveal-on-scroll${storyVisible ? ' visible' : ''}`}
        ref={storyRef}
      >
        <h3>Our Story</h3>
        <p>Bandy and Moot was founded to deliver exceptional business solutions...</p>
      </div>
      <div
        className={`about-section reveal-on-scroll${missionVisible ? ' visible' : ''}`}
        ref={missionRef}
      >
        <h3>Mission</h3>
        <p>To empower our clients with innovative and reliable services.</p>
      </div>
      <div
        className={`about-section reveal-on-scroll${visionVisible ? ' visible' : ''}`}
        ref={visionRef}
      >
        <h3>Vision</h3>
        <p>To be a global leader in business solutions and client satisfaction.</p>
      </div>
      <div
        className={`about-section reveal-on-scroll${teamVisible ? ' visible' : ''}`}
        ref={teamRef}
      >
        <h3>Our Team</h3>
        <p>Meet our dedicated professionals...</p>
      </div>
    </div>
  );
}

export default AboutUs;
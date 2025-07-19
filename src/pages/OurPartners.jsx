import React from 'react';
import './OurPartners.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const partners = [
  { name: 'Partner X', description: 'Trusted technology partner.' },
  { name: 'Partner Y', description: 'Leading industry collaborator.' },
];

function OurPartners() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const partnerRefs = partners.map(() => useRevealOnScroll());
  return (
    <div id="partners" className="partners-container">
      <h2
        className={`partners-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Our Partners
      </h2>
      <div className="partners-grid">
        {partners.map((partner, idx) => {
          const [cardRef, cardVisible] = partnerRefs[idx];
          return (
            <div
              className={`partner-card reveal-on-scroll${cardVisible ? ' visible' : ''}`}
              ref={cardRef}
              key={idx}
            >
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurPartners;
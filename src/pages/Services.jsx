import React from 'react';
import './Services.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const services = [
  { title: 'Consulting', description: 'Expert advice to grow your business.' },
  { title: 'Development', description: 'Custom software and web solutions.' },
  { title: 'Marketing', description: 'Strategies to boost your brand.' },
  { title: 'Support', description: 'Ongoing help and technical support.' },
];

function Services() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const serviceRefs = services.map(() => useRevealOnScroll());
  return (
    <div id="services" className="services-container">
      <h2
        className={`services-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Our Services
      </h2>
      <div className="services-grid">
        {services.map((service, idx) => {
          const [cardRef, cardVisible] = serviceRefs[idx];
          return (
            <div
              className={`service-card reveal-on-scroll${cardVisible ? ' visible' : ''}`}
              ref={cardRef}
              key={idx}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
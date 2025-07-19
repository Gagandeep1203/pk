import React from 'react';
import './OurClients.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const clients = [
  { name: 'Client A', testimonial: 'Great service!' },
  { name: 'Client B', testimonial: 'Highly recommend Bandy and Moot.' },
];

function OurClients() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const clientRefs = clients.map(() => useRevealOnScroll());
  return (
    <div id="clients" className="clients-container">
      <h2
        className={`clients-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Our Clients
      </h2>
      <div className="clients-grid">
        {clients.map((client, idx) => {
          const [cardRef, cardVisible] = clientRefs[idx];
          return (
            <div
              className={`client-card reveal-on-scroll${cardVisible ? ' visible' : ''}`}
              ref={cardRef}
              key={idx}
            >
              <h3>{client.name}</h3>
              <p>"{client.testimonial}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurClients;
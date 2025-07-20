import React from 'react';
import './Services.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const services = [
  { 
    title: 'Strategic Consulting', 
    description: 'Expert business strategy and digital transformation consulting to accelerate your growth and optimize operations.',
    icon: '🎯',
    features: ['Market Analysis', 'Growth Strategy', 'Process Optimization'],
    cta: 'Get Consultation'
  },
  { 
    title: 'Custom Development', 
    description: 'Bespoke software solutions, web applications, and mobile apps built with cutting-edge technologies.',
    icon: '💻',
    features: ['Web Applications', 'Mobile Apps', 'API Development'],
    cta: 'Start Project'
  },
  { 
    title: 'Digital Marketing', 
    description: 'Comprehensive digital marketing strategies to boost your brand visibility and drive conversions.',
    icon: '📈',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing'],
    cta: 'Boost Growth'
  },
  { 
    title: '24/7 Support', 
    description: 'Round-the-clock technical support and maintenance to ensure your systems run smoothly.',
    icon: '🛠️',
    features: ['Technical Support', 'System Maintenance', 'Performance Monitoring'],
    cta: 'Get Support'
  },
];

function Services() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const serviceRefs = services.map(() => useRevealOnScroll());
  
  const handleServiceClick = (serviceTitle) => {
    // Scroll to contact section or open booking modal
    const contactSection = document.getElementById('book');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="services-container">
      <h2
        className={`services-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Our Services
      </h2>
      <p className="services-subtitle reveal-on-scroll">
        Comprehensive solutions tailored to your business needs
      </p>
      <div className="services-grid">
        {services.map((service, idx) => {
          const [cardRef, cardVisible] = serviceRefs[idx];
          return (
            <div
              className={`service-card reveal-on-scroll${cardVisible ? ' visible' : ''}`}
              ref={cardRef}
              key={idx}
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, featureIdx) => (
                  <span key={featureIdx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <button className="service-cta">
                {service.cta}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Bandy & Moot Private Limited</h2>
        <p className="footer-tagline">Empowering, Excellence in Every Steps</p>
        <div className="footer-section">
          <strong>Office Hours:</strong><br />
          Sunday - Thursday 9:00 AM - 6:00 PM<br />
          Closed on Friday, Saturdays, and public holidays.
        </div>
        <div className="footer-section">
          <strong>Contact Us:</strong><br />
          Phone: <a href="tel:+917905226299">+91 7905226299</a><br />
          Email: <a href="mailto:sales@bandy-moot.com">sales@bandy-moot.com</a>
        </div>
        <div className="footer-section">
          <strong>Follow Us:</strong><br />
          LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Bandy&Moot</a><br />
          Twitter: <a href="https://twitter.com/BandyMoot" target="_blank" rel="noopener noreferrer">@BandyMoot</a><br />
          Instagram: <a href="https://instagram.com/bandy.moot" target="_blank" rel="noopener noreferrer">@bandy.moot</a>
        </div>
        <div className="footer-section">
          <strong>Address:</strong><br />
          Vasu Bhawan Near Prayag Dhaba Andawa Prayagraj, 211019, Uttar Pradesh, India
        </div>
        <div className="footer-copyright">
          © 2024 Bandy & Moot Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

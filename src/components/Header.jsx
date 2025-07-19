import React, { useState } from 'react';
import './header.css'; // Import external CSS

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'Our Clients', id: 'clients' },
  { label: 'Our Partners', id: 'partners' },
  { label: 'Career', id: 'career' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Book Now', id: 'book' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">Bandy and Moot</h1>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-button"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-button"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;

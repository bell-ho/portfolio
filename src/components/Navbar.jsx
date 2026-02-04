import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: '#home', label: 'Home' },
    { id: '#about', label: 'About' },
    { id: '#skills', label: 'Skills' },
    { id: '#work', label: 'Projects' },
    { id: '#career', label: 'Career' },
    { id: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--dark' : ''}`} id="navbar">
      <div className="navbar__logo">JH</div>

      <button
        className="navbar__toggle-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>

      <ul className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="navbar__menu__item"
            data-link={item.id}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

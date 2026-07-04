import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Watch for scroll position to apply background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const handleMobileToggle = () => {
    setIsMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  // Determine if transparent navbar is required (like home page header before scroll)
  const isHome = location.pathname === '/';
  const navClass = `navbar ${isScrolled || !isHome ? 'scrolled' : ''}`;

  return (
    <>
      <nav className={navClass} id="navbar">
        <Link to="/" className="nav-brand">
          <div className="nav-brand-icon">👟</div>
          <span>Kharshari</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" id="themeToggle" onClick={toggleTheme} title="Toggle Dark/Light Mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="tel:+919639890966" className="nav-call-btn">
            📞 Call Now
          </a>
        </div>

        <button
          className={`hamburger ${isMobileOpen ? 'active' : ''}`}
          id="hamburger"
          onClick={handleMobileToggle}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`} id="mobileMenu">
        <NavLink to="/" className="nav-link mobile-nav-link" end>
          🏠 Home
        </NavLink>
        <NavLink to="/products" className="nav-link mobile-nav-link">
          👟 Products
        </NavLink>
        <NavLink to="/about" className="nav-link mobile-nav-link">
          ℹ️ About Us
        </NavLink>
        <NavLink to="/contact" className="nav-link mobile-nav-link">
          📞 Contact
        </NavLink>
        <div style={{ paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
          <a href="tel:+919639890966" className="btn btn-primary btn-sm" style={{ flex: 1 }}>
            📞 Call
          </a>
          <a
            href="https://wa.me/919639890966"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ flex: 1 }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

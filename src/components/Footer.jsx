import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--gradient-accent)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}
              >
                👟
              </div>
              <div className="footer-brand-name">Kharshari Footwear</div>
            </div>
            <p className="footer-desc">
              Moradabad ka sabse bharosemand branded footwear showroom. 100% original products, best prices, aur friendly service — har kadam pe!
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-btn" title="Instagram">
                📸
              </a>
              <a href="#" className="footer-social-btn" title="Facebook">
                👍
              </a>
              <a
                href="https://wa.me/919639890966"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="WhatsApp"
              >
                💬
              </a>
              <a href="tel:+919639890966" className="footer-social-btn" title="Phone">
                📞
              </a>
            </div>
          </div>

          <div>
            <div className="footer-heading">Quick Links</div>
            <div className="footer-links">
              <Link to="/" className="footer-link">🏠 Home</Link>
              <Link to="/products" className="footer-link">👟 All Products</Link>
              <Link to="/products?cat=mens" className="footer-link">👨 Men's Shoes</Link>
              <Link to="/products?cat=womens" className="footer-link">👩 Women's Shoes</Link>
              <Link to="/products?cat=kids" className="footer-link">👦 Kids Footwear</Link>
              <Link to="/about" className="footer-link">ℹ️ About Us</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Brands</div>
            <div className="footer-links">
              <Link to="/products?brand=Puma" className="footer-link">Puma</Link>
              <Link to="/products?brand=Nike" className="footer-link">Nike</Link>
              <Link to="/products?brand=Red+Tape" className="footer-link">Red Tape</Link>
              <Link to="/products?brand=One8" className="footer-link">One8</Link>
              <Link to="/products?brand=Hummer" className="footer-link">Hummer</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <img src="/assets/images/location_pin.png" alt="Location" style={{ width: '1.2em', height: '1.2em', objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} />
              </span>
              <span>Dingerpur, Pakwara Road, Moradabad, Uttar Pradesh</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href="tel:+919639890966" style={{ color: 'inherit' }}>
                +91-9639890966
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <a
                href="https://wa.me/919639890966"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                WhatsApp
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🕐</span>
              <span>10:00 AM – 9:30 PM (Daily)</span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="https://wa.me/919639890966"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                💬 WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © {currentYear} Kharshari Footwear. All rights reserved.
          </div>
            <div className="footer-bottom-text">
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.5)', marginRight: '1rem' }}>
              Privacy Policy
            </Link>
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Exchange Policy
            </Link>
          </div>
          <div className="footer-bottom-text">
            <Link to="https://my-portfolio-one-gamma-48.vercel.app/" target="_blank" style={{ color: 'rgba(234, 35, 35, 1)' }}>
              Mohammad Jilani's Portfolio Website
            </Link>
          </div>
          <div className="footer-bottom-text">Made by Mohammad Jilani Pasha</div>
        </div>
      </div>
    </footer>
  );
}

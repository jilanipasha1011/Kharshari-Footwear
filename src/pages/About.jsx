import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    initial: 'R',
    location: 'Civil Lines, Moradabad',
    text: 'Bahut acha showroom hai! Puma ki running shoes lete gayi — ekdum original, aur price bhi achhi. Staff helpful aur friendly tha. Highly recommend!',
  },
  {
    name: 'Priya Gupta',
    initial: 'P',
    location: 'Katghar, Moradabad',
    text: 'Beti ke liye kids shoes chahiye the — bahut variety mili! Colorful, comfortable aur affordable bhi. Ab yahi aate hain hamesha shopping ke liye.',
  },
  {
    name: 'Arjun Verma',
    initial: 'A',
    location: 'Majhola, Moradabad',
    text: 'Nike aur One8 dono ek hi jagah mile. WhatsApp pe enquiry ki to turant reply aaya. Showroom bahut premium feel deta hai — recommended!',
  },
];

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div
        style={{
          background: 'var(--gradient-hero)',
          padding: 'calc(var(--nav-height) + 3rem) 1.5rem 5rem',
          marginTop: '36px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div
            className="hero-orb"
            style={{
              width: '500px',
              height: '500px',
              background: 'var(--primary-light)',
              top: '-200px',
              right: '-100px',
              position: 'absolute',
              borderRadius: '50%',
              filter: 'blur(80px)',
              opacity: 0.2,
            }}
          ></div>
          <div
            className="hero-orb"
            style={{
              width: '300px',
              height: '300px',
              background: 'var(--accent)',
              bottom: '-100px',
              left: '5%',
              position: 'absolute',
              borderRadius: '50%',
              filter: 'blur(80px)',
              opacity: 0.15,
            }}
          ></div>
        </div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div
            className="section-label"
            style={{
              background: 'rgba(212,160,23,0.18)',
              borderColor: 'rgba(212,160,23,0.4)',
              color: 'var(--accent-light)',
            }}
          >
            ℹ️ Our Story
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: 'white', margin: '1rem 0 1rem' }}>
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#d4a017,#f0c040)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kharshari
            </span>{' '}
            Footwear
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Moradabad ki sabse trusted footwear destination — jahan quality, variety aur customer satisfaction milti hai
            ek saath.
          </p>
        </div>
      </div>

      {/* ─── OUR STORY ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div className="grid-2 reveal visible" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">📖 Our Story</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Jahaan Har Kadam <span className="highlight">Khaas</span> Hai
              </h2>
              <div className="divider" style={{ margin: '1rem 0' }}></div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                <strong>Kharshari Footwear</strong> ka safar shuru hua ek chhote se sapne se — Moradabad ke logon ko
                genuine branded footwear ek hi jagah milna chahiye, bina kisi compromise ke.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Aaj hum Puma, Nike, Red Tape, One8 aur Hummer ke official stockist hain aur hazaaron families ki footwear
                ki zaroorat poori karte hain. Hamare paas men, women, kids — sab ke liye latest collection available
                rehta hai.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                Hamare liye <strong>customer ka satisfaction</strong> sabse pehle hai. Isliye hum best prices, genuine
                products aur friendly service dete hain — hamesha.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-primary">
                  👟 Shop Now
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  📞 Contact Us
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src="/assets/images/store_interior.png"
                  alt="Kharshari Footwear Showroom Interior"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              {/* Floating badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Years in Business
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'var(--gradient-hero)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-light)' }}>5000+</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🏆 Why Choose Us</div>
            <h2 className="section-title">
              The <span className="highlight">Kharshari</span> Difference
            </h2>
            <p className="section-subtitle">Yeh wajahaat hain jo hamare customers baar baar wapas aate hain</p>
          </div>

          <div className="brands-section">
        <div className="brands-header">Official Stockist Of Premium Brands</div>
        <div className="marquee-container">
          <div className="marquee-track" id="marqueeTrack">
            {/* Original set */}
            <div className="brand-logo-item">
              <img src="/assets/images/puma.png" alt="puma" className="brand-logo-emoji" />
              <div className="brand-logo-name">PUMA</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/nike.png" alt="nike" className="brand-logo-emoji" />
              <div className="brand-logo-name">NIKE</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/redtape.png" alt="redtape" className="brand-logo-emoji" />
              <div className="brand-logo-name">RED TAPE</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/one8.png" alt="one8" className="brand-logo-emoji" />
              <div className="brand-logo-name">ONE8</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/hummer.png" alt="hummer" className="brand-logo-emoji" />
              <div className="brand-logo-name">HUMMER</div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="brand-logo-item">
              <img src="/assets/images/puma.png" alt="puma" className="brand-logo-emoji" />
              <div className="brand-logo-name">PUMA</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/nike.png" alt="nike" className="brand-logo-emoji" />
              <div className="brand-logo-name">NIKE</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/redtape.png" alt="redtape" className="brand-logo-emoji" />
              <div className="brand-logo-name">RED TAPE</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/one8.png" alt="one8" className="brand-logo-emoji" />
              <div className="brand-logo-name">ONE8</div>
            </div>
            <div className="brand-logo-item">
              <img src="/assets/images/hummer.png" alt="hummer" className="brand-logo-emoji" />
              <div className="brand-logo-name">HUMMER</div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
      

      {/* ─── STORE EXPERIENCE ───────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🏪 Store Experience</div>
            <h2 className="section-title">
              Ek <span className="highlight">Premium</span> Shopping Experience
            </h2>
            <p className="section-subtitle">Hamara showroom sirf ek dukan nahi — ek complete footwear destination hai</p>
          </div>

          <div className="grid-2 reveal-stagger visible" style={{ gap: '1.5rem' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="/assets/images/store_interior.png"
                alt="Showroom Interior"
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🗂️</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Organized Display
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Brand-wise organized shelves for easy browsing
                </div>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💡</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Premium Lighting
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Spotlight display for every shoe</div>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🪑</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Comfortable Seating
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Try shoes comfortably with proper fitting area
                </div>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🅿️</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Free Parking</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Ample parking space in front of store
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRANDS WE CARRY ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🏷️ Our Brands</div>
            <h2 className="section-title">
              Ye Premium <span className="highlight">Brands</span> Hain Hamare Paas
            </h2>
          </div>

          <div className="grid-5 reveal-stagger visible" style={{ gap: '1.5rem' }}>
            <Link to="/products?brand=Puma" className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐆</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                PUMA
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sports & Casual</div>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                View Collection →
              </div>
            </Link>
            <Link to="/products?brand=Nike" className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✔️</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                NIKE
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Premium Athletic</div>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                View Collection →
              </div>
            </Link>
            <Link to="/products?brand=Red+Tape" className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                RED TAPE
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Formal & Casual</div>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                View Collection →
              </div>
            </Link>
            <Link to="/products?brand=One8" className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👑</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                ONE8
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Trendy & Stylish</div>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                View Collection →
              </div>
            </Link>
            <Link to="/products?brand=Hummer" className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚛</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                HUMMER
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Rugged & Durable</div>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                View Collection →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">💬 Customer Reviews</div>
            <h2 className="section-title">
              Hamare <span className="highlight">Khush</span> Customers
            </h2>
          </div>

          <div
            className="testimonials-carousel reveal visible"
            style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden', position: 'relative' }}
          >
            <div
              className="testimonials-track"
              id="testimonialsTrack"
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${activeTestimonial * 100}%)`,
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="testimonial-card" style={{ flexShrink: 0, width: '100%' }}>
                  <div className="testimonial-inner">
                    <div className="testimonial-quote">"</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.initial}</div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-location">
                          <img src="/assets/images/location_pin.png" alt="Location" style={{ display: 'inline-block', height: '1em', verticalAlign: '-0.1em', marginRight: '0.25rem' }} />
                          {t.location}
                        </div>
                      </div>
                      <div style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        ✅ Verified
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn" id="carouselPrev" onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>
                ←
              </button>
              <div className="carousel-dots">
                {TESTIMONIALS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`carousel-dot ${activeTestimonial === idx ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(idx)}
                  ></div>
                ))}
              </div>
              <button className="carousel-btn" id="carouselNext" onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}>
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────────── */}
      <div className="stats-section">
        <div className="stats-grid reveal-stagger visible">
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👟</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏷️</div>
            <div className="stat-number">5</div>
            <div className="stat-label">Premium Brands</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">10+ Yrs</div>
            <div className="stat-label">Experience</div>
          </div>
        </div>
      </div>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-surface)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container reveal visible">
          <h2 className="section-title">
            Ready to Find <span className="highlight">Your</span> Perfect Pair?
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Visit our store ya WhatsApp pe enquiry karein — hum hamesha ready hain!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary btn-lg">
              👟 Browse Products
            </Link>
            <a
              href="https://wa.me/919639890966"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 WhatsApp Us
            </a>
            <Link to="/contact" className="btn btn-secondary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/assets/images/location_pin.png" alt="Location" style={{ height: '1.2em', width: 'auto', objectFit: 'contain' }} />
              Find Our Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

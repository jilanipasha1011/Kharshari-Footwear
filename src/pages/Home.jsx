import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    initial: 'R',
    location: 'Civil Lines, Moradabad',
    text: 'Bahut acha showroom hai! Maine Puma ki running shoes kharidi — bilkul original, aur price bhi bahut achhi mili. Staff bhi bahut helpful tha. Highly recommend!',
  },
  {
    name: 'Priya Gupta',
    initial: 'P',
    location: 'Katghar, Moradabad',
    text: 'Meri beti ke liye kids shoes chahiye the. Yahan bahut variety mili — colorful, comfortable aur affordable bhi. Ab yahi aate hain hamesha. Best shop in Moradabad!',
  },
  {
    name: 'Arjun Verma',
    initial: 'A',
    location: 'Majhola, Moradabad',
    text: 'Nike aur One8 dono brands ke shoes ek hi jagah mile — woh bhi bilkul original. WhatsApp pe enquiry ki to turant reply aaya. Delivery bhi Moradabad ke andar ho gayi!',
  },
  {
    name: 'Suresh Agarwal',
    initial: 'S',
    location: 'Ram Ganga Vihar, Moradabad',
    text: 'Red Tape formal shoes liye office ke liye — quality ekdum top notch. MRP se bhi 30% kam mila. Festival offer tha toh aur bhi discount mila. Shukriya Kharshari Footwear!',
  },
  {
    name: 'Neha Singh',
    initial: 'N',
    location: 'Pakwara Road, Moradabad',
    text: 'Puri family ke liye ek saath kharida — papa ke formal, maa ke sandals, bhai ke sports shoes. Sab ek hi jagah mil gaya. Showroom bhi bahut sundar hai andar se!',
  },
];

export default function Home() {
  const featuredIds = [1, 6, 10, 13, 3, 8, 14, 16];
  const featuredProducts = PRODUCTS.filter((p) => featuredIds.includes(p.id));

  // Testimonials Carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <div className="page-transition">
      {/* ═══════════════════════════════════════════════════════════
         HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-orbs">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge hero-tag">🏆 Moradabad's #1 Footwear Destination</div>

            <h1 className="hero-title">
              Step Into<br />
              <span className="gold">Premium Style</span><br />
              With Every Stride
            </h1>

            <p className="hero-subtitle">
              Kharshari Footwear — Moradabad ka sabse bharosemand branded shoes ka showroom. Puma, Nike, Red Tape, One8 & Hummer ka original collection, best prices pe.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                👟 Shop Now
              </Link>
              <a
                href="https://wa.me/919639890966?text=Namaste!%20Main%20Kharshari%20Footwear%20ke%20products%20dekhna%20chahta%20hoon."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                💬 WhatsApp Us
              </a>
              <a href="#map-section" className="btn btn-outline btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src="/assets/images/location_pin.png" alt="Location" style={{ height: '1.2em', width: 'auto', objectFit: 'contain' }} />
                Find Us
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">5,000+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">500+</div>
                <div className="hero-stat-label">Products</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">5</div>
                <div className="hero-stat-label">Top Brands</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">10+ Yrs</div>
                <div className="hero-stat-label">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         BRAND STRIP
      ═══════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════
         FEATURED CATEGORIES
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-base)' }} id="categories">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🛍️ 100% Original Shoes-Authentic Quality Guaranteed</div>
            <h2 className="section-title">Find Your Perfect <span className="highlight">Pair</span></h2>
            <p className="section-subtitle">From sports to formal, we have every style covered for Men, Women, and Kids</p>
          </div>

          <div className="grid-auto reveal-stagger visible">
            <Link to="/products?cat=mens" className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/assets/images/one8.png" alt="Men's Shoes" className="img-cover" style={{ transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,30,0.85) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', color: 'white' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>Sports & Casual Shoes</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '4px' }}></div>
                </div>
              </div>
            </Link>

            <Link to="/products?cat=womens" className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/assets/images/hummer.png" alt="Women's Shoes" className="img-cover" style={{ transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,30,0.85) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', color: 'white' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>Authentic Quality Footwear</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '4px' }}>From ₹3,800</div>
                </div>
              </div>
            </Link>

            <Link to="/products?cat=kids" className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/assets/images/nike.png" alt="Kids Shoes" className="img-cover" style={{ transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,30,0.85) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', color: 'white' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>Premium Original Shoes</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '4px' }}>From ₹11,197</div>
                </div>
              </div>
            </Link>

            <Link to="/products?cat=sports" className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/assets/images/puma.png" alt="Sports Shoes" className="img-cover" style={{ transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,30,0.85) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', color: 'white' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>Premium Original Shoes</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '4px' }}>From ₹8,999</div>
                </div>
              </div>
            </Link>

            <Link to="/products?cat=sports" className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/assets/images/redtape.png" alt="Sports Shoes" className="img-cover" style={{ transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,30,0.85) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', color: 'white' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>Built to Perform</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '4px' }}>From ₹2,189</div>
                </div>
              </div>
            </Link>
            <Link to="/products?cat=sports" className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/assets/images/campus.png" alt="Sports Shoes" className="img-cover" style={{ transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,30,0.85) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', color: 'white' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>All-Day Comfort</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '4px' }}>From ₹1,548</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         FEATURED PRODUCTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-surface)' }} id="featured">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🔥 Featured Products</div>
            <h2 className="section-title">Best <span className="highlight">Sellers</span> This Week</h2>
            <p className="section-subtitle">Hand-picked trending styles loved by thousands of customers in Moradabad</p>
          </div>

          <div id="featuredProductsGrid" className="grid-auto" style={{ marginBottom: '2rem' }}>
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }} className="reveal visible">
            <Link to="/products" className="btn btn-secondary btn-lg">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         OFFER BANNERS
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-base)' }} id="offers">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🎁 Special Offers</div>
            <h2 className="section-title">Unbeatable <span className="highlight">Deals</span></h2>
          </div>

          <div className="offers-grid reveal-stagger visible">
            <div className="offer-banner offer-banner-1">
              <div>
                <div className="offer-emoji">🎉</div>
                <div className="offer-title">Festival Sale</div>
                <div className="offer-desc">Up to 33% off on selected brands</div>
              </div>
              <Link to="/products" className="offer-cta">Shop Now →</Link>
            </div>

            <div className="offer-banner offer-banner-2">
              <div>
                <div className="offer-emoji">🛍️</div>
                <div className="offer-title">Buy 2 Get 1 Free</div>
                <div className="offer-desc">On selected styles — limited time</div>
              </div>
              <a href="https://wa.me/919639890966?text=Buy%202%20Get%201%20offer%20ke%20baare%20mein%20poochna%20hai" target="_blank" rel="noopener noreferrer" className="offer-cta">Enquire →</a>
            </div>

            <div className="offer-banner offer-banner-3">
              <div>
                <div className="offer-emoji">🎓</div>
                <div className="offer-title">Student Discount</div>
                <div className="offer-desc">Extra 5% off with valid student ID</div>
              </div>
              <Link to="/contact" className="offer-cta">Learn More →</Link>
            </div>

            <div className="offer-banner offer-banner-4">
              <div>
                <div className="offer-emoji">📅</div>
                <div className="offer-title">Weekend Specials</div>
                <div className="offer-desc">Every Saturday — exclusive discounts</div>
              </div>
              <Link to="/products" className="offer-cta">Shop Now →</Link>
            </div>

            <div className="offer-banner offer-banner-5">
              <div>
                <div className="offer-emoji">⚡</div>
                <div className="offer-title">Flash Deals</div>
                <div className="offer-desc">Limited stock at jaw-dropping prices</div>
              </div>
              <Link to="/products" className="offer-cta">Grab Now →</Link>
            </div>

            <div className="offer-banner offer-banner-6">
              <div>
                <div className="offer-emoji">🌦️</div>
                <div className="offer-title">Seasonal Clearance</div>
                <div className="offer-desc">Last season's styles at deep discount</div>
              </div>
              <Link to="/products" className="offer-cta">View All →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         WHY CHOOSE US
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-surface)' }} id="why-us">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">🏆 Why Choose Us</div>
            <h2 className="section-title">The <span className="highlight">Kharshari</span> Promise</h2>
            <p className="section-subtitle">Trusted by thousands of families across Moradabad and surrounding areas</p>
          </div>

          <div className="trust-grid reveal-stagger visible">
            <div className="trust-card">
              <span className="trust-icon">✅</span>
              <h3 className="trust-title">100% Original Brands</h3>
              <p className="trust-desc">Sab products direct official channels se aate hain. Koi duplicate nahi, guaranteed authentic.</p>
            </div>
            <div className="trust-card">
              <span className="trust-icon">💰</span>
              <h3 className="trust-title">Best Prices in Moradabad</h3>
              <p className="trust-desc">Humari prices beat karna mushkil hai. Kahin aur sasta mile to bata dein — hum match karenge!</p>
            </div>
            <div className="trust-card">
              <span className="trust-icon">👨‍👩‍👧‍👦</span>
              <h3 className="trust-title">For the Entire Family</h3>
              <p className="trust-desc">Men, Women, Kids — sabke liye huge variety. Ek jagah, puri family ki zaroorat poori.</p>
            </div>
            <div className="trust-card">
              <span className="trust-icon">🆕</span>
              <h3 className="trust-title">Latest Collections</h3>
              <p className="trust-desc">Hamesha naya stock aata rehta hai. Seasonal trends aur brand new arrivals hamesha available.</p>
            </div>
            <div className="trust-card">
              <span className="trust-icon">😊</span>
              <h3 className="trust-title">Friendly Service</h3>
              <p className="trust-desc">Hamare staff aapki madad karne ke liye hamesha ready hain. Bilkul apne jaisa feel karein.</p>
            </div>
            <div className="trust-card">
              <span className="trust-icon">⭐</span>
              <h3 className="trust-title">Trusted Since Years</h3>
              <p className="trust-desc">Hazaaron khush customers aur unka bharosa hi hamari sabse badi achievement hai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-base)' }} id="reviews">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label">💬 Customer Reviews</div>
            <h2 className="section-title">What Our <span className="highlight">Customers</span> Say</h2>
          </div>

          <div className="testimonials-carousel reveal visible" style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden', position: 'relative' }}>
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
                        ✅ Verified Purchase
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn" id="carouselPrev" onClick={handlePrevTestimonial}>
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
              <button className="carousel-btn" id="carouselNext" onClick={handleNextTestimonial}>
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         STATS SECTION
      ═══════════════════════════════════════════════════════════ */}
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
            <div className="stat-label">Products Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏷️</div>
            <div className="stat-number">5</div>
            <div className="stat-label">Premium Brands</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">10+ Yrs</div>
            <div className="stat-label">In Business</div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         GOOGLE MAP SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="section map-section" id="map-section">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
              <img src="/assets/images/location_pin.png" alt="Location" style={{ height: '1.2em', width: 'auto', objectFit: 'contain' }} />
              Visit Our Store
            </div>
            <h2 className="section-title">Find <span className="highlight">Us</span> Easily</h2>
            <p className="section-subtitle">Conveniently located at Dingerpur, Pakwara Road, Moradabad</p>
          </div>

          <div className="map-wrapper reveal visible">
            <div className="map-info-card">
              <div className="map-info-item">
                <div className="map-info-icon">🏪</div>
                <div>
                  <div className="map-info-title">Store Name</div>
                  <div className="map-info-value">Kharshari Footwear</div>
                </div>
              </div>

              <div className="map-info-item">
                <div className="map-info-icon">
                  <img src="/assets/images/location_pin.png" alt="Location" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                </div>
                <div>
                  <div className="map-info-title">Address</div>
                  <div className="map-info-value">Dingerpur, Pakwara Road,<br />Moradabad, Uttar Pradesh</div>
                </div>
              </div>

              <div className="map-info-item">
                <div className="map-info-icon">🕐</div>
                <div>
                  <div className="map-info-title">Business Hours</div>
                  <div className="map-info-value">
                    10:00 AM – 9:30 PM<br />
                    <span style={{ color: 'var(--success)', fontSize: '0.85rem' }}>● Open Daily (7 days)</span>
                  </div>
                </div>
              </div>

              <div className="map-info-item">
                <div className="map-info-icon">📞</div>
                <div>
                  <div className="map-info-title">Phone</div>
                  <div className="map-info-value">
                    <a href="tel:+919639890966" style={{ color: 'var(--primary)' }}>+91-9639890966</a>
                  </div>
                </div>
              </div>

              <div className="map-info-item">
                <div className="map-info-icon">🅿️</div>
                <div>
                  <div className="map-info-title">Parking</div>
                  <div className="map-info-value">Free parking available<br />in front of store</div>
                </div>
              </div>

              <div className="map-buttons">
                <a href="tel:+919639890966" className="btn btn-primary">📞 Call Now</a>
                <a
                  href="https://wa.me/919639890966?text=Namaste!%20Directions%20chahiye%20Kharshari%20Footwear%20tak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/Vsoi2rzu7CFqP9j8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ gridColumn: '1/-1' }}
                >
                  🗺️ Get Directions
                </a>
                <a
                  href="https://maps.app.goo.gl/Vsoi2rzu7CFqP9j8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ gridColumn: '1/-1', background: 'var(--primary)', color: 'white' }}
                >
                  ⭐ Rate Us on Google
                </a>
              </div>
            </div>

            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8082295148415!2d78.7107277752927!3d28.725276575614227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ae300252d141f%3A0xc65e5d56030752e8!2sKharsari%20footwear!5e0!3m2!1sen!2sin!4v1783185821098!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kharshari Footwear Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         QUICK ENQUIRY CTA
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--gradient-hero)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div className="container">
          <div className="reveal visible">
            <div
              className="section-label"
              style={{
                background: 'rgba(212,160,23,0.2)',
                borderColor: 'rgba(212,160,23,0.4)',
                color: 'var(--accent-light)',
                marginBottom: '1.5rem',
              }}
            >
              📲 Get In Touch
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>
              Can't Find What You're Looking For?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Hum aapki help karne ke liye hamesha ready hain. WhatsApp ya call karein — turant reply milega!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919639890966?text=Namaste!%20Mujhe%20ek%20specific%20product%20dhundhna%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                💬 WhatsApp Now
              </a>
              <a href="tel:+919639890966" className="btn btn-primary btn-lg">
                📞 Call Us
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                📝 Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

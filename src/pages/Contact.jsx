import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { showToast } = useApp();

  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    productName: '',
    size: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { customerName, mobile, productName, size, message } = formData;

    if (!customerName.trim() || !mobile.trim()) {
      showToast('Naam aur Mobile number zaroori hain!', 'error');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showToast('Valid 10-digit mobile number daalein', 'error');
      return;
    }

    // Build WhatsApp message
    let msg = `🙏 Namaste, Kharshari Footwear!\n\n`;
    msg += `📝 *Customer Enquiry*\n`;
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 Name: *${customerName.trim()}*\n`;
    msg += `📱 Mobile: *${mobile.trim()}*\n`;
    if (productName) msg += `👟 Product: *${productName.trim()}*\n`;
    if (size) msg += `📏 Size: *${size}*\n`;
    if (message) msg += `💬 Message: ${message.trim()}\n`;
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Sent via Kharshari Footwear Website_`;

    const waUrl = `https://wa.me/919528009500?text=${encodeURIComponent(msg)}`;

    setIsSuccess(true);
    showToast('Enquiry bhej diya! WhatsApp khul raha hai... 💬', 'success', 4000);

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 800);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        customerName: '',
        mobile: '',
        productName: '',
        size: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="page-transition">
      {/* Page Header */}
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
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'var(--primary-light)',
              top: '-150px',
              right: '-50px',
              borderRadius: '50%',
              filter: 'blur(80px)',
              opacity: 0.18,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'var(--accent)',
              bottom: '-100px',
              left: '5%',
              borderRadius: '50%',
              filter: 'blur(80px)',
              opacity: 0.12,
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
            📞 Get In Touch
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: 'white', margin: '1rem 0 1rem' }}>
            Contact{' '}
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
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
            Koi bhi sawaal ho — call karein, WhatsApp karein, ya seedha visit karein. Hum hamesha ready hain!
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         QUICK CONTACT CARDS
      ═══════════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div className="grid-4 reveal-stagger visible" style={{ gap: '1.5rem', marginTop: '-3rem', position: 'relative', zIndex: 5 }}>
            <a
              href="tel:+919528009500"
              className="card"
              style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none', borderTop: '3px solid var(--primary)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}
              >
                Call Us
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>+91-95280-09500</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Tap to call instantly</div>
            </a>

            <a
              href="https://wa.me/919528009500?text=Namaste!%20Kharshari%20Footwear%20se%20baat%20karni%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none', borderTop: '3px solid var(--whatsapp)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}
              >
                WhatsApp
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>+91-95280-09500</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Quick reply guaranteed</div>
            </a>

            <div className="card" style={{ padding: '2rem', textAlign: 'center', borderTop: '3px solid var(--accent)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}
              >
                Visit Us
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Dingerpur, Pakwara Road</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Moradabad, UP</div>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center', borderTop: '3px solid var(--success)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🕐</div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}
              >
                Store Hours
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>10 AM – 9:30 PM</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--success)', marginTop: '0.25rem', fontWeight: 600 }}>
                ● Open Daily
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         ENQUIRY FORM + MAP
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="enquiry-wrapper">
            {/* Enquiry Info */}
            <div className="reveal visible">
              <div className="section-label" style={{ marginBottom: '1rem' }}>📝 Send Enquiry</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Humein <span className="highlight">Message</span> Karein
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Form fill karein aur submit karein — aapka message directly WhatsApp pe ja ke owner ko milega. Hum usually{' '}
                <strong>15 minutes ke andar reply karte hain!</strong>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(37,211,102,0.12)',
                      border: '1px solid rgba(37,211,102,0.25)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      flexShrink: 0,
                    }}
                  >
                    💬
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>WhatsApp Pe Direct Connect</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Form submit hote hi WhatsApp open hoga with pre-filled message
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(26,35,126,0.1)',
                      border: '1px solid rgba(26,35,126,0.2)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      flexShrink: 0,
                    }}
                  >
                    ⚡
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Super Fast Reply</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Usually within 15 minutes during store hours</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(212,160,23,0.12)',
                      border: '1px solid rgba(212,160,23,0.25)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      flexShrink: 0,
                    }}
                  >
                    🔒
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Safe & Private</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Aapki info sirf store owner ke paas jayegi. No spam.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:+919528009500" className="btn btn-primary">
                  📞 Call Now — +91-95280-09500
                </a>
                <a
                  href="https://wa.me/919528009500?text=Namaste!%20Main%20Kharshari%20Footwear%20ke%20baare%20mein%20enquiry%20karna%20chahta%20hoon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="enquiry-form reveal visible">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                📝 Enquiry Form
              </h3>
              <form onSubmit={handleSubmit}>
                {!isSuccess ? (
                  <>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input
                          type="text"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Aapka poora naam"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="10-digit number"
                          maxLength={10}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Konsa product chahiye?"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Size Preference</label>
                        <select
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Select size</option>
                          <option value="Size 4 (Women/Kids)">Size 4</option>
                          <option value="Size 5">Size 5</option>
                          <option value="Size 6">Size 6</option>
                          <option value="Size 7">Size 7</option>
                          <option value="Size 8">Size 8</option>
                          <option value="Size 9">Size 9</option>
                          <option value="Size 10">Size 10</option>
                          <option value="Size 11">Size 11</option>
                          <option value="Not sure">Not sure / Need guidance</option>
                        </select>
                      </div>
                      <div className="form-group full-width">
                        <label className="form-label">Additional Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-textarea"
                          placeholder="Brand preference, color, quantity ya koi bhi sawaal..."
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', fontSize: '1rem', padding: '16px' }}>
                      💬 Send Enquiry via WhatsApp
                    </button>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                      Submit karne pe WhatsApp automatically open hoga ready-to-send message ke saath. No spam, guaranteed.
                    </p>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Enquiry Sent!</div>
                    <div style={{ color: 'var(--text-muted)' }}>WhatsApp pe message ready ho gaya. Hum jald reply karenge!</div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         GOOGLE MAP
      ═══════════════════════════════════════════════════════════ */}
      <section className="section map-section" style={{ background: 'var(--bg-base)' }} id="map-section">
        <div className="container">
          <div className="section-header reveal visible">
            <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
              <img src="/assets/images/location_pin.png" alt="Location" style={{ height: '1.2em', width: 'auto', objectFit: 'contain' }} />
              Find Our Store
            </div>
            <h2 className="section-title">
              We're Right <span className="highlight">Here</span>
            </h2>
            <p className="section-subtitle">Dingerpur, Pakwara Road par — Moradabad ke center mein</p>
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
                  <div className="map-info-title">Full Address</div>
                  <div className="map-info-value">Dingerpur, Pakwara Road,<br />Moradabad, Uttar Pradesh – 244001</div>
                </div>
              </div>
              <div className="map-info-item">
                <div className="map-info-icon">🕐</div>
                <div>
                  <div className="map-info-title">Business Hours</div>
                  <div className="map-info-value">
                    10:00 AM – 9:30 PM<br />
                    <span style={{ color: 'var(--success)', fontSize: '0.85rem', fontWeight: 700 }}>
                      ● Open 7 Days a Week
                    </span>
                  </div>
                </div>
              </div>
              <div className="map-info-item">
                <div className="map-info-icon">📞</div>
                <div>
                  <div className="map-info-title">Phone / WhatsApp</div>
                  <div className="map-info-value">
                    <a href="tel:+919528009500" style={{ color: 'var(--primary)' }}>
                      +91-95280-09500
                    </a>
                  </div>
                </div>
              </div>
              <div className="map-info-item">
                <div className="map-info-icon">🚗</div>
                <div>
                  <div className="map-info-title">How to Reach</div>
                  <div className="map-info-value">Pakwara Road pe aayein, Dingerpur ke qareeb. Free parking available.</div>
                </div>
              </div>
              <div className="map-info-item">
                <div className="map-info-icon">🏙️</div>
                <div>
                  <div className="map-info-title">Nearby Landmarks</div>
                  <div className="map-info-value">Pakwara Chowk ke paas,<br />Moradabad city center se 5 min</div>
                </div>
              </div>

              <div className="map-buttons">
                <a href="tel:+919528009500" className="btn btn-primary">📞 Call Now</a>
                <a
                  href="https://wa.me/919528009500?text=Directions%20chahiye%20Kharshari%20Footwear%20tak"
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
                  🗺️ Get Directions on Google Maps
                </a>
                <a
                  href="https://maps.app.goo.gl/Vsoi2rzu7CFqP9j8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
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
                title="Kharshari Footwear Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SOCIAL LINKS
      ═══════════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal visible" style={{ marginBottom: '2rem' }}>
            <div className="section-label">🌐 Social Media</div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Follow <span className="highlight">Us</span>
            </h2>
          </div>

          <div className="social-grid reveal-stagger visible">
            <a
              href="https://wa.me/919528009500"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon">💬</div>
              <div className="social-name">WhatsApp</div>
              <div className="social-handle">Chat with us directly</div>
              <div className="btn btn-sm btn-whatsapp" style={{ marginTop: '0.75rem', pointerEvents: 'none' }}>
                Open Chat
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon">📸</div>
              <div className="social-name">Instagram</div>
              <div className="social-handle">@kharshariFootwear</div>
              <div
                className="btn btn-sm btn-secondary"
                style={{
                  marginTop: '0.75rem',
                  pointerEvents: 'none',
                  background: 'linear-gradient(135deg,#e91e8c,#f97316)',
                }}
              >
                Follow
              </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon">👍</div>
              <div className="social-name">Facebook</div>
              <div className="social-handle">Kharshari Footwear</div>
              <div
                className="btn btn-sm btn-secondary"
                style={{ marginTop: '0.75rem', pointerEvents: 'none', background: '#1877f2' }}
              >
                Like Page
              </div>
            </a>
            <a
              href="https://www.google.com/search?q=Kharshari+Footwear+Moradabad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon">⭐</div>
              <div className="social-name">Google Business</div>
              <div className="social-handle">Leave us a review!</div>
              <div
                className="btn btn-sm btn-secondary"
                style={{ marginTop: '0.75rem', pointerEvents: 'none', background: '#ea4335' }}
              >
                Rate Us
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header reveal visible">
            <div className="section-label">❓ FAQ</div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Common <span className="highlight">Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal-stagger visible">
            <details className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
              <summary
                style={{
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Kya aap home delivery karte hain?
                <span style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>+</span>
              </summary>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.7 }}>
                Abhi hum primarily in-store shopping karte hain. Moradabad ke andar kuch items pe special arrangement ho
                sakti hai — WhatsApp pe baat karein details ke liye.
              </p>
            </details>

            <details className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
              <summary
                style={{
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Kya exchange ya return hoti hai?
                <span style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>+</span>
              </summary>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.7 }}>
                Ji haan! 7 din ke andar exchange kar sakte hain. Bill zaroori hai. Shoes unworn aur original box mein honi
                chahiye. Return ki jagah exchange milta hai.
              </p>
            </details>

            <details className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
              <summary
                style={{
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Konse payment methods accepted hain?
                <span style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>+</span>
              </summary>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.7 }}>
                Cash, UPI (PhonePe, Google Pay, Paytm), Debit/Credit Cards, aur Net Banking — sab accepted hain.
              </p>
            </details>

            <details className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
              <summary
                style={{
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Kya shoes bilkul original branded hain?
                <span style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>+</span>
              </summary>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.7 }}>
                Bilkul! Hum 100% original branded products directly official channels se laate hain. Puma, Nike, Red
                Tape, One8, Hummer — sab authentic aur genuine.
              </p>
            </details>

            <details className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
              <summary
                style={{
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Kya student discount milta hai?
                <span style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>+</span>
              </summary>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.7 }}>
                Ji haan! Valid student ID card dikhane par extra 5% discount milta hai. Ye offer select products pe apply
                hoti hai — store pe aake ya WhatsApp pe poochhein.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

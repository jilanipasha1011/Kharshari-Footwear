import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function EnquiryModal() {
  const { isEnquiryOpen, enquiryProductName, closeEnquiry, showToast } = useApp();
  
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    productName: '',
    size: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Set initial product name when opened
  useEffect(() => {
    if (isEnquiryOpen) {
      setFormData({
        customerName: '',
        mobile: '',
        productName: enquiryProductName,
        size: '',
        message: '',
      });
      setIsSuccess(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isEnquiryOpen, enquiryProductName]);

  if (!isEnquiryOpen) return null;

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
    if (size) msg += `📏 Size: *${size.trim()}*\n`;
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
      closeEnquiry();
    }, 4000);
  };

  return (
    <div
      id="enquiryModal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10002,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        opacity: 1,
        pointerEvents: 'auto',
        backdropFilter: 'blur(4px)',
        transition: 'opacity 0.3s ease',
      }}
      onClick={closeEnquiry}
    >
      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '500px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
          transform: 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            background: 'var(--gradient-hero)',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Product Enquiry
            </div>
            <div style={{ color: 'white', fontSize: '1.3rem', fontWeight: 800 }}>
              Contact Us Now
            </div>
          </div>
          <button
            onClick={closeEnquiry}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
          {!isSuccess ? (
            <>
              <div className="modal-form-grid">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Aapka naam"
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
                    placeholder="Product ka naam"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Size Preference</label>
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Size 9, UK 8"
                  />
                </div>
                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                  <label className="form-label">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Color, quantity ya koi bhi additional info..."
                    style={{ minHeight: '90px' }}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', fontSize: '1rem' }}>
                💬 Send Enquiry on WhatsApp
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                Form submit karne pe WhatsApp open hoga aur message ready hoga. No spam.
              </p>
            </>
          ) : (
            <div id="formSuccess" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Enquiry Sent!</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>WhatsApp open ho raha hai...</div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

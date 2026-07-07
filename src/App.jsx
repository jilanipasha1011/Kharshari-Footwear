import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import EnquiryModal from './components/EnquiryModal';
import ZoomModal from './components/ZoomModal';
import ToastContainer from './components/Toast';

// Scroll reset helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global floating elements & scroll top handler
function LayoutShell({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waMsg = encodeURIComponent(
    'Namaste! Main Kharshari Footwear se baat karna chahta hoon.'
  );

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80svh' }}>{children}</main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp">
        <div className="floating-whatsapp-tooltip">Chat on WhatsApp</div>
        <a
          href={`https://wa.me/919528009500?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          id="floatingWhatsapp"
          title="WhatsApp Us"
        >
          💬
        </a>
      </div>

      {/* Scroll to Top */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        id="scrollTopBtn"
        onClick={scrollToTop}
        title="Back to top"
      >
        ↑
      </button>

      {/* Auxiliary Global Modals */}
      <Chatbot />
      <EnquiryModal />
      <ZoomModal />
      <ToastContainer />
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <LayoutShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </LayoutShell>
      </Router>
    </AppProvider>
  );
}

export default App;

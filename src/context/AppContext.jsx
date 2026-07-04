import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ─── THEME STATE ──────────────────────────────────────────
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kf-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kf-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // ─── WISHLIST STATE ───────────────────────────────────────
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('kf-wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleWishlist = (productId) => {
    let updated;
    const exists = wishlist.includes(productId);
    if (exists) {
      updated = wishlist.filter((id) => id !== productId);
      showToast('Removed from Wishlist', 'info');
    } else {
      updated = [...wishlist, productId];
      showToast('Added to Wishlist! ❤️', 'success');
    }
    setWishlist(updated);
    localStorage.setItem('kf-wishlist', JSON.stringify(updated));
  };

  // ─── RECENTLY VIEWED STATE ────────────────────────────────
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('kf-recent');
    return saved ? JSON.parse(saved) : [];
  });

  const addRecentlyViewed = (productId) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      const updated = [productId, ...filtered].slice(0, 6);
      localStorage.setItem('kf-recent', JSON.stringify(updated));
      return updated;
    });
  };

  // ─── ENQUIRY MODAL STATE ──────────────────────────────────
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProductName, setEnquiryProductName] = useState('');

  const openEnquiry = (productName = '') => {
    setEnquiryProductName(productName);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryProductName('');
  };

  // ─── ZOOM MODAL STATE ─────────────────────────────────────
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomImageSrc, setZoomImageSrc] = useState('');
  const [zoomImageAlt, setZoomImageAlt] = useState('');

  const openZoom = (src, alt = '') => {
    setZoomImageSrc(src);
    setZoomImageAlt(alt);
    setIsZoomOpen(true);
  };

  const closeZoom = () => {
    setIsZoomOpen(false);
    setZoomImageSrc('');
    setZoomImageAlt('');
  };

  // ─── TOAST NOTIFICATION STATE ─────────────────────────────
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        wishlist,
        toggleWishlist,
        recentlyViewed,
        addRecentlyViewed,
        isEnquiryOpen,
        enquiryProductName,
        openEnquiry,
        closeEnquiry,
        isZoomOpen,
        zoomImageSrc,
        zoomImageAlt,
        openZoom,
        closeZoom,
        toasts,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

/* ============================================================
   KHARSHARI FOOTWEAR — MAIN JS
   Navigation, Dark Mode, Scroll, Chatbot launcher
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── DARK MODE ─────────────────────────────────────────── */
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('kf-theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  const savedTheme = localStorage.getItem('kf-theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ─── NAVBAR SCROLL ─────────────────────────────────────── */
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    updateScrollTop();
  }, { passive: true });

  /* ─── HAMBURGER / MOBILE MENU ────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobileMenu?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ─── SCROLL TO TOP ─────────────────────────────────────── */
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function updateScrollTop() {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  }

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─── SCROLL REVEAL ─────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    revealObserver.observe(el);
  });

  /* ─── STAT COUNTER ANIMATION ────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  /* ─── TESTIMONIALS CAROUSEL ─────────────────────────────── */
  initCarousel();

  function initCarousel() {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    if (!track) return;

    let current = 0;
    const slides = track.children.length;
    let autoTimer = setInterval(goNext, 5000);

    function goTo(index) {
      current = (index + slides) % slides;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goNext() { goTo(current + 1); }
    function goPrev() { goTo(current - 1); }

    prevBtn?.addEventListener('click', () => { goPrev(); resetTimer(); });
    nextBtn?.addEventListener('click', () => { goNext(); resetTimer(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetTimer(); }));

    function resetTimer() {
      clearInterval(autoTimer);
      autoTimer = setInterval(goNext, 5000);
    }

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    }, { passive: true });

    goTo(0);
  }

  /* ─── ACTIVE NAV LINK ────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── TOAST SYSTEM ───────────────────────────────────────── */
  window.showToast = function(message, type = 'info', duration = 3000) {
    const icons = { success: '✅', error: '❌', info: 'ℹ️', whatsapp: '💬' };
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <span class="toast-msg">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  };

  /* ─── ZOOM MODAL ─────────────────────────────────────────── */
  const zoomModal = document.getElementById('zoomModal');
  const zoomImg = document.getElementById('zoomImg');
  const zoomClose = document.getElementById('zoomClose');

  window.openZoom = function(src, alt) {
    if (!zoomModal || !zoomImg) return;
    zoomImg.src = src;
    zoomImg.alt = alt || '';
    zoomModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  zoomClose?.addEventListener('click', closeZoom);
  zoomModal?.addEventListener('click', e => { if (e.target === zoomModal) closeZoom(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeZoom(); });

  function closeZoom() {
    zoomModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ─── SMOOTH ANCHOR SCROLL ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─── MARK CURRENT YEAR IN FOOTER ───────────────────────── */
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

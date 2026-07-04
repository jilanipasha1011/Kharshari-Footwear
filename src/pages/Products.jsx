import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';

export default function Products() {
  const { recentlyViewed } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  // ─── FILTER STATES ─────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Apply URL params on load
  useEffect(() => {
    const cat = searchParams.get('cat');
    const brand = searchParams.get('brand');

    if (cat) {
      setActiveCategory(cat);
    }
    if (brand) {
      setSelectedBrands([brand]);
    }
  }, [searchParams]);

  // ─── FILTER LOGIC ──────────────────────────────────────────
  const filteredProducts = PRODUCTS.filter((p) => {
    // 1. Category filter
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;

    // 2. Brand filter
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);

    // 3. Price filter
    const matchesPrice = p.price <= maxPrice;

    // 4. Size filter
    const matchesSize = selectedSizes.length === 0 || p.sizes.some((s) => selectedSizes.includes(s));

    // 5. Search query filter
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);

    // 6. Label filter
    const matchesLabel = !selectedLabel || p.labels.includes(selectedLabel);

    return matchesCategory && matchesBrand && matchesPrice && matchesSize && matchesSearch && matchesLabel;
  });

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleLabelToggle = (label) => {
    setSelectedLabel((prev) => (prev === label ? null : label));
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedBrands([]);
    setMaxPrice(6000);
    setSelectedSizes([]);
    setSelectedLabel(null);
    setSearchParams({}); // Clear URL params
  };

  // Get recently viewed products objects
  const recentlyViewedItems = recentlyViewed
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="page-transition">
      {/* Page Header */}
      <div style={{ background: 'var(--gradient-hero)', padding: 'calc(var(--nav-height) + 3rem) 1.5rem 3rem', marginTop: '36px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ background: 'rgba(212,160,23,0.18)', borderColor: 'rgba(212,160,23,0.4)', color: 'var(--accent-light)' }}>
            👟 Complete Collection
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: 'white', margin: '1rem 0 0.5rem' }}>
            Shop Our <span style={{ background: 'linear-gradient(135deg,#d4a017,#f0c040)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Premium</span> Collection
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
            Filter by brand, price, size & category — find your perfect pair
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         PRODUCTS PAGE CONTENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-base)', paddingTop: '2rem' }}>
        <div className="container">
          {/* Search + Mobile Filter Toggle */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="search-bar" style={{ flex: 1, minWidth: '240px', marginBottom: 0 }}>
              <span className="search-icon">🔍</span>
              <input
                type="text"
                id="productSearch"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shoes, brands..."
                aria-label="Search products"
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }} id="productCount">
                {filteredProducts.length} products found
              </div>
              <button
                id="filterToggle"
                className="btn btn-secondary btn-sm"
                onClick={() => setIsSidebarOpen(true)}
              >
                ⚙️ Filters
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs" id="categoryTabs">
            {[
              { id: 'all', label: '🛍️ All Products' },
              { id: 'mens', label: "👨 Men's Shoes" },
              { id: 'womens', label: '👩 Women\'s' },
              { id: 'kids', label: '👦 Kids' },
              { id: 'sports', label: '🏃 Sports' },
              { id: 'formal', label: '👔 Formal & Casual' },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`cat-tab ${activeCategory === tab.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Products Layout */}
          <div className="products-layout">
            {/* Filter Sidebar (Desktop and Mobile Drawer) */}
            <aside className={`filter-sidebar ${isSidebarOpen ? 'filter-open' : ''}`} id="filterSidebar">
              <div className="filter-title">
                <span>⚙️ Filters</span>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <button id="clearFilters" className="filter-clear-btn" onClick={clearAllFilters}>
                    Clear All
                  </button>
                  <button className="filter-close-btn" id="filterCloseBtn" onClick={() => setIsSidebarOpen(false)}>
                    ✕
                  </button>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="filter-group">
                <div className="filter-group-title">Brand</div>
                <div className="filter-options">
                  {[
                    { name: 'Puma' },
                    { name: 'Nike' },
                    { name: 'Red Tape' },
                    { name: 'One8' },
                    { name: 'Hummer' },
                  ].map((brand) => (
                    <label key={brand.name} className="filter-option">
                      <input
                        type="checkbox"
                        className="brand-filter"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => handleBrandChange(brand.name)}
                      />
                      {brand.emoji} {brand.name}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-group">
                <div className="filter-group-title">Max Price</div>
                <div className="price-range">
                  <input
                    type="range"
                    id="priceRange"
                    min="500"
                    max="6000"
                    step="100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                  <div className="price-range-labels">
                    <span>₹500</span>
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }} id="priceLabel">
                      ₹{maxPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Size Filter */}
              <div className="filter-group">
                <div className="filter-group-title">Size</div>
                <div className="size-filter-grid">
                  {[4, 5, 6, 7, 8, 9, 10, 11].map((size) => (
                    <button
                      key={size}
                      className={`size-chip size-filter-btn ${selectedSizes.includes(size) ? 'active' : ''}`}
                      onClick={() => handleSizeToggle(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Labels Filter */}
              <div className="filter-group">
                <div className="filter-group-title">Labels</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[
                    { id: 'new', text: '🆕 New', class: 'badge-new' },
                    { id: 'bestseller', text: '⭐ Best Seller', class: 'badge-bestseller' },
                    { id: 'trending', text: '🔥 Trending', class: 'badge-trending' },
                    { id: 'discount', text: '💰 Discount', class: 'badge-discount' },
                    { id: 'limited', text: '⚡ Limited', class: 'badge-limited' },
                    { id: 'festival', text: '🎉 Festival', class: 'badge-festival' },
                  ].map((label) => (
                    <span
                      key={label.id}
                      onClick={() => handleLabelToggle(label.id)}
                      className={`badge ${label.class} ${selectedLabel === label.id ? 'ring-2 ring-cyan-400 font-extrabold' : ''}`}
                      style={{ cursor: 'pointer', opacity: selectedLabel && selectedLabel !== label.id ? 0.4 : 1 }}
                    >
                      {label.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div
                style={{
                  background: 'var(--gradient-hero)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  textAlign: 'center',
                  color: 'white',
                  marginTop: '0.5rem',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💬</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Can't find your size?</div>
                <div style={{ fontSize: '0.78rem', opacity: 0.75, marginBottom: '1rem' }}>
                  WhatsApp pe puchein — hum arrange kar sakte hain!
                </div>
                <a
                  href="https://wa.me/919639890966?text=Mujhe%20ek%20specific%20size%20chahiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ width: '100%', fontSize: '0.8rem' }}
                >
                  WhatsApp Now
                </a>
              </div>
            </aside>

            {/* Products Grid */}
            <div>
              {filteredProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👟</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>No products found</div>
                  <div style={{ fontSize: '0.9rem' }}>Try adjusting your filters or search query</div>
                </div>
              ) : (
                <div id="productsGrid" className="grid-auto">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Backdrop for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="filter-backdrop active"
          id="filterBackdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Recently Viewed shelf */}
      {recentlyViewedItems.length > 0 && (
        <div id="recentlyViewedSection" className="recently-viewed" style={{ display: 'block' }}>
          <div className="container">
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              🕐 Recently Viewed
            </div>
            <div className="recently-viewed-scroll" id="recentlyViewedScroll">
              {recentlyViewedItems.map((p) => (
                <div
                  key={p.id}
                  style={{ flexShrink: 0, width: '200px', cursor: 'pointer' }}
                  className="card"
                  onClick={() => setIsSidebarOpen(false)} // simple click interaction
                >
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '12px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>{p.brand}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
                      ₹{p.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

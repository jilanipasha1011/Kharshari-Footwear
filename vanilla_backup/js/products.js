/* ============================================================
   KHARSHARI FOOTWEAR — PRODUCTS JS
   Filtering, Search, Wishlist, Recently Viewed
   ============================================================ */

// ─── PRODUCT DATA ─────────────────────────────────────────────
const PRODUCTS = [
  // Men's Shoes
  {
    id: 1, brand: 'Puma', name: 'Puma Velocity Nitro Runner', category: 'mens',
    price: 3499, mrp: 4999, discount: 30, image: 'assets/images/mens_shoes.png',
    sizes: [6,7,8,9,10,11], colors: ['Black','White','Red'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 12
  },
  {
    id: 2, brand: 'Nike', name: 'Nike Air Max Structure', category: 'mens',
    price: 4299, mrp: 5999, discount: 28, image: 'assets/images/mens_shoes.png',
    sizes: [7,8,9,10,11], colors: ['Blue','Black','White'],
    labels: ['new'], stock: 'In Stock', stockCount: 8
  },
  {
    id: 3, brand: 'Red Tape', name: 'Red Tape Premium Oxford', category: 'mens',
    price: 2199, mrp: 2999, discount: 27, image: 'assets/images/formal_shoes.png',
    sizes: [6,7,8,9,10], colors: ['Black','Brown','Tan'],
    labels: ['trending'], stock: 'In Stock', stockCount: 15
  },
  {
    id: 4, brand: 'One8', name: 'One8 Casual Sport Sneaker', category: 'mens',
    price: 2799, mrp: 3499, discount: 20, image: 'assets/images/mens_shoes.png',
    sizes: [7,8,9,10,11], colors: ['White','Navy','Grey'],
    labels: ['new', 'trending'], stock: 'Low Stock', stockCount: 3
  },
  {
    id: 5, brand: 'Hummer', name: 'Hummer Trail Boot', category: 'mens',
    price: 3999, mrp: 5499, discount: 27, image: 'assets/images/formal_shoes.png',
    sizes: [7,8,9,10,11], colors: ['Brown','Black'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 10
  },
  // Women's Shoes
  {
    id: 6, brand: 'Puma', name: 'Puma Cali Star Sandal', category: 'womens',
    price: 1999, mrp: 2799, discount: 29, image: 'assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8], colors: ['Rose Gold','White','Black'],
    labels: ['new', 'festival'], stock: 'In Stock', stockCount: 20
  },
  {
    id: 7, brand: 'Nike', name: 'Nike Benassi Just Do It Slipper', category: 'womens',
    price: 1299, mrp: 1799, discount: 28, image: 'assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8,9], colors: ['Pink','Black','White'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 25
  },
  {
    id: 8, brand: 'Red Tape', name: 'Red Tape Wedge Heel Sandal', category: 'womens',
    price: 1799, mrp: 2499, discount: 28, image: 'assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8], colors: ['Nude','Gold','Silver'],
    labels: ['trending', 'festival'], stock: 'Low Stock', stockCount: 4
  },
  {
    id: 9, brand: 'One8', name: 'One8 Comfort Flat Slipper', category: 'womens',
    price: 899, mrp: 1299, discount: 31, image: 'assets/images/womens_sandals.png',
    sizes: [4,5,6,7,8,9], colors: ['Peach','Blue','Green'],
    labels: ['discount'], stock: 'In Stock', stockCount: 30
  },
  // Kids
  {
    id: 10, brand: 'Puma', name: 'Puma Fun Racer Kids Sneaker', category: 'kids',
    price: 1499, mrp: 1999, discount: 25, image: 'assets/images/kids_shoes.png',
    sizes: [1,2,3,4,5,6], colors: ['Red','Blue','Yellow'],
    labels: ['new', 'bestseller'], stock: 'In Stock', stockCount: 18
  },
  {
    id: 11, brand: 'Nike', name: 'Nike Revolution 6 Kids', category: 'kids',
    price: 1799, mrp: 2499, discount: 28, image: 'assets/images/kids_shoes.png',
    sizes: [2,3,4,5,6], colors: ['Green','Pink','Black'],
    labels: ['trending'], stock: 'In Stock', stockCount: 14
  },
  {
    id: 12, brand: 'Hummer', name: 'Hummer School Comfort Shoe', category: 'kids',
    price: 799, mrp: 1199, discount: 33, image: 'assets/images/kids_shoes.png',
    sizes: [1,2,3,4,5,6,7], colors: ['Black','Brown'],
    labels: ['discount'], stock: 'In Stock', stockCount: 22
  },
  // Sports
  {
    id: 13, brand: 'Puma', name: 'Puma Resolve Street Runner', category: 'sports',
    price: 3799, mrp: 4999, discount: 24, image: 'assets/images/sports_shoes.png',
    sizes: [6,7,8,9,10,11], colors: ['Black','Red','Blue'],
    labels: ['new', 'trending'], stock: 'In Stock', stockCount: 9
  },
  {
    id: 14, brand: 'Nike', name: 'Nike Flex Runner Training', category: 'sports',
    price: 4499, mrp: 5999, discount: 25, image: 'assets/images/sports_shoes.png',
    sizes: [7,8,9,10,11], colors: ['White','Black','Neon Yellow'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 6
  },
  {
    id: 15, brand: 'One8', name: 'One8 Pro Running Light', category: 'sports',
    price: 2599, mrp: 3299, discount: 21, image: 'assets/images/sports_shoes.png',
    sizes: [6,7,8,9,10], colors: ['Orange','Grey','Blue'],
    labels: ['new'], stock: 'Low Stock', stockCount: 2
  },
  // Formal & Casual
  {
    id: 16, brand: 'Red Tape', name: 'Red Tape Classic Derby', category: 'formal',
    price: 2499, mrp: 3499, discount: 29, image: 'assets/images/formal_shoes.png',
    sizes: [6,7,8,9,10,11], colors: ['Black','Brown'],
    labels: ['bestseller'], stock: 'In Stock', stockCount: 16
  },
  {
    id: 17, brand: 'Hummer', name: 'Hummer Premium Loafer', category: 'formal',
    price: 1999, mrp: 2799, discount: 29, image: 'assets/images/formal_shoes.png',
    sizes: [6,7,8,9,10], colors: ['Black','Navy','Brown'],
    labels: ['trending'], stock: 'In Stock', stockCount: 11
  },
  {
    id: 18, brand: 'One8', name: 'One8 Casual Slip-On', category: 'formal',
    price: 1799, mrp: 2299, discount: 22, image: 'assets/images/mens_shoes.png',
    sizes: [7,8,9,10,11], colors: ['Olive','Grey','Black'],
    labels: ['new', 'discount'], stock: 'In Stock', stockCount: 13
  },
];

// ─── STATE ────────────────────────────────────────────────────
let activeCategory = 'all';
let activeFilters = { brands: [], priceMax: 6000, sizes: [] };
let searchQuery = '';
let wishlist = JSON.parse(localStorage.getItem('kf-wishlist') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('kf-recent') || '[]');

// ─── LABEL CONFIG ─────────────────────────────────────────────
const LABELS = {
  new:        { text: '🆕 New Arrival',    class: 'badge-new' },
  bestseller: { text: '⭐ Best Seller',    class: 'badge-bestseller' },
  trending:   { text: '🔥 Trending',       class: 'badge-trending' },
  discount:   { text: '💰 Flat Discount',  class: 'badge-discount' },
  limited:    { text: '⚡ Limited Stock',  class: 'badge-limited' },
  festival:   { text: '🎉 Festival Offer', class: 'badge-festival' },
};

// ─── RENDER PRODUCTS ──────────────────────────────────────────
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchBrand = activeFilters.brands.length === 0 || activeFilters.brands.includes(p.brand);
    const matchPrice = p.price <= activeFilters.priceMax;
    const matchSize = activeFilters.sizes.length === 0 || p.sizes.some(s => activeFilters.sizes.includes(s));
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    return matchCat && matchBrand && matchPrice && matchSize && matchSearch;
  });
}

function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  if (!grid) return;

  if (count) count.textContent = `${products.length} products found`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:4rem 1rem;color:var(--text-muted)">
        <div style="font-size:3rem;margin-bottom:1rem">👟</div>
        <div style="font-size:1.2rem;font-weight:700;margin-bottom:0.5rem">No products found</div>
        <div style="font-size:0.9rem">Try adjusting your filters or search query</div>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(p => buildProductCard(p)).join('');
  attachCardEvents();
}

function buildProductCard(p) {
  const isWishlisted = wishlist.includes(p.id);
  const labelHtml = p.labels.slice(0, 2).map(l =>
    `<span class="badge ${LABELS[l]?.class || ''}">${LABELS[l]?.text || l}</span>`
  ).join('');

  const stockClass = p.stockCount <= 5 ? 'low' : '';
  const stockText = p.stockCount <= 5 ? `⚡ Only ${p.stockCount} left!` : `✓ ${p.stock}`;
  const sizesHtml = p.sizes.slice(0, 5).map(s => `<span class="size-chip">${s}</span>`).join('');

  const waMsg = encodeURIComponent(
    `Namaste! Mujhe yeh product enquire karna hai:\n\n👟 *${p.name}*\n🏷️ Brand: ${p.brand}\n💰 Price: ₹${p.price.toLocaleString('en-IN')}\n\nKya yeh available hai? Size aur delivery details bata sakte hain?`
  );

  return `
    <div class="card product-card reveal" data-id="${p.id}" onclick="viewProduct(${p.id})">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
          onerror="this.style.background='var(--bg-elevated)'"
          onclick="event.stopPropagation(); openZoom('${p.image}', '${p.name}')">
        <div class="product-labels">${labelHtml}</div>
        <div class="product-actions">
          <button class="product-action-btn wishlist-btn ${isWishlisted ? 'active' : ''}"
            data-id="${p.id}" onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)"
            title="Add to Wishlist">${isWishlisted ? '❤️' : '🤍'}</button>
          <button class="product-action-btn" onclick="event.stopPropagation(); openZoom('${p.image}', '${p.name}')"
            title="Zoom">🔍</button>
          <a class="product-action-btn" href="https://wa.me/919876543210?text=${waMsg}"
            target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Share on WhatsApp">📤</a>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sizes">${sizesHtml}${p.sizes.length > 5 ? '<span class="size-chip" style="color:var(--text-muted)">+${p.sizes.length-5}</span>' : ''}</div>
        <div class="product-pricing">
          <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="product-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
          <span class="product-discount">${p.discount}% OFF</span>
        </div>
        <div class="product-stock ${stockClass}">${stockText}</div>
        <div class="product-cta">
          <button class="enquire-btn" onclick="event.stopPropagation(); openEnquiry(${p.id})">Enquire Now</button>
          <a class="whatsapp-quick-btn" href="https://wa.me/919876543210?text=${waMsg}"
            target="_blank" rel="noopener" onclick="event.stopPropagation()" title="WhatsApp">💬</a>
        </div>
      </div>
    </div>`;
}

function attachCardEvents() {
  // Re-observe new cards for scroll reveal
  document.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
    el.setAttribute('data-observed', '1');
    setTimeout(() => el.classList.add('visible'), 50);
  });
}

// ─── WISHLIST ─────────────────────────────────────────────────
window.toggleWishlist = function(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    if (btn) { btn.textContent = '❤️'; btn.classList.add('active'); }
    showToast('Added to Wishlist! ❤️', 'success');
  } else {
    wishlist.splice(idx, 1);
    if (btn) { btn.textContent = '🤍'; btn.classList.remove('active'); }
    showToast('Removed from Wishlist', 'info');
  }
  localStorage.setItem('kf-wishlist', JSON.stringify(wishlist));
};

// ─── RECENTLY VIEWED ──────────────────────────────────────────
window.viewProduct = function(id) {
  // Track recently viewed
  recentlyViewed = [id, ...recentlyViewed.filter(i => i !== id)].slice(0, 6);
  localStorage.setItem('kf-recent', JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
};

function renderRecentlyViewed() {
  const container = document.getElementById('recentlyViewedScroll');
  if (!container || recentlyViewed.length === 0) return;

  const section = document.getElementById('recentlyViewedSection');
  if (section) section.style.display = 'block';

  const items = recentlyViewed
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  container.innerHTML = items.map(p => `
    <div style="flex-shrink:0;width:200px;cursor:pointer;" class="card" onclick="viewProduct(${p.id})">
      <img src="${p.image}" alt="${p.name}" style="width:100%;height:120px;object-fit:cover;">
      <div style="padding:12px;">
        <div style="font-size:0.75rem;color:var(--accent);font-weight:700;">${p.brand}</div>
        <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary);line-height:1.3;">${p.name}</div>
        <div style="font-size:0.9rem;font-weight:800;color:var(--text-primary);margin-top:4px;">₹${p.price.toLocaleString('en-IN')}</div>
      </div>
    </div>`).join('');
}

// ─── ENQUIRY MODAL ────────────────────────────────────────────
window.openEnquiry = function(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;

  const productField = document.getElementById('enqProductName');
  const modal = document.getElementById('enquiryModal');
  if (productField) productField.value = p.name;
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

// ─── FILTERS INIT ─────────────────────────────────────────────
function initFilters() {
  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.dataset.cat;
      renderProducts(getFilteredProducts());
    });
  });

  // Brand checkboxes
  document.querySelectorAll('.brand-filter').forEach(cb => {
    cb.addEventListener('change', function() {
      if (this.checked) {
        activeFilters.brands.push(this.value);
      } else {
        activeFilters.brands = activeFilters.brands.filter(b => b !== this.value);
      }
      renderProducts(getFilteredProducts());
    });
  });

  // Price range
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabel');
  priceRange?.addEventListener('input', function() {
    activeFilters.priceMax = parseInt(this.value);
    if (priceLabel) priceLabel.textContent = `₹${parseInt(this.value).toLocaleString('en-IN')}`;
    renderProducts(getFilteredProducts());
  });

  // Size filter
  document.querySelectorAll('.size-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const size = parseInt(this.dataset.size);
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        activeFilters.sizes.push(size);
      } else {
        activeFilters.sizes = activeFilters.sizes.filter(s => s !== size);
      }
      renderProducts(getFilteredProducts());
    });
  });

  // Search
  const searchInput = document.getElementById('productSearch');
  searchInput?.addEventListener('input', debounce(function() {
    searchQuery = this.value;
    renderProducts(getFilteredProducts());
  }, 250));

  // Clear filters
  document.getElementById('clearFilters')?.addEventListener('click', () => {
    activeFilters = { brands: [], priceMax: 6000, sizes: [] };
    activeCategory = 'all';
    searchQuery = '';
    document.querySelectorAll('.brand-filter').forEach(cb => cb.checked = false);
    document.querySelectorAll('.size-filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.cat-tab[data-cat="all"]')?.classList.add('active');
    if (document.getElementById('productSearch')) document.getElementById('productSearch').value = '';
    if (document.getElementById('priceRange')) document.getElementById('priceRange').value = 6000;
    if (document.getElementById('priceLabel')) document.getElementById('priceLabel').textContent = '₹6,000';
    renderProducts(getFilteredProducts());
    showToast('Filters cleared', 'info');
  });

  // Mobile filter toggle
  const filterSidebar = document.querySelector('.filter-sidebar');
  const filterBackdrop = document.getElementById('filterBackdrop');

  function openFilters() {
    filterSidebar?.classList.add('filter-open');
    filterBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeFilters() {
    filterSidebar?.classList.remove('filter-open');
    filterBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('filterToggle')?.addEventListener('click', openFilters);
  document.getElementById('filterCloseBtn')?.addEventListener('click', closeFilters);
  filterBackdrop?.addEventListener('click', closeFilters);
}

// ─── DEBOUNCE ─────────────────────────────────────────────────
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(getFilteredProducts());
  initFilters();
  renderRecentlyViewed();
});

// ─── EXPORT FOR HOME PAGE FEATURED ───────────────────────────
window.PRODUCTS = PRODUCTS;
window.buildProductCard = buildProductCard;
window.renderProductsToGrid = function(gridId, ids) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const items = ids ? PRODUCTS.filter(p => ids.includes(p.id)) : PRODUCTS.slice(0, 8);
  grid.innerHTML = items.map(p => buildProductCard(p)).join('');
  setTimeout(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 100);
};

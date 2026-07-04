import React from 'react';
import { useApp } from '../context/AppContext';
import { LABELS } from '../data/products';

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, openZoom, openEnquiry, addRecentlyViewed } = useApp();

  const isWishlisted = wishlist.includes(product.id);

  const labelHtml = product.labels.slice(0, 2).map((l) => {
    const labelInfo = LABELS[l];
    if (!labelInfo) return null;
    return (
      <span key={l} className={`badge ${labelInfo.class}`}>
        {labelInfo.text}
      </span>
    );
  });

  const isLowStock = product.stockCount <= 5;
  const stockClass = isLowStock ? 'low' : '';
  const stockText = isLowStock ? `⚡ Only ${product.stockCount} left!` : `✓ ${product.stock}`;

  const waMsg = encodeURIComponent(
    `Namaste! Mujhe yeh product enquire karna hai:\n\n👟 *${product.name}*\n🏷️ Brand: ${product.brand}\n💰 Price: ₹${product.price.toLocaleString('en-IN')}\n\nKya yeh available hai? Size aur delivery details bata sakte hain?`
  );

  const handleCardClick = () => {
    addRecentlyViewed(product.id);
  };

  return (
    <div
      className="card product-card reveal visible"
      onClick={handleCardClick}
    >
      <div className="product-img">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            openZoom(product.image, product.name);
          }}
        />
        <div className="product-labels">{labelHtml}</div>
        <div className="product-actions">
          <button
            className={`product-action-btn wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            {isWishlisted ? '❤️' : '🤍'}
          </button>
          <button
            className="product-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              openZoom(product.image, product.name);
            }}
            title="Zoom"
          >
            🔍
          </button>
          <a
            className="product-action-btn"
            href={`https://wa.me/919876543210?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="Share on WhatsApp"
          >
            📤
          </a>
        </div>
      </div>
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-sizes">
          {product.sizes.slice(0, 5).map((size) => (
            <span key={size} className="size-chip">
              {size}
            </span>
          ))}
          {product.sizes.length > 5 && (
            <span className="size-chip" style={{ color: 'var(--text-muted)' }}>
              +{product.sizes.length - 5}
            </span>
          )}
        </div>
        <div className="product-pricing">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="product-mrp">₹{product.mrp.toLocaleString('en-IN')}</span>
          <span className="product-discount">{product.discount}% OFF</span>
        </div>
        <div className={`product-stock ${stockClass}`}>{stockText}</div>
        <div className="product-cta">
          <button
            className="enquire-btn"
            onClick={(e) => {
              e.stopPropagation();
              openEnquiry(product.name);
            }}
          >
            Enquire Now
          </button>
          <a
            className="whatsapp-quick-btn"
            href={`https://wa.me/919876543210?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="WhatsApp"
          >
            💬
          </a>
        </div>
      </div>
    </div>
  );
}

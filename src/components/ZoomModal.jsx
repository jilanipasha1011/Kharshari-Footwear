import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function ZoomModal() {
  const { isZoomOpen, zoomImageSrc, zoomImageAlt, closeZoom } = useApp();

  // Close Zoom on escape key
  useEffect(() => {
    if (!isZoomOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeZoom();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomOpen, closeZoom]);

  if (!isZoomOpen) return null;

  return (
    <div className="zoom-modal open" id="zoomModal" onClick={closeZoom}>
      <button className="zoom-close" id="zoomClose" onClick={closeZoom}>
        ✕
      </button>
      <img
        src={zoomImageSrc}
        alt={zoomImageAlt}
        className="zoom-modal-img"
        id="zoomImg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

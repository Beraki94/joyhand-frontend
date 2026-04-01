"use client";

import { useState } from "react";
import { PiPlayCircle, PiX } from "react-icons/pi";

export default function ProductVideoModal({ videoId }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!videoId) return null;

  return (
    <>
      <div className="product-details__video-placeholder" onClick={() => setIsOpen(true)}>
        <div className="product-details__video-icon">
          <PiPlayCircle size={48} />
        </div>
        <p className="product-details__video-text">Watch product video</p>
      </div>

      {isOpen && (
        <div className="video-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" onClick={() => setIsOpen(false)} aria-label="Close video">
              <PiX size={24} />
            </button>
            <div className="video-modal__wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Product video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
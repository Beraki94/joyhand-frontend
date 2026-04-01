"use client";

import { useState } from "react";
import Image from "next/image";
import { PiPlayCircle } from "react-icons/pi";

export default function ProductVideo({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="product-details__video-container">
      {!isPlaying ? (
        <div
          className="product-details__video-thumbnail"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt="Product video thumbnail"
            fill
            className="product-details__video-thumb-img"
            unoptimized
          />
          <div className="product-details__video-play">
            <PiPlayCircle size={48} />
          </div>
        </div>
      ) : (
        <div className="product-details__video-embed">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Product video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
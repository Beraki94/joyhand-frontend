"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRight, PiFactory } from "react-icons/pi";
import "./EnergyPlatforms.css";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    title: "Storage Battery Systems",
    slug: "storage-batteries",
    image: "/homeImg/energyPlatformImage01.jpg",
    desc: "Scalable LFP battery modules for residential and commercial energy storage. 6000+ cycle life.",
    sourceNote: "In‑house Production"
  },
  {
    id: 2,
    title: "Solar Inverters",
    slug: "solar-inverters",
    image: "/homeImg/energyPlatformImage002.jpg",
    desc: "High-efficiency hybrid and off-grid pure sine wave inverters for seamless power conversion.",
    sourceNote: "Tier‑1 Components"
  },
  {
    id: 3,
    title: "Portable Power Stations",
    slug: "portable-power-stations",
    image: "/homeImg/energyPlatformImage003.jpg",
    desc: "Rugged, high-capacity power stations for outdoor, emergency, and off-grid applications.",
    sourceNote: "OEM/ODM Ready"
  },
  {
    id: 4,
    title: "High-Capacity Power Banks",
    slug: "power-banks",
    image: "/homeImg/businessModelImage2.jpg", /* Placeholder image from existing assets */
    desc: "Ultra-fast charging power banks with advanced lithium-polymer technology for mobile superiority.",
    sourceNote: "Consumer Tech"
  },
  {
    id: 5,
    title: "Electric Mobility",
    slug: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    desc: "Sustainable electric motorcycles, scooters, and reliable E-mobility powertrains.",
    sourceNote: "Urban Logistics"
  },
  {
    id: 6,
    title: "EV Charging Infrastructure",
    slug: "ev-chargers",
    image: "/homeImg/businessModelImage001.jpg", /* Placeholder image from existing assets */
    desc: "Smart AC and DC fast chargers for residential and commercial electric vehicle networks.",
    sourceNote: "Smart Grids"
  },
];

const EnergyPlatforms = () => {
  const sectionRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("energy-platforms--is-visible");
          // observer.disconnect(); Keep observing for scroll re-entry if desired, but we will disconnect to prevent re-triggering
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="energy-platforms" aria-labelledby="platforms-heading">
      
      <div className="energy-platforms__grid">
        {FEATURED_CATEGORIES.map((platform, index) => (
          <article
            key={platform.id}
            className="platform-card"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <Link href={`/products/solutions/${platform.slug}`} className="platform-card__link" aria-label={`View details for ${platform.title}`}>
              <div className="platform-card__image-wrapper">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="platform-card__image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [platform.id]: true }))}
                />
                <div className="platform-card__overlay"></div>
              </div>

              <div className="platform-card__content">
                <div className="platform-card__center-group">
                  <h3 className="platform-card__title">{platform.title}</h3>
                  
                  {/* These appear only on hover */}
                  <div className="platform-card__reveal-content">
                    <p className="platform-card__description">{platform.desc}</p>
                    <div className="platform-card__button-container">
                      <span className="btn btn--primary btn--sm">
                        Explore <PiArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="platform-card__source-tag">
                   <PiFactory size={14} aria-hidden="true" />
                   <span>{platform.sourceNote}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EnergyPlatforms;
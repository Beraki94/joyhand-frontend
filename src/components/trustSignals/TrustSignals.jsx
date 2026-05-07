"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";
import { partners } from "../../data";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./TrustSignals.css";

const TrustSignals = () => {
  const scrollingPartners = [...partners, ...partners];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`trust ${isVisible ? 'is-visible' : ''}`}>
      <div className="trust__energy-glow"></div>
      <div className="trust__energy-waves"></div>

      <div className="container trust__container">
        {/* Replaced manual header with Reusable SectionHeader */}
        <SectionHeader 
          badge="Global Trust"
          title="Partner with a Manufacturer You Can Rely On"
          subtitle="ISO 9001:2025 certified facility. Every order backed by our engineering team and on‑site quality control."
          align="center"
          className="trust__section-header"
        />

        {/* Partner logos – continuous marquee */}
        <div className="trust__marquee">
          <div className="trust__track">
            {scrollingPartners.map((partner, idx) => (
              <div key={`${partner.id}-${idx}`} className="trust__logo-item">
                <div className="trust__logo-wrapper">
                  <Image
                    src={partner.logo}
                    alt={partner.alt || "Partner logo"}
                    fill
                    sizes="120px"
                    className="trust__logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="trust__logos-note">*and many more across 20+ countries</p>

        {/* CTA */}
        <div className="trust__footer">
          {/* Desktop Button */}
          <a href="/about-us" className="btn btn--outline trust__btn-desktop">
            Discover our manufacturing process <PiArrowRight />
          </a>
          {/* Mobile Inline Link */}
          <a href="/about-us" className="trust__link-mobile">
            Discover our manufacturing process <PiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
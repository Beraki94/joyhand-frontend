"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowRight, PiMouseSimple, PiLightningFill, PiFactory, PiCertificate, PiUsers } from "react-icons/pi";
import PopUpModal from "../contactForm/PopUpModal";
import "./Hero.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Lazy load video for better LCP
  useEffect(() => {
    const loadVideo = () => {
      if (videoRef.current && !videoLoaded) {
        videoRef.current.load();
        setVideoLoaded(true);
      }
    };
    const timer = setTimeout(loadVideo, 1500);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  return (
    <>
      <section className="hero">
        {/* Cinematic Video Background */}
        <div className="hero__background">
          <div className="hero__static-bg" aria-hidden="true">
            <Image
              src="/videos/heroImg/hero-poster.png"
              alt="Manufacturing Facility"
              fill
              priority
              sizes="100vw"
              className="hero__static-img"
            />
          </div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className={`hero__video ${videoLoaded ? "hero__video--loaded" : ""}`}
            poster="/videos/heroImg/hero-poster.png"
          >
            <source src="/videos/heroImg/joyhand-hero-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text contrast */}
          <div className="hero__overlay"></div>
        </div>

        <div className="container hero__container">
          <div className="hero__grid">
            
            {/* Left Content Column */}
            <div className="hero__content">
              <div className="hero__badge-wrapper">
                <span className="hero__badge">
                  <PiLightningFill className="hero__badge-icon" />
                  Direct OEM/ODM Manufacturer
                </span>
              </div>

              <h1 className="hero__title">
                <span className="hero__title-line">Custom Energy &</span>
                <span className="hero__title-line hero__title-line--highlight">
                  E‑Mobility Solutions
                </span>
              </h1>

              <p className="hero__desc">
                Source directly from the factory. We deliver premium{" "}
                <strong>lithium‑ion batteries</strong>, <strong>solar inverters</strong>, and{" "}
                <strong>electric motorcycles</strong> tailored to your global distribution needs.
              </p>

              <div className="hero__actions">
                <Link href="/products" className="btn btn--primary">
                  Explore Products <PiArrowRight />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn--outline-light"
                >
                  Request a Quote
                </button>
              </div>

              <div className="hero__trust">
                <div className="hero__trust-dot"></div>
                <span>ISO 9001, CE, UL, UN38.3 Certified Factory</span>
              </div>
            </div>

            {/* Right Stats Column (Glassmorphism Bento Box) */}
            <div className="hero__stats-grid">
              <div className="hero__stat-card hero__stat-card--1">
                <div className="hero__stat-icon-wrapper">
                  <PiFactory className="hero__stat-icon" />
                </div>
                <div className="hero__stat-info">
                  <span className="hero__stat-number">50,000+</span>
                  <span className="hero__stat-label">m² Production Facility</span>
                </div>
              </div>
              
              <div className="hero__stat-card hero__stat-card--2">
                <div className="hero__stat-icon-wrapper">
                  <PiCertificate className="hero__stat-icon" />
                </div>
                <div className="hero__stat-info">
                  <span className="hero__stat-number">27+</span>
                  <span className="hero__stat-label">Years of Excellence</span>
                </div>
              </div>
              
              <div className="hero__stat-card hero__stat-card--3">
                <div className="hero__stat-icon-wrapper">
                  <PiUsers className="hero__stat-icon" />
                </div>
                <div className="hero__stat-info">
                  <span className="hero__stat-number">30+</span>
                  <span className="hero__stat-label">Dedicated R&D Engineers</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Mouse Scroll Indicator */}
        <div className="hero__scroll">
          <PiMouseSimple className="hero__scroll-icon" />
          <span className="hero__scroll-text">Scroll to explore</span>
        </div>
      </section>

      <PopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode="quote" />
    </>
  );
}
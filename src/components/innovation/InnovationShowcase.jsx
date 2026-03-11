"use client";

import React, { useEffect, useRef } from "react";
import { PiBuildings, PiLightning, PiFlask, PiLightbulb } from "react-icons/pi";
import "./InnovationShowcase.css";

const InnovationShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      },
      { threshold: 0.15 } // Trigger earlier for mobile
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const pillars = [
    {
      title: "ODM Development",
      icon: <PiFlask />,
      content: "Custom hardware development and software integration for global energy brands."
    },
    {
      title: "OEM Production",
      icon: <PiBuildings />,
      content: "Scalable high-volume manufacturing with rigorous ISO/TS certified quality control."
    },
    {
      title: "Engineering Labs",
      icon: <PiLightning />,
      content: "Dedicated R&D teams focused on energy density and power management optimization."
    },
    {
      title: "Quality Control",
      icon: <PiLightbulb />,
      content: "End-to-end testing protocols ensuring international safety and performance standards."
    }
  ];

  return (
    <section ref={sectionRef} className="innovation-section">
      <div className="innovation-section__hero">
        <video autoPlay loop muted playsInline className="innovation-section__video">
          <source src="/videos/heroImg/factory3.mp4" type="video/mp4" />
        </video>
        <div className="innovation-section__overlay">
          <div className="container innovation-section__hero-content">
            <h2 className="innovation-section__title">Advanced Manufacturing</h2>
            <p className="innovation-section__subtitle">
              Pioneering next-generation energy storage through automated gigafactories and scientific excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="innovation-section__container container">
        <div className="innovation-grid">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="innovation-card"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="innovation-card__main">
                <div className="innovation-card__icon">{item.icon}</div>
                <h4 className="innovation-card__title">{item.title}</h4>
              </div>

              {/* CONTENT: Hidden until Hover/Tap */}
              <div className="innovation-card__hover-content">
                <p className="innovation-card__description">{item.content}</p>
              </div>

              {/* LINK: Hidden on Hover/Tap */}
              <div className="innovation-card__link">
                Tech Specs <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;

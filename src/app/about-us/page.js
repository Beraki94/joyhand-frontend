"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  PiLinkedinLogo,
  PiArrowRight,
  PiCheckCircleFill,
  PiGear,
  PiShieldCheck,
  PiGlobe,
  PiFactory,
  PiChartLineUp,
  PiQuotesFill,
  PiLightning,
} from "react-icons/pi";

import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import SuperRing from "@/components/superRing/SuperRing";
import PopUpModal from "@/components/contactForm/PopUpModal";

import "./about.css";

export default function AboutPage() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("quote"); // "quote" or "consultation"

  const openModal = (mode = "quote") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const team = [
    {
      name: "Winper Du",
      title: "CEO & Founder",
      image: "/aboutImg/aboutteamimg1.png",
      bio: "Winper leads JoyHand's manufacturing strategy, driving vertical integration and sustainable scaling for global energy markets."
    },
    {
      name: "Engineer Li",
      title: "Chief Engineer Officer",
      image: "/aboutImg/aboutteamimg2.png",
      bio: "Li oversees our 30+ in-house engineers, ensuring every product meets international safety certifications and performance benchmarks."
    }
  ];

  const values = [
    {
      icon: <PiFactory size={32} />,
      title: "Direct Manufacturing",
      description: "We own our assembly lines. No middlemen – you get factory-direct pricing, quality oversight, and full traceability."
    },
    {
      icon: <PiGear size={32} />,
      title: "In-House R&D",
      description: "Our engineers develop proprietary BMS firmware, thermal management, and cell-level safety systems for every LFP pack."
    },
    {
      icon: <PiShieldCheck size={32} />,
      title: "Certified QC Lab",
      description: "On-site testing facility conducts thermal shock, vibration, and 72-hour aging tests on 100% of our production batches."
    },
    {
      icon: <PiGlobe size={32} />,
      title: "Global Export Mastery",
      description: "We manage complex international logistics for lithium batteries and EVs, delivering to over 12 countries with full customs compliance."
    }
  ];

  const energySectors = [
    {
      title: "LFP Battery Manufacturing",
      desc: "We produce high-performance Lithium Iron Phosphate storage using Grade-A prismatic cells. Our batteries power residential, commercial, and industrial backup systems.",
      features: ["Grade-A Prismatic Cells", "6000+ Cycle Lifespan", "Automotive-Grade Assembly"],
      img: "/homeImg/energyPlatformImage01.jpg",
      tag: "Energy Storage"
    },
    {
      title: "Solar Inverter Production",
      desc: "Our pure sine wave inverters are built with Tier-1 components for superior grid-tie and off-grid reliability. 98% peak efficiency and smart grid switching.",
      features: ["98% Peak Efficiency", "Pure Sine Wave Tech", "Smart Grid Switching"],
      img: "/homeImg/energyPlatformImage002.jpg",
      tag: "Power Electronics"
    },
    {
      title: "Portable Power Stations",
      desc: "Production-ready portable energy solutions for global brands. Engineered with fast-charge technology and multi-region outlet configurations for reliable off-grid power.",
      features: ["Fast-Charge Capability", "OEM/ODM Branding", "Multi-Output Design"],
      img: "/homeImg/energyPlatformImage003.jpg",
      tag: "Portable Energy"
    },
    {
      title: "High-Capacity Power Banks",
      desc: "Ultra-fast charging mobile power solutions featuring advanced lithium-polymer cells. Designed for durability and universal compatibility with modern devices.",
      features: ["PD Fast Charging", "High Energy Density", "Smart Protection IC"],
      img: "/homeImg/businessModelImage2.jpg",
      tag: "Consumer Tech"
    },
    {
      title: "E-Mobility Engineering",
      desc: "Specialized assembly of electric motorcycles and scooters. Reinforced chassis engineering and weatherproof motor controllers designed for intense commercial and urban logistics.",
      features: ["Reinforced EV Frames", "IP65 Weatherproof Motors", "Custom Motor Controllers"],
      img: "/homeImg/energyPlatformImage04.jpg",
      tag: "Electric Mobility"
    },
    {
      title: "EV Charging Infrastructure",
      desc: "Smart AC and DC fast chargers engineered for rapid deployment. Featuring universal compatibility, weather resistance, and intelligent load balancing for smart grids.",
      features: ["AC & DC Fast Charging", "Intelligent Load Balancing", "OCPP Compliant"],
      img: "/homeImg/businessModelImage001.jpg",
      tag: "Smart Grids"
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "The Production Roots",
      description: "Founded as a specialized facility for electric vehicle components and chassis engineering.",
      icon: <PiFactory />
    },
    {
      year: "2010",
      title: "E-Mobility Leadership",
      description: "Reached 5,000+ electric motorcycles produced annually for international export.",
      icon: <PiChartLineUp />
    },
    {
      year: "2018",
      title: "Energy Storage Pivot",
      description: "Integrated our battery expertise into residential LFP storage and high-efficiency inverter lines.",
      icon: <PiLightning />
    },
    {
      year: "2026",
      title: "JoyHand Global",
      description: "Operating a fully integrated manufacturing hub for next-generation renewable energy infrastructure.",
      icon: <PiShieldCheck />
    }
  ];

  const testimonials = [
    {
      quote: "Joyhand helped us customize the BMS for our specific climate. Their manufacturing transparency is a massive competitive advantage.",
      author: "Ahmed Ibrahim",
      company: "GreenTech Distributors, Nigeria",
      image: "/aboutImg/aboutTestimonial1.jpg"
    },
    {
      quote: "The build quality of their factory-direct LFP packs is significantly higher than the generic units we sourced before. Their QC protocols saved us from field failures.",
      author: "Carlos Mendez",
      company: "SolEnergy Latin America",
      image: "/aboutImg/aboutTestimonial2.jpg"
    },
    {
      quote: "JoyHand delivered our 500kW commercial storage project three weeks ahead of schedule. The seamless integration of their inverters and batteries halved our installation time.",
      author: "Sarah Lin",
      company: "Apex Renewable Systems, Australia",
      image: "/aboutImg/aboutTestimonial1.jpg"
    },
    {
      quote: "We've been importing their electric mobility solutions for 4 years. The IP65 weatherproof motors handle our monsoon seasons flawlessly, completely reducing our warranty claims.",
      author: "Raj Patel",
      company: "EcoTransit Solutions, India",
      image: "/aboutImg/aboutTestimonial2.jpg"
    }
  ];

  return (
    <main className="about-page">
      <PageHeader
        title="Direct Manufacturing Excellence"
        subtitle="Since 1998, we've built the technology that powers global energy markets."
        pageImage="/pageHeadImg/pageheader-about01.jpg"
      />

      {/* ================= INTRO ================= */}
      <section className="about-intro animate-slide-up">
        <SectionDecor type="accent" count={4} />
        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader
              badge="OWNING THE FLOOR"
              title="A Factory-First Approach to Renewable Energy"
            />
            <div className="about-intro__description">
              <p>
                JoyHand was born on the factory floor. We are engineers and builders first.
                By maintaining <strong>direct control over our assembly lines</strong>, we ensure that every cell and circuit board meets the rigorous demands of professional distributors worldwide.
              </p>
              <div className="mission-statement">
                <h4 className="mission-statement__title">Our Manufacturing Promise</h4>
                <p className="mission-statement__text">
                  To eliminate the risk of the energy supply chain by providing importers with direct access to high-performance hardware, built and tested in our own factory.
                </p>
              </div>
            </div>
          </div>
          <div className="about-intro__visual stagger-2">
            <div className="about-intro__nfc-wrapper nfc-pulse">
              <div className="about-intro__image-wrapper">
                <Image
                  src="/aboutImg/joyhandBuilding.jpg"
                  alt="JoyHand Automated Factory Line"
                  fill
                  className="about-intro__img"
                  priority
                />
                <div className="nfc-status">
                  <div className="nfc-status__dot"></div>
                  <span>Direct Factory Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="timeline-section animate-slide-up">
        <div className="container">
          <SectionHeader
            badge="OUR HERITAGE"
            title="Over 26 Years of Engineering"
            align="center"
          />
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__icon">{item.icon}</div>
                <div className="timeline__content">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__title">{item.title}</h4>
                  <p className="timeline__description">{item.description}</p>
                </div>
                {index < timeline.length - 1 && <div className="timeline__connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="values-section animate-slide-up">
        <div className="container">
          <SectionHeader
            badge="THE JOYHAND STANDARD"
            title="The 4 Pillars of Production"
            align="center"
            light
          />
          <div className="grid grid--4 values-grid">
            {values.map((value, index) => (
              <div key={index} className={`card value-card stagger-${index % 6 + 1}`}>
                <div className="value-card__icon">{value.icon}</div>
                <h4 className="value-card__title">{value.title}</h4>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENERGY SOLUTIONS ================= */}
      <section className="markets-section animate-slide-up">
        <SectionDecor type="accent" count={4} />
        <SuperRing
          type="primary"
          size="1400px"
          thickness="40px"
          top="50%"
          left="50%"
          translateX="-50%"
          translateY="-50%"
          opacity={0.06}
        />
        <SuperRing
          type="secondary"
          size="900px"
          thickness="40px"
          top="15%"
          left="70%"
          translateX="-50%"
          translateY="-50%"
          opacity={0.05}
        />
        <SuperRing
          type="accent"
          size="900px"
          thickness="40px"
          top="85%"
          left="30%"
          translateX="-50%"
          translateY="-50%"
          opacity={0.05}
        />
        <div className="container">
          <SectionHeader
            badge="CORE PRODUCTION"
            title="Energy Infrastructure We Manufacture"
            center
          />
          <div className="markets-grid">
            {energySectors.map((sector, index) => (
              <div key={index} className={`market-row ${index % 2 !== 0 ? 'market-row--reverse' : ''} stagger-${index % 6 + 1}`}>
                <div className="market-image">
                  <Image src={sector.img} alt={sector.title} fill />
                  <div className="market-badge">{sector.tag}</div>
                </div>
                <div className="market-text">
                  <h3>{sector.title}</h3>
                  <p>{sector.desc}</p>
                  <ul className="market-list">
                    {sector.features.map((feature, i) => (
                      <li key={i}><PiCheckCircleFill /> {feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn--primary"
                    onClick={() => openModal("quote")}
                  >
                    Inquire for Wholesale <PiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section animate-slide-up">
        <div className="container">
          <SectionHeader
            badge="PARTNER SUCCESS"
            title="Trusted by Professional Importers"
            theme="light"
          />
          <div className="testimonials-marquee">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((t, index) => (
                <div key={index} className={`card testimonial-card`}>
                  <PiQuotesFill className="testimonial-card__quote-icon" size={40} />
                  <p className="testimonial-card__text">{t.quote}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__author-image">
                      <Image src={t.image} alt={t.author} fill />
                    </div>
                    <div>
                      <h5>{t.author}</h5>
                      <span>{t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/******** LEADERSHIP *******/}
      <section className="team-section animate-slide-up">
        <SectionDecor type="primary" count={1} />
        <div className="container">
          <SectionHeader
            badge="EXECUTIVE LEADERSHIP"
            title="The Minds Behind Your Supply Chain"
            center
          />
          <div className="team-section__wrapper">
            {team.map((member, index) => (
              <div key={index} className={`executive-card stagger-${index % 6 + 1}`}>
                <div className="executive-card__image-box">
                  <Image src={member.image} alt={member.name} fill className="executive-card__img" />
                  <div className="executive-card__experience-badge">15+ Yrs Exp</div>
                </div>
                <div className="executive-card__content">
                  <div className="executive-card__header">
                    <span className="executive-card__role">{member.title}</span>
                    <h4 className="executive-card__name">{member.name}</h4>
                  </div>
                  <p className="executive-card__bio">{member.bio}</p>
                  <div className="executive-card__footer">
                    <a href="#" className="executive-card__linkedin">
                      <PiLinkedinLogo size={20} />
                      <span>Professional Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="abtCta-banner">
        <div className="container">
          <div className="abtCta-banner__wrapper">
            <div className="abtCta-banner__text">
              <h4 className="abtCta-banner__title">Scale Your Distribution With a <span className="title--highlight">Real Manufacturer</span></h4>
              <p className="abtCta-banner__subtitle">
                Access direct factory pricing, technical support, and OEM/ODM engineering services.
              </p>
            </div>
            <button
              className="btn abtCta-banner__btn"
              onClick={() => openModal("quote")}
            >
              Apply for Partnership <PiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <PopUpModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
      />
    </main>
  );
}

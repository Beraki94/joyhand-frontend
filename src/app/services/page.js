"use client";

import {
  PiGear,
  PiLightbulb,
  PiTruck,
  PiArrowRight,
  PiBatteryCharging,
  PiShieldCheck,
  PiGlobe,
  PiCheckCircleFill,
  PiSealCheckFill
} from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import "./services.css";

export default function ServicesPage() {
  const services = [
    {
      title: "OEM Energy Storage",
      desc: "Custom-engineered lithium battery storage systems designed for solar, industrial backup power and grid energy platforms.",
      icon: <PiBatteryCharging weight="duotone" />,
      tag: "Manufacturing"
    },
    {
      title: "ODM Solar Solutions",
      desc: "Ready-to-market solar inverter and storage systems developed with certified design standards for rapid deployment.",
      icon: <PiLightbulb weight="duotone" />,
      tag: "Design"
    },
    {
      title: "Electric Mobility Power",
      desc: "Battery platforms engineered for electric bikes, scooters and mobility vehicles with long cycle life.",
      icon: <PiTruck weight="duotone" />,
      tag: "Mobility"
    },
    {
      title: "Global Supply Network",
      desc: "International logistics and factory-direct manufacturing enabling global brands to scale energy solutions efficiently.",
      icon: <PiGlobe weight="duotone" />,
      tag: "Distribution"
    }
  ];

  return (
    <main className="services-page">
      <PageHeader
        title="Industrial Expertise"
        subtitle="Engineering the future of energy storage and electric mobility systems"
        pageImage="/images/solarImg/panel.home.jpg"
      />

      {/* ================= INTRO ================= */}
      <section className="services-intro">
        <div className="container">
          <div className="services-intro__grid">
            <div className="services-intro__header">
              <SectionHeader 
                badge="Industrial Leader" 
                title="One-Stop Energy Solutions From Factory to Field" 
              />
            </div>
            <div className="services-intro__content">
              <p className="services-intro__desc">
                JoyHand combines industrial manufacturing precision with advanced battery engineering. 
                Our production facilities deliver high-performance solar storage systems trusted by global brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CARDS (WITH TECH PATTERNS) ================= */}
      <section className="services-grid">
        <div className="container">
          <div className="services-grid__wrapper">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card__pattern"></div>
                <div className="service-card__badge">{service.tag}</div>
                
                <div className="service-card__icon-box">
                  {service.icon}
                </div>
                
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                </div>

                <Link href="/contact" className="service-card__link">
                  <span>Request Full Specs</span>
                  <PiArrowRight weight="bold" className="service-card__arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELIABILITY (TECH DARK) ================= */}
      <section className="reliability">
        <div className="container">
          <div className="reliability__box">
            <div className="reliability__header">
              <h2 className="reliability__title">Engineered for Reliability</h2>
              <p className="reliability__subtitle">Global brands trust JoyHand manufacturing infrastructure for safety, consistency and excellence.</p>
            </div>
            <div className="reliability__grid">
              <div className="reliability-item">
                <div className="reliability-item__icon-wrapper">
                  <PiShieldCheck className="reliability-item__icon" />
                </div>
                <div className="reliability-item__content">
                  <h4 className="reliability-item__title">ISO/TS16949 Certified</h4>
                  <p className="reliability-item__text">Automotive-grade certification ensuring strict production quality standards.</p>
                </div>
              </div>
              <div className="reliability-item">
                <div className="reliability-item__icon-wrapper">
                  <PiGear className="reliability-item__icon" />
                </div>
                <div className="reliability-item__content">
                  <h4 className="reliability-item__title">Advanced Engineering</h4>
                  <p className="reliability-item__text">Dedicated R&D teams developing next-generation energy solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process">
        <div className="container">
          <SectionHeader badge="Our Process" title="How We Deliver Global Energy Solutions" center />
          <div className="process__grid">
            {["Consultation", "Engineering Design", "Manufacturing", "Global Delivery"].map((step, i) => (
              <div key={i} className="process-card">
                <div className="process-card__number">0{i + 1}</div>
                <div className="process-card__inner">
                  <PiCheckCircleFill className="process-card__icon" />
                  <h4 className="process-card__title">{step}</h4>
                  <p className="process-card__text">Standardized procedures ensuring consistent product excellence.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__banner">
            <div className="services-cta__content">
              <PiSealCheckFill className="services-cta__icon" />
              <h2 className="services-cta__title">Start Your Energy Project</h2>
              <p className="services-cta__subtitle">Partner with JoyHand to develop solar storage and battery systems.</p>
              <Link href="/contact" className="btn btn--secondary">
                Contact Our Global Offices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

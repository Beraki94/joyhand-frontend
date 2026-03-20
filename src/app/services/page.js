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
  PiSealCheckFill,
  PiMagnifyingGlass,
  PiHandshake,
  PiClipboardText,
  PiBoat
} from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import "./services.css";

export default function ServicesPage() {
  const services = [
    {
      title: "OEM Energy Storage",
      desc: "Connect with specialized lithium battery factories for custom-engineered storage systems. We handle factory vetting, quality audits, and specification matching.",
      icon: <PiBatteryCharging weight="duotone" />,
      tag: "Sourcing"
    },
    {
      title: "ODM Solar Solutions",
      desc: "Ready-to-market solar inverters and storage systems from certified manufacturing partners. We bridge your requirements with factory capabilities.",
      icon: <PiLightbulb weight="duotone" />,
      tag: "Partnership"
    },
    {
      title: "Electric Mobility",
      desc: "Sourced battery platforms for e-bikes, scooters, and mobility vehicles. Our factory partners deliver long cycle life cells with rigorous verification.",
      icon: <PiTruck weight="duotone" />,
      tag: "Mobility"
    },
    {
      title: "Global Logistics",
      desc: "International logistics and factory coordination. We manage shipping, customs, and container consolidation from partner facilities to your door.",
      icon: <PiGlobe weight="duotone" />,
      tag: "Logistics"
    }
  ];

  const qcProtocols = [
    {
      title: "Factory Audits",
      desc: "On-site verification before any partnership begins.",
      icon: <PiClipboardText />
    },
    {
      title: "Batch Testing",
      desc: "Random sampling and performance testing before shipment release.",
      icon: <PiMagnifyingGlass />
    },
    {
      title: "Certification Verification",
      desc: "We validate ISO, CE, UL, and other certifications directly with issuing bodies.",
      icon: <PiSealCheckFill />
    },
    {
      title: "Container Inspection",
      desc: "Final quality check during container loading at partner facilities.",
      icon: <PiShieldCheck />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "We discuss your specifications, volume needs, and target markets to identify ideal factory partners.",
      icon: <PiHandshake />
    },
    {
      step: "02",
      title: "Factory Matching",
      desc: "We match you with vetted manufacturers and perform initial quality audits.",
      icon: <PiClipboardText />
    },
    {
      step: "03",
      title: "Sample Verification",
      desc: "Samples are tested against your specifications before production begins.",
      icon: <PiMagnifyingGlass />
    },
    {
      step: "04",
      title: "Production Oversight",
      desc: "Our engineers monitor production and conduct random in-line inspections.",
      icon: <PiGear />
    },
    {
      step: "05",
      title: "Pre-shipment Inspection",
      desc: "Final QC check before container loading at partner facility.",
      icon: <PiShieldCheck />
    },
    {
      step: "06",
      title: "Global Logistics",
      desc: "We coordinate shipping, customs clearance, and delivery to your warehouse.",
      icon: <PiBoat />
    }
  ];

  return (
    <main className="services-page">
      <PageHeader
        title="What We Do Best"
        subtitle="Factory sourcing. Quality control. Global logistics."
        pageImage="/images/solarImg/panel.home.jpg"
      />

      {/* ================= INTRO ================= */}
      <section className="services-intro">
        <div className="container">
          <div className="services-intro__grid">
            <div className="services-intro__header">
              <SectionHeader 
                badge="Industrial Sourcing Partner" 
                title="Your Bridge to Vetted Manufacturers" 
              />
            </div>
            <div className="services-intro__content">
              <p className="services-intro__desc">
                Since 1998, we have built relationships with factories you can trust. 
                Through our partner network, we deliver high-performance solutions 
                trusted by global distributors — without the risk of unknown suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
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
                  <span>Request Info</span>
                  <PiArrowRight weight="bold" className="service-card__arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY CONTROL PROTOCOLS ================= */}
      <section className="qc-protocols">
        <div className="container">
          <SectionHeader 
            badge="Your Quality Shield" 
            title="Every Shipment. Every Factory. Verified." 
            center
          />
          <div className="qc-protocols__grid">
            {qcProtocols.map((protocol, idx) => (
              <div key={idx} className="qc-card">
                <div className="qc-card__icon">{protocol.icon}</div>
                <h4 className="qc-card__title">{protocol.title}</h4>
                <p className="qc-card__desc">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY DISTRIBUTORS CHOOSE US ================= */}
      <section className="why-distributors">
        <div className="container">
          <div className="why-distributors__box">
            <div className="why-distributors__header">
              <span className="badge">Trusted by Global Distributors</span>
              <h2 className="why-distributors__title">Why Partners Work With Us</h2>
            </div>
            <div className="why-distributors__grid">
              <div className="why-item">
                <div className="why-item__number">01</div>
                <h4 className="why-item__title">Zero Factory Risk</h4>
                <p className="why-item__text">We have already vetted, audited, and built relationships with manufacturing partners. You skip the trial and error.</p>
              </div>
              <div className="why-item">
                <div className="why-item__number">02</div>
                <h4 className="why-item__title">Quality Guaranteed</h4>
                <p className="why-item__text">On-site inspections before any product leaves. If it does not pass, it does not ship.</p>
              </div>
              <div className="why-item">
                <div className="why-item__number">03</div>
                <h4 className="why-item__title">Logistics Handled</h4>
                <p className="why-item__text">From container consolidation to customs clearance — we manage the complexity so you dont have to.</p>
              </div>
              <div className="why-item">
                <div className="why-item__number">04</div>
                <h4 className="why-item__title">Scale With Us</h4>
                <p className="why-item__text">Whether you need one container or hundreds, our factory network grows with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SOURCING PROCESS ================= */}
      <section className="sourcing-process">
        <div className="container">
          <SectionHeader 
            badge="How It Works" 
            title="From Your Specs to Your Warehouse" 
            center
          />
          <div className="sourcing-process__grid">
            {process.map((item, i) => (
              <div key={i} className="process-card">
                <div className="process-card__number">{item.step}</div>
                <div className="process-card__inner">
                  <div className="process-card__icon">{item.icon}</div>
                  <h4 className="process-card__title">{item.title}</h4>
                  <p className="process-card__text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER FACILITIES ================= */}
      <section className="partner-facilities">
        <div className="container">
          <div className="partner-facilities__box">
            <div className="partner-facilities__content">
              <SectionHeader 
                badge="Our Network" 
                title="Vetted Manufacturing Partners"
                light
              />
              <p className="partner-facilities__text">
                We work exclusively with factories holding automotive-grade certifications. 
                Our partners specialize in:
              </p>
              <ul className="partner-facilities__list">
                <li><PiCheckCircleFill /> LFP battery production (ISO/TS16949)</li>
                <li><PiCheckCircleFill /> Solar inverter assembly (Tier-1 components)</li>
                <li><PiCheckCircleFill /> EV charging infrastructure</li>
                <li><PiCheckCircleFill /> Portable power station manufacturing</li>
              </ul>
              <Link href="/contact" className="btn btn--secondary">
                Request Factory List
              </Link>
            </div>
            <div className="partner-facilities__visual">
              <div className="facility-stats">
                <div className="facility-stats__item">
                  <span className="facility-stats__number">12+</span>
                  <span className="facility-stats__label">Vetted Factories</span>
                </div>
                <div className="facility-stats__item">
                  <span className="facility-stats__number">100%</span>
                  <span className="facility-stats__label">On-site Audited</span>
                </div>
                <div className="facility-stats__item">
                  <span className="facility-stats__number">8</span>
                  <span className="facility-stats__label">Years Avg. Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__banner">
            <div className="services-cta__content">
              <PiSealCheckFill className="services-cta__icon" />
              <h2 className="services-cta__title">Ready to Source With Confidence?</h2>
              <p className="services-cta__subtitle">Partner with JoyHand for factory-direct quality without the factory risk.</p>
              <Link href="/contact" className="btn btn--secondary">
                Contact Our Sourcing Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
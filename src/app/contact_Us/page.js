"use client";

import React from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SimpleContactForm from "@/components/contactForm/SimpleContactForm";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap
} from "lucide-react";

import "./contact.css";

const contactDetails = [
  {
    icon: <MapPin />,
    title: "Headquarters",
    content: "52 Ubi Avenue 3, #05-41 Frontier, Singapore 408867",
    link: "https://maps.google.com"
  },
  {
    icon: <Phone />,
    title: "Global Support",
    content: "+65 80610116",
    link: "tel:+6580610116"
  },
  {
    icon: <Mail />,
    title: "Inquiries",
    content: "info@fomo.energy",
    link: "mailto:info@fomo.energy"
  },
  {
    icon: <Clock />,
    title: "Operating Hours",
    content: "Mon - Fri: 9am - 6pm / Sat: 9am - 1pm",
    isText: true
  }
];

export default function ContactPage() {
  return (
    <main className="contact-page">

      <PageHeader
        title="Connect With Us"
        pageImage="/images/pageHeadImg/pageheader3.jpg"
      />

      {/* ================= FORM SECTION ================= */}

      <section className="contact-form-section">
        <div className="container contact-form-section__grid">

          <div className="contact-form-section__content">

            <SectionHeader
              badge="Leading Solar & Storage"
              title="Custom ODM & OEM Energy Solutions"
              subtitle="Partner with JoyHand for high-performance solar and battery storage systems tailored to your brand's specifications."
            />

            <div className="contact-form-section__features">
              <div className="feature-item">
                <Zap size={18} /> Global Logistics Support
              </div>

              <div className="feature-item">
                <Zap size={18} /> ISO Certified Manufacturing
              </div>

              <div className="feature-item">
                <Zap size={18} /> 24/7 Technical Consultation
              </div>
            </div>

          </div>

          {/* SIMPLE CONTACT FORM */}
          <SimpleContactForm mode="contact" />

        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="contact-info">
        <div className="container">

          <SectionHeader title="Global Presence" center />

          <div className="contact-info__grid">

            {contactDetails.map((item, index) => (
              <div key={index} className="contact-card">

                <div className="contact-card__icon-wrapper">
                  <div className="contact-card__pulse"></div>
                  <div className="contact-card__icon">
                    {item.icon}
                  </div>
                </div>

                <h4 className="contact-card__title">
                  {item.title}
                </h4>

                {item.isText ? (
                  <p className="contact-card__content">
                    {item.content}
                  </p>
                ) : (
                  <a href={item.link} className="contact-card__link">
                    {item.content}
                  </a>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}

      <section className="contact-map">

        <iframe
          title="Location"
          src="https://www.google.com/maps?q=52+Ubi+Avenue+3,+Singapore+408867&output=embed"
          width="100%"
          height="500"
          style={{
            border: 0,
            filter: "grayscale(100%) invert(90%)"
          }}
          allowFullScreen=""
          loading="lazy"
        />

      </section>

    </main>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShieldCheckFill, PiArrowRightBold } from "react-icons/pi";
import "./TestyAbout.css";

export default function TestyAbout() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        }
      },
      {
        threshold: 0.1, // Trigger faster on mobile
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="testy-about">
      <div className="container testy-about__container">

        {/* LEFT SIDE: VISUAL GRID */}
        <div className="testy-about__visual-grid">

          <div className="testy-about__top-row">
            {/* TECH CARD */}
            <div className="testy-about__card">
              <div className="testy-about__card-header">
                <div className="testy-about__card-icon">
                   <PiShieldCheckFill size={20} />
                </div>
                <span className="testy-about__card-brand">
                  Smart Storage Systems
                </span>
              </div>

              <p className="testy-about__quote">
                Power your infrastructure with 
                <span className="text-primary"> solar technology</span>, 
                high-density <span className="text-primary">battery storage</span>, 
                and intelligent <span className="text-primary">power management</span>.
              </p>

              <Link href="/products" className="testy-about__card-btn">
                Explore Solutions
              </Link>
            </div>

            {/* SMALL IMAGE */}
            <div className="testy-about__img-wrapper testy-about__img-wrapper--small">
              <Image
                src="/images/factoryImg/factory2.jpg"
                alt="JoyHand Manufacturing Facility"
                fill
                className="testy-about__image"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* LARGE IMAGE */}
          <div className="testy-about__img-wrapper testy-about__img-wrapper--large">
            <Image
              src="/images/factoryImg/factory1.jpg"
              alt="Advanced Solar Implementation"
              fill
              className="testy-about__image"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="testy-about__content">

          <div className="testy-about__tag">
            <span className="testy-about__tag-square"></span>
            SMART POWER INFRASTRUCTURE
          </div>

          <h2 className="testy-about__heading">
            Engineered for the Next Generation Energy Era
          </h2>

          <ul className="testy-about__list">
            <li>High-efficiency solar systems for industrial output</li>
            <li>Advanced lithium-ion battery storage architecture</li>
            <li>Intelligent real-time energy monitoring systems</li>
            <li>Certified OEM/ODM manufacturing excellence</li>
            <li>Sustainable electric mobility power platforms</li>
          </ul>

          <div className="testy-about__actions">
            <Link href="/contact" className="btn">
              GET A FREE QUOTE
            </Link>
            <Link href="/products" className="btn btn--secondary">
              VIEW PRODUCTS
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

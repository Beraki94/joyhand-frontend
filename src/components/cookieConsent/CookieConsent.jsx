"use client";

import React from "react";
import Link from "next/link";
import "./CookieConsent.css";

export default function CookieConsent() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookieConsent", "accepted");
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          We use cookies to improve your experience.{'By clicking "Accept", you consent to our use of cookies.'}
        </p>
        <div className="cookie-banner__actions">
          <Link href="/cookie-policy" className="cookie-banner__link">
            Learn More
          </Link>
          <button onClick={accept} className="cookie-banner__button">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
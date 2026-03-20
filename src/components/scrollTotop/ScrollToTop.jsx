"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PiArrowUpBold } from "react-icons/pi";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Reset scroll position when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-btn ${isVisible ? "scroll-btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <PiArrowUpBold className="scroll-btn__icon" size={24} />
    </button>
  );
};

export default ScrollToTop;
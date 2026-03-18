"use client";

import { useState, useRef } from "react";
import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import { PiArrowRight, PiCaretLeft, PiCaretRight } from "react-icons/pi";
import "./HomeBlog.css";

const HomeBlogSection = () => {
  const [featuredPosts] = useState(blogPosts.slice(0, 4));
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sliderRef = useRef(null);
  const progressRef = useRef(null);

  // Check if posts exist
  if (featuredPosts.length === 0) {
    console.warn("No blog posts found! Check your data file.");
    return null;
  }

  // Handle scroll
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Fix stale state
    setShowScrollHint((prev) => (scrollLeft > 20 ? false : prev));

    // Update progress bar
    if (progressRef.current) {
      const maxScroll = scrollWidth - clientWidth;
      const progress =
        maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      progressRef.current.style.width = `${progress}%`;
    }
  };

  // Scroll controls
  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = 320;

    const newScrollLeft =
      slider.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    slider.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="home-blog">
      <div className="container">
        <SectionHeader
          badge="Sourcing Insights"
          title="Knowledge for Energy Distributors"
          subtitle="Technical guides, market intelligence, and sourcing best practices to help you scale with confidence"
        />

        <div className="home-blog__content-wrapper">
          {/* Left Button */}
          <button
            className={`home-blog__nav-btn home-blog__nav-btn--left ${
              !canScrollLeft ? "home-blog__nav-btn--disabled" : ""
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <PiCaretLeft />
          </button>

          <div className="home-blog__slider-wrapper">
            <div
              className="home-blog__slider"
              ref={sliderRef}
              onScroll={handleScroll} // ✅ single scroll handler (clean)
            >
              {featuredPosts.map((post) => (
                <article key={post.id} className="home-blog__item">
                  <BlogCard post={post} />
                </article>
              ))}
            </div>

            {/* Gradient Fades */}
            <div className="home-blog__fade home-blog__fade--left"></div>
            <div className="home-blog__fade home-blog__fade--right"></div>
          </div>

          {/* Right Button */}
          <button
            className={`home-blog__nav-btn home-blog__nav-btn--right ${
              !canScrollRight ? "home-blog__nav-btn--disabled" : ""
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <PiCaretRight />
          </button>
        </div>

        {/* Scroll Hint */}
        <div
          className={`home-blog__scroll-hint ${
            !showScrollHint ? "home-blog__scroll-hint--hidden" : ""
          }`}
        >
          <span className="home-blog__scroll-text">
            <span className="home-blog__scroll-arrow">←</span>
            Drag to explore more
            <span className="home-blog__scroll-arrow">→</span>
          </span>
          <div className="home-blog__scroll-indicator">
            <span className="home-blog__scroll-dot"></span>
            <span className="home-blog__scroll-dot"></span>
            <span className="home-blog__scroll-dot"></span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="home-blog__progress">
          <div
            className="home-blog__progress-bar"
            ref={progressRef}
          ></div>
        </div>

        {/* Footer */}
        <div className="home-blog__footer">
          <Link href="/blog" className="home-blog__link">
            <span>Browse All Articles</span>
            <PiArrowRight className="home-blog__link-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
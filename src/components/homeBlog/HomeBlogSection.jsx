"use client";

import { useState, useRef, useEffect } from "react";
import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import "./HomeBlog.css";

const HomeBlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const featuredPosts = blogPosts.slice(0, 5);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = 320; // safer than hardcoding inline
    const updateIndex = () => {
      const index = Math.round(slider.scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    slider.addEventListener("scroll", updateIndex);
    return () => slider.removeEventListener("scroll", updateIndex);
  }, []);

  return (
    <section className="home-blog">
      <div className="container">
        <SectionHeader
          badge="Insights"
          title="Latest from Our Blog"
          subtitle="Expert knowledge for energy professionals"
          center
        />

        <div className="home-blog__carousel">
          <div className="home-blog__track" ref={sliderRef}>
            {featuredPosts.map((post) => (
              <div key={post.id} className="home-blog__slide">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="home-blog__dots">
          {featuredPosts.map((_, idx) => (
            <button
              key={idx}
              className={`home-blog__dot ${
                currentIndex === idx ? "home-blog__dot--active" : ""
              }`}
              onClick={() => {
                const slider = sliderRef.current;
                if (!slider) return;

                const cardWidth = 320;
                slider.scrollTo({
                  left: idx * cardWidth,
                  behavior: "smooth",
                });
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="home-blog__footer">
          <Link href="/blog" className="home-blog__link">
            Browse All Articles <PiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
"use client";

import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import "./HomeBlog.css";

const HomeBlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 4);

  // Debug: Log to console to see if posts exist
  console.log("Featured Posts:", featuredPosts);

  return (
    <section className="home-blog">
      <div className="container">
        <SectionHeader 
          badge="Sourcing Insights" 
          title="Knowledge for Energy Distributors"
          subtitle="Technical guides, market intelligence, and sourcing best practices to help you scale with confidence"
        />

        {/* Debug: Check if posts exist */}
        {featuredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
            No blog posts found! Check your data file.
          </div>
        ) : (
          <div className="home-blog__slider-wrapper">
            <div className="home-blog__slider">
              {featuredPosts.map((post) => (
                <article key={post.id} className="home-blog__item">
                  <BlogCard
                    title={post.title}
                    image={post.image}
                    description={post.excerpt}
                    slug={post.slug}
                    category={post.category}
                  />
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Scroll Hint */}
        <div className="home-blog__scroll-hint">
          <span>← Drag to explore →</span>
          <div className="home-blog__scroll-indicator">
            <span className="home-blog__scroll-dot"></span>
            <span className="home-blog__scroll-dot"></span>
            <span className="home-blog__scroll-dot"></span>
          </div>
        </div>

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
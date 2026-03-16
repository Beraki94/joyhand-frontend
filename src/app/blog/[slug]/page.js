"use client";

import React, { use } from "react";
import { blogPosts } from "@/data";
import Link from "next/link";
import { 
  PiArrowLeft, 
  PiCalendarBlank, 
  PiUser, 
  PiArrowRight,
  PiFactory,
  PiShieldCheck
} from "react-icons/pi";
import { PortableText } from "@portabletext/react";
import PageHeader from "@/components/pageHeader/PageHeader";
import "../blog.css";

/**
 * CUSTOM PORTABLE TEXT COMPONENTS
 */
const blogContentComponents = {
  block: {
    h2: ({ children }) => <h2 className="blog-content__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-content__h3">{children}</h3>,
    normal: ({ children }) => <p className="blog-content__p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-content__ul">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-content__li">{children}</li>,
  },
};

export default function BlogDetailsPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  const blogPost = blogPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    return (
      <main className="blog-details-notfound">
        <div className="container">
          <h1 className="blog-details-notfound__title">404</h1>
          <h2 className="blog-details-notfound__subtitle">Article Not Found</h2>
          <Link href="/blog" className="btn btn--secondary">Browse Sourcing Insights</Link>
        </div>
      </main>
    );
  }

  // --- LOGIC TO PREVENT EMPTY CONTENT ---
  const isPortableText = Array.isArray(blogPost.content) && 
                         typeof blogPost.content[0] === 'object' && 
                         blogPost.content[0] !== null;

  return (
    <article className="blog-details">
      <PageHeader 
        title={blogPost.title} 
        pageImage={blogPost.image || "/images/solarImg/panel.home.jpg"} 
      />

      <div className="container blog-details__container">
        <Link href="/blog" className="blog-details__back">
          <PiArrowLeft weight="bold" /> Back to Sourcing Insights
        </Link>

        <div className="blog-details__main-layout">
          <div className="blog-details__body">
            
            <div className="blog-details__meta-row">
              <span className="blog-details__meta-item">
                <PiUser weight="bold" /> JoyHand Sourcing Team
              </span>
              <span className="blog-details__meta-item">
                <PiCalendarBlank weight="bold" /> {new Date().toLocaleDateString()}
              </span>
              {blogPost.category && (
                <span className="blog-details__category-badge">{blogPost.category}</span>
              )}
            </div>

            <div className="blog-details__content">
              {/* Conditional Rendering: 
                  If data is PortableText (from CMS), use the component.
                  If data is simple strings (from local data), map them. */}
              {isPortableText ? (
                <PortableText 
                  value={blogPost.content} 
                  components={blogContentComponents} 
                />
              ) : (
                blogPost.content.map((paragraph, index) => (
                  <p key={index} className="blog-content__p">{paragraph}</p>
                ))
              )}
            </div>
          </div>

          <aside className="blog-details__sidebar">
            <div className="sidebar-card sidebar-card--cta">
              <div className="sidebar-card__icon">
                <PiFactory size={24} />
              </div>
              <h4 className="sidebar-card__title">Need Help Sourcing?</h4>
              <p className="sidebar-card__text">
                Connect with our team to find vetted manufacturers for your specific product requirements.
              </p>
              <Link href="/contact" className="btn btn--primary sidebar-card__btn">
                Talk to a Sourcing Expert <PiArrowRight weight="bold" />
              </Link>
            </div>

            <div className="sidebar-card sidebar-card--white">
              <div className="sidebar-card__icon">
                <PiShieldCheck size={24} />
              </div>
              <h4 className="sidebar-card__title">Sourcing Categories</h4>
              <ul className="sidebar-card__list">
                <li>Battery Storage Systems</li>
                <li>Solar Inverters</li>
                <li>EV Charging Infrastructure</li>
                <li>Portable Power Stations</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
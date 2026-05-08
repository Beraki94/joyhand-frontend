import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import RichTextRenderer from "@/components/richText/RichTextRenderer";
import "@/components/richText/RichText.css";
import Link from "next/link";
import {
  PiCalendarBlank,
  PiUser,
  PiClock,
  PiArrowLeft,
  PiArrowRight,
  PiLinkedinLogo,
  PiTwitterLogo,
  PiLinkSimple,
  PiFactory,
  PiShieldCheck,
  PiEnvelopeSimple
} from "react-icons/pi";
import "../blog.css";



export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  const blogPost = blogPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="blog-details">
      <div className="container blog-details__container">
        <Breadcrumbs
          items={[
            { label: "Insights", link: "/blog" },
            { label: blogPost.category || "Technology", link: "/blog" }
          ]}
          currentTitle={blogPost.title}
        />

        <div className="blog-details__layout">
          {/* Column 1: Main Content Card */}
          <div className="blog-details__main">
            <h1 className="blog-details__title">{blogPost.title}</h1>
            <div className="blog-details__meta-bar">
              <div className="blog-details__category-tag">{blogPost.category || "Energy Technology"}</div>
              <div className="blog-details__meta-items">
                <span className="blog-details__meta-item">
                  <PiUser size={14} /> JoyHand Editorial
                </span>
                <span className="blog-details__meta-item">
                  <PiCalendarBlank size={14} /> {formattedDate}
                </span>
                <span className="blog-details__meta-item">
                  <PiClock size={14} /> {blogPost.readTime || "5 min read"}
                </span>
              </div>
            </div>

            {blogPost.image && (
              <div className="blog-details__featured-image-wrapper">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  width={1200}
                  height={630}
                  priority
                  className="blog-details__featured-image"
                />
              </div>
            )}

            <div className="blog-details__content">
              <RichTextRenderer value={blogPost.content} />
            </div>

            <section className="blog-details__author-card">
              <div className="author-card__avatar">
                <PiUser />
              </div>
              <div className="author-card__info">
                <h4 className="author-card__name">JoyHand Team</h4>
                <p className="author-card__bio">
                  Our dedicated research team exploring advanced energy storage solutions and manufacturing protocols.
                </p>
              </div>
            </section>

            {(prevPost || nextPost) && (
              <div className="blog-details__navigation">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="blog-details__nav-link blog-details__nav-link--prev">
                    <div className="blog-details__nav-thumb">
                      <img src={prevPost.image || "/images/pageHeadImg/factory-blog.jpg"} alt={prevPost.title} />
                    </div>
                    <div className="blog-details__nav-content">
                      <span className="blog-details__nav-label"><PiArrowLeft /> Previous Insight</span>
                      <span className="blog-details__nav-title">{prevPost.title}</span>
                    </div>
                  </Link>
                )}

                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="blog-details__nav-link blog-details__nav-link--next">
                    <div className="blog-details__nav-content">
                      <span className="blog-details__nav-label">Next Insight <PiArrowRight /></span>
                      <span className="blog-details__nav-title">{nextPost.title}</span>
                    </div>
                    <div className="blog-details__nav-thumb">
                      <img src={nextPost.image || "/images/pageHeadImg/factory-blog.jpg"} alt={nextPost.title} />
                    </div>
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Column 2: Sidebar (Sticky) */}
          <aside className="blog-details__sidebar">
            <div className="sidebar-sticky-inner">
              {/* Share Buttons */}
              <div className="sidebar-share">
                <span className="sidebar-share__label">Share Article</span>
                <div className="sidebar-share__actions">
                  <button className="sidebar-share__btn" aria-label="Share on LinkedIn"><PiLinkedinLogo /></button>
                  <button className="sidebar-share__btn" aria-label="Share on Twitter"><PiTwitterLogo /></button>
                  <button className="sidebar-share__btn" aria-label="Copy Link"><PiLinkSimple /></button>
                </div>
              </div>

              <div className="sidebar-card sidebar-card--primary">
                <div className="sidebar-card__icon-wrapper">
                  <PiFactory />
                </div>
                <h4 className="sidebar-card__title">Direct Factory Partnership</h4>
                <p className="sidebar-card__text">
                  Skip the middleman and scale your brand with our certified manufacturing lines.
                </p>
                <Link href="/contact" className="sidebar-card__link-btn">
                  Scale Your OEM Brand
                </Link>
              </div>

              <div className="sidebar-card sidebar-card--outline">
                <div className="sidebar-card__icon-wrapper">
                  <PiShieldCheck />
                </div>
                <h4 className="sidebar-card__title">Core Capabilities</h4>
                <ul className="sidebar-card__list">
                  <li>LFP Cell Grading & Matching</li>
                  <li>BMS Firmware Development</li>
                  <li>High-Power Inverter QC</li>
                  <li>Logistics & Certification</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
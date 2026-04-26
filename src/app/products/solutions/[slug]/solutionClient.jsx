"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import Pagination from "@/components/pagination/Pagination";

const PRODUCTS_PER_PAGE = 12;

export default function SolutionClient({ slug, config, allProducts }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, end);
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

  const solutionLinks = [
    { slug: "storage-batteries", name: "Storage Batteries" },
    { slug: "solar-inverters", name: "Solar Inverters" },
    { slug: "portable-power-stations", name: "Portable Power" },
    { slug: "electric-mobility", name: "Electric Mobility" },
    { slug: "power-banks", name: "Power Banks" }
  ];

  const isComingSoon = config.comingSoon === true;

  return (
    <main className="products-page">
      <PageHeader 
        title={`${config.title} Solutions`}
        subtitle={config.description}
        pageImage={config.image}
      />

      <section className="products-page__section">
        <div className="container">
          <div className="products-page__category-nav">
            <Link href="/products" className="products-page__category-link">
              All Products
            </Link>
            {solutionLinks.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/solutions/${cat.slug}`}
                className={`products-page__category-link ${
                  slug === cat.slug ? "products-page__category-link--active" : ""
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          
          {isComingSoon ? (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <h3 className="products-page__coming-soon-title">Coming Soon</h3>
                <p className="products-page__coming-soon-text">
                  We are currently building our {config.title.toLowerCase()} solutions catalog. 
                  Check back soon or contact our sourcing team for early access.
                </p>
                <Link href="/contact" className="btn btn--primary">
                  Contact Sourcing Team
                </Link>
              </div>
            </div>
          ) : paginatedProducts.length > 0 ? (
            <>
              <div className="products-page__grid">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {totalPages > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  baseUrl={`/products/solutions/${slug}`}
                />
              )}
            </>
          ) : (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <h3 className="products-page__coming-soon-title">No Products Found</h3>
                <p className="products-page__coming-soon-text">
                  No products available in this category yet. Please check back soon.
                </p>
                <Link href="/contact" className="btn btn--primary">
                  Contact Sourcing Team
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
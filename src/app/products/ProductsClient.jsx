"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { productData } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import { PiPackage } from "react-icons/pi";
import "./Products.css";

const solutionLinks = [
  { slug: "storage-batteries", name: "Storage Batteries" },
  { slug: "solar-inverters", name: "Solar Inverters" },
  { slug: "portable-power-stations", name: "Portable Power" },
  { slug: "electric-mobility", name: "Electric Mobility" },
  { slug: "power-banks", name: "Power Banks" },
];

const PRODUCTS_PER_PAGE = 12;

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = productData.slice(start, end);
  const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

  return (
    <section className="products-page__section">
      <div className="container">

        {/* ── Category Filter Bar ── */}
        <nav className="products-page__category-nav" aria-label="Product categories">
          <Link
            href="/products"
            className="products-page__category-link products-page__category-link--active"
          >
            All Products
          </Link>
          {solutionLinks.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/solutions/${cat.slug}`}
              className="products-page__category-link"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* ── Results Header ── */}
        <div className="products-page__results-header">
          <p className="products-page__results-count">
            Showing <strong>{paginatedProducts.length}</strong> of{" "}
            <strong>{productData.length}</strong> products
          </p>
        </div>

        {/* ── Products Grid ── */}
        <div className="products-page__grid">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="products-page__empty">
              <PiPackage size={48} />
              <p>No products found in this category.</p>
              <Link href="/products" className="btn btn--primary">
                View All Products
              </Link>
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            baseUrl="/products"
          />
        )}
      </div>
    </section>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { productData } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import "./Products.css";

const solutionLinks = [
  { slug: "storage-batteries", name: "Storage Batteries" },
  { slug: "solar-inverters", name: "Solar Inverters" },
  { slug: "portable-power-stations", name: "Portable Power" },
  { slug: "electric-mobility", name: "Electric Mobility" },
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
        <div className="products-page__category-nav">
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
        </div>

        <div className="products-page__grid">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="products-page__empty text-center">
              <p>No products found</p>
            </div>
          )}
        </div>

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
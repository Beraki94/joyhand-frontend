"use client";

import { useRouter } from "next/navigation";

export default function ProductsFilter({ categories, activeCategory }) {
  const router = useRouter();

  const handleCategoryClick = (cat) => {
    if (cat === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${encodeURIComponent(cat)}`);
    }
  };

  return (
    <nav className="products-page__filter" aria-label="Product Categories">
      <button
        key="all"
        className={`products-page__filter-btn ${!activeCategory || activeCategory === "all" ? "products-page__filter-btn--active" : ""}`}
        onClick={() => handleCategoryClick("all")}
      >
        All Products
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`products-page__filter-btn ${activeCategory === cat ? "products-page__filter-btn--active" : ""}`}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}s
        </button>
      ))}
    </nav>
  );
}
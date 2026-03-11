"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation"; 
import ProductCard from "@/components/productCard/ProductCard";
import { productData } from "@/data";
import PageHeader from "@/components/pageHeader/PageHeader";
import "./Products.css"; 

const ProductsContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryQuery = searchParams.get("category") || "all"; 

  const categories = useMemo(() => {
    const unique = [...new Set(productData.map((p) => p.category))];
    return ["all", ...unique];
  }, []);

  const activeCategory = useMemo(() => {
    return categories.find(cat => cat.toLowerCase() === categoryQuery.toLowerCase()) || "all";
  }, [categoryQuery, categories]);

  const filteredProducts = useMemo(() => {
    return activeCategory === "all" 
      ? productData 
      : productData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (cat) => {
    if (cat === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${encodeURIComponent(cat)}`);
    }
  };

  return (
    <main className="products-page">
      {/* Dynamic Header title */}
      <PageHeader 
        title={activeCategory === "all" ? "Energy Solutions" : `${activeCategory}`} 
        pageImage="/images/pageHeadImg/pageheader2.jpg" 
      />

      <section className="products-page__section">
        <div className="container">
          
          <nav className="products-page__filter" aria-label="Product Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`products-page__filter-btn ${
                  activeCategory === cat ? "products-page__filter-btn--active" : ""
                }`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </nav>

          <div className="products-page__grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  images={product.images}
                  title={product.title}
                  description={product.description}
                  specifications={product.specifications}
                  slug={product.slug}
                />
              ))
            ) : (
              <div className="products-page__empty text-center">
                <p>No products found in &quot;{activeCategory}&quot;</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={<div className="container mt-3">Loading Solutions...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default ProductsPage;

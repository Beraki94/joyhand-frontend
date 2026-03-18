import { Suspense } from "react";
import { productData, getCategories } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsFilter from "./ProductsFilter";
import "./Products.css";

export const metadata = {
  title: "Energy Solutions | Batteries & Inverters | JoyHand",
  description: "Explore JoyHand's range of LFP batteries, hybrid inverters, and energy storage solutions for residential and commercial applications. OEM/ODM sourcing available.",
  keywords: "solar batteries, lithium battery, hybrid inverter, energy storage, LFP battery, solar inverter",
};

async function ProductsContent({ category }) {
  const filteredProducts = category && category !== "all"
    ? productData.filter(p => p.category === category)
    : productData;

  return (
    <main className="products-page">
      <PageHeader 
        title={category && category !== "all" 
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Solutions` 
          : "Energy Solutions"}
        subtitle="High-performance batteries and inverters sourced from vetted manufacturing partners"
        pageImage="/images/pageHeadImg/pageheader2.jpg" 
      />

      <section className="products-page__section">
        <div className="container">
          <ProductsFilter categories={getCategories()} activeCategory={category} />
          
          <div className="products-page__grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="products-page__empty text-center">
                <p>No products found in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function ProductsPage({ searchParams }) {
  const { category } = await searchParams;
  
  return (
    <Suspense fallback={<div className="container mt-3">Loading solutions...</div>}>
      <ProductsContent category={category} />
    </Suspense>
  );
}
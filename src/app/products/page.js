import { Suspense } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import "./Products.css";

export const metadata = {
  title: "Energy Products We Manufacture | Batteries, Inverters & More | JoyHand",
  description: "JoyHand manufactures premium LFP batteries, hybrid inverters, portable power stations, and electric mobility solutions. OEM/ODM services from ISO 9001:2025 certified facility.",
  keywords: "energy products, solar batteries, lithium battery, hybrid inverter, portable power, e-motorcycle, OEM manufacturing, ODM services",
};

export default function ProductsPage() {
  return (
    <main className="products-page">
      <PageHeader 
        title="Products We Manufacture"
        subtitle="LFP batteries, solar inverters, portable power & e‑mobility."
        pageImage="/pageHeadImg/pageheader-products.jpg"
      />
      <Suspense fallback={<div className="container mt-3">Loading products...</div>}>
        <ProductsClient />
      </Suspense>
    </main>
  );
}
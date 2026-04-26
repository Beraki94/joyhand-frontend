import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/data";
import SolutionClient from "./solutionClient";
import "../../Products.css"

export const revalidate = 3600;

const solutionConfig = {
  "storage-batteries": {
    title: "Storage Batteries",
    image: "/homeImg/energyPlatformImage01.jpg",
    filterCategory: "battery",
    description: "Wall‑mounted, mobile & rack‑mounted LFP batteries.",
    keywords: "lithium battery, LFP battery, energy storage, solar battery, battery storage system"
  },
  "solar-inverters": {
    title: "Solar Inverters",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage002.jpg",
    description: "High‑efficiency hybrid & wall‑mounted inverters.",
    keywords: "solar inverter, hybrid inverter, off-grid inverter, MPPT inverter, power inverter"
  },
  "portable-power-stations": {
    title: "Portable Power Stations",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage003.jpg",
    description: "Rugged, solar‑ready units for emergency & off‑grid.",
    keywords: "portable power station, solar generator, backup power, camping power, emergency power",
    comingSoon: false
  },
  "electric-mobility": {
    title: "Electric Mobility",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    description: "Electric motorcycles, scooters & e‑bikes.",
    keywords: "electric motorcycle, e-motorcycle, electric scooter, e-bike, electric mobility"
  },
  "power-banks": {
    title: "Power Banks",
    filterCategory: "power-bank",
    image: "/homeImg/energyPlatformImage05.jpg",
    description: "Compact, high‑capacity portable chargers for phones, tablets, and laptops.",
    keywords: "power bank, portable charger, magnetic power bank, wireless power bank, fast charging, USB-C PD"
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = solutionConfig[slug];
  if (!config) return { title: "Solution Not Found" };
  return {
    title: `${config.title} Solutions | JoyHand Energy Products`,
    description: config.description,
    keywords: config.keywords,
  };
}

export async function generateStaticParams() {
  return Object.keys(solutionConfig).map((slug) => ({ slug }));
}

function getProductsForCategory(filterCategory) {
  if (filterCategory === "battery") return getProductsByCategory("battery");
  if (filterCategory === "inverter") return getProductsByCategory("inverter");
  if (filterCategory === "electric-mobility") return getProductsByCategory("electric-mobility");
  if (filterCategory === "portable-power") return getProductsByCategory("portable-power");
  if (filterCategory === "power-bank") return getProductsByCategory("power-bank");
  return [];
}

export default async function SolutionsPage({ params }) {
  const { slug } = await params;
  const config = solutionConfig[slug];
  if (!config) notFound();

  const allProducts = getProductsForCategory(config.filterCategory);

  return (
    <Suspense fallback={<div className="container mt-3">Loading solutions...</div>}>
      <SolutionClient slug={slug} config={config} allProducts={allProducts} />
    </Suspense>
  );
}
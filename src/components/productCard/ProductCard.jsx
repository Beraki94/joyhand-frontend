"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiBatteryHigh, PiLightning } from "react-icons/pi";

const ProductCard = ({ product }) => {
  const { name, slug, description, image, category, specifications } = product;
  
  // Get first two specs for preview
  const previewSpecs = [];
  if (specifications) {
    if (specifications.power) previewSpecs.push({ label: "Power", value: specifications.power });
    else if (specifications.energy) previewSpecs.push({ label: "Capacity", value: specifications.energy });
    else if (specifications.capacity) previewSpecs.push({ label: "Capacity", value: specifications.capacity });
    
    if (specifications.nominalVoltage) previewSpecs.push({ label: "Voltage", value: specifications.nominalVoltage });
    else if (specifications.dcInput) previewSpecs.push({ label: "Input", value: specifications.dcInput });
  }

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <Link href={`/products/${slug}`} className="product-card__link" aria-label={`View ${name} details`}>
        <div className="product-card__image-wrapper">
          <Image
            src={image || "/images/placeholder.jpg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="product-card__image"
            loading="lazy"
          />
          <meta itemProp="image" content={image} />
        </div>

        <div className="product-card__content">
          <div className="product-card__category">
            {category === "battery" ? <PiBatteryHigh className="product-card__category-icon" /> : <PiLightning className="product-card__category-icon" />}
            <span className="product-card__category-text">{category}</span>
          </div>

          <h3 className="product-card__title" itemProp="name">{name}</h3>
          
          <p className="product-card__description" itemProp="description">{description}</p>

          {previewSpecs.length > 0 && (
            <ul className="product-card__specs">
              {previewSpecs.map((spec, index) => (
                <li key={index} className="product-card__spec">
                  <span className="product-card__spec-label">{spec.label}:</span>
                  <span className="product-card__spec-value">{spec.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>

      <div className="product-card__footer">
        <button className="btn btn--secondary product-card__button" aria-label="Request quote for this product">
          Request Quote
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
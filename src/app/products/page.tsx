"use client";
import React from "react";
import Image from "next/image";

import Banner from "@/components/Banner";

const products = [
  {
    title: "Modern Sofa",
    image: "/images/slide2.jpg",
    description:
      "A comfortable modern sofa with sleek design and high-quality fabric.",
    details: [
      "Material: Fabric",
      "Dimensions: 84 x 34 x 30 inches",
      "Color: Gray",
    ],
  },
  {
    title: "Wooden Dining Table",
    image: "/images/slide1.jpg",
    description:
      "A sturdy wooden dining table that can comfortably seat six people.",
    details: [
      "Material: Solid Wood",
      "Dimensions: 72 x 36 x 30 inches",
      "Color: Natural Wood",
    ],
  },
  {
    title: "Ergonomic Office Chair",
    image: "/images/slide3.jpg",
    description:
      "An ergonomic office chair designed for maximum comfort during long hours of work.",
    details: [
      "Material: Mesh and Plastic",
      "Adjustable Height",
      "Color: Black",
    ],
  },
  {
    title: "Queen Bed Frame",
    image: "/images/slide1.jpg",
    description:
      "A stylish queen bed frame made from high-quality wood with a classic finish.",
    details: [
      "Material: Wood",
      "Dimensions: 80 x 60 inches",
      "Color: Dark Brown",
    ],
  },
  {
    title: "Luxury Recliner",
    image: "/images/slide2.jpg",
    description:
      "A luxury recliner with plush cushioning and a smooth reclining mechanism.",
    details: [
      "Material: Leather",
      "Dimensions: 35 x 40 x 40 inches",
      "Color: Beige",
    ],
  },
];

const ProductsPage = () => {
  return (
    <div className="overflow-hidden">
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Our Products"
      />
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white p-6 shadow-lg rounded-lg"
            >
              <Image
                width={300}
                height={300}
                src={product.image}
                alt={product.title}
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
              <p className="text-lg mb-4">{product.description}</p>
              <ul className="list-disc list-inside">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="text-md">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

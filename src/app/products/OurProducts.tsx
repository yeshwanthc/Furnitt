import React from "react";
import Image from "next/image";

import AnimatedText from "@/components/TextAnimate";

const OurProducts = () => {
  const products = [
    {
      title: "Modern Sofa",
      image: "/images/slide1.jpg",
      description:
        "A comfortable modern sofa with sleek design and high-quality fabric.",
    },
    {
      title: "Wooden Dining Table",
      image: "/images/slide2.jpg",
      description:
        "A sturdy wooden dining table that can comfortably seat six people.",
    },
    {
      title: "Ergonomic Office Chair",
      image: "/images/slide3.jpg",
      description:
        "An ergonomic office chair designed for maximum comfort during long hours of work.",
    },
  ];
  return (
    <div className=" py-[60px] bg-gray-100">
    <div className="container-main">
        <div className="flex justify-center">
        <AnimatedText text="Our Products" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="product-card bg-white shadow-lg">
            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.title}
              className="mb-2 w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl text-center font-bold mb-4">{product.title}</h3>
              <p className="text-lg text-center mb-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurProducts;

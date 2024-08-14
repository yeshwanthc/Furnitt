import React from "react";
import Image from "next/image";

import AnimatedText from "@/components/TextAnimate";

const OurProducts = () => {
  const products = [
    {
      title: "Designer Ceilings",
      image: "/images/1.png",
      description:
        "Often neglected but essential, we use quality materials like wood, POP, and artex to give your ceiling a much-needed touch-up.",
    },
    {
      title: "Wood Works",
      image: "/images/2.png",
      description:
        "Modernize your home with custom woodwork that reflects your personality. From TV mounts to extensive wardrobes and storage units, we handle everything.",
    },
    {
      title: "Amazing Flooring",
      image: "/images/3.png",
      description:
        "Whether it’s solid wood for your living room or marble for your kitchen, we provide flooring that gives your home a perfect finish.",
    },
    {
      title: "Glass Innovation",
      image: "/images/4.png",
      description:
        "Install sleek and stylish glass stairs, partitions, cabinets, designer doors, and more. The possibilities with this versatile material are endless.",
    },
    {
      title: "Wall Covers",
      image: "/images/1.png", 
      description:
        "Decorate your interior spaces to make rooms look bigger and brighter with murals, paintings, stone cladding, and designer wallpapers.",
    },
    {
      title: "Furniture",
      image: "/images/2.png", 
      description:
        "Add a touch of class with fabulously designed furniture, making your home look and feel amazing.",
    },
    {
      title: "Home Automation",
      image: "/images/3.png", 
      description:
        "Control your heating, lighting, and more from your phone, no matter where you are. Live in the next century with our automation systems.",
    },
    {
      title: "Electrical Fixtures",
      image: "/images/4.png", 
      description:
        "Brighten up your home with designer lights, fans, hobs, chimneys, and more, making it both functional and beautiful.",
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
          <div key={index} className="product-card rounded-sm bg-white shadow-lg">
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

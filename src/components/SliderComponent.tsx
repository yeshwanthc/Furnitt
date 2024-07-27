import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "@/styles/Home.scss";

const StackableSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: "/images/slide1.jpg",
      heading: "Bringing Your Dream Home to Life – Easily and Affordably!",
      caption:
        "Furnitt transforms homes with professionalism and affordability, offering exceptional results at reasonable prices.",
      buttonLink: "/contact",
    },
    {
      id: 2,
      imageUrl: "/images/slide2.jpg",
      heading: "Comprehensive Interior Design Services",
      caption:
        "From ceilings to walls and electrical fixes to automation, Furnitt's team of industry trade professionals covers all your needs.",
      buttonLink: "/services",
    },
    {
      id: 3,
      imageUrl: "/images/slide3.jpg",
      heading: "About Furnitt",
      caption:
        "A professional interior design firm dedicated to infusing creativity and artistic flair into your home, making it reflect your personality.",
      buttonLink: "/about",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative overflow-hidden">
      <div className="stackable-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`stackable-slide ${index === currentSlide ? "active" : ""}`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.caption}
              width={1400}
              height={800}
              className="w-full h-full object-cover"
            />
            <div className="slide-content absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-2xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg font-light mb-4">{slide.caption}</p>
              <Link href={slide.buttonLink} className="btn btn-primary text-lg">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackableSlider;

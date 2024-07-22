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
      caption: "First Slide",
      heading: "Welcome to Slide 1",
      buttonLink: "/page1",
    },
    {
      id: 2,
      imageUrl: "/images/slide2.jpg",
      caption: "Second Slide",
      heading: "Discover Slide 2",
      buttonLink: "/page2",
    },
    {
      id: 3,
      imageUrl: "/images/slide3.jpg",
      caption: "Third Slide",
      heading: "Explore Slide 3",
      buttonLink: "/page3",
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
              <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-2xl mb-4">{slide.caption}</p>
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

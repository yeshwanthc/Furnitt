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
      heading: "Welcome to Furnitt",
      caption: "Discover the art of transforming spaces with our expert interior design services. Your journey to a stunning home starts here.",
      buttonLink: "/services", 
      buttonText: "Explore More",
    },
    {
      id: 2,
      imageUrl: "/images/slide2.jpg",
      heading: "Your Dream Home Awaits",
      caption: "Let us bring your vision to life with tailored designs that reflect your style and personality, creating a home you'll love.",
      buttonLink: "/products", 
      buttonText: "Start Your Journey",
    },
    {
      id: 3,
      imageUrl: "/images/slide3.jpg",
      heading: "Interiors That Inspire",
      caption: "Experience luxurious and functional interiors crafted to perfection, making every corner of your home truly special.",
      buttonLink: "/services", 
      buttonText: "View Our Work",
    },
    {
      id: 4,
      imageUrl: "/images/slide2.jpg", 
      heading: "Let's Create Together",
      caption: "Ready to transform your space? Get in touch with our team to start your design journey today.",
      buttonLink: "/contact", 
      buttonText: "Contact Us",
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
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackableSlider;

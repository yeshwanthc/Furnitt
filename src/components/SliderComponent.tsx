import React, { useState, useEffect } from 'react';

const StackableSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, imageUrl: 'images/slide1.jpg', caption: 'First Slide' },
    { id: 2, imageUrl: 'images/slide2.jpg', caption: 'Second Slide' },
    { id: 3, imageUrl: 'images/slide3.jpg', caption: 'Third Slide' },
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
          <div key={slide.id} className={`stackable-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.imageUrl} alt={slide.caption} className="w-full h-full object-cover" />
            <div className="slide-caption absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackableSlider;

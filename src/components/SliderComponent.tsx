"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    imageUrl: "/images/1.png",
    heading: "Welcome to Furnitt",
    caption: "Discover the art of transforming spaces with our expert interior design services.",
    buttonLink: "/services",
    buttonText: "Explore More",
  },
  {
    id: 2,
    imageUrl: "/images/2.png",
    heading: "Your Dream Home Awaits",
    caption: "Let us bring your vision to life with tailored designs that reflect your style and personality.",
    buttonLink: "/products",
    buttonText: "Start Your Journey",
  },
  {
    id: 3,
    imageUrl: "/images/3.png",
    heading: "Interiors That Inspire",
    caption: "Experience luxurious and functional interiors crafted to perfection.",
    buttonLink: "/services",
    buttonText: "View Our Work",
  },
  {
    id: 4,
    imageUrl: "/images/4.png",
    heading: "Let's Create Together",
    caption: "Ready to transform your space? Get in touch with our team to start your design journey today.",
    buttonLink: "/contact",
    buttonText: "Contact Us",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            custom={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.imageUrl}
              alt={slide.heading}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-[#000000b3] bg-opacity-20" />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{slide.heading}</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.caption}</p>
              <Button asChild size="lg" className="text-black" variant="outline">
                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
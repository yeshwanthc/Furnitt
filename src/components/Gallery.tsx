"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function ParallaxGallery() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/services/1.png",
  "/images/services/2.png",
  "/images/services/3.png",
  "/images/services/4.png",
  "/images/services/5.png",
  "/images/services/6.png",
  "/images/services/7.png",
  "/images/services/8.png",
];

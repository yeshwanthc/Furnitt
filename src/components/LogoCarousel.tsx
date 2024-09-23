"use client";
import Image from "next/image";

import One from "../../public/images/Brands/1.png";
import Two from "../../public/images/Brands/2.png";
import Three from "../../public/images/Brands/3.png";
import Four from "../../public/images/Brands/4.png";
import Five from "../../public/images/Brands/5.png";
import Six from "../../public/images/Brands/6.png";
import Seven from "../../public/images/Brands/7.png";
import Eight from "../../public/images/Brands/8.png";
import Nine from "../../public/images/Brands/9.png";
import Ten from "../../public/images/Brands/10.png";
import Eleven from "../../public/images/Brands/11.png";
import Twelve from "../../public/images/Brands/12.png";

import AnimatedText from "./TextAnimate";

import "@/styles/Home.scss";

export default function LogoCarousel() {
  const logos = [
    { src: One, alt: "Brand 1" },
    { src: Two, alt: "Brand 2" },
    { src: Three, alt: "Brand 3" },
    { src: Four, alt: "Brand 4" },
    { src: Five, alt: "Brand 5" },
    { src: Six, alt: "Brand 6" },
    { src: Seven, alt: "Brand 7" },
    { src: Eight, alt: "Brand 8" },
    { src: Nine, alt: "Brand 9" },
    { src: Ten, alt: "Brand 10" },
    { src: Eleven, alt: "Brand 11" },
    { src: Twelve, alt: "Brand 12" },
  ];

  return (
    <div className="py-[60px]">
      <div className="container-main overflow-hidden clients">
        <div className="py-[60px]">
          <AnimatedText text="Brands in use" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

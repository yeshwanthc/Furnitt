"use client";
import Image from "next/image";

import Airbnb from "../../public/images/airbnb.svg";
import Disney from "../../public/images/disney.svg";
import Facebook from "../../public/images/facebook.svg";

import AnimatedText from "./TextAnimate";

import "@/styles/Home.scss";

export default function LogoCarousel() {
  const logos = [
    { src: Facebook, alt: "Facebook" },
    { src: Disney, alt: "Disney" },
    { src: Airbnb, alt: "Airbnb" },
    { src: Facebook, alt: "Facebook" },
    { src: Disney, alt: "Disney" },
    { src: Airbnb, alt: "Airbnb" },
    { src: Facebook, alt: "Facebook" },
    { src: Disney, alt: "Disney" },
    { src: Airbnb, alt: "Airbnb" },
    { src: Facebook, alt: "Facebook" },
    { src: Disney, alt: "Disney" },
    { src: Airbnb, alt: "Airbnb" },
  ];

  return (
    <div className="py-[60px]">
      <div className="container-main overflow-hidden clients">
        <div className="py-[60px]">
          <AnimatedText text="Our Clients" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center border-1 p-4 border-solid border-black">
              <Image src={logo.src} alt={logo.alt}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
  ];

  return (
    <div className="container-main overflow-hidden clients py-[60px]">
      <div className="py-[60px]">
        <AnimatedText text="Our Clients" />
      </div>
      <div className="relative inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
        <ul
          className="flex absolute top-0 fill-black items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

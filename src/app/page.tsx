"use client";
import React from "react";

import { BentoGridMain } from "@/components/BentoGrid";
import CardsContainer from "@/components/CardsContainer";
import { Faqs } from "@/components/Faqs";
import LogoCarousel from "@/components/LogoCarousel";
import MarqueeComponent from "@/components/Marquee";
import SliderComponent from "@/components/SliderComponent";
import AnimatedText from "@/components/TextAnimate";

import AboutUs from "./about/HomeAbout";

export default function Home() {
  return (
    <div className="">
      <SliderComponent />
      <div className="container-main">
        <div className="py-[60px] md:w-1/2">
          <AnimatedText text="We're the Manufacturers – straight from our factory to your home." />
        </div>
      </div>
      <MarqueeComponent />
      <AboutUs />
      <Faqs />
      <CardsContainer />
      <LogoCarousel />
      <BentoGridMain />
    </div>
  );
}

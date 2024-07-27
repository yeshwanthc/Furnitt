"use client";
import React from "react";

import CardsContainer from "@/components/CardsContainer";
import { Faqs } from "@/components/Faqs";
import LogoCarousel from "@/components/LogoCarousel";
import MarqueeComponent from "@/components/Marquee";
import ModularInteriors from "@/components/ModularInteriors";
import QuickLinks from "@/components/QuickLinks";
import SliderComponent from "@/components/SliderComponent";
import AnimatedText from "@/components/TextAnimate";

import AboutUs from "./about/HomeAbout";
import OurProducts from "./products/OurProducts";

export default function Home() {
  return (
    <div className="">
      <QuickLinks />
      <SliderComponent />
      <div className="container-main">
        <div className="py-[60px] md:w-1/2">
          <AnimatedText text="We're the Manufacturers – straight from our factory to your home." />
        </div>
      </div>
      <MarqueeComponent />
      <AboutUs />
      <ModularInteriors />
      <CardsContainer />
      <OurProducts />
      <LogoCarousel />
      <Faqs />
    </div>
  );
}

"use client";
import React from "react";

import CardsContainer from "@/components/CardsContainer";
import ContactSection from "@/components/ContactSection";
import { Faqs } from "@/components/Faqs";
import LogoCarousel from "@/components/LogoCarousel";
import MarqueeComponent from "@/components/Marquee";
import ModularInteriors from "@/components/ModularInteriors";
import SliderComponent from "@/components/SliderComponent";
import Testimonials from "@/components/testimoniel";
import WhyChooseFurnitt from "@/components/WhyChooseUs";

import AboutFurnitt from "./about/bannerAbout";
import AboutUs from "./about/HomeAbout";
import OurProducts from "./products/OurProducts";

export default function Home() {
  return (
    <div className="">
      <SliderComponent />
 
      <AboutFurnitt />
      <MarqueeComponent />
      <AboutUs />
      <OurProducts />
      <ModularInteriors />
      <CardsContainer />
   
      <LogoCarousel />
    
      <Testimonials />
      <Faqs />
      <WhyChooseFurnitt />
      <ContactSection />
    </div>
  );
}

"use client";
import React from "react";

import CardsContainer from "@/components/CardsContainer";
import { Faqs } from "@/components/Faqs";
import LogoCarousel from "@/components/LogoCarousel";
import MarqueeComponent from "@/components/Marquee";
import ModularInteriors from "@/components/ModularInteriors";
import QuickLinks from "@/components/QuickLinks";
import SliderComponent from "@/components/SliderComponent";
import Testimonials from "@/components/testimoniel";
import AnimatedText from "@/components/TextAnimate";

import AboutUs from "./about/HomeAbout";
import OurProducts from "./products/OurProducts";
import AboutFurnitt from "./about/bannerAbout";
import ContactSection from "@/components/ContactHome";
import WhyChooseFurnitt from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <QuickLinks />
      <SliderComponent />
      {/* <div className="container-main">
        <div className="py-[60px] md:w-1/2">
          <AnimatedText text="We're the Manufacturers – straight from our factory to your home." />
        </div>
      </div> */}
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

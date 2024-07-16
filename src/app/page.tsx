"use client";
import MarqueeComponent from "@/components/Marquee";
import SliderComponent from "@/components/SliderComponent";
import AnimatedText from "@/components/TextAnimate";
import { scroll } from "framer-motion/dom"

import AboutUs from "./about/HomeAbout";
import { Faqs } from "@/components/Faqs";

export default function Home() {
  scroll(progress => console.log(progress))
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
    </div>
  );
}

"use client";
import MarqueeComponent from "@/components/Marquee";
import SliderComponent from "@/components/SliderComponent";
import AnimatedText from "@/components/TextAnimate";

import AboutUs from "./about/HomeAbout";
import { CardStackDemo } from "@/components/AnimatedCard";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="">
      <SliderComponent />
      <div className="container-main">
      <div className="py-[60px] md:w-1/2">
        <AnimatedText text="We're the Manufacturers – straight from our factory to your home." />
      </div>
      </div>
   
      {/* <AnimatedText
        text="Another example of animated text."
        delayPerWord={0.2}
        delayPerChar={0.1}
        duration={0.6}
      /> */}
      <MarqueeComponent />
      <AboutUs
        heading="About Us"
        description="We are dedicated to providing high-quality products directly from our factory to your home. Our mission is to deliver exceptional value and service to our customers.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cupiditate temporibus et laborum ducimus voluptatum tempore animi alias? Dicta expedita, possimus assumenda ut asperiores placeat veniam facilis adipisci quasi voluptas.
      Dolorem maiores eius dicta laborum recusandae assumenda, porro nam reiciendis enim modi fuga, dolore perspiciatis? Nobis, commodi. Commodi id inventore vero tempora dignissimos perspiciatis, iste voluptates sunt ipsum ex blanditiis.
      Rem possimus quia ullam, reprehenderit recusandae eaque iure, nihil optio, excepturi explicabo laudantium vero. Ex, placeat sint. Dignissimos adipisci soluta, repellat deserunt odit molestiae temporibus cum eos, esse architecto vitae.
      Et necessitatibus ullam quisquam ea. Repellendus optio, earum velit sequi consequuntur vero odit, veniam quibusdam quos eligendi eum tenetur eos expedita porro laudantium accusantium quidem magnam quasi soluta animi necessitatibus!"
        imageSrc="/images/slide2.jpg"
        imageAlt="About Us"
      />
      <CardStackDemo />
    </div>
  );
}

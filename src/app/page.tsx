"use client";
import MarqueeComponent from "@/components/Marquee";
import SliderComponent from "@/components/SliderComponent";
import AnimatedText from "@/components/TextAnimate";

export default function Home() {
  return (
    <div className="">
      <SliderComponent />
      <AnimatedText text="We're the Manufacturers – straight from our factory to your home." />
      <AnimatedText text="Another example of animated text." delayPerWord={0.2} delayPerChar={0.1} duration={0.6} />
      <MarqueeComponent />
    </div>
  );
}

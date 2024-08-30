"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
   {
    quote:
      "Furnitt transformed my apartment into a stylish and functional space. Their attention to detail and creativity were outstanding. I couldn’t be happier with the results!",
    name: "Ananya Rao",
    title: "Bangalore",
  },
  {
    quote:
      "The team at Furnitt did an incredible job with our office redesign. The new layout and modern look have really boosted our team’s productivity and morale.",
    name: "Ravi Kumar",
    title: "Chennai",
  },
  {
    quote:
      "Furnitt exceeded my expectations with their design for my home. The quality of their work and the professionalism of their team made the entire process smooth and enjoyable.",
    name: "Priya Sen",
    title: "Kolkata",
  },
  {
    quote:
      "From concept to completion, Furnitt delivered exceptional service. Their innovative designs and commitment to excellence have made our new office a true reflection of our brand.",
    name: "Arjun Mehta",
    title: "Gurgaon",
  },
  {
    quote:
      "I was impressed by Furnitt’s ability to blend style with functionality in our living room. Their expertise and customer service made the whole experience seamless.",
    name: "Maya Nair",
    title: "Bangalore",
  },
];

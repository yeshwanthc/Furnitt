"use client";
import { InfiniteMovingCardsDemo } from "./InCards";

export default function Testimonials() {
  

  return (
    <>
     <section className="py-12">
        <div className="container-main mx-auto">
          <h3 className="text-4xl font-bold text-center">
            What Our Clients Say
          </h3>

          <InfiniteMovingCardsDemo />
        </div>
      </section></>
   
  );
}

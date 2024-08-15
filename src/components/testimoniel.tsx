"use client";
import Image from "next/image";

import Client1 from "../../public/images/1.png";
import Client2 from "../../public/images/2.png";
import Client3 from "../../public/images/3.png";

export default function Testimonials() {
    const testimonials = [
        {
          image: Client1,
          text: "Furnitt transformed my apartment into a stylish and functional space. Their attention to detail and creativity were outstanding. I couldn’t be happier with the results!",
          name: "Ananya Rao",
          designation: "Bangalore",
        },
        {
          image: Client2,
          text: "The team at Furnitt did an incredible job with our office redesign. The new layout and modern look have really boosted our team’s productivity and morale.",
          name: "Ravi Kumar",
          designation: "Chennai",
        },
        {
          image: Client3,
          text: "Furnitt exceeded my expectations with their design for my home. The quality of their work and the professionalism of their team made the entire process smooth and enjoyable.",
          name: "Priya Sen",
          designation: "Kolkata",
        },
      ];

  return (
    <div className="py-[60px] ">
      <div className="container-main text-center">
        <h5 className="text-sm text-gray-500">Testimonials</h5>
        <h2 className="text-4xl text-green-700 font-bold">What Clients Say</h2>
        <p className=" mb-[40px]">Hear from Those Who’ve Experienced the Furnitt Difference</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-[50%]"
                  width={60}
                  height={100}
                />
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <h4 className="font-semibold text-green-700 text-lg">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

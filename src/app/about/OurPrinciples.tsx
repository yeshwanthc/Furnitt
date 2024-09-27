import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    title: "Our History",
    subtitle: "A Legacy of Excellence",
    image: "/images/1.png",
    description:
      "Founded in 2017, Furnitt started as a small team of passionate designers with a vision to revolutionize the interior design industry. Over the years, we've grown into a leading firm, renowned for our innovative approach and impeccable craftsmanship. ",
  },
  {
    title: "Our Vision",
    subtitle: "Transforming Spaces, Enhancing Lives",
    image: "/images/2.png",
    description:
      "To be the leading interior design firm, known for transforming spaces with creativity, quality, and innovation, creating environments that enhance the lives of our clients.",
  },
  {
    title: "Our Mission",
    subtitle: "Exceptional Design, Personalized Solutions",
    image: "/images/3.png",
    description:
      "To deliver exceptional interior design services by understanding our clients' needs, providing personalized solutions, and ensuring every project is executed with precision, on time, and within budget.",
  },
];

export default function OurPrinciples() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container-main mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Our Principles
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          History | Vision | Mission
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card key={index} className="overflow-hidden group perspective">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] transition-all  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]" style={{ transitionDuration: '700ms' }}>
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {principle.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 overflow-y-auto max-h-[280px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

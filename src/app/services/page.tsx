"use client"
import React from "react";

import Banner from "@/components/Banner";
import HowItWorks from "@/components/Helper";
import AnimatedText from "@/components/TextAnimate";

const services = [
  {
    title: "Wood Works (Modular & Carpentry)",
    description: "Modernize your home with custom woodwork that reflects your personality. From TV mounts to extensive wardrobes and storage units, we handle everything.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Furniture",
    description: "Add a touch of class with fabulously designed furniture, making your home look and feel amazing.",
    img: "/images/slide2.jpg",
  },
  {
    title: "Wall Covers",
    description: "Decorate your interior spaces to make rooms look bigger and brighter with murals, paintings, stone cladding, and designer wallpapers.",
    img: "/images/slide3.jpg",
  },
  {
    title: "Designer Ceilings",
    description: "Often neglected but essential, we use quality materials like wood, POP, and artex to give your ceiling a much-needed touch-up.",
    img: "/images/banner.jpg",
  },
  {
    title: "Glass Innovation",
    description: "Install sleek and stylish glass stairs, partitions, cabinets, designer doors, and more. The possibilities with this versatile material are endless.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Amazing Flooring",
    description: "Whether it’s solid wood for your living room or marble for your kitchen, we provide flooring that gives your home a perfect finish.",
    img: "/images/slide2.jpg",
  },
  {
    title: "Home Automation",
    description: "Control your heating, lighting, and more from your phone, no matter where you are. Live in the next century with our automation systems.",
    img: "/images/slide3.jpg",
  },
  {
    title: "Electrical Fixtures",
    description: "Brighten up your home with designer lights, fans, hobs, chimneys, and more, making it both functional and beautiful.",
    img: "/images/slide1.jpg",
  },
];

const recentProjects = [
  {
    title: "Modern Apartment",
    description: "A sleek and contemporary apartment design in the city.",
  },
  {
    title: "Cozy Cottage",
    description: "A warm and inviting cottage in the countryside.",
  },
  {
    title: "Corporate Office",
    description: "A professional and stylish office space for a tech company.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Our Services"
      />
      <div className="container mx-auto p-4">
        <div className="text-center my-8">
          <AnimatedText text="Our Services" delayPerWord={0.4} duration={0.8} />
          <p className="mt-4 text-gray-700">We handle all types of work, big or small. Here’s what we can do for you:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center my-8">
          <AnimatedText text="Recent Projects" delayPerWord={0.4} duration={0.8} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div key={index} className="project-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
        <HowItWorks />
      </div>
    </>
  );
};

export default ServicesPage;

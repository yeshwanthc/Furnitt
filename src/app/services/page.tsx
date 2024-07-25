"use client"
import React from "react";

import Banner from "@/components/Banner";
import AnimatedText from "@/components/TextAnimate";

const services = [
  {
    title: "Residential Design",
    description: "Transforming your home into a beautiful and functional space.",
  },
  {
    title: "Commercial Design",
    description: "Creating efficient and inspiring workspaces for your business.",
  },
  {
    title: "Landscape Design",
    description: "Designing outdoor spaces that complement your lifestyle.",
  },
  {
    title: "Furniture Design",
    description: "Custom furniture pieces tailored to your needs and style.",
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
          <AnimatedText
            text="Our Services"
            delayPerWord={0.4}
            duration={0.8}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center my-8">
          <AnimatedText
            text="Recent Projects"
            delayPerWord={0.4}
            duration={0.8}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div key={index} className="project-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

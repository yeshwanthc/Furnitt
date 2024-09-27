"use client";
import React from "react";

import Banner from "@/components/Banner";
import HowItWorks from "@/components/Helper";
import AnimatedText from "@/components/TextAnimate";

const services = [
  {
    title: "Residential Interiors",
    subtitle: "Crafting Your Dream Home",
    description:
      "Transform your home into a sanctuary with personalized, functional spaces that reflect your unique style. From elegant living rooms to serene bedrooms, we create interiors that enhance comfort and aesthetics.",
    img: "/images/1.png",
  },
  {
    title: "Commercial Interiors",
    subtitle: "Designing Spaces That Work for You",
    description:
      "Boost productivity and brand identity with tailored commercial spaces. Our designs inspire employees and impress clients, from sleek offices to vibrant retail environments.",
    img: "/images/2.png",
  },
  {
    title: "Designer Ceilings",
    subtitle: "Elevate Your Space, Starting from the Top",
    description:
      "Enhance your interiors with stunning ceiling designs that add depth and elegance. Whether intricate patterns or modern simplicity, our ceilings transform any room.",
    img: "/images/services/1.png",
  },
  {
    title: "Wood Works",
    subtitle: "Timeless Craftsmanship, Modern Design",
    description:
      "Add warmth and sophistication with bespoke woodwork. From custom cabinetry to wall panels, our craftsmanship blends traditional techniques with modern design.",
    img: "/images/services/2.png",
  },
  {
    title: "Amazing Flooring",
    subtitle: "The Foundation of Your Space’s Aesthetic",
    description:
      "Set the tone with stylish, durable flooring. Choose from hardwood, marble, or tile to complement your space and elevate your interior design.",
    img: "/images/services/3.png",
  },
  {
    title: "Glass Innovation",
    subtitle: "Shaping Modern Spaces with Elegance",
    description:
      "Bring a sleek, modern edge to your interiors with custom glass partitions, staircases, and furnishings. Our designs maximize natural light and add contemporary flair.",
    img: "/images/services/4.png",
  },
  {
    title: "Wall Covers",
    subtitle: "Transforming Walls into Works of Art",
    description:
      "Turn your walls into artistic statements with designer wallpapers, stone cladding, and more. Our treatments add texture, color, and personality to every room.",
    img: "/images/services/5.png",
  },
  {
    title: "Furniture",
    subtitle: "Comfort Meets Style",
    description:
      "Custom furniture solutions that blend comfort and style. Whether for home or office, our pieces are tailored to enhance both form and function.",
    img: "/images/services/6.png",
  },
  {
    title: "Home Automation",
    subtitle: "Control Your Home at Your Fingertips",
    description:
      "Seamlessly integrate smart technology into your home for enhanced convenience and efficiency. Control lighting, security, and more with a touch.",
    img: "/images/services/7.png",
  },
  {
    title: "Electrical Fixtures",
    subtitle: "Lighting Up Your World with Precision",
    description:
      "Illuminate your space with expertly installed designer lighting and fixtures. Our energy-efficient solutions enhance both functionality and style.",
    img: "/images/services/8.png",
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
        backgroundImage="/images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Our Services"
      />
      <div className="container-main mx-auto p-4">
        <div className="text-center my-8">
          <AnimatedText text="Our Services" delayPerWord={0.4} duration={0.8} />
          <p className="mt-4 text-gray-700">
            We handle all types of work, big or small. Here’s what we can do for
            you:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover mb-4 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-t-lg transition-opacity opacity-0 hover:opacity-100"></div>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h2>
              <h3 className="text-lg font-medium text-gray-600 mb-4">
                {service.subtitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="text-center my-8">
          <AnimatedText
            text="Recent Projects"
            delayPerWord={0.4}
            duration={0.8}
          />
          <p className="text-gray-700">Explore our recent projects through our image carousel, showcasing the diversity and quality of our work. From luxurious homes to state-of-the-art commercial spaces, these projects highlight our commitment to excellence in design and execution. Get inspired by the transformations we’ve achieved and imagine what we can do for your space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="project-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div> */}
        <HowItWorks />
      </div>
    </>
  );
};

export default ServicesPage;

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
      "Your home is more than just a place to live – it's a reflection of who you are. At Furnitt, we specialize in creating beautiful, functional spaces that cater to your lifestyle and aesthetic preferences. From elegant living rooms to serene bedrooms and everything in between, our residential interior services are designed to make your home a true sanctuary. Let us help you transform your living space into the home you've always dreamed of.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Commercial Interiors",
    subtitle: "Designing Spaces That Work for You",
    description:
      "In the business world, your environment plays a crucial role in productivity and brand identity. Furnitt’s commercial interior services focus on creating dynamic, efficient, and visually stunning spaces that inspire employees and impress clients. From modern office layouts to vibrant retail spaces, our designs are crafted to meet the specific needs of your business, helping you create an environment that fosters success.",
    img: "/images/slide2.jpg",
  },
  {
    title: "Designer Ceilings",
    subtitle: "Elevate Your Space, Starting from the Top",
    description:
      "A well-designed ceiling can completely transform a room, adding elegance and depth to your interiors. At Furnitt, we offer a range of designer ceiling options that are both functional and aesthetically pleasing. Whether you prefer intricate patterns or sleek, modern designs, our ceilings are crafted to enhance the overall look and feel of your space.",
    img: "/images/banner.jpg",
  },
  {
    title: "Wood Works",
    subtitle: "Timeless Craftsmanship, Modern Design",
    description:
      "Our woodwork services bring warmth and sophistication to any space. From custom cabinetry to intricate wall panels, our skilled craftsmen create woodwork that combines traditional techniques with contemporary design. Let us add a touch of natural beauty to your home or office with our bespoke woodwork solutions.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Amazing Flooring",
    subtitle: "The Foundation of Your Space’s Aesthetic",
    description:
      "The right flooring sets the tone for your entire space. At Furnitt, we offer a variety of flooring options that are both durable and stylish. Whether you’re looking for the richness of hardwood, the elegance of marble, or the versatility of tiles, we have the perfect solution to complement your interior design.",
    img: "/images/slide2.jpg",
  },
  {
    title: "Glass Innovation",
    subtitle: "Shaping Modern Spaces with Elegance",
    description:
      "Glass adds a modern, sleek touch to any interior. Our glass innovation services include everything from partitions and staircases to custom glass furnishings and doors. With a focus on creativity and precision, we design glass features that enhance natural light and add a contemporary edge to your space.",
    img: "/images/slide3.jpg",
  },
  {
    title: "Wall Covers",
    subtitle: "Transforming Walls into Works of Art",
    description:
      "Walls are the canvas of your space, and with Furnitt’s wall cover services, we turn them into masterpieces. From designer wallpapers to unique stone cladding, we offer a variety of wall treatments that add texture, color, and personality to your interiors. Let us help you create walls that tell a story and elevate your space.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Furniture",
    subtitle: "Comfort Meets Style",
    description:
      "Furniture is the cornerstone of any interior design, and at Furnitt, we offer custom furniture solutions that combine comfort with style. Whether you need a statement piece for your living room or functional furniture for your office, our designs are crafted to fit your space and lifestyle perfectly.",
    img: "/images/slide2.jpg",
  },
  {
    title: "Home Automation",
    subtitle: "Control Your Home at Your Fingertips",
    description:
      "Step into the future with Furnitt’s home automation services. We integrate smart technology into your home, allowing you to control lighting, climate, security, and more with just a touch. Our automation solutions are designed to enhance your comfort, convenience, and energy efficiency, making your home smarter and more responsive to your needs.",
    img: "/images/slide3.jpg",
  },
  {
    title: "Electrical Fixtures",
    subtitle: "Lighting Up Your World with Precision",
    description:
      "Lighting plays a crucial role in the ambiance and functionality of any space. Furnitt’s electrical fixture services include the installation of designer lights, fans, and other essential fixtures that not only illuminate your space but also enhance its aesthetic appeal. Let us brighten up your home or office with our expertly installed, energy-efficient solutions.",
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

        <div className="text-center my-8">
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
        </div>
        <HowItWorks />
      </div>
    </>
  );
};

export default ServicesPage;

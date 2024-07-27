"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Banner from "@/components/Banner";
import AnimatedText from "@/components/TextAnimate";

const teamMembers = [
  { name: "John Doe", position: "CEO", img: "/images/slide1.jpg" },
  { name: "Jane Smith", position: "CTO", img: "/images/slide2.jpg" },
  { name: "Alice Johnson", position: "COO", img: "/images/slide3.jpg" },
];

const sections = [
  {
    title: "About Us",
    content: `Furnitt is a professional interior design firm dedicated to infusing creativity and artistic flair into your home. We believe your home is your castle and should reflect your personality, making you swell with pride. As enablers of beautiful living spaces, we have been adding peace, style, and class to countless homes since our foundation, and we can do the same for you.
    For us, your home is not just a space needing an authentic touch; it's a place where you share moments with loved ones. We blend creativity, design, luxury, and architecture to give your home a splendid, heartwarming, and glamorous look. When it comes to designing a beautiful home, you deserve the best in innovation.
    From the moment you engage our services, we deliver perfection. You will experience flexibility, freedom, and extreme professionalism from the initial liaison to the final product. Contact us today to see how we can transform your home.`,
    img: "/images/slide1.jpg",
  },
  {
    title: "Our Methodology",
    content: `We have simplified the process of designing and modernizing your home into an easy eight-step journey to a better living space:
    Step 1: Meet the Customer - We meet with you in person to understand what makes you tick. Your home needs to reflect you from the front door to the attic, balancing your budget, needs, and requirements to create the perfect space.
    Step 2: Conceptualize - Your dreams and ideas come to life on our mood boards. We lay out our plan to make your perfect home a reality, incorporating your feedback and any changes you prefer.
    Step 3: Site Measurement & Space Planning - We assess your current layout and create a comprehensive plan. This includes measuring wall surface area, creating floor plans, and designing furniture layouts.
    Step 4: Design - A specialist will create a full 3D rendering of your design, making it almost tangible. You choose and finalize the perfect paint, materials, and finishing touches before we start the transformation.
    Step 5: Cost Reconciliation and Final Quote - Once you’re ready, we provide a final quote. Now you can relax and watch the professionals at work as your dream home takes shape.
    Step 6: Production - Implementation and Installation - Our expert team conducts all necessary work, from structural renovations to cleaning. You’ll be kept informed throughout the process.
    Step 7: Choosing and Placing Furniture & Furnishings - Everything from the 3D design is brought to life. We place your furnishings exactly where you imagined, down to the smallest details.
    Step 8: Handover - Receive your keys and step into your brand-new, perfect home, built to impeccable standards. All work can be completed in 7-9 weeks from the date your plans are approved.`,
    img: "/images/image.jpeg",
  },
  {
    title: "Our Vision & Mission",
    content: "",
    vision: `Our vision is to be a global leader in technology solutions, empowering businesses to achieve their goals through innovative and efficient solutions. We aim to foster a culture of continuous improvement and excellence in all our endeavors.`,
    mission: `Our mission is to deliver exceptional design solutions that enhance the quality of living spaces, reflecting the unique personality and style of our clients. We are committed to professionalism, innovation, and excellence in all our projects.`,
  },
];

const AboutPage: React.FC = () => {
  const slideUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="overflow-hidden bg-white text-black">
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="About Us"
      />
      <div className="container-main py-16">
        {sections.map((section, index) => (
          <section className="mb-16" key={index}>
            <AnimatedText text={section.title} />
            {section.title === "Our Vision & Mission" ? (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <motion.p
                    initial={slideUp.initial}
                    whileInView={slideUp.animate}
                    viewport={{ once: true }}
                    transition={slideUp.transition}
                    className="text-lg"
                  >
                    {section.vision}
                  </motion.p>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <motion.p
                    initial={slideUp.initial}
                    whileInView={slideUp.animate}
                    viewport={{ once: true }}
                    transition={slideUp.transition}
                    className="text-lg"
                  >
                    {section.mission}
                  </motion.p>
                </div>
              </div>
            ) : (
              <div>
                <motion.img
                  initial={slideUp.initial}
                  whileInView={slideUp.animate}
                  viewport={{ once: true }}
                  transition={slideUp.transition}
                  src={section.img}
                  alt={section.title}
                  className="mb-4 w-full h-64 object-cover rounded-lg"
                />
                <motion.p
                  initial={slideUp.initial}
                  whileInView={slideUp.animate}
                  viewport={{ once: true }}
                  transition={slideUp.transition}
                  className="text-lg"
                >
                  {section.content}
                </motion.p>
              </div>
            )}
          </section>
        ))}
        <section className="mb-16">
          <AnimatedText text="Our Team" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={slideUp.initial}
                whileInView={slideUp.animate}
                viewport={{ once: true }}
                transition={slideUp.transition}
                className="team-member bg-white p-6 shadow-lg rounded-lg"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="mb-4 w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-lg">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

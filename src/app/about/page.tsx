"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Banner from "@/components/Banner";
import AnimatedText from "@/components/TextAnimate";

const sections = [
  {
    title: "About Our Company",
    content:
      "Our company, XYZ Corp, has been at the forefront of innovation, providing cutting-edge solutions to our clients. We pride ourselves on our commitment to excellence and our ability to deliver high-quality products and services.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Our Team",
    content: [
      { name: "John Doe", position: "CEO", img: "/images/slide1.jpg" },
      { name: "Jane Smith", position: "CTO", img: "/images/slide1.jpg" },
      { name: "Alice Johnson", position: "COO", img: "/images/slide1.jpg" },
    ],
  },
  {
    title: "What We Do",
    content:
      "We provide a wide range of services including software development, consulting, and project management. Our team of experts is dedicated to delivering innovative solutions that meet the unique needs of our clients.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Our Vision",
    content:
      "Our vision is to be a global leader in technology solutions, empowering businesses to achieve their goals through innovative and efficient solutions. We aim to foster a culture of continuous improvement and excellence in all our endeavors.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Our History",
    content:
      "Founded in 2000, XYZ Corp started as a small tech startup and has grown into a leading technology solutions provider. Over the years, we have expanded our services and our team, always staying true to our commitment to innovation and excellence.",
    img: "/images/slide1.jpg",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or would like to learn more about our services, please do not hesitate to contact us at info@xyzcorp.com.",
    img: "/images/slide1.jpg",
  },
];

const AboutPage: React.FC = () => {
  const rightSlide = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="overflow-hidden">
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="About Us"
      />
      <div className="container-main py-16">
        {sections.map((section, index) => (
          <section className="mb-16" key={index}>
            <AnimatedText
              text={section.title}
              delayPerWord={0.4}
              duration={0.8}
            />
            {Array.isArray(section.content) ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {section.content.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={rightSlide.initial}
                    whileInView={rightSlide.animate}
                    viewport={{ once: true }}
                    transition={rightSlide.transition}
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
              </motion.div>
            ) : (
              <div>
                <motion.img
                  initial={rightSlide.initial}
                  whileInView={rightSlide.animate}
                  viewport={{ once: true }}
                  transition={rightSlide.transition}
                  src={section.img}
                  alt={section.title}
                  className="mb-4 w-full h-64 object-cover rounded-lg"
                />
                <motion.p
                  initial={rightSlide.initial}
                  whileInView={rightSlide.animate}
                  viewport={{ once: true }}
                  transition={rightSlide.transition}
                  className="text-lg"
                >
                  {section.content}
                </motion.p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

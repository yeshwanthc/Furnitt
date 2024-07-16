"use client"
import React from "react";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import useOnScreen from "@/hooks/UseOnScreen";

const AboutPage = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.1 });
  const [ref5, isVisible5] = useOnScreen({ threshold: 0.1 });
  const [ref6, isVisible6] = useOnScreen({ threshold: 0.1 });

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
        <section ref={ref1} className="mb-16">
          <motion.h1
            initial={rightSlide.initial}
            animate={isVisible1 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-4xl font-bold mb-4"
          >
            About Our Company
          </motion.h1>
          <motion.p
            initial={rightSlide.initial}
            animate={isVisible1 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-lg"
          >
            Our company, XYZ Corp, has been at the forefront of innovation, providing cutting-edge solutions to our clients. We pride ourselves on our commitment to excellence and our ability to deliver high-quality products and services.
          </motion.p>
        </section>

        <section ref={ref2} className="mb-16">
          <motion.h2
            initial={rightSlide.initial}
            animate={isVisible2 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-3xl font-semibold mb-4"
          >
            Our Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              initial={rightSlide.initial}
              animate={isVisible2 ? rightSlide.animate : rightSlide.initial}
              transition={rightSlide.transition}
              className="team-member bg-white p-6 shadow-lg rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-lg">CEO</p>
            </motion.div>
            <motion.div
              initial={rightSlide.initial}
              animate={isVisible2 ? rightSlide.animate : rightSlide.initial}
              transition={rightSlide.transition}
              className="team-member bg-white p-6 shadow-lg rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
              <p className="text-lg">CTO</p>
            </motion.div>
            <motion.div
              initial={rightSlide.initial}
              animate={isVisible2 ? rightSlide.animate : rightSlide.initial}
              transition={rightSlide.transition}
              className="team-member bg-white p-6 shadow-lg rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Alice Johnson</h3>
              <p className="text-lg">COO</p>
            </motion.div>
            {/* Add more team members as needed */}
          </motion.div>
        </section>

        <section ref={ref3} className="mb-16">
          <motion.h2
            initial={rightSlide.initial}
            animate={isVisible3 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-3xl font-semibold mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={rightSlide.initial}
            animate={isVisible3 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-lg"
          >
            We provide a wide range of services including software development, consulting, and project management. Our team of experts is dedicated to delivering innovative solutions that meet the unique needs of our clients.
          </motion.p>
        </section>

        <section ref={ref4} className="mb-16">
          <motion.h2
            initial={rightSlide.initial}
            animate={isVisible4 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-3xl font-semibold mb-4"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={rightSlide.initial}
            animate={isVisible4 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-lg"
          >
            Our vision is to be a global leader in technology solutions, empowering businesses to achieve their goals through innovative and efficient solutions. We aim to foster a culture of continuous improvement and excellence in all our endeavors.
          </motion.p>
        </section>

        <section ref={ref5} className="mb-16">
          <motion.h2
            initial={rightSlide.initial}
            animate={isVisible5 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-3xl font-semibold mb-4"
          >
            Our History
          </motion.h2>
          <motion.p
            initial={rightSlide.initial}
            animate={isVisible5 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-lg"
          >
            Founded in 2000, XYZ Corp started as a small tech startup and has grown into a leading technology solutions provider. Over the years, we have expanded our services and our team, always staying true to our commitment to innovation and excellence.
          </motion.p>
        </section>

        <section ref={ref6}>
          <motion.h2
            initial={rightSlide.initial}
            animate={isVisible6 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-3xl font-semibold mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={rightSlide.initial}
            animate={isVisible6 ? rightSlide.animate : rightSlide.initial}
            transition={rightSlide.transition}
            className="text-lg"
          >
            If you have any questions or would like to learn more about our services, please do not hesitate to contact us at info@xyzcorp.com.
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

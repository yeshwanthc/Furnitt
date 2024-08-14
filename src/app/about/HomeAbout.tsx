import React from "react";
import Image from "next/image";

import AnimatedText from "@/components/TextAnimate";

const AboutUs = () => {
  let heading = "About Us";
  let description =
    "At Furnitt, we believe that your space should tell a story—your story. With a passion for design and a commitment to quality, we transform ordinary spaces into extraordinary experiences.Furnitt is a professional interior designing firm dedicated to bringing creativity and artistic flare to your home. We believe that your home is your castle, and that every aspect of it should reflect you, and make you swell with pride. We are the enabler! We’ve been bringing peace, style and class to many, many homes since our foundation, and we can do the same for you too. Our team of experts blends creativity with functionality, ensuring every project reflects your unique style and meets your needs. From concept to completion, we handle every detail with precision and care, delivering interiors that not only look stunning but also enhance your way of living. Discover the difference with Furnitt, where your vision becomes our mission.";
  let imageSrc = "/images/image.jpeg";
  let imageAlt = "About Us";
  return (
    <div className=" py-[60px]">
      <div className="about-us-section container-main flex gap-8 h-full flex-col md:flex-row items-center">
        <div className="md:w-[70%]">
          <i>
            <AnimatedText text={heading} />
          </i>
          <i>
            <p className="text-lg bold">
              Crafting Spaces, Creating Experiences
            </p>
          </i>
          <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className="md:w-[20%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import Image from "next/image";

import AnimatedText from "@/components/TextAnimate";

const AboutUs = ({ heading, description, imageSrc, imageAlt }) => {
  return (
    <div className="about-us-section container-main flex flex-col md:flex-row items-center py-10">
      <div className="md:w-[70%]">
        <i>
          <AnimatedText text={heading} />
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
  );
};

export default AboutUs;

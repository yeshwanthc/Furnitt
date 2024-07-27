import React from "react";
import Image from "next/image";

import AnimatedText from "@/components/TextAnimate";

const AboutUs = () => {
  let heading = "About Us";
  let description =
    "Furnitt is a professional interior design firm dedicated to infusing creativity and artistic flair into your home. We believe your home is your castle and should reflect your personality, making you swell with pride. As enablers of beautiful living spaces, we have been adding peace, style, and class to countless homes since our foundation, and we can do the same for you. For us, your home is not just a space needing an authentic touch; it's a place where you share moments with loved ones. We blend creativity, design, luxury, and architecture to give your home a splendid, heartwarming, and glamorous look. When it comes to designing a beautiful home, you deserve the best in innovation. From the moment you engage our services, we deliver perfection. You will experience flexibility, freedom, and extreme professionalism from the initial liaison to the final product. Contact us today to see how we can transform your home.";
  let imageSrc = "/images/poster.jpg";
  let imageAlt = "About Us";
  return (
    <div className=" py-[60px]">
      <div className="about-us-section container-main flex gap-8 h-full flex-col md:flex-row items-center">
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
    </div>
  );
};

export default AboutUs;

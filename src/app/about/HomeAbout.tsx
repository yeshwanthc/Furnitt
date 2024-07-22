import React from "react";
import Image from "next/image";

import AnimatedText from "@/components/TextAnimate";

const AboutUs = () => {
  let heading = "About Us";
  let description =
    "We are dedicated to providing high-quality products directly from our factory to your home. Our mission is to deliver exceptional value and service to our customers.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cupiditate temporibus et laborum ducimus voluptatum tempore animi alias? Dicta expedita, possimus assumenda ut asperiores placeat veniam facilis adipisci quasi voluptas.Dolorem maiores eius dicta laborum recusandae assumenda, porro nam reiciendis enim modi fuga, dolore perspiciatis? Nobis, commodi. Commodi id inventore vero tempora dignissimos perspiciatis, iste voluptates sunt ipsum ex blanditiis.Rem possimus quia ullam, reprehenderit recusandae eaque iure, nihil optio, excepturi explicabo laudantium vero. Ex, placeat sint. Dignissimos adipisci soluta, repellat deserunt odit molestiae temporibus cum eos, esse architecto vitae.Et necessitatibus ullam quisquam ea. Repellendus optio, earum velit sequi consequuntur vero odit, veniam quibusdam quos eligendi eum tenetur eos expedita porro laudantium accusantium quidem magnam quasi soluta animi necessitatibus!";
  let imageSrc = "/images/slide2.jpg";
  let imageAlt = "About Us";
  return (
    <div className="border-y-black border-b-2 py-[60px]">
      <div className="about-us-section container-main flex h-full flex-col md:flex-row items-center">
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

import React from "react";

import Banner from "@/components/Banner";
import { InfiniteMovingCardsDemo } from "@/components/InCards";

import TeamSection from "./Team";

import "../../../styles/About.scss";
import OurPrinciples from "./OurPrinciples";

const AboutPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="About Us"
      ></Banner>

<section className="container-main sm:mt-6 mx-auto py-12 flex flex-col-reverse md:flex-row items-center">
  <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
    <img
      src="/images/1.png"
      alt="About Furnitt"
      className="w-full object-cover"
    />
    <div className="absolute top-0 left-0 w-full h-full border border-white"></div>
  </div>

  <div className="w-full md:w-1/2 md:pl-12">
    <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">Modern Interior Solutions</h3>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left">
      Furnitt is a professional interior design firm dedicated to creating
      artistic and personalized living spaces. Our designs are a perfect
      blend of creativity, functionality, and luxury, ensuring that every
      space we craft is not only beautiful but also practical. With a team
      of experienced designers, we transform ordinary spaces into
      extraordinary experiences.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button className="button_one">View Portfolio</button>
      <button className="button_one">Book Design Consultancy</button>
    </div>
  </div>
</section>


      <OurPrinciples />

      {/* <section className="container mx-auto py-12">
        <h3 className="text-4xl font-bold mb-6 text-center">
          Why Choose Furnitt
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          At Furnitt, we understand that your home is more than just a place to
          live—it&apos;s a reflection of who you are. That&apos;s why we offer
          tailored interior design solutions that meet your unique needs and
          preferences. Our commitment to quality, attention to detail, and
          customer satisfaction sets us apart from the rest.
        </p>
      </section> */}
{/* <TeamSection /> */}
      <section className="py-12">
        <div className="container-main mx-auto">
          <h3 className="text-4xl font-bold text-center">
            What Our Clients Say
          </h3>

          <InfiniteMovingCardsDemo />
        </div>
      </section>

      <section className="bg-black text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg mb-6">
            Get in touch with us today to start your interior design journey.
          </p>
          <a
            href="/contact"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

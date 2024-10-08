import React, { useEffect,useState } from "react";

import CardStack from "./CardStack";
import AnimatedText from "./TextAnimate";

const CardsContainer = () => {
  const [isTextVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  // Add event listener for scroll to manage sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      // Toggle the sticky behavior based on scroll position
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const cards = [
    {
      id: 1,
      content: "Estimate",
      svg: "/images/Svg/estimate.svg",
      description:
        "To quicken the process, our team will produce a project estimate based on the requirements and floor layout.",
    },
    {
      id: 2,
      content: "Design & Measurements",
      svg: "/images/Svg/design.svg",
      description:
        "If you find the estimate aligns with your budget, we kindly request a 3% refundable* charge on the estimate. This payment allows us to visit the site and take real-time measurements to provide detailed 3D and 2D drawings tailored to your layout requirements. If you decide to work with us, that 3% charge will be deducted from the production cost.",
    },
    {
      id: 3,
      content: "Material Selection & Checklist",
      svg: "/images/Svg/inspection.svg",
      description:
        "At this stage, we schedule a meeting at our factory to showcase materials that meet your requirements. Together, we'll review and finalize the checklist for each room, making any necessary revisions or additions. This ensures an accurate final quote for your project.",
    },
    {
      id: 4,
      content: "Final measurements & Production",
      svg: "/images/Svg/rulers.svg",
      description:
        "At this stage, our team double-checks the measurements, taking into consideration any changes made by the client. Once we ensure accuracy, we proceed to take the final measurements and kickstart the production process.",
    },
    {
      id: 5,
      content: "Installation",
      svg: "/images/Svg/installation.svg",
      description:
        "The materials will be delivered to the location once production and quality inspections are finished. We assign an installation team to start the installation process within 48 hours of dispatch. Our team closely monitors the project throughout this phase for perfect execution.",
    },
    {
      id: 6,
      content: "Inspection & Handover",
      svg: "/images/Svg/inspection.svg",
      description:
        "On the day of handover, our team ensures a thorough check of the installation, confirming that all committed checklist items have been addressed. We then submit the respective brand warranties to the client, if any.",
    },
  ];

  return (
    <div className="py-[60px]">
      <div className="container-main flex flex-col md:flex-row justify-between">
        {/* Sticky text container */}
        <div
          className={`lg:w-1/2 ${isSticky ? "md:sticky md:top-[160px]" : ""} h-fit`}
        >
          {isTextVisible && <AnimatedText text="Our Process" />}
          <p className="text-lg bold">
            A Seamless Journey to Your Perfect Space
          </p>
          <p className="text-base">
            At Furnitt, we’ve refined our process to ensure your design
            experience is smooth, transparent, and enjoyable. From the initial
            consultation to the final handover, we guide you every step of the
            way. Our process begins with understanding your vision, followed by
            meticulous planning and design, and culminates in flawless
            execution. With a focus on quality and attention to detail, we bring
            your dream space to life, on time and within budget. Discover how
            easy it can be to create the home or office you’ve always wanted
            with our expert team by your side.
          </p>
        </div>

        {/* Card Stack */}
        <div className="md:w-1/2">
          <CardStack items={cards} />
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;

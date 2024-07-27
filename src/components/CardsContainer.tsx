import React, { useState } from "react";

import CardStack from "./CardStack";
import AnimatedText from "./TextAnimate";

const CardsContainer = () => {
  const [isTextVisible] = useState(true); // State to control visibility of AnimatedText

  const cards = [
    {
      id: 1,
      content: "Estimate",
      description:
        "To quicken the process, our team will produce a project estimate based on the requirements and floor layout.",
    },
    {
      id: 2,
      content: "Design & Measurements",
      description:
        "If you find the estimate align with your budget, we kindly request a 3% refundable* charge on the estimate. This payment allows us to visit the site and take realtime measurements to provide detailed 3D and 2D drawings tailored to your layout requirements. If you decide to work with us, that 3% charge will be deducted from the production cost.",
    },
    {
      id: 3,
      content: "Material Selection & Check list",
      description:
        "At this stage, we schedule a meeting at our factory to showcase materials that meet your requirements. Together, we'll review and finalise the checklist for each room, making any necessary required revisions or additions. This collaborative process ensures an accurate final quote for your project.",
    },
    {
      id: 4,
      content: "Final measurements & Production",
      description:
        "At this stage, our team double-checks the measurements, taking into consideration any changes made by the client. Once we ensure accuracy we proceed to take the final measurements and kickstart the production process.",
    },
    {
      id: 5,
      content: "Installation",
      description:
        "At this stage, the materials will be delivered to the location once production and quality inspections are finished. We assign an installation team to start the installation process within 48 hours of dispatch. Our team keeps a close watch on the project throughout this phase for perfect execution.",
    },
    {
      id: 6,
      content: "Inspection & Handover",
      description:
        "On the day of handover, our team ensures a thorough check of the installation, confirming that all committed checklist items have been addressed. We then submit the respective brands warranties to the client if any.",
    },
  ];

  // const handleUnmount = () => {
  //   setIsTextVisible(false);
  // };

  return (
    <div className="border-y-black border-b-2 py-[60px]">
      <div className="container-main flex flex-col md:flex-row justify-between">
        {isTextVisible && <AnimatedText text="Our Products" />}

        <div className="md:w-1/2">
          <CardStack items={cards} />
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;

import React from "react";

import Banner from "@/components/Banner";
import MultistepCostCalculator from "@/components/CostCalculator";

const page = () => {
  return (
    <>
      {" "}
      <Banner
        backgroundImage="/images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Cost Calculator"
      ></Banner>
      <MultistepCostCalculator />
    </>
  );
};

export default page;

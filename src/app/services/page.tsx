import React from "react";

import Banner from "@/components/Banner";

const ServicesPage = () => {
  return (
    <>
      {" "}
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Our Services"
      ></Banner>
    </>
  );
};

export default ServicesPage;

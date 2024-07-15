import React from "react";

import Banner from "@/components/Banner";

const AboutPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="About Us"
      ></Banner>
    </div>
  );
};

export default AboutPage;

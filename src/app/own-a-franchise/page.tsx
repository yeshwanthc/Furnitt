import React from "react";

import Banner from "@/components/Banner";
import OwnAFranchise from "@/components/OwnaFranchise";

const page = () => {
  return (
    <>
      {" "}
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Cost Calculator"
      ></Banner>
     <OwnAFranchise />
    </>
  );
};

export default page;

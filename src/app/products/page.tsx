import React from "react";

import Banner from "@/components/Banner";

const ProductsPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Our Products"
      ></Banner>
    </div>
  );
};

export default ProductsPage;

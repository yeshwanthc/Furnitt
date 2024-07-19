import Banner from "@/components/Banner";
import React from "react";

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

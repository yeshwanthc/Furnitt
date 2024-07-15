import { ParallaxGallery } from "@/components/Gallery";
import React from "react";
import Banner from "@/components/Banner"


const Gallery = () => {
  return (
    <>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Gallery"
      ></Banner>
      <ParallaxGallery />
    </>
  );
};

export default Gallery;

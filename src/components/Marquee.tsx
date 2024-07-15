import React from "react";


const MarqueeComponent = () => {

  return (
    <div className="w-full bg-black">
      <marquee behavior="scroll" direction="left" scrollamount="20">
        <div className="bg-black text-white text-8xl">
         No Hassles * No Middlemen * No Commission *
        </div>
      </marquee>
    </div>
  );
};

export default MarqueeComponent;

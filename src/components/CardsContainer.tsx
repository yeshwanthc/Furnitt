import React, { useState } from "react";

import CardStack from "./CardStack";
import AnimatedText from "./TextAnimate";

const CardsContainer = () => {
  const [isTextVisible, setIsTextVisible] = useState(true); // State to control visibility of AnimatedText

  const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
  ];

  // const handleUnmount = () => {
  //   setIsTextVisible(false); 
  // };

  return (
    <div className="border-y-black border-b-2 py-[60px]">
      <div className="container-main flex flex-row justify-between">
        {isTextVisible && <AnimatedText text="Our Products" />}
        <CardStack items={cards} />
      </div>
    </div>
  );
};

export default CardsContainer;

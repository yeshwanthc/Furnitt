import React from "react";
import Image from "next/image";

type Card = {
  id: number;
  content: string;
  description: string;
  svg: string;  
};

type CardStackProps = {
  items: Card[];
};

const CardStack: React.FC<CardStackProps> = ({ items }) => {
  return (
   
    <div className="container mx-auto p-4">
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li
            key={item.id}
            style={{ top: `${150 + index * 10}px` }}
            className="md:sticky"
          >
            <div className="p-[20px] md:p-[40px] border-gray rounded-[20px] border-1 bg-white">
              <div className="flex items-center justify-between gap-4 mb-2">
              <h1 className="text-md md:text-3xl font-semibold">
                  {item.content}
                </h1>
                <Image
                  src={item.svg}
                  height={50}
                  width={50}
                  alt={item.content}
                  className="object-contain"
                />
              
              </div>
              <p className="text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>


  );
};

export default CardStack;

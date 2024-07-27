import React from "react";

type Card = {
  id: number;
  content: string;
  description:string;
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
            className="sticky"
          >
            <div className="p-4 md:p-10 border-gray-200 rounded border-2 bg-white">
              <h1 className="text-lg md:text-xl font-semibold">
                {item.content}
              </h1>
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

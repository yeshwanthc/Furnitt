import React from "react";

type Card = {
  id: number;
  content: string;
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
            <div className="h-[200px] w-[300px] md:h-[300px] md:w-[400px] p-4 md:p-10 border-gray-200 rounded border-2 bg-white">
              <h1 className="text-lg md:text-xl font-semibold">
                {item.content}
              </h1>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                voluptate necessitatibus sint quasi veniam iure mollitia aperiam
                ipsam minus rem dolorum sed fugit, ratione eos sapiente nam
                voluptatum. Dolor, doloremque.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardStack;

import React, { useState } from 'react';
import Image from 'next/image';

interface Appliance {
  name: string;
  image: string;
}

const appliances: Appliance[] = [
  { name: 'MODULAR KITCHENS', image: '/images/Svg/design.svg' },
  { name: 'WARDROBES', image: '/images/Svg/estimate.svg' },
  { name: 'CABINETS & CONSOLES', image: '/images/Svg/list.svg' },
  { name: 'TV UNITS', image: '/images/Svg/rulers.svg' },
  { name: 'VANITIES', image: '/images/Svg/design.svg' },
];

const ModularInteriors: React.FC = () => {
  const [hoveredAppliance, setHoveredAppliance] = useState<Appliance | null>(null);

  return (
    <div className="container-main py-8 md:py-[100px] min-h-[80vh] md:h-[100vh] bg-white text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-2xl text-left md:text-3xl lg:text-5xl font-bold leading-snug">
            We are dedicated to
          </h2>
          <h2 className="text-2xl text-left md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 leading-snug">
            Modular Interiors like
          </h2>

          <ul className="space-y-3 md:space-y-4 lg:space-y-6">
            {appliances.map((appliance, index) => (
              <li
                key={index}
                className="text-lg md:text-2xl lg:text-4xl font-bold cursor-pointer text-gray-400 hover:text-black transition duration-300 ease-in-out flex items-center"
                onMouseEnter={() => setHoveredAppliance(appliance)}
                onMouseLeave={() => setHoveredAppliance(null)}
              >
                {appliance.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          {hoveredAppliance && (
            <Image
              src={hoveredAppliance.image}
              height={150}
              width={150}
              alt={hoveredAppliance.name}
              className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModularInteriors;

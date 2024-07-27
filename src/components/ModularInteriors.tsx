import React, { useState } from 'react';
import Image from 'next/image';

// Define the Appliance type
interface Appliance {
  name: string;
  image: string;
}

// Define the list of appliances with type annotation
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
    <div className="container-main md:py-[100px] md:h-[100vh] bg-white text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl text-left lg:text-5xl font-bold">We are dedicated to</h2>
          <h2 className="text-3xl text-left lg:text-5xl font-bold mb-8">Modular Interiors like</h2>

          <ul className="space-y-4 lg:space-y-6">
            {appliances.map((appliance, index) => (
              <li
                key={index}
                className="text-xl lg:text-4xl font-bold cursor-pointer text-gray-300 hover:text-black transition duration-300 ease-in-out flex items-center"
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
              className="w-40 h-40 lg:w-64 lg:h-64 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModularInteriors;

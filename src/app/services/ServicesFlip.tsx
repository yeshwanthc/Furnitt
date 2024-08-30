import React from "react";

const ServicesFlip = () => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-8 p-6">
      {/* Our Mission Flip Card */}
      <div className="w-72 h-72 perspective-1000">
        <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d hover:transform rotate-y-180">
          <div className="absolute w-full h-full backface-hidden rounded-lg">
            <img
              src="/images/1.png"
              alt="Our Mission"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute w-full h-full bg-blue-600 text-white transform rotate-y-180 backface-hidden flex flex-col justify-center items-center p-4 rounded-lg">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <h4 className="text-lg mt-2">Guiding Our Path Forward</h4>
            <p className="text-sm mt-4">
              To deliver exceptional interior design services by understanding
              our clients' needs, providing personalized solutions, and ensuring
              every project is executed with precision, on time, and within
              budget.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision Flip Card */}
      <div className="w-72 h-72 perspective-1000">
        <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d hover:transform rotate-y-180">
          <div className="absolute w-full h-full backface-hidden rounded-lg">
            <img
              src="/images/2.png"
              alt="Our Vision"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute w-full h-full bg-blue-600 text-white transform rotate-y-180 backface-hidden flex flex-col justify-center items-center p-4 rounded-lg">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <h4 className="text-lg mt-2">Guiding Our Path Forward</h4>
            <p className="text-sm mt-4">
              To be the leading interior design firm, known for transforming
              spaces with creativity, quality, and innovation, creating
              environments that enhance the lives of our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Our History Flip Card */}
      <div className="w-72 h-72 perspective-1000">
        <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d hover:transform rotate-y-180">
          <div className="absolute w-full h-full backface-hidden rounded-lg">
            <img
              src="/images/3.png"
              alt="Our History"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute w-full h-full bg-blue-600 text-white transform rotate-y-180 backface-hidden flex flex-col justify-center items-center p-4 rounded-lg">
            <h3 className="text-xl font-bold">Our History</h3>
            <h4 className="text-lg mt-2">A Legacy of Excellence</h4>
            <p className="text-sm mt-4">
              Founded in 2017, Furnitt started as a small team of passionate
              designers with a vision to revolutionize the interior design
              industry. Over the years, we've grown into a leading firm, renowned
              for our innovative approach and impeccable craftsmanship. Our journey
              is marked by continuous learning, adaptation, and a relentless pursuit
              of excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFlip;

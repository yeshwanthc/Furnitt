import React from "react";

const HowItWorks = () => {
  const features = [
    {
      title: "All-round service",
      description:
        "From design to installation of your modular wardrobe, our experts handle it all for you.",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.55-.63-4.9-1.69l9.21-9.21C17.37 8.45 18 10.15 18 12c0 4.41-3.59 8-8 8zm-6.31-7.69l9.21-9.21C14.45 4.63 12.85 4 12 4c-4.41 0-8 3.59-8 8 0 .85.63 2.45 1.69 3.31z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Warranty Note",
      description:
        "Providing you with an authorized warranty card, we cover all manufacturing defects.",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L4.5 4v6.28c0 3.79 2.56 7.5 6 8.22 3.44-.72 6-4.43 6-8.22V4L12 2zm2 15l-2-2-2 2V7h4v10z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "45-Days Delivery",
      description:
        "With design, manufacturing & supply innovations we make it possible.",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.57 10.66L12 3.5 3.43 10.66A7.96 7.96 0 002 16c0 4.42 3.58 8 8 8s8-3.58 8-8c0-1.78-.58-3.42-1.57-4.78zM12 22c-3.31 0-6-2.69-6-6 0-1.05.27-2.05.76-2.93l5.24-5.24 5.24 5.24c.49.88.76 1.88.76 2.93 0 3.31-2.69 6-6 6zm0-14.5c-1.38 0-2.5 1.12-2.5 2.5S10.62 12 12 12s2.5-1.12 2.5-2.5S13.38 7.5 12 7.5zm-2.5 7c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Premier Experience",
      description:
        "A world-class customer-centric approach that makes for a hassle-free kitchen design experience like no other.",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V13H7l5-5 5 5h-3v3.5h-4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white">
              <div className="mb-4 text-2xl text-black-500 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

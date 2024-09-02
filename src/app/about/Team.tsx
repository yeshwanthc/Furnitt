import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Designer",
    description:
      "John is a visionary designer with over 10 years of experience in creating stunning interiors.",
    image:
      "https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    description:
      "Jane ensures that all projects run smoothly and are completed on time and within budget.",
    image:
      "https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp",
  },
  {
    name: "Robert Brown",
    role: "Senior Architect",
    description:
      "Robert specializes in creating functional and aesthetically pleasing architectural designs.",
    image:
      "https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp",
  },
];

const TeamSection = () => {
  return (
    <div className="team-section container-main mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
        Our Leadership Team
      </h2>
      <h6 className="text-lg text-gray-600 text-center mb-6">
        The Minds Behind Furnitt’s Success
      </h6>
      <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
        Our leadership team comprises industry veterans who bring a wealth of
        experience, creativity, and strategic thinking to Furnitt. Their vision
        and direction have been instrumental in guiding the company to new
        heights. Committed to fostering a culture of innovation and excellence,
        our leaders work closely with every team member to ensure that our
        clients receive the best service possible.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            className="team-card group perspective"
            key={index}
          >
            <div className="team-card-inner relative h-80 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
              <div className="team-card-front absolute inset-0 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center backface-visibility-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              <div className="team-card-back absolute inset-0 bg-gray-800 text-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center transform rotate-y-180 backface-visibility-hidden">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p className="text-center text-sm mt-4">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

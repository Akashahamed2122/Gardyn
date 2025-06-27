import React from "react";

const teamMembers = [
  {
    name: "William Carter",
    role: "Landscape Architect",
    image: "https://i.ibb.co/6cNTxTMh/1-1.webp", // Replace with your own image URL or local import
  },
  {
    name: "Emily Grace",
    role: "Landscape Designer",
    image: "https://i.ibb.co/VY5Jmdjh/6.webp",
  },
  {
    name: "Anthony Mitchell",
    role: "Garden Designer",
    image: "https://i.ibb.co/sdS5tY2C/4.webp",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#e9f4e8] py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Behind the Scene</span>
        <h2 className="text-4xl font-light text-green-900">
          OUR <span className="font-semibold">TEAM</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex justify-between items-center bg-base-100">
              <div className="text-left">
                <h3 className="text-md font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
              <a
                href="#"
                className="btn btn-circle btn-sm bg-[#e9f4e8] text-green-700 border-none hover:bg-green-200"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

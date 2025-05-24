import React from "react";
import img1 from "../assets/c-1.webp";
import img2 from "../assets/c-2.webp";
import img3 from "../assets/c-3.webp";
import img4 from "../assets/c-4.webp";

const services = [
  {
    title: "Garden Design",
    description: "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
    image: img1,
    icon: "🌿",
  },
  {
    title: "Garden Maintenance",
    description: "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
    image: img2,
    icon: "🧤",
  },
  {
    title: "Decking and Patio",
    description: "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
    image: img3,
    icon: "🪵",
  },
  {
    title: "Plant Selection",
    description: "Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.",
    image: img4,
    icon: "🪴",
  },
];

const PlantMistakes = () => {
  return (
   <div>
     <div className="w-11/12  mx-auto py-16  text-[#354733]">
      <div className="text-center mb-12">
        <button className="px-4 py-1 bg-[#cfd9cf] text-sm rounded-full uppercase tracking-wide mb-4">
          Why Choose Us
        </button>
        <h2 className="text-4xl font-semibold">
          Our Commitment to <br />
          <span className="text-3xl font-light">Excellence</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent p-4 flex flex-col justify-end text-white">
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-1">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default PlantMistakes;

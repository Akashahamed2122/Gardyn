import React from "react";
import img1 from "../assets/c-1.webp";
import img2 from "../assets/c-2.webp";
import img3 from "../assets/c-3.webp";
import img4 from "../assets/c-4.webp";

const services = [
  {
    title: "Overwatering",
    description: "Too much water suffocates roots and causes rot. Always check if the soil is dry before watering again.",
    image: img1,
    icon: "💧",
  },
  {
    title: "Incorrect Lighting",
    description: "Placing plants in the wrong light (too much or too little) affects their growth. Match lighting to plant needs.",
    image: img2,
    icon: "💡",
  },
  {
    title: "Wrong Pot Size",
    description: "A pot that’s too small or too large can restrict root development. Use a pot that suits the plant’s current size.",
    image: img3,
    icon: "🪴",
  },
  {
    title: "Poor Soil Quality",
    description: "Using the wrong type of soil can block nutrients. Choose soil that's appropriate for your specific plant species.",
    image: img4,
    icon: "🌱",
  },
];


const PlantMistakes = () => {
  return (
   <div>
     <div className="w-11/12  mx-auto py-16  text-[#354733]">
      <div className="text-center mb-12">
        
        <h2 className="text-4xl font-semibold">
         Top Plant Care Mistakes
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

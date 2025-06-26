import React from "react";
import { Link } from "react-router"; // ✅ Corrected from react-router

const AllPlantsCard = ({ plant }) => {
  const { plantname, photo, category, _id, freequency } = plant;

  return (
    <div className="w-full border border-gray-300 rounded-xl overflow-hidden bg-white shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer group">
      
      {/* Image with Overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={photo}
          alt={`Photo of ${plantname}`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
          <h3 className="text-white text-xl font-bold">{plantname}</h3>
        </div>
      </div>

      {/* Details & Button */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Watering Frequency:</span> {freequency}
        </p>

        <Link to={`/viewDetails/${_id}`}>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-200 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllPlantsCard;

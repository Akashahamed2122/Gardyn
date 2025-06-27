import React from 'react';
import { Link } from 'react-router'; // ✅ ঠিক করে দিলাম

const DisplayPlantsCard = ({ plant }) => {
  const { plantname, photo, _id } = plant;

  return (
    <div  data-aos="flip-up" className="w-full  border border-gray-300 rounded-xl overflow-hidden bg-white shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer group">
      
      {/* Image as Background with Title Overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={photo}
          alt={plantname}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
          <h3 className="text-white text-xl font-bold">{plantname}</h3>
        </div>
      </div>

      {/* Button Section */}
      <div className="p-4">
        <Link to={`/viewDetails/${_id}`}>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-200 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayPlantsCard;

import React from 'react';
import { Link } from 'react-router';

const DisplayPlantsCard = ({ plant }) => {
  const { plantname, photo, _id } = plant;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={photo}
            alt={plantname}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">{plantname}</h3>
          <Link to={location?.state ||`/viewDetails/${_id}`}>
            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition duration-200 w-fit">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayPlantsCard;

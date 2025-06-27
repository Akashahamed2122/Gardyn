import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { Leaf, CalendarDays, Info, Heart } from 'lucide-react';

const ViewDetails = () => {
  const plants = useLoaderData();
  const { id } = useParams();

  const plant = plants.find(p => p._id === id);

  if (!plant) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-200 text-red-600 text-xl font-semibold">
        Plant not found, mama. 😢
      </div>
    );
  }

  const {
    plantname,
    photo,
    category,
    helthstatus,
    "plant-info": plantInfo,
    "nex-water-date": nextWaterDate,
    "text-area": textArea
  } = plant;

  return (
    <div className="p-6 w-8/12 mt-30 mx-auto  min-h-screen">
      {/* Top Buttons */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
       <Link to={`/`}> <button className="btn btn-outline btn-sm">⬅ Back</button></Link>
        <Link to={`/allplants`}><button className="btn btn-outline btn-sm">🌱 All Plants</button></Link>
      </div>

      {/* Banner Image */}
<div
  className="w-full h-[300px] md:h-[400px] rounded-xl bg-no-repeat bg-center bg-cover border shadow"
  style={{ backgroundImage: `url(${photo})` }}
></div>


      {/* Plant Info */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-green-800">{plantname}</h2>
        <p className="text-gray-500">{category}</p>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="badge badge-outline gap-1 text-green-700">
            <Info size={16} /> {plantInfo}
          </span>
          <span className="badge badge-outline gap-1 text-green-700">
            <CalendarDays size={16} /> {nextWaterDate}
          </span>
          <span className="badge badge-outline gap-1 text-green-700">
            <Heart size={16} /> {helthstatus}
          </span>
        </div>

        {/* Author or Water Info (Optional) */}
        <div className="mt-6 bg-green-50 p-4 rounded-xl shadow border">
          <p className="flex items-center gap-2 text-green-700">
            <Leaf /> <span className="font-medium">Category:</span> {category}
          </p>
        </div>

        {/* More Details */}
        <div className="mt-8 border rounded-xl p-5 space-y-4">
          <h3 className="text-xl font-semibold mb-2 text-green-800">More About This Plant</h3>
          <p className="leading-relaxed text-gray-700">{textArea}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

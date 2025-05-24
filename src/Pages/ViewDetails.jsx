import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Leaf, CalendarDays, Info, Heart } from 'lucide-react';

const ViewDetails = () => {
    const plants = useLoaderData();
    const { id } = useParams();

    const filterPlant = plants.find(plant => plant._id === id);

    if (!filterPlant) {
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
    } = filterPlant;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 p-4">
            <div className="backdrop-blur-md bg-white/30 shadow-2xl rounded-3xl p-8 max-w-4xl w-full border border-white/20 transition-all duration-300 hover:shadow-green-300">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <img
                        src={photo}
                        alt={plantname}
                        className="rounded-2xl w-full h-64 object-cover shadow-lg border border-white"
                    />
                    <div className="text-gray-800 space-y-4">
                        <h2 className="text-4xl font-extrabold text-green-900">{plantname}</h2>
                        <p className="flex items-center gap-2"><Leaf className="text-green-700" /> <span className="font-semibold">Category:</span> {category}</p>
                        <p className="flex items-center gap-2"><Info className="text-green-700" /> <span className="font-semibold">Watering:</span> {plantInfo}</p>
                        <p className="flex items-center gap-2"><CalendarDays className="text-green-700" /> <span className="font-semibold">Next Water Date:</span> {nextWaterDate}</p>
                        <p className="flex items-center gap-2"><Heart className="text-green-700" /> <span className="font-semibold">Health:</span> {helthstatus}</p>
                    </div>
                </div>
                <div className="mt-8 text-gray-700">
                    <h3 className="text-xl font-semibold mb-2">More About This Plant</h3>
                    <p className="leading-relaxed">{textArea}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;

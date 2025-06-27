import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import MyPlantCard from "./MyPlantCard";
import img1 from '../assets/banner.jpg'

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const initialData = useLoaderData();
  const [plantss, setPlants] = useState(initialData);

  const myPlants = plantss.filter(
    (plant) => plant.email.toLowerCase() === user.email.toLowerCase()
  );

  return (
    <div className="w-full min-h-screen mt-20 px-10 bg-base-100">
      {/* 🌿 Top Banner */}
      <div className="relative h-64 md:h-80 w-full">
        <img
          src={img1}
          className="w-full h-full object-cover brightness-75 rounded-b-xl"
          alt="My Plants Banner"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            🌱 My Plant Collection
          </h1>
          <p className="text-lg mt-3 max-w-2xl">
            A green space that grows with love and care. Here are the plants
            you’ve added and nurtured.
          </p>
        </div>
      </div>

      {/* 🪴 Plants Grid */}
      <div className="w-full md:w-10/12 mx-auto">
        {
          myPlants.length === 0 ? (
            <div className="text-center text-xl py-12 text-gray-500">
              You haven't added any plants yet. 🌿 <br />
              Add some to start your garden journey!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
              {myPlants.map((plants) => (
                <MyPlantCard
                  key={plants._id}
                  plants={plants}
                  plantss={plantss}
                  setPlants={setPlants}
                />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MyPlants;

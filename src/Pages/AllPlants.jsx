import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllPlantsCard from "./AllPlantsCard";

const AllPlants = () => {
  const plants = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔍 & 🏷️ ক্যাটাগরি + সার্চ ফিল্টার
  const filteredPlants = plants.filter((plant) => {
    const matchName = plant.plantname
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || plant.category === selectedCategory;
    return matchName && matchCategory;
  });

  // 🌿 ইউনিক ক্যাটাগরি তৈরি (Dropdown-এর জন্য)
  const categories = ["All", ...new Set(plants.map((p) => p.category))];

  return (
    <div className="py-20">
      <div className="w-8/12 mx-auto py-20">
        <div className="bg-[url(assets/all.jpg)] bg-cover shadow-xl bg-center rounded-xl card items-center justify-center flex h-64 md:h-80">
          <p className="font-bold text-3xl text-center pb-8 text-white">
            All Plants are Here
          </p>
        </div>


        <br />

    

        {/*  */}

        <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-6">
  <input
    type="text"
    placeholder="Search plants by name..."
    className="w-full md:w-1/2 px-5 py-3 rounded-lg border border-gray-300 shadow-sm
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
               transition duration-300 ease-in-out"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="w-full md:w-1/4 px-5 py-3 rounded-lg border border-gray-300 shadow-sm
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
               transition duration-300 ease-in-out bg-white cursor-pointer"
  >
    {categories.map((cat, index) => (
      <option key={index} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>


        {/*  */}

        {/* 🔄 Filtered Plants */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <AllPlantsCard key={plant._id} plant={plant} />
            ))
          ) : (
            <p className="text-center col-span-4 text-red-500 font-semibold">
              No plants found with this name or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPlants;

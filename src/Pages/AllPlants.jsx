import React from "react";
import { useLoaderData } from "react-router";
import AllPlantsCard from "./AllPlantsCard";

const AllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);
  return (
   <div className=" py-20">
	 <div className="w-8/12 mx-auto py-20">
	 <p className="font-bold text-3xl text-center pb-8">All Plants are Hare</p>

	<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
		 {
                    plants.map(plant=> <AllPlantsCard plant={plant}></AllPlantsCard>)
                }

	</div>




    </div>
   </div>
  );
};

export default AllPlants;

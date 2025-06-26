import React from "react";
import { useLoaderData } from "react-router";
import AllPlantsCard from "./AllPlantsCard";

const AllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);
  return (
   <div className=" py-20">
	 <div className="w-11/12 mx-auto">



        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left text-xl">
					<th className="p-3">Name</th>
					<th className="p-3">Category</th>
					<th className="p-3">Image</th>
					<th className="p-3">freequency</th>
					<th className="p-3">ViewDetails</th>
					<th className="p-3"></th>
					
				</tr>
			</thead>
			<tbody>
				{
                    plants.map(plant=> <AllPlantsCard plant={plant}></AllPlantsCard>)
                }
			
			</tbody>
		</table>
	</div>
</div>


    </div>
   </div>
  );
};

export default AllPlants;

import React from "react";
import { Link } from "react-router";

const AllPlantsCard = ({plant}) => {
    const {plantname,photo,category,_id,freequency}=plant
  return (
    <>
<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className="font-bold text-xl">{plantname}</p>
					</td>
					<td className="p-3">
						<p className="text-xl">{category}</p>
					</td>
					<td className="p-3">
						<img className="w-10" src={photo} alt="" />
					</td>
					<td className="p-3">
						<p className="text-xl">{freequency}</p>
					</td>
					<td className="p-3">
						<Link to={`/viewDetails/${_id}`}><button className="btn">ViewDetails</button></Link>
					</td>
					<td className="p-3">
						
					</td>
					
					
				</tr>

    </>
  );
};

export default AllPlantsCard;

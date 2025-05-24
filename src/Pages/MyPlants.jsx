import { use, useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import MyPlantCard from "./MyPlantCard";

const MyPlants = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email)
    const initialData = useLoaderData();
    // console.log(initialData)
    const [plantss,setPlants]=useState(initialData)

 

    const myPlants = plantss.filter(plant => plant.email.toLowerCase() == user.email.toLowerCase());
    // console.log(myPlants)

    return (
        <div className='w-full md:w-7/12 mx-auto'>
          

          <div className="grid  grid-cols-1 md:grid-cols-2  ">
             {
                myPlants.map(plants=> <MyPlantCard plantss={plantss} setPlants={setPlants} key={plants._id} plants={plants}></MyPlantCard>)
            
           }
          </div>

            
        </div>
    );
};
export default MyPlants
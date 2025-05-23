import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const ViewDetails = () => {
    const palants = useLoaderData()
   const {id}=useParams()
   console.log(id)

   const filterPlants = palants.find(plant=> plant._id==id)
   console.log(filterPlants)
   const {plantname,photo}= filterPlants
  

    return (
        <div>
          <img className='w-[40%]' src={photo} alt="" />
        </div>
    );
};

export default ViewDetails;
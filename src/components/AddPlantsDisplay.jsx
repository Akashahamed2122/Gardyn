import React, { use, useState } from 'react';
import DisplayPlantsCard from './DisplayPlantsCard';

const fetchPromise = fetch('https://assignment-server-side-sage.vercel.app/plants').then(res=> res.json())

const AddPlantsDisplay = () => {

    const plants= use(fetchPromise)
    console.log(plants)
    const [showAll,setShowAll]=useState(false)
    const displayedPlants = showAll ? plants : plants.slice(0, 6);

   


    return (
       <div className=' py-12'>
        <div className='w-11/12 mx-auto '>
         <h2 className='text-3xl font-bold mt-5 pl-4 pb-5'>New Plants</h2>
         <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
           
            {
                displayedPlants.map(plant=> <DisplayPlantsCard key={plant._id} plant={plant}></DisplayPlantsCard>)
            }
           
        </div>
         <div className='text-center py-8'>
                {
                showAll?<button onClick={()=>setShowAll(prev=> !prev)} className='btn bg-[#016630] py-4 text-white'> show Less</button>:<button onClick={()=>setShowAll(prev=> !prev)} className='btn bg-[#016630] py-4 text-white'> show All</button>
            }
            </div>
       </div>
       </div>
    );
};

export default AddPlantsDisplay;
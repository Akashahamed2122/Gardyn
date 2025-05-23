import React from 'react';
import { Link } from 'react-router';

const DisplayPlantsCard = ({plant}) => {
    const {plantname,photo,_id}= plant
    return (
        <div className='w-full mx-auto'>
           <div className='flex items-center bg-[#dce0d9]  p-8'>
            <div>
               <img className='w-[200px]' src={photo} alt="" />
            </div>
          <div>
             <p className='font-bold text-3xl'> {plantname}</p>
             <Link to={`/viewDetails/${_id}`}><button className='btn btn-primary mt-5'>viewDetils</button></Link>
          </div>
           </div>
           
            
        </div>
    );
};

export default DisplayPlantsCard;
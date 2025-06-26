import React, { Suspense } from 'react';
import AddPlantsDisplay from './AddPlantsDisplay';
import Loading from './Loading';
import HeroSection from './HeroSection';
import LatestBlog from './LatestBlog';
import PlantMistickes from '../Pages/PlantMistickes';



const Home = () => {
    return (
        <div>
          
          <Suspense fallback={<p className='text-center flex justify-center items-center mt-50'><Loading></Loading></p>}>
          <HeroSection></HeroSection>
             <AddPlantsDisplay></AddPlantsDisplay>
             <PlantMistickes></PlantMistickes>
             <LatestBlog></LatestBlog>
          </Suspense>
          
         
         
         

        </div>
    );
};

export default Home;
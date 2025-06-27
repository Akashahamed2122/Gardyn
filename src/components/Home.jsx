import React, { Suspense } from 'react';
import AddPlantsDisplay from './AddPlantsDisplay';
import Loading from './Loading';
import HeroSection from './HeroSection';
import LatestBlog from './LatestBlog';
import PlantMistickes from '../Pages/PlantMistickes';
import Banner from '../Pages/Banner';
// import PricingPlan from '../Pages/PricingPlan';
import Testimonials from '../Pages/Testimonials';



const Home = () => {
    return (
        <div>
          
          <Suspense fallback={<p className='text-center flex justify-center items-center mt-50'><Loading></Loading></p>}>
          {/* <HeroSection></HeroSection> */}
         <div className='mt-20'>
           <Banner></Banner>
         </div>
             <AddPlantsDisplay></AddPlantsDisplay>
             <PlantMistickes></PlantMistickes>
             <LatestBlog></LatestBlog>
             <div>
             
             </div>
             <Testimonials></Testimonials>
          </Suspense>
          
         
         
         

        </div>
    );
};

export default Home;
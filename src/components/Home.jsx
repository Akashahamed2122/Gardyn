import React, { Suspense } from 'react';
import AddPlantsDisplay from './AddPlantsDisplay';
import Loading from './Loading';
import HeroSection from './HeroSection';
import LatestBlog from './LatestBlog';

const Home = () => {
    return (
        <div>
          <HeroSection></HeroSection>
          <Suspense fallback={<p className='text-center flex justify-center items-center mt-50'><Loading></Loading></p>}>
             <AddPlantsDisplay></AddPlantsDisplay>
          </Suspense>
         <LatestBlog></LatestBlog>

        </div>
    );
};

export default Home;
import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/loading.json";

const Loading = () => {
    return (
        <div className='w-[10%]'>
                   <Lottie animationData={groovyWalkAnimation} loop={1} />;
              </div>
    );
};

export default Loading;
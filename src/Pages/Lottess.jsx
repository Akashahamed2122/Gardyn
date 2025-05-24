import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1748060086074.json";

const Lottess = () => {
     return(
        <div className='w-[100%]'>
             <Lottie animationData={groovyWalkAnimation} loop={1} />;
        </div>
     )
};

export default Lottess;
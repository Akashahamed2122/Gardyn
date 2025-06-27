import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from '../assets/mylogin.json';


const LotteeLogin = () => {
    return (
        <div>
             <Lottie animationData={groovyWalkAnimation} loop={true} />;
        </div>
    );
};

export default LotteeLogin;
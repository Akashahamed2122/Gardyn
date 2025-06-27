import React, { useContext } from 'react';
import Lottie from "lottie-react";
import img from '../assets/dashbord.json';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const DashBordHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full border border-green-100">

        {/* 👤 User Info Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
            Hello, <span className="text-green-600">{user?.displayName || "Plant Lover"}!</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome back to your personal plant dashboard. 🌱 Here you can explore, manage, and track your favorite greenery with ease.
          </p>
          <Link to={`/`}><button className="mt-4 px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition duration-300">
            Go to Home
          </button></Link>
        </div>

        {/* 🎥 Lottie Animation */}
        <div className="w-full md:w-[45%]">
          <Lottie animationData={img} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default DashBordHome;

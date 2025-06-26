import React from 'react';
import { RiPlantLine } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import img1 from '../assets/imgd.jpg';
import { NavLink, Outlet } from 'react-router';
import MyPlantCard from '../Pages/MyPlantCard';
import MyPlants from '../Pages/MyPlants';

const Dashboard = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-gray-500'
          }`
        }
      >
        <IoHome size={20} />
        Home
      </NavLink>

      <NavLink
        to="/allplants"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-gray-500'
          }`
        }
      >
        <RiPlantLine size={20} />
        All Plants
      </NavLink>

      <NavLink
        to="/addplants"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-gray-500'
          }`
        }
      >
        <IoIosAddCircle size={20} />
        Add Plant
      </NavLink>

      <NavLink
        to="/myplants"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-gray-100'
          }`
        }
      >
        <FaUser size={20} />
        My Plants
      </NavLink>
    </>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="col-span-12 md:col-span-3 bg-white shadow-md p-6 rounded-r-2xl">
        <img className="w-24 rounded-full mx-auto mb-6" src={img1} alt="User" />
        <h4 className='text-3xl font-bold text-center text-green-500'>DashBord</h4>
        <br />
        <div className="space-y-2">{links}</div>
      </div>

      {/* Right side */}
      <div className="col-span-12 md:col-span-9 p-6">
        {/* Content goes here */}
        <Outlet></Outlet>
       
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useContext } from 'react';
import { useLocation, Link, NavLink, Outlet } from 'react-router';
import { RiPlantLine } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import img1 from '../assets/imgd.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import DashBordHome from './DashBordHome';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // 👉 বর্তমান path বের করতেছি

  // কোন path এ আছি সেটা চেক
  const isDashboardHome = location.pathname === "/dashboard" || location.pathname === "/dashboard/home";

  const links = (
    <>
      <NavLink
        to="home"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-[#008236] hover:text-white'
          }`
        }
      >
        <IoHome size={20} />
        Home
      </NavLink>

      <NavLink
        to="addplants"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700  hover:bg-[#008236] hover:text-white'
          }`
        }
      >
        <IoIosAddCircle size={20} />
        Add Plant
      </NavLink>

      <NavLink
        to="myplants"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-[#008236] hover:text-white'
          }`
        }
      >
        <FaUser size={20} />
        My Plants
      </NavLink>

      <NavLink
        to="profile"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-[#e6f2ed] text-[#016630]' : 'text-gray-700 hover:bg-[#008236] hover:text-white'
          }`
        }
      >
        <FaUser size={20} />
        Profile
      </NavLink>
    </>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className=" md:col-span-3 bg-white shadow-md p-6 rounded-r-2xl">
        <Link to={`/`}><img className="w-24 rounded-full mx-auto mb-6" src={img1} alt="User" /></Link>
        <h4 className='text-3xl font-bold text-center text-green-500'>DashBord</h4>
        <br />
        <div className="space-y-2">{links}</div>
      </div>

      {/* Right side */}
      <div className=" md:col-span-9 px-4 py-6">
        {/* ✅ conditionally show DashBordHome only if on /dashboard or /dashboard/home */}
        {isDashboardHome && <DashBordHome />}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

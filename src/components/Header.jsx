import React, { use } from "react";
import { IoHome } from "react-icons/io5";
import { Link, Links, NavLink } from "react-router";
import logoImg from "../assets/logo-black.webp";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";



const Header = () => {
  const { user, setUser, logOut } = use(AuthContext);
 

  const handleLogout = () => {
    logOut()
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
    toast.success("Logout succesfully");
  };

  const links = (
    <>
      <li>
        <NavLink className={({isActive})=> isActive? 'border-b-2 text-xl text-[#016630]':'text-xl text-[#016630]' } to="/"> <span><IoHome /></span> Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> isActive? 'border-b-2 text-xl text-[#016630]':'text-xl text-[#016630]' } to="/allplants"> <span><RiPlantLine /></span> All Plants</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> isActive? 'border-b-2 text-xl text-[#016630]':'text-xl text-[#016630]' } to="/addplants"> <span><IoIosAddCircle /></span> Add Plant</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> isActive? 'border-b-2 text-xl text-[#016630]':'text-xl text-[#016630]' } to="myplants"> <span><FaUser /></span> My Plants</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-[#edf2ed]">
        <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="md:block hidden"><img className="w-[100px]" src={logoImg} alt="" /></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-5">


   

                    {/*  */}
                    <div>
                      
                    </div>

        {
          user &&           <div className="tooltip-bottom tooltip" data-tip={user?user.displayName:''}>
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user ? user.photoURL :''}
            alt="User"
          />
</div>

          
        }



          {user ? (
            <Link
              onClick={handleLogout}
              to={`/login`}
              className="btn btn-primary bg-[#016630]"
            >
              LogOut
            </Link>
          ) : (
            <div>
              {" "}
              <Link to={`/login`} className="btn btn-primary bg-[#016630]">
                Login
              </Link>{" "}
              <Link to={`/signup`} className="btn btn-primary bg-[#016630]">
                signup
              </Link>
              
            </div>
            
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;

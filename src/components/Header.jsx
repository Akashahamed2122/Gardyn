import React, { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo512.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import ToggleTheme from "../Pages/ToggleTheme";
import { MdMenu, MdClose, MdLogout } from "react-icons/md";

const Header = () => {
  const { user, logOut } = React.useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        setIsMenuOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error logging out");
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavItem = ({ to, icon: Icon, label, onClick }) => (
    <li className="my-1 md:my-0">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            isActive
              ? "bg-white/20 text-white font-semibold shadow-lg"
              : "text-white/90 hover:text-white hover:bg-white/10"
          }`
        }
      >
        <Icon className="mr-2 text-lg" />
        <span>{label}</span>
      </NavLink>
    </li>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#016630] to-[#008236] shadow-lg py-1"
          : "bg-gradient-to-r from-[#016630]/95 to-[#008236]/95 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white font-bold text-xl"
            onClick={closeMenu}
          >
            <img
              className="w-10 h-10 bg-transparent transition-transform duration-300 hover:scale-110"
              src={logoImg}
              alt="Gardyn Logo"
            />
            <span className="hidden sm:block">gardyn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-2">
              <NavItem to="/" icon={IoHome} label="Home" />
              <NavItem to="/allplants" icon={RiPlantLine} label="All Plants" />
              <NavItem
                to="/aboutus"
                icon={IoIosAddCircle}
                label="About Us"
              />
              <NavItem to="/gallery" icon={FaUser} label="Gallery" />
              <NavItem to="/contacts" icon={FaUser} label="Contacts" />
              {user && (
                <NavItem to="/dashbord" icon={FaUser} label="Dashboard" />
              )}
            </ul>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="hidden sm:block">
              {/* <ToggleTheme /> */}
            </div>

            {/* User profile or auth buttons */}
            {user ? (
              <div className="flex items-center space-x-3">
                {/* User avatar with dropdown */}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar placeholder"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 transition-all duration-300 hover:border-white">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName || "User"}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-lg font-semibold">
                          {user.displayName
                            ? user.displayName.charAt(0).toUpperCase()
                            : user.email
                            ? user.email.charAt(0).toUpperCase()
                            : "U"}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#016630] rounded-box w-52 border border-white/10"
                  >
                    <li className="px-4 py-2 text-white border-b border-white/10">
                      <div className="font-medium truncate">
                        {user.displayName || "User"}
                      </div>
                      <div className="text-xs text-white/70 truncate">
                        {user.email}
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/profile"
                        className="justify-between text-white hover:bg-white/10"
                        onClick={closeMenu}
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center text-white hover:bg-white/10"
                      >
                        <MdLogout className="mr-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/login"
                  className="btn btn-outline text-white border-white hover:bg-white hover:text-[#016630]"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn bg-white text-[#016630] hover:bg-gray-100 hover:scale-105 transition-transform"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <MdClose className="text-2xl" />
              ) : (
                <MdMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 pt-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="pb-4 border-t border-white/20 mt-2 pt-4">
            <ul className="space-y-2">
              <NavItem
                to="/"
                icon={IoHome}
                label="Home"
                onClick={closeMenu}
              />
              <NavItem
                to="/allplants"
                icon={RiPlantLine}
                label="All Plants"
                onClick={closeMenu}
              />
              <NavItem
                to="/aboutus"
                icon={IoIosAddCircle}
                label="About Us"
                onClick={closeMenu}
              />
              <NavItem
                to="/gallery"
                icon={FaUser}
                label="Gallery"
                onClick={closeMenu}
              />
              <NavItem
                to="/contacts"
                icon={FaUser}
                label="Contacts"
                onClick={closeMenu}
              />
              {user && (
                <NavItem
                  to="/dashbord"
                  icon={FaUser}
                  label="Dashboard"
                  onClick={closeMenu}
                />
              )}
              
              {/* Mobile theme toggle and auth */}
              <li className="pt-4 border-t border-white/20">
                <div className="flex justify-center mb-4 md:hidden">
                  {/* <ToggleTheme /> */}
                </div>
                
                {!user ? (
                  <div className="grid grid-cols-2 gap-3 px-2">
                    <Link
                      to="/login"
                      className="btn btn-outline text-white border-white hover:bg-white hover:text-[#016630] text-center"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="btn bg-white text-[#016630] hover:bg-gray-100 text-center"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="w-full flex items-center justify-center btn btn-outline text-white border-white hover:bg-white hover:text-[#016630]"
                  >
                    <MdLogout className="mr-2" />
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
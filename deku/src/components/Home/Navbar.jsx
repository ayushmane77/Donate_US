import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 shadow sticky z-50 top-0">
      <nav className="bg-gray-900 text-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={logo} 
              className="mr-3 h-12 rounded-lg"
              alt="Logo"
            />
          </Link>
          <div className="block lg:hidden">
            {/* Hamburger Menu Icon */}
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.12 15.88a2 2 0 01-2.83 0L10 12.83l-1.88 1.88a2 2 0 11-2.83-2.83L7.17 10 5.29 8.12a2 2 0 112.83-2.83L10 7.17l1.88-1.88a2 2 0 112.83 2.83L12.83 10l1.88 1.88a2 2 0 010 2.83z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.5a.5.5 0 01.5-.5h13a.5.5 0 110 1H3.5a.5.5 0 01-.5-.5zM10 9a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM3.5 7h13a.5.5 0 010 1h-13a.5.5 0 010-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex justify-center items-center w-full lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="hover:text-blue-600">
                <Link
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link
                  to={"/aboutus"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  AboutUs
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link
                  to={"/services"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Services
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            {/* Login and Signup Buttons */}
            <Link
              to={"/Login"}
              className="bg-blue-300 text-gray-800 hover:bg-gray-70 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              ><button>
              Log In
              </button>
            </Link>
            <Link
              to={"/Signup"}
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

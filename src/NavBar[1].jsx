import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /* const [selectedNav, setSelectedNav] = useState("");
  const handleNavClick = (selected) => {
    setSelectedNav(selected);
  }; */
  return (
    <div className="bg-white shadow-md md:shadow-none mb-2">
      <div className="w-full px-10 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="hidden md:flex">
          <ul className="flex">
            <li className="px-9 hover:text-blue-700 hover:cursor-pointer">
              <Link to="/events" className="text-lg">
                <div>Event</div>
              </Link>
            </li>
            <li className="px-9 hover:text-blue-700 hover:cursor-pointer">
              <Link to="/particapants" className="text-lg">
                User
              </Link>
            </li>
            <li className="px-9 hover:text-blue-700 hover:cursor-pointer">
              <Link to="/ideas" className="text-lg">
                Ideas
              </Link>
            </li>
            <li className="px-9 hover:text-blue-700 hover:cursor-pointer">
              <Link to="/products" className="text-lg">
                Products
              </Link>
            </li>
            <li className="px-9 hover:text-blue-700 hover:cursor-pointer">
              <Link to="/requirements" className="text-lg">
                Requirements
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <button className="px-5 text-lg">Logout</button>
          <div className="rounded-full w-9 h-9 bg-green-600 ml-4"></div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white content-end">
          <ul className="flex flex-col items-center py-3 space-y-2">
            <li className="hover:text-blue-700 hover:cursor-pointer">
              <Link to="/events" className="text-lg">
                Event
              </Link>
            </li>
            <li className="hover:text-blue-700 hover:cursor-pointer">
              <Link to="/particapants" className="text-lg">
                User
              </Link>
            </li>
            <li className="hover:text-blue-700 hover:cursor-pointer">
              <Link to="/ideas" className="text-lg">
                Ideas
              </Link>
            </li>
            <li className="hover:text-blue-700 hover:cursor-pointer">
              <Link to="/products" className="text-lg">
                Products
              </Link>
            </li>
            <li className="hover:text-blue-700 hover:cursor-pointer">
              <Link to="/requirements" className="text-lg">
                Requirements
              </Link>
            </li>
            <button className="px-5 text-lg">Logout</button>
            <div className="rounded-full w-9 h-9 bg-green-600"></div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;

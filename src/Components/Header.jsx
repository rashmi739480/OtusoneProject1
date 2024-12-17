import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = [
  { title: "Home", path: "/", id: 1 },
  { title: "About", path: "/about", id: 2 },
  { title: "Service", path: "/service", id: 3 },
  { title: "Contact Us", path: "/contact-us", id: 4 },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="w-[80%] mx-auto h-25 flex justify-between py-2 px-4 items-center">
        {/* Logo */}
        <img
          className="w-14 h-14 aspect-square"
          src="./public/Images/Navlogo.svg"
          alt="Logo"
        />

        {/* Navigation for Medium and Larger Screens */}
        <div className="hidden md:flex flex-grow justify-end items-center">
          {NavbarLinks.map((link) => (
            <div key={link.id} className="relative mr-4">
              <Link
                to={link.path}
                className="text-black text-lg no-underline hover:text-[#00Ab8E]"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>

        {/* Dropdown for Smaller Screens */}
        <div className="md:hidden relative">
          <button
            className="text-gray-800"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* Dropdown Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md z-10 w-40">
              {NavbarLinks.map((link) => (
                <div
                  key={link.id}
                  className="border-b last:border-none hover:bg-gray-100"
                >
                  <Link
                    to={link.path}
                    className="block px-4 py-2 text-black no-underline"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown after clicking
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

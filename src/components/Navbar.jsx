import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-orange-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          Savora 🍲
        </Link>

        {/* Hamburger icon (mobile) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Nav Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/categories" className="hover:text-gray-200">
            Categories
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 text-center space-y-2 py-3">
          <Link
            to="/"
            className="block hover:bg-orange-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:bg-orange-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/categories"
            className="block hover:bg-orange-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Categories
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

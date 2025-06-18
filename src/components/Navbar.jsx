import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Nexio-logo.jpg' ;

const Navbar = () => {
  return (
    <nav className="shadow-md px-4 py-1 flex justify-between items-center bg-gradient-to-r from-white to-orange-100">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Nexio Mart" className="w-32 h-26" />
      </Link>

      {/* Enhanced Menu Buttons */}
      <div className="space-x-4 text-sm md:text-base flex items-center">
        <Link
          to="/"
          className="bg-orange-200 hover:bg-orange-500 hover:text-white text-orange-600 font-semibold px-4 py-2 rounded-full transition duration-300 shadow-sm"
        >
          Home
        </Link>
        <Link
          to="/register"
          className="bg-orange-200 hover:bg-orange-500 hover:text-white text-orange-600 font-semibold px-4 py-2 rounded-full transition duration-300 shadow-sm"
        >
          Register
        </Link>
        <Link
          to="/contact"
          className="bg-orange-200 hover:bg-orange-500 hover:text-white text-orange-600 font-semibold px-4 py-2 rounded-full transition duration-300 shadow-sm"
        >
          Contact Us
        </Link>
        <Link
          to="/AboutUs"
          className="bg-orange-200 hover:bg-orange-500 hover:text-white text-orange-600 font-semibold px-4 py-2 rounded-full transition duration-300 shadow-sm"
        >
          About Us
        </Link>
        <Link
          to="/pay-subscription"
          className="bg-orange-200 hover:bg-orange-500 hover:text-white text-orange-600 font-semibold px-4 py-2 rounded-full transition duration-300 shadow-sm"
        >
          Subscription
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


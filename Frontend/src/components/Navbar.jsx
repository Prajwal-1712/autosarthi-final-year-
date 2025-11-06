import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide the navbar on the Sign In page(s)
  // SignIn route in this app uses "/signup" (and some projects may also use "/signin")
  if (location.pathname.startsWith("/signup") || location.pathname.startsWith("/signin")) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md h-[10vh]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-yellow-400">Auto</span>
            <span className="text-black">-Sarathi</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/home" className="text-gray-900 font-medium hover:text-yellow-600">
              Home
            </Link>
            <Link to="/work" className="text-gray-900 font-medium hover:text-yellow-600">
              How It Works
            </Link>
            <Link to="/fareestimation" className="text-gray-900 font-medium hover:text-yellow-600">
              Fare Estimation
            </Link>
            <Link to="/about" className="text-gray-900 font-medium hover:text-yellow-600">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-900 font-medium hover:text-yellow-600">
              Contact Us
            </Link>
            <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-500">
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block h-1 w-6 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-1 w-6 bg-black transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-1 w-6 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 ">
            <Link to="/home" className="block py-2 text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/work" className="block py-2 text-gray-900" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link to="/fare-estimation" className="block py-2 text-gray-900" onClick={() => setIsOpen(false)}>
              Fare Estimation
            </Link>
            <Link to="/about" className="block py-2 text-gray-900" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/contact-us" className="block py-2 text-gray-900" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <button className="mt-2 w-full bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

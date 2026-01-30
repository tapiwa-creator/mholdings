import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#2d3748] shadow-sm">
      <div className="px-12 sm:px-14 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name - Moved further from left edge */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Mkunyadze Holdings
              </h1>
              <p className="text-sm text-gray-300 hidden sm:block">
                Excellence in Business Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Moved further from right edge */}
          <nav className="hidden md:flex">
            <div className="flex space-x-12">
              <Link
                to="/"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button - Moved further from right edge */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-700">
            <div className="flex flex-col space-y-5">
              <Link
                to="/"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold py-4"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold py-4"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold py-4"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 transition-colors duration-200 font-bold py-4"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
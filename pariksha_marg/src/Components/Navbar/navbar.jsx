import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <nav className="container mx-auto mt-2 mb-2 shadow-lg">
        <div className="bg-white shadow-md border border-black rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
            <div className="flex justify-between h-16">
              {/* Logo and Brand Name */}
              <div className="flex items-center">
                <div className="h-20 w-20 rounded-full">
                  <img src="parikshamarg_logo.svg" alt="" />
                </div>
                <img src="parikshamarg_text.svg" alt="" className="ml-1 h-8" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 items-center">
                <Link to="/" className="text-gray-700 hover:text-blue-500">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-500">
                  About Us
                </Link>
                <Link to="/contribution" className="text-gray-700 hover:text-blue-500">
                  Contribution
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                  Contact Us
                </Link>

                {/* Features Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
                  >
                    Features <ChevronDown className="ml-1 w-4 h-4" />
                  </button>

                  {/* Dropdown Items */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                      <Link
                        to="/features/pariksha-yogya"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        PARIKSHA YOGYA
                      </Link>
                      <Link
                        to="/features/pariksha-marg"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        PARIKSHA MARG
                      </Link>
                      <Link
                        to="/features/pariksha-gyan"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        PARIKSHA GYAN
                      </Link>
                    </div>
                  )}
                </div>

                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search in site"
                  className="border px-2 py-1 rounded-md text-sm"
                />
                <Link to="/login" className="text-gray-700 hover:text-blue-500">
                  Log In
                </Link>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Try for Free
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border-t absolute top-full left-0 w-full shadow-md">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                About Us
              </Link>
              <Link
                to="/contribution"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contribution
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </Link>

              {/* Features Dropdown in Mobile */}
              <div className="px-4">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left flex items-center justify-between text-gray-700 hover:text-blue-500 focus:outline-none"
                >
                  Features <ChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 bg-gray-50 rounded-lg">
                    <Link
                      to="/features/pariksha-yogya"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      PARIKSHA YOGYA
                    </Link>
                    <Link
                      to="/features/pariksha-marg"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      PARIKSHA MARG
                    </Link>
                    <Link
                      to="/features/pariksha-gyan"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      PARIKSHA GYAN
                    </Link>
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Search in site"
                className="w-full border px-4 py-2 rounded-md text-sm mt-2"
              />
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Log In
              </Link>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700">
                Try for Free
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
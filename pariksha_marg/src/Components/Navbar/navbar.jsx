import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
// Remove this import
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener for blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-0">
      <nav className={`container mx-auto mt-2 mb-2 shadow-lg `}>
        <div className="bg-white shadow-md border border-[#b3a5a5] rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
            <div className="flex justify-between h-16">
              {/* Logo and Brand Name - Smaller on mobile */}
              <div className="flex items-center">
                <div className="h-10 w-5 md:h-12 md:w-12 rounded-full">
                  <img src="./logos/pm.svg" alt="" className="w-full h-full" />
                </div>
                <img
                  src="./logos/pm_name.svg"
                  alt=""
                  className="ml-2 h-4 md:h-5"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 items-center">
                <a href="/" className="text-gray-700 hover:text-blue-500 ">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-500">
                  About Us
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Contribution
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Contact Us
                </a>

                {/* Features Dropdown with Animation */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
                  >
                    Features
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown Items with Animation */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 transition-all duration-300 transform origin-top 
                      ${
                        isDropdownOpen
                          ? "opacity-100 scale-y-100"
                          : "opacity-0 scale-y-0 pointer-events-none"
                      }`}
                  >
                    <a
                      href="http://yogya.psetu.com/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      PARIKSHA YOGYA
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      PARIKSHA MARG
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      PARIKSHA GYAN
                    </a>
                  </div>
                </div>

                {/* Search Bar */}
                {/* <input
                  type="text"
                  placeholder="Search in site"
                  className="border px-2 py-1 rounded-md text-sm"
                />
                <a href="/login" className="text-gray-700 hover:text-blue-500">
                  Log In
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Try for Free
                </button> */}
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

          {/* Mobile Menu with Smooth Animation and Proper Margins */}
          <div
            className={`md:hidden bg-white border-t absolute left-4 right-4 shadow-md rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="py-2 animate-fadeIn">
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
              >
                Contribution
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
              >
                Contact Us
              </a>

              {/* Features Dropdown in Mobile with Improved Animation */}
              <div className="px-4 py-1">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-center py-2 flex items-center justify-center text-gray-700 hover:text-blue-500 focus:outline-none"
                >
                  Features
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`mt-1 bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="http://yogya.psetu.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    PARIKSHA YOGYA
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    PARIKSHA MARG
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    PARIKSHA GYAN
                  </a>
                </div>
              </div>

              {/* Search Input with Proper Margins */}
              {/* <div className="px-4 mt-2">
                <input
                  type="text"
                  placeholder="Search in site"
                  className="w-full border px-4 py-2 rounded-md text-sm"
                />
              </div>

              <a
                href="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center mt-1"
              >
                Log In
              </a> */}

              {/* Button with Proper Margins */}
              {/* <div className="px-4 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Try for Free
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

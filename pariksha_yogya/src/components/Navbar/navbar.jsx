import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add scroll event listener for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1 left-2 right-2 z-50">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-2 md:px-4 py-1.5 rounded-lg shadow-lg transition-all duration-300 
          ${
            isScrolled ? "backdrop-blur-lg bg-white/80" : "bg-white"
          } border border-gray-300`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-10 sm:h-12">
          {/* Logo and Brand */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="./logos/py.svg"
              alt="Pariksha Yogya Logo"
              className="h-10 w-10"
            />
            <img
              src="./logos/py_name.svg"
              alt="Pariksha Yogya"
              className="h-5 sm:h-6"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "About Us", "Contribution", "Contact Us"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-blue-500 text-sm lg:text-base"
                >
                  {item}
                </a>
              )
            )}

            {/* Features Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none text-sm lg:text-base"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Features
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Items */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 
                  ${
                    isDropdownOpen
                      ? "opacity-100 scale-y-100"
                      : "opacity-0 scale-y-0 pointer-events-none"
                  } origin-top`}
              >
                {["Pariksha Yogya", "Pariksha Marg", "Pariksha Gyan"].map(
                  (feature, index) => (
                    <a
                      key={index}
                      href={`/features/${feature
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      {feature}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative hidden lg:flex items-center">
              <Search className="absolute left-2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="border pl-8 pr-2 py-1 rounded-md text-sm w-32"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">
              <a
                href="/login"
                className="text-gray-700 hover:text-blue-500 text-sm"
              >
                Log In
              </a>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Try for Free
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 p-2 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t shadow-md rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out 
            ${
              isOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          aria-hidden={!isOpen}
        >
          <div className="py-2 space-y-2">
            {["Home", "About Us", "Contribution", "Contact Us"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                >
                  {item}
                </a>
              )
            )}

            {/* Features Dropdown */}
            <div className="px-4">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-center py-2 flex items-center justify-center text-gray-700 hover:text-blue-500 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Features
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`mt-1 bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 
                  ${
                    isDropdownOpen
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
              >
                {["Pariksha Yogya", "Pariksha Marg", "Pariksha Gyan"].map(
                  (feature, index) => (
                    <a
                      key={index}
                      href={`/features/${feature
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                    >
                      {feature}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Search Input */}
            <div className="px-4 mt-2 relative">
              <Search className="absolute left-6 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search in site"
                className="w-full border pl-8 px-4 py-2 rounded-md text-sm"
              />
            </div>

            <a
              href="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center mt-1"
            >
              Log In
            </a>

            <div className="px-4 py-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Try for Free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

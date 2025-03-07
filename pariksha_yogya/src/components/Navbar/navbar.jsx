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
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-2 md:px-0">
      <nav className={`container mx-auto mt-2 mb-2 shadow-lg transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80' : ''}`}>
        <div className="bg-white shadow-md border border-[#b3a5a5] rounded-lg">
          <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
            <div className="flex justify-between h-14 sm:h-16">
              {/* Logo and Brand Name - Responsive across all breakpoints */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                    <img src="./logos/py.svg" alt="Pariksha Yogya logo" className="w-full h-full object-contain" />
                  </div>
                  <img src="./logos/py_name.svg" alt="Pariksha Yogya" className="ml-1 h-3 sm:h-4 md:h-6 object-contain" />
                </a>
              </div>

              {/* Desktop & Tablet Menu */}
              <div className="hidden md:flex items-center">
                <div className="flex flex-wrap space-x-2 lg:space-x-6 items-center">
                  <a href="/" className="text-gray-700 hover:text-blue-500 text-sm lg:text-base px-2 py-1">
                    Home
                  </a>
                  <a href="/about" className="text-gray-700 hover:text-blue-500 text-sm lg:text-base px-2 py-1">
                    About Us
                  </a>
                  <a href="/contribution" className="text-gray-700 hover:text-blue-500 text-sm lg:text-base px-2 py-1">
                    Contribution
                  </a>
                  <a href="/contact" className="text-gray-700 hover:text-blue-500 text-sm lg:text-base px-2 py-1">
                    Contact Us
                  </a>

                  {/* Features Dropdown with Animation */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none text-sm lg:text-base px-2 py-1"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      Features 
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                      }`} />
                    </button>

                    {/* Dropdown Items with Animation */}
                    <div 
                      className={`absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg z-50 transition-all duration-300 transform origin-top 
                        ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <a
                        href="/features/pariksha-yogya"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                        role="menuitem"
                      >
                        PARIKSHA YOGYA
                      </a>
                      <a
                        href="/features/pariksha-marg"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                        role="menuitem"
                      >
                        PARIKSHA MARG
                      </a>
                      <a
                        href="/features/pariksha-gyan"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                        role="menuitem"
                      >
                        PARIKSHA GYAN
                      </a>
                    </div>
                  </div>

                  {/* Search Bar - Responsive Size */}
                  <div className="relative hidden sm:flex items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      className="border pl-8 pr-2 py-1 rounded-md text-sm w-24 lg:w-32"
                    />
                    <Search className="absolute left-2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="ml-2 lg:ml-4 flex items-center">
                  <a href="/login" className="text-gray-700 hover:text-blue-500 text-sm lg:text-base px-2 py-1 ml-1">
                    Log In
                  </a>
                  <button className="bg-blue-600 text-white text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-700 ml-1 whitespace-nowrap transition-colors">
                    Try for Free
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 p-1 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu with Smooth Animation and Proper Margins */}
          <div 
            className={`md:hidden bg-white border-t absolute left-0 right-0 mx-4 shadow-md rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
            aria-hidden={!isOpen}
          >
            <div className="py-2">
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
                href="/contribution"
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
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Features 
                  <ChevronDown 
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isDropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`mt-1 bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  role="menu"
                >
                  <a
                    href="/features/pariksha-yogya"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                    role="menuitem"
                  >
                    PARIKSHA YOGYA
                  </a>
                  <a
                    href="/features/pariksha-marg"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                    role="menuitem"
                  >
                    PARIKSHA MARG
                  </a>
                  <a
                    href="/features/pariksha-gyan"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                    role="menuitem"
                  >
                    PARIKSHA GYAN
                  </a>
                </div>
              </div>

              {/* Search Input with Proper Margins */}
              <div className="px-4 mt-2 relative">
                <input
                  type="text"
                  placeholder="Search in site"
                  className="w-full border pl-8 px-4 py-2 rounded-md text-sm"
                />
                <Search className="absolute left-6 top-3 w-4 h-4 text-gray-400" />
              </div>

              <a
                href="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center mt-1"
              >
                Log In
              </a>
              
              {/* Button with Proper Margins */}
              <div className="px-4 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Try for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
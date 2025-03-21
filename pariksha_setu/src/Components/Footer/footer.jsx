import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme, language } = useTheme();
  const isDark = theme === "dark";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${isDark ? "bg-gray-900" : "bg-white"} border-t ${
        isDark ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-3 py-6 sm:px-4 sm:py-8 md:py-10 lg:px-8 lg:py-12">
        {/* Mobile: About at top, QuickLinks and Company side by side */}
        {/* Tablet/Desktop: Grid with proper column structure */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-10">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3 md:mb-4">
              <Link to="/" className="flex-shrink-0 group">
                <img
                  src="/logos/ps.svg"
                  alt="Pariksha Setu"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x40/indigo/white?text=Pariksha+Setu";
                  }}
                />
              </Link>
              <Link to="/" className="ml-4 md:ml-6 flex-shrink-0 group">
                <img
                  src="/logos/ps_name.svg"
                  alt="Pariksha Setu"
                  className={`h-5 sm:h-5 md:h-6 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                    theme === "dark" ? "filter brightness-0 invert" : ""
                  }`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x40/indigo/white?text=Pariksha+Setu";
                  }}
                />
              </Link>
            </div>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-4 md:mb-6`}
            >
              {language === "en"
                ? "Pariksha Setu is your ultimate companion for competitive exam preparation, offering innovative tools to help you navigate your educational journey with confidence."
                : "परीक्षा सेतु प्रतियोगी परीक्षा की तैयारी के लिए आपका अंतिम साथी है, जो आपको अपनी शैक्षिक यात्रा को आत्मविश्वास के साथ नेविगेट करने में मदद करने के लिए अभिनव उपकरण प्रदान करता है।"}
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8">
              <a
                href="mailto:contact@pariksha-setu.com"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-indigo-400"
                    : "text-gray-500 hover:text-indigo-600"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-red-400"
                    : "text-gray-500 hover:text-red-600"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778C2.036 8.74 2 12 2 12s.036 3.26.437 4.813c.24.718.905 1.408 1.763 1.768 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.51 2.51 0 0 0 1.767-1.763C22.042 15.26 22 12 22 12s.036-3.26-.437-4.813l.03.016z" />
                  <path d="M10 15V9l5.2 3-5.2 3z" fill="#fff" />
                </svg>
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-500 hover:text-blue-600"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-blue-500"
                    : "text-gray-500 hover:text-blue-700"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22 5.466V19a2 2 0 01-2 2H4a2 2 0 01-2-2V5.466l.496.496C4.025 7.49 6.5 9 9.5 9c1.41 0 2.715-.375 3.865-1.01A6.99 6.99 0 0116.5 9c3 0 5.475-1.51 7.004-3.038L24 5.466z" />
                </svg>
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-black"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-pink-400"
                    : "text-gray-500 hover:text-pink-600"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.254-.66.599-1.216 1.153-1.772.5-.508 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.986-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15c-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.1a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 8.4a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6zm6.4-8.63a1.19 1.19 0 11-2.38 0 1.19 1.19 0 012.38 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile: Quick Links and Company in a flex row */}
          <div className="flex flex-row flex-wrap gap-6 sm:gap-8 md:hidden">
            {/* Quick Links */}
            <div className="flex-1 min-w-[140px]">
              <h3
                className={`text-base sm:text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-2 md:mb-4`}
              >
                {language === "en" ? "Quick Links" : "त्वरित लिंक"}
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    to="/"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Home" : "होम"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pariksha-yoga"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Pariksha Yoga" : "परीक्षा योग"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pariksha-marg"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Pariksha Marg" : "परीक्षा मार्ग"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pariksha-gyan"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Pariksha Gyan" : "परीक्षा ज्ञान"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1 min-w-[140px]">
              <h3
                className={`text-base sm:text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-2`}
              >
                {language === "en" ? "Company" : "कंपनी"}
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    to="/about"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "About Us" : "हमारे बारे में"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Contact" : "संपर्क"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Privacy Policy" : "गोपनीयता नीति"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-indigo-400"
                        : "text-gray-600 hover:text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    {language === "en" ? "Terms of Service" : "सेवा की शर्तें"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Desktop: Quick Links as separate column */}
          <div className="hidden md:block md:col-span-1">
            <h3
              className={`text-base sm:text-lg font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-2 md:mb-4`}
            >
              {language === "en" ? "Quick Links" : "त्वरित लिंक"}
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Home" : "होम"}
                </Link>
              </li>
              <li>
                <Link
                  to="/pariksha-yoga"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Pariksha Yoga" : "परीक्षा योग"}
                </Link>
              </li>
              <li>
                <Link
                  to="/pariksha-marg"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Pariksha Marg" : "परीक्षा मार्ग"}
                </Link>
              </li>
              <li>
                <Link
                  to="/pariksha-gyan"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Pariksha Gyan" : "परीक्षा ज्ञान"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop: Company as separate column */}
          <div className="hidden md:block md:col-span-1">
            <h3
              className={`text-base sm:text-lg font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-2`}
            >
              {language === "en" ? "Company" : "कंपनी"}
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  to="/about"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "About Us" : "हमारे बारे में"}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Contact" : "संपर्क"}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Privacy Policy" : "गोपनीयता नीति"}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-300`}
                >
                  {language === "en" ? "Terms of Service" : "सेवा की शर्तें"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          } mt-5 pt-3 sm:mt-6 sm:pt-4 text-center ${
            isDark ? "text-gray-400" : "text-gray-500"
          } text-xs sm:text-sm`}
        >
          <p>
            {" "}
            {currentYear} Pariksha Setu.{" "}
            {language === "en"
              ? "All rights reserved."
              : "सर्वाधिकार सुरक्षित।"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

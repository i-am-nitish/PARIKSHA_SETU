import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#e3e3e3] border-t border-gray-100 py-3 overflow-hidden rounded-2xl">
      
      {/* Footer content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-6 max-w-7xl mx-auto">
        {/* Left Section - Features */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Boxed section title */}
          <div className="inline-block border-2 border-gray-400 rounded-lg px-4 py-1 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 text-center ">Our Services</h3>
          </div>
          
          {/* Feature Cards with reduced spacing */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div className="flex flex-col items-center lg:items-start max-w-md">
              <div className="mb-2">
                <img src="3.png" alt="Eligibility Calculator" className="p-2 w-50 h-10 border rounded-lg shadow-md bg-white" />
              </div>
              <p className="text-gray-700 text-sm text-justify">
                Exam eligibility and attempts calculator providing personalized insights based on age, education, and criteria for competitive exams.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start max-w-md">
              <div className="mb-2">
                <img src="3.png" alt="Expert Roadmaps" className="p-2 w-50 h-10 border rounded-lg shadow-md bg-white" />
              </div>
              <p className="text-gray-700 text-sm text-justify">
                Guided path to competitive exam success with Subject - Expert roadmaps, best practices, and essential study materials.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start max-w-md">
              <div className="mb-2">
                <img src="3.png" alt="AI Chatbot" className="p-2 w-50 h-10 border rounded-lg shadow-md bg-white" />
              </div>
              <p className="text-gray-700 text-sm text-justify">
                AI-powered chatbot with all necessary books, references, and explanations for competitive exam preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Description, Socials, and Footer */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:pl-8">
          {/* Boxed section title */}
          <div className="inline-block border-2 border-gray-400 rounded-lg px-4 py-1 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
          </div>
          
          <div className="p-2 border rounded-lg shadow-md flex items-center space-x-4 mb-3 bg-white">
            <img src="1.png" alt="Pariksha Yogya" className="w-40 h-5" />
          </div>

          {/* Description with reduced spacing */}
          <div className="max-w-md text-gray-700 mb-4">
            <p className="text-sm leading-tight text-justify">
              One-stop platform for competitive exam aspirants, offering a personalized exam eligibility and attempts calculator, an AI-powered chatbot with essential books and explanations, and a structured roadmap with best practices and study resources.
            </p>
          </div>

          {/* Email Support */}
          <div className="flex items-center mb-4">
            <span className="text-gray-700 text-sm mr-2">For help and support:</span>
            <a href="mailto:askparikshasetu@gmail.com" className="text-blue-600 hover:underline text-sm">
              askparikshasetu@gmail.com
            </a>
          </div>

          {/* Social Media Icons with reduced margins */}
          <div className="inline-block border-2 border-gray-400 rounded-lg px-4 py-1 mb-4">
            <h3 className="text-base font-medium text-gray-800">Connect With Us</h3>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
            <a href="mailto:askparikshasetu@gmail.com" className="hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="/social_media/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="/social_media/facebook.svg" alt="Facebook" className="w-12 h-12" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="/social_media/x.svg" alt="X" className="w-12 h-12" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="/social_media/insta.svg" alt="Instagram" className="w-12 h-12" />
            </a>
          </div>

          {/* Navigation Links with reduced spacing */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-1 mb-4 text-gray-700 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contribution</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer with reduced padding */}
      <div className="relative z-10 border-t border-gray-200 mt-4 pt-3">
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 max-w-7xl mx-auto text-gray-600 text-xs">
          <div>Made with ❤️ for You</div>
          <div className="mt-1 sm:mt-0">
            © {new Date().getFullYear()} | <a href="#" className="underline hover:text-gray-800">Privacy Policy</a> | <a href="#" className="underline hover:text-gray-800">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
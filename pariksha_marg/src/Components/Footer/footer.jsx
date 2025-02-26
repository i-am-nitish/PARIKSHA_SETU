import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-8 py-12 max-w-7xl mx-auto">
      {/* Left Section - Features */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Feature Cards */}
        <div>
          <img src="3.png" alt="Feature 1" className="p-2 w-50 h-10 border rounded-lg shadow-md" />
        </div>
        <p className="text-gray-700 text-sm">
            Exam eligibility and attempts calculator providing personalized insights based on age, education, and criteria for competitive exams.
        </p>

        <div>
          <img src="3.png" alt="Feature 1" className="p-2 w-50 h-10 border rounded-lg shadow-md" />
        </div>
        <p className="text-gray-700 text-sm">
            Guided path to competitive exam success with Subject - Expert roadmaps, best practices, and essential study materials.
          </p>

          <div>
          <img src="3.png" alt="Feature 1" className="p-2 w-50 h-10 border rounded-lg shadow-md" />
        </div>
        <p className="text-gray-700 text-sm">
            AI-powered chatbot with all necessary books, references, and explanations for competitive exam preparation.
          </p>
      </div>

      {/* Right Section - Description, Socials, and Footer */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0 lg:pl-12">
        {/* Description */}

        <div className="p-2 border rounded-lg shadow-md flex items-center space-x-4">
          <img src="1.png" alt="Feature 3" className="w-40 h-5" />
        </div>

        <div className="max-w-md text-gray-800">
          <p className="text-sm leading-relaxed">
            One-stop platform for competitive exam aspirants, offering a personalized exam eligibility and attempts calculator, an AI-powered chatbot with essential books and explanations, and a structured roadmap with best practices and study resources. Designed to simplify preparation, it ensures aspirants stay informed, organized, and confident on their journey to success. 🚀
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8">
          <img src="https://via.placeholder.com/40" alt="Email" className="w-10 h-10" />
          <img src="https://via.placeholder.com/40" alt="YouTube" className="w-10 h-10" />
          <img src="https://via.placeholder.com/40" alt="LinkedIn" className="w-10 h-10" />
          <img src="https://via.placeholder.com/40" alt="Facebook" className="w-10 h-10" />
          <img src="https://via.placeholder.com/40" alt="X" className="w-10 h-10" />
          <img src="https://via.placeholder.com/40" alt="Instagram" className="w-10 h-10" />
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex space-x-8 text-gray-700 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contribution</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-gray-600 text-sm">
          <p>Made with ❤️ by GEORGIANS in INDIA</p>
          <p className="mt-2">
            © 2025 | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms & Conditions</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Features;
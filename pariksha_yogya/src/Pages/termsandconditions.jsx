import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/footer";
import { motion } from "framer-motion";
import { FaBook, FaUserCircle, FaCopyright, FaFileUpload, FaBan, FaExclamationTriangle, FaBalanceScale, FaHistory, FaEnvelope, FaBars } from "react-icons/fa";

function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const sections = [
    { id: "introduction", title: "Introduction", icon: <FaBook /> },
    { id: "definitions", title: "Definitions", icon: <FaBook /> },
    { id: "accounts", title: "User Accounts", icon: <FaUserCircle /> },
    { id: "intellectual", title: "Intellectual Property", icon: <FaCopyright /> },
    { id: "content", title: "User Content", icon: <FaFileUpload /> },
    { id: "prohibited", title: "Prohibited Uses", icon: <FaBan /> },
    { id: "disclaimer", title: "Disclaimer of Warranties", icon: <FaExclamationTriangle /> },
    { id: "liability", title: "Limitation of Liability", icon: <FaBalanceScale /> },
    { id: "changes", title: "Changes", icon: <FaHistory /> },
    { id: "contact", title: "Contact Us", icon: <FaEnvelope /> },
  ];

  // Use effect to set a default active section
  useEffect(() => {
    if (!activeSection) {
      setActiveSection("introduction");
    }
  }, []);

  // Close sidebar after selecting section on mobile
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  // Function to render the active section content
  const renderSectionContent = () => {
    switch(activeSection) {
      case "introduction":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaBook className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Introduction</h2>
            </div>
            <p className="text-gray-700">
              Welcome to Pariksha Yogya. These Terms and Conditions govern your use of our website and services. By accessing or using Pariksha Yogya, you agree to be bound by these Terms. If you disagree with any part of the terms, you do not have permission to access the service.
            </p>
          </>
        );
      case "definitions":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaBook className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Definitions</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-semibold">"Service"</span> refers to the Pariksha Yogya website and platform.</li>
              <li><span className="font-semibold">"You"</span> refers to the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
              <li><span className="font-semibold">"Content"</span> refers to all information displayed, transmitted, or otherwise made available via our Service.</li>
            </ul>
          </>
        );
      case "accounts":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaUserCircle className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">User Accounts</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
              </p>
            </div>
          </>
        );
      case "intellectual":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaCopyright className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Intellectual Property</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Pariksha Yogya and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Pariksha Yogya.
              </p>
            </div>
          </>
        );
      case "content":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaFileUpload className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">User Content</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                By posting, uploading, or submitting content to our Service, you grant Pariksha Yogya a non-exclusive, royalty-free, worldwide license to use, modify, publicly display, reproduce, and distribute such content on and through the Service.
              </p>
              <p>
                You represent and warrant that you own or have the necessary rights to post any content you submit and that such content does not violate the intellectual property rights or any other rights of any third party.
              </p>
            </div>
          </>
        );
      case "prohibited":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaBan className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Prohibited Uses</h2>
            </div>
            <p className="mb-2 text-gray-700">You agree not to use the Service:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Pariksha Yogya, a Pariksha Yogya employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
            </ul>
          </>
        );
      case "disclaimer":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaExclamationTriangle className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Disclaimer of Warranties</h2>
            </div>
            <p className="text-gray-700">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Pariksha Yogya makes no warranties, whether express or implied, regarding the accuracy of exam eligibility calculations, roadmaps, or any other content provided through our Service. While we strive for accuracy, we cannot guarantee that all information is current or error-free.
            </p>
          </>
        );
      case "liability":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaBalanceScale className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Limitation of Liability</h2>
            </div>
            <p className="text-gray-700">
              In no event shall Pariksha Yogya, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </>
        );
      case "changes":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaHistory className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Changes</h2>
            </div>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </>
        );
      case "contact":
        return (
          <>
            <div className="flex items-center space-x-2 mb-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:askparikshasetu@gmail.com" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                askparikshasetu@gmail.com
              </a>.
            </p>
          </>
        );
      default:
        return <p>Please select a section from the menu.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-14">
      <div className="max-w-6xl mx-auto px-3 py-4">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Terms and Conditions
        </motion.h1>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden mb-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center justify-center w-full py-2 px-4 bg-white rounded-lg shadow-sm text-gray-700"
          >
            <FaBars className="mr-2" />
            <span>
              {sidebarOpen ? "Hide Contents" : "Show Contents"} 
              {activeSection && !sidebarOpen ? ` (${sections.find(s => s.id === activeSection)?.title})` : ''}
            </span>
          </button>
        </div>
        
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Sidebar Menu - Left Side */}
          <motion.div 
            className={`lg:w-1/4 bg-white rounded-lg shadow-sm p-3 lg:p-4 lg:sticky lg:top-16 h-fit
                       ${sidebarOpen ? 'block' : 'hidden lg:block'}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-base font-bold mb-2 text-gray-800 border-b pb-1">Contents</h2>
            <nav className="space-y-0.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`flex items-center w-full space-x-2 py-1.5 px-2 rounded text-left text-sm transition-colors
                    ${activeSection === section.id 
                      ? "bg-blue-50 text-blue-700 font-medium" 
                      : "hover:bg-gray-50 text-gray-700"}`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <div className={`${activeSection === section.id ? "text-blue-600" : "text-gray-500"}`}>
                    {section.icon}
                  </div>
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
            <div className="mt-3 pt-2 border-t text-xs text-gray-500 text-center">
              Last Updated: March 21, 2025
            </div>
          </motion.div>
          
          {/* Content Area - Right Side */}
          <motion.div 
            className="lg:w-3/4 bg-white rounded-lg shadow-sm p-4 lg:p-5"
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {renderSectionContent()}
          </motion.div>
        </div>
      </div>
      
      <div className="w-full p-3 m-auto mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default TermsAndConditions;
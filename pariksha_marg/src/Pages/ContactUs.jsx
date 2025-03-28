import React, { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
    agreeToPolicy: false
  });
  
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending the message
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      // Reset success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
      // Reset form
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        message: "",
        agreeToPolicy: false
      });
    }, 1500);
  };
  
    return (
      <div className="flex flex-col md:flex-row items-stretch justify-center py-6 md:pt-25 min-h-screen px-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Contact Form */}
        <div 
          className="bg-white p-4 md:p-5 rounded-xl shadow-md w-full md:w-1/2 md:mr-4 transition-all duration-300 hover:shadow-lg"
          style={{ animation: "fadeIn 0.6s ease-out" }}
        >
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800 relative">
            <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-blue-500 after:-bottom-1">
              Contact us
            </span>
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="w-full md:w-1/2 group">
                <input 
                  type="text" 
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  className="w-full p-2.5 md:p-2 text-sm border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-blue-400 focus:border-transparent group-hover:border-gray-400" 
                  required
                />
              </div>
              <div className="w-full md:w-1/2 group">
                <input 
                  type="text" 
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" 
                  className="w-full p-2.5 md:p-2 text-sm border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-blue-400 focus:border-transparent group-hover:border-gray-400" 
                  required
                />
              </div>
            </div>
            <div className="group">
              <input 
                type="tel" 
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className="w-full p-2.5 md:p-2 text-sm border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-blue-400 focus:border-transparent group-hover:border-gray-400" 
                required
              />
            </div>
            <div className="group">
              <textarea 
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Message" 
                className="w-full p-2.5 md:p-2 text-sm border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-blue-400 focus:border-transparent group-hover:border-gray-400 h-24 md:h-20" 
                required
              ></textarea>
            </div>
            <div className="flex items-center space-x-2 group">
              <input 
                type="checkbox" 
                id="privacy" 
                name="agreeToPolicy"
                checked={formState.agreeToPolicy}
                onChange={handleChange}
                className="w-4 h-4 md:w-3 md:h-3 accent-blue-600 cursor-pointer" 
                required
              />
              <label htmlFor="privacy" className="text-xs md:text-xs cursor-pointer">
                You agree to our <span className="font-bold text-blue-600 hover:underline">Privacy Policy</span>.
              </label>
            </div>
            <div>
              <button 
                type="submit"
                disabled={isSending}
                className={`w-full py-2.5 md:p-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 transform ${
                  isSending ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
            
            {showSuccess && (
              <div className="mt-2 p-2.5 md:p-2 text-xs bg-green-100 border border-green-300 text-green-700 rounded-lg animate-pulse">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
  
        {/* Get in Touch */}
        <div 
          className="w-full md:w-1/2 mt-6 md:mt-0 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 md:p-5 rounded-xl shadow-md"
          style={{ animation: "slideInMobile 0.8s ease-out" }}
        >
          <h2 className="text-base md:text-lg font-bold mb-2">Get in Touch</h2>
          <p className="text-blue-100 text-xs md:text-sm mt-1 mb-3 md:mb-4">Have questions? We're here to help and would love to hear from you!</p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-3 transform transition-transform hover:translate-x-1">
              <div className="bg-white/20 p-2 md:p-2 rounded-full">
                <span className="text-base md:text-sm">📞</span>
              </div>
              <span className="font-medium text-xs md:text-sm">+9-7500024959</span>
            </div>
            
            <div className="flex items-center space-x-3 transform transition-transform hover:translate-x-1">
              <div className="bg-white/20 p-1.5 md:p-2 rounded-full">
                <span className="text-base md:text-sm">✉️</span>
              </div>
              <span className="font-medium text-xs md:text-sm">askparikshasetu@mail.com</span>
            </div>
            
          </div>
          
          <div className="mt-6 md:mt-6">
            <div className="flex space-x-4 md:space-x-3 justify-center">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map(social => (
                <div 
                  key={social}
                  className="w-8 h-8 md:w-7 md:h-7 bg-white/10 rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110"
                >
                  <span className="text-xs">{social[0].toUpperCase()}</span> 
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(15px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInMobile {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (min-width: 768px) {
            @keyframes slideInMobile {
              from { opacity: 0; transform: translateX(15px); }
              to { opacity: 1; transform: translateX(0); }
            }
          }
        `}</style>
      </div>
    );
  }
import React from "react";

const AboutUs = () => {
  // Team Members Data with social media profiles (add or remove icons as needed per member)
  const teamMembers = [
    { 
      role: "FOUNDER", 
      image: "./Aboutusimages/Abhi.jpg", 
      name: "Abhinav Kumar",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/abhinav-kumar-0ba731239/" },
        { type: "github", url: "https://github.com/Abhinavkumar3584" },
        { type: "instagram", url: "https://instagram.com/" },
        { type: "facebook", url: "https://facebook.com/" },
        { type: "twitter", url: "https://x.com/ABHINAV11555548" }
      ] 
    },
    { 
      role: "CO-FOUNDER", 
      image: "./Aboutusimages/Manu.jpg", 
      name: "Manu Dev",
      socials: [
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "github", url: "https://github.com/" },
        { type: "instagram", url: "https://instagram.com/" }
      ] 
    },
    { 
      role: "CTO", 
      image: "./Aboutusimages/Abhishek.jpg",
      name: "Abhishek Kumar", 
      socials: [
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "github", url: "https://github.com/" },
        { type: "twitter", url: "https://twitter.com/" }
      ] 
    },
    { 
      role: "MARKETING AND R&D", 
      image: "./Aboutusimages/Rahul.jpg", 
      name: "Rahul Mishra",
      socials: [
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "facebook", url: "https://facebook.com/" },
        { type: "instagram", url: "https://instagram.com/" }
      ] 
    },
  ];

  // Social media icon mapping
  const socialIcons = {
    linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg",
    github: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg",
    instagram: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/instagram.svg",
    facebook: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/facebook.svg",
    twitter: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/twitter.svg"
  };

  // Badge colors for different roles
  const getRoleBadgeStyle = (role) => {
    switch(role) {
      case "FOUNDER":
        return {
          background: "linear-gradient(45deg, #FF8C00, #FF4500)",
          boxShadow: "0 4px 15px rgba(255, 140, 0, 0.4)"
        };
      case "CO-FOUNDER":
        return {
          background: "linear-gradient(45deg, #4169E1, #1E90FF)",
          boxShadow: "0 4px 15px rgba(65, 105, 225, 0.4)"
        };
      case "CTO":
        return {
          background: "linear-gradient(45deg, #32CD32, #008000)",
          boxShadow: "0 4px 15px rgba(50, 205, 50, 0.4)"
        };
      case "DESIGNER":
        return {
          background: "linear-gradient(45deg, #FF1493, #C71585)",
          boxShadow: "0 4px 15px rgba(255, 20, 147, 0.4)"
        };
      default:
        return {
          background: "linear-gradient(45deg, #808080, #A9A9A9)",
          boxShadow: "0 4px 15px rgba(128, 128, 128, 0.4)"
        };
    }
  };

  return (
    <>
      {/* CSS for shining animation - updated for subtle effect */}
      <style jsx>{`
        @keyframes subtleShine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .role-badge {
          position: relative;
          overflow: hidden;
          padding: 4px 8px;
          border-radius: 10px;
          color: white;
          font-weight: bold;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .role-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-100%) skewX(-15deg);
          animation: subtleShine 5s infinite;
        }
      `}</style>

      <div className="bg-gray-100 py-12 pb-0 px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="w-full max-w-[1280px] mx-auto p-6 sm:p-8 lg:p-10 bg-white rounded-[20px] border border-black shadow-md mt-8">
          {/* Heading */}
          <h2 className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            About Us
          </h2>

          {/* Content Wrapper */}
          <div className="mt-5 flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-justify text-gray-700 text-base sm:text-1.5 leading-relaxed">
              <p>
                Welcome to <strong>Pratiyogita Setu</strong>, your ultimate AI-powered study companion. 
                We believe that learning should be quick, accessible, and hassle-free. 
                That's why we built a smart chatbot designed to help students from grades 6 to 12 
                get instant, accurate answers to their NCERT textbook questions anytime, anywhere.
              </p>
              <br />
              <p>
                At <strong>Pratiyogita Setu</strong>, we aim to bridge the gap between students and knowledge 
                by providing a seamless and efficient way to access educational content. 
                Whether you are revising for exams, completing homework, or simply seeking a better 
                understanding of concepts, our AI-driven platform ensures you get the information 
                you need without delays.
              </p>
              <br />
              <p>
                Our mission is to make education smarter and more efficient by leveraging technology 
                to simplify the learning process. With <strong>Pratiyogita Setu</strong>, students can 
                focus on understanding concepts rather than searching for answers, making their 
                study sessions more productive and effective.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                className="w-full h-auto max-h-[400px] object-contain rounded-[15px] "
                src="./Aboutusimages/parikshasetu.png"
                alt="About Us"
              />
            </div>
          </div>
        </div>

        {/* Meet The Team Section */}
        <div className="w-full max-w-[1280px] mx-auto p-4 sm:p-8 lg:p-6 bg-white rounded-[10px] border border-black shadow-md mt-4">
          {/* Heading */}
          <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Meet the Team
          </h2>

          {/* Team Members Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-6 flex flex-col items-center text-center bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                {/* Role Badge with Subtle Shining Effect */}
                <div 
                  className="role-badge" 
                  style={getRoleBadgeStyle(member.role)}
                >
                  {member.role}
                </div>

                {/* Profile Picture */}
                <div className="w-[200px] h-[250px] bg-gray-300 rounded-[20px] overflow-hidden flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.role} 
                    className="w-full h-full object-cover rounded-[20px]" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/200";
                    }}
                  />
                </div>
                
                {/* Member Name */}
                <h3 className="text-gray-700 text-s sm:text-1xl font-bold leading-7 mt-3">
                  {member.name}
                </h3>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center flex-wrap gap-2 mt-4">
                  {member.socials.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <img 
                        src={socialIcons[social.type]} 
                        alt={social.type} 
                        className="w-5 h-5" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
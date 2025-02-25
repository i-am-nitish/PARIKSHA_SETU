import React from "react";

const AboutUs = () => {
  // Team Members Data
  const teamMembers = [
    { role: "FOUNDER", image: "https://placehold.co/200", socials: ["https://placehold.co/51x32", "https://placehold.co/43x32", "https://placehold.co/37x32", "https://placehold.co/42x32", "https://placehold.co/45x32"] },
    { role: "CO-FOUNDER", image: "https://placehold.co/200", socials: ["https://placehold.co/51x32", "https://placehold.co/43x32", "https://placehold.co/37x32", "https://placehold.co/42x32", "https://placehold.co/45x32"] },
    { role: "CTO", image: "https://placehold.co/200", socials: ["https://placehold.co/51x32", "https://placehold.co/43x32", "https://placehold.co/37x32", "https://placehold.co/42x32", "https://placehold.co/45x32"] },
    { role: "DESIGNER", image: "https://placehold.co/200", socials: ["https://placehold.co/51x32", "https://placehold.co/43x32", "https://placehold.co/37x32", "https://placehold.co/42x32", "https://placehold.co/45x32"] },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* About Us Section */}
      <div className="w-full max-w-[1280px] mx-auto p-6 sm:p-8 lg:p-10 bg-white rounded-[20px] border border-black shadow-md mt-8">
        {/* Heading */}
        <h2 className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          About Us
        </h2>

        {/* Content Wrapper */}
        <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-2/3 text-justify text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              Welcome to <strong>Pratiyogita Setu</strong>, your ultimate AI-powered study companion. 
              We believe that learning should be quick, accessible, and hassle-free. 
              That’s why we built a smart chatbot designed to help students from grades 6 to 12 
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
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              className="w-full max-w-[300px] rounded-[15px] border border-black shadow-md"
              src="https://placehold.co/400x450"
              alt="About Us"
            />
          </div>
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className="w-full max-w-[1280px] mx-auto p-6 sm:p-8 lg:p-10 bg-white rounded-[20px] border border-black shadow-md mt-8">
        {/* Heading */}
        <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Meet the Team
        </h2>

        {/* Team Members Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-[20px] border border-black shadow-md flex flex-col items-center text-center">
              {/* Role Name */}
              <h3 className="text-gray-700 text-xl sm:text-2xl font-extrabold leading-7">
                {member.role}
              </h3>

              {/* Profile Picture */}
              <div className="w-[200px] h-[200px] bg-gray-300 rounded-[20px] mt-4">
                <img src={member.image} alt={member.role} className="w-full h-full object-cover rounded-[20px]" />
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center items-center gap-3 mt-4">
                {member.socials.map((social, i) => (
                  <img key={i} className="w-12 h-8" src={social} alt={`Social ${i + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

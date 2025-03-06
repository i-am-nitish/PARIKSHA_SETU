import React, { useState, useEffect } from "react";
import { BorderBeam } from "./border-beam";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

function FeatureText({ title, description, index, setActiveFeature }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setActiveFeature(index);
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, index, setActiveFeature]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="py-20 sm:py-28 md:py-32"
    >
      <div className="max-w-md px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

// Mobile feature component that combines image and text
function MobileFeature({ title, description, image, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="mb-16">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        className="mb-6 h-[220px] relative rounded-lg overflow-hidden"
      >
        <img
          src={image || "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg"}
          alt={`Feature ${index + 1} illustration`}
          className="block w-full h-full object-contain"
        />
        <BorderBeam
          duration={6}
          size={300}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={300}
          className="from-transparent via-blue-500 to-transparent"
        />
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="px-4"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>
    </div>
  );
}

function FeatureImage({ index, activeFeature, images }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: activeFeature === index ? 1 : 0,
        scale: activeFeature === index ? 1 : 0.95
      }}
      transition={{ duration: 0.6 }}
      className={`absolute inset-0 ${activeFeature === index ? "z-10" : "z-0"}`}
    >
      <div className="relative inline-block overflow-hidden rounded-lg w-full h-full">
        <img
          src={images[index] || "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg"}
          alt={`Feature ${index + 1} illustration`}
          className="block w-full h-full object-contain"
        />
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className="from-transparent via-blue-500 to-transparent"
        />
      </div>
    </motion.div>
  );
}

export function ImageWithBorder() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "1️⃣ Personalized Exam Eligibility Tracker",
      description: "Instantly check your eligibility for UPSC, SSC, NDA, CDS, and other exams based on age, education, and criteria."
    },
    {
      title: "2️⃣ Attempt Calculator",
      description: "Track your remaining exam attempts to plan your preparation strategically and never miss an opportunity."
    },
    {
      title: "3️⃣ Real-Time Exam Notifications",
      description: "Stay updated with new exam announcements, deadlines, and eligibility changes so you're always ahead."
    },
    {
      title: "4️⃣ Downloadable Eligibility Report",
      description: "Get a detailed eligibility chart in PDF format for quick reference anytime, anywhere."
    },
    {
      title: "5️⃣ Integrated with Official Guidelines",
      description: "Ensures accurate, reliable, and up-to-date information based on official exam policies."
    }
  ];

  // You can replace these with actual feature images
  const featureImages = [
    "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg",
    "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg",
    "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg",
    "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg",
    "https://gimgs2.nohat.cc/thumb/f/640/mind-map-thought-color-circular-square-frame-thinking-analysis-chart-transparent-background-png-clipart--comhiclipartippqq.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16"
      >
        
      </motion.h2>
      
      {/* Mobile View (stacked layout) */}
      <div className="md:hidden">
        {features.map((feature, index) => (
          <MobileFeature
            key={index}
            index={index}
            title={feature.title}
            description={feature.description}
            image={featureImages[index]}
          />
        ))}
      </div>
      
      {/* Desktop View (side-by-side layout with sticky container) */}
      <div className="hidden md:flex md:flex-row relative">
        {/* Sticky image container */}
        <div className="md:w-1/2 h-[500px] md:sticky md:top-24 md:self-start">
          <div className="relative w-full h-full">
            {features.map((_, index) => (
              <FeatureImage 
                key={index} 
                index={index} 
                activeFeature={activeFeature} 
                images={featureImages} 
              />
            ))}
          </div>
        </div>
        
        {/* Scrollable text container */}
        <div className="md:w-1/2">
          {features.map((feature, index) => (
            <FeatureText
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              setActiveFeature={setActiveFeature}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageWithBorder;
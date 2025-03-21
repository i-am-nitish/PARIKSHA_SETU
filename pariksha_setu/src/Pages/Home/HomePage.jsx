import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../../Components/Home/HeroSection";
import FeatureSection from "../../Components/Home/FeatureSection";
import TestimonialSection from "../../Components/Home/TestimonialSection";
import CTASection from "../../Components/Home/CTASection";
import StatsSection from "../../Components/Home/StatsSection";
import { AnimatedBeamDemo } from "../../Components/easyui/animated-beam";
import FAQSection from "../../Components/Home/FAQSection";
import InfinityExams from "../../Components/Infinityexams/infinityexams.jsx";

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* <div className="bg-blue-500 xs:bg-red-500 sm:bg-green-500">
        Resize me!
      </div> */}

      <HeroSection />

      <AnimatedBeamDemo className="lg:h-[650px] lg:mt-8" />

      <FeatureSection />
      <InfinityExams />
      {/* <StatsSection />
      <TestimonialSection /> */}
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default HomePage;

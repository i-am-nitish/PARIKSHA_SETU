import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../../Components/Home/HeroSection";
import FeatureSection from "../../Components/Home/FeatureSection";
import TestimonialSection from "../../Components/Home/TestimonialSection";
import CTASection from "../../Components/Home/CTASection";
import StatsSection from "../../Components/Home/StatsSection";
import { AnimatedBeamDemo } from "../../Components/easyui/animated-beam";

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />

      <AnimatedBeamDemo className="h-[650px] mt-8 bg-[rgba(247,247,247,0.8)]"/>

      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default HomePage;

import { useState } from "react";
import "./App.css";
import { Hero } from "@/components/Hero/animated-hero";

import Navbar from "@/components/Navbar/navbar";
import { HeroUIProvider } from "@heroui/react";

import { ImageWithBorder } from "./components/Magicui/border";
import Footer from "./components/Footer/footer";
import FAQS from "./components/FAQS/faqs";

import { Routes, Route } from "react-router-dom";
import FormPage from "./components/Pages/Form/formpage";
import InfinityImgScroll from "./components/Infinityimgscroll/infinityimgscroll";
import FeatureCards from "./components/cards/index";

import { PricingTableDemo } from "./components/Payment/payment";
import FeatureSection from "./components/cards/ii";

function App() {
  return (
    <HeroUIProvider className="w-full mx-0 px-0">
      <div className="animated-background">
        <div className="line-grid"></div>
        <div className="diagonal-lines"></div>
        <div className="beam"></div>
        <div className="beam-vertical"></div>
        <div className="line-highlight"></div>
      </div>
      <div className="w-full mx-0 px-0">
        <Navbar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="w-full mx-0 px-0">
                <Hero />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-gray-900 dark:text-white">
                  Supported Exams
                </h2>
                <InfinityImgScroll />
              </div>

              <div className="w-full mx-0 px-0">
                <div className="relative z-10 w-full mx-0 px-0 py-8 md:py-12 text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-10 text-gray-900 dark:text-white">
                    FEATURES
                  </h2>
                </div>
              </div>

              <div>
                <FeatureSection />
              </div>

              {/* <div className="w-full mx-0 px-0">
              <ImageWithBorder />
            </div> */}

              <div>
                <PricingTableDemo />
              </div>

              <div className="w-full mx-0 px-0">
                <FAQS />
              </div>

              <div className="w-full mx-0 px-0">
                <Footer />
              </div>

            </>
          }
        />
        <Route path="/form-page" element={<FormPage />} />
      </Routes>
    </HeroUIProvider>
  );
}

export default App;

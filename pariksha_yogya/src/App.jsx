import { useState } from "react";
import "./App.css";
import Navbar from "@/components/Navbar/navbar";
import { HeroUIProvider } from "@heroui/react";
import { Routes, Route } from "react-router-dom";
import FormPage from "./Pages/checknow";
import ContributionPage from "./Pages/contribution";
import Home from "./Pages/home";
import ContactPage from "./Pages/contactus";
import AboutUs from "./Pages/aboutus";
import Login from "./Pages/login";
import Signup from "./Pages/signup";

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
      <div className="w-full ">
        <Navbar />
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/checknow" element={<FormPage />} />
        <Route path="/contribution" element={<ContributionPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
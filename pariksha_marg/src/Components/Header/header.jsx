import React from "react";
import styled from "styled-components";
import WordRotate from "../Wordrotate/WordRotate";
import { useNavigate } from "react-router-dom";

// Gradient background component
const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 95%;
  background: radial-gradient(
    125% 125% at -2% 101%,
    rgba(245, 87, 2, 1) 10.5%,
    rgba(245, 120, 2, 1) 16%,
    rgba(245, 140, 2, 1) 17.5%,
    rgba(245, 170, 100, 1) 25%,
    rgba(238, 174, 202, 1) 40%,
    rgba(202, 179, 214, 1) 65%,
    rgba(148, 201, 233, 1) 100%
  );
`;

// Shining badge component
const ShiningBadge = styled.li`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    animation: shine 2s infinite;
    animation-delay: ${props => props.delay || '2s'};
  }
  
  @keyframes shine {
    0% {
      left: -100%;
    }
    80%, 100% {
      left: 150%;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-0 mt-0">
      <header className="bg-white pt-0 mt-0" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
      </header>

      <section className="relative py-12 bg-white sm:py-16 lg:pt-12 lg:pb-20">
        {/* Replace image with gradient background */}
        <GradientBackground />

        <div class="relative py-35 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Helping{" "}
              <WordRotate
                words={["STUDENTS", "ASPIRANTS"]}
                className="text-indigo-600 inline-block align-baseline"
              />{" "}
              to get their dream job
            </h1>

            <button
              onClick={() => navigate("/explore")}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
            >
              Explore
            </button>

            <ul class="flex flex-wrap items-center justify-center mt-6 gap-3">
              {/* Badge 1 - Blue */}
              <ShiningBadge 
                delay="0s" 
                className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300"
              >
                <svg
                  class="w-4 h-4 mr-1.5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-blue-800 sm:text-sm">
                  Weekly new Exams
                </span>
              </ShiningBadge>

              {/* Badge 2 - Green */}
              <ShiningBadge 
                delay="0.5s" 
                className="flex items-center px-3 py-1.5 rounded-full bg-green-100 border border-green-300"
              >
                <svg
                  class="w-4 h-4 mr-1.5 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-green-800 sm:text-sm">
                  More than 50+ exams road map availables
                </span>
              </ShiningBadge>

              {/* Badge 3 - Orange */}
              <ShiningBadge 
                delay="1s" 
                className="flex items-center px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300"
              >
                <svg
                  class="w-4 h-4 mr-1.5 text-amber-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-amber-800 sm:text-sm">
                  Updates according to latest Syllabus
                </span>
              </ShiningBadge>

              {/* Badge 4 - Purple */}
              <ShiningBadge 
                delay="1.5s" 
                className="flex items-center px-3 py-1.5 rounded-full bg-purple-100 border border-purple-300"
              >
                <svg
                  class="w-4 h-4 mr-1.5 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-purple-800 sm:text-sm">
                  By Experts, toppers & teachers
                </span>
              </ShiningBadge>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
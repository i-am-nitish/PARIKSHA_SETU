import React from "react";
import styled from "styled-components";
import WordRotate from "../Wordrotate/WordRotate";
import { useNavigate } from "react-router-dom"; 

// Gradient background component
const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
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

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <header className=" bg-white sm:py-5" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
      </header>

      <section className="relative py-12 bg-white sm:py-16 lg:py-20">
        {/* Replace image with gradient background */}
        <GradientBackground />

        <div class="relative py-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Helping{" "}
              <WordRotate
                words={["students", "aspirants"]}
                className="text-indigo-600 pt-20"
              />{" "}
              to get their dream job
            </h1>

            <p class="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-black-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>

          {/* ✅ Fixed Button */}
          <button
              onClick={() => navigate("/explore")}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
            >
              Explore
            </button>

            {/* <form
              action="#"
              method="POST"
              class="max-w-md mx-auto mt-8 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end"
            >
              <div class="flex-1">
                <label for="" class="sr-only">
                  {" "}
                  Email address{" "}
                </label>
                <div>
                  <input
                    type="email"
                    name=""
                    id=""
                    class="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div class="relative group">
                <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <button
                  type="button"
                  class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Join Now
                </button>
              </div>
            </form> */}

<ul class="flex flex-wrap items-center justify-center mt-6 gap-3">
  {/* Badge 1 - Blue */}
  <li class="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300">
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
  </li>

  {/* Badge 2 - Green */}
  <li class="flex items-center px-3 py-1.5 rounded-full bg-green-100 border border-green-300">
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
  </li>

  {/* Badge 3 - Orange */}
  <li class="flex items-center px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300">
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
  </li>

  {/* Badge 4 - Purple */}
  <li class="flex items-center px-3 py-1.5 rounded-full bg-purple-100 border border-purple-300">
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
  </li>
</ul>
          </div>
        </div>

        {/* <div class="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 lg:mt-20 snap-x">
          <div class="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div class="px-4 py-5 sm:p-5">
                <div class="flex items-start lg:items-center">
                  <a href="#" title="" class="shrink-0">
                    <img
                      class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-1.png"
                      alt=""
                    />
                  </a>

                  <div class="flex-1 ml-4 lg:ml-6">
                    <p class="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" class="">
                        {" "}
                        How a visual artist redefines success in graphic design{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div class="px-4 py-5 sm:p-5">
                <div class="flex items-start lg:items-center">
                  <a href="#" title="" class="shrink-0">
                    <img
                      class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-2.png"
                      alt=""
                    />
                  </a>

                  <div class="flex-1 ml-4 lg:ml-6">
                    <p class="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" class="">
                        {" "}
                        How a visual artist redefines success in graphic design{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div class="px-4 py-5 sm:p-5">
                <div class="flex items-start lg:items-center">
                  <a href="#" title="" class="shrink-0">
                    <img
                      class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png"
                      alt=""
                    />
                  </a>

                  <div class="flex-1 ml-4 lg:ml-6">
                    <p class="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" class="">
                        {" "}
                        How a visual artist redefines success in graphic design{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div class="px-4 py-5 sm:p-5">
                <div class="flex items-start lg:items-center">
                  <a href="#" title="" class="shrink-0">
                    <img
                      class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-4.png"
                      alt=""
                    />
                  </a>

                  <div class="flex-1 ml-4 lg:ml-6">
                    <p class="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" class="">
                        {" "}
                        How a visual artist redefines success in graphic design{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
              <div class="px-4 py-5 sm:p-5">
                <div class="flex items-start lg:items-center">
                  <a href="#" title="" class="shrink-0">
                    <img
                      class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-5.png"
                      alt=""
                    />
                  </a>

                  <div class="flex-1 ml-4 lg:ml-6">
                    <p class="text-xs font-medium text-gray-900 lg:text-sm">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                      <a href="#" title="" class="">
                        {" "}
                        How a visual artist redefines success in graphic design{" "}
                      </a>
                    </p>
                    <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                      April 09, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>


      



    </div>
  );
};

export default Header;
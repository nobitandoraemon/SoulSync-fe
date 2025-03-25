// components/ProfileCard.jsx
import React from "react";
import logo from "../../../assets/logo.png";
import leo from "../../../assets/leo.png";
import { motion } from "motion/react";
import age from "../../../assets/age.png";

const today = new Date();
const todayDate = today.toLocaleDateString();
const currentYear = today.getFullYear();
const Year = todayDate.split('/')[2];
const TestPage = () => {
  return (
    <section className="pt-16 bg-blueGray-50  ">
      <div className=" w-1/3 px-4 mx-auto min-w-[300px]   ">
        <div className="relative flex flex-col min-w-0  break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6  ">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="Profile"
                    src="https://as2.ftcdn.net/v2/jpg/03/75/22/75/1000_F_375227501_pHqFdNqsjQkOVhBe4qWWnzhgTt4cSGV8.jpg"
					          className="shadow-xl rounded-full h-40 w-40 object-cover border-none -mt-16"

                  />
                </div>
              </div>
              <div className="w-full px-4 text-center">
                
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-12 text-blueGray-700">
                Jenna Stones
              </h3>
              <div className="text-sm flex justify-center gap-2 leading-normal mt-0 mb-4 text-blueGray-400 font-bold uppercase ">
              <i class="fi fi-sr-marker"></i>
              Los Angeles, California
              
              </div>
              <div className="mb-2 text-blueGray-600  flex justify-center mb-4 gap-2">
              <i class="fi fi-sr-envelope"></i>
                truonggioitoan@gmail.com
              </div>
              <p>{currentYear}</p>
              <div className="mb-2 text-blueGray-600 flex gap-2 justify-center">
              <div className="w-5">
                <img id="uicons__detail-img" src={leo} alt="" title="" className="img-small" />
              </div>
                Lion
              </div>
              <div className="mb-2 text-blueGray-600 flex gap-2 justify-center">
              <div className="w-5">
              <img id="uicons__detail-img" src={age} alt="" title="" className="img-small" />
              </div>
                20
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Turn impossible things into possible things. Turn extraordinary things into normal things
                  </p>
                </div>
              </div>
            </div>
            

			<div className="w-full mt-2 rounded-sm carousel">
				<div id={`item1-1`} className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
						className="w-full"
					/>
				</div>
				<div id={`item2-2`} className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
						className="w-full"
					/>
				</div>
				<div id={`item3-3`} className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
						className="w-full"
					/>
				</div>
				<div id={`item4-4`} className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
						className="w-full"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full gap-4 py-2">
				<a href={`#item1-1`} className="text-black text-lg">
					1
				</a>
				<a href={`#item2-2`} className="text-black text-lg">
					2
				</a>
				<a href={`#item3-3`} className="text-black text-lg">
					3
				</a>
				<a href={`#item4-4`} className="text-black text-lg">
					4
				</a>
			</div>
          </div>
        </div>
      </div>

      <footer className="relative pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with{" "}
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Notus JS
                </a>{" "}
                by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default TestPage;
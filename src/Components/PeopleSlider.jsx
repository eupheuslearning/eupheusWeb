import React from "react";
import p1 from "../assets/about/Asset 18@3x.png";
import p2 from "../assets/about/Asset 19@3x.png";
import p3 from "../assets/about/Asset 20@3x.png";
import p4 from "../assets/about/Asset 21@3x.png";
import p5 from "../assets/about/Asset 22@3x.png";
import p6 from "../assets/about/Asset 23@3x.png";
import p7 from "../assets/about/Asset 24@3x.png";
import p8 from "../assets/about/Asset 25@3x.png";
import p9 from "../assets/about/Asset 26@3x.png";
import p10 from "../assets/about/Asset 27@3x.png";
import p11 from "../assets/about/Asset 28@3x.png";
import p12 from "../assets/about/Asset 29@3x.png";
import p13 from "../assets/about/Asset 30@3x.png";
import p14 from "../assets/about/Asset 31@3x.png";
import p15 from "../assets/about/Asset 32@3x.png";
import p16 from "../assets/about/Asset 33@3x.png";
import { Tween, ScrollTrigger, Reveal } from "react-gsap";
import { gsap } from "gsap";

const PeopleSlider = () => {
  return (
    <ScrollTrigger
      start="220px center"
      end="1000px center"
      scrub={2}
      markers
      pin={true}
    >
      <Tween
        to={{
          x: "-100%",
        }}
      >
        <div className="flex w-fit gap-8 people px-4 h-[500px] overflow-hidden">
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p1}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className="font-bold sm:text-base text-xs text-gray-800">
              DR. REENA PURI
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              VP, ISFO OLYMPIAD
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p2}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              RANJIT SINGH
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">VP, HUMAN</span>
            <span className=" text-gray-600 sm:text-sm text-xs">RESOURCES</span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[35vw]">
            <img
              src={p3}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              SUKHVINDER SINGH
            </span>
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              BHATIA
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              VP, FINANCE & ACCOUNTS
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p4}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              PRITAM KUMAR
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              VP, HEAD TECHNOLOGY
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p5}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              LOKESH DARIRA
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              AVP TRAINING
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p6}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              RAJIV RAZDAN
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              VP DIGITAL SALES (INDIA)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p7}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              RAJIV BAJAJ
            </span>
            <span className=" text-gray-600 text-sm">VP DIGITAL</span>
            <span className="text-gray-600 sm:text-sm text-xs">
              SALES (EXPORTS)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p8}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              RAJNEESH GREWAL
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              VP SALES (NORTH
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              INDIA & MIDDLE EAST)
            </span>
          </div>

          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p9}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              VIJAY PAUL
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              VP SALES (PUNJAB,
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">HP1, J&K)</span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p10}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              ABHIJIT SEN
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">VP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (WEST BENGAL, NEPAL)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p11}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              ASHOK YELIGETI
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">VP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (MAHARASHTRA)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p12}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              LALIT KUMAR
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">AVP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (DELHI NCR AND GCC)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[35vw]">
            <img
              src={p13}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              NEHAL ATHER
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">AVP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (AP2,TELANGANA, KERALA)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <img
              src={p14}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              RAMESH K
            </span>
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              CHOUDHARY
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">VP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (NORTHEAST)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[35vw]">
            <img
              src={p15}
              className="border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto"
              alt=""
            />
            <span className=" font-bold sm:text-base text-xs text-gray-800">
              RANJAN K SAMAL
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">VP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (ODISHA, CHHATTISGARH)
            </span>
          </div>
          <div className="flex flex-col items-center sm:w-[16vw] w-[30vw]">
            <div className="border-2 border-solid border-[#f5ab1d]">
              <img src={p16} className="p-2 grayscale w-full h-auto" alt="" />
            </div>

            <span className=" font-bold sm:text-base text-xs text-gray-800">
              SANJEET MUKHERJEE
            </span>
            <span className=" text-gray-600 sm:text-sm text-xs">VP SALES</span>
            <span className=" text-gray-600 sm:text-sm text-xs">
              (UP, UK4, BIHAR, JH)
            </span>
          </div>
        </div>
      </Tween>
    </ScrollTrigger>
  );
};

export default PeopleSlider;

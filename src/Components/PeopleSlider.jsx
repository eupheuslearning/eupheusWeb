import React, { useEffect } from "react";
import { LinkedIn } from "@mui/icons-material";
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
import p17 from "../assets/about/k.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PeopleSlider = () => {
  const sliderRef = React.useRef(null);
  // useEffect(() => {
  //   const el = sliderRef.current;
  //   gsap.fromTo(
  //     el,
  //     { translateX: 0 },
  //     {
  //       translateX: "-100%",
  //       scrollTrigger: {
  //         trigger: el,

  //         pin: true,
  //         start: "100px center",
  //         end: "1200px bottom",
  //         scrub: 2,
  //       },
  //     }
  //   );
  // }, []);
  return (
    <div className="flex w-[100vw] justify-center items-center">
      <div
        ref={sliderRef}
        className="grid sm:grid-cols-4 sm:grid-rows-5 grid-cols-2 grid-rows-9 w-fit gap-8 people sm:px-4 px-1 h-fit overflow-hidden"
      >
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <span className=" text-gray-600 sm:text-sm text-xs">
            & SPECIAL PROJECTS
          </span>
          <a href="https://www.linkedin.com/in/reena-puri-phd-86a42159">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/ranjitsingh6/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/sukhvinder-singh-bhatia-424884b6/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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

          <a href="https://www.linkedin.com/in/pritam-kumar-71861b57">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
          <div className="border-2 border-solid border-[#f5ab1d]">
            <img
              src={p17}
              className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
              alt=""
            />
          </div>

          <span className=" font-bold sm:text-base text-xs text-gray-800">
            Kapil Chanana
          </span>
          <span className=" text-gray-600 sm:text-sm text-xs">
            Chief Growth Officer
          </span>
          <a href="https://www.linkedin.com/in/kapil-chanana-3903834/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/lokesh-darira-48677550/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/rajivrazdan/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/rajiv-bajaj-ba0974a/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/rajneesh-grewal-b2983720/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/vijay-paul-322b5054/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/abhijit-sen-57010537/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
            (MAHARASHTRA, CHHATTISGARH)
          </span>
          <a href="https://www.linkedin.com/in/ashok-yeligeti-286425aa/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/lalit-sharma-9807b520/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
            (AP,TELANGANA, KERALA)
          </span>
          <a href="https://www.linkedin.com/in/nehal-ather-97284981/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <span className=" text-gray-600 sm:text-sm text-xs">(NORTHEAST)</span>
          <a href="https://www.linkedin.com/in/ramesh-choudhury-3b886b8/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
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
          <a href="https://www.linkedin.com/in/ranjan-samal-061105151/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
          <div className="border-2 border-solid border-[#f5ab1d]">
            <img src={p16} className="p-2 grayscale w-full h-auto" alt="" />
          </div>

          <span className=" font-bold sm:text-base text-xs text-gray-800">
            SANJEET MUKHERJEE
          </span>
          <span className=" text-gray-600 sm:text-sm text-xs">VP SALES</span>
          <span className=" text-gray-600 sm:text-sm text-xs">
            (UP, UK, BIHAR, JH)
          </span>
          <a href="https://www.linkedin.com/in/sanjeetmukherjee/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeopleSlider;

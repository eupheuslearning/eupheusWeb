import React, { useEffect, useState } from "react";
import { LinkedIn } from "@mui/icons-material";
import p1 from "../assets/about/people_image/reena_puri.png";
import p2 from "../assets/about/people_image/ranjit_singh.png";
import p3 from "../assets/about/people_image/sukhvinder_bhatia.png";
import p4 from "../assets/about/people_image/pritam.png";
import p5 from "../assets/about/people_image/lokesh_d.png";
import p6 from "../assets/about/people_image/rajiv_razdan.png";
import p7 from "../assets/about/people_image/rajiv_bajaj.png";
import p8 from "../assets/about/people_image/rajnish_grewal.png";
import p9 from "../assets/about/people_image/vijay_paul.png";

import p10 from "../assets/about/people_image/abhijit_sen.png";
import p11 from "../assets/about/people_image/ashok_yeligeti.png";
import p12 from "../assets/about/people_image/lalit_sharma.png";
import p13 from "../assets/about/people_image/nehal_ather.png";
import p14 from "../assets/about/people_image/ramesh_chaudhary.png";
import p15 from "../assets/about/people_image/ranjan_samwal.png";
import p16 from "../assets/about/people_image/sanjeet_mukharjee.png";
import p17 from "../assets/about/people_image/kapil_chanana.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const PeopleSlider = () => {
  const sliderRef = React.useRef(null);
  const [width, setWidth] = useState(null);
  // useEffect(() => {
  //   const el = sliderRef.current;
  //   // gsap.fromTo(
  //   //   el,
  //   //   { translateX: 0 },
  //   //   {
  //   //     translateX: "-100%",
  //   //     scrollTrigger: {
  //   //       trigger: el,
  //   //       pin: true,
  //   //       start: "top top",
  //   //       end: "bottom center",
  //   //       scrub: 2,
  //   //       markers: true,
  //   //     },
  //   //   }
  //   // );
  //   // gsap.fromTo(
  //   //   el.
  //   //   {
  //   //     opacity: 0,
  //   //     y: -20,
  //   //   },
  //   //   {
  //   //     opacity: 1,
  //   //     y: 0,
  //   //     scrollTrigger: {
  //   //       trigger: el.querySelector(".ref"),
  //   //       start: "top top",
  //   //       end: "bottom center",
  //   //       scrub: true,
  //   //     },
  //   //   }
  //   // );
  // }, []);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    changeWidth();
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Controller>
      <Scene duration={5000} triggerHook={0.3} pin>
        <Timeline
          target={
            <div
              ref={sliderRef}
              className="flex w-fit justify-center items-center relative"
            >
              <div className="flex w-fit gap-8 people sm:px-4 px-1 h-fit overflow-hidden">
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p10}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    ABHIJIT SEN
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    Vice President - SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    ( WEST BENGAL, NEPAL )
                  </span>
                  <a
                    href="https://www.linkedin.com/in/abhijit-sen-57010537/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p11}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    ASHOK YELIGETI
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    Vice President - SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    ( MAHARASHTRA, CHHATTISGARH, KARNATAKA )
                  </span>

                  <a
                    href="https://www.linkedin.com/in/ashok-yeligeti-286425aa/"
                    className="absolute top-[100%]"
                  >
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
                  <a
                    href="https://www.linkedin.com/in/kapil-chanana-3903834/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p12}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    LALIT KUMAR
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    AVP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    ( East Delhi, Kerala )
                  </span>
                  <a
                    href="https://www.linkedin.com/in/lalit-sharma-9807b520/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p5}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    LOKESH DARIRA
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    AVP TRAINING
                  </span>
                  <a
                    href="https://www.linkedin.com/in/lokesh-darira-48677550/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p13}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    NEHAL ATHER
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    AVP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    ( AP & TELANGANA )
                  </span>
                  <a
                    href="https://www.linkedin.com/in/nehal-ather-97284981/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <img
                    src={p4}
                    className="border-2 p-2 border-solid border-[#f5ab1d] w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                    alt=""
                  />
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    PRITAM KUMAR
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    HEAD - TECHNOLOGY
                  </span>

                  <a
                    href="https://www.linkedin.com/in/pritam-kumar-71861b57"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p7}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    RAJIV BAJAJ
                  </span>
                  <span className=" text-gray-600 text-sm">
                    VP DIGITAL SALES
                  </span>
                  <span className="text-gray-600 sm:text-sm text-xs">
                    (EXPORTS)
                  </span>
                  <a
                    href="https://www.linkedin.com/in/rajiv-bajaj-ba0974a/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p6}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    RAJIV RAZDAN
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    VP DIGITAL SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    (INDIA)
                  </span>
                  <a
                    href="https://www.linkedin.com/in/rajivrazdan/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <img
                    src={p8}
                    className="border-2 p-2 border-solid border-[#f5ab1d] w-full  2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                    alt=""
                  />
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    RAJNEESH GREWAL
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    VP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    ( NORTH INDIA & MIDDLE EAST )
                  </span>

                  <a
                    href="https://www.linkedin.com/in/rajneesh-grewal-b2983720/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p14}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    RAMESH K
                  </span>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    CHOUDHARY
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    AVP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    ( NORTHEAST )
                  </span>
                  <a
                    href="https://www.linkedin.com/in/ramesh-choudhury-3b886b8/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p15}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    RANJAN K SAMAL
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    AVP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    ( ODISHA )
                  </span>
                  <a
                    href="https://www.linkedin.com/in/ranjan-samal-061105151/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p2}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    RANJIT SINGH
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    VP, HUMAN
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    RESOURCES
                  </span>
                  <a
                    href="https://www.linkedin.com/in/ranjitsingh6/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p1}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>
                  <span className="font-bold sm:text-base text-xs text-gray-800">
                    DR. REENA PURI
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    VP, ISFO OLYMPIAD & SPECIAL PROJECTS
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs"></span>
                  <a
                    href="https://www.linkedin.com/in/reena-puri-phd-86a42159"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <div className="border-2 border-solid border-[#f5ab1d]">
                    <img
                      src={p16}
                      className="p-2 grayscale w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                      alt=""
                    />
                  </div>

                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    SANJEET MUKHERJEE
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    AVP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    ( UP, UK, BIHAR, JH )
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sanjeetmukherjee/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <img
                    src={p3}
                    className="border-2 p-2 border-solid border-[#f5ab1d]  w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                    alt=""
                  />
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    SUKHVINDER SINGH
                  </span>
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    BHATIA
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    VP, FINANCE & ACCOUNTS
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sukhvinder-singh-bhatia-424884b6/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:w-[16vw] w-[40vw]">
                  <img
                    src={p9}
                    className="border-2 p-2 border-solid border-[#f5ab1d] w-full 2xl:h-[19rem] sm:h-[13.5rem] h-[9.5rem]"
                    alt=""
                  />
                  <span className=" font-bold sm:text-base text-xs text-gray-800">
                    VIJAY PAUL
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs">
                    VP SALES
                  </span>
                  <span className=" text-gray-600 sm:text-sm text-xs text-center">
                    (PUNJAB, HIMACHAL PRADESH, J&K, TAMIL NADU)
                  </span>

                  <a
                    href="https://www.linkedin.com/in/vijay-paul-322b5054/"
                    className="absolute top-[100%]"
                  >
                    <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
                      <LinkedIn /> <span>Linkedin</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          }
        >
          <Tween to={{ x: width < 430 ? "-90%" : "-75%" }}></Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
};

export default PeopleSlider;
